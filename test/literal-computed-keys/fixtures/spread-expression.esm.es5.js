var a=a||{};a.scope={};a.owns=function(b,d){return Object.prototype.hasOwnProperty.call(b,d)};a.ASSUME_ES5=!1;a.ASSUME_NO_NATIVE_MAP=!1;a.ASSUME_NO_NATIVE_SET=!1;a.SIMPLE_FROUND_POLYFILL=!1;a.ISOLATE_POLYFILLS=!1;a.FORCE_POLYFILL_PROMISE=!1;a.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION=!1;a.defineProperty=a.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,d,e){if(b==Array.prototype||b==Object.prototype)return b;b[d]=e.value;return b};
a.getGlobal=function(b){b=["object"==typeof globalThis&&globalThis,b,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var d=0;d<b.length;++d){var e=b[d];if(e&&e.Math==Math)return e}throw Error("Cannot find global object");};a.global=a.getGlobal(this);a.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");a.TRUST_ES6_POLYFILLS=!a.ISOLATE_POLYFILLS||a.IS_SYMBOL_NATIVE;a.polyfills={};a.propertyToPolyfillSymbol={};
a.POLYFILL_PREFIX="$jscp$";a.polyfill=function(b,d,e,c){d&&(a.ISOLATE_POLYFILLS?a.polyfillIsolated(b,d,e,c):a.polyfillUnisolated(b,d,e,c))};a.polyfillUnisolated=function(b,d){var e=a.global;b=b.split(".");for(var c=0;c<b.length-1;c++){var f=b[c];if(!(f in e))return;e=e[f]}b=b[b.length-1];c=e[b];d=d(c);d!=c&&null!=d&&a.defineProperty(e,b,{configurable:!0,writable:!0,value:d})};
a.polyfillIsolated=function(b,d,e){var c=b.split(".");b=1===c.length;var f=c[0];f=!b&&f in a.polyfills?a.polyfills:a.global;for(var g=0;g<c.length-1;g++){var h=c[g];if(!(h in f))return;f=f[h]}c=c[c.length-1];e=a.IS_SYMBOL_NATIVE&&"es6"===e?f[c]:null;d=d(e);null!=d&&(b?a.defineProperty(a.polyfills,c,{configurable:!0,writable:!0,value:d}):d!==e&&(void 0===a.propertyToPolyfillSymbol[c]&&(b=1E9*Math.random()>>>0,a.propertyToPolyfillSymbol[c]=a.IS_SYMBOL_NATIVE?a.global.Symbol(c):a.POLYFILL_PREFIX+b+"$"+
c),a.defineProperty(f,a.propertyToPolyfillSymbol[c],{configurable:!0,writable:!0,value:d})))};a.assign=a.TRUST_ES6_POLYFILLS&&"function"==typeof Object.assign?Object.assign:function(b,d){for(var e=1;e<arguments.length;e++){var c=arguments[e];if(c)for(var f in c)a.owns(c,f)&&(b[f]=c[f])}return b};a.polyfill("Object.assign",function(b){return b||a.assign},"es6","es3");var k=["put","add","delete","clear"];export function SpreadExpression(){return Object.assign({},k,{get:function(){return console.log("get thing")}})}
