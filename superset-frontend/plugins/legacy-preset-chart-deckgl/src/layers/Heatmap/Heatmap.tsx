/* eslint-disable theme-colors/no-literal-colors */
/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { HeatmapLayer, Position, Color, Layer } from 'deck.gl/typed';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  t,
  getSequentialSchemeRegistry,
  Datasource,
  QueryFormData,
  JsonObject,
  HandlerFunction,
  usePrevious,
} from '@superset-ui/core';
import { isEqual } from 'lodash';
import { commonLayerProps } from '../common';
import sandboxedEval from '../../utils/sandbox';
import { hexToRGB } from '../../utils/colors';
import { getLayerType } from '../../factory';
import TooltipRow from '../../TooltipRow';
import fitViewport, { Viewport } from '../../utils/fitViewport';
import {
  DeckGLContainerHandle,
  DeckGLContainerStyledWrapper,
} from '../../DeckGLContainer';
import { TooltipProps } from '../../components/Tooltip';
import ColorBar from '../../components/ColorBar';
import { Point } from '../../types';
// Get the weight from object o and set tolerance1, and 2 to avoid the null
const weight: number[] = [];
function setTooltipContent(o: JsonObject) {
  const { data } = o.layer.props[Reflect.ownKeys(o.layer.props)[13]];
  function findWeightByCoordinate(
    data: any,
    targetCoordinate: number[],
    tolerance1 = 0.000005,
    tolerance2 = 0.00002,
  ) {
    // eslint-disable-next-line no-restricted-syntax
    for (const item of data) {
      const [lon, lat] = item.position;
      if (
        Math.abs(lon - targetCoordinate[0]) < tolerance1 &&
        Math.abs(lat - targetCoordinate[1]) < tolerance1
      ) {
        return item.weight;
      }
      if (
        Math.abs(lon - targetCoordinate[0]) < tolerance2 &&
        Math.abs(lat - targetCoordinate[1]) < tolerance2
      ) {
        return item.weight;
      }
    }
    return null;
  }
  const weight = findWeightByCoordinate(data, o.coordinate);
  return (
    weight && (
      <div className="deckgl-tooltip">
        <TooltipRow label={t('Altitude')} value={` ${weight}`} />
      </div>
    )
  );
}

export const getLayer: getLayerType<unknown> = (
  formData,
  payload,
  onAddFilter,
  setTooltip,
) => {
  const fd = formData;
  const {
    intensity = 1,
    radius_pixels: radiusPixels = 30,
    aggregation = 'SUM',
    js_data_mutator: jsFnMutator,
    linear_color_scheme: colorScheme1,
  } = fd;
  let data = payload.data.features;

  if (jsFnMutator) {
    // Applying user defined data mutator if defined
    const jsFnMutatorFunction = sandboxedEval(fd.js_data_mutator);
    data = jsFnMutatorFunction(data);
  }
  const colorScheme2 = 'schemeBuGn';
  const colorScale1 = getSequentialSchemeRegistry()
    ?.get(colorScheme1)
    ?.createLinearScale([0, 6]);
  const colorRange1 = colorScale1
    ?.range()
    ?.map(color => hexToRGB(color))
    ?.reverse() as Color[];

  const colorScale2 = getSequentialSchemeRegistry()
    ?.get(colorScheme2)
    ?.createLinearScale([0, 6]);
  const colorRange2 = colorScale2
    ?.range()
    ?.map(color => hexToRGB(color))
    ?.reverse() as Color[];

  const firstLayer = new HeatmapLayer({
    id: `heatmp-pos-layer-${fd.slice_id}` as const,
    data,
    intensity,
    radiusPixels,
    colorRange: colorRange1,
    aggregation: aggregation.toUpperCase(),
    threshold: 0.1,
    getPosition: (d: { position: Position; weight: number }) => d.position,
    getWeight: (d: { position: number[]; weight: number }): number => {
      weight.push(d.weight);
      return d.weight > 0 ? d.weight : 0;
    },
    ...commonLayerProps(fd, setTooltip, setTooltipContent),
  });
  const secondLayer = new HeatmapLayer({
    id: `heatmp-neg-layer-${fd.slice_id}` as const,
    data,
    intensity,
    radiusPixels,
    colorRange: colorRange2,
    aggregation: aggregation.toUpperCase(),
    threshold: 0.1,
    getPosition: (d: { position: Position; weight: number }) => d.position,
    getWeight: (d: { position: number[]; weight: number }) => {
      weight.push(d.weight);
      return d.weight < 0 ? -d.weight : 0;
    },
    ...commonLayerProps(fd, setTooltip, setTooltipContent),
  });

  return [firstLayer, secondLayer]; // Instantiate the Legend component with the props and add type annotation
};

function getPoints(data: any[]) {
  return data.map(d => d.position);
}

interface getPointsType {
  (data: JsonObject[]): Point[];
}
type deckGLComponentProps = {
  datasource: Datasource;
  formData: QueryFormData;
  height: number;
  onAddFilter: HandlerFunction;
  payload: JsonObject;
  setControlValue: () => void;
  viewport: Viewport;
  width: number;
};
// set the gradient color for colorbar
const gradientStops = [
  { color: '#0000FF', value: 0 },
  { color: '#0048B6', value: 20 },
  { color: '#00B648', value: 40 },
  { color: '#00FF00', value: 50 },
  { color: '#ffbf00', value: 60 },
  { color: '#ff7f00', value: 80 },
  { color: 'red', value: 100 },
];
function createDeckGLComponent(
  getLayer: getLayerType<unknown>,
  getPoints: getPointsType,
) {
  // Higher order component
  return memo((props: deckGLComponentProps) => {
    const containerRef = useRef<DeckGLContainerHandle>();
    const prevFormData = usePrevious(props.formData);
    const prevPayload = usePrevious(props.payload);
    const getAdjustedViewport = () => {
      const { width, height, formData } = props;
      if (formData.autozoom) {
        return fitViewport(props.viewport, {
          width,
          height,
          points: getPoints(props.payload.data.features),
        }) as Viewport;
      }
      return props.viewport;
    };
    const [weights, setWeights] = useState<number[]>([]);

    const [viewport, setViewport] = useState(getAdjustedViewport());

    const setTooltip = useCallback((tooltip: TooltipProps['tooltip']) => {
      const { current } = containerRef;
      if (current) {
        current?.setTooltip(tooltip);
      }
    }, []);

    const computeLayer = useCallback(
      (props: deckGLComponentProps) => {
        const { formData, payload, onAddFilter } = props;
        return getLayer(formData, payload, onAddFilter, setTooltip) as Layer;
      },
      [setTooltip],
    );

    const [layer, setLayer] = useState(computeLayer(props));

    useEffect(() => {
      // Only recompute the layer if anything BUT the viewport has changed
      const prevFdNoVP = { ...prevFormData, viewport: null };
      const currFdNoVP = { ...props.formData, viewport: null };
      if (!isEqual(prevFdNoVP, currFdNoVP) || prevPayload !== props.payload) {
        setLayer(computeLayer(props));
        setWeights(
          props.payload.data.features.map((d: { weight: number }) => d.weight),
        );
      }
    }, [computeLayer, prevFormData, prevPayload, props]);

    const { formData, payload, setControlValue, height, width } = props;

    const [min, setMin] = useState(Number.MAX_VALUE);
    const [max, setMax] = useState(Number.MIN_VALUE);
    // update the min and max value of the colorbar when data set changed
    useEffect(() => {
      if (weights.length > 0) {
        const newMin = Math.min(...weights);
        const newMax = Math.max(...weights);
        setMin(newMin);
        setMax(newMax);
      }
    }, [weights]);

    return (
      <div style={{ position: 'relative' }}>
        <DeckGLContainerStyledWrapper
          ref={containerRef}
          mapboxApiAccessToken={payload.data.mapboxApiKey}
          viewport={viewport}
          layers={[layer]}
          mapStyle={formData.mapbox_style}
          setControlValue={setControlValue}
          width={width}
          height={height}
          onViewportChange={setViewport}
        />
        <ColorBar gradientStops={gradientStops} max={max} min={min} />
      </div>
    );
  });
}

export default createDeckGLComponent(getLayer, getPoints);
