// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function r(t){return"number"==typeof t}function n(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function i(t,e,r){var i=!1,o=e-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(i=!0,t=t.substr(1)),t=r?t+n(o):n(o)+t,i&&(t="-"+t)),t}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(t){var e,n,u;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=t.arg,u=parseInt(n,10),!isFinite(u)){if(!r(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===t.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),t.precision&&(n=i(n,t.precision,t.padRight)),n="-"+n):(n=u.toString(e),u||t.precision?t.precision&&(n=i(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===e&&(t.alternate&&(n="0x"+n),n=t.specifier===a.call(t.specifier)?a.call(n):o.call(n)),8===e&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(t){return"string"==typeof t}var s=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,h=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,_=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function v(t){var e,n,i=parseFloat(t.arg);if(!isFinite(i)){if(!r(t.arg))throw new Error("invalid floating-point number. Value: "+n);i=t.arg}switch(t.specifier){case"e":case"E":n=i.toExponential(t.precision);break;case"f":case"F":n=i.toFixed(t.precision);break;case"g":case"G":s(i)<1e-4?((e=t.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(t.precision),t.alternate||(n=p.call(n,m,"$1e"),n=p.call(n,b,"e"),n=p.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=p.call(n,h,"e+0$1"),n=p.call(n,g,"e-0$1"),t.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,d,"$1.e")),i>=0&&t.sign&&(n=t.sign+n),n=t.specifier===l.call(t.specifier)?l.call(n):c.call(n)}function w(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function O(t,e,r){var n=e-t.length;return n<0?t:t=r?t+w(n):w(n)+t}var j=String.fromCharCode,A=isNaN,E=Array.isArray;function x(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function I(t){var e,r,n,o,a,s,c,l,p;if(!E(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(s="",c=1,l=0;l<t.length;l++)if(f(n=t[l]))s+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),r=n.flags,p=0;p<r.length;p++)switch(o=r.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,A(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),s+=n.arg||"",c+=1}return s}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function T(t){var e,r,n,i;for(r=[],i=0,n=S.exec(t);n;)(e=t.slice(i,S.lastIndex-n[0].length)).length&&r.push(e),r.push(U(n)),i=S.lastIndex,n=S.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function N(t){return"string"==typeof t}function F(t){var e,r,n;if(!N(t))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=T(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return I.apply(null,r)}var R,V=Object.prototype,B=V.toString,L=V.__defineGetter__,M=V.__defineSetter__,k=V.__lookupGetter__,C=V.__lookupSetter__;R=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,e,r){var n,i,o,a;if("object"!=typeof t||null===t||"[object Array]"===B.call(t))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(k.call(t,e)||C.call(t,e)?(n=t.__proto__,t.__proto__=V,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,a="set"in r,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&L&&L.call(t,e,r.get),a&&M&&M.call(t,e,r.set),t};var P=R;function D(t,e,r){P(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function G(t){return"boolean"==typeof t}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function $(){return Y&&"symbol"==typeof Symbol.toStringTag}var J=Object.prototype.toString;var W=Object.prototype.hasOwnProperty;function X(t,e){return null!=t&&W.call(t,e)}var Z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Z?Z.toStringTag:"";var z=$()?function(t){var e,r,n;if(null==t)return J.call(t);r=t[q],e=X(t,q);try{t[q]=void 0}catch(e){return J.call(t)}return n=J.call(t),e?t[q]=r:delete t[q],n}:function(t){return J.call(t)},H=Boolean,K=Boolean.prototype.toString;var Q=$();function tt(t){return"object"==typeof t&&(t instanceof H||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===z(t)))}function et(t){return G(t)||tt(t)}function rt(){return new Function("return this;")()}D(et,"isPrimitive",G),D(et,"isObject",tt);var nt="object"==typeof self?self:null,it="object"==typeof window?window:null,ot="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},at="object"==typeof ot?ot:null,ut="object"==typeof globalThis?globalThis:null;function ft(t){if(arguments.length){if(!G(t))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return rt()}if(ut)return ut;if(nt)return nt;if(it)return it;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")}var st=ft();function ct(t,e,r){P(t,e,{configurable:!1,enumerable:!1,get:r})}var lt={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function pt(t){return Math.abs(t)}function ht(t,e){return e&&(2===t||3===t)}function gt(t,e){return e&&(1===t||3===t)}function yt(t,e,r){var n,i,o,a,u;for(n=t.length,i=r,o=r,u=0;u<n;u++){if(0===t[u])return[r,r];(a=e[u])>0?o+=a*(t[u]-1):a<0&&(i+=a*(t[u]-1))}return[i,o]}function dt(t){return t.re}function _t(t){return t.im}function bt(t){return"string"==typeof t}D(yt,"assign",(function(t,e,r,n){var i,o,a,u,f;for(i=t.length,o=r,a=r,f=0;f<i;f++){if(0===t[f])return n[0]=r,n[1]=r,n;(u=e[f])>0?a+=u*(t[f]-1):u<0&&(o+=u*(t[f]-1))}return n[0]=o,n[1]=a,n}));var mt=String.prototype.valueOf;var vt=$();function wt(t){return"object"==typeof t&&(t instanceof String||(vt?function(t){try{return mt.call(t),!0}catch(t){return!1}}(t):"[object String]"===z(t)))}function Ot(t){return bt(t)||wt(t)}D(Ot,"isPrimitive",bt),D(Ot,"isObject",wt);var jt=/[-\/\\^$*+?.()|[\]{}]/g;var At=/./,Et=ft(),xt=Et.document&&Et.document.childNodes,It=Int8Array;function St(){return/^\s*function\s*([^(]*)/i}var Ut=/^\s*function\s*([^(]*)/i;D(St,"REGEXP",Ut);var Tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===z(t)};function Nt(t){return null!==t&&"object"==typeof t}function Ft(t){var e,r,n,i;if(("Object"===(r=z(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=Ut.exec(n.toString()))return e[1]}return Nt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}D(Nt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!Tt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Nt));var Rt="function"==typeof At||"object"==typeof It||"function"==typeof xt?function(t){return Ft(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?Ft(t).toLowerCase():e};function Vt(t){return"function"===Rt(t)}var Bt=RegExp.prototype.exec;var Lt=$();function Mt(t){return"object"==typeof t&&(t instanceof RegExp||(Lt?function(t){try{return Bt.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===z(t)))}function kt(t,e,r){if(!bt(t))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",t));if(bt(e))e=new RegExp(function(t){var e,r;if(!bt(t))throw new TypeError(F("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(jt,"\\$&"):(e=(e=t.substring(1,r)).replace(jt,"\\$&"),t=t[0]+e+t.substring(r))}(e),"g");else if(!Mt(e))throw new TypeError(F("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!bt(r)&&!Vt(r))throw new TypeError(F("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return function(t,e,r){return t.replace(e,r)}(t,e,r)}var Ct={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Pt="function"==typeof Uint8Array;var Dt="function"==typeof Uint8Array?Uint8Array:null;var Gt,Yt="function"==typeof Uint8Array?Uint8Array:void 0;Gt=function(){var t,e,r;if("function"!=typeof Dt)return!1;try{e=new Dt(e=[1,3.14,-3.14,256,257]),r=e,t=(Pt&&r instanceof Uint8Array||"[object Uint8Array]"===z(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Yt:function(){throw new Error("not implemented")};var $t=Gt,Jt="function"==typeof Uint16Array;var Wt="function"==typeof Uint16Array?Uint16Array:null;var Xt,Zt="function"==typeof Uint16Array?Uint16Array:void 0;Xt=function(){var t,e,r;if("function"!=typeof Wt)return!1;try{e=new Wt(e=[1,3.14,-3.14,65536,65537]),r=e,t=(Jt&&r instanceof Uint16Array||"[object Uint16Array]"===z(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Zt:function(){throw new Error("not implemented")};var qt,zt={uint16:Xt,uint8:$t};(qt=new zt.uint16(1))[0]=4660;var Ht=52===new zt.uint8(qt.buffer)[0],Kt="function"==typeof ArrayBuffer;var Qt="function"==typeof Float64Array;var te="function"==typeof Float64Array?Float64Array:null;var ee,re="function"==typeof Float64Array?Float64Array:void 0;ee=function(){var t,e,r;if("function"!=typeof te)return!1;try{e=new te([1,3.14,-3.14,NaN]),r=e,t=(Qt&&r instanceof Float64Array||"[object Float64Array]"===z(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?re:function(){throw new Error("not implemented")};var ne=ee,ie="function"==typeof ArrayBuffer?ArrayBuffer:null;var oe,ae="function"==typeof ArrayBuffer?ArrayBuffer:void 0;oe=function(){var t,e,r,n;if("function"!=typeof ie)return!1;try{r=new ie(16),n=r,(t=(Kt&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===z(n))&&"function"==typeof ie.isView)&&((e=new ne(r))[0]=-3.14,e[1]=NaN,t=t&&ie.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?ae:function(){throw new Error("not implemented")};var ue=oe,fe="function"==typeof DataView;var se="function"==typeof DataView?DataView:null;var ce,le="function"==typeof DataView?DataView:void 0;ce=function(){var t,e,r,n;if("function"!=typeof se)return!1;try{r=new ue(24),e=new se(r,8),n=e,(t=(fe&&n instanceof DataView||"[object DataView]"===z(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?le:function(){throw new Error("not implemented")};var pe=ce,he="function"==typeof BigInt?BigInt:void 0,ge={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function ye(){var t;return 0===arguments.length?ge.all.slice():(t=ge[arguments[0]])?t.slice():[]}function de(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function _e(t,e,r){P(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function be(t){return Object.keys(Object(t))}var me=void 0!==Object.keys;function ve(t){return"[object Arguments]"===z(t)}var we=function(){return ve(arguments)}();function Oe(t){return"number"==typeof t}var je=Number,Ae=je.prototype.toString;var Ee=$();function xe(t){return"object"==typeof t&&(t instanceof je||(Ee?function(t){try{return Ae.call(t),!0}catch(t){return!1}}(t):"[object Number]"===z(t)))}function Ie(t){return Oe(t)||xe(t)}function Se(t){return t!=t}function Ue(t){return Oe(t)&&Se(t)}function Te(t){return xe(t)&&Se(t.valueOf())}function Ne(t){return Ue(t)||Te(t)}D(Ie,"isPrimitive",Oe),D(Ie,"isObject",xe),D(Ne,"isPrimitive",Ue),D(Ne,"isObject",Te);var Fe=Number.POSITIVE_INFINITY,Re=je.NEGATIVE_INFINITY,Ve=Math.floor;function Be(t){return Ve(t)===t}function Le(t){return t<Fe&&t>Re&&Be(t)}function Me(t){return Oe(t)&&Le(t)}function ke(t){return xe(t)&&Le(t.valueOf())}function Ce(t){return Me(t)||ke(t)}D(Ce,"isPrimitive",Me),D(Ce,"isObject",ke);var Pe=Object.prototype.propertyIsEnumerable;var De=!Pe.call("beep","0");function Ge(t,e){var r;return null!=t&&(!(r=Pe.call(t,e))&&De&&Ot(t)?!Ue(e=+e)&&Me(e)&&e>=0&&e<t.length:r)}var Ye=we?ve:function(t){return null!==t&&"object"==typeof t&&!Tt(t)&&"number"==typeof t.length&&Be(t.length)&&t.length>=0&&t.length<=4294967295&&X(t,"callee")&&!Ge(t,"callee")},$e=Array.prototype.slice;var Je=Ge((function(){}),"prototype"),We=!Ge({toString:null},"toString");function Xe(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Be(t.length)&&t.length>=0&&t.length<=9007199254740991}function Ze(t,e,r){var n,i;if(!Xe(t)&&!bt(t))throw new TypeError(F("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(n=t.length))return-1;if(3===arguments.length){if(!Me(r))throw new TypeError(F("invalid argument. Third argument must be an integer. Value: `%s`.",r));if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Ne(e)){for(;i<n;i++)if(Ne(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function qe(t){return t.constructor&&t.constructor.prototype===t}var ze=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],He="undefined"==typeof window?void 0:window;var Ke=function(){var t;if("undefined"===Rt(He))return!1;for(t in He)try{-1===Ze(ze,t)&&X(He,t)&&null!==He[t]&&"object"===Rt(He[t])&&qe(He[t])}catch(t){return!0}return!1}(),Qe="undefined"!=typeof window;var tr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var er=me?function(){return 2!==(be(arguments)||"").length}(1,2)?function(t){return Ye(t)?be($e.call(t)):be(t)}:be:function(t){var e,r,n,i,o,a,u;if(i=[],Ye(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!X(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof t)&&!Nt(t))return i;r=Je&&n}for(o in t)r&&"prototype"===o||!X(t,o)||i.push(String(o));if(We)for(e=function(t){if(!1===Qe&&!Ke)return qe(t);try{return qe(t)}catch(t){return!1}}(t),u=0;u<tr.length;u++)a=tr[u],e&&"constructor"===a||!X(t,a)||i.push(String(a));return i};D(ye,"enum",de),function(t,e){var r,n,i;for(r=er(e),i=0;i<r.length;i++)_e(t,n=r[i],e[n])}(ye,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var rr=["row-major","column-major"];function nr(){return{"row-major":1,"column-major":2}}D((function(){return rr.slice()}),"enum",nr);var ir=["throw","clamp","wrap"];function or(){return{throw:1,clamp:2,wrap:3}}D((function(){return ir.slice()}),"enum",or);var ar={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},ur={"row-major":1,"column-major":2},fr={throw:1,clamp:2,wrap:3};var sr=new $t(8),cr=new pe(sr.buffer);function lr(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<sr.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=Ve(t/4294967296),Ht?(cr.setUint32(0,o,Ht),cr.setUint32(4,i,Ht)):(cr.setUint32(0,i,Ht),cr.setUint32(4,o,Ht)),a=0;a<sr.length;a++)e[n]=sr[a],n+=r;return e}D((function(t){var e,r,n,i;return e=new $t(8),0===t||(i=(4294967295&t)>>>0,n=Ve(t/4294967296),r=new pe(e.buffer),Ht?(r.setUint32(0,i,Ht),r.setUint32(4,n,Ht)):(r.setUint32(0,n,Ht),r.setUint32(4,i,Ht))),e}),"assign",lr);var pr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},hr={"row-major":1,"column-major":2},gr={throw:1,clamp:2,wrap:3};function yr(t,e,r,n,i,o){var a,u,f,s,c;if(!(this instanceof yr))return new yr(t,e,r,n,i,o);for(s=1,c=0;c<r.length;c++)s*=r[c];return u=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*s:null,this._byteLength=u,this._bytesPerElement=function(t){return lt[t]||null}(t),this._buffer=e,this._dtype=t,this._length=s,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=H(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=yt(e,r,n))[1]-o[0]+1}(s,r,n,i,this._iterationOrder),f=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=pt(t[0]),a=1;a<r;a++){if(o=pt(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:gt(f,a),COLUMN_MAJOR_CONTIGUOUS:ht(f,a),READONLY:!1},this.__meta_dataview__=null,this}function dr(t){return function(t){return t instanceof yr||null!==t&&"object"==typeof t&&"object"==typeof t.data&&"object"==typeof t.shape&&"object"==typeof t.strides&&"number"==typeof t.offset&&"string"==typeof t.order&&"number"==typeof t.ndims&&"string"==typeof t.dtype&&"number"==typeof t.length&&"object"==typeof t.flags&&"function"==typeof t.get&&"function"==typeof t.set}(t)&&1===t.ndims&&1===t.shape.length&&1===t.strides.length}D(yr,"name","ndarray"),ct(yr.prototype,"byteLength",(function(){return this._byteLength})),ct(yr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),ct(yr.prototype,"data",(function(){return this._buffer})),ct(yr.prototype,"dtype",(function(){return this._dtype})),ct(yr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),ct(yr.prototype,"length",(function(){return this._length})),ct(yr.prototype,"ndims",(function(){return this._ndims})),ct(yr.prototype,"offset",(function(){return this._offset})),ct(yr.prototype,"order",(function(){return this._order})),ct(yr.prototype,"shape",(function(){return this._shape.slice()})),ct(yr.prototype,"strides",(function(){return this._strides.slice()})),D(yr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),D(yr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),D(yr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),D(yr.prototype,"iset",(function(t,e){var r,n,i,o,a,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(u=i-1;u>=0;u--)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),D(yr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=dt(i=this.iget(o))+", "+_t(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=dt(i=this.iget(o))+", "+_t(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=dt(i=this.iget(this._length-1-o))+", "+_t(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=kt(Ct[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),D(yr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(dt(r),_t(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),D(yr.prototype,"__array_meta_dataview__","function"==typeof st.BigInt&&"function"==typeof BigInt&&"bigint"==typeof st.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,u,f,s,c,l,p,h;if(f=this._mode||"throw",a=this._submode||[f],r=33+16*(l=this._ndims)+(p=a.length),(u=this.__meta_dataview__)&&u.byteLength===r)return u;for(u=new pe(new ue(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,u.setInt8(s,Ht?1:0),s+=1,u.setInt16(s,ar[n],Ht),s+=2,u.setBigInt64(s,he(l),Ht),c=8*l,s+=8,h=0;h<l;h++)u.setBigInt64(s,he(i[h]),Ht),u.setBigInt64(s+c,he(o[h]*t),Ht),s+=8;for(s+=c,u.setBigInt64(s,he(this._offset*t),Ht),s+=8,u.setInt8(s,ur[this._order]),s+=1,u.setInt8(s,fr[f]),s+=1,u.setBigInt64(s,he(p),Ht),s+=8,h=0;h<p;h++)u.setInt8(s,fr[a[h]]),s+=1;return e=0,e|=this._flags.READONLY?4:0,u.setInt32(s,e,Ht),this.__meta_dataview__=u,u}:function(){var t,e,r,n,i,o,a,u,f,s,c,l,p,h,g;if(s=this._mode||"throw",u=this._submode||[s],n=33+16*(p=this._ndims)+(h=u.length),(f=this.__meta_dataview__)&&f.byteLength===n)return f;for(f=new pe(new ue(n)),e=new $t(f.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,f.setInt8(c,Ht?1:0),c+=1,f.setInt16(c,pr[i],Ht),lr(p,e,1,c+=2),l=8*p,c+=8,g=0;g<p;g++)lr(o[g],e,1,c),lr(a[g]*t,e,1,c+l),c+=8;for(c+=l,lr(this._offset*t,e,1,c),c+=8,f.setInt8(c,hr[this._order]),c+=1,f.setInt8(c,gr[s]),lr(h,e,1,c+=1),c+=8,g=0;g<h;g++)f.setInt8(c,gr[u[g]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,f.setInt32(c,r,Ht),this.__meta_dataview__=f,f});var _r="function"==typeof Float32Array;function br(t){return _r&&t instanceof Float32Array||"[object Float32Array]"===z(t)}function mr(t){return dr(t)&&br(t.data)}function vr(t){if(t.__esModule)return t;var e=t.default;if("function"==typeof e){var r=function t(){if(this instanceof t){var r=[null];r.push.apply(r,arguments);var n=Function.bind.apply(e,r);return new n}return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}function wr(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}var Or=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,jr=function(t){return Or.exec(t).slice(1)};function Ar(){for(var t="",e=!1,r=arguments.length-1;r>=-1&&!e;r--){var n=r>=0?arguments[r]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(t=n+"/"+t,e="/"===n.charAt(0))}return(e?"/":"")+(t=wr(Rr(t.split("/"),(function(t){return!!t})),!e).join("/"))||"."}function Er(t){var e=xr(t),r="/"===Vr(t,-1);return(t=wr(Rr(t.split("/"),(function(t){return!!t})),!e).join("/"))||e||(t="."),t&&r&&(t+="/"),(e?"/":"")+t}function xr(t){return"/"===t.charAt(0)}function Ir(){var t=Array.prototype.slice.call(arguments,0);return Er(Rr(t,(function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))}function Sr(t,e){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=Ar(t).substr(1),e=Ar(e).substr(1);for(var n=r(t.split("/")),i=r(e.split("/")),o=Math.min(n.length,i.length),a=o,u=0;u<o;u++)if(n[u]!==i[u]){a=u;break}var f=[];for(u=a;u<n.length;u++)f.push("..");return(f=f.concat(i.slice(a))).join("/")}function Ur(t){var e=jr(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."}function Tr(t,e){var r=jr(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r}function Nr(t){return jr(t)[3]}var Fr={extname:Nr,basename:Tr,dirname:Ur,sep:"/",delimiter:":",relative:Sr,join:Ir,isAbsolute:xr,normalize:Er,resolve:Ar};function Rr(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}var Vr="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)},Br=vr(Object.freeze({__proto__:null,basename:Tr,default:Fr,delimiter:":",dirname:Ur,extname:Nr,isAbsolute:xr,join:Ir,normalize:Er,relative:Sr,resolve:Ar,sep:"/"}));var Lr,Mr=Object,kr=Object.getPrototypeOf;Lr=Vt(Object.getPrototypeOf)?kr:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===z(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Cr=Lr;function Pr(t){return null==t?null:(t=Mr(t),Cr(t))}function Dr(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===z(t))return!0;t=Pr(t)}return!1}var Gr="function"==typeof Math.fround?Math.fround:null,Yr="function"==typeof Float32Array?Float32Array:null;var $r,Jr="function"==typeof Float32Array?Float32Array:void 0;$r=function(){var t,e;if("function"!=typeof Yr)return!1;try{t=br(e=new Yr([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Fe}catch(e){t=!1}return t}()?Jr:function(){throw new Error("not implemented")};var Wr=new $r(1);var Xr="function"==typeof Gr?Gr:function(t){return Wr[0]=t,Wr[0]};function Zr(t,e,r,n,i){var o,a,u,f;if(o=0,t<=0)return o;for(a=r<0?(1-t)*r:0,u=i<0?(1-t)*i:0,f=0;f<t;f++)o=Xr(o+Xr(e[a]*n[u])),a+=r,u+=i;return o}D(Zr,"ndarray",(function(t,e,r,n,i,o,a){var u,f,s,c;if(u=0,t<=0)return u;for(f=n,s=a,c=0;c<t;c++)u=Xr(u+Xr(e[f]*i[s])),f+=r,s+=o;return u}));var qr,zr=function(t){try{return function(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(t)}catch(t){return Dr(t)?t:"object"==typeof t?new Error(JSON.stringify(t)):new Error(t.toString())}}((0,Br.join)("/home/runner/work/blas-sdot/blas-sdot/node_modules/@stdlib/blas-base-sdot/lib","./native.js"));qr=Dr(zr)?Zr:zr;const{ndarray:Hr}=qr;function Kr(t,e){if(!mr(t))throw new TypeError(F("invalid argument. First argument must be a one-dimensional ndarray containing single-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float32Array). Value: `%s`.",t));if(!mr(e))throw new TypeError(F("invalid argument. Second argument must be a one-dimensional ndarray containing single-precision floating-point numbers (i.e., an ndarray whose underlying data buffer is a Float32Array). Value: `%s`.",e));if(t.length!==e.length)throw new RangeError(F("invalid argument. Arrays must be the same length. First argument length: `%u`. Second argument length: `%u`.",t.length,e.length));return Hr(t.length,t.data,t.strides[0],t.offset,e.data,e.strides[0],e.offset)}export{Kr as default};
//# sourceMappingURL=mod.js.map