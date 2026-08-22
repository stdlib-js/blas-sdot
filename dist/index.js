"use strict";var S=function(s,a){return function(){try{return a||s((a={exports:{}}).exports,a),a.exports}catch(r){throw a=0,r}}};var T=S(function(N,E){"use strict";var w=require("@stdlib/assert-is-float32ndarray-like"),V=require("@stdlib/assert-is-negative-integer").isPrimitive,k=require("@stdlib/math-base-special-fast-min"),F=require("@stdlib/array-base-without"),I=require("@stdlib/ndarray-base-numel"),j=require("@stdlib/ndarray-base-normalize-index"),z=require("@stdlib/ndarray-base-maybe-broadcast-arrays"),b=require("@stdlib/ndarray-base-ndarraylike2ndarray"),q=require("@stdlib/ndarray-iter-stacks"),D=require("@stdlib/ndarray-empty"),x=require("@stdlib/blas-base-sdot").ndarray,n=require("@stdlib/string-format");function R(s,a){var r,o,i,v,y,c,u,f,e,t,m,g,p,d,l,h;if(!w(s))throw new TypeError(n("invalid argument. First argument must be an ndarray containing single-precision floating-point numbers. Value: `%s`.",s));if(!w(a))throw new TypeError(n("invalid argument. Second argument must be an ndarray containing single-precision floating-point numbers. Value: `%s`.",a));if(e=b(s),t=b(a),o=e.shape,i=t.shape,o.length<1)throw new TypeError("invalid argument. First argument must have at least one dimension.");if(i.length<1)throw new TypeError("invalid argument. Second argument must have at least one dimension.");if(arguments.length>2){if(r=arguments[2],!V(r))throw new TypeError(n("invalid argument. Third argument must be a negative integer. Value: `%s`.",r))}else r=-1;if(p=k(o.length,i.length)-1,r=j(r,p),r===-1)throw new RangeError(n("invalid argument. Third argument must be a value on the interval: [%d,%d]. Value: `%d`.",-p,-1,arguments[2]));if(d=o[r],i[r]!==d)throw new RangeError(n("invalid argument. The size of the contracted dimension must be the same for both input ndarrays. Dim(%s,%d) = %d. Dim(%s,%d) = %d.","x",r,d,"y",r,i[r]));try{f=z([e,t])}catch(B){throw new Error(n("invalid arguments. Input ndarrays must be broadcast compatible. Shape(%s) = (%s). Shape(%s) = (%s).","x",o.join(","),"y",i.join(",")))}if(e=f[0],t=f[1],v=F(e.shape,r),u=D(v,{dtype:e.dtype,order:e.order}),v.length===0)return l=x(d,e.data,e.strides[0],e.offset,t.data,t.strides[0],t.offset),u.iset(l),u;for(y=q(e,[r]),c=q(t,[r]),h=0;h<I(v);h++)m=y.next().value,g=c.next().value,l=x(d,m.data,m.strides[0],m.offset,g.data,g.strides[0],g.offset),u.iset(h,l);return u}E.exports=R});var A=T();module.exports=A;
/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
