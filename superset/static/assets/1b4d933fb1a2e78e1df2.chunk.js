"use strict";(globalThis.webpackChunksuperset=globalThis.webpackChunksuperset||[]).push([[5656],{54070:(e,t,a)=>{a.d(t,{w:()=>r}),a(67294);var s=a(58593),l=a(83379),n=a(61988),i=a(70917);const r=({user:e,date:t})=>{const a=(0,i.tZ)("span",{className:"no-wrap"},t);if(e){const t=(0,l.Z)(e),r=(0,n.t)("Modified by: %s",t);return(0,i.tZ)(s.u,{title:r,placement:"bottom"},a)}return a}},27989:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(67294),l=a(51995),n=a(61988),i=a(35932),r=a(74069),o=a(4715),d=a(34858),c=a(60972),u=a(70917);const p=l.iK.div`
  display: block;
  color: ${({theme:e})=>e.colors.grayscale.base};
  font-size: ${({theme:e})=>e.typography.sizes.s}px;
`,h=l.iK.div`
  padding-bottom: ${({theme:e})=>2*e.gridUnit}px;
  padding-top: ${({theme:e})=>2*e.gridUnit}px;

  & > div {
    margin: ${({theme:e})=>e.gridUnit}px 0;
  }

  &.extra-container {
    padding-top: 8px;
  }

  .confirm-overwrite {
    margin-bottom: ${({theme:e})=>2*e.gridUnit}px;
  }

  .input-container {
    display: flex;
    align-items: center;

    label {
      display: flex;
      margin-right: ${({theme:e})=>2*e.gridUnit}px;
    }

    i {
      margin: 0 ${({theme:e})=>e.gridUnit}px;
    }
  }

  input,
  textarea {
    flex: 1 1 auto;
  }

  textarea {
    height: 160px;
    resize: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${({theme:e})=>e.colors.grayscale.light1};
  }

  textarea,
  input[type='text'],
  input[type='number'] {
    padding: ${({theme:e})=>1.5*e.gridUnit}px
      ${({theme:e})=>2*e.gridUnit}px;
    border-style: none;
    border: 1px solid ${({theme:e})=>e.colors.grayscale.light2};
    border-radius: ${({theme:e})=>e.gridUnit}px;

    &[name='name'] {
      flex: 0 1 auto;
      width: 40%;
    }

    &[name='sqlalchemy_uri'] {
      margin-right: ${({theme:e})=>3*e.gridUnit}px;
    }
  }
`,m=({resourceName:e,resourceLabel:t,passwordsNeededMessage:a,confirmOverwriteMessage:l,onModelImport:m,show:g,onHide:y,passwordFields:b=[],setPasswordFields:Z=(()=>{}),sshTunnelPasswordFields:v=[],setSSHTunnelPasswordFields:f=(()=>{}),sshTunnelPrivateKeyFields:w=[],setSSHTunnelPrivateKeyFields:S=(()=>{}),sshTunnelPrivateKeyPasswordFields:_=[],setSSHTunnelPrivateKeyPasswordFields:k=(()=>{})})=>{const[x,T]=(0,s.useState)(!0),[N,P]=(0,s.useState)({}),[$,C]=(0,s.useState)(!1),[D,E]=(0,s.useState)(!1),[H,F]=(0,s.useState)([]),[A,I]=(0,s.useState)(!1),[O,R]=(0,s.useState)(),[U,B]=(0,s.useState)({}),[K,M]=(0,s.useState)({}),[z,L]=(0,s.useState)({}),V=()=>{F([]),Z([]),P({}),C(!1),E(!1),I(!1),R(""),f([]),S([]),k([]),B({}),M({}),L({})},{state:{alreadyExists:q,passwordsNeeded:j,sshPasswordNeeded:W,sshPrivateKeyNeeded:Y,sshPrivateKeyPasswordNeeded:X},importResource:J}=(0,d.PW)(e,t,(e=>{R(e)}));(0,s.useEffect)((()=>{Z(j),j.length>0&&I(!1)}),[j,Z]),(0,s.useEffect)((()=>{C(q.length>0),q.length>0&&I(!1)}),[q,C]),(0,s.useEffect)((()=>{f(W),W.length>0&&I(!1)}),[W,f]),(0,s.useEffect)((()=>{S(Y),Y.length>0&&I(!1)}),[Y,S]),(0,s.useEffect)((()=>{k(X),X.length>0&&I(!1)}),[X,k]);return x&&g&&T(!1),(0,u.tZ)(r.default,{name:"model",className:"import-model-modal",disablePrimaryButton:0===H.length||$&&!D||A,onHandledPrimaryAction:()=>{var e;(null==(e=H[0])?void 0:e.originFileObj)instanceof File&&(I(!0),J(H[0].originFileObj,N,U,K,z,D).then((e=>{e&&(V(),m())})))},onHide:()=>{T(!0),y(),V()},primaryButtonName:$?(0,n.t)("Overwrite"):(0,n.t)("Import"),primaryButtonType:$?"danger":"primary",width:"750px",show:g,title:(0,u.tZ)("h4",null,(0,n.t)("Import %s",t))},(0,u.tZ)(h,null,(0,u.tZ)(o.gq,{name:"modelFile",id:"modelFile",accept:".yaml,.json,.yml,.zip",fileList:H,onChange:e=>{F([{...e.file,status:"done"}])},onRemove:e=>(F(H.filter((t=>t.uid!==e.uid))),!1),customRequest:()=>{},disabled:A},(0,u.tZ)(i.Z,{loading:A},(0,n.t)("Select file")))),O&&(0,u.tZ)(c.Z,{errorMessage:O,showDbInstallInstructions:b.length>0||v.length>0||w.length>0||_.length>0}),(()=>{if(0===b.length&&0===v.length&&0===w.length&&0===_.length)return null;const e=[...new Set([...b,...v,...w,..._])];return(0,u.tZ)(s.Fragment,null,(0,u.tZ)("h5",null,(0,n.t)("Database passwords")),(0,u.tZ)(p,null,a),e.map((e=>(0,u.tZ)(s.Fragment,null,(null==b?void 0:b.indexOf(e))>=0&&(0,u.tZ)(h,{key:`password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},(0,n.t)("%s PASSWORD",e.slice(10)),(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`password-${e}`,autoComplete:`password-${e}`,type:"password",value:N[e],onChange:t=>P({...N,[e]:t.target.value})})),(null==v?void 0:v.indexOf(e))>=0&&(0,u.tZ)(h,{key:`ssh_tunnel_password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},(0,n.t)("%s SSH TUNNEL PASSWORD",e.slice(10)),(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`ssh_tunnel_password-${e}`,autoComplete:`ssh_tunnel_password-${e}`,type:"password",value:U[e],onChange:t=>B({...U,[e]:t.target.value})})),(null==w?void 0:w.indexOf(e))>=0&&(0,u.tZ)(h,{key:`ssh_tunnel_private_key-for-${e}`},(0,u.tZ)("div",{className:"control-label"},(0,n.t)("%s SSH TUNNEL PRIVATE KEY",e.slice(10)),(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("textarea",{name:`ssh_tunnel_private_key-${e}`,autoComplete:`ssh_tunnel_private_key-${e}`,value:K[e],onChange:t=>M({...K,[e]:t.target.value})})),(null==_?void 0:_.indexOf(e))>=0&&(0,u.tZ)(h,{key:`ssh_tunnel_private_key_password-for-${e}`},(0,u.tZ)("div",{className:"control-label"},(0,n.t)("%s SSH TUNNEL PRIVATE KEY PASSWORD",e.slice(10)),(0,u.tZ)("span",{className:"required"},"*")),(0,u.tZ)("input",{name:`ssh_tunnel_private_key_password-${e}`,autoComplete:`ssh_tunnel_private_key_password-${e}`,type:"password",value:z[e],onChange:t=>L({...z,[e]:t.target.value})}))))))})(),$?(0,u.tZ)(s.Fragment,null,(0,u.tZ)(h,null,(0,u.tZ)("div",{className:"confirm-overwrite"},l),(0,u.tZ)("div",{className:"control-label"},(0,n.t)('Type "%s" to confirm',(0,n.t)("OVERWRITE"))),(0,u.tZ)("input",{id:"overwrite",type:"text",onChange:e=>{var t,a;const s=null!=(t=null==(a=e.currentTarget)?void 0:a.value)?t:"";E(s.toUpperCase()===(0,n.t)("OVERWRITE"))}}))):null)}},52438:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var s=a(75049),l=a(51995),n=a(61988),i=a(93185),r=a(31069),o=a(67294),d=a(16550),c=a(73727),u=a(15926),p=a.n(u),h=a(40768),m=a(34858),g=a(19259),y=a(77775),b=a(17198),Z=a(32228),v=a(93139),f=a(38703),w=a(86074),S=a(14114),_=a(58593),k=a(70707),x=a(34581),T=a(79789),N=a(8272),P=a(27989),$=a(86057),C=a(22318),D=a(85931),E=a(33228),H=a(49238),F=a(9875),A=a(74069),I=a(70917);const O=({dataset:e,onHide:t,onDuplicate:a})=>{const[s,l]=(0,o.useState)(!1),[i,r]=(0,o.useState)(!1),[d,c]=(0,o.useState)(""),u=()=>{a(d)};return(0,o.useEffect)((()=>{c(""),l(null!==e)}),[e]),(0,I.tZ)(A.default,{show:s,onHide:t,title:(0,n.t)("Duplicate dataset"),disablePrimaryButton:i,onHandledPrimaryAction:u,primaryButtonName:(0,n.t)("Duplicate")},(0,I.tZ)(H.lX,{htmlFor:"duplicate"},(0,n.t)("New dataset name")),(0,I.tZ)(F.II,{type:"text",id:"duplicate",autoComplete:"off",value:d,onChange:e=>{var t;const a=null!=(t=e.target.value)?t:"";c(a),r(""===a)},onPressEnter:u}))};var R=a(28216),U=a(54070),B=a(12);const K=(0,s.I)().get("dataset.delete.related"),M=l.iK.div`
  align-items: center;
  display: flex;

  svg {
    margin-right: ${({theme:e})=>e.gridUnit}px;
  }
`,z=l.iK.div`
  color: ${({theme:e})=>e.colors.grayscale.base};

  .disabled {
    svg,
    i {
      &:hover {
        path {
          fill: ${({theme:e})=>e.colors.grayscale.light1};
        }
      }
    }
    color: ${({theme:e})=>e.colors.grayscale.light1};
    .ant-menu-item:hover {
      color: ${({theme:e})=>e.colors.grayscale.light1};
      cursor: default;
    }
    &::after {
      color: ${({theme:e})=>e.colors.grayscale.light1};
    }
  }
`,L=(0,S.ZP)((({addDangerToast:e,addSuccessToast:t,user:a})=>{const s=(0,d.k6)(),{state:{loading:l,resourceCount:u,resourceCollection:S,bulkSelectEnabled:H},hasPerm:F,fetchData:A,toggleBulkSelect:L,refreshData:V}=(0,m.Yi)("dataset",(0,n.t)("dataset"),e),[q,j]=(0,o.useState)(null),[W,Y]=(0,o.useState)(null),[X,J]=(0,o.useState)(null),[G,Q]=(0,o.useState)(!1),[ee,te]=(0,o.useState)([]),[ae,se]=(0,o.useState)(!1),[le,ne]=(0,o.useState)([]),[ie,re]=(0,o.useState)([]),[oe,de]=(0,o.useState)([]),ce=(0,R.v9)((e=>{var t,a;return(null==(t=e.common)||null==(a=t.conf)?void 0:a.PREVENT_UNSAFE_DEFAULT_URLS_ON_DATASET)||!1})),ue=F("can_write"),pe=F("can_write"),he=F("can_write"),me=F("can_duplicate"),ge=F("can_export")&&(0,i.cr)(i.TT.VERSIONED_EXPORT),ye=E.dY,be=(0,o.useCallback)((({id:t})=>{r.Z.get({endpoint:`/api/v1/dataset/${t}`}).then((({json:e={}})=>{const t=e.result.columns.map((e=>{const{certification:{details:t="",certified_by:a=""}={}}=JSON.parse(e.extra||"{}")||{};return{...e,certification_details:t||"",certified_by:a||"",is_certified:t||a}}));e.result.columns=[...t],Y(e.result)})).catch((()=>{e((0,n.t)("An error occurred while fetching dataset related data"))}))}),[e]),Ze=e=>{const t=e.map((({id:e})=>e));(0,Z.Z)("dataset",t,(()=>{se(!1)})),se(!0)},ve=(0,o.useMemo)((()=>[{Cell:({row:{original:{kind:e}}})=>"physical"===e?(0,I.tZ)(_.u,{id:"physical-dataset-tooltip",title:(0,n.t)("Physical dataset")},(0,I.tZ)(k.Z.DatasetPhysical,null)):(0,I.tZ)(_.u,{id:"virtual-dataset-tooltip",title:(0,n.t)("Virtual dataset")},(0,I.tZ)(k.Z.DatasetVirtual,null)),accessor:"kind_icon",disableSortBy:!0,size:"xs",id:"id"},{Cell:({row:{original:{extra:e,table_name:t,description:a,explore_url:s}}})=>{let l;l=ce?(0,I.tZ)(c.rU,{to:s},t):(0,I.tZ)(D.m,{to:s},t);try{const t=JSON.parse(e);return(0,I.tZ)(M,null,(null==t?void 0:t.certification)&&(0,I.tZ)(T.Z,{certifiedBy:t.certification.certified_by,details:t.certification.details,size:"l"}),(null==t?void 0:t.warning_markdown)&&(0,I.tZ)($.Z,{warningMarkdown:t.warning_markdown,size:"l"}),l,a&&(0,I.tZ)(N.Z,{tooltip:a,viewBox:"0 -1 24 24"}))}catch{return l}},Header:(0,n.t)("Name"),accessor:"table_name"},{Cell:({row:{original:{kind:e}}})=>"physical"===e?(0,n.t)("Physical"):(0,n.t)("Virtual"),Header:(0,n.t)("Type"),accessor:"kind",disableSortBy:!0,size:"md"},{Header:(0,n.t)("Database"),accessor:"database.database_name",size:"lg"},{Header:(0,n.t)("Schema"),accessor:"schema",size:"lg"},{accessor:"database",disableSortBy:!0,hidden:!0},{Cell:({row:{original:{owners:e=[]}}})=>(0,I.tZ)(x.Z,{users:e}),Header:(0,n.t)("Owners"),id:"owners",disableSortBy:!0,size:"lg"},{Cell:({row:{original:{changed_on_delta_humanized:e,changed_by:t}}})=>(0,I.tZ)(U.w,{date:e,user:t}),Header:(0,n.t)("Last modified"),accessor:"changed_on_delta_humanized",size:"xl"},{accessor:"sql",hidden:!0,disableSortBy:!0},{Cell:({row:{original:e}})=>{const t=e.owners.map((e=>e.id)).includes(a.userId)||(0,C.i5)(a);return ue||pe||ge||me?(0,I.tZ)(z,{className:"actions"},pe&&(0,I.tZ)(_.u,{id:"delete-action-tooltip",title:(0,n.t)("Delete"),placement:"bottom"},(0,I.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{return t=e,r.Z.get({endpoint:`/api/v1/dataset/${t.id}/related_objects`}).then((({json:e={}})=>{j({...t,chart_count:e.charts.count,dashboard_count:e.dashboards.count})})).catch((0,h.v$)((e=>(0,n.t)("An error occurred while fetching dataset related data: %s",e))));var t}},(0,I.tZ)(k.Z.Trash,null))),ge&&(0,I.tZ)(_.u,{id:"export-action-tooltip",title:(0,n.t)("Export"),placement:"bottom"},(0,I.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>Ze([e])},(0,I.tZ)(k.Z.Share,null))),ue&&(0,I.tZ)(_.u,{id:"edit-action-tooltip",title:t?(0,n.t)("Edit"):(0,n.t)("You must be a dataset owner in order to edit. Please reach out to a dataset owner to request modifications or edit access."),placement:"bottomRight"},(0,I.tZ)("span",{role:"button",tabIndex:0,className:t?"action-button":"disabled",onClick:t?()=>be(e):void 0},(0,I.tZ)(k.Z.EditAlt,null))),me&&"virtual"===e.kind&&(0,I.tZ)(_.u,{id:"duplicate-action-tooltop",title:(0,n.t)("Duplicate"),placement:"bottom"},(0,I.tZ)("span",{role:"button",tabIndex:0,className:"action-button",onClick:()=>{J(e)}},(0,I.tZ)(k.Z.Copy,null)))):null},Header:(0,n.t)("Actions"),id:"actions",hidden:!ue&&!pe&&!me,disableSortBy:!0},{accessor:B.J.changed_by,hidden:!0}]),[ue,pe,ge,be,me,a]),fe=(0,o.useMemo)((()=>[{Header:(0,n.t)("Name"),key:"search",id:"table_name",input:"search",operator:v.p.contains},{Header:(0,n.t)("Type"),key:"sql",id:"sql",input:"select",operator:v.p.datasetIsNullOrEmpty,unfilteredLabel:"All",selects:[{label:(0,n.t)("Virtual"),value:!1},{label:(0,n.t)("Physical"),value:!0}]},{Header:(0,n.t)("Database"),key:"database",id:"database",input:"select",operator:v.p.relationOneMany,unfilteredLabel:"All",fetchSelects:(0,h.tm)("dataset","database",(0,h.v$)((e=>(0,n.t)("An error occurred while fetching datasets: %s",e)))),paginate:!0},{Header:(0,n.t)("Schema"),key:"schema",id:"schema",input:"select",operator:v.p.equals,unfilteredLabel:"All",fetchSelects:(0,h.wk)("dataset","schema",(0,h.v$)((e=>(0,n.t)("An error occurred while fetching schema values: %s",e)))),paginate:!0},{Header:(0,n.t)("Owner"),key:"owner",id:"owners",input:"select",operator:v.p.relationManyMany,unfilteredLabel:"All",fetchSelects:(0,h.tm)("dataset","owners",(0,h.v$)((e=>(0,n.t)("An error occurred while fetching dataset owner values: %s",e))),a),paginate:!0},{Header:(0,n.t)("Certified"),key:"certified",id:"id",urlDisplay:"certified",input:"select",operator:v.p.datasetIsCertified,unfilteredLabel:(0,n.t)("Any"),selects:[{label:(0,n.t)("Yes"),value:!0},{label:(0,n.t)("No"),value:!1}]},{Header:(0,n.t)("Modified by"),key:"changed_by",id:"changed_by",input:"select",operator:v.p.relationOneMany,unfilteredLabel:(0,n.t)("All"),fetchSelects:(0,h.tm)("dataset","changed_by",(0,h.v$)((e=>(0,n.t)("An error occurred while fetching dataset datasource values: %s",e))),a),paginate:!0}]),[a]),we={activeChild:"Datasets",name:(0,n.t)("Datasets")},Se=[];return(pe||ge)&&Se.push({name:(0,n.t)("Bulk select"),onClick:L,buttonStyle:"secondary"}),he&&(Se.push({name:(0,I.tZ)(o.Fragment,null,(0,I.tZ)("i",{className:"fa fa-plus"})," ",(0,n.t)("Dataset")," "),onClick:()=>{s.push("/dataset/add/")},buttonStyle:"primary"}),(0,i.cr)(i.TT.VERSIONED_EXPORT)&&Se.push({name:(0,I.tZ)(_.u,{id:"import-tooltip",title:(0,n.t)("Import datasets"),placement:"bottomRight"},(0,I.tZ)(k.Z.Import,null)),buttonStyle:"link",onClick:()=>{Q(!0)}})),we.buttons=Se,(0,I.tZ)(o.Fragment,null,(0,I.tZ)(w.Z,we),q&&(0,I.tZ)(b.Z,{description:(0,I.tZ)(o.Fragment,null,(0,I.tZ)("p",null,(0,n.t)("The dataset %s is linked to %s charts that appear on %s dashboards. Are you sure you want to continue? Deleting the dataset will break those objects.",q.table_name,q.chart_count,q.dashboard_count)),K&&(0,I.tZ)(K,{dataset:q})),onConfirm:()=>{q&&(({id:a,table_name:s})=>{r.Z.delete({endpoint:`/api/v1/dataset/${a}`}).then((()=>{V(),j(null),t((0,n.t)("Deleted: %s",s))}),(0,h.v$)((t=>e((0,n.t)("There was an issue deleting %s: %s",s,t)))))})(q)},onHide:()=>{j(null)},open:!0,title:(0,n.t)("Delete Dataset?")}),W&&(0,I.tZ)(y.W,{datasource:W,onDatasourceSave:V,onHide:()=>{Y(null)},show:!0}),(0,I.tZ)(O,{dataset:X,onHide:()=>{J(null)},onDuplicate:t=>{null===X&&e((0,n.t)("There was an issue duplicating the dataset.")),r.Z.post({endpoint:"/api/v1/dataset/duplicate",jsonPayload:{base_model_id:null==X?void 0:X.id,table_name:t}}).then((()=>{J(null),V()}),(0,h.v$)((t=>e((0,n.t)("There was an issue duplicating the selected datasets: %s",t)))))}}),(0,I.tZ)(g.Z,{title:(0,n.t)("Please confirm"),description:(0,n.t)("Are you sure you want to delete the selected datasets?"),onConfirm:a=>{r.Z.delete({endpoint:`/api/v1/dataset/?q=${p().encode(a.map((({id:e})=>e)))}`}).then((({json:e={}})=>{V(),t(e.message)}),(0,h.v$)((t=>e((0,n.t)("There was an issue deleting the selected datasets: %s",t)))))}},(a=>{const s=[];return pe&&s.push({key:"delete",name:(0,n.t)("Delete"),onSelect:a,type:"danger"}),ge&&s.push({key:"export",name:(0,n.t)("Export"),type:"primary",onSelect:Ze}),(0,I.tZ)(v.Z,{className:"dataset-list-view",columns:ve,data:S,count:u,pageSize:E.IV,fetchData:A,filters:fe,loading:l,initialSort:ye,bulkActions:s,bulkSelectEnabled:H,disableBulkSelect:L,addDangerToast:e,addSuccessToast:t,refreshData:V,renderBulkSelectCopy:e=>{const{virtualCount:t,physicalCount:a}=e.reduce(((e,t)=>("physical"===t.original.kind?e.physicalCount+=1:"virtual"===t.original.kind&&(e.virtualCount+=1),e)),{virtualCount:0,physicalCount:0});return e.length?t&&!a?(0,n.t)("%s Selected (Virtual)",e.length,t):a&&!t?(0,n.t)("%s Selected (Physical)",e.length,a):(0,n.t)("%s Selected (%s Physical, %s Virtual)",e.length,a,t):(0,n.t)("0 Selected")}})})),(0,I.tZ)(P.Z,{resourceName:"dataset",resourceLabel:(0,n.t)("dataset"),passwordsNeededMessage:E.iX,confirmOverwriteMessage:E.mI,addDangerToast:e,addSuccessToast:t,onModelImport:()=>{Q(!1),V(),t((0,n.t)("Dataset imported"))},show:G,onHide:()=>{Q(!1)},passwordFields:ee,setPasswordFields:te,sshTunnelPasswordFields:le,setSSHTunnelPasswordFields:ne,sshTunnelPrivateKeyFields:ie,setSSHTunnelPrivateKeyFields:re,sshTunnelPrivateKeyPasswordFields:oe,setSSHTunnelPrivateKeyPasswordFields:de}),ae&&(0,I.tZ)(f.Z,null))}))},83379:(e,t,a)=>{function s(e){return e?`${e.first_name} ${e.last_name}`:""}a.d(t,{Z:()=>s})}}]);
//# sourceMappingURL=1b4d933fb1a2e78e1df2.chunk.js.map