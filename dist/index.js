"use strict";var s=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var i=s(function(d,t){
var a=require('@stdlib/assert-is-float32vector-like/dist'),o=require('@stdlib/blas-base-sdot/dist').ndarray,n=require('@stdlib/error-tools-fmtprodmsg/dist');function u(r,e){if(!a(r))throw new TypeError(n('0GBDA',r));if(!a(e))throw new TypeError(n('0GBDB',e));if(r.length!==e.length)throw new RangeError(n('0GB3S',r.length,e.length));return o(r.length,r.data,r.strides[0],r.offset,e.data,e.strides[0],e.offset)}t.exports=u
});var g=i();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
