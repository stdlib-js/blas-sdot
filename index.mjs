// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float32vector-like@v0.2.2-esm/index.mjs";import{ndarray as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sdot@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function r(r,o){if(!t(r))throw new TypeError(s("0GBDA",r));if(!t(o))throw new TypeError(s("0GBDB",o));if(r.length!==o.length)throw new RangeError(s("0GB3S",r.length,o.length));return e(r.length,r.data,r.strides[0],r.offset,o.data,o.strides[0],o.offset)}export{r as default};
//# sourceMappingURL=index.mjs.map
