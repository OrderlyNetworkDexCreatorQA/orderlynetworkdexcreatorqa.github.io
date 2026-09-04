import{a_ as c,aZ as f,aB as p,aJ as m}from"./components-4Jd9UPxM.js";import"./index-mKddaBAm.js";import"./preload-helper-ckwbz45p.js";import"./dayjs.min-Ci0JVq4p.js";import"./dijkstra-BjYW_4FG.js";import"./browser-ponyfill-BJAns2X_.js";const d=c`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,t,i,n){var r=arguments.length,e=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(o,t,i,n);else for(var a=o.length-1;a>=0;a--)(l=o[a])&&(e=(r<3?l(e):r>3?l(t,i,e):l(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e};let s=class extends f{render(){return p`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};s.styles=d;s=u([m("w3m-transactions-view")],s);export{s as W3mTransactionsView};
