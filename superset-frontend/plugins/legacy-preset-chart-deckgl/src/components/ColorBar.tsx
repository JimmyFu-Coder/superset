/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable theme-colors/no-literal-colors */
import React, { CSSProperties } from 'react';
/**
 * Author: Jimmy Fu
 * Description: This is the color bar that is displayed on the right side of the map. It is used to show the color gradient and the corresponding values.
 * @param min number
 * @param max number
 * @returns number[]
 */
const calculateDistributionPoints = (min: number, max: number) => {
  const points = [];
  points.push(min);
  points.push(min / 2);
  points.push(0);
  points.push(max / 2);
  points.push(max);
  return points.reverse();
};

const ColorBar = ({ gradientStops, max, min }: any) => {
  const gradient = gradientStops
    .map(
      (stop: { color: string; value: number }) =>
        `${stop.color} ${stop.value}%`,
    )
    .join(', ');
  const distributionPoints = calculateDistributionPoints(min, max);
  const style: { bar: CSSProperties; label: CSSProperties } = {
    bar: {
      position: 'absolute',
      top: '50px',
      left: '50px',
      width: '20px',
      height: '80%',
      backgroundImage: `linear-gradient(to top, ${gradient})`, // Gradient now goes top to bottom
      borderRadius: '5px',
      border: '1px solid #000',
    },
    label: {
      position: 'absolute',
      left: '60px',
      marginLeft: '12px',
      fontSize: '12px',
    },
  };

  return (
    <div>
      {distributionPoints.map((point, index) => (
        <div
          key={`point-${index}`}
          style={{ ...style.label, top: `${19 * index + 8}%` }}
        >
          {point.toFixed(2)}
        </div>
      ))}
      <div style={style.bar} />
    </div>
  );
};
export default ColorBar;
