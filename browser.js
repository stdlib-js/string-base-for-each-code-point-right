// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e=/[\uDC00-\uDFFF]/,t=/[\uD800-\uDBFF]/;return function(o,n,f){var i,u,r,d,l;for(l=o.length-1;l>=0;l--)r=l,d=i=o[l],l>0&&e.test(i)&&(u=o[l-1],t.test(u)&&(d=u+i,l-=1)),n.call(f,d,r,o);return o}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).forEachCodePointRight=t();
//# sourceMappingURL=browser.js.map
