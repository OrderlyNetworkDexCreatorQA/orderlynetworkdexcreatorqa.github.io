import{a as t}from"./utils-G74gwOzy.js";import{f as o}from"./index-C6VdyfiR.js";import{S as r,L as s,B as a,C as i}from"./orderly--O9ic2GV.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],f=t("flask-conical",c),u={dedupingInterval:r,revalidateOnFocus:!1},d="orderly-supported-mainnet-chains-demo";function p(e){const n=s(e);return n.environment==="mainnet"?{key:d,network:"mainnet",fetcher:a}:{key:`orderly-supported-testnet-chains-demo:${n.environment}`,network:"testnet",fetcher:i}}function C(){const e=p(),n=o(e.key,e.fetcher,u);return{currentChains:n.data??[],network:e.network,chainsLoading:n.isLoading}}export{f as F,C as u};
