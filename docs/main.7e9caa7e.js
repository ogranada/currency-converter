parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"DvJ0":[function(require,module,exports) {
"use strict";function t(t,e,n,r,i,c,o){try{var a=t[c](o),u=a.value}catch(s){return void n(s)}a.done?e(u):Promise.resolve(u).then(r,i)}function e(e){return function(){var n=this,r=arguments;return new Promise(function(i,c){var o=e.apply(n,r);function a(e){t(o,i,c,a,u,"next",e)}function u(e){t(o,i,c,a,u,"throw",e)}a(void 0)})}}function n(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.apiKeyVariable,i=void 0===r?"access_key":r,c=n.fetchAPI,o=void 0===c?fetch:c;this.apiURL=t,this.apiKey=e,this.apiKeyVariable=i,this.fetch=function(t,e){return o(t,e)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.APIManager=n,n.prototype.getURL=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.keys(e).reduce(function(t,n){return t.push("".concat(n,"=").concat(encodeURI(e[n]))),t},[]).join("&");return"".concat(this.apiURL).concat(t,"?").concat(this.apiKeyVariable,"=").concat(this.apiKey).concat(n?"&".concat(n):"")},n.prototype.getInfo=function(){var t=e(regeneratorRuntime.mark(function t(e,n){var r,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch(this.getURL(e,n));case 2:return r=t.sent,t.next=5,r.json();case 5:return i=t.sent,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}();
},{}],"Wp3D":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Converter=void 0;var e=require("./api_manager");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t,n,r,o,u,a){try{var c=e[u](a),i=c.value}catch(s){return void n(s)}c.done?t(i):Promise.resolve(i).then(r,o)}function r(e){return function(){var t=this,r=arguments;return new Promise(function(o,u){var a=e.apply(t,r);function c(e){n(a,o,u,c,i,"next",e)}function i(e){n(a,o,u,c,i,"throw",e)}c(void 0)})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=p();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(t){c(u,e.APIManager);var n=s(u);function u(){var e;return o(this,u),(e=n.call(this,"http://api.exchangeratesapi.io/v1","7a1b773b0de57b3908763626c50e1a24")).validExchanges=null,e}return a(u,[{key:"prepare",value:function(){var e=r(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getInfo("/symbols");case 2:(t=e.sent).success?this.validExchanges=t.symbols:this.validExchanges=[];case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"convert",value:function(){var e=r(regeneratorRuntime.mark(function e(t,n,r,o,u){var a,c,i,s,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,0!==n&&t&&r){e.next=3;break}return e.abrupt("return",null);case 3:return u||(u=new Date),a=u&&u.toISOString?u.toISOString().split("T")[0]:u,e.next=7,this.getInfo(a?"/".concat(a):"/latest",{symbols:"".concat(t,",").concat(r)});case 7:return c=e.sent,i=c.rates[t]||0,s=c.rates[r]||0,f=i>0?n*s/i:0,e.abrupt("return",{source:{name:t,value:i},target:{name:r,value:s},amount:n,result:f});case 14:return e.prev=14,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 18:case"end":return e.stop()}},e,this,[[0,14]])}));return function(t,n,r,o,u){return e.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){var e=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u._instance){e.next=4;break}return u._instance=new u,e.next=4,u._instance.prepare();case 4:return e.abrupt("return",u._instance);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),u}();exports.Converter=y;
},{"./api_manager":"DvJ0"}],"IOwx":[function(require,module,exports) {
"use strict";function e(e,t,u){var n;return function(){var o=this,r=arguments,i=u&&!n;clearTimeout(n),n=setTimeout(function(){n=null,u||e.apply(o,r)},t),i&&e.apply(o,r)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.debounce=e;
},{}],"smsf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CurrencyCard=void 0;var e=require("./converter"),t=require("./utils");function r(e,t,r,n,u,c,a){try{var s=e[c](a),i=s.value}catch(o){return void r(o)}s.done?t(i):Promise.resolve(i).then(n,u)}function n(e){return function(){var t=this,n=arguments;return new Promise(function(u,c){var a=e.apply(t,n);function s(e){r(a,u,c,s,i,"next",e)}function i(e){r(a,u,c,s,i,"throw",e)}s(void 0)})}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=function(){function r(n){var c=this;u(this,r),s(this,"updating",!1),s(this,"converter",null),s(this,"parentNode",null),s(this,"node",null),s(this,"btnRemove",null),s(this,"lastChanged",null),s(this,"txtSourceCurrency",null),s(this,"txtTargetCurrency",null),s(this,"txtSearchDate",null),s(this,"selectSourceCurrency",null),s(this,"selectTargetCurrency",null),s(this,"calculateResults",(0,t.debounce)(function(e){return c.doCurrencyCalculations(e)},100)),this.parentNode=n,this.node=this.loadComponentNode(),e.Converter.getInstance().then(function(e){c.converter=e,c.prepareInitialInformation(),c.prepareActions()}),n.appendChild(this.node)}return a(r,[{key:"prepareInitialInformation",value:function(){var e=this;this.btnToggleCurrencies=this.node.querySelector(".CurrencyChanger-revertCurrencies"),this.btnRemove=this.node.querySelector(".CurrencyChanger-remove"),this.spanTitle=this.node.querySelector(".CurrencyChanger-headerTitle"),this.selectSourceCurrency=this.node.querySelector(".CurrencyChanger-currencySelector.source"),this.selectTargetCurrency=this.node.querySelector(".CurrencyChanger-currencySelector.target"),this.sourceImg=this.node.querySelector(".CurrencyChanger-currencyImage.source"),this.targetImg=this.node.querySelector(".CurrencyChanger-currencyImage.target"),this.txtSourceCurrency=this.node.querySelector(".CurrencyChanger-currencyInput.source"),this.txtTargetCurrency=this.node.querySelector(".CurrencyChanger-currencyInput.target"),this.txtSearchDate=this.node.querySelector(".CurrencyChanger-searchDate");var t=(new Date).toISOString().substring(0,10);this.txtSearchDate.value=t,Object.keys(this.converter.validExchanges).forEach(function(t){var r=document.createElement("option"),n=document.createElement("option");r.value=t,r.textContent="".concat(t," - ").concat(e.converter.validExchanges[t]),n.value=t,n.textContent="".concat(t," - ").concat(e.converter.validExchanges[t]),e.selectSourceCurrency.appendChild(r),e.selectTargetCurrency.appendChild(n)}),this.btnRemove.addEventListener("click",function(t){return e.removeFromParent(t)}),this.btnToggleCurrencies.addEventListener("click",function(t){return e.toggleCurrencies(t)})}},{key:"prepareActions",value:function(){var e=this;[{widget:this.selectSourceCurrency,event:"change"},{widget:this.selectTargetCurrency,event:"change"},{widget:this.txtSearchDate,event:"change"},{widget:this.txtSourceCurrency,event:"input"},{widget:this.txtTargetCurrency,event:"input"}].forEach(function(t){var r=t.widget,n=t.event;r.addEventListener(n,function(t){setTimeout(function(){e.updateValues(t)},100)})})}},{key:"toggleCurrencies",value:function(e){var t;t=this.selectSourceCurrency.value,this.selectSourceCurrency.value=this.selectTargetCurrency.value,this.selectTargetCurrency.value=t,t=this.txtSourceCurrency.value,this.txtSourceCurrency.value=this.txtTargetCurrency.value,this.txtTargetCurrency.value=t,this.setUIImages(this.getCurrentInputValues())}},{key:"setUIImages",value:function(e){e.sourceCurrency&&(this.sourceImg.src=this.getCurrencyImage(e.sourceCurrency)),e.targetCurrency&&(this.targetImg.src=this.getCurrencyImage(e.targetCurrency)),e.sourceCurrency&&e.targetCurrency?this.spanTitle.textContent="".concat(e.sourceCurrency," to ").concat(e.targetCurrency):this.spanTitle.textContent="..."}},{key:"setUIValues",value:function(e,t){t!==this.selectSourceCurrency&&(this.selectSourceCurrency.value=e.sourceCurrency),t!==this.txtSourceCurrency&&(this.txtSourceCurrency.value=e.sourceCurrencyValue),t!==this.selectTargetCurrency&&(this.selectTargetCurrency.value=e.targetCurrency),t!==this.txtTargetCurrency&&(this.txtTargetCurrency.value=e.targetCurrencyValue),t!==this.txtSearchDate&&(this.txtSearchDate.value=e.searchDate)}},{key:"getCurrentInputValues",value:function(){return{sourceCurrency:this.selectSourceCurrency.value,targetCurrency:this.selectTargetCurrency.value,sourceCurrencyValue:Number(this.txtSourceCurrency.value),targetCurrencyValue:Number(this.txtTargetCurrency.value),searchDate:this.txtSearchDate.value}}},{key:"doCurrencyCalculations",value:function(){var e=n(regeneratorRuntime.mark(function e(t){var r,n,u,c,a,s,i,o,l,h,C,y,g,v,d,p,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.currentTarget||t.target,n=[this.selectSourceCurrency,this.txtSourceCurrency],u=[this.selectTargetCurrency,this.txtTargetCurrency],c=[this.txtSearchDate],a=this.getCurrentInputValues(),!n.includes(r)){e.next=13;break}return s=a.sourceCurrencyValue,i=a.targetCurrencyValue,o=a.sourceCurrency,l=a.targetCurrency,h=a.searchDate,e.next=9,this.converter.convert(o,s,l,i,h);case 9:(C=e.sent)&&(a.targetCurrencyValue=C.result,this.setUIValues(a,r)),e.next=22;break;case 13:if(!u.includes(r)){e.next=21;break}return y=a.sourceCurrencyValue,g=a.targetCurrencyValue,v=a.sourceCurrency,d=a.targetCurrency,p=a.searchDate,e.next=17,this.converter.convert(d,g,v,y,p);case 17:(f=e.sent)&&(a.sourceCurrencyValue=f.result,this.setUIValues(a,r)),e.next=22;break;case 21:c.includes(r)&&(c.includes(this.lastChanged)||this.doCurrencyCalculations({currentTarget:this.lastChanged}));case 22:this.lastChanged=r,this.updating=!1;case 24:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"updateValues",value:function(e){if(!this.updating){this.updating=!0;var t=this.getCurrentInputValues();this.setUIImages(t),this.calculateResults(e)}}},{key:"getCurrencyImage",value:function(e){return e.length<3?"":"https://www.countryflags.io/".concat(e.toLowerCase().substr(0,2),"/shiny/64.png")}},{key:"removeFromParent",value:function(){this.node.parentNode.removeChild(this.node)}},{key:"loadComponentNode",value:function(){return r.template||(r.template=document.getElementById("currencyChangeTemplate")),document.importNode(r.template.content,!0).querySelector(".CurrencyChanger")}}]),r}();exports.CurrencyCard=i,s(i,"template",null);
},{"./converter":"Wp3D","./utils":"IOwx"}],"KIzB":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var e=require("./currency-card");function r(){var r=document.querySelector(".ContentWrapper-content");document.querySelector(".addCurrency").addEventListener("click",function(){new e.CurrencyCard(r)});new e.CurrencyCard(r)}r();
},{"regenerator-runtime/runtime":"KA2S","./currency-card":"smsf"}]},{},["KIzB"], null)
//# sourceMappingURL=/main.7e9caa7e.js.map