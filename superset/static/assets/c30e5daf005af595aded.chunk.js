"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[4572],{24572:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var l=a(73126),n=a(55786),s=a(88889),u=a(61988),i=a(67294),o=a(4715),r=a(74448),h=a(70917);function d(t){const{data:e,formData:a,height:d,width:c,setDataMask:v,setHoveredFilter:g,unsetHoveredFilter:p,setFocusedFilter:f,unsetFocusedFilter:m,setFilterActive:w,filterState:F,inputRef:b}=t,{defaultValue:S}=a,[Z,M]=(0,i.useState)(null!=S?S:[]),k=t=>{const e=(0,n.Z)(t);M(e);const a={};e.length&&(a.granularity_sqla=e[0]),v({extraFormData:a,filterState:{value:e.length?e:null}})};(0,i.useEffect)((()=>{k(null!=S?S:null)}),[JSON.stringify(S)]),(0,i.useEffect)((()=>{var t;k(null!=(t=F.value)?t:null)}),[JSON.stringify(F.value)]);const C=(e||[]).filter((t=>t.dtype===s.Z.TEMPORAL)),x=0===C.length?(0,u.t)("No time columns"):(0,u.tn)("%s option","%s options",C.length,C.length),y={};F.validateMessage&&(y.extra=(0,h.tZ)(r.Am,{status:F.validateStatus},F.validateMessage));const A=C.map((t=>{const{column_name:e,verbose_name:a}=t;return{label:null!=a?a:e,value:e}}));return(0,h.tZ)(r.un,{height:d,width:c},(0,h.tZ)(r.jp,(0,l.Z)({validateStatus:F.validateStatus},y),(0,h.tZ)(o.Ph,{allowClear:!0,value:Z,placeholder:x,onChange:k,onBlur:m,onFocus:f,onMouseEnter:g,onMouseLeave:p,ref:b,options:A,onDropdownVisibleChange:w})))}},74448:(t,e,a)=>{a.d(e,{Am:()=>o,h2:()=>s,jp:()=>i,un:()=>u});var l=a(51995),n=a(4591);const s=0,u=l.iK.div`
  min-height: ${({height:t})=>t}px;
  width: ${({width:t})=>t===s?"100%":`${t}px`};
`,i=(0,l.iK)(n.Z)`
  &.ant-row.ant-form-item {
    margin: 0;
  }
`,o=l.iK.div`
  color: ${({theme:t,status:e="error"})=>{var a;return null==(a=t.colors[e])?void 0:a.base}};
`}}]);
//# sourceMappingURL=c30e5daf005af595aded.chunk.js.map