var a=a||{};a.scope={};a.arrayIteratorImpl=function(b){var c=0;return function(){return c<b.length?{done:!1,value:b[c++]}:{done:!0}}};a.arrayIterator=function(b){return{next:a.arrayIteratorImpl(b)}};a.ASSUME_ES5=!1;a.ASSUME_NO_NATIVE_MAP=!1;a.ASSUME_NO_NATIVE_SET=!1;a.SIMPLE_FROUND_POLYFILL=!1;a.defineProperty=a.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(b,c,d){b!=Array.prototype&&b!=Object.prototype&&(b[c]=d.value)};
a.getGlobal=function(b){b=["object"==typeof globalThis&&globalThis,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,b];for(var c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object");};a.global=a.getGlobal(this);a.SYMBOL_PREFIX="jscomp_symbol_";a.initSymbol=function(){a.initSymbol=function(){};a.global.Symbol||(a.global.Symbol=a.Symbol)};
a.SymbolClass=function(b,c){this.$jscomp$symbol$id_=b;a.defineProperty(this,"description",{configurable:!0,writable:!0,value:c})};a.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};a.Symbol=function(){function b(d){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new a.SymbolClass(a.SYMBOL_PREFIX+(d||"")+"_"+c++,d)}var c=0;return b}();
a.initSymbolIterator=function(){a.initSymbol();var b=a.global.Symbol.iterator;b||(b=a.global.Symbol.iterator=a.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[b]&&a.defineProperty(Array.prototype,b,{configurable:!0,writable:!0,value:function(){return a.iteratorPrototype(a.arrayIteratorImpl(this))}});a.initSymbolIterator=function(){}};
a.initSymbolAsyncIterator=function(){a.initSymbol();var b=a.global.Symbol.asyncIterator;b||(b=a.global.Symbol.asyncIterator=a.global.Symbol("Symbol.asyncIterator"));a.initSymbolAsyncIterator=function(){}};a.iteratorPrototype=function(b){a.initSymbolIterator();b={next:b};b[a.global.Symbol.iterator]=function(){return this};return b};a.initSymbol();var e=Symbol.for("smth");export function isSmth(b){return b&&!!b[e]}
