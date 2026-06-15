import{v as s,x as c,z as f}from"./localizedRoute-MDwE-4VG.js";import{c as a}from"./if-defined-BMjS2JlF.js";import"./index-DdpKMnk7.js";import"./index-CW68vc4o.js";import"./clsx-BDjZpD9r.js";import"./i18n-Bjtw9Mfj.js";import"./jsx-runtime-D_zvdyIk.js";import"./utils-C37eK--X.js";import"./index-DoZFbk36.js";import"./components-fMiyrNvb.js";import"./index-CWrda31G.js";import"./dayjs.min-DgYdusO-.js";import"./index-DIaKlA1L.js";import"./index-ChXsvBBK.js";import"./index-D7XccYRd.js";import"./index-Deem28be.js";const d=s`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,i,e,r){var n=arguments.length,t=n<3?i:r===null?r=Object.getOwnPropertyDescriptor(i,e):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,i,e,r);else for(var m=o.length-1;m>=0;m--)(l=o[m])&&(t=(n<3?l(t):n>3?l(i,e,t):l(i,e))||t);return n>3&&t&&Object.defineProperty(i,e,t),t};let p=class extends c{render(){return f`
      <wui-flex flexDirection="column" .padding=${["0","m","m","m"]} gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};p.styles=d;p=u([a("w3m-transactions-view")],p);export{p as W3mTransactionsView};
