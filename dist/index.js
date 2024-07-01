"use strict";var n=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var R=n(function(s,F){
var _=/[\uDC00-\uDFFF]/,f=/[\uD800-\uDBFF]/;function o(a,e,h){var v,i,t,c,u,r;for(v=a.length,r=v-1;r>=0;r--)i=a[r],c=r,u=i,r>0&&_.test(i)&&(t=a[r-1],f.test(t)&&(u=t+i,r-=1)),e.call(h,u,c,a);return a}F.exports=o
});var E=R();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
