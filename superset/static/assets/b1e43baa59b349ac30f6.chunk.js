"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[9483],{89483:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var a=i(51995),r=i(5364),o=i(67294),l=i(1090),n=i(74448),s=i(70917);const u=(0,a.iK)(n.un)`
  display: flex;
  align-items: center;
  overflow-x: auto;

  & .ant-tag {
    margin-right: 0;
  }
`,v=a.iK.div`
  display: flex;
  height: 100%;
  max-width: 100%;
  width: 100%;
  & > div,
  & > div:hover {
    ${({validateStatus:e,theme:t})=>{var i;return e&&`border-color: ${null==(i=t.colors[e])?void 0:i.base}`}}
  }
`;function d(e){var t;const{setDataMask:i,setHoveredFilter:a,unsetHoveredFilter:n,setFocusedFilter:d,unsetFocusedFilter:h,setFilterActive:c,width:g,height:f,filterState:m,inputRef:p,isOverflowingFilterBar:w=!1}=e,F=(0,o.useCallback)((e=>{const t=e&&e!==r.vM;i({extraFormData:t?{time_range:e}:{},filterState:{value:t?e:void 0}})}),[i]);return(0,o.useEffect)((()=>{F(m.value)}),[m.value]),null!=(t=e.formData)&&t.inView?(0,s.tZ)(u,{width:g,height:f},(0,s.tZ)(v,{ref:p,validateStatus:m.validateStatus,onFocus:d,onBlur:h,onMouseEnter:a,onMouseLeave:n},(0,s.tZ)(l.ZP,{value:m.value||r.vM,name:"time_range",onChange:F,onOpenPopover:()=>c(!0),onClosePopover:()=>{c(!1),n(),h()},isOverflowingFilterBar:w}))):null}},74448:(e,t,i)=>{i.d(t,{Am:()=>s,h2:()=>o,jp:()=>n,un:()=>l});var a=i(51995),r=i(4591);const o=0,l=a.iK.div`
  min-height: ${({height:e})=>e}px;
  width: ${({width:e})=>e===o?"100%":`${e}px`};
`,n=(0,a.iK)(r.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,s=a.iK.div`
  color: ${({theme:e,status:t="error"})=>{var i;return null==(i=e.colors[t])?void 0:i.base}};
`}}]);
//# sourceMappingURL=b1e43baa59b349ac30f6.chunk.js.map