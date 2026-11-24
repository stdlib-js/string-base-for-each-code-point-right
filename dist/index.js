"use strict";var n=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var h=n(function(s,R){
var _=/[\uDC00-\uDFFF]/,f=/[\uD800-\uDBFF]/;function o(a,e,t){var c,i,u,F,v,r;for(c=a.length,r=c-1;r>=0;r--)i=a[r],F=r,v=i,r>0&&_.test(i)&&(u=a[r-1],f.test(u)&&(v=u+i,r-=1)),e.call(t,v,F,a);return a}R.exports=o
});var E=h();module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
