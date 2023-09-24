// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("path")):"function"==typeof define&&define.amd?define(["path"],r):(t="undefined"!=typeof globalThis?globalThis:t||self).sdot=r(t.require$$0)}(this,(function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(t){return"number"==typeof t}function i(t){var r,e="";for(r=0;r<t;r++)e+="0";return e}function o(t,r,e){var n=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=e?t+i(o):i(o)+t,n&&(t="-"+t)),t}var a=String.prototype.toLowerCase,f=String.prototype.toUpperCase;function u(t){var r,e,i;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(e=t.arg,i=parseInt(e,10),!isFinite(i)){if(!n(e))throw new Error("invalid integer. Value: "+e);i=0}return i<0&&("u"===t.specifier||10!==r)&&(i=4294967295+i+1),i<0?(e=(-i).toString(r),t.precision&&(e=o(e,t.precision,t.padRight)),e="-"+e):(e=i.toString(r),i||t.precision?t.precision&&(e=o(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===r&&(t.alternate&&(e="0x"+e),e=t.specifier===f.call(t.specifier)?f.call(e):a.call(e)),8===r&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function s(t){return"string"==typeof t}var c=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,h=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,_=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function w(t){var r,e,i=parseFloat(t.arg);if(!isFinite(i)){if(!n(t.arg))throw new Error("invalid floating-point number. Value: "+e);i=t.arg}switch(t.specifier){case"e":case"E":e=i.toExponential(t.precision);break;case"f":case"F":e=i.toFixed(t.precision);break;case"g":case"G":c(i)<1e-4?((r=t.precision)>0&&(r-=1),e=i.toExponential(r)):e=i.toPrecision(t.precision),t.alternate||(e=h.call(e,m,"$1e"),e=h.call(e,v,"e"),e=h.call(e,b,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=h.call(e,y,"e+0$1"),e=h.call(e,g,"e-0$1"),t.alternate&&(e=h.call(e,d,"$1."),e=h.call(e,_,"$1.e")),i>=0&&t.sign&&(e=t.sign+e),e=t.specifier===p.call(t.specifier)?p.call(e):l.call(e)}function A(t){var r,e="";for(r=0;r<t;r++)e+=" ";return e}function j(t,r,e){var n=r-t.length;return n<0?t:t=e?t+A(n):A(n)+t}var O=String.fromCharCode,E=isNaN,U=Array.isArray;function x(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function S(t){var r,e,n,i,a,f,c,l,p;if(!U(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(f="",c=1,l=0;l<t.length;l++)if(s(n=t[l]))f+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),f+=n.arg||"",c+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function N(t){var r,e,n,i;for(e=[],i=0,n=I.exec(t);n;)(r=t.slice(i,I.lastIndex-n[0].length)).length&&e.push(r),e.push(T(n)),i=I.lastIndex,n=I.exec(t);return(r=t.slice(i)).length&&e.push(r),e}function B(t){return"string"==typeof t}function R(t){var r,e,n;if(!B(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=N(t),(e=new Array(arguments.length))[0]=r,n=1;n<e.length;n++)e[n]=arguments[n];return S.apply(null,e)}var F,L=Object.prototype,C=L.toString,V=L.__defineGetter__,P=L.__defineSetter__,M=L.__lookupGetter__,k=L.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(M.call(t,r)||k.call(t,r)?(n=t.__proto__,t.__proto__=L,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&V&&V.call(t,r,e.get),a&&P&&P.call(t,r,e.set),t};var G=F;function D(t,r,e){G(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function $(t){return"boolean"==typeof t}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return Y&&"symbol"==typeof Symbol.toStringTag}var W=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var q,Z="function"==typeof Symbol?Symbol:void 0,H="function"==typeof Z?Z.toStringTag:"";q=J()?function(t){var r,e,n,i,o;if(null==t)return W.call(t);e=t[H],o=H,r=null!=(i=t)&&X.call(i,o);try{t[H]=void 0}catch(r){return W.call(t)}return n=W.call(t),r?t[H]=e:delete t[H],n}:function(t){return W.call(t)};var z=q,K=Boolean,Q=Boolean.prototype.toString;var tt=J();function rt(t){return"object"==typeof t&&(t instanceof K||(tt?function(t){try{return Q.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===z(t)))}function et(t){return $(t)||rt(t)}function nt(){return new Function("return this;")()}D(et,"isPrimitive",$),D(et,"isObject",rt);var it="object"==typeof self?self:null,ot="object"==typeof window?window:null,at="object"==typeof global?global:null,ft="object"==typeof globalThis?globalThis:null;function ut(t){if(arguments.length){if(!$(t))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return nt()}if(ft)return ft;if(it)return it;if(ot)return ot;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")}var st=ut();function ct(t,r,e){G(t,r,{configurable:!1,enumerable:!1,get:e})}var lt={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function pt(t){return Math.abs(t)}function ht(t,r){return r&&(2===t||3===t)}function yt(t,r){return r&&(1===t||3===t)}function gt(t,r,e){var n,i,o,a,f;for(n=t.length,i=e,o=e,f=0;f<n;f++){if(0===t[f])return[e,e];(a=r[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]}function dt(t){return t.re}function _t(t){return t.im}function bt(t){return"string"==typeof t}D(gt,"assign",(function(t,r,e,n){var i,o,a,f,u;for(i=t.length,o=e,a=e,u=0;u<i;u++){if(0===t[u])return n[0]=e,n[1]=e,n;(f=r[u])>0?a+=f*(t[u]-1):f<0&&(o+=f*(t[u]-1))}return n[0]=o,n[1]=a,n}));var vt=String.prototype.valueOf;var mt=J();function wt(t){return"object"==typeof t&&(t instanceof String||(mt?function(t){try{return vt.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function At(t){return bt(t)||wt(t)}D(At,"isPrimitive",bt),D(At,"isObject",wt);var jt=/[-\/\\^$*+?.()|[\]{}]/g;var Ot=/./,Et=ut(),Ut=Et.document&&Et.document.childNodes,xt=Int8Array;function St(){return/^\s*function\s*([^(]*)/i}var It,Tt=/^\s*function\s*([^(]*)/i;D(St,"REGEXP",Tt),It=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)};var Nt=It;function Bt(t){return null!==t&&"object"==typeof t}var Rt=function(t){if("function"!=typeof t)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!Nt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Bt);function Ft(t){var r,e,n,i;if(("Object"===(e=z(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=Tt.exec(n.toString()))return r[1]}return Bt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}D(Bt,"isObjectLikeArray",Rt);var Lt="function"==typeof Ot||"object"==typeof xt||"function"==typeof Ut?function(t){return Ft(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?Ft(t).toLowerCase():r};function Ct(t){return"string"==typeof t}var Vt=String.prototype.valueOf;var Pt=J();function Mt(t){return"object"==typeof t&&(t instanceof String||(Pt?function(t){try{return Vt.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function kt(t){return Ct(t)||Mt(t)}D(kt,"isPrimitive",Ct),D(kt,"isObject",Mt);var Gt=RegExp.prototype.exec;var Dt=J();function $t(t){return"object"==typeof t&&(t instanceof RegExp||(Dt?function(t){try{return Gt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===z(t)))}function Yt(t,r,e){if(!Ct(t))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",t));if(Ct(r))r=new RegExp(function(t){var r,e;if(!bt(t))throw new TypeError(R("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(e=t.length-1;e>=0&&"/"!==t[e];e--);return void 0===e||e<=0?t.replace(jt,"\\$&"):(r=(r=t.substring(1,e)).replace(jt,"\\$&"),t=t[0]+r+t.substring(e))}(r),"g");else if(!$t(r))throw new TypeError(R("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",r));if(!Ct(e)&&"function"!==Lt(e))throw new TypeError(R("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",e));return function(t,r,e){return t.replace(r,e)}(t,r,e)}var Jt={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Wt="function"==typeof Uint8Array;var Xt="function"==typeof Uint8Array?Uint8Array:null;var qt,Zt="function"==typeof Uint8Array?Uint8Array:void 0;qt=function(){var t,r,e;if("function"!=typeof Xt)return!1;try{r=new Xt(r=[1,3.14,-3.14,256,257]),e=r,t=(Wt&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Zt:function(){throw new Error("not implemented")};var Ht=qt,zt="function"==typeof Uint16Array;var Kt="function"==typeof Uint16Array?Uint16Array:null;var Qt,tr="function"==typeof Uint16Array?Uint16Array:void 0;Qt=function(){var t,r,e;if("function"!=typeof Kt)return!1;try{r=new Kt(r=[1,3.14,-3.14,65536,65537]),e=r,t=(zt&&e instanceof Uint16Array||"[object Uint16Array]"===z(e))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?tr:function(){throw new Error("not implemented")};var rr,er={uint16:Qt,uint8:Ht};(rr=new er.uint16(1))[0]=4660;var nr=52===new er.uint8(rr.buffer)[0],ir="function"==typeof ArrayBuffer;var or="function"==typeof Float64Array;var ar="function"==typeof Float64Array?Float64Array:null;var fr,ur="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var t,r,e;if("function"!=typeof ar)return!1;try{r=new ar([1,3.14,-3.14,NaN]),e=r,t=(or&&e instanceof Float64Array||"[object Float64Array]"===z(e))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?ur:function(){throw new Error("not implemented")};var sr=fr,cr="function"==typeof ArrayBuffer?ArrayBuffer:null;var lr,pr="function"==typeof ArrayBuffer?ArrayBuffer:void 0;lr=function(){var t,r,e,n;if("function"!=typeof cr)return!1;try{e=new cr(16),n=e,(t=(ir&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===z(n))&&"function"==typeof cr.isView)&&((r=new sr(e))[0]=-3.14,r[1]=NaN,t=t&&cr.isView(r)&&16===e.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t}()?pr:function(){throw new Error("not implemented")};var hr=lr,yr="function"==typeof DataView;var gr="function"==typeof DataView?DataView:null;var dr,_r="function"==typeof DataView?DataView:void 0;dr=function(){var t,r,e,n;if("function"!=typeof gr)return!1;try{e=new hr(24),r=new gr(e,8),n=r,(t=(yr&&n instanceof DataView||"[object DataView]"===z(n))&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===e&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t}()?_r:function(){throw new Error("not implemented")};var br=dr,vr="function"==typeof BigInt?BigInt:void 0,mr={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function wr(){var t;return 0===arguments.length?mr.all.slice():(t=mr[arguments[0]])?t.slice():[]}function Ar(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function jr(t,r,e){G(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})}function Or(t){return Object.keys(Object(t))}var Er,Ur=void 0!==Object.keys;function xr(t){return"[object Arguments]"===z(t)}Er=function(){return xr(arguments)}();var Sr=Er,Ir=Object.prototype.hasOwnProperty;function Tr(t,r){return null!=t&&Ir.call(t,r)}function Nr(t){return"string"==typeof t}var Br=String.prototype.valueOf;var Rr=J();function Fr(t){return"object"==typeof t&&(t instanceof String||(Rr?function(t){try{return Br.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function Lr(t){return Nr(t)||Fr(t)}function Cr(t){return"number"==typeof t}D(Lr,"isPrimitive",Nr),D(Lr,"isObject",Fr);var Vr=Number,Pr=Vr.prototype.toString;var Mr=J();function kr(t){return"object"==typeof t&&(t instanceof Vr||(Mr?function(t){try{return Pr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===z(t)))}function Gr(t){return Cr(t)||kr(t)}function Dr(t){return t!=t}function $r(t){return Cr(t)&&Dr(t)}function Yr(t){return kr(t)&&Dr(t.valueOf())}function Jr(t){return $r(t)||Yr(t)}D(Gr,"isPrimitive",Cr),D(Gr,"isObject",kr),D(Jr,"isPrimitive",$r),D(Jr,"isObject",Yr);var Wr=Number.POSITIVE_INFINITY,Xr=Vr.NEGATIVE_INFINITY,qr=Math.floor;function Zr(t){return qr(t)===t}function Hr(t){return t<Wr&&t>Xr&&Zr(t)}function zr(t){return Cr(t)&&Hr(t)}function Kr(t){return kr(t)&&Hr(t.valueOf())}function Qr(t){return zr(t)||Kr(t)}D(Qr,"isPrimitive",zr),D(Qr,"isObject",Kr);var te=Object.prototype.propertyIsEnumerable;var re,ee=!te.call("beep","0");function ne(t,r){var e;return null!=t&&(!(e=te.call(t,r))&&ee&&Lr(t)?!$r(r=+r)&&zr(r)&&r>=0&&r<t.length:e)}re=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)};var ie,oe=re;ie=Sr?xr:function(t){return null!==t&&"object"==typeof t&&!oe(t)&&"number"==typeof t.length&&Zr(t.length)&&t.length>=0&&t.length<=4294967295&&Tr(t,"callee")&&!ne(t,"callee")};var ae=ie,fe=Array.prototype.slice;function ue(t){return null!==t&&"object"==typeof t}var se=function(t){if("function"!=typeof t)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!oe(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(ue);D(ue,"isObjectLikeArray",se);var ce=ne((function(){}),"prototype"),le=!ne({toString:null},"toString");function pe(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Zr(t.length)&&t.length>=0&&t.length<=9007199254740991}function he(t,r,e){var n,i;if(!pe(t)&&!Nr(t))throw new TypeError(R("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!zr(e))throw new TypeError(R("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=n)return-1;i=e}else(i=n+e)<0&&(i=0)}else i=0;if(Jr(r)){for(;i<n;i++)if(Jr(t[i]))return i}else for(;i<n;i++)if(t[i]===r)return i;return-1}var ye=/./,ge=ut(),de=ge.document&&ge.document.childNodes,_e=Int8Array;function be(){return/^\s*function\s*([^(]*)/i}var ve=/^\s*function\s*([^(]*)/i;function me(t){var r,e,n,i;if(("Object"===(e=z(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=ve.exec(n.toString()))return r[1]}return ue(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}D(be,"REGEXP",ve);var we="function"==typeof ye||"object"==typeof _e||"function"==typeof de?function(t){return me(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?me(t).toLowerCase():r};function Ae(t){return t.constructor&&t.constructor.prototype===t}var je=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Oe="undefined"==typeof window?void 0:window;var Ee=function(){var t;if("undefined"===we(Oe))return!1;for(t in Oe)try{-1===he(je,t)&&Tr(Oe,t)&&null!==Oe[t]&&"object"===we(Oe[t])&&Ae(Oe[t])}catch(t){return!0}return!1}(),Ue="undefined"!=typeof window;var xe,Se=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];xe=Ur?function(){return 2!==(Or(arguments)||"").length}(1,2)?function(t){return ae(t)?Or(fe.call(t)):Or(t)}:Or:function(t){var r,e,n,i,o,a,f;if(i=[],ae(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!Tr(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!ue(t))return i;e=ce&&n}for(o in t)e&&"prototype"===o||!Tr(t,o)||i.push(String(o));if(le)for(r=function(t){if(!1===Ue&&!Ee)return Ae(t);try{return Ae(t)}catch(t){return!1}}(t),f=0;f<Se.length;f++)a=Se[f],r&&"constructor"===a||!Tr(t,a)||i.push(String(a));return i};var Ie=xe;D(wr,"enum",Ar),function(t,r){var e,n,i;for(e=Ie(r),i=0;i<e.length;i++)jr(t,n=e[i],r[n])}(wr,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Te=["row-major","column-major"];function Ne(){return{"row-major":1,"column-major":2}}D((function(){return Te.slice()}),"enum",Ne);var Be=["throw","clamp","wrap"];function Re(){return{throw:1,clamp:2,wrap:3}}D((function(){return Be.slice()}),"enum",Re);var Fe={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},Le={"row-major":1,"column-major":2},Ce={throw:1,clamp:2,wrap:3};var Ve="function"==typeof Uint8Array;var Pe="function"==typeof Uint8Array?Uint8Array:null;var Me,ke="function"==typeof Uint8Array?Uint8Array:void 0;Me=function(){var t,r,e;if("function"!=typeof Pe)return!1;try{r=new Pe(r=[1,3.14,-3.14,256,257]),e=r,t=(Ve&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?ke:function(){throw new Error("not implemented")};var Ge=Me,De="function"==typeof Uint8Array;var $e="function"==typeof Uint8Array?Uint8Array:null;var Ye,Je="function"==typeof Uint8Array?Uint8Array:void 0;Ye=function(){var t,r,e;if("function"!=typeof $e)return!1;try{r=new $e(r=[1,3.14,-3.14,256,257]),e=r,t=(De&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?Je:function(){throw new Error("not implemented")};var We=Ye;var Xe=new We(8),qe=new br(Xe.buffer);function Ze(t,r,e,n){var i,o,a;if(0===t){for(a=0;a<Xe.length;a++)r[n]=0,n+=e;return r}for(o=(4294967295&t)>>>0,i=qr(t/4294967296),nr?(qe.setUint32(0,o,nr),qe.setUint32(4,i,nr)):(qe.setUint32(0,i,nr),qe.setUint32(4,o,nr)),a=0;a<Xe.length;a++)r[n]=Xe[a],n+=e;return r}D((function(t){var r,e,n,i;return r=new We(8),0===t||(i=(4294967295&t)>>>0,n=qr(t/4294967296),e=new br(r.buffer),nr?(e.setUint32(0,i,nr),e.setUint32(4,n,nr)):(e.setUint32(0,n,nr),e.setUint32(4,i,nr))),r}),"assign",Ze);var He={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},ze={"row-major":1,"column-major":2},Ke={throw:1,clamp:2,wrap:3};function Qe(t,r,e,n,i,o){var a,f,u,s,c;if(!(this instanceof Qe))return new Qe(t,r,e,n,i,o);for(s=1,c=0;c<e.length;c++)s*=e[c];return f=r.BYTES_PER_ELEMENT?r.BYTES_PER_ELEMENT*s:null,this._byteLength=f,this._bytesPerElement=function(t){return lt[t]||null}(t),this._buffer=r,this._dtype=t,this._length=s,this._ndims=e.length,this._offset=i,this._order=o,this._shape=e,this._strides=n,this._accessors=K(r.get&&r.set),this._iterationOrder=function(t){var r,e;for(r=0,e=0;e<t.length;e++)t[e]<0&&(r+=1);return 0===r?1:r===t.length?-1:0}(n),a=function(t,r,e,n,i){var o;return 0!==t&&0!==i&&t===(o=gt(r,e,n))[1]-o[0]+1}(s,e,n,i,this._iterationOrder),u=function(t){var r,e,n,i,o,a;if(0===(e=t.length))return 0;for(r=!0,n=!0,i=pt(t[0]),a=1;a<e;a++){if(o=pt(t[a]),r&&o<i?r=!1:n&&o>i&&(n=!1),!n&&!r)return 0;i=o}return n&&r?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:yt(u,a),COLUMN_MAJOR_CONTIGUOUS:ht(u,a),READONLY:!1},this.__meta_dataview__=null,this}function tn(t){return function(t){return t instanceof Qe||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}(t)&&1===t.ndims&&1===t.shape.length&&1===t.strides.length}D(Qe,"name","ndarray"),ct(Qe.prototype,"byteLength",(function(){return this._byteLength})),ct(Qe.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),ct(Qe.prototype,"data",(function(){return this._buffer})),ct(Qe.prototype,"dtype",(function(){return this._dtype})),ct(Qe.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),ct(Qe.prototype,"length",(function(){return this._length})),ct(Qe.prototype,"ndims",(function(){return this._ndims})),ct(Qe.prototype,"offset",(function(){return this._offset})),ct(Qe.prototype,"order",(function(){return this._order})),ct(Qe.prototype,"shape",(function(){return this._shape.slice()})),ct(Qe.prototype,"strides",(function(){return this._strides.slice()})),D(Qe.prototype,"get",(function(){var t,r;for(t=this._offset,r=0;r<arguments.length;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.get(t):this._buffer[t]})),D(Qe.prototype,"iget",(function(t){var r,e,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(e=this._shape,r=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),D(Qe.prototype,"set",(function(){var t,r;for(t=this._offset,r=0;r<arguments.length-1;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.set(arguments[r],t):this._buffer[t]=arguments[r],this})),D(Qe.prototype,"iset",(function(t,r){var e,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset+t):this._buffer[this._offset+t]=r,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset-t):this._buffer[this._offset-t]=r,this}if(n=this._shape,e=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*e[f];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*e[f];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this})),D(Qe.prototype,"toString",(function(){var t,r,e,n,i,o;if(r=this._shape.length,e="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=dt(i=this.iget(o))+", "+_t(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=dt(i=this.iget(o))+", "+_t(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=dt(i=this.iget(this._length-1-o))+", "+_t(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(e+=Yt(Jt[this.dtype],"{{data}}",t),e+=", ",e+=0===r?"[]":"[ "+this._shape.join(", ")+" ]",e+=", ",e+="[ ",0===r)e+="0";else for(o=0;o<r;o++)this._strides[o]<0?e+=-this._strides[o]:e+=this._strides[o],o<r-1&&(e+=", ");return e+=" ]",e+=", ",e+="0",e+=", ",e+="'"+this._order+"'",e+=" )"})),D(Qe.prototype,"toJSON",(function(){var t,r,e,n;for(r=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<r;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<r;n++)e=this.iget(n),t.data.push(dt(e),_t(e));else for(n=0;n<r;n++)t.data.push(this.iget(n));return t})),D(Qe.prototype,"__array_meta_dataview__","function"==typeof st.BigInt&&"function"==typeof BigInt&&"bigint"==typeof st.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,r,e,n,i,o,a,f,u,s,c,l,p,h;if(u=this._mode||"throw",a=this._submode||[u],e=33+16*(l=this._ndims)+(p=a.length),(f=this.__meta_dataview__)&&f.byteLength===e)return f;for(f=new br(new hr(e)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,f.setInt8(s,nr?1:0),s+=1,f.setInt16(s,Fe[n],nr),s+=2,f.setBigInt64(s,vr(l),nr),c=8*l,s+=8,h=0;h<l;h++)f.setBigInt64(s,vr(i[h]),nr),f.setBigInt64(s+c,vr(o[h]*t),nr),s+=8;for(s+=c,f.setBigInt64(s,vr(this._offset*t),nr),s+=8,f.setInt8(s,Le[this._order]),s+=1,f.setInt8(s,Ce[u]),s+=1,f.setBigInt64(s,vr(p),nr),s+=8,h=0;h<p;h++)f.setInt8(s,Ce[a[h]]),s+=1;return r=0,r|=this._flags.READONLY?4:0,f.setInt32(s,r,nr),this.__meta_dataview__=f,f}:function(){var t,r,e,n,i,o,a,f,u,s,c,l,p,h,y;if(s=this._mode||"throw",f=this._submode||[s],n=33+16*(p=this._ndims)+(h=f.length),(u=this.__meta_dataview__)&&u.byteLength===n)return u;for(u=new br(new hr(n)),r=new Ge(u.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,u.setInt8(c,nr?1:0),c+=1,u.setInt16(c,He[i],nr),Ze(p,r,1,c+=2),l=8*p,c+=8,y=0;y<p;y++)Ze(o[y],r,1,c),Ze(a[y]*t,r,1,c+l),c+=8;for(c+=l,Ze(this._offset*t,r,1,c),c+=8,u.setInt8(c,ze[this._order]),c+=1,u.setInt8(c,Ke[s]),Ze(h,r,1,c+=1),c+=8,y=0;y<h;y++)u.setInt8(c,Ke[f[y]]),c+=1;return e=0,e|=this._flags.READONLY?4:0,u.setInt32(c,e,nr),this.__meta_dataview__=u,u});var rn="function"==typeof Float32Array;function en(t){return rn&&t instanceof Float32Array||"[object Float32Array]"===z(t)}function nn(t){return tn(t)&&en(t.data)}var on=Object,an=/./,fn=ut(),un=fn.document&&fn.document.childNodes,sn=Int8Array;function cn(){return/^\s*function\s*([^(]*)/i}var ln,pn=/^\s*function\s*([^(]*)/i;D(cn,"REGEXP",pn),ln=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)};var hn=ln;function yn(t){return null!==t&&"object"==typeof t}var gn=function(t){if("function"!=typeof t)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var e,n;if(!hn(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(yn);function dn(t){var r,e,n,i;if(("Object"===(e=z(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=pn.exec(n.toString()))return r[1]}return yn(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}D(yn,"isObjectLikeArray",gn);var _n="function"==typeof an||"object"==typeof sn||"function"==typeof un?function(t){return dn(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?dn(t).toLowerCase():r};var bn,vn,mn=Object.getPrototypeOf;vn=Object.getPrototypeOf,bn="function"===_n(vn)?mn:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===z(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var wn=bn;function An(t){return null==t?null:(t=on(t),wn(t))}function jn(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===z(t))return!0;t=An(t)}return!1}var On="function"==typeof Math.fround?Math.fround:null,En="function"==typeof Float32Array?Float32Array:null;var Un,xn="function"==typeof Float32Array?Float32Array:void 0;Un=function(){var t,r;if("function"!=typeof En)return!1;try{t=en(r=new En([1,3.14,-3.14,5e40]))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Wr}catch(r){t=!1}return t}()?xn:function(){throw new Error("not implemented")};var Sn=new Un(1);var In="function"==typeof On?On:function(t){return Sn[0]=t,Sn[0]};function Tn(t,r,e,n,i){var o,a,f,u;if(o=0,t<=0)return o;for(a=e<0?(1-t)*e:0,f=i<0?(1-t)*i:0,u=0;u<t;u++)o=In(o+In(r[a]*n[f])),a+=e,f+=i;return o}D(Tn,"ndarray",(function(t,r,e,n,i,o,a){var f,u,s,c;if(f=0,t<=0)return f;for(u=n,s=a,c=0;c<t;c++)f=In(f+In(r[u]*i[s])),u+=e,s+=o;return f}));var Nn,Bn=function(t){try{return function(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(t)}catch(t){return jn(t)?t:"object"==typeof t?new Error(JSON.stringify(t)):new Error(t.toString())}}((0,t.join)(__dirname,"./native.js"));Nn=jn(Bn)?Tn:Bn;const{ndarray:Rn}=Nn;function Fn(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(t,r){if(!nn(t))throw new TypeError(Fn("0GBFB",t));if(!nn(r))throw new TypeError(Fn("0GBFC",r));if(t.length!==r.length)throw new RangeError(Fn("0GB3S,F8",t.length,r.length));return Rn(t.length,t.data,t.strides[0],t.offset,r.data,r.strides[0],r.offset)}}));
//# sourceMappingURL=index.js.map
