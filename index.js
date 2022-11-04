// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).sdot=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var s,c,l,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(t,e)||f.call(t,e)?(s=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=s):t[e]=r.value),l="get"in r,p="set"in r,c&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(t,e,r.get),p&&a&&a.call(t,e,r.set),t};var s=e;function c(t,e,r){s(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function l(t){return"boolean"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return p&&"symbol"==typeof Symbol.toStringTag}var y=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function d(t,e){return null!=t&&g.call(t,e)}var b="function"==typeof Symbol?Symbol.toStringTag:"";var _=h()?function(t){var e,r,n;if(null==t)return y.call(t);r=t[b],e=d(t,b);try{t[b]=void 0}catch(e){return y.call(t)}return n=y.call(t),e?t[b]=r:delete t[b],n}:function(t){return y.call(t)},m=Boolean.prototype.toString;var v=h();function w(t){return"object"==typeof t&&(t instanceof Boolean||(v?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===_(t)))}function O(t){return l(t)||w(t)}function j(){return new Function("return this;")()}c(O,"isPrimitive",l),c(O,"isObject",w);var A="object"==typeof self?self:null,E="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof I?I:null;function S(t){if(arguments.length){if(!l(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return j()}if(A)return A;if(E)return E;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}var U=S();function T(t,e,r){s(t,e,{configurable:!1,enumerable:!1,get:r})}var N={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function F(t){return Math.abs(t)}function R(t,e){return e&&(2===t||3===t)}function V(t,e){return e&&(1===t||3===t)}function B(t,e,r){var n,i,o,a,u;for(n=t.length,i=r,o=r,u=0;u<n;u++){if(0===t[u])return[r,r];(a=e[u])>0?o+=a*(t[u]-1):a<0&&(i+=a*(t[u]-1))}return[i,o]}function L(t){return t.re}function C(t){return t.im}function k(t){return"string"==typeof t}c(B,"assign",(function(t,e,r,n){var i,o,a,u,f;for(i=t.length,o=r,a=r,f=0;f<i;f++){if(0===t[f])return n[0]=r,n[1]=r,n;(u=e[f])>0?a+=u*(t[f]-1):u<0&&(o+=u*(t[f]-1))}return n[0]=o,n[1]=a,n}));var M=String.prototype.valueOf;var P=h();function D(t){return"object"==typeof t&&(t instanceof String||(P?function(t){try{return M.call(t),!0}catch(t){return!1}}(t):"[object String]"===_(t)))}function G(t){return k(t)||D(t)}function Y(t){return"number"==typeof t}function $(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function J(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+$(i):$(i)+t,n&&(t="-"+t)),t}c(G,"isPrimitive",k),c(G,"isObject",D);var W=String.prototype.toLowerCase,X=String.prototype.toUpperCase;function Z(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!Y(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=J(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=J(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===X.call(t.specifier)?X.call(r):W.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function q(t){return"string"==typeof t}var z=Math.abs,H=String.prototype.toLowerCase,K=String.prototype.toUpperCase,Q=String.prototype.replace,tt=/e\+(\d)$/,et=/e-(\d)$/,rt=/^(\d+)$/,nt=/^(\d+)e/,it=/\.0$/,ot=/\.0*e/,at=/(\..*[^0])0*e/;function ut(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!Y(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":z(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=Q.call(r,at,"$1e"),r=Q.call(r,ot,"e"),r=Q.call(r,it,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=Q.call(r,tt,"e+0$1"),r=Q.call(r,et,"e-0$1"),t.alternate&&(r=Q.call(r,rt,"$1."),r=Q.call(r,nt,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===K.call(t.specifier)?K.call(r):H.call(r)}function ft(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function st(t,e,r){var n=e-t.length;return n<0?t:t=r?t+ft(n):ft(n)+t}var ct=String.fromCharCode,lt=isNaN,pt=Array.isArray;function ht(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function yt(t){var e,r,n,i,o,a,u,f,s;if(!pt(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",u=1,f=0;f<t.length;f++)if(q(n=t[f]))a+=n;else{if(e=void 0!==n.precision,!(n=ht(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,s=0;s<r.length;s++)switch(i=r.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,lt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,lt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Z(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!lt(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=lt(o)?String(n.arg):ct(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=ut(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=J(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=st(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var gt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function dt(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function bt(t){var e,r,n,i;for(r=[],i=0,n=gt.exec(t);n;)(e=t.slice(i,gt.lastIndex-n[0].length)).length&&r.push(e),r.push(dt(n)),i=gt.lastIndex,n=gt.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function _t(t){return"string"==typeof t}function mt(t){var e,r,n;if(!_t(t))throw new TypeError(mt("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=bt(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return yt.apply(null,r)}var vt=/[-\/\\^$*+?.()|[\]{}]/g;var wt=/./,Ot=S(),jt=Ot.document&&Ot.document.childNodes,At=Int8Array;function Et(){return/^\s*function\s*([^(]*)/i}var It=/^\s*function\s*([^(]*)/i;c(Et,"REGEXP",It);var xt=Array.isArray?Array.isArray:function(t){return"[object Array]"===_(t)};function St(t){return null!==t&&"object"==typeof t}function Ut(t){var e,r,n,i;if(("Object"===(r=_(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=It.exec(n.toString()))return e[1]}return St(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}c(St,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!xt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(St));var Tt="function"==typeof wt||"object"==typeof At||"function"==typeof jt?function(t){return Ut(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Ut(t).toLowerCase():e};function Nt(t){return"function"===Tt(t)}var Ft=RegExp.prototype.exec;var Rt=h();function Vt(t){return"object"==typeof t&&(t instanceof RegExp||(Rt?function(t){try{return Ft.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===_(t)))}function Bt(t,e,r){if(!k(t))throw new TypeError(mt("invalid argument. First argument must be a string. Value: `%s`.",t));if(k(e))e=function(t){var e,r;if(!k(t))throw new TypeError(mt("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(vt,"\\$&"):(e=(e=t.substring(1,r)).replace(vt,"\\$&"),t=t[0]+e+t.substring(r))}(e),e=new RegExp(e,"g");else if(!Vt(e))throw new TypeError(mt("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!k(r)&&!Nt(r))throw new TypeError(mt("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return t.replace(e,r)}var Lt={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Ct="function"==typeof Uint8Array;var kt="function"==typeof Uint8Array?Uint8Array:null;var Mt,Pt="function"==typeof Uint8Array?Uint8Array:void 0;Mt=function(){var t,e,r;if("function"!=typeof kt)return!1;try{e=new kt(e=[1,3.14,-3.14,256,257]),r=e,t=(Ct&&r instanceof Uint8Array||"[object Uint8Array]"===_(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Pt:function(){throw new Error("not implemented")};var Dt=Mt,Gt="function"==typeof Uint16Array;var Yt="function"==typeof Uint16Array?Uint16Array:null;var $t,Jt="function"==typeof Uint16Array?Uint16Array:void 0;$t=function(){var t,e,r;if("function"!=typeof Yt)return!1;try{e=new Yt(e=[1,3.14,-3.14,65536,65537]),r=e,t=(Gt&&r instanceof Uint16Array||"[object Uint16Array]"===_(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Jt:function(){throw new Error("not implemented")};var Wt,Xt={uint16:$t,uint8:Dt};(Wt=new Xt.uint16(1))[0]=4660;var Zt=52===new Xt.uint8(Wt.buffer)[0],qt="function"==typeof ArrayBuffer;var zt="function"==typeof Float64Array;var Ht="function"==typeof Float64Array?Float64Array:null;var Kt,Qt="function"==typeof Float64Array?Float64Array:void 0;Kt=function(){var t,e,r;if("function"!=typeof Ht)return!1;try{e=new Ht([1,3.14,-3.14,NaN]),r=e,t=(zt&&r instanceof Float64Array||"[object Float64Array]"===_(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?Qt:function(){throw new Error("not implemented")};var te=Kt,ee="function"==typeof ArrayBuffer?ArrayBuffer:null;var re,ne="function"==typeof ArrayBuffer?ArrayBuffer:void 0;re=function(){var t,e,r,n;if("function"!=typeof ee)return!1;try{r=new ee(16),n=r,(t=(qt&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===_(n))&&"function"==typeof ee.isView)&&((e=new te(r))[0]=-3.14,e[1]=NaN,t=t&&ee.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?ne:function(){throw new Error("not implemented")};var ie=re,oe="function"==typeof DataView;var ae="function"==typeof DataView?DataView:null;var ue,fe="function"==typeof DataView?DataView:void 0;ue=function(){var t,e,r,n;if("function"!=typeof ae)return!1;try{r=new ie(24),e=new ae(r,8),n=e,(t=(oe&&n instanceof DataView||"[object DataView]"===_(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?fe:function(){throw new Error("not implemented")};var se=ue,ce="function"==typeof BigInt?BigInt:void 0,le=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function pe(){return le.slice()}function he(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function ye(t,e,r){s(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function ge(t){return Object.keys(Object(t))}var de,be=void 0!==Object.keys;function _e(t){return"[object Arguments]"===_(t)}de=function(){return _e(arguments)}();var me=de;function ve(t){return"number"==typeof t}var we=Number,Oe=we.prototype.toString;var je=h();function Ae(t){return"object"==typeof t&&(t instanceof we||(je?function(t){try{return Oe.call(t),!0}catch(t){return!1}}(t):"[object Number]"===_(t)))}function Ee(t){return ve(t)||Ae(t)}function Ie(t){return t!=t}function xe(t){return ve(t)&&Ie(t)}function Se(t){return Ae(t)&&Ie(t.valueOf())}function Ue(t){return xe(t)||Se(t)}c(Ee,"isPrimitive",ve),c(Ee,"isObject",Ae),c(Ue,"isPrimitive",xe),c(Ue,"isObject",Se);var Te=Number.POSITIVE_INFINITY,Ne=we.NEGATIVE_INFINITY,Fe=Math.floor;function Re(t){return Fe(t)===t}function Ve(t){return t<Te&&t>Ne&&Re(t)}function Be(t){return ve(t)&&Ve(t)}function Le(t){return Ae(t)&&Ve(t.valueOf())}function Ce(t){return Be(t)||Le(t)}c(Ce,"isPrimitive",Be),c(Ce,"isObject",Le);var ke=Object.prototype.propertyIsEnumerable;var Me=!ke.call("beep","0");function Pe(t,e){var r;return null!=t&&(!(r=ke.call(t,e))&&Me&&G(t)?!xe(e=+e)&&Be(e)&&e>=0&&e<t.length:r)}var De=me?_e:function(t){return null!==t&&"object"==typeof t&&!xt(t)&&"number"==typeof t.length&&Re(t.length)&&t.length>=0&&t.length<=4294967295&&d(t,"callee")&&!Pe(t,"callee")},Ge=Array.prototype.slice;var Ye=Pe((function(){}),"prototype"),$e=!Pe({toString:null},"toString");function Je(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Re(t.length)&&t.length>=0&&t.length<=9007199254740991}function We(t,e,r){var n,i;if(!Je(t)&&!k(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!Be(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Ue(e)){for(;i<n;i++)if(Ue(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function Xe(t){return t.constructor&&t.constructor.prototype===t}var Ze=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],qe="undefined"==typeof window?void 0:window;var ze=function(){var t;if("undefined"===Tt(qe))return!1;for(t in qe)try{-1===We(Ze,t)&&d(qe,t)&&null!==qe[t]&&"object"===Tt(qe[t])&&Xe(qe[t])}catch(t){return!0}return!1}(),He="undefined"!=typeof window;var Ke,Qe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ke=be?function(){return 2!==(ge(arguments)||"").length}(1,2)?function(t){return De(t)?ge(Ge.call(t)):ge(t)}:ge:function(t){var e,r,n,i,o,a,u;if(i=[],De(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!d(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof t)&&!St(t))return i;r=Ye&&n}for(o in t)r&&"prototype"===o||!d(t,o)||i.push(String(o));if($e)for(e=function(t){if(!1===He&&!ze)return Xe(t);try{return Xe(t)}catch(t){return!1}}(t),u=0;u<Qe.length;u++)a=Qe[u],e&&"constructor"===a||!d(t,a)||i.push(String(a));return i};var tr=Ke;c(pe,"enum",he),function(t,e){var r,n,i;for(r=tr(e),i=0;i<r.length;i++)ye(t,n=r[i],e[n])}(pe,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var er=["row-major","column-major"];function rr(){return{"row-major":1,"column-major":2}}c((function(){return er.slice()}),"enum",rr);var nr=["throw","clamp","wrap"];function ir(){return{throw:1,clamp:2,wrap:3}}c((function(){return nr.slice()}),"enum",ir);var or={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},ar={"row-major":1,"column-major":2},ur={throw:1,clamp:2,wrap:3};var fr=new Dt(8),sr=new se(fr.buffer);function cr(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<fr.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=Fe(t/4294967296),Zt?(sr.setUint32(0,o,Zt),sr.setUint32(4,i,Zt)):(sr.setUint32(0,i,Zt),sr.setUint32(4,o,Zt)),a=0;a<fr.length;a++)e[n]=fr[a],n+=r;return e}c((function(t){var e,r,n,i;return e=new Dt(8),0===t||(i=(4294967295&t)>>>0,n=Fe(t/4294967296),r=new se(e.buffer),Zt?(r.setUint32(0,i,Zt),r.setUint32(4,n,Zt)):(r.setUint32(0,n,Zt),r.setUint32(4,i,Zt))),e}),"assign",cr);var lr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},pr={"row-major":1,"column-major":2},hr={throw:1,clamp:2,wrap:3};function yr(t,e,r,n,i,o){var a,u,f,s,c;if(!(this instanceof yr))return new yr(t,e,r,n,i,o);for(s=1,c=0;c<r.length;c++)s*=r[c];return u=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*s:null,this._byteLength=u,this._bytesPerElement=function(t){return N[t]||null}(t),this._buffer=e,this._dtype=t,this._length=s,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Boolean(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=B(e,r,n))[1]-o[0]+1}(s,r,n,i,this._iterationOrder),f=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=F(t[0]),a=1;a<r;a++){if(o=F(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:V(f,a),COLUMN_MAJOR_CONTIGUOUS:R(f,a),READONLY:!1},this.__meta_dataview__=null,this}function gr(t){return function(t){return t instanceof yr||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}(t)&&1===t.ndims&&1===t.shape.length&&1===t.strides.length}c(yr,"name","ndarray"),T(yr.prototype,"byteLength",(function(){return this._byteLength})),T(yr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),T(yr.prototype,"data",(function(){return this._buffer})),T(yr.prototype,"dtype",(function(){return this._dtype})),T(yr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),T(yr.prototype,"length",(function(){return this._length})),T(yr.prototype,"ndims",(function(){return this._ndims})),T(yr.prototype,"offset",(function(){return this._offset})),T(yr.prototype,"order",(function(){return this._order})),T(yr.prototype,"shape",(function(){return this._shape.slice()})),T(yr.prototype,"strides",(function(){return this._strides.slice()})),c(yr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),c(yr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),c(yr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),c(yr.prototype,"iset",(function(t,e){var r,n,i,o,a,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(u=i-1;u>=0;u--)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),c(yr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=L(i=this.iget(o))+", "+C(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=L(i=this.iget(o))+", "+C(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=L(i=this.iget(this._length-1-o))+", "+C(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Bt(Lt[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),c(yr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(L(r),C(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),c(yr.prototype,"__array_meta_dataview__","function"==typeof U.BigInt&&"function"==typeof BigInt&&"bigint"==typeof U.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,u,f,s,c,l,p,h;if(f=this._mode||"throw",a=this._submode||[f],r=33+16*(l=this._ndims)+(p=a.length),(u=this.__meta_dataview__)&&u.byteLength===r)return u;for(u=new se(new ie(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,u.setInt8(s,Zt?1:0),s+=1,u.setInt16(s,or[n],Zt),s+=2,u.setBigInt64(s,ce(l),Zt),c=8*l,s+=8,h=0;h<l;h++)u.setBigInt64(s,ce(i[h]),Zt),u.setBigInt64(s+c,ce(o[h]*t),Zt),s+=8;for(s+=c,u.setBigInt64(s,ce(this._offset*t),Zt),s+=8,u.setInt8(s,ar[this._order]),s+=1,u.setInt8(s,ur[f]),s+=1,u.setBigInt64(s,ce(p),Zt),s+=8,h=0;h<p;h++)u.setInt8(s,ur[a[h]]),s+=1;return e=0,e|=this._flags.READONLY?4:0,u.setInt32(s,e,Zt),this.__meta_dataview__=u,u}:function(){var t,e,r,n,i,o,a,u,f,s,c,l,p,h,y;if(s=this._mode||"throw",u=this._submode||[s],n=33+16*(p=this._ndims)+(h=u.length),(f=this.__meta_dataview__)&&f.byteLength===n)return f;for(f=new se(new ie(n)),e=new Dt(f.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,f.setInt8(c,Zt?1:0),c+=1,f.setInt16(c,lr[i],Zt),cr(p,e,1,c+=2),l=8*p,c+=8,y=0;y<p;y++)cr(o[y],e,1,c),cr(a[y]*t,e,1,c+l),c+=8;for(c+=l,cr(this._offset*t,e,1,c),c+=8,f.setInt8(c,pr[this._order]),c+=1,f.setInt8(c,hr[s]),cr(h,e,1,c+=1),c+=8,y=0;y<h;y++)f.setInt8(c,hr[u[y]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,f.setInt32(c,r,Zt),this.__meta_dataview__=f,f});var dr="function"==typeof Float32Array;function br(t){return dr&&t instanceof Float32Array||"[object Float32Array]"===_(t)}function _r(t){return gr(t)&&br(t.data)}function mr(t){var e=t.default;if("function"==typeof e){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}function vr(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var wr=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,Or=function(t){return wr.exec(t).slice(1)};function jr(){for(var t="",e=!1,r=arguments.length-1;r>=-1&&!e;r--){var n=r>=0?arguments[r]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(t=n+"/"+t,e="/"===n.charAt(0))}return(e?"/":"")+(t=vr(Fr(t.split("/"),(function(t){return!!t})),!e).join("/"))||"."}function Ar(t){var e=Er(t),r="/"===Rr(t,-1);return(t=vr(Fr(t.split("/"),(function(t){return!!t})),!e).join("/"))||e||(t="."),t&&r&&(t+="/"),(e?"/":"")+t}function Er(t){return"/"===t.charAt(0)}function Ir(){var t=Array.prototype.slice.call(arguments,0);return Ar(Fr(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))}function xr(t,e){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=jr(t).substr(1),e=jr(e).substr(1);for(var n=r(t.split("/")),i=r(e.split("/")),o=Math.min(n.length,i.length),a=o,u=0;u<o;u++)if(n[u]!==i[u]){a=u;break}var f=[];for(u=a;u<n.length;u++)f.push("..");return(f=f.concat(i.slice(a))).join("/")}function Sr(t){var e=Or(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."}function Ur(t,e){var r=Or(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r}function Tr(t){return Or(t)[3]}var Nr={extname:Tr,basename:Ur,dirname:Sr,sep:"/",delimiter:":",relative:xr,join:Ir,isAbsolute:Er,normalize:Ar,resolve:jr};function Fr(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}var Rr="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)},Vr=mr(Object.freeze({__proto__:null,resolve:jr,normalize:Ar,isAbsolute:Er,join:Ir,relative:xr,sep:"/",delimiter:":",dirname:Sr,basename:Ur,extname:Tr,default:Nr}));var Br,Lr=Object.getPrototypeOf;Br=Nt(Object.getPrototypeOf)?Lr:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===_(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Cr=Br;function kr(t){return null==t?null:(t=Object(t),Cr(t))}function Mr(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===_(t))return!0;t=kr(t)}return!1}var Pr="function"==typeof Math.fround?Math.fround:null,Dr="function"==typeof Float32Array?Float32Array:null;var Gr,Yr="function"==typeof Float32Array?Float32Array:void 0;Gr=function(){var t,e;if("function"!=typeof Dr)return!1;try{t=br(e=new Dr([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Te}catch(e){t=!1}return t}()?Yr:function(){throw new Error("not implemented")};var $r=new Gr(1);var Jr="function"==typeof Pr?Pr:function(t){return $r[0]=t,$r[0]};function Wr(t,e,r,n,i){var o,a,u,f;if(o=0,t<=0)return o;for(a=r<0?(1-t)*r:0,u=i<0?(1-t)*i:0,f=0;f<t;f++)o=Jr(o+Jr(e[a]*n[u])),a+=r,u+=i;return o}c(Wr,"ndarray",(function(t,e,r,n,i,o,a){var u,f,s,c;if(u=0,t<=0)return u;for(f=n,s=a,c=0;c<t;c++)u=Jr(u+Jr(e[f]*i[s])),f+=r,s+=o;return u}));var Xr,Zr=function(t){try{return function(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(t)}catch(t){return Mr(t)?t:"object"==typeof t?new Error(JSON.stringify(t)):new Error(t.toString())}}((0,Vr.join)("/home/runner/work/blas-sdot/blas-sdot/node_modules/@stdlib/blas-base-sdot/lib","./native.js"));Xr=Mr(Zr)?Wr:Zr;const{ndarray:qr}=Xr;function zr(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function(t,e){if(!_r(t))throw new TypeError(zr("invalid argument. First argument must be a one-dimensional ndarray containing single-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float32Array). Value: `%s`.",t));if(!_r(e))throw new TypeError(zr("invalid argument. Second argument must be a one-dimensional ndarray containing single-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float32Array). Value: `%s`.",e));if(t.length!==e.length)throw new RangeError(zr("invalid argument. Arrays must be the same length. First argument length: `%u`. Second argument length: `%u`.",t.length,e.length));return qr(t.length,t.data,t.strides[0],t.offset,e.data,e.strides[0],e.offset)}}));
//# sourceMappingURL=index.js.map
