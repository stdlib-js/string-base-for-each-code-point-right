// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
var t=/[\uDC00-\uDFFF]/,u=/[\uD800-\uDBFF]/;function e(e,r,a){var F,l,n,D,f;for(f=e.length-1;f>=0;f--)n=f,D=F=e[f],f>0&&t.test(F)&&(l=e[f-1],u.test(l)&&(D=l+F,f-=1)),r.call(a,D,n,e);return e}export{e as default};
//# sourceMappingURL=index.mjs.map
