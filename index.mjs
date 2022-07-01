// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-float32vector-like@esm/index.mjs";import{ndarray as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sdot@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function r(r,s){if(!e(r))throw new TypeError(t("invalid argument. First argument must be a one-dimensional ndarray containing single-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float32Array). Value: `%s`.",r));if(!e(s))throw new TypeError(t("invalid argument. Second argument must be a one-dimensional ndarray containing single-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float32Array). Value: `%s`.",s));if(r.length!==s.length)throw new RangeError(t("invalid argument. Arrays must be the same length. First argument length: `%u`. Second argument length: `%u`.",r.length,s.length));return n(r.length,r.data,r.strides[0],r.offset,s.data,s.strides[0],s.offset)}export{r as default};
//# sourceMappingURL=index.mjs.map
