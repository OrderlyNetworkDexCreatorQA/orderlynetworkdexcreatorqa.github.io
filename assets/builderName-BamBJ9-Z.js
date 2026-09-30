const i=/^[A-Za-z0-9 ._-]{3,30}$/,n=/order/i;function s(t){return n.test(t.trim())}function E(t,r=3){const e=t.trim();return e.length>=r&&i.test(e)&&!s(e)}export{s as c,E as i};
