"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var t=s(function(x,a){
var v=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),m=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/stats-strided-smeanlipw/dist').ndarray;function p(e){var r=e[0];return d(v(r,0),o(r),q(r,0),m(r))}a.exports=p
});var f=require("path").join,l=require('@stdlib/utils-try-require/dist'),c=require('@stdlib/assert-is-error/dist'),g=t(),i,u=l(f(__dirname,"./native.js"));c(u)?i=g:i=u;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
