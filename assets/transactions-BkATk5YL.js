import{b2 as c,b1 as f,aE as p,aM as m}from"./components-D3frubZn.js";import"./index-CeStS-fb.js";import"./preload-helper-ckwbz45p.js";import"./dayjs.min-CMrNtzaF.js";import"./dijkstra-BjYW_4FG.js";import"./browser-ponyfill-Dv8rXIhP.js";const d=c`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var u=function(o,t,i,n){var r=arguments.length,e=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(o,t,i,n);else for(var s=o.length-1;s>=0;s--)(l=o[s])&&(e=(r<3?l(e):r>3?l(t,i,e):l(t,i))||e);return r>3&&e&&Object.defineProperty(t,i,e),e};let a=class extends f{render(){return p`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="3">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};a.styles=d;a=u([m("w3m-transactions-view")],a);export{a as W3mTransactionsView};
