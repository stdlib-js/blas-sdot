// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).sdot=e(t.require$$0)}(this,(function(t){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function n(t){return"number"==typeof t}function i(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function o(t,e,r){var n=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+i(o):i(o)+t,n&&(t="-"+t)),t}var a=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function u(t){var e,r,i;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,i=parseInt(r,10),!isFinite(i)){if(!n(r))throw new Error("invalid integer. Value: "+r);i=0}return i<0&&("u"===t.specifier||10!==e)&&(i=4294967295+i+1),i<0?(r=(-i).toString(e),t.precision&&(r=o(r,t.precision,t.padRight)),r="-"+r):(r=i.toString(e),i||t.precision?t.precision&&(r=o(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===f.call(t.specifier)?f.call(r):a.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function s(t){return"string"==typeof t}var c=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,h=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,_=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(t){var e,r,i=parseFloat(t.arg);if(!isFinite(i)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+r);i=t.arg}switch(t.specifier){case"e":case"E":r=i.toExponential(t.precision);break;case"f":case"F":r=i.toFixed(t.precision);break;case"g":case"G":c(i)<1e-4?((e=t.precision)>0&&(e-=1),r=i.toExponential(e)):r=i.toPrecision(t.precision),t.alternate||(r=h.call(r,m,"$1e"),r=h.call(r,v,"e"),r=h.call(r,b,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=h.call(r,y,"e+0$1"),r=h.call(r,g,"e-0$1"),t.alternate&&(r=h.call(r,d,"$1."),r=h.call(r,_,"$1.e")),i>=0&&t.sign&&(r=t.sign+r),r=t.specifier===p.call(t.specifier)?p.call(r):l.call(r)}function O(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function j(t,e,r){var n=e-t.length;return n<0?t:t=r?t+O(n):O(n)+t}var A=String.fromCharCode,E=isNaN,S=Array.isArray;function x(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function I(t){var e,r,n,i,a,f,c,l,p;if(!S(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(f="",c=1,l=0;l<t.length;l++)if(s(n=t[l]))f+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),r=n.flags,p=0;p<r.length;p++)switch(i=r.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),f+=n.arg||"",c+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function N(t){var e,r,n,i;for(r=[],i=0,n=U.exec(t);n;)(e=t.slice(i,U.lastIndex-n[0].length)).length&&r.push(e),r.push(T(n)),i=U.lastIndex,n=U.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function F(t){return"string"==typeof t}function R(t){var e,r,n;if(!F(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=N(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return I.apply(null,r)}var B,C=Object.prototype,L=C.toString,V=C.__defineGetter__,P=C.__defineSetter__,M=C.__lookupGetter__,k=C.__lookupSetter__;B=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===L.call(t))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===L.call(r))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(M.call(t,e)||k.call(t,e)?(n=t.__proto__,t.__proto__=C,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(t,e,r.get),a&&P&&P.call(t,e,r.set),t};var G=B;function D(t,e,r){G(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function $(t){return"boolean"==typeof t}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return Y&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function X(t,e){return null!=t&&q.call(t,e)}var Z="function"==typeof Symbol?Symbol:void 0,H="function"==typeof Z?Z.toStringTag:"";var z=J()?function(t){var e,r,n;if(null==t)return W.call(t);r=t[H],e=X(t,H);try{t[H]=void 0}catch(e){return W.call(t)}return n=W.call(t),e?t[H]=r:delete t[H],n}:function(t){return W.call(t)},K=Boolean,Q=Boolean.prototype.toString;var tt=J();function et(t){return"object"==typeof t&&(t instanceof K||(tt?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===z(t)))}function rt(t){return $(t)||et(t)}function nt(){return new Function("return this;")()}D(rt,"isPrimitive",$),D(rt,"isObject",et);var it="object"==typeof self?self:null,ot="object"==typeof window?window:null,at="object"==typeof global?global:null,ft="object"==typeof globalThis?globalThis:null;function ut(t){if(arguments.length){if(!$(t))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return nt()}if(ft)return ft;if(it)return it;if(ot)return ot;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")}var st=ut();function ct(t,e,r){G(t,e,{configurable:!1,enumerable:!1,get:r})}var lt={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function pt(t){return Math.abs(t)}function ht(t,e){return e&&(2===t||3===t)}function yt(t,e){return e&&(1===t||3===t)}function gt(t,e,r){var n,i,o,a,f;for(n=t.length,i=r,o=r,f=0;f<n;f++){if(0===t[f])return[r,r];(a=e[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]}function dt(t){return t.re}function _t(t){return t.im}function bt(t){return"string"==typeof t}D(gt,"assign",(function(t,e,r,n){var i,o,a,f,u;for(i=t.length,o=r,a=r,u=0;u<i;u++){if(0===t[u])return n[0]=r,n[1]=r,n;(f=e[u])>0?a+=f*(t[u]-1):f<0&&(o+=f*(t[u]-1))}return n[0]=o,n[1]=a,n}));var vt=String.prototype.valueOf;var mt=J();function wt(t){return"object"==typeof t&&(t instanceof String||(mt?function(t){try{return vt.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function Ot(t){return bt(t)||wt(t)}D(Ot,"isPrimitive",bt),D(Ot,"isObject",wt);var jt=/[-\/\\^$*+?.()|[\]{}]/g;var At=/./,Et=ut(),St=Et.document&&Et.document.childNodes,xt=Int8Array;function It(){return/^\s*function\s*([^(]*)/i}var Ut=/^\s*function\s*([^(]*)/i;D(It,"REGEXP",Ut);var Tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)};function Nt(t){return null!==t&&"object"==typeof t}function Ft(t){var e,r,n,i;if(("Object"===(r=z(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Ut.exec(n.toString()))return e[1]}return Nt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}D(Nt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!Tt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Nt));var Rt="function"==typeof At||"object"==typeof xt||"function"==typeof St?function(t){return Ft(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Ft(t).toLowerCase():e};function Bt(t){return"function"===Rt(t)}function Ct(t){return"string"==typeof t}var Lt=String.prototype.valueOf;var Vt=J();function Pt(t){return"object"==typeof t&&(t instanceof String||(Vt?function(t){try{return Lt.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function Mt(t){return Ct(t)||Pt(t)}D(Mt,"isPrimitive",Ct),D(Mt,"isObject",Pt);var kt=RegExp.prototype.exec;var Gt=J();function Dt(t){return"object"==typeof t&&(t instanceof RegExp||(Gt?function(t){try{return kt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===z(t)))}function $t(t,e,r){if(!Ct(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));if(Ct(e))e=new RegExp(function(t){var e,r;if(!bt(t))throw new TypeError(R("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(jt,"\\$&"):(e=(e=t.substring(1,r)).replace(jt,"\\$&"),t=t[0]+e+t.substring(r))}(e),"g");else if(!Dt(e))throw new TypeError(R("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!Ct(r)&&!Bt(r))throw new TypeError(R("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return function(t,e,r){return t.replace(e,r)}(t,e,r)}var Yt={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Jt="function"==typeof Uint8Array;var Wt="function"==typeof Uint8Array?Uint8Array:null;var qt,Xt="function"==typeof Uint8Array?Uint8Array:void 0;qt=function(){var t,e,r;if("function"!=typeof Wt)return!1;try{e=new Wt(e=[1,3.14,-3.14,256,257]),r=e,t=(Jt&&r instanceof Uint8Array||"[object Uint8Array]"===z(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Xt:function(){throw new Error("not implemented")};var Zt=qt,Ht="function"==typeof Uint16Array;var zt="function"==typeof Uint16Array?Uint16Array:null;var Kt,Qt="function"==typeof Uint16Array?Uint16Array:void 0;Kt=function(){var t,e,r;if("function"!=typeof zt)return!1;try{e=new zt(e=[1,3.14,-3.14,65536,65537]),r=e,t=(Ht&&r instanceof Uint16Array||"[object Uint16Array]"===z(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Qt:function(){throw new Error("not implemented")};var te,ee={uint16:Kt,uint8:Zt};(te=new ee.uint16(1))[0]=4660;var re=52===new ee.uint8(te.buffer)[0],ne="function"==typeof ArrayBuffer;var ie="function"==typeof Float64Array;var oe="function"==typeof Float64Array?Float64Array:null;var ae,fe="function"==typeof Float64Array?Float64Array:void 0;ae=function(){var t,e,r;if("function"!=typeof oe)return!1;try{e=new oe([1,3.14,-3.14,NaN]),r=e,t=(ie&&r instanceof Float64Array||"[object Float64Array]"===z(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?fe:function(){throw new Error("not implemented")};var ue=ae,se="function"==typeof ArrayBuffer?ArrayBuffer:null;var ce,le="function"==typeof ArrayBuffer?ArrayBuffer:void 0;ce=function(){var t,e,r,n;if("function"!=typeof se)return!1;try{r=new se(16),n=r,(t=(ne&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===z(n))&&"function"==typeof se.isView)&&((e=new ue(r))[0]=-3.14,e[1]=NaN,t=t&&se.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?le:function(){throw new Error("not implemented")};var pe=ce,he="function"==typeof DataView;var ye="function"==typeof DataView?DataView:null;var ge,de="function"==typeof DataView?DataView:void 0;ge=function(){var t,e,r,n;if("function"!=typeof ye)return!1;try{r=new pe(24),e=new ye(r,8),n=e,(t=(he&&n instanceof DataView||"[object DataView]"===z(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?de:function(){throw new Error("not implemented")};var _e=ge,be="function"==typeof BigInt?BigInt:void 0,ve={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function me(){var t;return 0===arguments.length?ve.all.slice():(t=ve[arguments[0]])?t.slice():[]}function we(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Oe(t,e,r){G(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function je(t){return Object.keys(Object(t))}var Ae,Ee=void 0!==Object.keys;function Se(t){return"[object Arguments]"===z(t)}Ae=function(){return Se(arguments)}();var xe=Ae;function Ie(t){return"string"==typeof t}var Ue=String.prototype.valueOf;var Te=J();function Ne(t){return"object"==typeof t&&(t instanceof String||(Te?function(t){try{return Ue.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function Fe(t){return Ie(t)||Ne(t)}function Re(t){return"number"==typeof t}D(Fe,"isPrimitive",Ie),D(Fe,"isObject",Ne);var Be=Number,Ce=Be.prototype.toString;var Le=J();function Ve(t){return"object"==typeof t&&(t instanceof Be||(Le?function(t){try{return Ce.call(t),!0}catch(t){return!1}}(t):"[object Number]"===z(t)))}function Pe(t){return Re(t)||Ve(t)}function Me(t){return t!=t}function ke(t){return Re(t)&&Me(t)}function Ge(t){return Ve(t)&&Me(t.valueOf())}function De(t){return ke(t)||Ge(t)}D(Pe,"isPrimitive",Re),D(Pe,"isObject",Ve),D(De,"isPrimitive",ke),D(De,"isObject",Ge);var $e=Number.POSITIVE_INFINITY,Ye=Be.NEGATIVE_INFINITY,Je=Math.floor;function We(t){return Je(t)===t}function qe(t){return t<$e&&t>Ye&&We(t)}function Xe(t){return Re(t)&&qe(t)}function Ze(t){return Ve(t)&&qe(t.valueOf())}function He(t){return Xe(t)||Ze(t)}D(He,"isPrimitive",Xe),D(He,"isObject",Ze);var ze=Object.prototype.propertyIsEnumerable;var Ke=!ze.call("beep","0");function Qe(t,e){var r;return null!=t&&(!(r=ze.call(t,e))&&Ke&&Fe(t)?!ke(e=+e)&&Xe(e)&&e>=0&&e<t.length:r)}var tr=xe?Se:function(t){return null!==t&&"object"==typeof t&&!Tt(t)&&"number"==typeof t.length&&We(t.length)&&t.length>=0&&t.length<=4294967295&&X(t,"callee")&&!Qe(t,"callee")},er=Array.prototype.slice;var rr=Qe((function(){}),"prototype"),nr=!Qe({toString:null},"toString");function ir(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&We(t.length)&&t.length>=0&&t.length<=9007199254740991}function or(t){return"string"==typeof t}var ar=String.prototype.valueOf;var fr=J();function ur(t){return"object"==typeof t&&(t instanceof String||(fr?function(t){try{return ar.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function sr(t){return or(t)||ur(t)}function cr(t,e,r){var n,i;if(!ir(t)&&!or(t))throw new TypeError(R("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!Xe(r))throw new TypeError(R("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(De(e)){for(;i<n;i++)if(De(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function lr(t){return t.constructor&&t.constructor.prototype===t}D(sr,"isPrimitive",or),D(sr,"isObject",ur);var pr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],hr="undefined"==typeof window?void 0:window;var yr=function(){var t;if("undefined"===Rt(hr))return!1;for(t in hr)try{-1===cr(pr,t)&&X(hr,t)&&null!==hr[t]&&"object"===Rt(hr[t])&&lr(hr[t])}catch(t){return!0}return!1}(),gr="undefined"!=typeof window;var dr,_r=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];dr=Ee?function(){return 2!==(je(arguments)||"").length}(1,2)?function(t){return tr(t)?je(er.call(t)):je(t)}:je:function(t){var e,r,n,i,o,a,f;if(i=[],tr(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!X(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!Nt(t))return i;r=rr&&n}for(o in t)r&&"prototype"===o||!X(t,o)||i.push(String(o));if(nr)for(e=function(t){if(!1===gr&&!yr)return lr(t);try{return lr(t)}catch(t){return!1}}(t),f=0;f<_r.length;f++)a=_r[f],e&&"constructor"===a||!X(t,a)||i.push(String(a));return i};var br=dr;D(me,"enum",we),function(t,e){var r,n,i;for(r=br(e),i=0;i<r.length;i++)Oe(t,n=r[i],e[n])}(me,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var vr=["row-major","column-major"];function mr(){return{"row-major":1,"column-major":2}}D((function(){return vr.slice()}),"enum",mr);var wr=["throw","clamp","wrap"];function Or(){return{throw:1,clamp:2,wrap:3}}D((function(){return wr.slice()}),"enum",Or);var jr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},Ar={"row-major":1,"column-major":2},Er={throw:1,clamp:2,wrap:3};var Sr=new Zt(8),xr=new _e(Sr.buffer);function Ir(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<Sr.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=Je(t/4294967296),re?(xr.setUint32(0,o,re),xr.setUint32(4,i,re)):(xr.setUint32(0,i,re),xr.setUint32(4,o,re)),a=0;a<Sr.length;a++)e[n]=Sr[a],n+=r;return e}D((function(t){var e,r,n,i;return e=new Zt(8),0===t||(i=(4294967295&t)>>>0,n=Je(t/4294967296),r=new _e(e.buffer),re?(r.setUint32(0,i,re),r.setUint32(4,n,re)):(r.setUint32(0,n,re),r.setUint32(4,i,re))),e}),"assign",Ir);var Ur={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},Tr={"row-major":1,"column-major":2},Nr={throw:1,clamp:2,wrap:3};function Fr(t,e,r,n,i,o){var a,f,u,s,c;if(!(this instanceof Fr))return new Fr(t,e,r,n,i,o);for(s=1,c=0;c<r.length;c++)s*=r[c];return f=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*s:null,this._byteLength=f,this._bytesPerElement=function(t){return lt[t]||null}(t),this._buffer=e,this._dtype=t,this._length=s,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=K(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=gt(e,r,n))[1]-o[0]+1}(s,r,n,i,this._iterationOrder),u=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=pt(t[0]),a=1;a<r;a++){if(o=pt(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:yt(u,a),COLUMN_MAJOR_CONTIGUOUS:ht(u,a),READONLY:!1},this.__meta_dataview__=null,this}function Rr(t){return function(t){return t instanceof Fr||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}(t)&&1===t.ndims&&1===t.shape.length&&1===t.strides.length}D(Fr,"name","ndarray"),ct(Fr.prototype,"byteLength",(function(){return this._byteLength})),ct(Fr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),ct(Fr.prototype,"data",(function(){return this._buffer})),ct(Fr.prototype,"dtype",(function(){return this._dtype})),ct(Fr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),ct(Fr.prototype,"length",(function(){return this._length})),ct(Fr.prototype,"ndims",(function(){return this._ndims})),ct(Fr.prototype,"offset",(function(){return this._offset})),ct(Fr.prototype,"order",(function(){return this._order})),ct(Fr.prototype,"shape",(function(){return this._shape.slice()})),ct(Fr.prototype,"strides",(function(){return this._strides.slice()})),D(Fr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),D(Fr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),D(Fr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),D(Fr.prototype,"iset",(function(t,e){var r,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*r[f];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),D(Fr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=dt(i=this.iget(o))+", "+_t(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=dt(i=this.iget(o))+", "+_t(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=dt(i=this.iget(this._length-1-o))+", "+_t(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=$t(Yt[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),D(Fr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(dt(r),_t(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),D(Fr.prototype,"__array_meta_dataview__","function"==typeof st.BigInt&&"function"==typeof BigInt&&"bigint"==typeof st.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,f,u,s,c,l,p,h;if(u=this._mode||"throw",a=this._submode||[u],r=33+16*(l=this._ndims)+(p=a.length),(f=this.__meta_dataview__)&&f.byteLength===r)return f;for(f=new _e(new pe(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,f.setInt8(s,re?1:0),s+=1,f.setInt16(s,jr[n],re),s+=2,f.setBigInt64(s,be(l),re),c=8*l,s+=8,h=0;h<l;h++)f.setBigInt64(s,be(i[h]),re),f.setBigInt64(s+c,be(o[h]*t),re),s+=8;for(s+=c,f.setBigInt64(s,be(this._offset*t),re),s+=8,f.setInt8(s,Ar[this._order]),s+=1,f.setInt8(s,Er[u]),s+=1,f.setBigInt64(s,be(p),re),s+=8,h=0;h<p;h++)f.setInt8(s,Er[a[h]]),s+=1;return e=0,e|=this._flags.READONLY?4:0,f.setInt32(s,e,re),this.__meta_dataview__=f,f}:function(){var t,e,r,n,i,o,a,f,u,s,c,l,p,h,y;if(s=this._mode||"throw",f=this._submode||[s],n=33+16*(p=this._ndims)+(h=f.length),(u=this.__meta_dataview__)&&u.byteLength===n)return u;for(u=new _e(new pe(n)),e=new Zt(u.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,u.setInt8(c,re?1:0),c+=1,u.setInt16(c,Ur[i],re),Ir(p,e,1,c+=2),l=8*p,c+=8,y=0;y<p;y++)Ir(o[y],e,1,c),Ir(a[y]*t,e,1,c+l),c+=8;for(c+=l,Ir(this._offset*t,e,1,c),c+=8,u.setInt8(c,Tr[this._order]),c+=1,u.setInt8(c,Nr[s]),Ir(h,e,1,c+=1),c+=8,y=0;y<h;y++)u.setInt8(c,Nr[f[y]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,u.setInt32(c,r,re),this.__meta_dataview__=u,u});var Br="function"==typeof Float32Array;function Cr(t){return Br&&t instanceof Float32Array||"[object Float32Array]"===z(t)}function Lr(t){return Rr(t)&&Cr(t.data)}var Vr,Pr=Object,Mr=Object.getPrototypeOf;Vr=Bt(Object.getPrototypeOf)?Mr:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===z(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var kr=Vr;function Gr(t){return null==t?null:(t=Pr(t),kr(t))}function Dr(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===z(t))return!0;t=Gr(t)}return!1}var $r="function"==typeof Math.fround?Math.fround:null,Yr="function"==typeof Float32Array?Float32Array:null;var Jr,Wr="function"==typeof Float32Array?Float32Array:void 0;Jr=function(){var t,e;if("function"!=typeof Yr)return!1;try{t=Cr(e=new Yr([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===$e}catch(e){t=!1}return t}()?Wr:function(){throw new Error("not implemented")};var qr=new Jr(1);var Xr="function"==typeof $r?$r:function(t){return qr[0]=t,qr[0]};function Zr(t,e,r,n,i){var o,a,f,u;if(o=0,t<=0)return o;for(a=r<0?(1-t)*r:0,f=i<0?(1-t)*i:0,u=0;u<t;u++)o=Xr(o+Xr(e[a]*n[f])),a+=r,f+=i;return o}D(Zr,"ndarray",(function(t,e,r,n,i,o,a){var f,u,s,c;if(f=0,t<=0)return f;for(u=n,s=a,c=0;c<t;c++)f=Xr(f+Xr(e[u]*i[s])),u+=r,s+=o;return f}));var Hr,zr=function(t){try{return function(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(t)}catch(t){return Dr(t)?t:"object"==typeof t?new Error(JSON.stringify(t)):new Error(t.toString())}}((0,t.join)(__dirname,"./native.js"));Hr=Dr(zr)?Zr:zr;const{ndarray:Kr}=Hr;function Qr(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function(t,e){if(!Lr(t))throw new TypeError(Qr("0GBFB",t));if(!Lr(e))throw new TypeError(Qr("0GBFC",e));if(t.length!==e.length)throw new RangeError(Qr("0GB3S,F8",t.length,e.length));return Kr(t.length,t.data,t.strides[0],t.offset,e.data,e.strides[0],e.offset)}}));
//# sourceMappingURL=index.js.map
