!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=2)}([function(t,e,r){"use strict";const n=-8,a=-4,o=0,i=1,u=1,c=2,l=5,s=1024,f=2048,y=8192,b=0,g=4,d=8,p=12,A=12,_=16,m="undefined"!=typeof BigUint64Array,w=Symbol(),h=1024;function U(t,e){const r=new Uint32Array(t),n=new Uint16Array(t);var o=r[e+a>>>2]>>>1,i=e>>>1;if(o<=h)return String.fromCharCode.apply(String,n.subarray(i,i+o));const u=[];do{const t=n[i+h-1],e=t>=55296&&t<56320?h-1:h;u.push(String.fromCharCode.apply(String,n.subarray(i,i+=e))),o-=e}while(o>h);return u.join("")+String.fromCharCode.apply(String,n.subarray(i,i+o))}function v(t){const e={};function r(t,e){return t?U(t.buffer,e):"<yet unknown>"}const n=t.env=t.env||{};return n.abort=n.abort||function(t,a,o,i){const u=e.memory||n.memory;throw Error("abort: "+r(u,t)+" at "+r(u,a)+":"+o+":"+i)},n.trace=n.trace||function(t,a){const o=e.memory||n.memory;console.log("trace: "+r(o,t)+(a?" ":"")+Array.prototype.slice.call(arguments,2,2+a).join(", "))},t.Math=t.Math||Math,t.Date=t.Date||Date,e}function I(t,e){const r=e.exports,w=r.memory,h=r.table,v=r.__alloc,I=r.__retain,O=r.__rtti_base||-1;function S(t){const e=new Uint32Array(w.buffer);if((t>>>=0)>=e[O>>>2])throw Error("invalid id: "+t);return e[(O+4>>>2)+2*t]}function j(t){const e=new Uint32Array(w.buffer);if((t>>>=0)>=e[O>>>2])throw Error("invalid id: "+t);return e[(O+4>>>2)+2*t+1]}function M(t){return 31-Math.clz32(t>>>l&31)}function W(t,e,r){const n=w.buffer;if(r)switch(t){case 2:return new Float32Array(n);case 3:return new Float64Array(n)}else switch(t){case 0:return new(e?Int8Array:Uint8Array)(n);case 1:return new(e?Int16Array:Uint16Array)(n);case 2:return new(e?Int32Array:Uint32Array)(n);case 3:return new(e?BigInt64Array:BigUint64Array)(n)}throw Error("unsupported align: "+t)}function C(t){const e=new Uint32Array(w.buffer),r=e[t+n>>>2],o=S(r);if(!(o&u))throw Error("not an array: "+r);const i=M(o);var l=e[t+g>>>2];const y=o&c?e[t+A>>>2]:e[l+a>>>2]>>>i;return W(i,o&s,o&f).subarray(l>>>=i,l+y)}function E(t,e,r){const n=w.buffer,o=new Uint32Array(n),i=o[r+g>>>2];return new t(n,i,o[i+a>>>2]>>>e)}return t.__allocString=function(t){const e=t.length,r=v(e<<1,i),n=new Uint16Array(w.buffer);for(var a=0,o=r>>>1;a<e;++a)n[o+a]=t.charCodeAt(a);return r},t.__getString=function(t){const e=w.buffer;if(new Uint32Array(e)[t+n>>>2]!==i)throw Error("not a string: "+t);return U(e,t)},t.__allocArray=function(t,e){const r=S(t);if(!(r&(u|c)))throw Error("not an array: "+t+" @ "+r);const n=M(r),a=e.length,i=v(a<<n,o),l=v(r&c?_:p,t),m=new Uint32Array(w.buffer);m[l+b>>>2]=I(i),m[l+g>>>2]=i,m[l+d>>>2]=a<<n,r&c&&(m[l+A>>>2]=a);const h=W(n,r&s,r&f);if(r&y)for(let t=0;t<a;++t)h[(i>>>n)+t]=I(e[t]);else h.set(e,i>>>n);return l},t.__getArrayView=C,t.__getArray=function(t){const e=C(t),r=e.length,n=new Array(r);for(let t=0;t<r;t++)n[t]=e[t];return n},t.__getArrayBuffer=function(t){const e=w.buffer,r=new Uint32Array(e)[t+a>>>2];return e.slice(t,t+r)},t.__getInt8Array=E.bind(null,Int8Array,0),t.__getUint8Array=E.bind(null,Uint8Array,0),t.__getUint8ClampedArray=E.bind(null,Uint8ClampedArray,0),t.__getInt16Array=E.bind(null,Int16Array,1),t.__getUint16Array=E.bind(null,Uint16Array,1),t.__getInt32Array=E.bind(null,Int32Array,2),t.__getUint32Array=E.bind(null,Uint32Array,2),m&&(t.__getInt64Array=E.bind(null,BigInt64Array,3),t.__getUint64Array=E.bind(null,BigUint64Array,3)),t.__getFloat32Array=E.bind(null,Float32Array,2),t.__getFloat64Array=E.bind(null,Float64Array,3),t.__instanceof=function(t,e){const r=new Uint32Array(w.buffer);var a=r[t+n>>>2];if(a<=r[O>>>2])do{if(a==e)return!0}while(a=j(a));return!1},t.memory=t.memory||w,t.table=t.table||h,P(r,t)}function O(t,e){var r=(...r)=>(e(r.length),t(...r));return r.original=t,r}function S(t){return"undefined"!=typeof Response&&t instanceof Response}async function j(t,e){return S(t=await t)?M(t,e):I(v(e||(e={})),await WebAssembly.instantiate(t instanceof WebAssembly.Module?t:await WebAssembly.compile(t),e))}async function M(t,e){return WebAssembly.instantiateStreaming?I(v(e||(e={})),(await WebAssembly.instantiateStreaming(t,e)).instance):j(S(t=await t)?t.arrayBuffer():t,e)}function P(t,e){var r=e?Object.create(e):{},n=t.__setargc||function(){};function a(t,e){return Object.prototype.hasOwnProperty.call(t,e)}for(let e in t){if(!a(t,e))continue;let o=t[e],i=e.split("."),u=r;for(;i.length>1;){let t=i.shift();a(u,t)||(u[t]={}),u=u[t]}let c=i[0],l=c.indexOf("#");if(l>=0){let r=c.substring(0,l),i=u[r];if(void 0===i||!i.prototype){let t=function(...e){return t.wrap(t.prototype.constructor(0,...e))};t.prototype={valueOf:function(){return this[w]}},t.wrap=function(e){return Object.create(t.prototype,{[w]:{value:e,writable:!1}})},i&&Object.getOwnPropertyNames(i).forEach(e=>Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))),u[r]=t}if(c=c.substring(l+1),u=u[r].prototype,/^(get|set):/.test(c)){if(!a(u,c=c.substring(4))){let r=t[e.replace("set:","get:")],n=t[e.replace("get:","set:")];Object.defineProperty(u,c,{get:function(){return r(this[w])},set:function(t){n(this[w],t)},enumerable:!0})}}else"constructor"===c?u[c]=O(o,n):Object.defineProperty(u,c,{value:function(...t){return n(t.length),o(this[w],...t)}})}else/^(get|set):/.test(c)?a(u,c=c.substring(4))||Object.defineProperty(u,c,{get:t[e.replace("set:","get:")],set:t[e.replace("get:","set:")],enumerable:!0}):u[c]="function"==typeof o?O(o,n):o}return r}e.preInstantiate=v,e.postInstantiate=I,e.instantiate=j,e.instantiateSync=function(t,e){return I(v(e||(e={})),new WebAssembly.Instance(t instanceof WebAssembly.Module?t:new WebAssembly.Module(t),e))},e.instantiateStreaming=M,e.demangle=P},,function(t,e,r){"use strict";const n=r(0);console.log(n);let a={env:{memory:new WebAssembly.Memory({initial:256}),abort:function(){throw Error("abort called")}}};function o(t){let e=document.querySelector("#"+t),r=e.width,n=e.height,a=document.createElement("canvas");a.width=r,a.height=n;let o=a.getContext("2d");return o.drawImage(e,0,0,r,n),o.getImageData(0,0,r,n)}n.preInstantiate(a),fetch("../build/optimized.wasm").then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,a)).then(t=>{let e=n.postInstantiate(a,t.instance),r=t.instance.exports,i=o("mat"),u=e.__retain(e.__allocArray(e.INT8ARRAY_ID,i.data)),c=o("ker");console.log(c.data);let l=e.__retain(e.__allocArray(e.INT8ARRAY_ID,c.data)),s=r.convolution(u,i.width,i.height,l,c.width,c.height);console.log(s),console.log(e.__getInt32Array(s))}).catch(t=>{alert("Failed to load WASM: "+t.message+" (ad blocker, maybe?)"),console.log(t.stack)})}]);
//# sourceMappingURL=simplecv.js.map