/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() { return module['default']; } :
            /******/
            function getModuleExports() { return module; };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = "./src/main.js");
    /******/
})
/************************************************************************/
/******/
({

    /***/
    "./lib/UIAccordion.js":
    /*!****************************!*\
      !*** ./lib/UIAccordion.js ***!
      \****************************/
    /*! exports provided: default */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\nfunction UIAccordion (context) {\n    this.context = context.el;\n    this.viewOneAtTheTime = (context.viewOneAtTheTime) ? context.viewOneAtTheTime : false;\n    this.allCloser = (context.allCloser) ? context.allCloser : false;\n    this.withButtons = (context.withButtons) ? context.withButtons : false;\n    this.listItems = this.context.querySelectorAll('.ui-accordion-item')\n    this.init();\n    this.bindEvents();\n}\nUIAccordion.prototype.init = function () {\n    var self = this;\n    this.listItems.forEach( function (item, index) {\n        if (self.withButtons) {\n            var tagBtn = document.createElement('span');\n            tagBtn.innerHTML = '&#8735;';\n            item.querySelector('.ui-accordion-head').appendChild(tagBtn);\n        }\n        if (self.allCloser) item.querySelector('.ui-accordion-content').classList.add('ui-accordion-item-collapse');\n        else {\n            if (index != 0) item.querySelector('.ui-accordion-content').classList.add('ui-accordion-item-collapse');\n            else {\n                item.querySelector('.ui-accordion-head span').classList.add('active-acc')\n            }\n        }\n    });\n}\nUIAccordion.prototype.bindEvents = function() {\n    var self = this;\n    this.listItems.forEach( function(item) {\n        var itemHead = item.querySelector('.ui-accordion-head')\n        itemHead.addEventListener('click', self.toogleItem.bind(self));\n    });\n}\nUIAccordion.prototype.toogleItem = function(evt) {\n    evt.preventDefault();\n    var content = (Array.from(evt.target.classList).indexOf('ui-accordion-head') != -1) ? evt.target.parentNode.querySelector('.ui-accordion-content') : evt.target.parentNode.parentNode.querySelector('.ui-accordion-content');\n\n    if (Array.from(content.classList).indexOf('ui-accordion-item-collapse') == -1) {\n        content.classList.add('ui-accordion-item-collapse');\n        content.classList.remove('ui-accordion-active')\n        var h = (Array.from(evt.target.classList).indexOf('ui-accordion-head') != -1) ? evt.target.parentNode.querySelector('.ui-accordion-head span') : evt.target.parentNode.parentNode.querySelector('.ui-accordion-head span')\n        h.classList.remove('active-acc');\n    } else {\n        if (this.viewOneAtTheTime) {\n            var self = this;\n            this.listItems.forEach( function (item) {\n                item.querySelector('.ui-accordion-content').classList.add('ui-accordion-item-collapse');\n                item.querySelector('.ui-accordion-content').classList.remove('ui-accordion-active');\n                item.querySelector('.ui-accordion-head span').classList.remove('active-acc')\n            });\n        }\n        content.classList.remove('ui-accordion-item-collapse');\n        content.classList.add('ui-accordion-active')\n        var h = (Array.from(evt.target.classList).indexOf('ui-accordion-head') != -1) ? evt.target.parentNode.querySelector('.ui-accordion-head span') : evt.target.parentNode.parentNode.querySelector('.ui-accordion-head span')\n        h.classList.add('active-acc')\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UIAccordion);\n\n//# sourceURL=webpack:///./lib/UIAccordion.js?");

        /***/
    }),

    /***/
    "./lib/UICountdown.js":
    /*!****************************!*\
      !*** ./lib/UICountdown.js ***!
      \****************************/
    /*! exports provided: default */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\nfunction UICountdown(options) {\n    this.context = options.el;\n    this.endTime = +this.dateFromTimestamp(options.deadline);\n    this.timeRemainingel = '';\n    this.countdown();\n}\n\nUICountdown.prototype.countdown = function () {\n    var self = this;\n    function getTimeRemaining() {\n        var t = self.endTime - new Date();\n        self.timeRemaining = {\n            total: t,\n            days: Math.floor(t / (1000 * 60 * 60 * 24)),\n            hours: Math.floor((t / (1000 * 60 * 60)) % 24),\n            minutes: Math.floor((t / 1000 / 60) % 60),\n            seconds: Math.floor((t / 1000) % 60)\n        }\n    }\n\n    function updateClock() {\n        getTimeRemaining();\n\n        self.context.querySelector('.days').innerHTML = (`0${self.timeRemaining.days}`).slice(-2);\n        self.context.querySelector('.hours').innerHTML = (`0${self.timeRemaining.hours}`).slice(-2);\n        self.context.querySelector('.minutes').innerHTML = (`0${self.timeRemaining.minutes}`).slice(-2);\n        if (self.context.querySelector('.seconds')) self.context.querySelector('.seconds').innerHTML = (`0${self.timeRemaining.seconds}`).slice(-2);\n\n        if (self.timeRemaining.total <= 0) {\n            clearInterval(timeinterval);\n            self.context.querySelector('.days').innerHTML = '00';\n            self.context.querySelector('.hours').innerHTML = '00';\n            self.context.querySelector('.minutes').innerHTML = '00';\n            if (self.context.querySelector('.seconds')) self.context.querySelector('.seconds').innerHTML = '00';\n        }\n    }\n\n    updateClock();\n    var timeinterval = setInterval(updateClock, 1000);\n}\n\nUICountdown.prototype.dateFromTimestamp = function (formatDate) {\n    var t = formatDate.split(/[- :]/);\n    return new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (UICountdown);\n\n//# sourceURL=webpack:///./lib/UICountdown.js?");

        /***/
    }),

    /***/
    "./node_modules/js-simple-validations/dist/js-simple-validations.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/js-simple-validations/dist/js-simple-validations.js ***!
      \**************************************************************************/
    /*! no static exports found */
    /***/
        (function(module, exports) {

        eval("!function(n){var a={};function r(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(t,\"__esModule\",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,\"a\",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p=\"\",r(r.s=6)}([function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});e.default={disableValidations:!1,formValidateAttr:\"data-jsv-form\",formIsValid:\"data-jsv-form-isvalid\",disableIcons:\"data-jsv-disable-icons\",formValidCallback:\"data-jsv-form-valid-callback\",formInvalidCallback:\"data-jsv-form-invalid-callback\",disableInvalid:\"data-jsv-disable-invalid\",fieldValidators:\"data-jsv-validators\",fieldIsValid:\"data-jsv-field-isvalid\",prevVal:\"data-jsv-field-prev-val\",lenMin:\"data-jsv-min\",lenMax:\"data-jsv-max\",lenExact:\"data-jsv-exact\",minThresh:\"data-jsv-min-selected\",fieldCompare:\"data-jsv-compare\",fieldPattern:\"data-jsv-pattern\",ajaxEndpoint:\"data-jsv-ajax-endpoint\",ajaxKey:\"data-jsv-ajax-key\",ajaxValue:\"data-jsv-ajax-value\",ajaxProcessing:\"data-jsv-ajax-processing\",fieldContains:\"data-jsv-contains\",expireDate:\"data-jsv-expiredate\",dependentFields:\"data-jsv-dependents\",fieldDebounce:\"data-jsv-debounce\",invErrPrefix:\"data-jsv-field-error-\",fieldInvalidCallback:\"data-jsv-field-invalid-callback-\",fieldValidCallback:\"data-jsv-field-valid-callback-\",valTarget:\"data-jsv-validation-target\",invMessage:\"data-jsv-message-target\",disableIcon:\"data-jsv-disable-icon\",fieldValid:\"form-field-valid\",validIcon:\"form-field-valid-focusout\",fieldInvalid:\"form-field-invalid\",invIcon:\"form-field-invalid-focusout\",fieldContainer:{className:\"validate-input\",addClasses:[]},formError:{className:\"validate-form-error-message\",addClasses:[\"well\",\"validate-form-hidden-message\"]},formSuccess:{className:\"validate-form-success-message\",addClasses:[\"well\",\"validate-form-hidden-message\"]},fieldError:{className:\"validate-field-error-message\",addClasses:[]},baseId:\"data-jsv-base-id\",messageHidden:\"validate-form-hidden-message\",buttonSuccess:\"success-button\",buttonTooltip:\"data-jsv-form-tooltip\",buttonOriginalText:\"data-original-text\",formIncompleteText:\"data-jsv-form-incomplete-tooltip\",formInvalidMessage:\"data-jsv-form-invalid-message\",safeStringInput:!0,safeEndpoints:!1,ajaxTimeout:8e3,debounceDefault:300,useCss:!0,useTooltip:!0,isValidColor:\"#13bd3a\",isInvalidColor:\"#ff0000\",isValidIcon:\"\\\\2713\",isInvalidIcon:\"\\\\2716\",fieldErrorFont:\"normal 12px Helvetica, Arial, sans-serif\",formShowMessages:!0,formSubmitHandler:\"data-jsv-submit-handler\",formIncompleteMessage:\"Please complete all required fields\"}},function(t,e){window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,e){e=e||window;for(var n=0;n<this.length;n++)t.call(e,this[n],n,this)})},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};n(1),e.default=function(){this.uniqueArray=function(t){return Array.isArray(t)&&t.length&&(t=t.filter(function(t,e,n){return n.indexOf(t)===e})),t},this.cleanArray=function(t){if(Array.isArray(t)&&t.length){for(var e=0;e<t.length;e++)t[e]=t[e]?t[e].trim():\"\";t=t.filter(function(t){return/\\S/.test(t)}),t=this.uniqueArray(t)}return t}.bind(this),this.splitString=function(t){return this.cleanArray(t.split(\",\"))}.bind(this),this.digitWord=function(e){try{var t=e&&!isNaN(e)?e:parseInt(e);t=t.toString();var n={0:\"zero\",1:\"one\",2:\"two\",3:\"three\",4:\"four\",5:\"five\",6:\"six\",7:\"seven\",8:\"eight\",9:\"nine\"};return t in n?n[t]:e}catch(t){return e}},this.createValidationElement=function(t,e,n){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:\"div\",r=null;try{t.querySelector(\".\"+e.className)||((r=document.createElement(a)).classList.add(e.className),e.addClasses&&Array.isArray(e.addClasses)&&e.addClasses.forEach(function(t){r.classList.add(t)}),n&&r.setAttribute(\"id\",n))}catch(t){}return r},this.safeString=function(t){if(!t)return null;try{var e={\"<\":\"lt\",\">\":\"gt\",'\"':\"quot\",\"'\":\"apos\",\"&\":\"amp\",\"\\r\":\"#10\",\"\\n\":\"#13\"};return t.toString().replace(/[<>\"'\\r\\n&]/g,function(t){return\"&\"+e[t]+\";\"})}catch(t){return null}},this.safeStringInput=function(t){return t&&o.default.safeStringInput?this.safeString(t):t},this.isElement=function(t){return t instanceof Element},this.disableElement=function(t,e){var n=e||!1;try{return!(!t||!this.isElement(t)||(\"FORM\"===t.tagName?n?t.setAttribute(\"disabled\",n):t.removeAttribute(\"disabled\"):t.disabled=n,0))}catch(t){return!1}},this.disableForm=function(t,e){if(!this.getAttr(t,o.default.disableInvalid))return!1;var n=e||!1;try{var a=null,r=t.getElementsByTagName(\"button\");if(r&&r.length&&(a=r[0],this.disableElement(a,n),n&&o.default.useTooltip&&o.default.buttonTooltip)){var i=this.getAttr(t,o.default.formIncompleteText)||o.default.formIncompleteMessage;a.setAttribute(o.default.buttonTooltip,i)}return!0}catch(t){return!1}}.bind(this),this.getAttr=function(t,e){var n=null;if(!t||!e||!this.isElement(t))return null;try{var a=t.getAttribute(e)||null;a&&(n=this.safeString(a.trim()),n=(\"string\"!=typeof(n=\"string\"==typeof(n=isNaN(n)?n:parseInt(n))&&\"true\"===n.toLowerCase()||n)||\"false\"!==n.toLowerCase())&&n)}catch(t){}return n},this.getValue=function(t){try{var e=[],n=[];switch(t.type){case\"text\":case\"textarea\":case\"password\":case\"hidden\":case\"color\":case\"date\":case\"datetime\":case\"datetime-local\":case\"email\":case\"file\":case\"image\":case\"month\":case\"number\":case\"range\":case\"search\":case\"tel\":case\"time\":case\"url\":case\"week\":return this.safeStringInput(t.value);case\"select-multiple\":for(var a=0;a<t.options.length;a++)t.options[a].selected&&(e[e.length]=this.safeStringInput(t.options[a].value)||\"\");return e;case\"select-one\":return-1==t.selectedIndex?\"\":this.safeStringInput(t.options[t.selectedIndex].value)||\"\";case\"button\":case\"reset\":case\"submit\":return\"\";case\"radio\":case\"checkbox\":return t.checked?this.safeStringInput(t.value):\"\";default:if(\"radio\"===t[0].type){for(var r=0;r<t.length;r++)if(t[r].checked)return this.safeStringInput(t[r].value);return\"\"}if(\"checkbox\"!=t[0].type)return this.safeStringInput(t.value);for(var i=0;i<t.length;i++)t[i].checked&&(n[e.length]=this.safeStringInput(t[i].value));return n}}catch(t){}return\"\"},this.showMsg=function(t,e,n){if(!(t&&e&&n&&o.default.formShowMessages))return!1;try{var a=t.querySelector(\".\"+e);return!(!a||!this.isElement(a)||(a.innerHTML=n,a.classList.remove(o.default.messageHidden),0))}catch(t){return!1}},this.hideFormMessage=function(t,e){if(!t||!e)return!1;try{var n=t.querySelector(\".\"+e);return!!n&&(n.innerHTML=\"\",n.classList.add(o.default.messageHidden),!0)}catch(t){return!1}},this.debounce=function(n,a,r){var i=void 0;return function(){var t=this,e=arguments;clearTimeout(i),i=setTimeout(function(){i=null,r||n.apply(t,e)},a),r&&!i&&n.apply(t,e)}},this.capitalize=function(t){return t?t.charAt(0).toUpperCase()+t.substring(1):null},this.nameToString=function(t){return t?t.match(/[A-Za-z][a-z]*/g).map(this.capitalize).join(\" \"):null}.bind(this),this.alphaNum=function(t){return t?t.replace(/[^a-z0-9 \\-]/gi,\"\"):null},this.createId=function(){return Math.random().toString(36).substr(2,8)}}},function(t,f,c){\"use strict\";c.r(f),function(e){var t=c(5),n=setTimeout;function a(){}function i(t){if(!(this instanceof i))throw new TypeError(\"Promises must be constructed via new\");if(\"function\"!=typeof t)throw new TypeError(\"not a function\");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(t,this)}function r(n,a){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,i._immediateFn(function(){var t=1===n._state?a.onFulfilled:a.onRejected;if(null!==t){var e;try{e=t(n._value)}catch(t){return void l(a.promise,t)}o(a.promise,e)}else(1===n._state?o:l)(a.promise,n._value)})):n._deferreds.push(a)}function o(e,t){try{if(t===e)throw new TypeError(\"A promise cannot be resolved with itself.\");if(t&&(\"object\"==typeof t||\"function\"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void u(e);if(\"function\"==typeof n)return void d((a=n,r=t,function(){a.apply(r,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(t){l(e,t)}var a,r}function l(t,e){t._state=2,t._value=e,u(t)}function u(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)r(t,t._deferreds[e]);t._deferreds=null}function s(t,e,n){this.onFulfilled=\"function\"==typeof t?t:null,this.onRejected=\"function\"==typeof e?e:null,this.promise=n}function d(t,e){var n=!1;try{t(function(t){n||(n=!0,o(e,t))},function(t){n||(n=!0,l(e,t))})}catch(t){if(n)return;n=!0,l(e,t)}}i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(a);return r(this,new s(t,e,n)),n},i.prototype.finally=t.a,i.all=function(e){return new i(function(a,r){if(!e||void 0===e.length)throw new TypeError(\"Promise.all accepts an array\");var i=Array.prototype.slice.call(e);if(0===i.length)return a([]);var o=i.length;function l(e,t){try{if(t&&(\"object\"==typeof t||\"function\"==typeof t)){var n=t.then;if(\"function\"==typeof n)return void n.call(t,function(t){l(e,t)},r)}i[e]=t,0==--o&&a(i)}catch(t){r(t)}}for(var t=0;t<i.length;t++)l(t,i[t])})},i.resolve=function(e){return e&&\"object\"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(n){return new i(function(t,e){e(n)})},i.race=function(r){return new i(function(t,e){for(var n=0,a=r.length;n<a;n++)r[n].then(t,e)})},i._immediateFn=\"function\"==typeof e&&function(t){e(t)}||function(t){n(t,0)},i._unhandledRejectionFn=function(t){\"undefined\"!=typeof console&&console},f.default=i}.call(this,c(8).setImmediate)},function(t,e){var n;n=function(){return this}();try{n=n||new Function(\"return this\")()}catch(t){\"object\"==typeof window&&(n=window)}t.exports=n},function(t,e,n){\"use strict\";e.a=function(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}},function(t,e,n){\"use strict\";var a,r=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t},i=s(n(2)),o=s(n(7)),g=s(n(13));n(1);var l,b=s(n(0)),u=s(n(14));function s(t){return t&&t.__esModule?t:{default:t}}l={SimpleValidations:function(){var p=new i.default;if(window.validateOptions=window.validateOptions||{},\"cfg\"in window.validateOptions&&\"object\"===r(window.validateOptions.cfg))for(var t in window.validateOptions.cfg)b.default[t]=window.validateOptions.cfg[t];if(\"undefined\"!==b.default.disableValidations&&b.default.disableValidations)return!1;if(b.default.useCss)try{var e=document.createElement(\"style\");e.innerHTML=u.default,document.head.appendChild(e)}catch(t){}document.querySelectorAll(\"[\"+b.default.formValidateAttr+\"]\").forEach(function(v){var m=b.default.debounceDefault,t=p.createValidationElement(v,b.default.formError);t&&v.insertBefore(t,v.firstChild);var e=p.createValidationElement(v,b.default.formSuccess);e&&v.appendChild(e),p.disableForm(v,!0);var h=new o.default(v);v.querySelectorAll(\"[\"+b.default.fieldValidators+\"]\").forEach(function(e){var t=p.getAttr(e,b.default.baseId);if(t||(t=p.createId(),e.setAttribute(b.default.baseId,t)),\"radio\"!==e.type&&\"checkbox\"!==e.type){try{var n=p.getAttr(e,b.default.valTarget);if(!(n?v.querySelector(\"#\"+n):null)){var a=\"w-\"+t,r=p.createValidationElement(e.parentNode,b.default.fieldContainer,a);e.parentNode.appendChild(r),r.appendChild(e),e.setAttribute(b.default.valTarget,a)}}catch(t){}try{var i=p.getAttr(e,b.default.invMessage);if(!(i?v.querySelector(\"#\"+i):null)){var o=\"e-\"+t,l=p.createValidationElement(e.parentNode,b.default.fieldError,o);e.parentNode.parentNode.insertBefore(l,e.parentNode.nextElementSibling),e.setAttribute(b.default.invMessage,o)}}catch(t){}}try{var u=p.getValue(e);u&&/\\S/.test(u)&&h.validate({type:\"focusout\",target:{name:e.name}})}catch(t){}var s=p.getAttr(e,b.default.fieldDebounce),d=s&&!isNaN(s)?s:b.default.debounceDefault;m<d&&(m=d);var f=(0,g.default)(h.validate,d),c=function(t){null!==e.offsetParent&&f(t,v).then(function(){}).catch(function(){})};e.addEventListener(\"input\",c,!1),e.addEventListener(\"change\",c,!1),e.addEventListener(\"focusout\",c,!1)}),v.addEventListener(\"submit\",function(n){n.preventDefault(),setTimeout(function(){h.validate(n,v).then(function(){var t=b.default.formSubmitHandler?p.getAttr(v,b.default.formSubmitHandler):null,e=t&&t in window&&\"function\"==typeof window[t]?window[t]:null;e?e(n,v,\"valid\"):v.submit()}).catch(function(){var t=p.getAttr(v,b.default.formInvalidMessage)||\"Please correct the errors below\";p.showMsg(v,b.default.formError.className,t)})},m+100)})})}},\"undefined\"!=typeof window?window.SimpleValidations=l.SimpleValidations:void 0===(a=function(){return l.SimpleValidations}.call(e,n,e,l))||(l.exports=a),\"undefined\"!=typeof window&&\"SimpleValidations\"in window&&document.addEventListener(\"DOMContentLoaded\",function(){return window.SimpleValidations()})},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var l=r(n(3));n(1);var u=r(n(11)),d=r(n(0)),a=r(n(2));function r(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){var s=new a.default,o=this;this.form=t,this.getButton=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o.form;try{return t.getElementsByTagName(\"button\")[0]}catch(t){}},this.hasValid=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o.form;try{return s.getAttr(t,d.default.formIsValid)}catch(t){}},this.getFields=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o.form,e=[];try{e=t.querySelectorAll(\"[\"+d.default.fieldValidators+\"]\")}catch(t){}return e},this.getValidationFields=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o.form,u={validate:[],reset:[]};return o.getFields(t).forEach(function(t){try{var e=!1,n=!1,a=s.getAttr(t,d.default.fieldValidators),r=a&&-1!==a.toLowerCase().indexOf(\"require\"),i=\"radio\"===t.type||\"checkbox\"===t.type,o=s.getValue(t),l=t.getAttribute(d.default.prevVal);o?e=!l||s.safeString(o)!==l||i:r?e=!0:n=!0,e&&u.validate.push(t),n&&u.reset.push(t)}catch(t){}}),u},this.getIncompleteMessage=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o.form,e=s.getAttr(t,d.default.formIncompleteText);return e||d.default.formIncompleteMessage},this.checkValid=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:o.form,e=o.getFields(t),n=0;return e.forEach(function(t){t.getAttribute(d.default.fieldIsValid)&&n++}),n>=e.length},this.validate=function(r){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.form;try{return new l.default(function(t,e){var n=o.getValidationFields(i)||[],a=[new l.default.resolve];n.validate.forEach(function(t){var e=new u.default(t,i,r);a.push(e.validate(t))}),n.reset.forEach(function(t){var e=new u.default(t,i,r);a.push(e.reset(t))}),new l.default.all(a).then(function(){}).catch(function(){}).finally(function(){o.checkValid(i)?t(o.valid(r,i)):e(o.invalid(r,i))})})}catch(r){}},this.valid=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.form;try{var n=o.getButton(e);o.hasValid(e)||e.setAttribute(d.default.formIsValid,\"true\"),s.disableForm(e,!1),d.default.useTooltip&&d.default.buttonTooltip&&n.getAttribute(d.default.buttonTooltip)&&n.removeAttribute(d.default.buttonTooltip),s.hideFormMessage(e,d.default.formError.className);var a=s.getAttr(e,d.default.formValidCallback);if(\"submit\"!==t.type&&a&&a in window&&\"function\"==typeof window[a])try{s.debounce(window[a],d.default.debounceDefault)(t,e,\"valid\")}catch(t){}}catch(t){}return!0},this.invalid=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:o.form;try{var n=o.getButton(e);o.hasValid(e)&&e.removeAttribute(d.default.formIsValid),s.disableForm(e,!0),n&&d.default.useTooltip&&d.default.buttonTooltip&&n.setAttribute(d.default.buttonTooltip,o.getIncompleteMessage(e)),n&&d.default.buttonSuccess&&n.classList.contains(d.default.buttonSuccess)&&n.classList.remove(d.default.buttonSuccess),n&&d.default.buttonOriginalText&&n.getAttribute(d.default.buttonOriginalText)&&(n.innerText=s.getAttr(n,d.default.buttonOriginalText),n.removeAttribute(d.default.buttonOriginalText)),s.hideFormMessage(e,d.default.formError.className),s.hideFormMessage(e,d.default.formSuccess.className);var a=s.getAttr(e,d.default.formInvalidCallback);if(\"submit\"===t.type&&a&&a in window&&\"function\"==typeof window[a])try{s.debounce(window[a],d.default.debounceDefault)(t,e,\"invalid\")}catch(t){}}catch(t){}return!1}}},function(t,r,i){(function(t){var e=void 0!==t&&t||\"undefined\"!=typeof self&&self||window,n=Function.prototype.apply;function a(t,e){this._id=t,this._clearFn=e}r.setTimeout=function(){return new a(n.call(setTimeout,e,arguments),clearTimeout)},r.setInterval=function(){return new a(n.call(setInterval,e,arguments),clearInterval)},r.clearTimeout=r.clearInterval=function(t){t&&t.close()},a.prototype.unref=a.prototype.ref=function(){},a.prototype.close=function(){this._clearFn.call(e,this._id)},r.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},r.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},r._unrefActive=r.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;0<=e&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},i(9),r.setImmediate=\"undefined\"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,r.clearImmediate=\"undefined\"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,i(4))},function(t,e,n){(function(t,m){!function(n,a){\"use strict\";if(!n.setImmediate){var r,i,e,o,t,l=1,u={},s=!1,d=n.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(n);f=f&&f.setTimeout?f:n,r=\"[object process]\"==={}.toString.call(n.process)?function(t){m.nextTick(function(){v(t)})}:function(){if(n.postMessage&&!n.importScripts){var t=!0,e=n.onmessage;return n.onmessage=function(){t=!1},n.postMessage(\"\",\"*\"),n.onmessage=e,t}}()?(o=\"setImmediate$\"+Math.random()+\"$\",t=function(t){t.source===n&&\"string\"==typeof t.data&&0===t.data.indexOf(o)&&v(+t.data.slice(o.length))},n.addEventListener?n.addEventListener(\"message\",t,!1):n.attachEvent(\"onmessage\",t),function(t){n.postMessage(o+t,\"*\")}):n.MessageChannel?((e=new MessageChannel).port1.onmessage=function(t){v(t.data)},function(t){e.port2.postMessage(t)}):d&&\"onreadystatechange\"in d.createElement(\"script\")?(i=d.documentElement,function(t){var e=d.createElement(\"script\");e.onreadystatechange=function(){v(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):function(t){setTimeout(v,0,t)},f.setImmediate=function(t){\"function\"!=typeof t&&(t=new Function(\"\"+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var a={callback:t,args:e};return u[l]=a,r(l),l++},f.clearImmediate=c}function c(t){delete u[t]}function v(t){if(s)setTimeout(v,0,t);else{var e=u[t];if(e){s=!0;try{!function(t){var e=t.callback,n=t.args;switch(n.length){case 0:e();break;case 1:e(n[0]);break;case 2:e(n[0],n[1]);break;case 3:e(n[0],n[1],n[2]);break;default:e.apply(a,n)}}(e)}finally{c(t),s=!1}}}}}(\"undefined\"==typeof self?void 0===t?this:t:self)}).call(this,n(4),n(10))},function(t,e){var n,a,r=t.exports={};function i(){throw new Error(\"setTimeout has not been defined\")}function o(){throw new Error(\"clearTimeout has not been defined\")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n=\"function\"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{a=\"function\"==typeof clearTimeout?clearTimeout:o}catch(t){a=o}}();var u,s=[],d=!1,f=-1;function c(){d&&u&&(d=!1,u.length?s=u.concat(s):f=-1,s.length&&v())}function v(){if(!d){var t=l(c);d=!0;for(var e=s.length;e;){for(u=s,s=[];++f<e;)u&&u[f].run();f=-1,e=s.length}u=null,d=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function h(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||d||l(v)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title=\"browser\",r.browser=!0,r.env={},r.argv=[],r.version=\"\",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(t){return[]},r.binding=function(t){throw new Error(\"process.binding is not supported\")},r.cwd=function(){return\"/\"},r.chdir=function(t){throw new Error(\"process.chdir is not supported\")},r.umask=function(){return 0}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var a=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&\"function\"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?\"symbol\":typeof t},c=o(n(3));n(1);var v=o(n(0)),r=o(n(12)),i=o(n(2));function o(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e,s){var d=new i.default,f=this;if(this.field=t,this.form=e,this.event=s,this.eventType=this.event&&\"type\"in this.event?this.event.type:null,this.validators=new r.default(this),\"customValidators\"in window.validateOptions&&\"object\"===a(window.validateOptions.customValidators))for(var n in window.validateOptions.customValidators)this.validators[n]=window.validateOptions.customValidators[n];this.checkValid=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field;return d.getAttr(t,v.default.fieldIsValid)},this.getPreviousVal=function(){return(0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field).getAttribute(v.default.prevVal)},this.checkIfCurrent=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field).getAttribute(\"name\");return!t||t!==f.event.target.name&&\"submit\"!==f.eventType?null:t},this.checkElig=function(t){var e=!1;try{t&&t in f.validators&&\"events\"in f.validators[t]&&Array.isArray(f.validators[t].events)&&(0===f.validators[t].events.length||-1!==f.validators[t].events.indexOf(f.eventType))&&(e=!0)}catch(t){}return e},this.getValidations=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,e=[],n=d.getAttr(t,v.default.fieldValidators);if(n){var a=d.splitString(n);if(a&&a.length)for(var r=0;r<a.length;r++)f.checkElig(a[r])&&e.push(a[r])}return e},this.getContainer=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,e=arguments[1],n=e?d.getAttr(t,e):null;return n?f.form.querySelector(\"#\"+n):null},this.getCustomErrors=function(){var n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,a={};return f.getValidations(n).forEach(function(t){var e=d.getAttr(n,v.default.invErrPrefix+t);e&&(a[t]=e)}),a},this.getLabel=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,e=null;try{var n=t.parentNode.previousElementSibling;e=n&&\"label\"===n.tagName.toLowerCase()?d.alphaNum(n.innerText):d.nameToString(t.getAttribute(\"name\"))}catch(t){}return e},this.getCallbacks=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,r={valid:{},invalid:{}};return f.getValidations(a).forEach(function(t){var e=d.getAttr(a,v.default.fieldValidCallback+t);e&&(r.valid[t]=e);var n=d.getAttr(a,v.default.fieldInvalidCallback+t);n&&(r.invalid[t]=n)}),r},this.setFieldsValid=function(t,e){try{return Array.isArray(t)&&t.length&&t.forEach(function(t){f.field.getAttribute(\"name\")!==t.getAttribute(\"name\")&&f.valid(t,e)}),!0}catch(t){return!1}},this.setFieldsInvalid=function(t,e){try{return Array.isArray(t)&&t.length&&t.forEach(function(t){f.field.getAttribute(\"name\")!==t.getAttribute(\"name\")&&f.invalid(t,e,null,!0)}),!0}catch(t){return!1}},this.forceEvent=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field;return setTimeout(function(){try{var t=new Event(\"change\");e.dispatchEvent(t)}catch(t){}},100),!0},this.validate=function(){var o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field;try{var l=f.getValidations(o),u=d.getValue(o);return new c.default(function(t,e){f.checkIfCurrent(o)&&u&&o.setAttribute(v.default.prevVal,d.safeString(u)),l&&l.length||t();var n,a,r,i=null;(n=l,a=o,r=u,n.reduce(function(t,e){return t.then(function(){return i=e,f.validators[e].validator(a,r,e)})},new c.default.resolve)).then(function(){t(f.valid(o,i))}).catch(function(t){e(f.invalid(o,i,t))})})}catch(t){}},this.reset=function(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field;return new c.default(function(t,e){try{r.setAttribute(v.default.fieldIsValid,\"true\"),r.removeAttribute(v.default.prevVal);var n=f.getContainer(r,v.default.valTarget);n&&[v.default.fieldValid,v.default.validIcon,v.default.fieldInvalid,v.default.invIcon].forEach(function(t){n.classList.remove(t)});var a=f.getContainer(r,v.default.invMessage);a&&(a.innerText=\"\"),t()}catch(t){e()}})},this.valid=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,e=arguments[1];try{var n=t.getAttribute(\"name\");f.form.querySelectorAll(\"[name=\"+n+\"]\").forEach(function(t){t.setAttribute(v.default.fieldIsValid,\"true\")});var a=f.getContainer(t,v.default.valTarget);a&&(a.classList.remove(v.default.fieldInvalid),a.classList.remove(v.default.invIcon),a.classList.add(v.default.fieldValid),d.getAttr(f.form,v.default.disableIcons)||d.getAttr(t,v.default.disableIcon)||a.classList.add(v.default.validIcon));var r=f.getContainer(t,v.default.invMessage);r&&(r.innerText=\"\");var i=f.getCallbacks(t);if(f.checkIfCurrent(t)&&e&&e in i.valid&&i.valid[e]in window&&\"function\"==typeof window[i.valid[e]])try{d.debounce(window[i.valid[e]],v.default.debounceDefault)(s,f.form,n,e,\"invalid\")}catch(t){}}catch(t){}return!0},this.invalid=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:f.field,e=arguments[1],n=arguments[2],a=arguments[3];try{var r=t.getAttribute(\"name\"),i=n;if(Array.isArray(n)&&(i=d.cleanArray(n).join(\". \")+\".\"),f.form.querySelectorAll(\"[name=\"+r+\"]\").forEach(function(t){t.removeAttribute(v.default.fieldIsValid)}),f.checkIfCurrent(t)||a){var o=f.getContainer(t,v.default.valTarget);o&&(o.classList.remove(v.default.fieldValid),o.classList.remove(v.default.validIcon),o.classList.add(v.default.fieldInvalid),d.getAttr(f.form,v.default.disableIcons)||d.getAttr(t,v.default.disableIcon)||o.classList.add(v.default.invIcon));var l=f.getContainer(t,v.default.invMessage);i&&l&&(l.innerText=i);var u=f.getCallbacks(t);if(e&&e in u.invalid&&u.invalid[e]in window&&\"function\"==typeof window[u.invalid[e]])try{d.debounce(window[u.invalid[e]],v.default.debounceDefault)(s,f.form,r,e,\"invalid\",i)}catch(t){}}}catch(t){}return!1}}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var h=r(n(3));n(1);var p=r(n(0)),a=r(n(2));function r(t){return t&&t.__esModule?t:{default:t}}e.default=function(v){var m=new a.default;return{require:{events:[],validator:function(a,r,i){return new h.default(function(t,e){if(void 0!==r&&/\\S/.test(r))t();else{var n=v.getCustomErrors(a);e(i&&i in n?n[i]:\"This field can't be empty\")}})}},email:{events:[],validator:function(a,r,i){return new h.default(function(t,e){if(void 0!==r&&/\\S/.test(r)&&/^(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/.test(String(r).toLowerCase()))t();else{var n=v.getCustomErrors(a);e(i&&i in n?n[i]:\"Please enter a valid e-mail address\")}})}},length:{events:[],validator:function(i,o,l){return new h.default(function(t,e){var n=m.getAttr(i,p.default.lenMin)||1,a=m.getAttr(i,p.default.lenMax)||1;if(void 0!==o&&/\\S/.test(o)&&o.length>=n&&o.length<=a)t();else{var r=v.getCustomErrors(i);e(l&&l in r?r[l]:\"Should be between \"+n+\" and \"+a+\" characters\")}})}},exact:{events:[],validator:function(r,i,o){return new h.default(function(t,e){var n=m.getAttr(r,p.default.lenExact)||1;if(void 0!==i&&/\\S/.test(i)&&i.length===n)t();else{var a=v.getCustomErrors(r);e(o&&o in a?a[o]:\"Should be \"+n+\" characters\")}})}},compare:{events:[],validator:function(s,d,f){return new h.default(function(t,e){var n,a,r=m.getAttr(s,p.default.fieldCompare),i=r?v.form.querySelector('[name=\"'+r+'\"]'):null,o=i?m.getValue(i):null,l=(n=\"Does not match\",(a=v.getLabel(i))&&(n+=\" \"+a),n);if(void 0!==d&&/\\S/.test(d)&&d===o)t();else{var u=v.getCustomErrors(s);e(f&&f in u?u[f]:l)}})}},number:{events:[],validator:function(a,r,i){return new h.default(function(t,e){if(void 0!==r&&/\\S/.test(r)&&!isNaN(r))t();else{var n=v.getCustomErrors(a);e(i&&i in n?n[i]:\"Should be a number\")}})}},numberexact:{events:[],validator:function(r,i,o){return new h.default(function(t,e){var n=m.getAttr(r,p.default.lenExact)||1;if(void 0!==i&&/\\S/.test(i)&&!isNaN(i)&&i.length===n)t();else{var a=v.getCustomErrors(r);e(o&&o in a?a[o]:\"Should be a \"+n+\" character number\")}})}},numberrange:{events:[],validator:function(i,o,l){return new h.default(function(t,e){var n=m.getAttr(i,p.default.lenMin)||1,a=m.getAttr(i,p.default.lenMax)||1;if(void 0!==o&&/\\S/.test(o)&&o.length>=n&&o.length<=a)t();else{var r=v.getCustomErrors(i);e(l&&l in r?r[l]:\"Should be a number between \"+n+\" and \"+a+\" characters\")}})}},zipcode:{events:[],validator:function(a,r,i){return new h.default(function(t,e){if(void 0!==r&&/\\S/.test(r)&&/^\\d{5}(?:[-\\s]\\d{4})?$/.test(r))t();else{var n=v.getCustomErrors(a);e(i&&i in n?n[i]:\"Please check your Zip/Postal Code\")}})}},creditcard:{events:[],validator:function(r,o,l){return new h.default(function(t,e){var i,n=(i=[0,2,4,6,8,1,3,5,7,9],function(t){for(var e=(t=t.toString()).length,n=1,a=0,r=void 0;e;)r=parseInt(t.charAt(--e),10),a+=(n^=1)?i[r]:r;return a&&a%10==0});if(void 0!==o&&/\\S/.test(o)&&/^\\d{13,}$/.test(o)&&n(o))t();else{var a=v.getCustomErrors(r);e(l&&l in a?a[l]:\"Please enter a valid credit card number (no spaces)\")}})}},phone:{events:[],validator:function(a,r,i){return new h.default(function(t,e){if(void 0!==r&&/\\S/.test(r)&&/((?:\\+|00)[17](?: |\\-)?|(?:\\+|00)[1-9]\\d{0,2}(?: |\\-)?|(?:\\+|00)1\\-\\d{3}(?: |\\-)?)?(0\\d|\\([0-9]{3}\\)|[1-9]{0,3})(?:((?: |\\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\\-)[0-9]{3}(?: |\\-)[0-9]{4})|([0-9]{7}))/.test(r))t();else{var n=v.getCustomErrors(a);e(i&&i in n?n[i]:\"Please enter a valid phone number\")}})}},pattern:{events:[],validator:function(i,o,l){return new h.default(function(t,e){var n=i.getAttribute(p.default.fieldPattern);if(void 0!==n&&n&&n.length){var a=new RegExp(n,\"g\");if(void 0!==o&&/\\S/.test(o)&&a.test(o))t();else{var r=v.getCustomErrors(i);e(l&&l in r?r[l]:\"Incorrect format\")}}else t(\"Problem reading pattern\")})}},contains:{events:[],validator:function(r,i,o){return new h.default(function(t,e){var n=m.getAttr(r,p.default.fieldContains);if(n=n&&n.length?n.toLowerCase():null,void 0!==i&&/\\S/.test(i)&&-1!==i.toLowerCase().indexOf(n))t();else{var a=v.getCustomErrors(r);e(o&&o in a?a[o]:'Should contain \"'+n+'\"')}})}},url:{events:[],validator:function(a,r,i){return new h.default(function(t,e){if(void 0!==r&&/\\S/.test(r)&&/^(https?|ftp):\\/\\/(((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:)*@)?(((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5]))|((([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|\\d|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.)+(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])*([a-z]|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])))\\.?)(:\\d*)?)(\\/((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)+(\\/(([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)*)*)?)?(\\?((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)|[\\uE000-\\uF8FF]|\\/|\\?)*)?(\\#((([a-z]|\\d|-|\\.|_|~|[\\u00A0-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF])|(%[\\da-f]{2})|[!\\$&'\\(\\)\\*\\+,;=]|:|@)|\\/|\\?)*)?$/i.test(String(r).toLowerCase()))t();else{var n=v.getCustomErrors(a);e(i&&i in n?n[i]:'Please enter a valid URL (starts with \"http\" or \"https\")')}})}},requiremin:{events:[],validator:function(l,t,u){return new h.default(function(t,e){var n=l.getAttribute(\"name\"),a=m.getAttr(l,p.default.minThresh)||1,r=v.form.querySelectorAll(\"[name=\"+n+\"]\"),i=0;if(r&&r[0]&&r.forEach(function(t){m.getValue(t)&&i++}),a<=i)t();else{var o=v.getCustomErrors(l);e(u&&u in o?o[u]:\"Please select \"+m.digitWord(a))}})}},dependent:{events:[],validator:function(f,t,c){try{return new h.default(function(t,e){var n=m.getAttr(f,p.default.dependentFields),a=n?m.splitString(n):[],r=a.length?a.map(function(t){return'[name=\"'+t+'\"]'}):[],i=r.length?v.form.querySelectorAll(r.join(\",\")):[],o=0,l=[];if(i.forEach(function(t){v.checkValid(t)?o++:l.push(t)}),o>=i.length)t();else{var u=null,s=v.getCustomErrors(f);if(c&&c in s)u=s[c];else{var d=l.length?l.map(function(t){return v.getLabel(t)}):[];u=d.length?\"Please complete \"+d.join(\", \"):null,l.length&&v.checkIfCurrent(f)&&v.setFieldsInvalid(l,c)}e(u)}})}catch(t){}}},expireddate:{events:[],validator:function(o,t,l){return new h.default(function(t,e){var a={},r=[];if([\"year\",\"month\",\"day\"].forEach(function(t){var e=v.form.querySelector(\"[\"+p.default.expireDate+'=\"'+t+'\"]'),n=e?m.getValue(e):null;e&&n&&r.push(e),\"year\"===t&&(a[t]=n&&!isNaN(n)&&2===n.length?\"20\"+n.toString():n),\"month\"!==t&&\"day\"!==t||(a[t]=n&&!isNaN(n)&&1===n.length?\"0\"+n.toString():n)}),!a.year||!a.month)return t(),!0;var n=(new Date).toISOString().slice(0,10).replace(/-/g,\"\");if((n=a.day?parseInt(n):parseInt(n.substring(0,6)))<=parseInt(a.year+a.month+a.day))t(v.setFieldsValid(r,l));else{var i=v.getCustomErrors(o);e(l&&l in i?i[l]:\"Appears to be expired - please check date\")}})}},ajax:{events:[],validator:function(f,t,c){return new h.default(function(r,i){try{if(v.checkIfCurrent(f)){var t=v.getContainer(f,p.default.invMessage);if(t){var e=m.getAttr(f,p.default.ajaxProcessing);t.innerText=e||\"Checking...\"}var n=f.getAttribute(\"name\"),a=m.getAttr(f,p.default.ajaxEndpoint),o=m.getAttr(f,p.default.ajaxKey),l=!0;if(a&&p.default.safeEndpoints&&/^http/.test(a.toLowerCase())&&(l=!1),l&&a&&o){var u=m.getValue(f),s=a+\"?\"+n+\"=\"+u,d=new XMLHttpRequest;d.open(\"GET\",s),d.timeout=p.default.ajaxTimeout,d.setRequestHeader(\"Content-Type\",\"application/json\"),d.onload=function(){if(200===d.status){var t=JSON.parse(d.responseText),e=f.getAttribute(p.default.ajaxValue)||u;if(t&&t[o].toString()===e)r(v.forceEvent(f));else{var n=v.getCustomErrors(f),a=c&&c in n?n[c]:\"Does not validate\";i(a)}}else r(v.forceEvent(f))},d.onerror=function(t){r(v.forceEvent(f))},d.ontimeout=function(t){r(v.forceEvent(f))},d.send()}else r(v.forceEvent(f))}else r(v.forceEvent(f))}catch(t){r()}})}}}}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var a,r=n(3),p=(a=r)&&a.__esModule?a:{default:a};e.default=function(s){var d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,f=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},c=void 0,v=void 0,m=void 0,h=[];return function(){var t,n,e=\"function\"==typeof(t=d)?t():t,a=(new Date).getTime(),r=!c||e<a-c;c=a;for(var i=arguments.length,o=Array(i),l=0;l<i;l++)o[l]=arguments[l];if(r&&f.leading)return f.accumulate?new p.default.resolve(s.call(this,[o])).then(function(t){return t[0]}):new p.default.resolve(s.call.apply(s,[this].concat(o)));if(v?clearTimeout(m):((n={}).promise=new p.default(function(t,e){n.resolve=t,n.reject=e}),v=n),h.push(o),m=setTimeout(function(){var t=v;clearTimeout(m),new p.default.resolve(f.accumulate?s.call(this,h):s.apply(this,h[h.length-1])).then(t.resolve,t.reject),h=[],v=null}.bind(this),e),f.accumulate){var u=h.length-1;return v.promise.then(function(t){return t[u]})}return v.promise}}},function(t,e,n){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var a,r=n(0),i=(a=r)&&a.__esModule?a:{default:a};var o=' \\t[data-jsv-form-tooltip] { \\t  position: relative; \\t  cursor: pointer; \\t  outline: none!important; \\t} \\t[data-jsv-form-tooltip]:before, \\t[data-jsv-form-tooltip] { \\t  position: relative; \\t  cursor: pointer; \\t} \\t[data-jsv-form-tooltip]:before, \\t[data-jsv-form-tooltip]:after { \\t  position: absolute; \\t  visibility: hidden; \\t  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\"; \\t  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0); \\t  opacity: 0; \\t  -webkit-transition: \\t\\t  opacity 0.2s ease-in-out, \\t\\t\\tvisibility 0.2s ease-in-out, \\t\\t\\t-webkit-transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24); \\t\\t-moz-transition: \\t\\t\\topacity 0.2s ease-in-out, \\t\\t\\tvisibility 0.2s ease-in-out, \\t\\t\\t-moz-transform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24); \\t\\ttransition: \\t\\t\\topacity 0.2s ease-in-out, \\t\\t\\tvisibility 0.2s ease-in-out, \\t\\t\\ttransform 0.2s cubic-bezier(0.71, 1.7, 0.77, 1.24); \\t  -webkit-transform: translate3d(0, 0, 0); \\t  -moz-transform:    translate3d(0, 0, 0); \\t  transform:         translate3d(0, 0, 0); \\t  pointer-events: none; \\t} \\t[data-jsv-form-tooltip]:hover:before, \\t[data-jsv-form-tooltip]:hover:after { \\t  visibility: visible; \\t  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\"; \\t  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100); \\t  opacity: 1; \\t} \\t[data-jsv-form-tooltip]:before { \\t  border: 6px solid transparent; \\t  background: transparent; \\t  content: \"\"; \\t} \\t[data-jsv-form-tooltip]:after { \\t  padding: 8px; \\t  min-width: 120px; \\t  white-space: nowrap; \\t  background-color: #000; \\t  background-color: hsla(0, 0%, 20%, 0.9); \\t  color: #fff; \\t  content: attr(data-jsv-form-tooltip); \\t  font-size: 12px; \\t  line-height: 1.2; \\t} \\t[data-jsv-form-tooltip]:before, \\t[data-jsv-form-tooltip]:after { \\t  bottom: 100%; \\t  left: 50%; \\t} \\t[data-jsv-form-tooltip]:before { \\t  margin-left: -6px; \\t  margin-bottom: -12px; \\t  border-top-color: #000; \\t  border-top-color: hsla(0, 0%, 20%, 0.9); \\t} \\t[data-jsv-form-tooltip]:after { \\t  margin-left: -60px; \\t  z-index: 1; \\t} \\t[data-jsv-form-tooltip]:hover:before, \\t[data-jsv-form-tooltip]:hover:after { \\t  -webkit-transform: translateY(-12px); \\t  -moz-transform:    translateY(-12px); \\t  transform:         translateY(-12px); \\t} \\t.validate-form-error-message { \\t\\tcolor: '+i.default.isInvalidColor+\"; \\t} \\t.validate-form-error-message.well { \\t\\tborder-color: \"+i.default.isInvalidColor+\"; \\t} \\t.validate-form-success-message { \\t\\tcolor: \"+i.default.isValidColor+\"; \\t} \\t.validate-form-success-message.well { \\t\\tborder-color: \"+i.default.isValidColor+\"; \\t} \\t.validate-field-error-message { \\t\\twidth: 100%; \\t\\tdisplay: block; \\t\\tcolor: \"+i.default.isInvalidColor+\"; \\t\\tfont: \"+i.default.fieldErrorFont+\";\\t \\t} \\t.validate-form-hidden-message { \\t\\tdisplay: none; \\t} \\t.button-success, .button-success:hover { \\t\\tbackground-color: \"+i.default.isValidColor+\"; \\t} \\t.validate-input { \\t\\tposition: relative; \\t} \\t.validate-input.form-field-invalid input, \\t.validate-input.form-field-invalid textarea, \\t.validate-input.form-field-invalid select { \\t\\tborder: 1px solid \"+i.default.isInvalidColor+\"; \\t} \\t.validate-input.form-field-valid input, \\t.validate-input.form-field-valid textarea, \\t.validate-input.form-field-valid select { \\t\\tborder: 1px solid \"+i.default.isValidColor+'; \\t} \\t.validate-input.form-field-valid-focusout::after { \\t\\tcontent: \"'+i.default.isValidIcon+'\"; \\t\\tcolor: '+i.default.isValidColor+';\\t \\t\\tright:20px; \\t\\ttop:9px; \\t\\tposition:absolute;     \\t} \\t.validate-input.form-field-invalid-focusout::after { \\t\\tcontent: \"'+i.default.isInvalidIcon+'\"; \\t\\tcolor: '+i.default.isInvalidColor+\";\\t \\t\\tright:20px; \\t\\ttop:8px; \\t\\tposition:absolute; \\t} \";e.default=o}]);\n\n//# sourceURL=webpack:///./node_modules/js-simple-validations/dist/js-simple-validations.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/addCSSRule.js":
    /*!************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/addCSSRule.js ***!
      \************************************************************/
    /*! exports provided: addCSSRule */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCSSRule\", function() { return addCSSRule; });\n/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ \"./node_modules/tiny-slider/src/helpers/raf.js\");\n// cross browsers addRule method\n\nfunction addCSSRule(sheet, selector, rules, index) {\n  // return raf(function() {\n    'insertRule' in sheet ?\n      sheet.insertRule(selector + '{' + rules + '}', index) :\n      sheet.addRule(selector, rules, index);\n  // });\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/addCSSRule.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/addClass.js":
    /*!**********************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/addClass.js ***!
      \**********************************************************/
    /*! exports provided: addClass */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addClass\", function() { return addClass; });\n/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ \"./node_modules/tiny-slider/src/helpers/hasClass.js\");\n\nvar addClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__[\"classListSupport\"] ?\n    function (el, str) {\n      if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__[\"hasClass\"])(el,  str)) { el.classList.add(str); }\n    } :\n    function (el, str) {\n      if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__[\"hasClass\"])(el,  str)) { el.className += ' ' + str; }\n    };\n\n\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/addClass.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/addEvents.js":
    /*!***********************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/addEvents.js ***!
      \***********************************************************/
    /*! exports provided: addEvents */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEvents\", function() { return addEvents; });\n/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ \"./node_modules/tiny-slider/src/helpers/passiveOption.js\");\n\n\nfunction addEvents(el, obj, preventScrolling) {\n  for (var prop in obj) {\n    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__[\"passiveOption\"] : false;\n    el.addEventListener(prop, obj[prop], option);\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/addEvents.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js ***!
      \*******************************************************************/
    /*! exports provided: arrayFromNodeList */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrayFromNodeList\", function() { return arrayFromNodeList; });\nfunction arrayFromNodeList (nl) {\n  var arr = [];\n  for (var i = 0, l = nl.length; i < l; i++) {\n    arr.push(nl[i]);\n  }\n  return arr;\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/caf.js":
    /*!*****************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/caf.js ***!
      \*****************************************************/
    /*! exports provided: caf */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"caf\", function() { return caf; });\nvar win = window;\n\nvar caf = win.cancelAnimationFrame\n  || win.mozCancelAnimationFrame\n  || function(id){ clearTimeout(id); };\n\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/caf.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/calc.js":
    /*!******************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/calc.js ***!
      \******************************************************/
    /*! exports provided: calc */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calc\", function() { return calc; });\n/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ \"./node_modules/tiny-slider/src/helpers/getBody.js\");\n/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ \"./node_modules/tiny-slider/src/helpers/setFakeBody.js\");\n/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ \"./node_modules/tiny-slider/src/helpers/resetFakeBody.js\");\n// get css-calc \n// @return - false | calc | -webkit-calc | -moz-calc\n// @usage - var calc = getCalc(); \n\n\n\n\nfunction calc() {\n  var doc = document, \n      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__[\"getBody\"])(),\n      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__[\"setFakeBody\"])(body),\n      div = doc.createElement('div'), \n      result = false;\n\n  body.appendChild(div);\n  try {\n    var str = '(10px * 10)',\n        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],\n        val;\n    for (var i = 0; i < 3; i++) {\n      val = vals[i];\n      div.style.width = val;\n      if (div.offsetWidth === 100) { \n        result = val.replace(str, ''); \n        break;\n      }\n    }\n  } catch (e) {}\n  \n  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__[\"resetFakeBody\"])(body, docOverflow) : div.remove();\n\n  return result;\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/calc.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/checkStorageValue.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/checkStorageValue.js ***!
      \*******************************************************************/
    /*! exports provided: checkStorageValue */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkStorageValue\", function() { return checkStorageValue; });\nfunction checkStorageValue (value) {\n  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/checkStorageValue.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/classListSupport.js":
    /*!******************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/classListSupport.js ***!
      \******************************************************************/
    /*! exports provided: classListSupport */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"classListSupport\", function() { return classListSupport; });\nvar classListSupport = 'classList' in document.createElement('_');\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/classListSupport.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/createStyleSheet.js":
    /*!******************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/createStyleSheet.js ***!
      \******************************************************************/
    /*! exports provided: createStyleSheet */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createStyleSheet\", function() { return createStyleSheet; });\n// create and append style sheet\nfunction createStyleSheet (media) {\n  // Create the <style> tag\n  var style = document.createElement(\"style\");\n  // style.setAttribute(\"type\", \"text/css\");\n\n  // Add a media (and/or media query) here if you'd like!\n  // style.setAttribute(\"media\", \"screen\")\n  // style.setAttribute(\"media\", \"only screen and (max-width : 1024px)\")\n  if (media) { style.setAttribute(\"media\", media); }\n\n  // WebKit hack :(\n  // style.appendChild(document.createTextNode(\"\"));\n\n  // Add the <style> element to the page\n  document.querySelector('head').appendChild(style);\n\n  return style.sheet ? style.sheet : style.styleSheet;\n};\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/createStyleSheet.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/docElement.js":
    /*!************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/docElement.js ***!
      \************************************************************/
    /*! exports provided: docElement */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"docElement\", function() { return docElement; });\nvar docElement = document.documentElement;\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/docElement.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/events.js":
    /*!********************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/events.js ***!
      \********************************************************/
    /*! exports provided: Events */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Events\", function() { return Events; });\nfunction Events() {\n  return {\n    topics: {},\n    on: function (eventName, fn) {\n      this.topics[eventName] = this.topics[eventName] || [];\n      this.topics[eventName].push(fn);\n    },\n    off: function(eventName, fn) {\n      if (this.topics[eventName]) {\n        for (var i = 0; i < this.topics[eventName].length; i++) {\n          if (this.topics[eventName][i] === fn) {\n            this.topics[eventName].splice(i, 1);\n            break;\n          }\n        }\n      }\n    },\n    emit: function (eventName, data) {\n      data.type = eventName;\n      if (this.topics[eventName]) {\n        this.topics[eventName].forEach(function(fn) {\n          fn(data, eventName);\n        });\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/events.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/extend.js":
    /*!********************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/extend.js ***!
      \********************************************************/
    /*! exports provided: extend */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extend\", function() { return extend; });\nfunction extend() {\n  var obj, name, copy,\n      target = arguments[0] || {},\n      i = 1,\n      length = arguments.length;\n\n  for (; i < length; i++) {\n    if ((obj = arguments[i]) !== null) {\n      for (name in obj) {\n        copy = obj[name];\n\n        if (target === copy) {\n          continue;\n        } else if (copy !== undefined) {\n          target[name] = copy;\n        }\n      }\n    }\n  }\n  return target;\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/extend.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/forEach.js":
    /*!*********************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/forEach.js ***!
      \*********************************************************/
    /*! exports provided: forEach */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"forEach\", function() { return forEach; });\n// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/\nfunction forEach (arr, callback, scope) {\n  for (var i = 0, l = arr.length; i < l; i++) {\n    callback.call(scope, arr[i], i);\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/forEach.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/getAttr.js":
    /*!*********************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/getAttr.js ***!
      \*********************************************************/
    /*! exports provided: getAttr */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAttr\", function() { return getAttr; });\nfunction getAttr(el, attr) {\n  return el.getAttribute(attr);\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/getAttr.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/getBody.js":
    /*!*********************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/getBody.js ***!
      \*********************************************************/
    /*! exports provided: getBody */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBody\", function() { return getBody; });\nfunction getBody () {\n  var doc = document,\n      body = doc.body;\n\n  if (!body) {\n    body = doc.createElement('body');\n    body.fake = true;\n  }\n\n  return body;\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/getBody.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/getCssRulesLength.js ***!
      \*******************************************************************/
    /*! exports provided: getCssRulesLength */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCssRulesLength\", function() { return getCssRulesLength; });\nfunction getCssRulesLength(sheet) {\n  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;\n  return rule.length;\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/getCssRulesLength.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/getEndProperty.js":
    /*!****************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/getEndProperty.js ***!
      \****************************************************************/
    /*! exports provided: getEndProperty */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEndProperty\", function() { return getEndProperty; });\n// get transitionend, animationend based on transitionDuration\n// @propin: string\n// @propOut: string, first-letter uppercase\n// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd\nfunction getEndProperty(propIn, propOut) {\n  var endProp = false;\n  if (/^Webkit/.test(propIn)) {\n    endProp = 'webkit' + propOut + 'End';\n  } else if (/^O/.test(propIn)) {\n    endProp = 'o' + propOut + 'End';\n  } else if (propIn) {\n    endProp = propOut.toLowerCase() + 'end';\n  }\n  return endProp;\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/getEndProperty.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/getSlideId.js":
    /*!************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/getSlideId.js ***!
      \************************************************************/
    /*! exports provided: getSlideId */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSlideId\", function() { return getSlideId; });\nfunction getSlideId() {\n  var id = window.tnsId;\n  window.tnsId = !id ? 1 : id + 1;\n  \n  return 'tns' + window.tnsId;\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/getSlideId.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/getTouchDirection.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/getTouchDirection.js ***!
      \*******************************************************************/
    /*! exports provided: getTouchDirection */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTouchDirection\", function() { return getTouchDirection; });\nfunction getTouchDirection(angle, range) {\n  var direction = false,\n      gap = Math.abs(90 - Math.abs(angle));\n      \n  if (gap >= 90 - range) {\n    direction = 'horizontal';\n  } else if (gap <= range) {\n    direction = 'vertical';\n  }\n\n  return direction;\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/getTouchDirection.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/has3DTransforms.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/has3DTransforms.js ***!
      \*****************************************************************/
    /*! exports provided: has3DTransforms */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"has3DTransforms\", function() { return has3DTransforms; });\n/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ \"./node_modules/tiny-slider/src/helpers/getBody.js\");\n/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ \"./node_modules/tiny-slider/src/helpers/setFakeBody.js\");\n/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ \"./node_modules/tiny-slider/src/helpers/resetFakeBody.js\");\n\n\n\n\nfunction has3DTransforms(tf){\n  if (!tf) { return false; }\n  if (!window.getComputedStyle) { return false; }\n  \n  var doc = document,\n      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__[\"getBody\"])(),\n      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__[\"setFakeBody\"])(body),\n      el = doc.createElement('p'),\n      has3d,\n      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';\n\n  cssTF += 'transform';\n\n  // Add it to the body to get the computed style\n  body.insertBefore(el, null);\n\n  el.style[tf] = 'translate3d(1px,1px,1px)';\n  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);\n\n  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__[\"resetFakeBody\"])(body, docOverflow) : el.remove();\n\n  return (has3d !== undefined && has3d.length > 0 && has3d !== \"none\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/has3DTransforms.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/hasAttr.js":
    /*!*********************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/hasAttr.js ***!
      \*********************************************************/
    /*! exports provided: hasAttr */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasAttr\", function() { return hasAttr; });\nfunction hasAttr(el, attr) {\n  return el.hasAttribute(attr);\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/hasAttr.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/hasClass.js":
    /*!**********************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/hasClass.js ***!
      \**********************************************************/
    /*! exports provided: classListSupport, hasClass */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasClass\", function() { return hasClass; });\n/* harmony import */ var _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classListSupport.js */ \"./node_modules/tiny-slider/src/helpers/classListSupport.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"classListSupport\", function() { return _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__[\"classListSupport\"]; });\n\n\n\nvar hasClass = _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__[\"classListSupport\"] ?\n    function (el, str) { return el.classList.contains(str); } :\n    function (el, str) { return el.className.indexOf(str) >= 0; };\n\n\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/hasClass.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/hideElement.js":
    /*!*************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/hideElement.js ***!
      \*************************************************************/
    /*! exports provided: hideElement */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideElement\", function() { return hideElement; });\nfunction hideElement(el, forceHide) {\n  if (el.style.display !== 'none') { el.style.display = 'none'; }\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/hideElement.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/isNodeList.js":
    /*!************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/isNodeList.js ***!
      \************************************************************/
    /*! exports provided: isNodeList */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNodeList\", function() { return isNodeList; });\nfunction isNodeList(el) {\n  // Only NodeList has the \"item()\" function\n  return typeof el.item !== \"undefined\"; \n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/isNodeList.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/isVisible.js":
    /*!***********************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/isVisible.js ***!
      \***********************************************************/
    /*! exports provided: isVisible */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isVisible\", function() { return isVisible; });\nfunction isVisible(el) {\n  return window.getComputedStyle(el).display !== 'none';\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/isVisible.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/jsTransform.js":
    /*!*************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/jsTransform.js ***!
      \*************************************************************/
    /*! exports provided: jsTransform */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"jsTransform\", function() { return jsTransform; });\nfunction jsTransform(element, attr, prefix, postfix, to, duration, callback) {\n  var tick = Math.min(duration, 10),\n      unit = (to.indexOf('%') >= 0) ? '%' : 'px',\n      to = to.replace(unit, ''),\n      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),\n      positionTick = (to - from) / duration * tick,\n      running;\n\n  setTimeout(moveElement, tick);\n  function moveElement() {\n    duration -= tick;\n    from += positionTick;\n    element.style[attr] = prefix + from + unit + postfix;\n    if (duration > 0) { \n      setTimeout(moveElement, tick); \n    } else {\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/jsTransform.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/mediaquerySupport.js ***!
      \*******************************************************************/
    /*! exports provided: mediaquerySupport */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mediaquerySupport\", function() { return mediaquerySupport; });\n/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ \"./node_modules/tiny-slider/src/helpers/getBody.js\");\n/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ \"./node_modules/tiny-slider/src/helpers/setFakeBody.js\");\n/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ \"./node_modules/tiny-slider/src/helpers/resetFakeBody.js\");\n\n\n\n\nfunction mediaquerySupport () {\n  var doc = document,\n      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__[\"getBody\"])(),\n      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__[\"setFakeBody\"])(body),\n      div = doc.createElement('div'),\n      style = doc.createElement('style'),\n      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',\n      position;\n\n  style.type = 'text/css';\n  div.className = 'tns-mq-test';\n\n  body.appendChild(style);\n  body.appendChild(div);\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = rule;\n  } else {\n    style.appendChild(doc.createTextNode(rule));\n  }\n\n  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];\n\n  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__[\"resetFakeBody\"])(body, docOverflow) : div.remove();\n\n  return position === \"absolute\";\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/mediaquerySupport.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/passiveOption.js":
    /*!***************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/passiveOption.js ***!
      \***************************************************************/
    /*! exports provided: passiveOption */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"passiveOption\", function() { return passiveOption; });\n// Test via a getter in the options object to see if the passive property is accessed\nvar supportsPassive = false;\ntry {\n  var opts = Object.defineProperty({}, 'passive', {\n    get: function() {\n      supportsPassive = true;\n    }\n  });\n  window.addEventListener(\"test\", null, opts);\n} catch (e) {}\nvar passiveOption = supportsPassive ? { passive: true } : false;\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/passiveOption.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/percentageLayout.js":
    /*!******************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/percentageLayout.js ***!
      \******************************************************************/
    /*! exports provided: percentageLayout */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"percentageLayout\", function() { return percentageLayout; });\n/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ \"./node_modules/tiny-slider/src/helpers/getBody.js\");\n/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ \"./node_modules/tiny-slider/src/helpers/setFakeBody.js\");\n/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ \"./node_modules/tiny-slider/src/helpers/resetFakeBody.js\");\n// get subpixel support value\n// @return - boolean\n\n\n\n\nfunction percentageLayout() {\n  // check subpixel layout supporting\n  var doc = document,\n      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__[\"getBody\"])(),\n      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__[\"setFakeBody\"])(body),\n      wrapper = doc.createElement('div'),\n      outer = doc.createElement('div'),\n      str = '',\n      count = 70,\n      perPage = 3,\n      supported = false;\n\n  wrapper.className = \"tns-t-subp2\";\n  outer.className = \"tns-t-ct\";\n\n  for (var i = 0; i < count; i++) {\n    str += '<div></div>';\n  }\n\n  outer.innerHTML = str;\n  wrapper.appendChild(outer);\n  body.appendChild(wrapper);\n\n  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;\n\n  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__[\"resetFakeBody\"])(body, docOverflow) : wrapper.remove();\n\n  return supported;\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/percentageLayout.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/raf.js":
    /*!*****************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/raf.js ***!
      \*****************************************************/
    /*! exports provided: raf */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raf\", function() { return raf; });\nvar win = window;\n\nvar raf = win.requestAnimationFrame\n  || win.webkitRequestAnimationFrame\n  || win.mozRequestAnimationFrame\n  || win.msRequestAnimationFrame\n  || function(cb) { return setTimeout(cb, 16); };\n\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/raf.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/removeAttrs.js":
    /*!*************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/removeAttrs.js ***!
      \*************************************************************/
    /*! exports provided: removeAttrs */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeAttrs\", function() { return removeAttrs; });\n/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ \"./node_modules/tiny-slider/src/helpers/isNodeList.js\");\n\n\nfunction removeAttrs(els, attrs) {\n  els = (Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__[\"isNodeList\"])(els) || els instanceof Array) ? els : [els];\n  attrs = (attrs instanceof Array) ? attrs : [attrs];\n\n  var attrLength = attrs.length;\n  for (var i = els.length; i--;) {\n    for (var j = attrLength; j--;) {\n      els[i].removeAttribute(attrs[j]);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/removeAttrs.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/removeCSSRule.js":
    /*!***************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/removeCSSRule.js ***!
      \***************************************************************/
    /*! exports provided: removeCSSRule */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeCSSRule\", function() { return removeCSSRule; });\n/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ \"./node_modules/tiny-slider/src/helpers/raf.js\");\n// cross browsers addRule method\n\nfunction removeCSSRule(sheet, index) {\n  // return raf(function() {\n    'deleteRule' in sheet ?\n      sheet.deleteRule(index) :\n      sheet.removeRule(index);\n  // });\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/removeCSSRule.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/removeClass.js":
    /*!*************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/removeClass.js ***!
      \*************************************************************/
    /*! exports provided: removeClass */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClass\", function() { return removeClass; });\n/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ \"./node_modules/tiny-slider/src/helpers/hasClass.js\");\n\nvar removeClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__[\"classListSupport\"] ?\n    function (el, str) {\n      if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__[\"hasClass\"])(el,  str)) { el.classList.remove(str); }\n    } :\n    function (el, str) {\n      if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__[\"hasClass\"])(el, str)) { el.className = el.className.replace(str, ''); }\n    };\n\n\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/removeClass.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/removeEvents.js":
    /*!**************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/removeEvents.js ***!
      \**************************************************************/
    /*! exports provided: removeEvents */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeEvents\", function() { return removeEvents; });\n/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ \"./node_modules/tiny-slider/src/helpers/passiveOption.js\");\n\n\nfunction removeEvents(el, obj) {\n  for (var prop in obj) {\n    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__[\"passiveOption\"] : false;\n    el.removeEventListener(prop, obj[prop], option);\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/removeEvents.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/resetFakeBody.js":
    /*!***************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/resetFakeBody.js ***!
      \***************************************************************/
    /*! exports provided: resetFakeBody */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetFakeBody\", function() { return resetFakeBody; });\n/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ \"./node_modules/tiny-slider/src/helpers/docElement.js\");\n\n\nfunction resetFakeBody (body, docOverflow) {\n  if (body.fake) {\n    body.remove();\n    _docElement_js__WEBPACK_IMPORTED_MODULE_0__[\"docElement\"].style.overflow = docOverflow;\n    // Trigger layout so kinetic scrolling isn't disabled in iOS6+\n    // eslint-disable-next-line\n    _docElement_js__WEBPACK_IMPORTED_MODULE_0__[\"docElement\"].offsetHeight;\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/resetFakeBody.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/setAttrs.js":
    /*!**********************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/setAttrs.js ***!
      \**********************************************************/
    /*! exports provided: setAttrs */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAttrs\", function() { return setAttrs; });\n/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ \"./node_modules/tiny-slider/src/helpers/isNodeList.js\");\n\n\nfunction setAttrs(els, attrs) {\n  els = (Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__[\"isNodeList\"])(els) || els instanceof Array) ? els : [els];\n  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }\n\n  for (var i = els.length; i--;) {\n    for(var key in attrs) {\n      els[i].setAttribute(key, attrs[key]);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/setAttrs.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/setFakeBody.js":
    /*!*************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/setFakeBody.js ***!
      \*************************************************************/
    /*! exports provided: setFakeBody */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFakeBody\", function() { return setFakeBody; });\n/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ \"./node_modules/tiny-slider/src/helpers/docElement.js\");\n\n\nfunction setFakeBody (body) {\n  var docOverflow = '';\n  if (body.fake) {\n    docOverflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__[\"docElement\"].style.overflow;\n    //avoid crashing IE8, if background image is used\n    body.style.background = '';\n    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible\n    body.style.overflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__[\"docElement\"].style.overflow = 'hidden';\n    _docElement_js__WEBPACK_IMPORTED_MODULE_0__[\"docElement\"].appendChild(body);\n  }\n\n  return docOverflow;\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/setFakeBody.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/setLocalStorage.js":
    /*!*****************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/setLocalStorage.js ***!
      \*****************************************************************/
    /*! exports provided: setLocalStorage */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLocalStorage\", function() { return setLocalStorage; });\nfunction setLocalStorage(storage, key, value, access) {\n  if (access) {\n    try { storage.setItem(key, value); } catch (e) {}\n  }\n  return value;\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/setLocalStorage.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/showElement.js":
    /*!*************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/showElement.js ***!
      \*************************************************************/
    /*! exports provided: showElement */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showElement\", function() { return showElement; });\nfunction showElement(el, forceHide) {\n  if (el.style.display === 'none') { el.style.display = ''; }\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/showElement.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/toDegree.js":
    /*!**********************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/toDegree.js ***!
      \**********************************************************/
    /*! exports provided: toDegree */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDegree\", function() { return toDegree; });\nfunction toDegree (y, x) {\n  return Math.atan2(y, x) * (180 / Math.PI);\n}\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/toDegree.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/helpers/whichProperty.js":
    /*!***************************************************************!*\
      !*** ./node_modules/tiny-slider/src/helpers/whichProperty.js ***!
      \***************************************************************/
    /*! exports provided: whichProperty */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"whichProperty\", function() { return whichProperty; });\nfunction whichProperty(props){\n  if (typeof props === 'string') {\n    var arr = [props],\n        Props = props.charAt(0).toUpperCase() + props.substr(1),\n        prefixes = ['Webkit', 'Moz', 'ms', 'O'];\n        \n    prefixes.forEach(function(prefix) {\n      if (prefix !== 'ms' || props === 'transform') {\n        arr.push(prefix + Props);\n      }\n    });\n\n    props = arr;\n  }\n\n  var el = document.createElement('fakeelement'),\n      len = props.length;\n  for(var i = 0; i < props.length; i++){\n    var prop = props[i];\n    if( el.style[prop] !== undefined ){ return prop; }\n  }\n\n  return false; // explicit for ie9-\n}\n\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/helpers/whichProperty.js?");

        /***/
    }),

    /***/
    "./node_modules/tiny-slider/src/tiny-slider.js":
    /*!*****************************************************!*\
      !*** ./node_modules/tiny-slider/src/tiny-slider.js ***!
      \*****************************************************/
    /*! exports provided: tns */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tns\", function() { return tns; });\n/* harmony import */ var _helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/raf.js */ \"./node_modules/tiny-slider/src/helpers/raf.js\");\n/* harmony import */ var _helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/caf.js */ \"./node_modules/tiny-slider/src/helpers/caf.js\");\n/* harmony import */ var _helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/extend.js */ \"./node_modules/tiny-slider/src/helpers/extend.js\");\n/* harmony import */ var _helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/checkStorageValue.js */ \"./node_modules/tiny-slider/src/helpers/checkStorageValue.js\");\n/* harmony import */ var _helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/setLocalStorage.js */ \"./node_modules/tiny-slider/src/helpers/setLocalStorage.js\");\n/* harmony import */ var _helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/getSlideId.js */ \"./node_modules/tiny-slider/src/helpers/getSlideId.js\");\n/* harmony import */ var _helpers_calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/calc.js */ \"./node_modules/tiny-slider/src/helpers/calc.js\");\n/* harmony import */ var _helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/percentageLayout.js */ \"./node_modules/tiny-slider/src/helpers/percentageLayout.js\");\n/* harmony import */ var _helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/mediaquerySupport.js */ \"./node_modules/tiny-slider/src/helpers/mediaquerySupport.js\");\n/* harmony import */ var _helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/createStyleSheet.js */ \"./node_modules/tiny-slider/src/helpers/createStyleSheet.js\");\n/* harmony import */ var _helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/addCSSRule.js */ \"./node_modules/tiny-slider/src/helpers/addCSSRule.js\");\n/* harmony import */ var _helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/removeCSSRule.js */ \"./node_modules/tiny-slider/src/helpers/removeCSSRule.js\");\n/* harmony import */ var _helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/getCssRulesLength.js */ \"./node_modules/tiny-slider/src/helpers/getCssRulesLength.js\");\n/* harmony import */ var _helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/toDegree.js */ \"./node_modules/tiny-slider/src/helpers/toDegree.js\");\n/* harmony import */ var _helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/getTouchDirection.js */ \"./node_modules/tiny-slider/src/helpers/getTouchDirection.js\");\n/* harmony import */ var _helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/forEach.js */ \"./node_modules/tiny-slider/src/helpers/forEach.js\");\n/* harmony import */ var _helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/hasClass.js */ \"./node_modules/tiny-slider/src/helpers/hasClass.js\");\n/* harmony import */ var _helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/addClass.js */ \"./node_modules/tiny-slider/src/helpers/addClass.js\");\n/* harmony import */ var _helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/removeClass.js */ \"./node_modules/tiny-slider/src/helpers/removeClass.js\");\n/* harmony import */ var _helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpers/hasAttr.js */ \"./node_modules/tiny-slider/src/helpers/hasAttr.js\");\n/* harmony import */ var _helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./helpers/getAttr.js */ \"./node_modules/tiny-slider/src/helpers/getAttr.js\");\n/* harmony import */ var _helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers/setAttrs.js */ \"./node_modules/tiny-slider/src/helpers/setAttrs.js\");\n/* harmony import */ var _helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/removeAttrs.js */ \"./node_modules/tiny-slider/src/helpers/removeAttrs.js\");\n/* harmony import */ var _helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/arrayFromNodeList.js */ \"./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js\");\n/* harmony import */ var _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./helpers/hideElement.js */ \"./node_modules/tiny-slider/src/helpers/hideElement.js\");\n/* harmony import */ var _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./helpers/showElement.js */ \"./node_modules/tiny-slider/src/helpers/showElement.js\");\n/* harmony import */ var _helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helpers/isVisible.js */ \"./node_modules/tiny-slider/src/helpers/isVisible.js\");\n/* harmony import */ var _helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helpers/whichProperty.js */ \"./node_modules/tiny-slider/src/helpers/whichProperty.js\");\n/* harmony import */ var _helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./helpers/has3DTransforms.js */ \"./node_modules/tiny-slider/src/helpers/has3DTransforms.js\");\n/* harmony import */ var _helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./helpers/getEndProperty.js */ \"./node_modules/tiny-slider/src/helpers/getEndProperty.js\");\n/* harmony import */ var _helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./helpers/addEvents.js */ \"./node_modules/tiny-slider/src/helpers/addEvents.js\");\n/* harmony import */ var _helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./helpers/removeEvents.js */ \"./node_modules/tiny-slider/src/helpers/removeEvents.js\");\n/* harmony import */ var _helpers_events_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./helpers/events.js */ \"./node_modules/tiny-slider/src/helpers/events.js\");\n/* harmony import */ var _helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./helpers/jsTransform.js */ \"./node_modules/tiny-slider/src/helpers/jsTransform.js\");\n// helper functions\nif (!Object.keys) {\n  Object.keys = function (object) {\n    var keys = [];\n    for (var name in object) {\n      if (Object.prototype.hasOwnProperty.call(object, name)) {\n        keys.push(name);\n      }\n    }\n    return keys;\n  };\n}\nif(!(\"remove\" in Element.prototype)){\n  Element.prototype.remove = function(){\n    if(this.parentNode) {\n      this.parentNode.removeChild(this);\n    }\n  };\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar tns = function(options) {\n  options = Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__[\"extend\"])({\n    container: '.slider',\n    mode: 'carousel',\n    axis: 'horizontal',\n    items: 1,\n    gutter: 0,\n    edgePadding: 0,\n    fixedWidth: false,\n    autoWidth: false,\n    viewportMax: false,\n    slideBy: 1,\n    center: false,\n    controls: true,\n    controlsPosition: 'top',\n    controlsText: ['prev', 'next'],\n    controlsContainer: false,\n    prevButton: false,\n    nextButton: false,\n    nav: true,\n    navPosition: 'top',\n    navContainer: false,\n    navAsThumbnails: false,\n    arrowKeys: false,\n    speed: 300,\n    autoplay: false,\n    autoplayPosition: 'top',\n    autoplayTimeout: 5000,\n    autoplayDirection: 'forward',\n    autoplayText: ['start', 'stop'],\n    autoplayHoverPause: false,\n    autoplayButton: false,\n    autoplayButtonOutput: true,\n    autoplayResetOnVisibility: true,\n    animateIn: 'tns-fadeIn',\n    animateOut: 'tns-fadeOut',\n    animateNormal: 'tns-normal',\n    animateDelay: false,\n    loop: true,\n    rewind: false,\n    autoHeight: false,\n    responsive: false,\n    lazyload: false,\n    lazyloadSelector: '.tns-lazy-img',\n    touch: true,\n    mouseDrag: false,\n    swipeAngle: 15,\n    nested: false,\n    preventActionWhenRunning: false,\n    preventScrollOnTouch: false,\n    freezable: true,\n    onInit: false,\n    useLocalStorage: true\n  }, options || {});\n  \n  var doc = document,\n      win = window,\n      KEYS = {\n        ENTER: 13,\n        SPACE: 32,\n        LEFT: 37,\n        RIGHT: 39\n      },\n      tnsStorage = {},\n      localStorageAccess = options.useLocalStorage;\n\n  if (localStorageAccess) {\n    // check browser version and local storage access\n    var browserInfo = navigator.userAgent;\n    var uid = new Date;\n\n    try {\n      tnsStorage = win.localStorage;\n      if (tnsStorage) {\n        tnsStorage.setItem(uid, uid);\n        localStorageAccess = tnsStorage.getItem(uid) == uid;\n        tnsStorage.removeItem(uid);\n      } else {\n        localStorageAccess = false;\n      }\n      if (!localStorageAccess) { tnsStorage = {}; }\n    } catch(e) {\n      localStorageAccess = false;\n    }\n\n    if (localStorageAccess) {\n      // remove storage when browser version changes\n      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {\n        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });\n      }\n      // update browserInfo\n      localStorage['tnsApp'] = browserInfo;\n    }\n  }\n\n  var CALC = tnsStorage['tC'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__[\"checkStorageValue\"])(tnsStorage['tC']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"setLocalStorage\"])(tnsStorage, 'tC', Object(_helpers_calc_js__WEBPACK_IMPORTED_MODULE_6__[\"calc\"])(), localStorageAccess),\n      PERCENTAGELAYOUT = tnsStorage['tPL'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__[\"checkStorageValue\"])(tnsStorage['tPL']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"setLocalStorage\"])(tnsStorage, 'tPL', Object(_helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_7__[\"percentageLayout\"])(), localStorageAccess),\n      CSSMQ = tnsStorage['tMQ'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__[\"checkStorageValue\"])(tnsStorage['tMQ']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"setLocalStorage\"])(tnsStorage, 'tMQ', Object(_helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_8__[\"mediaquerySupport\"])(), localStorageAccess),\n      TRANSFORM = tnsStorage['tTf'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__[\"checkStorageValue\"])(tnsStorage['tTf']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"setLocalStorage\"])(tnsStorage, 'tTf', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__[\"whichProperty\"])('transform'), localStorageAccess),\n      HAS3DTRANSFORMS = tnsStorage['t3D'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__[\"checkStorageValue\"])(tnsStorage['t3D']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"setLocalStorage\"])(tnsStorage, 't3D', Object(_helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_28__[\"has3DTransforms\"])(TRANSFORM), localStorageAccess),\n      TRANSITIONDURATION = tnsStorage['tTDu'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__[\"checkStorageValue\"])(tnsStorage['tTDu']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"setLocalStorage\"])(tnsStorage, 'tTDu', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__[\"whichProperty\"])('transitionDuration'), localStorageAccess),\n      TRANSITIONDELAY = tnsStorage['tTDe'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__[\"checkStorageValue\"])(tnsStorage['tTDe']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"setLocalStorage\"])(tnsStorage, 'tTDe', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__[\"whichProperty\"])('transitionDelay'), localStorageAccess),\n      ANIMATIONDURATION = tnsStorage['tADu'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__[\"checkStorageValue\"])(tnsStorage['tADu']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"setLocalStorage\"])(tnsStorage, 'tADu', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__[\"whichProperty\"])('animationDuration'), localStorageAccess),\n      ANIMATIONDELAY = tnsStorage['tADe'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__[\"checkStorageValue\"])(tnsStorage['tADe']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"setLocalStorage\"])(tnsStorage, 'tADe', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__[\"whichProperty\"])('animationDelay'), localStorageAccess),\n      TRANSITIONEND = tnsStorage['tTE'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__[\"checkStorageValue\"])(tnsStorage['tTE']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"setLocalStorage\"])(tnsStorage, 'tTE', Object(_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__[\"getEndProperty\"])(TRANSITIONDURATION, 'Transition'), localStorageAccess),\n      ANIMATIONEND = tnsStorage['tAE'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__[\"checkStorageValue\"])(tnsStorage['tAE']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__[\"setLocalStorage\"])(tnsStorage, 'tAE', Object(_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__[\"getEndProperty\"])(ANIMATIONDURATION, 'Animation'), localStorageAccess);\n\n  // get element nodes from selectors\n  var supportConsoleWarn = win.console && typeof win.console.warn === \"function\",\n      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'], \n      optionsElements = {};\n      \n  tnsList.forEach(function(item) {\n    if (typeof options[item] === 'string') {\n      var str = options[item],\n          el = doc.querySelector(str);\n      optionsElements[item] = str;\n\n      if (el && el.nodeName) {\n        options[item] = el;\n      } else {\n        if (supportConsoleWarn) { console.warn('Can\\'t find', options[item]); }\n        return;\n      }\n    }\n  });\n\n  // make sure at least 1 slide\n  if (options.container.children.length < 1) {\n    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }\n    return;\n   }\n\n  // update options\n  var responsive = options.responsive,\n      nested = options.nested,\n      carousel = options.mode === 'carousel' ? true : false;\n\n  if (responsive) {\n    // apply responsive[0] to options and remove it\n    if (0 in responsive) {\n      options = Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__[\"extend\"])(options, responsive[0]);\n      delete responsive[0];\n    }\n\n    var responsiveTem = {};\n    for (var key in responsive) {\n      var val = responsive[key];\n      // update responsive\n      // from: 300: 2\n      // to: \n      //   300: { \n      //     items: 2 \n      //   } \n      val = typeof val === 'number' ? {items: val} : val;\n      responsiveTem[key] = val;\n    }\n    responsive = responsiveTem;\n    responsiveTem = null;\n  }\n\n  // update options\n  function updateOptions (obj) {\n    for (var key in obj) {\n      if (!carousel) {\n        if (key === 'slideBy') { obj[key] = 'page'; }\n        if (key === 'edgePadding') { obj[key] = false; }\n        if (key === 'autoHeight') { obj[key] = false; }\n      }\n\n      // update responsive options\n      if (key === 'responsive') { updateOptions(obj[key]); }\n    }\n  }\n  if (!carousel) { updateOptions(options); }\n\n\n  // === define and set variables ===\n  if (!carousel) {\n    options.axis = 'horizontal';\n    options.slideBy = 'page';\n    options.edgePadding = false;\n\n    var animateIn = options.animateIn,\n        animateOut = options.animateOut,\n        animateDelay = options.animateDelay,\n        animateNormal = options.animateNormal;\n  }\n\n  var horizontal = options.axis === 'horizontal' ? true : false,\n      outerWrapper = doc.createElement('div'),\n      innerWrapper = doc.createElement('div'),\n      middleWrapper,\n      container = options.container,\n      containerParent = container.parentNode,\n      containerHTML = container.outerHTML,\n      slideItems = container.children,\n      slideCount = slideItems.length,\n      breakpointZone,\n      windowWidth = getWindowWidth(),\n      isOn = false;\n  if (responsive) { setBreakpointZone(); }\n  if (carousel) { container.className += ' tns-vpfix'; }\n\n  // fixedWidth: viewport > rightBoundary > indexMax\n  var autoWidth = options.autoWidth,\n      fixedWidth = getOption('fixedWidth'),\n      edgePadding = getOption('edgePadding'),\n      gutter = getOption('gutter'),\n      viewport = getViewportWidth(),\n      center = getOption('center'),\n      items = !autoWidth ? Math.floor(getOption('items')) : 1,\n      slideBy = getOption('slideBy'),\n      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,\n      arrowKeys = getOption('arrowKeys'),\n      speed = getOption('speed'),\n      rewind = options.rewind,\n      loop = rewind ? false : options.loop,\n      autoHeight = getOption('autoHeight'),\n      controls = getOption('controls'),\n      controlsText = getOption('controlsText'),\n      nav = getOption('nav'),\n      touch = getOption('touch'),\n      mouseDrag = getOption('mouseDrag'),\n      autoplay = getOption('autoplay'),\n      autoplayTimeout = getOption('autoplayTimeout'),\n      autoplayText = getOption('autoplayText'),\n      autoplayHoverPause = getOption('autoplayHoverPause'),\n      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),\n      sheet = Object(_helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_9__[\"createStyleSheet\"])(),\n      lazyload = options.lazyload,\n      lazyloadSelector = options.lazyloadSelector,\n      slidePositions, // collection of slide positions\n      slideItemsOut = [],\n      cloneCount = loop ? getCloneCountForLoop() : 0,\n      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,\n      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,\n      rightBoundary = fixedWidth ? getRightBoundary() : null,\n      updateIndexBeforeTransform = (!carousel || !loop) ? true : false,\n      // transform\n      transformAttr = horizontal ? 'left' : 'top',\n      transformPrefix = '',\n      transformPostfix = '',\n      // index\n      getIndexMax = (function () {\n        if (fixedWidth) {\n          return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };\n        } else if (autoWidth) {\n          return function() {\n            for (var i = slideCountNew, result = i - 1; i--;) {\n              if (slidePositions[i] > - rightBoundary) { return i; }\n            }\n          };\n        } else {\n          return function() {\n            if (center && carousel && !loop) {\n              return slideCount - 1;\n            } else {\n              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;\n            }\n          };\n        }\n      })(),\n      index = getStartIndex(getOption('startIndex')),\n      indexCached = index,\n      displayIndex = getCurrentSlide(),\n      indexMin = 0,\n      indexMax = !autoWidth ? getIndexMax() : null,\n      // resize\n      resizeTimer,\n      preventActionWhenRunning = options.preventActionWhenRunning,\n      swipeAngle = options.swipeAngle,\n      moveDirectionExpected = swipeAngle ? '?' : true,\n      running = false,\n      onInit = options.onInit,\n      events = new _helpers_events_js__WEBPACK_IMPORTED_MODULE_32__[\"Events\"](),\n      // id, class\n      newContainerClasses = ' tns-slider tns-' + options.mode,\n      slideId = container.id || Object(_helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_5__[\"getSlideId\"])(),\n      disable = getOption('disable'),\n      disabled = false,\n      freezable = options.freezable,\n      freeze = freezable && !autoWidth ? getFreeze() : false,\n      frozen = false,\n      controlsEvents = {\n        'click': onControlsClick,\n        'keydown': onControlsKeydown\n      },\n      navEvents = {\n        'click': onNavClick,\n        'keydown': onNavKeydown\n      },\n      hoverEvents = {\n        'mouseover': mouseoverPause,\n        'mouseout': mouseoutRestart\n      },\n      visibilityEvent = {'visibilitychange': onVisibilityChange},\n      docmentKeydownEvent = {'keydown': onDocumentKeydown},\n      touchEvents = {\n        'touchstart': onPanStart,\n        'touchmove': onPanMove,\n        'touchend': onPanEnd,\n        'touchcancel': onPanEnd\n      }, dragEvents = {\n        'mousedown': onPanStart,\n        'mousemove': onPanMove,\n        'mouseup': onPanEnd,\n        'mouseleave': onPanEnd\n      },\n      hasControls = hasOption('controls'),\n      hasNav = hasOption('nav'),\n      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,\n      hasAutoplay = hasOption('autoplay'),\n      hasTouch = hasOption('touch'),\n      hasMouseDrag = hasOption('mouseDrag'),\n      slideActiveClass = 'tns-slide-active',\n      imgCompleteClass = 'tns-complete',\n      imgEvents = {\n        'load': onImgLoaded,\n        'error': onImgFailed\n      },\n      imgsComplete,\n      liveregionCurrent,\n      preventScroll = options.preventScrollOnTouch === 'force' ? true : false;\n\n  // controls\n  if (hasControls) {\n    var controlsContainer = options.controlsContainer,\n        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',\n        prevButton = options.prevButton,\n        nextButton = options.nextButton,\n        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',\n        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',\n        prevIsButton,\n        nextIsButton;\n  }\n\n  // nav\n  if (hasNav) {\n    var navContainer = options.navContainer,\n        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',\n        navItems,\n        pages = autoWidth ? slideCount : getPages(),\n        pagesCached = 0,\n        navClicked = -1,\n        navCurrentIndex = getCurrentNavIndex(),\n        navCurrentIndexCached = navCurrentIndex,\n        navActiveClass = 'tns-nav-active',\n        navStr = 'Carousel Page ',\n        navStrCurrent = ' (Current Slide)';\n  }\n\n  // autoplay\n  if (hasAutoplay) {\n    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,\n        autoplayButton = options.autoplayButton,\n        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',\n        autoplayHtmlStrings = ['<span class=\\'tns-visually-hidden\\'>', ' animation</span>'],\n        autoplayTimer,\n        animating,\n        autoplayHoverPaused,\n        autoplayUserPaused,\n        autoplayVisibilityPaused;\n  }\n\n  if (hasTouch || hasMouseDrag) {\n    var initPosition = {},\n        lastPosition = {},\n        translateInit,\n        disX,\n        disY,\n        panStart = false,\n        rafIndex,\n        getDist = horizontal ? \n          function(a, b) { return a.x - b.x; } :\n          function(a, b) { return a.y - b.y; };\n  }\n  \n  // disable slider when slidecount <= items\n  if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }\n\n  if (TRANSFORM) {\n    transformAttr = TRANSFORM;\n    transformPrefix = 'translate';\n\n    if (HAS3DTRANSFORMS) {\n      transformPrefix += horizontal ? '3d(' : '3d(0px, ';\n      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';\n    } else {\n      transformPrefix += horizontal ? 'X(' : 'Y(';\n      transformPostfix = ')';\n    }\n\n  }\n\n  if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }\n  initStructure();\n  initSheet();\n  initSliderTransform();\n\n  // === COMMON FUNCTIONS === //\n  function resetVariblesWhenDisable (condition) {\n    if (condition) {\n      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;\n    }\n  }\n\n  function getCurrentSlide () {\n    var tem = carousel ? index - cloneCount : index;\n    while (tem < 0) { tem += slideCount; }\n    return tem%slideCount + 1;\n  }\n\n  function getStartIndex (ind) {\n    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;\n    return carousel ? ind + cloneCount : ind;\n  }\n\n  function getAbsIndex (i) {\n    if (i == null) { i = index; }\n\n    if (carousel) { i -= cloneCount; }\n    while (i < 0) { i += slideCount; }\n\n    return Math.floor(i%slideCount);\n  }\n\n  function getCurrentNavIndex () {\n    var absIndex = getAbsIndex(),\n        result;\n\n    result = navAsThumbnails ? absIndex : \n      fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : \n          Math.floor(absIndex / items);\n\n    // set active nav to the last one when reaches the right edge\n    // if (!loop && carousel && index === indexMax) { result = pages - 1; }\n\n    return result;\n  }\n\n  function getItemsMax () {\n    // fixedWidth or autoWidth while viewportMax is not available\n    if (autoWidth || (fixedWidth && !viewportMax)) {\n      return slideCount - 1;\n    // most cases\n    } else {\n      var str = fixedWidth ? 'fixedWidth' : 'items',\n          arr = [];\n\n      if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }\n\n      if (responsive) {\n        for (var bp in responsive) {\n          var tem = responsive[bp][str];\n          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }\n        }\n      }\n\n      if (!arr.length) { arr.push(0); }\n\n      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));\n    }\n  }\n\n  function getCloneCountForLoop () {\n    var itemsMax = getItemsMax(),\n        result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);\n    result = Math.max(itemsMax, result);\n\n    return hasOption('edgePadding') ? result + 1 : result;\n  }\n\n  function getWindowWidth () {\n    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;\n  }\n\n  function getInsertPosition (pos) {\n    return pos === 'top' ? 'afterbegin' : 'beforeend';\n  }\n\n  function getClientWidth (el) {\n    var div = doc.createElement('div'), rect, width;\n    el.appendChild(div);\n    rect = div.getBoundingClientRect();\n    width = rect.right - rect.left;\n    div.remove();\n    return width || getClientWidth(el.parentNode);\n  }\n\n  function getViewportWidth () {\n    var gap = edgePadding ? edgePadding * 2 - gutter : 0;\n    return getClientWidth(containerParent) - gap;\n  }\n\n  function hasOption (item) {\n    if (options[item]) {\n      return true;\n    } else {\n      if (responsive) {\n        for (var bp in responsive) {\n          if (responsive[bp][item]) { return true; }\n        }\n      }\n      return false;\n    }\n  }\n\n  // get option:\n  // fixed width: viewport, fixedWidth, gutter => items\n  // others: window width => all variables\n  // all: items => slideBy\n  function getOption (item, ww) {\n    if (ww == null) { ww = windowWidth; }\n\n    if (item === 'items' && fixedWidth) {\n      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;\n\n    } else {\n      var result = options[item];\n\n      if (responsive) {\n        for (var bp in responsive) {\n          // bp: convert string to number\n          if (ww >= parseInt(bp)) {\n            if (item in responsive[bp]) { result = responsive[bp][item]; }\n          }\n        }\n      }\n\n      if (item === 'slideBy' && result === 'page') { result = getOption('items'); }\n      if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }\n\n      return result;\n    }\n  }\n\n  function getSlideMarginLeft (i) {\n    return CALC ? \n      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : \n      i * 100 / slideCountNew + '%';\n  }\n\n  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {\n    var str = '';\n\n    if (edgePaddingTem !== undefined) {\n      var gap = edgePaddingTem;\n      if (gutterTem) { gap -= gutterTem; }\n      str = horizontal ?\n        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :\n        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';\n    } else if (gutterTem && !fixedWidthTem) {\n      var gutterTemUnit = '-' + gutterTem + 'px',\n          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';\n      str = 'margin: 0 ' + dir + ';'\n    }\n\n    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }\n    return str;\n  }\n\n  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {\n    if (fixedWidthTem) {\n      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';\n    } else {\n      return CALC ?\n        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :\n        slideCountNew * 100 / itemsTem + '%';\n    }\n  }\n\n  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {\n    var width;\n\n    if (fixedWidthTem) {\n      width = (fixedWidthTem + gutterTem) + 'px';\n    } else {\n      if (!carousel) { itemsTem = Math.floor(itemsTem); }\n      var dividend = carousel ? slideCountNew : itemsTem;\n      width = CALC ? \n        CALC + '(100% / ' + dividend + ')' : \n        100 / dividend + '%';\n    }\n\n    width = 'width:' + width;\n\n    // inner slider: overwrite outer slider styles\n    return nested !== 'inner' ? width + ';' : width + ' !important;';\n  }\n\n  function getSlideGutterStyle (gutterTem) {\n    var str = '';\n\n    // gutter maybe interger || 0\n    // so can't use 'if (gutter)'\n    if (gutterTem !== false) {\n      var prop = horizontal ? 'padding-' : 'margin-',\n          dir = horizontal ? 'right' : 'bottom';\n      str = prop +  dir + ': ' + gutterTem + 'px;';\n    }\n\n    return str;\n  }\n\n  function getCSSPrefix (name, num) {\n    var prefix = name.substring(0, name.length - num).toLowerCase();\n    if (prefix) { prefix = '-' + prefix + '-'; }\n\n    return prefix;\n  }\n\n  function getTransitionDurationStyle (speed) {\n    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';\n  }\n\n  function getAnimationDurationStyle (speed) {\n    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';\n  }\n\n  function initStructure () {\n    var classOuter = 'tns-outer',\n        classInner = 'tns-inner',\n        hasGutter = hasOption('gutter');\n\n    outerWrapper.className = classOuter;\n    innerWrapper.className = classInner;\n    outerWrapper.id = slideId + '-ow';\n    innerWrapper.id = slideId + '-iw';\n\n    // set container properties\n    if (container.id === '') { container.id = slideId; }\n    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';\n    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';\n    if (autoWidth) { newContainerClasses += ' tns-autowidth'; }\n    newContainerClasses += ' tns-' + options.axis;\n    container.className += newContainerClasses;\n\n    // add constrain layer for carousel\n    if (carousel) {\n      middleWrapper = doc.createElement('div');\n      middleWrapper.id = slideId + '-mw';\n      middleWrapper.className = 'tns-ovh';\n\n      outerWrapper.appendChild(middleWrapper);\n      middleWrapper.appendChild(innerWrapper);\n    } else {\n      outerWrapper.appendChild(innerWrapper);\n    }\n\n    if (autoHeight) {\n      var wp = middleWrapper ? middleWrapper : innerWrapper;\n      wp.className += ' tns-ah';\n    }\n\n    containerParent.insertBefore(outerWrapper, container);\n    innerWrapper.appendChild(container);\n\n    // add id, class, aria attributes \n    // before clone slides\n    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__[\"forEach\"])(slideItems, function(item, i) {\n      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(item, 'tns-item');\n      if (!item.id) { item.id = slideId + '-item' + i; }\n      if (!carousel && animateNormal) { Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(item, animateNormal); }\n      Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__[\"setAttrs\"])(item, {\n        'aria-hidden': 'true',\n        'tabindex': '-1'\n      });\n    });\n\n    // ## clone slides\n    // carousel: n + slides + n\n    // gallery:      slides + n\n    if (cloneCount) {\n      var fragmentBefore = doc.createDocumentFragment(), \n          fragmentAfter = doc.createDocumentFragment();\n\n      for (var j = cloneCount; j--;) {\n        var num = j%slideCount,\n            cloneFirst = slideItems[num].cloneNode(true);\n        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__[\"removeAttrs\"])(cloneFirst, 'id');\n        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);\n\n        if (carousel) {\n          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);\n          Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__[\"removeAttrs\"])(cloneLast, 'id');\n          fragmentBefore.appendChild(cloneLast);\n        }\n      }\n\n      container.insertBefore(fragmentBefore, container.firstChild);\n      container.appendChild(fragmentAfter);\n      slideItems = container.children;\n    }\n\n  }\n\n  function initSliderTransform () {\n    // ## images loaded/failed\n    if (hasOption('autoHeight') || autoWidth || !horizontal) {\n      var imgs = container.querySelectorAll('img');\n\n      // add complete class if all images are loaded/failed\n      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__[\"forEach\"])(imgs, function(img) {\n        var src = img.src;\n        \n        if (src.indexOf('data:image') < 0) {\n          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(img, imgEvents);\n          img.src = '';\n          img.src = src;\n          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(img, 'loading');\n\n          // check image cache\n          if (img.complete) { img.naturalWidth !== 0 ? imgLoaded(img) : imgFailed(img); }\n        } else if (!lazyload) {\n          imgLoaded(img);\n        }\n      });\n\n      // All imgs are completed\n      Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__[\"raf\"])(function(){ imgsLoadedCheck(Object(_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__[\"arrayFromNodeList\"])(imgs), function() { imgsComplete = true; }); });\n\n      // Check imgs in window only for auto height\n      if (!autoWidth && horizontal) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }\n\n      lazyload ? initSliderTransformStyleCheck() : Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__[\"raf\"])(function(){ imgsLoadedCheck(Object(_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__[\"arrayFromNodeList\"])(imgs), initSliderTransformStyleCheck); });\n\n    } else {\n      // set container transform property\n      if (carousel) { doContainerTransformSilent(); }\n\n      // update slider tools and events\n      initTools();\n      initEvents();\n    }\n  }\n\n  function initSliderTransformStyleCheck () {\n    if (autoWidth) {\n      // check styles application\n      var num = loop ? index : slideCount - 1;\n      (function stylesApplicationCheck() {\n        slideItems[num - 1].getBoundingClientRect().right.toFixed(2) === slideItems[num].getBoundingClientRect().left.toFixed(2) ?\n        initSliderTransformCore() :\n        setTimeout(function(){ stylesApplicationCheck() }, 16);\n      })();\n    } else {\n      initSliderTransformCore();\n    }\n  }\n\n\n  function initSliderTransformCore () {\n    // run Fn()s which are rely on image loading\n    if (!horizontal || autoWidth) {\n      setSlidePositions();\n\n      if (autoWidth) {\n        rightBoundary = getRightBoundary();\n        if (freezable) { freeze = getFreeze(); }\n        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=\n        resetVariblesWhenDisable(disable || freeze);\n      } else {\n        updateContentWrapperHeight();\n      }\n    }\n\n    // set container transform property\n    if (carousel) { doContainerTransformSilent(); }\n\n    // update slider tools and events\n    initTools();\n    initEvents();\n  }\n\n  function initSheet () {\n    // gallery:\n    // set animation classes and left value for gallery slider\n    if (!carousel) { \n      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {\n        var item = slideItems[i];\n        item.style.left = (i - index) * 100 / items + '%';\n        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(item, animateIn);\n        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(item, animateNormal);\n      }\n    }\n\n    // #### LAYOUT\n\n    // ## INLINE-BLOCK VS FLOAT\n\n    // ## PercentageLayout:\n    // slides: inline-block\n    // remove blank space between slides by set font-size: 0\n\n    // ## Non PercentageLayout:\n    // slides: float\n    //         margin-right: -100%\n    //         margin-left: ~\n\n    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing\n    if (horizontal) {\n      if (PERCENTAGELAYOUT || autoWidth) {\n        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__[\"addCSSRule\"])(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__[\"getCssRulesLength\"])(sheet));\n        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__[\"addCSSRule\"])(sheet, '#' + slideId, 'font-size:0;', Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__[\"getCssRulesLength\"])(sheet));\n      } else if (carousel) {\n        Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__[\"forEach\"])(slideItems, function (slide, i) {\n          slide.style.marginLeft = getSlideMarginLeft(i);\n        });\n      }\n    }\n\n\n    // ## BASIC STYLES\n    if (CSSMQ) {\n      // middle wrapper style\n      if (TRANSITIONDURATION) {\n        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';\n        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__[\"addCSSRule\"])(sheet, '#' + slideId + '-mw', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__[\"getCssRulesLength\"])(sheet));\n      }\n\n      // inner wrapper styles\n      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);\n      Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__[\"addCSSRule\"])(sheet, '#' + slideId + '-iw', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__[\"getCssRulesLength\"])(sheet));\n\n      // container styles\n      if (carousel) {\n        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';\n        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }\n        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__[\"addCSSRule\"])(sheet, '#' + slideId, str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__[\"getCssRulesLength\"])(sheet));\n      }\n\n      // slide styles\n      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';\n      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }\n      // set gallery items transition-duration\n      if (!carousel) {\n        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }\n        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }\n      }\n      if (str) { Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__[\"addCSSRule\"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__[\"getCssRulesLength\"])(sheet)); }\n\n    // non CSS mediaqueries: IE8\n    // ## update inner wrapper, container, slides if needed\n    // set inline styles for inner wrapper & container\n    // insert stylesheet (one line) for slides only (since slides are many)\n    } else {\n      // middle wrapper styles\n      update_carousel_transition_duration();\n\n      // inner wrapper styles\n      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);\n\n      // container styles\n      if (carousel && horizontal && !autoWidth) {\n        container.style.width = getContainerWidth(fixedWidth, gutter, items);\n      }\n\n      // slide styles\n      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';\n      if (gutter) { str += getSlideGutterStyle(gutter); }\n\n      // append to the last line\n      if (str) { Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__[\"addCSSRule\"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__[\"getCssRulesLength\"])(sheet)); }\n    }\n\n    // ## MEDIAQUERIES\n    if (responsive && CSSMQ) {\n      for (var bp in responsive) {\n        // bp: convert string to number\n        bp = parseInt(bp);\n\n        var opts = responsive[bp],\n            str = '',\n            middleWrapperStr = '',\n            innerWrapperStr = '',\n            containerStr = '',\n            slideStr = '',\n            itemsBP = !autoWidth ? getOption('items', bp) : null,\n            fixedWidthBP = getOption('fixedWidth', bp),\n            speedBP = getOption('speed', bp),\n            edgePaddingBP = getOption('edgePadding', bp),\n            autoHeightBP = getOption('autoHeight', bp),\n            gutterBP = getOption('gutter', bp);\n\n        // middle wrapper string\n        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {\n          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';\n        }\n\n        // inner wrapper string\n        if ('edgePadding' in opts || 'gutter' in opts) {\n          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';\n        }\n\n        // container string\n        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {\n          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';\n        }\n        if (TRANSITIONDURATION && 'speed' in opts) {\n          containerStr += getTransitionDurationStyle(speedBP);\n        }\n        if (containerStr) {\n          containerStr = '#' + slideId + '{' + containerStr + '}';\n        }\n\n        // slide string\n        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {\n          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);\n        }\n        if ('gutter' in opts) {\n          slideStr += getSlideGutterStyle(gutterBP);\n        }\n        // set gallery items transition-duration\n        if (!carousel && 'speed' in opts) {\n          if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }\n          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }\n        }\n        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }\n\n        // add up\n        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;\n\n        if (str) {\n          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);\n        }\n      }\n    }\n  }\n\n  function initTools () {\n    // == slides ==\n    updateSlideStatus();\n\n    // == live region ==\n    outerWrapper.insertAdjacentHTML('afterbegin', '<div class=\"tns-liveregion tns-visually-hidden\" aria-live=\"polite\" aria-atomic=\"true\">slide <span class=\"current\">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');\n    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');\n\n    // == autoplayInit ==\n    if (hasAutoplay) {\n      var txt = autoplay ? 'stop' : 'start';\n      if (autoplayButton) {\n        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__[\"setAttrs\"])(autoplayButton, {'data-action': txt});\n      } else if (options.autoplayButtonOutput) {\n        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button data-action=\"' + txt + '\">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');\n        autoplayButton = outerWrapper.querySelector('[data-action]');\n      }\n\n      // add event\n      if (autoplayButton) {\n        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(autoplayButton, {'click': toggleAutoplay});\n      }\n\n      if (autoplay) {\n        startAutoplay();\n        if (autoplayHoverPause) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(container, hoverEvents); }\n        if (autoplayResetOnVisibility) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(container, visibilityEvent); }\n      }\n    }\n \n    // == navInit ==\n    if (hasNav) {\n      var initIndex = !carousel ? 0 : cloneCount;\n      // customized nav\n      // will not hide the navs in case they're thumbnails\n      if (navContainer) {\n        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__[\"setAttrs\"])(navContainer, {'aria-label': 'Carousel Pagination'});\n        navItems = navContainer.children;\n        Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__[\"forEach\"])(navItems, function(item, i) {\n          Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__[\"setAttrs\"])(item, {\n            'data-nav': i,\n            'tabindex': '-1',\n            'aria-label': navStr + (i + 1),\n            'aria-controls': slideId,\n          });\n        });\n\n      // generated nav \n      } else {\n        var navHtml = '',\n            hiddenStr = navAsThumbnails ? '' : 'style=\"display:none\"';\n        for (var i = 0; i < slideCount; i++) {\n          // hide nav items by default\n          navHtml += '<button data-nav=\"' + i +'\" tabindex=\"-1\" aria-controls=\"' + slideId + '\" ' + hiddenStr + ' aria-label=\"' + navStr + (i + 1) +'\"></button>';\n        }\n        navHtml = '<div class=\"tns-nav\" aria-label=\"Carousel Pagination\">' + navHtml + '</div>';\n        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);\n\n        navContainer = outerWrapper.querySelector('.tns-nav');\n        navItems = navContainer.children;\n      }\n\n      updateNavVisibility();\n\n      // add transition\n      if (TRANSITIONDURATION) {\n        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),\n            str = 'transition: all ' + speed / 1000 + 's';\n\n        if (prefix) {\n          str = '-' + prefix + '-' + str;\n        }\n\n        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__[\"addCSSRule\"])(sheet, '[aria-controls^=' + slideId + '-item]', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__[\"getCssRulesLength\"])(sheet));\n      }\n\n      Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__[\"setAttrs\"])(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});\n      Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__[\"removeAttrs\"])(navItems[navCurrentIndex], 'tabindex');\n      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(navItems[navCurrentIndex], navActiveClass);\n\n      // add events\n      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(navContainer, navEvents);\n    }\n\n\n\n    // == controlsInit ==\n    if (hasControls) {\n      if (!controlsContainer && (!prevButton || !nextButton)) {\n        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class=\"tns-controls\" aria-label=\"Carousel Navigation\" tabindex=\"0\"><button data-controls=\"prev\" tabindex=\"-1\" aria-controls=\"' + slideId +'\">' + controlsText[0] + '</button><button data-controls=\"next\" tabindex=\"-1\" aria-controls=\"' + slideId +'\">' + controlsText[1] + '</button></div>');\n\n        controlsContainer = outerWrapper.querySelector('.tns-controls');\n      }\n\n      if (!prevButton || !nextButton) {\n        prevButton = controlsContainer.children[0];\n        nextButton = controlsContainer.children[1];\n      }\n\n      if (options.controlsContainer) {\n        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__[\"setAttrs\"])(controlsContainer, {\n          'aria-label': 'Carousel Navigation',\n          'tabindex': '0'\n        });\n      }\n\n      if (options.controlsContainer || (options.prevButton && options.nextButton)) {\n        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__[\"setAttrs\"])([prevButton, nextButton], {\n          'aria-controls': slideId,\n          'tabindex': '-1',\n        });\n      }\n      \n      if (options.controlsContainer || (options.prevButton && options.nextButton)) {\n        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__[\"setAttrs\"])(prevButton, {'data-controls' : 'prev'});\n        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__[\"setAttrs\"])(nextButton, {'data-controls' : 'next'});\n      }\n\n      prevIsButton = isButton(prevButton);\n      nextIsButton = isButton(nextButton);\n\n      updateControlsStatus();\n\n      // add events\n      if (controlsContainer) {\n        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(controlsContainer, controlsEvents);\n      } else {\n        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(prevButton, controlsEvents);\n        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(nextButton, controlsEvents);\n      }\n    }\n\n    // hide tools if needed\n    disableUI();\n  }\n\n  function initEvents () {\n    // add events\n    if (carousel && TRANSITIONEND) {\n      var eve = {};\n      eve[TRANSITIONEND] = onTransitionEnd;\n      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(container, eve);\n    }\n\n    if (touch) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(container, touchEvents, options.preventScrollOnTouch); }\n    if (mouseDrag) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(container, dragEvents); }\n    if (arrowKeys) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(doc, docmentKeydownEvent); }\n\n    if (nested === 'inner') {\n      events.on('outerResized', function () {\n        resizeTasks();\n        events.emit('innerLoaded', info());\n      });\n    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {\n      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(win, {'resize': onResize});\n    }\n\n    if (autoHeight) {\n      if (nested === 'outer') {\n        events.on('innerLoaded', doAutoHeight);\n      } else if (!disable) { doAutoHeight(); }\n    }\n\n    doLazyLoad();\n    if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }\n\n    events.on('indexChanged', additionalUpdates);\n    if (nested === 'inner') { events.emit('innerLoaded', info()); }\n    if (typeof onInit === 'function') { onInit(info()); }\n    isOn = true;\n  }\n\n  function destroy () {\n    // sheet\n    sheet.disabled = true;\n    if (sheet.ownerNode) { sheet.ownerNode.remove(); }\n\n    // remove win event listeners\n    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(win, {'resize': onResize});\n\n    // arrowKeys, controls, nav\n    if (arrowKeys) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(doc, docmentKeydownEvent); }\n    if (controlsContainer) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(controlsContainer, controlsEvents); }\n    if (navContainer) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(navContainer, navEvents); }\n\n    // autoplay\n    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(container, hoverEvents);\n    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(container, visibilityEvent);\n    if (autoplayButton) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(autoplayButton, {'click': toggleAutoplay}); }\n    if (autoplay) { clearInterval(autoplayTimer); }\n\n    // container\n    if (carousel && TRANSITIONEND) {\n      var eve = {};\n      eve[TRANSITIONEND] = onTransitionEnd;\n      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(container, eve);\n    }\n    if (touch) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(container, touchEvents); }\n    if (mouseDrag) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(container, dragEvents); }\n\n    // cache Object values in options && reset HTML\n    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];\n\n    tnsList.forEach(function(item, i) {\n      var el = item === 'container' ? outerWrapper : options[item];\n\n      if (typeof el === 'object') {\n        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,\n            parentEl = el.parentNode;\n        el.outerHTML = htmlList[i];\n        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;\n      }\n    });\n\n\n    // reset variables\n    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;\n    // check variables\n    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });\n\n    for (var a in this) {\n      if (a !== 'rebuild') { this[a] = null; }\n    }\n    isOn = false;\n  }\n\n// === ON RESIZE ===\n  // responsive || fixedWidth || autoWidth || !horizontal\n  function onResize (e) {\n    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__[\"raf\"])(function(){ resizeTasks(getEvent(e)); });\n  }\n\n  function resizeTasks (e) {\n    if (!isOn) { return; }\n    if (nested === 'outer') { events.emit('outerResized', info(e)); }\n    windowWidth = getWindowWidth();\n    var bpChanged,\n        breakpointZoneTem = breakpointZone,\n        needContainerTransform = false;\n\n    if (responsive) {\n      setBreakpointZone();\n      bpChanged = breakpointZoneTem !== breakpointZone;\n      // if (hasRightDeadZone) { needContainerTransform = true; } // *?\n      if (bpChanged) { events.emit('newBreakpointStart', info(e)); }\n    }\n\n    var indChanged,\n        itemsChanged,\n        itemsTem = items,\n        disableTem = disable,\n        freezeTem = freeze,\n        arrowKeysTem = arrowKeys,\n        controlsTem = controls,\n        navTem = nav,\n        touchTem = touch,\n        mouseDragTem = mouseDrag,\n        autoplayTem = autoplay,\n        autoplayHoverPauseTem = autoplayHoverPause,\n        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,\n        indexTem = index;\n\n    if (bpChanged) {\n      var fixedWidthTem = fixedWidth,\n          autoHeightTem = autoHeight,\n          controlsTextTem = controlsText,\n          centerTem = center,\n          autoplayTextTem = autoplayText;\n\n      if (!CSSMQ) {\n        var gutterTem = gutter,\n            edgePaddingTem = edgePadding;\n      }\n    }\n\n    // get option:\n    // fixed width: viewport, fixedWidth, gutter => items\n    // others: window width => all variables\n    // all: items => slideBy\n    arrowKeys = getOption('arrowKeys');\n    controls = getOption('controls');\n    nav = getOption('nav');\n    touch = getOption('touch');\n    center = getOption('center');\n    mouseDrag = getOption('mouseDrag');\n    autoplay = getOption('autoplay');\n    autoplayHoverPause = getOption('autoplayHoverPause');\n    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');\n\n    if (bpChanged) {\n      disable = getOption('disable');\n      fixedWidth = getOption('fixedWidth');\n      speed = getOption('speed');\n      autoHeight = getOption('autoHeight');\n      controlsText = getOption('controlsText');\n      autoplayText = getOption('autoplayText');\n      autoplayTimeout = getOption('autoplayTimeout');\n\n      if (!CSSMQ) {\n        edgePadding = getOption('edgePadding');\n        gutter = getOption('gutter');\n      }\n    }\n    // update options\n    resetVariblesWhenDisable(disable);\n\n    viewport = getViewportWidth(); // <= edgePadding, gutter\n    if ((!horizontal || autoWidth) && !disable) {\n      setSlidePositions();\n      if (!horizontal) {\n        updateContentWrapperHeight(); // <= setSlidePositions\n        needContainerTransform = true;\n      }\n    }\n    if (fixedWidth || autoWidth) {\n      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter\n                                          // fixedWidth: <= viewport, fixedWidth, gutter\n      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions\n                                // fixedWidth: <= rightBoundary, fixedWidth, gutter\n    }\n\n    if (bpChanged || fixedWidth) {\n      items = getOption('items');\n      slideBy = getOption('slideBy');\n      itemsChanged = items !== itemsTem;\n\n      if (itemsChanged) {\n        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items\n        // check index before transform in case\n        // slider reach the right edge then items become bigger\n        updateIndex();\n      }\n    }\n    \n    if (bpChanged) {\n      if (disable !== disableTem) {\n        if (disable) {\n          disableSlider();\n        } else {\n          enableSlider(); // <= slidePositions, rightBoundary, indexMax\n        }\n      }\n    }\n\n    if (freezable && (bpChanged || fixedWidth || autoWidth)) {\n      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary\n                            // <= fixedWidth: fixedWidth, gutter, rightBoundary\n                            // <= others: items\n\n      if (freeze !== freezeTem) {\n        if (freeze) {\n          doContainerTransform(getContainerTransformValue(getStartIndex(0)));\n          freezeSlider();\n        } else {\n          unfreezeSlider();\n          needContainerTransform = true;\n        }\n      }\n    }\n\n    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility\n    if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }\n\n    if (arrowKeys !== arrowKeysTem) {\n      arrowKeys ?\n        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(doc, docmentKeydownEvent) :\n        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(doc, docmentKeydownEvent);\n    }\n    if (controls !== controlsTem) {\n      if (controls) {\n        if (controlsContainer) {\n          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__[\"showElement\"])(controlsContainer);\n        } else {\n          if (prevButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__[\"showElement\"])(prevButton); }\n          if (nextButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__[\"showElement\"])(nextButton); }\n        }\n      } else {\n        if (controlsContainer) {\n          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__[\"hideElement\"])(controlsContainer);\n        } else {\n          if (prevButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__[\"hideElement\"])(prevButton); }\n          if (nextButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__[\"hideElement\"])(nextButton); }\n        }\n      }\n    }\n    if (nav !== navTem) {\n      nav ?\n        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__[\"showElement\"])(navContainer) :\n        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__[\"hideElement\"])(navContainer);\n    }\n    if (touch !== touchTem) {\n      touch ?\n        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(container, touchEvents, options.preventScrollOnTouch) :\n        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(container, touchEvents);\n    }\n    if (mouseDrag !== mouseDragTem) {\n      mouseDrag ?\n        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(container, dragEvents) :\n        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(container, dragEvents);\n    }\n    if (autoplay !== autoplayTem) {\n      if (autoplay) {\n        if (autoplayButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__[\"showElement\"])(autoplayButton); }\n        if (!animating && !autoplayUserPaused) { startAutoplay(); }\n      } else {\n        if (autoplayButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__[\"hideElement\"])(autoplayButton); }\n        if (animating) { stopAutoplay(); }\n      }\n    }\n    if (autoplayHoverPause !== autoplayHoverPauseTem) {\n      autoplayHoverPause ?\n        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(container, hoverEvents) :\n        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(container, hoverEvents);\n    }\n    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {\n      autoplayResetOnVisibility ?\n        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(doc, visibilityEvent) :\n        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(doc, visibilityEvent);\n    }\n\n    if (bpChanged) {\n      if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }\n\n      if (autoHeight !== autoHeightTem) {\n        if (!autoHeight) { innerWrapper.style.height = ''; }\n      }\n\n      if (controls && controlsText !== controlsTextTem) {\n        prevButton.innerHTML = controlsText[0];\n        nextButton.innerHTML = controlsText[1];\n      }\n\n      if (autoplayButton && autoplayText !== autoplayTextTem) {\n        var i = autoplay ? 1 : 0,\n            html = autoplayButton.innerHTML,\n            len = html.length - autoplayTextTem[i].length;\n        if (html.substring(len) === autoplayTextTem[i]) {\n          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];\n        }\n      }\n    } else {\n      if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }\n    }\n\n    if (itemsChanged || fixedWidth && !autoWidth) {\n      pages = getPages();\n      updateNavVisibility();\n    }\n\n    indChanged = index !== indexTem;\n    if (indChanged) { \n      events.emit('indexChanged', info());\n      needContainerTransform = true;\n    } else if (itemsChanged) {\n      if (!indChanged) { additionalUpdates(); }\n    } else if (fixedWidth || autoWidth) {\n      doLazyLoad(); \n      updateSlideStatus();\n      updateLiveRegion();\n    }\n\n    if (itemsChanged || !carousel) { updateGallerySlidePositions(); }\n\n    if (!disable && !freeze) {\n      // non-meduaqueries: IE8\n      if (bpChanged && !CSSMQ) {\n        // middle wrapper styles\n        if (autoHeight !== autoheightTem || speed !== speedTem) {\n          update_carousel_transition_duration();\n        }\n\n        // inner wrapper styles\n        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {\n          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);\n        }\n\n        if (horizontal) {\n          // container styles\n          if (carousel) {\n            container.style.width = getContainerWidth(fixedWidth, gutter, items);\n          }\n\n          // slide styles\n          var str = getSlideWidthStyle(fixedWidth, gutter, items) + \n                    getSlideGutterStyle(gutter);\n\n          // remove the last line and\n          // add new styles\n          Object(_helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_11__[\"removeCSSRule\"])(sheet, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__[\"getCssRulesLength\"])(sheet) - 1);\n          Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__[\"addCSSRule\"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__[\"getCssRulesLength\"])(sheet));\n        }\n      }\n\n      // auto height\n      if (autoHeight) { doAutoHeight(); }\n\n      if (needContainerTransform) {\n        doContainerTransformSilent();\n        indexCached = index;\n      }\n    }\n\n    if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }\n  }\n\n\n\n\n\n  // === INITIALIZATION FUNCTIONS === //\n  function getFreeze () {\n    if (!fixedWidth && !autoWidth) {\n      var a = center ? items - (items - 1) / 2 : items;\n      return  slideCount <= a;\n    }\n\n    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],\n        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;\n\n    if (center) {\n      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;\n    }\n\n    return width <= vp;\n  }\n\n  function setBreakpointZone () {\n    breakpointZone = 0;\n    for (var bp in responsive) {\n      bp = parseInt(bp); // convert string to number\n      if (windowWidth >= bp) { breakpointZone = bp; }\n    }\n  }\n\n  // (slideBy, indexMin, indexMax) => index\n  var updateIndex = (function () {\n    return loop ? \n      carousel ?\n        // loop + carousel\n        function () {\n          var leftEdge = indexMin,\n              rightEdge = indexMax;\n\n          leftEdge += slideBy;\n          rightEdge -= slideBy;\n\n          // adjust edges when has edge paddings\n          // or fixed-width slider with extra space on the right side\n          if (edgePadding) {\n            leftEdge += 1;\n            rightEdge -= 1;\n          } else if (fixedWidth) {\n            if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }\n          }\n\n          if (cloneCount) {\n            if (index > rightEdge) {\n              index -= slideCount;\n            } else if (index < leftEdge) {\n              index += slideCount;\n            }\n          }\n        } :\n        // loop + gallery\n        function() {\n          if (index > indexMax) {\n            while (index >= indexMin + slideCount) { index -= slideCount; }\n          } else if (index < indexMin) {\n            while (index <= indexMax - slideCount) { index += slideCount; }\n          }\n        } :\n      // non-loop\n      function() {\n        index = Math.max(indexMin, Math.min(indexMax, index));\n      };\n  })();\n\n  function disableUI () {\n    if (!autoplay && autoplayButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__[\"hideElement\"])(autoplayButton); }\n    if (!nav && navContainer) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__[\"hideElement\"])(navContainer); }\n    if (!controls) {\n      if (controlsContainer) {\n        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__[\"hideElement\"])(controlsContainer);\n      } else {\n        if (prevButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__[\"hideElement\"])(prevButton); }\n        if (nextButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__[\"hideElement\"])(nextButton); }\n      }\n    }\n  }\n\n  function enableUI () {\n    if (autoplay && autoplayButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__[\"showElement\"])(autoplayButton); }\n    if (nav && navContainer) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__[\"showElement\"])(navContainer); }\n    if (controls) {\n      if (controlsContainer) {\n        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__[\"showElement\"])(controlsContainer);\n      } else {\n        if (prevButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__[\"showElement\"])(prevButton); }\n        if (nextButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__[\"showElement\"])(nextButton); }\n      }\n    }\n  }\n\n  function freezeSlider () {\n    if (frozen) { return; }\n\n    // remove edge padding from inner wrapper\n    if (edgePadding) { innerWrapper.style.margin = '0px'; }\n\n    // add class tns-transparent to cloned slides\n    if (cloneCount) {\n      var str = 'tns-transparent';\n      for (var i = cloneCount; i--;) {\n        if (carousel) { Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(slideItems[i], str); }\n        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(slideItems[slideCountNew - i - 1], str);\n      }\n    }\n\n    // update tools\n    disableUI();\n\n    frozen = true;\n  }\n\n  function unfreezeSlider () {\n    if (!frozen) { return; }\n\n    // restore edge padding for inner wrapper\n    // for mordern browsers\n    if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }\n\n    // remove class tns-transparent to cloned slides\n    if (cloneCount) {\n      var str = 'tns-transparent';\n      for (var i = cloneCount; i--;) {\n        if (carousel) { Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(slideItems[i], str); }\n        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(slideItems[slideCountNew - i - 1], str);\n      }\n    }\n\n    // update tools\n    enableUI();\n\n    frozen = false;\n  }\n\n  function disableSlider () {\n    if (disabled) { return; }\n\n    sheet.disabled = true;\n    container.className = container.className.replace(newContainerClasses.substring(1), '');\n    Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__[\"removeAttrs\"])(container, ['style']);\n    if (loop) {\n      for (var j = cloneCount; j--;) {\n        if (carousel) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__[\"hideElement\"])(slideItems[j]); }\n        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__[\"hideElement\"])(slideItems[slideCountNew - j - 1]);\n      }\n    }\n\n    // vertical slider\n    if (!horizontal || !carousel) { Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__[\"removeAttrs\"])(innerWrapper, ['style']); }\n\n    // gallery\n    if (!carousel) { \n      for (var i = index, l = index + slideCount; i < l; i++) {\n        var item = slideItems[i];\n        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__[\"removeAttrs\"])(item, ['style']);\n        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(item, animateIn);\n        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(item, animateNormal);\n      }\n    }\n\n    // update tools\n    disableUI();\n\n    disabled = true;\n  }\n\n  function enableSlider () {\n    if (!disabled) { return; }\n\n    sheet.disabled = false;\n    container.className += newContainerClasses;\n    doContainerTransformSilent();\n\n    if (loop) {\n      for (var j = cloneCount; j--;) {\n        if (carousel) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__[\"showElement\"])(slideItems[j]); }\n        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__[\"showElement\"])(slideItems[slideCountNew - j - 1]);\n      }\n    }\n\n    // gallery\n    if (!carousel) { \n      for (var i = index, l = index + slideCount; i < l; i++) {\n        var item = slideItems[i],\n            classN = i < index + items ? animateIn : animateNormal;\n        item.style.left = (i - index) * 100 / items + '%';\n        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(item, classN);\n      }\n    }\n\n    // update tools\n    enableUI();\n\n    disabled = false;\n  }\n\n  function updateLiveRegion () {\n    var str = getLiveRegionStr();\n    if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }\n  }\n\n  function getLiveRegionStr () {\n    var arr = getVisibleSlideRange(),\n        start = arr[0] + 1,\n        end = arr[1] + 1;\n    return start === end ? start + '' : start + ' to ' + end; \n  }\n\n  function getVisibleSlideRange (val) {\n    if (val == null) { val = getContainerTransformValue(); }\n    var start = index, end, rangestart, rangeend;\n\n    // get range start, range end for autoWidth and fixedWidth\n    if (center || edgePadding) {\n      if (autoWidth || fixedWidth) {\n        rangestart = - (parseFloat(val) + edgePadding);\n        rangeend = rangestart + viewport + edgePadding * 2;\n      }\n    } else {\n      if (autoWidth) {\n        rangestart = slidePositions[index];\n        rangeend = rangestart + viewport;\n      }\n    }\n\n    // get start, end\n    // - check auto width\n    if (autoWidth) {\n      slidePositions.forEach(function(point, i) {\n        if (i < slideCountNew) {\n          if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }\n          if (rangeend - point >= 0.5) { end = i; }\n        }\n      });\n\n    // - check percentage width, fixed width\n    } else {\n\n      if (fixedWidth) {\n        var cell = fixedWidth + gutter;\n        if (center || edgePadding) {\n          start = Math.floor(rangestart/cell);\n          end = Math.ceil(rangeend/cell - 1);\n        } else {\n          end = start + Math.ceil(viewport/cell) - 1;\n        }\n\n      } else {\n        if (center || edgePadding) {\n          var a = items - 1;\n          if (center) {\n            start -= a / 2;\n            end = index + a / 2;\n          } else {\n            end = index + a;\n          }\n\n          if (edgePadding) {\n            var b = edgePadding * items / viewport;\n            start -= b;\n            end += b;\n          }\n\n          start = Math.floor(start);\n          end = Math.ceil(end);\n        } else {\n          end = start + items - 1;\n        }\n      }\n\n      start = Math.max(start, 0);\n      end = Math.min(end, slideCountNew - 1);\n    }\n\n    return [start, end];\n  }\n\n  function doLazyLoad () {\n    if (lazyload && !disable) {\n      getImageArray.apply(null, getVisibleSlideRange()).forEach(function (img) {\n        if (!Object(_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__[\"hasClass\"])(img, imgCompleteClass)) {\n          // stop propagation transitionend event to container\n          var eve = {};\n          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };\n          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(img, eve);\n\n          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(img, imgEvents);\n\n          // update src\n          img.src = Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__[\"getAttr\"])(img, 'data-src');\n\n          // update srcset\n          var srcset = Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__[\"getAttr\"])(img, 'data-srcset');\n          if (srcset) { img.srcset = srcset; }\n\n          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(img, 'loading');\n        }\n      });\n    }\n  }\n\n  function onImgLoaded (e) {\n    imgLoaded(getTarget(e));\n  }\n\n  function onImgFailed (e) {\n    imgFailed(getTarget(e));\n  }\n\n  function imgLoaded (img) {\n    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(img, 'loaded');\n    imgCompleted(img);\n  }\n\n  function imgFailed (img) {\n    console.log(img, img.src);\n    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(img, 'failed');\n    imgCompleted(img);\n  }\n\n  function imgCompleted (img) {\n    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(img, 'tns-complete');\n    Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(img, 'loading');\n    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(img, imgEvents);\n  }\n\n  function getImageArray (start, end) {\n    var imgs = [];\n    while (start <= end) {\n      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__[\"forEach\"])(slideItems[start].querySelectorAll('img'), function (img) { imgs.push(img); });\n      start++;\n    }\n\n    return imgs;\n  }\n\n  // check if all visible images are loaded\n  // and update container height if it's done\n  function doAutoHeight () {\n    var imgs = getImageArray.apply(null, getVisibleSlideRange());\n    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__[\"raf\"])(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });\n  }\n\n  function imgsLoadedCheck (imgs, cb) {\n    // directly execute callback function if all images are complete\n    if (imgsComplete) { return cb(); }\n\n    // check selected image classes otherwise\n    imgs.forEach(function (img, index) {\n      if (Object(_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__[\"hasClass\"])(img, imgCompleteClass)) { imgs.splice(index, 1); }\n    });\n\n    // execute callback function if selected images are all complete\n    if (!imgs.length) { return cb(); }\n\n    // otherwise execute this functiona again\n    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__[\"raf\"])(function(){ imgsLoadedCheck(imgs, cb); });\n  } \n\n  function additionalUpdates () {\n    doLazyLoad(); \n    updateSlideStatus();\n    updateLiveRegion();\n    updateControlsStatus();\n    updateNavStatus();\n  }\n\n\n  function update_carousel_transition_duration () {\n    if (carousel && autoHeight) {\n      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';\n    }\n  }\n\n  function getMaxSlideHeight (slideStart, slideRange) {\n    var heights = [];\n    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {\n      heights.push(slideItems[i].offsetHeight);\n    }\n\n    return Math.max.apply(null, heights);\n  }\n\n  // update inner wrapper height\n  // 1. get the max-height of the visible slides\n  // 2. set transitionDuration to speed\n  // 3. update inner wrapper height to max-height\n  // 4. set transitionDuration to 0s after transition done\n  function updateInnerWrapperHeight () {\n    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),\n        wp = middleWrapper ? middleWrapper : innerWrapper;\n\n    if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }\n  }\n\n  // get the distance from the top edge of the first slide to each slide\n  // (init) => slidePositions\n  function setSlidePositions () {\n    slidePositions = [0];\n    var attr = horizontal ? 'left' : 'top',\n        attr2 = horizontal ? 'right' : 'bottom',\n        base = slideItems[0].getBoundingClientRect()[attr];\n\n    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__[\"forEach\"])(slideItems, function(item, i) {\n      // skip the first slide\n      if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }\n      // add the end edge\n      if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }\n    });\n  }\n\n  // update slide\n  function updateSlideStatus () {\n    var range = getVisibleSlideRange(),\n        start = range[0],\n        end = range[1];\n\n    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__[\"forEach\"])(slideItems, function(item, i) {\n      // show slides\n      if (i >= start && i <= end) {\n        if (Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__[\"hasAttr\"])(item, 'aria-hidden')) {\n          Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__[\"removeAttrs\"])(item, ['aria-hidden', 'tabindex']);\n          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(item, slideActiveClass);\n        }\n      // hide slides\n      } else {\n        if (!Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__[\"hasAttr\"])(item, 'aria-hidden')) {\n          Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__[\"setAttrs\"])(item, {\n            'aria-hidden': 'true',\n            'tabindex': '-1'\n          });\n          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(item, slideActiveClass);\n        }\n      }\n    });\n  }\n\n  // gallery: update slide position\n  function updateGallerySlidePositions () {\n    var l = index + Math.min(slideCount, items);\n    for (var i = slideCountNew; i--;) {\n      var item = slideItems[i];\n\n      if (i >= index && i < l) {\n        // add transitions to visible slides when adjusting their positions\n        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(item, 'tns-moving');\n\n        item.style.left = (i - index) * 100 / items + '%';\n        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(item, animateIn);\n        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(item, animateNormal);\n      } else if (item.style.left) {\n        item.style.left = '';\n        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(item, animateNormal);\n        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(item, animateIn);\n      }\n\n      // remove outlet animation\n      Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(item, animateOut);\n    }\n\n    // removing '.tns-moving'\n    setTimeout(function() {\n      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__[\"forEach\"])(slideItems, function(el) {\n        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(el, 'tns-moving');\n      });\n    }, 300);\n  }\n\n  // set tabindex on Nav\n  function updateNavStatus () {\n    // get current nav\n    if (nav) {\n      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();\n      navClicked = -1;\n\n      if (navCurrentIndex !== navCurrentIndexCached) {\n        var navPrev = navItems[navCurrentIndexCached],\n            navCurrent = navItems[navCurrentIndex];\n\n        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__[\"setAttrs\"])(navPrev, {\n          'tabindex': '-1',\n          'aria-label': navStr + (navCurrentIndexCached + 1)\n        });\n        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(navPrev, navActiveClass);\n        \n        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__[\"setAttrs\"])(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});\n        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__[\"removeAttrs\"])(navCurrent, 'tabindex');\n        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(navCurrent, navActiveClass);\n\n        navCurrentIndexCached = navCurrentIndex;\n      }\n    }\n  }\n\n  function getLowerCaseNodeName (el) {\n    return el.nodeName.toLowerCase();\n  }\n\n  function isButton (el) {\n    return getLowerCaseNodeName(el) === 'button';\n  }\n\n  function isAriaDisabled (el) {\n    return el.getAttribute('aria-disabled') === 'true';\n  }\n\n  function disEnableElement (isButton, el, val) {\n    if (isButton) {\n      el.disabled = val;\n    } else {\n      el.setAttribute('aria-disabled', val.toString());\n    }\n  }\n\n  // set 'disabled' to true on controls when reach the edges\n  function updateControlsStatus () {\n    if (!controls || rewind || loop) { return; }\n\n    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),\n        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),\n        disablePrev = (index <= indexMin) ? true : false,\n        disableNext = (!rewind && index >= indexMax) ? true : false;\n\n    if (disablePrev && !prevDisabled) {\n      disEnableElement(prevIsButton, prevButton, true);\n    }\n    if (!disablePrev && prevDisabled) {\n      disEnableElement(prevIsButton, prevButton, false);\n    }\n    if (disableNext && !nextDisabled) {\n      disEnableElement(nextIsButton, nextButton, true);\n    }\n    if (!disableNext && nextDisabled) {\n      disEnableElement(nextIsButton, nextButton, false);\n    }\n  }\n\n  // set duration\n  function resetDuration (el, str) {\n    if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }\n  }\n\n  function getSliderWidth () {\n    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];\n  }\n\n  function getCenterGap (num) {\n    if (num == null) { num = index; }\n\n    var gap = edgePadding ? gutter : 0;\n    return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :\n      fixedWidth ? (viewport - fixedWidth) / 2 :\n        (items - 1) / 2;\n  }\n\n  function getRightBoundary () {\n    var gap = edgePadding ? gutter : 0,\n        result = (viewport + gap) - getSliderWidth();\n\n    if (center && !loop) {\n      result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :\n        getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];\n    }\n    if (result > 0) { result = 0; }\n\n    return result;\n  }\n\n  function getContainerTransformValue (num) {\n    if (num == null) { num = index; }\n\n    var val;\n    if (horizontal && !autoWidth) {\n      if (fixedWidth) {\n        val = - (fixedWidth + gutter) * num;\n        if (center) { val += getCenterGap(); }\n      } else {\n        var denominator = TRANSFORM ? slideCountNew : items;\n        if (center) { num -= getCenterGap(); }\n        val = - num * 100 / denominator;\n      }\n    } else {\n      val = - slidePositions[num];\n      if (center && autoWidth) {\n        val += getCenterGap();\n      }\n    }\n\n    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }\n\n    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';\n\n    return val;\n  }\n\n  function doContainerTransformSilent (val) {\n    resetDuration(container, '0s');\n    doContainerTransform(val);\n  }\n\n  function doContainerTransform (val) {\n    if (val == null) { val = getContainerTransformValue(); }\n    container.style[transformAttr] = transformPrefix + val + transformPostfix;\n  }\n\n  function animateSlide (number, classOut, classIn, isOut) {\n    var l = number + items;\n    if (!loop) { l = Math.min(l, slideCountNew); }\n\n    for (var i = number; i < l; i++) {\n        var item = slideItems[i];\n\n      // set item positions\n      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }\n\n      if (animateDelay && TRANSITIONDELAY) {\n        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';\n      }\n      Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(item, classOut);\n      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(item, classIn);\n      \n      if (isOut) { slideItemsOut.push(item); }\n    }\n  }\n\n  // make transfer after click/drag:\n  // 1. change 'transform' property for mordern browsers\n  // 2. change 'left' property for legacy browsers\n  var transformCore = (function () {\n    return carousel ?\n      function () {\n        resetDuration(container, '');\n        if (TRANSITIONDURATION || !speed) {\n          // for morden browsers with non-zero duration or \n          // zero duration for all browsers\n          doContainerTransform();\n          // run fallback function manually \n          // when duration is 0 / container is hidden\n          if (!speed || !Object(_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__[\"isVisible\"])(container)) { onTransitionEnd(); }\n\n        } else {\n          // for old browser with non-zero duration\n          Object(_helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_33__[\"jsTransform\"])(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);\n        }\n\n        if (!horizontal) { updateContentWrapperHeight(); }\n      } :\n      function () {\n        slideItemsOut = [];\n\n        var eve = {};\n        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;\n        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(slideItems[indexCached], eve);\n        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(slideItems[index], eve);\n\n        animateSlide(indexCached, animateIn, animateOut, true);\n        animateSlide(index, animateNormal, animateIn);\n\n        // run fallback function manually \n        // when transition or animation not supported / duration is 0\n        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !Object(_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__[\"isVisible\"])(container)) { onTransitionEnd(); }\n      };\n  })();\n\n  function render (e, sliderMoved) {\n    if (updateIndexBeforeTransform) { updateIndex(); }\n\n    // render when slider was moved (touch or drag) even though index may not change\n    if (index !== indexCached || sliderMoved) {\n      // events\n      events.emit('indexChanged', info());\n      events.emit('transitionStart', info());\n      if (autoHeight) { doAutoHeight(); }\n\n      // pause autoplay when click or keydown from user\n      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }\n\n      running = true;\n      transformCore();\n    }\n  }\n\n  /*\n   * Transfer prefixed properties to the same format\n   * CSS: -Webkit-Transform => webkittransform\n   * JS: WebkitTransform => webkittransform\n   * @param {string} str - property\n   *\n   */\n  function strTrans (str) {\n    return str.toLowerCase().replace(/-/g, '');\n  }\n\n  // AFTER TRANSFORM\n  // Things need to be done after a transfer:\n  // 1. check index\n  // 2. add classes to visible slide\n  // 3. disable controls buttons when reach the first/last slide in non-loop slider\n  // 4. update nav status\n  // 5. lazyload images\n  // 6. update container height\n  function onTransitionEnd (event) {\n    // check running on gallery mode\n    // make sure trantionend/animationend events run only once\n    if (carousel || running) {\n      events.emit('transitionEnd', info(event));\n\n      if (!carousel && slideItemsOut.length > 0) {\n        for (var i = 0; i < slideItemsOut.length; i++) {\n          var item = slideItemsOut[i];\n          // set item positions\n          item.style.left = '';\n\n          if (ANIMATIONDELAY && TRANSITIONDELAY) { \n            item.style[ANIMATIONDELAY] = '';\n            item.style[TRANSITIONDELAY] = '';\n          }\n          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__[\"removeClass\"])(item, animateOut);\n          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__[\"addClass\"])(item, animateNormal);\n        }\n      }\n\n      /* update slides, nav, controls after checking ...\n       * => legacy browsers who don't support 'event' \n       *    have to check event first, otherwise event.target will cause an error \n       * => or 'gallery' mode: \n       *   + event target is slide item\n       * => or 'carousel' mode: \n       *   + event target is container, \n       *   + event.property is the same with transform attribute\n       */\n      if (!event || \n          !carousel && event.target.parentNode === container || \n          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {\n\n        if (!updateIndexBeforeTransform) { \n          var indexTem = index;\n          updateIndex();\n          if (index !== indexTem) { \n            events.emit('indexChanged', info());\n\n            doContainerTransformSilent();\n          }\n        } \n\n        if (nested === 'inner') { events.emit('innerLoaded', info()); }\n        running = false;\n        indexCached = index;\n      }\n    }\n\n  }\n\n  // # ACTIONS\n  function goTo (targetIndex, e) {\n    if (freeze) { return; }\n\n    // prev slideBy\n    if (targetIndex === 'prev') {\n      onControlsClick(e, -1);\n\n    // next slideBy\n    } else if (targetIndex === 'next') {\n      onControlsClick(e, 1);\n\n    // go to exact slide\n    } else {\n      if (running) {\n        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }\n      }\n\n      var absIndex = getAbsIndex(), \n          indexGap = 0;\n\n      if (targetIndex === 'first') {\n        indexGap = - absIndex;\n      } else if (targetIndex === 'last') {\n        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;\n      } else {\n        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }\n\n        if (!isNaN(targetIndex)) {\n          // from directly called goTo function\n          if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }\n\n          indexGap = targetIndex - absIndex;\n        }\n      }\n\n      // gallery: make sure new page won't overlap with current page\n      if (!carousel && indexGap && Math.abs(indexGap) < items) {\n        var factor = indexGap > 0 ? 1 : -1;\n        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;\n      }\n\n      index += indexGap;\n\n      // make sure index is in range\n      if (carousel && loop) {\n        if (index < indexMin) { index += slideCount; }\n        if (index > indexMax) { index -= slideCount; }\n      }\n\n      // if index is changed, start rendering\n      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {\n        render(e);\n      }\n\n    }\n  }\n\n  // on controls click\n  function onControlsClick (e, dir) {\n    if (running) {\n      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }\n    }\n    var passEventObject;\n\n    if (!dir) {\n      e = getEvent(e);\n      var target = getTarget(e);\n\n      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }\n\n      var targetIn = [prevButton, nextButton].indexOf(target);\n      if (targetIn >= 0) {\n        passEventObject = true;\n        dir = targetIn === 0 ? -1 : 1;\n      }\n    }\n\n    if (rewind) {\n      if (index === indexMin && dir === -1) {\n        goTo('last', e);\n        return;\n      } else if (index === indexMax && dir === 1) {\n        goTo('first', e);\n        return;\n      }\n    }\n\n    if (dir) {\n      index += slideBy * dir;\n      if (autoWidth) { index = Math.floor(index); }\n      // pass e when click control buttons or keydown\n      render((passEventObject || (e && e.type === 'keydown')) ? e : null);\n    }\n  }\n\n  // on nav click\n  function onNavClick (e) {\n    if (running) {\n      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }\n    }\n    \n    e = getEvent(e);\n    var target = getTarget(e), navIndex;\n\n    // find the clicked nav item\n    while (target !== navContainer && !Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__[\"hasAttr\"])(target, 'data-nav')) { target = target.parentNode; }\n    if (Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__[\"hasAttr\"])(target, 'data-nav')) {\n      var navIndex = navClicked = Number(Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__[\"getAttr\"])(target, 'data-nav')),\n          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,\n          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);\n      goTo(targetIndex, e);\n\n      if (navCurrentIndex === navIndex) {\n        if (animating) { stopAutoplay(); }\n        navClicked = -1; // reset navClicked\n      }\n    }\n  }\n\n  // autoplay functions\n  function setAutoplayTimer () {\n    autoplayTimer = setInterval(function () {\n      onControlsClick(null, autoplayDirection);\n    }, autoplayTimeout);\n\n    animating = true;\n  }\n\n  function stopAutoplayTimer () {\n    clearInterval(autoplayTimer);\n    animating = false;\n  }\n\n  function updateAutoplayButton (action, txt) {\n    Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__[\"setAttrs\"])(autoplayButton, {'data-action': action});\n    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;\n  }\n\n  function startAutoplay () {\n    setAutoplayTimer();\n    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }\n  }\n\n  function stopAutoplay () {\n    stopAutoplayTimer();\n    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }\n  }\n\n  // programaitcally play/pause the slider\n  function play () {\n    if (autoplay && !animating) {\n      startAutoplay();\n      autoplayUserPaused = false;\n    }\n  }\n  function pause () {\n    if (animating) {\n      stopAutoplay();\n      autoplayUserPaused = true;\n    }\n  }\n\n  function toggleAutoplay () {\n    if (animating) {\n      stopAutoplay();\n      autoplayUserPaused = true;\n    } else {\n      startAutoplay();\n      autoplayUserPaused = false;\n    }\n  }\n\n  function onVisibilityChange () {\n    if (doc.hidden) {\n      if (animating) {\n        stopAutoplayTimer();\n        autoplayVisibilityPaused = true;\n      }\n    } else if (autoplayVisibilityPaused) {\n      setAutoplayTimer();\n      autoplayVisibilityPaused = false;\n    }\n  }\n\n  function mouseoverPause () {\n    if (animating) { \n      stopAutoplayTimer();\n      autoplayHoverPaused = true;\n    }\n  }\n\n  function mouseoutRestart () {\n    if (autoplayHoverPaused) { \n      setAutoplayTimer();\n      autoplayHoverPaused = false;\n    }\n  }\n\n  // keydown events on document \n  function onDocumentKeydown (e) {\n    e = getEvent(e);\n    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);\n\n    if (keyIndex >= 0) {\n      onControlsClick(e, keyIndex === 0 ? -1 : 1);\n    }\n  }\n\n  // on key control\n  function onControlsKeydown (e) {\n    e = getEvent(e);\n    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);\n\n    if (keyIndex >= 0) {\n      if (keyIndex === 0) {\n        if (!prevButton.disabled) { onControlsClick(e, -1); }\n      } else if (!nextButton.disabled) {\n        onControlsClick(e, 1);\n      }\n    }\n  }\n\n  // set focus\n  function setFocus (el) {\n    el.focus();\n  }\n\n  // on key nav\n  function onNavKeydown (e) {\n    e = getEvent(e);\n    var curElement = doc.activeElement;\n    if (!Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__[\"hasAttr\"])(curElement, 'data-nav')) { return; }\n\n    // var code = e.keyCode,\n    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),\n        navIndex = Number(Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__[\"getAttr\"])(curElement, 'data-nav'));\n\n    if (keyIndex >= 0) {\n      if (keyIndex === 0) {\n        if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }\n      } else if (keyIndex === 1) {\n        if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }\n      } else {\n        navClicked = navIndex;\n        goTo(navIndex, e);\n      }\n    }\n  }\n\n  function getEvent (e) {\n    e = e || win.event;\n    return isTouchEvent(e) ? e.changedTouches[0] : e;\n  }\n  function getTarget (e) {\n    return e.target || win.event.srcElement;\n  }\n\n  function isTouchEvent (e) {\n    return e.type.indexOf('touch') >= 0;\n  }\n\n  function preventDefaultBehavior (e) {\n    e.preventDefault ? e.preventDefault() : e.returnValue = false;\n  }\n\n  function getMoveDirectionExpected () {\n    return Object(_helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_14__[\"getTouchDirection\"])(Object(_helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_13__[\"toDegree\"])(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;\n  }\n\n  function onPanStart (e) {\n    if (running) {\n      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }\n    }\n\n    if (autoplay && animating) { stopAutoplayTimer(); }\n    \n    panStart = true;\n    if (rafIndex) {\n      Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__[\"caf\"])(rafIndex);\n      rafIndex = null;\n    }\n\n    var $ = getEvent(e);\n    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));\n\n    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {\n      preventDefaultBehavior(e);\n    }\n\n    lastPosition.x = initPosition.x = $.clientX;\n    lastPosition.y = initPosition.y = $.clientY;\n    if (carousel) {\n      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));\n      resetDuration(container, '0s');\n    }\n  }\n\n  function onPanMove (e) {\n    if (panStart) {\n      var $ = getEvent(e);\n      lastPosition.x = $.clientX;\n      lastPosition.y = $.clientY;\n\n      if (carousel) {\n        if (!rafIndex) { rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__[\"raf\"])(function(){ panUpdate(e); }); }\n      } else {\n        if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }\n        if (moveDirectionExpected) { preventScroll = true; }\n      }\n\n      if (preventScroll) { e.preventDefault(); }\n    }\n  }\n\n  function panUpdate (e) {\n    if (!moveDirectionExpected) {\n      panStart = false;\n      return;\n    }\n    Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__[\"caf\"])(rafIndex);\n    if (panStart) { rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__[\"raf\"])(function(){ panUpdate(e); }); }\n\n    if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }\n    if (moveDirectionExpected) {\n      if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }\n\n      try {\n        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }\n      } catch(err) {}\n\n      var x = translateInit,\n          dist = getDist(lastPosition, initPosition);\n      if (!horizontal || fixedWidth || autoWidth) {\n        x += dist;\n        x += 'px';\n      } else {\n        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);\n        x += percentageX;\n        x += '%';\n      }\n\n      container.style[transformAttr] = transformPrefix + x + transformPostfix;\n    }\n  }\n\n  function onPanEnd (e) {\n    if (panStart) {\n      if (rafIndex) {\n        Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__[\"caf\"])(rafIndex);\n        rafIndex = null;\n      }\n      if (carousel) { resetDuration(container, ''); }\n      panStart = false;\n\n      var $ = getEvent(e);\n      lastPosition.x = $.clientX;\n      lastPosition.y = $.clientY;\n      var dist = getDist(lastPosition, initPosition);\n\n      if (Math.abs(dist)) {\n        // drag vs click\n        if (!isTouchEvent(e)) {\n          // prevent \"click\"\n          var target = getTarget(e);\n          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__[\"addEvents\"])(target, {'click': function preventClick (e) {\n            preventDefaultBehavior(e);\n            Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__[\"removeEvents\"])(target, {'click': preventClick});\n          }}); \n        }\n\n        if (carousel) {\n          rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__[\"raf\"])(function() {\n            if (horizontal && !autoWidth) {\n              var indexMoved = - dist * items / (viewport + gutter);\n              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);\n              index += indexMoved;\n            } else {\n              var moved = - (translateInit + dist);\n              if (moved <= 0) {\n                index = indexMin;\n              } else if (moved >= slidePositions[slideCountNew - 1]) {\n                index = indexMax;\n              } else {\n                var i = 0;\n                while (i < slideCountNew && moved >= slidePositions[i]) {\n                  index = i;\n                  if (moved > slidePositions[i] && dist < 0) { index += 1; }\n                  i++;\n                }\n              }\n            }\n\n            render(e, dist);\n            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));\n          });\n        } else {\n          if (moveDirectionExpected) {\n            onControlsClick(e, dist > 0 ? -1 : 1);\n          }\n        }\n      }\n    }\n\n    // reset\n    if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }\n    if (swipeAngle) { moveDirectionExpected = '?'; } \n    if (autoplay && !animating) { setAutoplayTimer(); }\n  }\n\n  // === RESIZE FUNCTIONS === //\n  // (slidePositions, index, items) => vertical_conentWrapper.height\n  function updateContentWrapperHeight () {\n    var wp = middleWrapper ? middleWrapper : innerWrapper;\n    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';\n  }\n\n  function getPages () {\n    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;\n    return Math.min(Math.ceil(rough), slideCount);\n  }\n\n  /*\n   * 1. update visible nav items list\n   * 2. add \"hidden\" attributes to previous visible nav items\n   * 3. remove \"hidden\" attrubutes to new visible nav items\n   */\n  function updateNavVisibility () {\n    if (!nav || navAsThumbnails) { return; }\n\n    if (pages !== pagesCached) {\n      var min = pagesCached,\n          max = pages,\n          fn = _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__[\"showElement\"];\n\n      if (pagesCached > pages) {\n        min = pages;\n        max = pagesCached;\n        fn = _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__[\"hideElement\"];\n      }\n\n      while (min < max) {\n        fn(navItems[min]);\n        min++;\n      }\n\n      // cache pages\n      pagesCached = pages;\n    }\n  }\n\n  function info (e) {\n    return {\n      container: container,\n      slideItems: slideItems,\n      navContainer: navContainer,\n      navItems: navItems,\n      controlsContainer: controlsContainer,\n      hasControls: hasControls,\n      prevButton: prevButton,\n      nextButton: nextButton,\n      items: items,\n      slideBy: slideBy,\n      cloneCount: cloneCount,\n      slideCount: slideCount,\n      slideCountNew: slideCountNew,\n      index: index,\n      indexCached: indexCached,\n      displayIndex: getCurrentSlide(),\n      navCurrentIndex: navCurrentIndex,\n      navCurrentIndexCached: navCurrentIndexCached,\n      pages: pages,\n      pagesCached: pagesCached,\n      sheet: sheet,\n      isOn: isOn,\n      event: e || {},\n    };\n  }\n\n  return {\n    version: '2.9.0',\n    getInfo: info,\n    events: events,\n    goTo: goTo,\n    play: play,\n    pause: pause,\n    isOn: isOn,\n    updateSliderHeight: updateInnerWrapperHeight,\n    refresh: initSliderTransform,\n    destroy: destroy,\n    rebuild: function() {\n      return tns(Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__[\"extend\"])(options, optionsElements));\n    }\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/tiny-slider/src/tiny-slider.js?");

        /***/
    }),

    /***/
    "./src/main.js":
    /*!*********************!*\
      !*** ./src/main.js ***!
      \*********************/
    /*! no exports provided */
    /***/
        (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_UICountdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/UICountdown */ \"./lib/UICountdown.js\");\n/* harmony import */ var _lib_UIAccordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/UIAccordion */ \"./lib/UIAccordion.js\");\n/* harmony import */ var _node_modules_js_simple_validations_dist_js_simple_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/js-simple-validations/dist/js-simple-validations */ \"./node_modules/js-simple-validations/dist/js-simple-validations.js\");\n/* harmony import */ var _node_modules_js_simple_validations_dist_js_simple_validations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_js_simple_validations_dist_js_simple_validations__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/tiny-slider/src/tiny-slider */ \"./node_modules/tiny-slider/src/tiny-slider.js\");\n\n/*import UICarousel from '../lib/UICarousel'*/\n\n//import Validate from 'validate.js'\n\n\n//import ExtraCrispy from '../lib/ExtraCrispy'\n\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\n\n    var URL_FETCH_COUNTRY = '',\n        URL_AUTOCOMPLETE = 'http://165.227.165.221/colegio'\n\n    initAccordion()\n    initCountdown()\n    initCarousel()\n    initValidateForm() //\n    meetingsForm()\n    var btnSearch = document.querySelectorAll('.btn_src'),\n        btnCloseSearch = document.querySelector('.close_src'),\n        btnOpenModal = document.querySelector('.btn_ir_modal span a'),\n        btnCloseModal = document.querySelector('.cerrar a'),\n        modalInscription = document.querySelector('.modal_incrip'),\n        layerBackground = document.querySelector('.layer_dark'),\n        selectConvenios = document.querySelector('#select_country_convenios'),\n        btnsInfraestructuraMob = document.querySelectorAll('.carrusel_infra_m .list-items .item-note'),\n        btnsInfraestructura = document.querySelectorAll('.campusdeportivos .area_ul1'),\n\n        btnMobileMenu = document.querySelector('.hamb'),\n        btnMobileMenuClose = document.querySelector('.close_src_menu'),\n        menuNavMobile = document.querySelector('#menu-nav')\n\n    var boxSearch = document.querySelector('.r_busqueda')\n    btnSearch.forEach(function(btn) {\n        btn.addEventListener('click', function(evt) {\n            boxSearch.classList.toggle('boxSearchShow')\n        })\n    })\n\n    if (boxSearch) {\n        boxSearch.addEventListener('keypress', function(evt) {\n            var key = evt.keyCode || evt.charCode || evt.which\n            if (key == 27) boxSearch.classList.toggle('boxSearchShow')\n            if (key == 13) {\n                var btnInputSearch = boxSearch.querySelector('.srch_btn')\n                var evento = new Event('click')\n                btnInputSearch.dispatchEvent(evento)\n            }\n        })\n    }\n\n    if (btnOpenModal) {\n        btnOpenModal.addEventListener('click', function(evt) {\n            evt.preventDefault()\n            if (evt.target.id == 'btn_insCharla') {\n                var selects = document.querySelectorAll('.select-horario'),\n                    someFill = false\n                selects.forEach(function(item) {\n                    if (item.value != '') someFill = true\n                })\n                var msg = document.querySelector('.message-error-carreras')\n                if (someFill) {\n                    modalInscription.classList.add('modal_active')\n                    msg.textContent = ''\n                } else {\n                    var msg = document.querySelector('.message-error-carreras')\n                    msg.textContent = 'Asegurese de seleccionar un horario.'\n                }\n            } else modalInscription.classList.add('modal_active')\n        })\n    }\n    if (modalInscription) {\n        btnCloseModal.addEventListener('click', closeModal)\n        layerBackground.addEventListener('click', closeModal)\n        var sec_slider = document.querySelectorAll('.cont_galery_pu')\n\n        if (sec_slider) {\n            sec_slider.forEach(function(sli) {\n                var btnNextSli = sli.querySelector('.tns-controls button[data-controls=\"next\"]'),\n                    btnPrevSli = sli.querySelector('.tns-controls button[data-controls=\"prev\"]'),\n                    listDots = sli.querySelector('.custom-dots'),\n                    onlyDots = listDots.querySelectorAll('li'),\n                    totalDots = listDots.querySelectorAll('li').length,\n                    widthItem = 0,\n                    initPos = 0,\n                    containerMask = listDots.parentNode\n                if (btnNextSli) {\n                    btnNextSli.addEventListener('click', function() {\n                        var widthDotSli = sli.querySelector('.custom-dots li').offsetWidth,\n                            elem = sli.querySelector('.custom-dots li:not(.tns-nav-active)'),\n                            positionInitContainer = containerMask.getBoundingClientRect().x,\n                            positionEndContainer = positionInitContainer + containerMask.getBoundingClientRect().width,\n                            moved = Moved(sli.querySelector('.custom-dots li.tns-nav-active'), positionInitContainer, positionEndContainer, 'R')\n\n                        widthItem = widthDotSli + (parseInt(window.getComputedStyle(elem).marginLeft) * 2)\n                        if (moved) {\n                            var distMinDisplacement = getMinDistance(),\n                                newPos = initPos - distMinDisplacement,\n                                restWidthList = (widthItem * totalDots) - Math.abs(newPos)\n\n                            if (restWidthList < containerMask.offsetWidth) newPos = initPos - restWidthList\n                            if (restWidthList == 0) newPos = 0\n                            translateX(newPos)\n                        }\n                        var videoIframe = modalInscription.querySelector('.video-iframe')\n                        if (videoIframe) {\n                            stopAllVideos()\n                        }\n\n                    })\n                }\n\n                if (btnNextSli) {\n                    btnPrevSli.addEventListener('click', function() {\n                        var widthDotSli = sli.querySelector('.custom-dots li').offsetWidth,\n                            elem = sli.querySelector('.custom-dots li:not(.tns-nav-active)'),\n                            positionInitContainer = containerMask.getBoundingClientRect().x,\n                            positionEndContainer = positionInitContainer + containerMask.getBoundingClientRect().width,\n                            elemActive = sli.querySelector('.custom-dots li.tns-nav-active')\n\n                        var nav = (elemActive.getAttribute('data-nav') - 1 == -1) ? sli.querySelector('.custom-dots li:last-child').getAttribute('data-nav') : elemActive.getAttribute('data-nav') - 1\n                        var moved = Moved(sli.querySelector('.custom-dots li[data-nav=\"' + nav + '\"]'), positionInitContainer, positionEndContainer, 'L')\n                        widthItem = widthDotSli + (parseInt(window.getComputedStyle(elem).marginLeft) * 2)\n                        if (moved) {\n                            var distMinDisplacement = getMinDistance(),\n                                newPos = initPos + distMinDisplacement\n\n                            if (initPos <= 0 && Math.abs(initPos) < containerMask.offsetWidth) newPos = 0\n                            if (initPos == 0) console.log('ir al final')\n                            translateX(newPos)\n                            initPos = newPos\n                        } else if (initPos == 0 && elemActive.getAttribute('data-nav') == 0) {\n                            var newPos = -(((widthItem * (totalDots - 1)) + (elemActive.offsetWidth * 1.3)) - containerMask.getBoundingClientRect().width)\n                            translateX(newPos)\n                            initPos = newPos\n                        }\n\n                        var videoIframe = modalInscription.querySelector('.video-iframe')\n                        if (videoIframe) {\n                            stopAllVideos()\n                        }\n                    })\n                }\n\n                if (onlyDots.length) {\n                    onlyDots.forEach(function(item, index) {\n                        item.addEventListener('click', function() {\n                            console.log(\"miau!\");\n                            var videoIframe = modalInscription.querySelector('.video-iframe')\n                            if (videoIframe) {\n                                stopAllVideos()\n                            }\n                        })\n                    })\n                }\n\n\n\n                function Moved(currentItem, initLimit, endLimit, dir) {\n                    var posInitX = currentItem.getBoundingClientRect().x,\n                        posEndX = posInitX + (currentItem.getBoundingClientRect().width + (parseInt(window.getComputedStyle(currentItem).marginLeft) * 2))\n                    return ((dir == 'R' && posEndX > endLimit) || (dir == 'L' && posInitX < initLimit)) ? true : false\n                }\n\n                function getMinDistance() { return getElementVisibles() * widthItem; }\n\n                function getElementVisibles() {\n                    var widthContainer = containerMask.offsetWidth\n                    var numElementsVisible = (widthItem > widthContainer) ? 1 : Math.floor(widthContainer / widthItem)\n                    return numElementsVisible\n                    j\n                }\n\n                function translateX(newPos) {\n                    initPos = newPos\n                    listDots.style.cssText = 'transform: translate3d(' + newPos + 'px, 0px, 0px)'\n                    console.log(\"wuf!\")\n                }\n            });\n        }\n\n        var videoPopup = document.querySelector('.video_donde .cont_video'),\n            listVideos = document.querySelectorAll('.cont_donde .test_egre .list-items .item-note')\n        if (videoPopup) {\n            videoPopup.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                modalInscription.classList.add('modal_active')\n                console.log(\"beee!\");\n            })\n        }\n        if (listVideos.length > 0) {\n            listVideos.forEach(function(item, index) {\n                item.addEventListener('click', function(evt) {\n                    var currentVideoAdm = modalInscription.querySelector('.custom-dots li[data-nav=\"' + index + '\"]')\n                    var event = document.createEvent('HTMLEvents')\n                    event.initEvent('click', true, true)\n                    if (currentVideoAdm) {\n                        currentVideoAdm.dispatchEvent(event); //fix\n                    }\n                    modalInscription.classList.add('modal_active')\n                    console.log(\"quack!\");\n                })\n            })\n        }\n\n        var listVideosULima = document.querySelectorAll('.cont-video .area_ul1'),\n            modalInsVideo = document.querySelector('.modal-video')\n            /*if (videoPopupULima > 0) {\n              videoPopupULima.forEach( item => {\n                item.addEventListener('click', function (evt) {\n                  evt.preventDefault()\n                  modalInscription.classList.add('modal_active')\n                })\n              })\n            }*/\n        if (listVideosULima.length > 0) {\n            modalInsVideo.querySelector('.cerrar a').addEventListener('click', closeModalVideo)\n            modalInsVideo.querySelector('.layer_dark').addEventListener('click', closeModalVideo)\n\n            function closeModalVideo(evt) {\n                evt.preventDefault()\n                modalInsVideo.classList.remove('modal_active')\n                var videoIframe = modalInsVideo.querySelector('.video-iframe')\n                if (videoIframe) {\n                    stopAllVideos()\n                }\n            }\n\n            listVideosULima.forEach(function(item, index) {\n                item.addEventListener('click', function(evt) {\n                    evt.preventDefault()\n                    console.log(\"pug!\")\n                    var currentVideo = modalInsVideo.querySelector('.modal-video .custom-dots li[data-nav=\"' + index + '\"]')\n                    var event = document.createEvent('HTMLEvents')\n                    event.initEvent('click', true, true)\n                    currentVideo.dispatchEvent(event)\n                    modalInsVideo.classList.add('modal_active')\n                    var videoIframe = modalInscription.querySelector('.video-iframe')\n                    if (videoIframe) {\n                        stopAllVideos()\n                    }\n                })\n            })\n        }\n    }\n    if (selectConvenios) selectConvenios.addEventListener('change', getDataCountry)\n\n    if (btnsInfraestructura && btnsInfraestructuraMob && window.location.pathname.indexOf('/infraestructura') != -1) {\n        btnsInfraestructura.forEach(function(item) {\n            item.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                modalInscription.classList.add('modal_active')\n            })\n        })\n        btnsInfraestructuraMob.forEach(function(item) {\n            item.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                modalInscription.classList.add('modal_active')\n            })\n        })\n\n        var areasUl = document.querySelectorAll('#areas_ul .list-items .item-note')\n        areasUl.forEach(function(area) {\n            var optionsArea = area.querySelectorAll('figure ul li')\n            optionsArea.forEach(function(option) {\n                option.querySelector('a').addEventListener('click', function(evt) {\n                    evt.preventDefault()\n                    modalInscription.classList.add('modal_active')\n                })\n            })\n        })\n\n        var btnsImgInfra = document.querySelectorAll('.carousel-infra-pic .list-items .item-note')\n        btnsImgInfra.forEach(function(btn, index) {\n            btn.querySelector('figure a').addEventListener('click', function(evt) {\n                evt.preventDefault()\n                var modalImg = document.querySelector('.modal-img')\n                modalImg.querySelector('.cerrar a').addEventListener('click', closeModalImg)\n                modalImg.querySelector('.layer_dark').addEventListener('click', closeModalImg)\n\n                function closeModalImg(evt) {\n                    evt.preventDefault();\n                    modalImg.classList.remove('modal_active');\n                }\n\n                var currentImg3 = modalImg.querySelector('.custom-dots li[data-nav=\"' + index + '\"]')\n                var event = document.createEvent('HTMLEvents')\n                event.initEvent('click', true, true)\n                currentImg3.dispatchEvent(event)\n\n                modalImg.classList.add('modal_active')\n            })\n        })\n    }\n    if (btnMobileMenu) {\n        btnMobileMenu.addEventListener('click', function() {\n            menuNavMobile.classList.add('menu_on')\n            document.body.style.overflowY = 'hidden'\n            btnMobileMenu.style.display = 'none'\n            btnMobileMenuClose.style.display = 'inline-block'\n            document.querySelector('.src_movil').style.display = 'none'\n        })\n        btnMobileMenuClose.addEventListener('click', function(evt) {\n            evt.preventDefault()\n            menuNavMobile.classList.remove('menu_on')\n            document.body.style.overflowY = 'auto'\n            btnMobileMenu.style.display = 'inline-block'\n            btnMobileMenuClose.style.display = 'none'\n            document.querySelector('.src_movil').style.display = 'block'\n        })\n    }\n\n    var sec_slider_dep = document.querySelector('.tallers_dep'),\n        sec_slider_uli = document.querySelector('.tallers_ulima'),\n        sec_slider_convenios = document.querySelector('.galeria-convenio')\n\n    if (sec_slider_dep && sec_slider_uli) {\n        var listItemsDep = sec_slider_dep.querySelectorAll('.carousel .list-items .item-note')\n\n        listItemsDep.forEach(function(item, index) {\n            item.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                var modalImgDep = document.querySelector('.modal-img-taldep')\n                modalImgDep.querySelector('.cerrar a').addEventListener('click', closeModalImgDep)\n                modalImgDep.querySelector('.layer_dark').addEventListener('click', closeModalImgDep)\n\n                function closeModalImgDep(evt) {\n                    evt.preventDefault();\n                    modalImgDep.classList.remove('modal_active');\n                }\n\n                var currentImgDep = modalImgDep.querySelector('.cont_galery_pu_modal .custom-dots li[data-nav=\"' + index + '\"]')\n                var event = document.createEvent('HTMLEvents')\n                event.initEvent('click', true, true)\n                currentImgDep.dispatchEvent(event)\n\n                modalImgDep.classList.add('modal_active')\n            })\n        })\n\n        var listItemsUli = sec_slider_uli.querySelectorAll('.carousel .list-items .item-note')\n\n        listItemsUli.forEach(function(item, index) {\n            item.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                var modalImgArt = document.querySelector('.modal-img-talart')\n                modalImgArt.querySelector('.cerrar a').addEventListener('click', closemodalImgArt)\n                modalImgArt.querySelector('.layer_dark').addEventListener('click', closemodalImgArt)\n\n                function closemodalImgArt(evt) {\n                    evt.preventDefault();\n                    modalImgArt.classList.remove('modal_active');\n                }\n\n                var currentVideoArt = modalImgArt.querySelector('.custom-dots li[data-nav=\"' + index + '\"]')\n                var event = document.createEvent('HTMLEvents')\n                event.initEvent('click', true, true)\n                currentVideoArt.dispatchEvent(event)\n\n                modalImgArt.classList.add('modal_active')\n            })\n        })\n    }\n\n    if (sec_slider_convenios) {\n        var listItemConv = sec_slider_convenios.querySelectorAll('.carousel .list-items .item-note')\n\n        listItemConv.forEach(function(item, index) {\n            item.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                var modalImgConv = document.querySelector('.modal-img-conv')\n                if (modalImgConv) {\n                    modalImgConv.querySelector('.cerrar a').addEventListener('click', closemodalImgConv)\n                    modalImgConv.querySelector('.layer_dark').addEventListener('click', closemodalImgConv)\n                } else {\n                    console.log(\"modal .modal-img-conv no existe\");\n                }\n\n\n                function closemodalImgConv(evt) {\n                    evt.preventDefault();\n                    modalImgConv.classList.remove('modal_active');\n                }\n\n                var currentVideoConv = modalImgConv.querySelector('.custom-dots li[data-nav=\"' + index + '\"]')\n                var event = document.createEvent('HTMLEvents')\n                event.initEvent('click', true, true)\n                currentVideoConv.dispatchEvent(event)\n\n                modalImgConv.classList.add('modal_active')\n            })\n        })\n    }\n\n    var modal_steps = document.querySelector('#modal_steps')\n        /*\n        if (modal_steps != null) {\n            var btnStep1OneCole = modal_steps.querySelector('#btn_one_cole'),\n                btnStep1DiffCole = modal_steps.querySelector('#btn_diff_cole'),\n                btnStep2Back = modal_steps.querySelector('#btn_step2_back'),\n                btnStep2Register = modal_steps.querySelector('#btn_step2_register'),\n                btnStep3Back = modal_steps.querySelector('#btn_step3_back'),\n                inputTextAutoComplete = modal_steps.querySelectorAll('.autocompl'),\n                btnStep3Register = modal_steps.querySelector('#btn_step3_register'),\n                btnStep4Back = modal_steps.querySelector('#btn_step4_back'),\n                btnStep4Siguiente = modal_steps.querySelector('#btn_step4_siguiente'),\n                btnStep5Back = modal_steps.querySelector('#btn_step5_back'),\n                btnPrintStep5 = modal_steps.querySelector('#btn_step5_print'),\n                btnAdd = modal_steps.querySelector('.cont_creditos .num_credit .mas a'),\n                btnLess = modal_steps.querySelector('.cont_creditos .num_credit .menos a'),\n                countCredit = modal_steps.querySelector('.cont_creditos .num_credit .num'),\n                flagOneCole, flagDiffCole = false\n                var selects = modalSteps.querySelectorAll('.item_selecole select')\n                // select.forEach(function (sel) {\n                //   sel.addEventListener('change', function () {\n                //     var ts = sel.parentNode.parentNode.querySelectorAll('.item_selecole').lenght\n                //     if (ts == 1) {\n                //       flagOneCole = true\n                //       btnStep2Register.parentNode.classList.remove('back_cal')\n                //       btnStep2Register.parentNode.classList.add('next_cal')\n                //     } else {\n                //       flagDiffCole = true\n                //       btnStep3Register.parentNode.classList.remove('back_cal')\n                //       btnStep3Register.parentNode.classList.add('next_cal')\n                //     }\n                //   })\n                // })\n            btnStep1OneCole.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                goToStep(2)\n            })\n            btnStep1DiffCole.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                goToStep(3)\n            })\n            btnStep2Back.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                goToStep(1)\n            })\n            btnStep2Register.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                goToStep(4)\n                var count = parseInt(countCredit.textContent)\n                calcDerecho(count)\n            })\n            btnStep3Back.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                goToStep(1)\n            })\n            btnStep3Register.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                goToStep(4)\n                var count = parseInt(countCredit.textContent)\n                calcDerecho(count)\n            })\n            btnStep4Back.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                goToStep(3)\n            })\n            btnStep4Siguiente.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                goToStep(5)\n            })\n            btnStep5Back.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                goToStep(4)\n            })\n            btnPrintStep5.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                closeModal(evt)\n                goToStep(1)\n            })\n            if (btnAdd) {\n                btnAdd.addEventListener('click', function(evt) {\n                    evt.preventDefault()\n                    var count = parseInt(countCredit.textContent)\n                    count += 1\n                    calcDerecho(count)\n                    countCredit.textContent = count\n                })\n                btnLess.addEventListener('click', function(evt) {\n                    evt.preventDefault()\n                    var count = parseInt(countCredit.textContent)\n                    count -= (count <= 0) ? 0 : 1\n                    calcDerecho(count)\n                    countCredit.textContent = count\n                })\n            }\n            if (inputTextAutoComplete) {\n                inputTextAutoComplete.forEach(function(input) {\n                    input.addEventListener('keyup', function(evt) {\n                        var keyCode = evt.keyCode || evt.charCode || evt.which\n                        if (input.value.trim() != '' && !(keyCode > 8 && keyCode < 19)) getAutocomplete(input.value)\n                    })\n                })\n            }\n        }\n        */\n    function closest(el, selector) {\n        var matchesFn;\n\n        // find vendor prefix\n        ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function(fn) {\n            if (typeof document.body[fn] == 'function') {\n                matchesFn = fn;\n                return true;\n            }\n            return false;\n        })\n\n        var parent;\n\n        // traverse parents\n        while (el) {\n            parent = el.parentElement;\n            if (parent && parent[matchesFn](selector)) {\n                return parent;\n            }\n            el = parent;\n        }\n\n        return null;\n    }\n    if (modal_steps != null) {\n        var NextStepSelector = '.next_cal a',\n            NextStepLinks = document.querySelectorAll(NextStepSelector)\n\n        NextStepLinks.forEach(function(item) {\n            item.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                console.log(\"click\");\n                var step_current = closest(this, \".paso1_inv\");\n                console.log(step_current);\n\n                var nodes = Array.prototype.slice.call(document.getElementById('modal_steps').children);\n                var liRef = step_current;\n                var ind = nodes.indexOf(liRef)\n                console.log(\"cur ind (next):\" + ind);\n                if (ind != 1) {\n                    var step_next = document.querySelectorAll(\".paso1_inv\")[ind + 1];\n                    step_current.style.display = \"none\";\n                    step_next.style.display = \"block\";\n                } else {\n                    var step_next = document.querySelectorAll(\".paso1_inv\")[5];\n                    step_current.style.display = \"none\";\n                    step_next.style.display = \"block\";\n                }\n            })\n        })\n\n        var PrevStepSelector = '.back_cal a',\n            PrevStepLinks = document.querySelectorAll(PrevStepSelector)\n\n        PrevStepLinks.forEach(function(item) {\n            item.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                console.log(\"click\");\n                var step_current = closest(this, \".paso1_inv\");\n                console.log(step_current);\n\n                var nodes = Array.prototype.slice.call(document.getElementById('modal_steps').children);\n                var liRef = step_current;\n                var ind = nodes.indexOf(liRef)\n                console.log(\"cur ind (prev):\" + ind);\n                if (ind != 1 && ind != 2) {\n\n                    var step_prev = document.querySelectorAll(\".paso1_inv\")[ind - 1];\n                    if (!step_prev.classList.contains(\"subform_ready\") && ind == 5) {\n                        step_prev = document.querySelectorAll(\".paso1_inv\")[1];\n                    }\n\n                    step_current.style.display = \"none\";\n                    step_prev.style.display = \"block\";\n\n                } else {\n                    var step_prev = document.querySelectorAll(\".paso1_inv\")[0];\n                    step_current.style.display = \"none\";\n                    step_prev.style.display = \"block\";\n                }\n            })\n        })\n\n        function comboReset(el) {\n            var options = el.querySelectorAll('option');\n            for (var i = 0, l = options.length; i < l; i++) {\n                options[i].selected = options[i].defaultSelected;\n            }\n            el.classList.remove(\"valid\");\n        }\n\n        function textfieldReset(el) {\n            el.value = \"\";\n            el.classList.remove(\"valid\");\n        }\n\n        function subformReset(subform, subform_valid_class) {\n            subform.classList.remove(subform_valid_class);\n        }\n\n        function resetAll() {\n            var textfield_validate_selector = 'input[type=\"text\"].tovalidate';\n            var all_textfield_to_validate = document.querySelectorAll(textfield_validate_selector);\n            if (all_textfield_to_validate.length) {\n                all_textfield_to_validate.forEach(function(item) {\n                    console.log(item);\n                    textfieldReset(item);\n                })\n            }\n\n            var combo_validate_selector = \"select.tovalidate\";\n            var all_combo_to_validate = document.querySelectorAll(combo_validate_selector);\n            if (all_combo_to_validate.length) {\n                all_combo_to_validate.forEach(function(item) {\n                    console.log(item);\n                    comboReset(item);\n                })\n            }\n\n            var subform_selector = \".paso1_inv\";\n            var all_subform = document.querySelectorAll(subform_selector);\n            if (all_subform.length) {\n                all_subform.forEach(function(item) {\n                    console.log(item);\n                    subformReset(item);\n                })\n            }\n        }\n\n\n        //STEP 1 : COMBO FREEDOM\n        var comboCicle = '.item_m1 select',\n            comboCicleElement = document.querySelector(comboCicle),\n            schoolOptions = \".cont_tipocolegios\",\n            schoolOptionsElement = document.querySelector(schoolOptions),\n            schoolOption = \".cont_cole\";\n        if (comboCicleElement) {\n            comboCicleElement.addEventListener('change', function() {\n\n                var index_ = this.selectedIndex;\n                console.log(index_);\n                if (index_ == 0) {\n                    console.log(\"Please select a option\");\n                    schoolOptionsElement.classList.add(\"disabled\");\n                    var allSchoolOption = schoolOptionsElement.querySelectorAll(schoolOption);\n                    allSchoolOption.forEach(function(item) {\n                        console.log(item);\n                        item.classList.remove(\"active\");\n                    })\n                    resetAll();\n\n                } else {\n\n                    schoolOptionsElement.classList.remove(\"disabled\");\n\n                }\n            })\n        }\n\n        var onecole = \"#btn_one_cole\",\n            diffcole = \"#btn_diff_cole\",\n            cicleStep = \"#modal_step1\",\n            onecoleStep = \"#modal_step2\",\n            diffcoleStep = \"#modal_step3\",\n            cicleStepElement = document.querySelector(cicleStep),\n            onecoleStepElement = document.querySelector(onecoleStep),\n            diffcoleStepElement = document.querySelector(diffcoleStep),\n            onecoleElement = document.querySelector(onecole),\n            diffcoleElement = document.querySelector(diffcole),\n            subform_valid_class = \"subform_ready\";\n        if (onecoleElement) {\n            onecoleElement.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                console.log(\"click\");\n                cicleStepElement.style.display = \"none\";\n                onecoleStepElement.style.display = \"block\";\n                this.parentNode.classList.add(\"active\");\n                diffcoleElement.parentNode.classList.remove(\"active\");\n                resetAll();\n            })\n        }\n\n        if (diffcoleElement) {\n            diffcoleElement.addEventListener('click', function(evt) {\n                evt.preventDefault()\n                console.log(\"click\");\n                cicleStepElement.style.display = \"none\";\n                diffcoleStepElement.style.display = \"block\";\n                this.parentNode.classList.add(\"active\");\n                onecoleElement.parentNode.classList.remove(\"active\");\n                resetAll();\n            })\n        }\n\n\n\n\n        function validatSubForm(subform, active_class) {\n            var selector_valid = \".valid\";\n            var all_valid_elements = subform.querySelectorAll(selector_valid).length;\n            var selector_to_validate = \".tovalidate\";\n            var all_to_validate_elements = subform.querySelectorAll(selector_to_validate).length;\n            console.log(all_valid_elements);\n            console.log(all_to_validate_elements);\n            var boolean_B = (all_valid_elements == all_to_validate_elements);\n            console.log(boolean_B);\n            if (boolean_B) {\n                subform.classList.add(active_class);\n            } else {\n                subform.classList.remove(active_class);\n            }\n            return boolean_B;\n        }\n\n        function comboValidate(el) {\n            el.addEventListener('change', function() {\n                var strUser = this.options[this.selectedIndex].value;\n                var strUser1 = this.options[this.selectedIndex].text;\n                var index_ = this.selectedIndex;\n                console.log(this.options[this.selectedIndex]);\n                console.log(this);\n                var step_current = closest(this, \".paso1_inv\");\n                console.log(\"index_ :\");\n                console.log(index_);\n                if (index_ == 0) {\n                    console.log(\"Please select a option\");\n                    step_current.querySelector(NextStepSelector).classList.add(\"disabled\");\n                    this.classList.remove(\"valid\");\n                    step_current.querySelector(NextStepSelector).classList.add(\"disabled_button\");\n                } else {\n\n                    this.classList.add(\"valid\");\n\n                }\n                var b_ = validatSubForm(step_current, subform_valid_class); //subform validation\n                if (b_) {\n                    step_current.querySelector(NextStepSelector).classList.remove(\"disabled_button\");\n                }\n\n            })\n        }\n\n        function textfieldValidate(el) {\n            el.addEventListener(\"change\", function() {\n                var step_current = closest(this, \".paso1_inv\");\n                console.log(this.value);\n                if (this.value == null || this.value == \"\") {\n                    this.classList.remove(\"valid\");\n                    step_current.querySelector(NextStepSelector).classList.add(\"disabled_button\");\n                } else {\n                    this.classList.add(\"valid\");\n                }\n                var b_ = validatSubForm(step_current, subform_valid_class); //subform validation\n                if (b_) {\n                    step_current.querySelector(NextStepSelector).classList.remove(\"disabled_button\");\n                }\n            })\n            el.addEventListener(\"blur\", function() {\n                console.log(\"blur\");\n                var step_current = closest(this, \".paso1_inv\");\n                console.log(this.value);\n                if (this.value == null || this.value == \"\") {\n                    this.classList.remove(\"valid\");\n                    step_current.querySelector(NextStepSelector).classList.add(\"disabled_button\");\n                } else {\n                    this.classList.add(\"valid\");\n                }\n                var b_ = validatSubForm(step_current, subform_valid_class); //subform validation\n                if (b_) {\n                    step_current.querySelector(NextStepSelector).classList.remove(\"disabled_button\");\n                }\n            })\n            el.addEventListener(\"focus\", function() {\n                console.log(\"focus\");\n                var step_current = closest(this, \".paso1_inv\");\n                console.log(this.value);\n                if (this.value == null || this.value == \"\") {\n                    this.classList.remove(\"valid\");\n                    step_current.querySelector(NextStepSelector).classList.add(\"disabled_button\");\n                } else {\n                    this.classList.add(\"valid\");\n                }\n                var b_ = validatSubForm(step_current, subform_valid_class); //subform validation\n                if (b_) {\n                    step_current.querySelector(NextStepSelector).classList.remove(\"disabled_button\");\n                }\n            })\n            el.addEventListener(\"keyup\", function() {\n                console.log(\"keyup\");\n                var step_current = closest(this, \".paso1_inv\");\n                console.log(this.value);\n                var b_ = validatSubForm(step_current, subform_valid_class); //subform validation\n                if (this.value.length > 1) {\n                    if (this.value == null || this.value == \"\") {\n                        this.classList.remove(\"valid\");\n                        step_current.querySelector(NextStepSelector).classList.add(\"disabled_button\");\n                    } else {\n                        this.classList.add(\"valid\");\n                    }\n\n\n                } else {\n                    this.classList.remove(\"valid\");\n                    step_current.querySelector(NextStepSelector).classList.add(\"disabled_button\");\n\n                }\n                if (b_) {\n                    step_current.querySelector(NextStepSelector).classList.remove(\"disabled_button\");\n                }\n            })\n        }\n\n        var combo_validate_selector = \"select.tovalidate\";\n        var all_combo_to_validate = document.querySelectorAll(combo_validate_selector);\n        if (all_combo_to_validate.length) {\n            all_combo_to_validate.forEach(function(item) {\n                console.log(item);\n                comboValidate(item);\n            })\n        }\n\n\n        var textfield_validate_selector = 'input[type=\"text\"].tovalidate';\n        var all_textfield_to_validate = document.querySelectorAll(textfield_validate_selector);\n        if (all_textfield_to_validate.length) {\n            all_textfield_to_validate.forEach(function(item) {\n                console.log(item);\n                textfieldValidate(item);\n            })\n        }\n\n    }\n\n\n\n    var secMaps = document.getElementById('sec_maps')\n\n    if (secMaps) {\n        secMaps.addEventListener('click', function(evt) {\n            if (evt.target.id == 'sec_maps' || evt.target.className.indexOf('mod_contacto') != -1) {\n                window.open('https://www.google.com/maps/place/Universidad+de+Lima/@-12.0847243,-76.9732035,17z/data=!3m1!4b1!4m5!3m4!1s0x9105c7b2985b2f5d:0xc55a9050acb093fc!8m2!3d-12.0847243!4d-76.9710095', '_blank')\n            }\n        })\n    }\n\n    var videosEmbed = document.querySelectorAll('.video-iframe')\n    if (videosEmbed) {\n        videosEmbed.forEach(function(video) {\n            video.setAttribute('src', video.getAttribute('src') + '?enablejsapi=1')\n        })\n    }\n\n    function calcDerecho(credit_amount) {\n        var credit_value = modal_steps.querySelector('#credit_value').getAttribute('data-credito'),\n            calcAmount = modal_steps.querySelector('#calcAmount'),\n            totalCicle = modal_steps.querySelector('#totalAmount'),\n            derechoMatricula = modal_steps.querySelector('#derecho_matricula').getAttribute('data-matricula'),\n            calc = 0\n\n        calc = parseInt(credit_value) * credit_amount\n        calcAmount.textContent = 'S/ ' + calc\n        totalCicle.textContent = 'S/ ' + (calc + parseInt(derechoMatricula))\n    }\n\n    function stopAllVideos() {\n        var allVideos = document.querySelectorAll('.video-iframe')\n        allVideos.forEach(function(video) {\n            video.contentWindow.postMessage('{\"event\":\"command\",\"func\":\"stopVideo\",\"args\":\"\"}', '*')\n        })\n    }\n\n    function goToStep(step) {\n        modal_steps.querySelector('#modal_step1').style.display = 'none'\n        modal_steps.querySelector('#modal_step2').style.display = 'none'\n        modal_steps.querySelector('#modal_step3').style.display = 'none'\n        modal_steps.querySelector('#modal_step4').style.display = 'none'\n        modal_steps.querySelector('#modal_step5').style.display = 'none'\n\n        modal_steps.querySelector('#modal_step' + step).style.display = 'block'\n\n        /*if (step == 2 || step == 3) {\n\n        }*/\n    }\n\n    function initAccordion() {\n        var selectorAccordions = '.ui-accordion',\n            accordions = document.querySelectorAll(selectorAccordions)\n\n        accordions.forEach(function(item) {\n            new _lib_UIAccordion__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                el: item,\n                viewOneAtTheTime: true,\n                allCloser: false,\n                withButtons: false\n            })\n        })\n    }\n\n    function initCountdown() {\n        var selectorCountdown = '#clockdiv',\n            countdown = document.querySelector(selectorCountdown)\n        if (countdown) {\n            new _lib_UICountdown__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n                el: countdown,\n                deadline: countdown.getAttribute('data-endtime')\n            })\n        }\n    }\n\n    function initCarousel() {\n        var selectorSliders = '.carousel .list-items',\n            sliders = document.querySelectorAll(selectorSliders)\n\n        sliders.forEach(function(item) {\n            var controlsCustom = item.parentNode.querySelector('.container-buttons-controls'),\n                containerDotsCustom = item.parentNode.querySelector('.custom-dots'),\n                slider = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_3__[\"tns\"])({\n                    container: item,\n                    slideBy: (item.hasAttribute('onlyone')) ? 1 : 'page',\n                    speed: 300,\n                    autoplay: item.hasAttribute('autoplay'),\n                    autoplayButtonOutput: false,\n                    autoplayTimeout: 4000,\n                    controls: item.hasAttribute('with-buttons'),\n                    loop: item.hasAttribute('infinite'),\n                    mouseDrag: true,\n                    nav: item.hasAttribute('with-dots'),\n                    navPosition: (item.hasAttribute('dotstop')) ? 'top' : 'bottom',\n                    navContainer: (containerDotsCustom) ? containerDotsCustom : false,\n                    navAsThumbnails: (containerDotsCustom) ? true : false,\n                    responsive: {\n                        '320': {\n                            items: item.hasAttribute('countitem-mob') ? item.getAttribute('countitem-mob') : 1\n                        },\n                        '1024': {\n                            items: item.hasAttribute('countitem-desk') ? item.getAttribute('countitem-desk') : 1\n                        }\n                    }\n                })\n                /*if (controlsCustom) {\n                  controlsCustom.querySelector('.right a').addEventListener('click', function (evt) {\n                    evt.preventDefault()\n                    slider.goTo('next')\n                  })\n                  controlsCustom.querySelector('.left a').addEventListener('click', function (evt) {\n                    evt.preventDefault()\n                    slider.goTo('prev')\n                  })\n                }*/\n        })\n    }\n\n    function initValidateForm() {\n        var selectorForm = '.form-validate',\n            forms = document.querySelectorAll(selectorForm)\n        console.log(\"total forms: \" + forms.length);\n        if (forms.length) {\n            forms.forEach(function(form) {\n                var chkTerm = form.querySelector('input[name=\"terminos\"]');\n                if (chkTerm) {\n                    var submit = form.querySelector('input[type=\"submit\"]');\n                    chkTerm.addEventListener('change', function() {\n                        if (this.checked && isFill(form)) {\n                            submit.classList.remove('btn-disabled')\n                            submit.classList.add('input_btn')\n                            submit.setAttribute('disabled');\n                        } else {\n                            submit.classList.add('btn-disabled')\n                            submit.classList.remove('input_btn')\n                            submit.removeAttribute('disabled')\n                        }\n                    });\n                }\n                form.addEventListener('submit', validateForm)\n            })\n        }\n\n    }\n\n    function meetingsForm() {\n        console.log(\"auto validate!!\");\n        /*var form = document.querySelector('.form-vanillajs-validate');\n        console.log(\"form meetting\");\n        var v = new Validator(form, {\n            rules: {\n                email: {\n                    required: true\n                },\n                carrera: {\n                    required: true\n                },\n                nombres: {\n                    required: true\n                },\n                apellidos: {\n                    required: true\n                },\n                numdoc: {\n                    required: true\n                },\n                telefono: {\n                    required: true\n                },\n                colegio: {\n                    required: false\n                },\n                grado: {\n                    required: true\n                },\n                terminos: {\n                    required: true\n                }\n            },\n            messages: {\n                email: {\n                    required: '*Asegurese de ingresar los datos solicitados.'\n                },\n                carrera: {\n                    required: '*Asegurese de ingresar los datos solicitados.'\n                },\n                nombres: {\n                    required: '*Asegurese de ingresar los datos solicitados.'\n                },\n                apellidos: {\n                    required: '*Asegurese de ingresar los datos solicitados.'\n                },\n                numdoc: {\n                    required: '*Asegurese de ingresar los datos solicitados.'\n                },\n                telefono: {\n                    required: '*Asegurese de ingresar los datos solicitados.'\n                },\n                colegio: {\n                    required: '*Asegurese de ingresar los datos solicitados.'\n                },\n                grado: {\n                    required: '*Asegurese de ingresar los datos solicitados.'\n                },\n                terminos: {\n                    required: '*Asegurese de ingresar los datos solicitados.'\n                }\n            }\n        });*/\n    }\n\n    function isFill(form) {\n        var fill = 1;\n        form.querySelectorAll('.input_form').forEach(function(input) {\n            fill *= (input.value) ? 1 : 0;\n        })\n        return (fill == 0) ? false : true;\n    }\n\n    function closeModal(evt) {\n        evt.preventDefault()\n        modalInscription.classList.remove('modal_active')\n        var videoIframe = modalInscription.querySelector('.video-iframe')\n        if (videoIframe) {\n            stopAllVideos()\n        }\n    }\n\n    function getAutocomplete(val) {\n        var promiseAutoComplete = fetchData(URL_AUTOCOMPLETE + '?term=' + val.replace(' ', '+'), true)\n        promiseAutoComplete.onreadystatechange = function() {\n            if (this.readyState == 4 && this.status == 200) {\n                // Typical action to be performed when the document is ready:\n                console.log(xhpromiseAutoCompleter.responseText)\n            }\n        }\n    }\n\n    function getDataCountry(evt) {\n        /*var xhr = new XMLHttpRequest()\n        xhr.onreadystatechange = function () {\n          if (this.readyState == 4 && this.status == 200) {\n            // Typical action to be performed when the document is ready:\n            console.log(xhr.responseText)\n          }\n        }\n        xhr.open(\"GET\", URL_FETCH_COUNTRY, true)\n        xhr.send();*/\n        // var promiseCountry = fetchData(URL_FETCH_COUNTRY, false)\n        modalInscription.classList.add('modal_active')\n    }\n\n    function fetchData(url, isWithAuth) {\n        var xhr = new XMLHttpRequest()\n        xhr.open('GET', url, true)\n            // if (isWithAuth) {\n        xhr.setRequestHeader('Authorization', 'Basic ' + btoa('ulima:ulima'))\n            // }\n        xhr.send()\n        return xhr\n    }\n\n    function validateForm(evt) {\n        var validators = {\n                email: {\n                    presence: {\n                        message: '^Asegurese de ingresar los datos solicitados.'\n                    },\n                    email: {\n                        message: '^Correo electrÃ³nido invÃ¡lido.'\n                    }\n                },\n                carrera: {\n                    presence: {\n                        message: '^Seleccione una opcion para continuar.'\n                    }\n                },\n                nombres: {\n                    presence: {\n                        message: '^Asegurese de ingresar los datos solicitados.'\n                    }\n                },\n                apellidos: {\n                    presence: {\n                        message: '^Asegurese de ingresar los datos solicitados.'\n                    }\n                },\n                numdoc: {\n                    presence: {\n                        message: '^Asegurese de ingresar los datos solicitados.'\n                    }\n                },\n                telefono: {\n                    presence: {\n                        message: '^Asegurese de ingresar los datos solicitados.'\n                    }\n                },\n                colegio: {\n                    presence: {\n                        message: '^Asegurese de ingresar los datos solicitados.'\n                    }\n                },\n                grado: {\n                    presence: {\n                        message: '^Asegurese de ingresar los datos solicitados.'\n                    }\n                },\n                terminos: {\n                    presence: {\n                        message: '^Asegurese de aceptar los TÃ©rminos y condiciones.'\n                    }\n                }\n            },\n            inputValidators = {}\n\n        var values = Validate.collectFormValues(evt.target)\n        for (var keyValue in values) {\n            for (var keyValid in validators) {\n                if (keyValue == keyValid) inputValidators[keyValid] = validators[keyValid]\n            }\n        }\n\n        var errors = Validate(values, inputValidators)\n        if (errors) evt.preventDefault()\n        showErrors(evt.target, errors)\n    }\n\n    function showErrors(form, errors) {\n        var fields = form.querySelectorAll(\"input[name]:not([type='submit']), select[name]\")\n        fields.forEach(function(input) {\n            showErrorsForInput(input, errors)\n        })\n    }\n\n    function showErrorsForInput(input, errors) {\n        var formGroup = (input.getAttribute('name') == 'terminos') ? input.parentNode.parentNode : input.parentNode,\n            messages = formGroup.querySelector('.message-error')\n\n        resetFormGroup(formGroup)\n        if (errors) {\n            formGroup.classList.add('has-error')\n            for (var key in errors) {\n                if (key == input.name) {\n                    addError(messages, errors[key])\n                }\n            }\n        } else {\n            formGroup.classList.add('has-success')\n        }\n    }\n\n    function resetFormGroup(formGroup) {\n        formGroup.classList.remove('has-error')\n        formGroup.classList.remove('has-success')\n        var errors = formGroup.querySelectorAll('.help-block.error')\n        errors.forEach(function(el) {\n            el.parentNode.removeChild(el)\n        })\n    }\n\n    function addError(messages, error) {\n        var block = document.createElement('p')\n        if (block) {\n            block.classList.add('help-block')\n            block.classList.add('error')\n            block.innerHTML = error\n            if (messages) {\n                messages.appendChild(block)\n            }\n\n        }\n\n    }\n\n    function showSuccess() {\n        alert('Success!')\n    }\n\n\n\n    function ExtraCrispy() {\n        //LINKING COMBO \n        var attribute_option_A_linking_combo = \"value\";\n        var attribute_option_B_linking_combo = \"data-url\";\n        var selector_form_linking_combo = \"#formSelectCarrera\";\n        var selector_sender_linking_combo = \"input[type='submit']\";\n        var selector_option_linking_combo = \".same-as-selected\";\n\n        //SERVICES \n        var service_url_prefix = \"http://165.227.165.221\";\n        var service_path_galleries = \"/galeria\";\n        var service_path_suscriptions = \"/api/suscribete\";\n        var service_path_agreements = \"/convenio\";\n        var service_key_postfix = \"?term=\";\n\n\n\n        //SENDING FORM REMOTE\n        var selector_form_sending_suscription = \"#form-suscribe\";\n        var selector_sender_sending_suscription = \"#btn_suscripte\";\n\n        //LOADING COMBO REMOTE\n        var selector_box_agreements = \".cont_buscador_mapa\";\n        var selector_item_combo_agreements = \".select-items > div\";\n        var selector_combo_agreements = \"#select_country_convenios\";\n        var selector_option_combo_agreements = \".same-as-selected\";\n        var selector_modal_agreements = \".cont_buscador_mapa\";\n        var class_modal_active_agreements = \"modal_active\";\n\n\n\n\n        var SendSelection = function(button) {\n\n            button.addEventListener(\"click\", function(e) {\n                e.preventDefault();\n                console.log(\"clicking\");\n                var form = document.querySelector(selector_form_linking_combo);\n                console.log(form);\n                if (form) {\n                    var selected = form.querySelector(selector_option_linking_combo);\n\n\n                    console.log(selected);\n                    if (selected) {\n                        var url = selected.getAttribute(attribute_option_A_linking_combo);\n                        console.log(url)\n                        if (url) {\n                            RedirectionLink(selected);\n                        }\n\n                    }\n                }\n            });\n        }\n\n\n        var RedirectionLink = function(element) {\n            var link = element.getAttribute(attribute_option_A_linking_combo);\n            window.location.href = link;\n            console.log(\"linking\");\n        }\n\n        var LinkingCombo = function() {\n            console.log(\"linking combo\");\n\n            console.log(selector_form_linking_combo);\n            var form = document.querySelector(selector_form_linking_combo);\n            console.log(form);\n            if (form) {\n                var button = form.querySelector(selector_sender_linking_combo);\n                if (button) {\n                    console.log(button);\n                    SendSelection(button);\n                    console.log(\"reading\");\n                }\n\n            }\n        }\n\n        var SerializeForm = function(element) {\n\n            // Setup our serialized data\n            var serialized = [];\n\n            // Loop through each field in the form\n            for (var i = 0; i < element.elements.length; i++) {\n\n                var field = element.elements[i];\n\n                // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields\n                if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;\n\n                // If a multi-select, get all selections\n                if (field.type === 'select-multiple') {\n                    for (var n = 0; n < field.options.length; n++) {\n                        if (!field.options[n].selected) continue;\n                        serialized.push(encodeURIComponent(field.name) + \"=\" + encodeURIComponent(field.options[n].value));\n                    }\n                }\n\n                // Convert field data to a query string\n                else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {\n                    console.log(field);\n                    console.log(\"value=\" + encodeURIComponent(field.value));\n                    serialized.push(encodeURIComponent(field.name) + \"=\" + encodeURIComponent(field.value));\n                }\n            }\n\n            return serialized.join('&');\n\n        };\n\n        var RemoteService = function(url, method, value, callback) {\n\n\n\n            var xhr = new XMLHttpRequest();\n\n            xhr.onreadystatechange = function() {\n                if (xhr.readyState == 4 && xhr.status == 200) {\n                    console.log(xhr.responseText);\n                    try {\n                        var data = JSON.parse(xhr.responseText);\n                    } catch (err) {\n                        console.log(err.message + \" in \" + xhr.responseText);\n                        return;\n                    }\n                    callback(data);\n                }\n            };\n\n            xhr.open(method, url, true);\n            if (method == 'POST') {\n                xhr.send(value);\n            } else if (method == 'GET') {\n                xhr.send();\n            }\n\n        }\n\n\n        var SendingSuscription = function() {\n\n            console.log(\"sending remote form\");\n\n            console.log(selector_form_linking_combo);\n            var form = document.querySelector(selector_form_sending_suscription);\n            console.log(form);\n            if (form) {\n\n                var url = service_url_prefix + service_path_suscriptions;\n                console.log(url);\n                var button = form.querySelector(selector_sender_sending_suscription);\n                if (button) {\n                    console.log(button);\n                    form.addEventListener(\"submit\", function(e) {\n                        e.preventDefault();\n                        var data = SerializeForm(form);\n                        console.log(data);\n                        console.log(\"clicking remote\");\n                        RemoteService(url, 'POST', data, function() {\n                            console.log(\"posting!\");\n                        });\n                        console.log(\"reading remote\");\n                    });\n                }\n\n            }\n\n\n        }\n\n        var LoadingModalAgreements = function(data, type) {\n\n\n\n                var fill_listing = function(title, listing, data) {\n\n                    if (data) {\n                        if (title) {\n                            title.innerHTML = data.titulo;\n                        }\n\n                        if (listing) {\n                            listing.innerHTML = \"\";\n                            var list = data.data;\n                            for (var i = 0; i < list.length; i++) {\n                                var item = '<li><a href=\"' + list[i].name + '\">' + list[i].name + '</a></li>';\n                                listing.insertAdjacentHTML('beforeend', item);\n                            }\n                        }\n                    }\n\n\n                };\n\n                console.log(\"data loaded\");\n                console.log(data);\n                console.log(data.titulo);\n                console.log(\"type: \" + type);\n                if (type == \"modal\") {\n                    var modal = document.querySelector(\".modal_incrip.msn_convenio\");\n                    var title = modal.querySelector(\"h2\");\n                    var listing = modal.querySelector(\"ul\");\n                    var button = modal.querySelector(\".cerrar\");\n\n                    console.log(modal);\n                    console.log(title);\n                    console.log(listing);\n\n                    fill_listing(title, listing, data);\n\n\n\n                    modal.classList.add(\"animated\");\n                    console.log(\"animated\");\n                    modal.setAttribute(\"style\", \"display:flex\");\n\n\n                    modal.classList.remove(\"fadeIn\");\n                    modal.classList.add(\"fadeIn\");\n\n                    button.addEventListener(\"click\", function(e) {\n                        e.preventDefault();\n\n                        modal.classList.add(\"fadeOut\");\n\n\n                        modal.classList.remove(\"fadeIn\");\n                        modal.classList.remove(\"fadeOut\");\n                        modal.setAttribute(\"style\", \"display:none\");\n\n\n\n\n                    });\n\n                } else if (type == \"content\") {\n                    var content = document.querySelector(\".lit_paises\");\n                    var title = content.querySelector(\"h3\");\n                    var listing = content.querySelector(\"ul\");\n\n                    console.log(content);\n                    console.log(title);\n                    console.log(listing);\n                    fill_listing(title, listing, data);\n                }\n\n            }\n            //\n\n        var LoadingComboAgreements = function() {\n\n            console.log(\"sending remote form\");\n\n            console.log(selector_box_agreements);\n            var box_combo = document.querySelector(\".cont_buscador_mapa .custom-select\");\n            console.log(box_combo);\n            if (box_combo) {\n\n                var combo = box_combo.querySelector(\".select-items\");\n                console.log(combo);\n                if (combo) {\n                    var items = combo.getElementsByTagName(\"div\");\n                    console.log(items.length);\n                    for (var i = 0; i < items.length; i++) {\n                        const element = items[i];\n                        element.addEventListener(\"click\", function(e) {\n                            e.preventDefault();\n                            var value = (this.getAttribute(\"value\")).toString().toLowerCase();\n                            if (value != null) {\n\n\n                                if (document.querySelector(\"body\").classList.contains(\"test\")) {\n                                    var url = \"tmp/\" + value + \".json\"; //service_url_prefix + service_path_agreements + service_key_postfix + value;\n                                } else {\n                                    var url = service_url_prefix + service_path_agreements + service_key_postfix + value;\n                                }\n                                console.log(url);\n                                console.log(combo);\n                                console.log(\"loading remote item\");\n                                RemoteService(url, 'GET', null, function(data) {\n                                    console.log(data);\n\n                                    var dom = (document.compatMode === \"CSS1Compat\") ? document.documentElement : document.body;\n                                    var width = dom.clientWidth;\n                                    if (width > 650) {\n                                        LoadingModalAgreements(data, \"modal\");\n                                    } else {\n                                        LoadingModalAgreements(data, \"content\");\n                                    }\n\n                                });\n                                console.log(\"reading remote 2\");\n                            }\n                        });\n                    }\n\n\n                }\n\n            }\n        }\n\n\n        var LoadingModalGalleries = function() {\n\n\n            var selector_modal = \".modal-img-infra\";\n            var modal = document.querySelector(selector_modal);\n            if (modal) {\n                modal.innerHTML = \"\";\n                var src_img = \"/themes/ulima/assets/img/png/cerrar.png\";\n                if (document.querySelector(\"body\").classList.contains(\"test\")) {\n                    src_img = \"img/png/cerrar.png\"; //source image\n                }\n\n                var tmpl = '<div class=\"layer_dark\"></div><div><div class=\"cont_galery_pu carousel\"><div class=\"gale_pu list-items\" with-dots with-buttons countitem-mob=\"1\" countitem-desk=\"1\" infinite=\"1\"></div><div class=\"custom-dots-container\"><ul class=\"custom-dots\"></ul></div></div><span class=\"cerrar\"><a href=\"\"><img src=\"' + src_img + '\" /></a></span></div>';\n                modal.innerHTML = tmpl;\n\n\n                var gallery_list = \".gale_pu.list-items\";\n                var gallery_thumbs = \".custom-dots\";\n\n                var selector_button_open = \".remote-gallery-modal\";\n                var selector_button_close = \".cerrar\";\n\n                var button_close = modal.querySelector(selector_button_close);\n\n                if (!button_close.classList.contains(\"rendered\")) {\n                    button_close.classList.add(\"rendered\");\n                    button_close.addEventListener(\"click\", function(e) {\n                        e.preventDefault();\n                        modal.classList.remove(\"modal_active\");\n                    });\n                }\n\n\n                var all_buttons_open = document.querySelectorAll(selector_button_open);\n                for (var k = 0; k < all_buttons_open.length; k++) {\n                    var button_open = all_buttons_open[k];\n                    button_open.addEventListener(\"click\", function(e) {\n                        e.preventDefault();\n                        modal.classList.add(\"modal_active\");\n                        var value = this.getAttribute(\"data-term\");\n                        console.log(value);\n                        if (value != null) {\n                            if (document.querySelector(\"body\").classList.contains(\"test\")) {\n                                var url = \"tmp/\" + value + \".json\"; //service_url_prefix +service_path_agreements + service_key_postfix + value;\n                            } else {\n                                var url = service_url_prefix + service_path_galleries + service_key_postfix + value;\n                            }\n                            if (url) {\n                                RemoteService(url, 'GET', null, function(data) {\n                                    console.log(data);\n                                    LoadingModalDataGallery(data);\n                                    console.log(\"remote data term\");\n                                });\n                            }\n\n                        }\n                    });\n\n                }\n            }\n\n        }\n\n\n        var LoadingModalDataGallery = function(response) {\n            var modal = document.querySelector(\".modal-img-infra\");\n\n            var listing1 = modal.querySelector(\".gale_pu.list-items\");\n            var listing2 = modal.querySelector(\".custom-dots\");\n            if (listing1 && listing2) {\n                console.log(modal);\n\n                console.log(listing1);\n                console.log(listing2);\n                console.log(\"data loaded 2\");\n                console.log(response);\n\n\n\n                listing1.innerHTML = \"\";\n                listing2.innerHTML = \"\";\n                var list = response.data;\n                console.log(list);\n                var list0 = response.data[0].image;\n                for (var i = 0; i < list.length; i++) {\n                    var item = '<div class=\"item-note\"><img src=\"' + list[i].image + '\" style=\"width: 100%\" /></div>';\n                    listing1.insertAdjacentHTML('beforeend', item);\n                    var thumb = '<li><img src=\"' + list[i].image + '\"/><li>';\n                    listing2.insertAdjacentHTML('beforeend', thumb);\n                }\n\n                var controlsCustom = listing1,\n                    containerDotsCustom = listing2,\n\n                    slider = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_3__[\"tns\"])({\n                        container: listing1,\n                        slideBy: (listing1.hasAttribute('onlyone')) ? 1 : 'page',\n                        speed: 300,\n                        autoplay: listing1.hasAttribute('autoplay'),\n                        autoplayButtonOutput: false,\n                        autoplayTimeout: 4000,\n                        controls: listing1.hasAttribute('with-buttons') || false,\n                        loop: listing1.hasAttribute('infinite') || false,\n                        mouseDrag: true,\n                        nav: listing1.hasAttribute('with-dots') || false,\n                        navPosition: (listing1.hasAttribute('dotstop')) ? 'top' : 'bottom',\n                        navContainer: (containerDotsCustom) ? containerDotsCustom : false,\n                        navAsThumbnails: (containerDotsCustom) ? true : false,\n                        responsive: {\n                            '320': {\n                                items: listing1.hasAttribute('countitem-mob') ? listing1.getAttribute('countitem-mob') : 1\n                            },\n                            '1024': {\n                                items: listing1.hasAttribute('countitem-desk') ? listing1.getAttribute('countitem-desk') : 1\n                            }\n                        }\n                    })\n                console.log(\"customized slider!\");\n            } else {\n                console.log(\"slider has no enough elements: .gale_pu.list-items or  .custom-dots\");\n            }\n\n        }\n\n        var MeetingSchedule = function() {\n\n\n            var meeting_selector = \".charlasxcarrera\";\n\n            var btn_form_selector = \"#btn_insCharla\";\n            var btn_form_element = document.querySelector(btn_form_selector);\n            var meeting_element = document.querySelector(meeting_selector);\n            if (meeting_element) {\n                console.log(\"form meetings schedule\");\n                var meeting_of_day_selector = \".itemdiacharla\";\n                var all_meeting_of_day_element = document.querySelectorAll(meeting_of_day_selector);\n                console.log(\"all meeet days :\" + all_meeting_of_day_element.length);\n                if (all_meeting_of_day_element.length) {\n                    all_meeting_of_day_element.forEach(function(item) {\n                        //console.log(item);\n                        item.setAttribute(\"data-state\", 0);\n                        item.setAttribute(\"data-duplicates\", 0);\n                        SpecialCombo(item);\n\n\n                    })\n                }\n            }\n            if (btn_form_element) {\n                btn_form_element.classList.add(\"disabled_button\");\n            }\n\n        }\n        var SpecialCombo = function(element) {\n\n            var combo_selector = \".custom-select\";\n            var combo_option_selector = \".select-items > div\";\n            var combo_option_selected_selector = \".same-as-selected\"; //\n            var day_selector = \".itemdiacharla\"\n            var combos = element.querySelectorAll(combo_selector);\n\n            if (combos.length) {\n\n                combos.forEach(function(combo) {\n                    combo.setAttribute(\"data-state\", 0);\n\n                    var all_options = combo.querySelectorAll(combo_option_selector);\n                    //console.log(all_options.length);\n                    if (all_options.length) {\n\n                        all_options.forEach(function(item, i) {\n                            //console.log(item);\n                            item.setAttribute(\"data-index\", i);\n                            //console.log(i);\n                            item.addEventListener(\"click\", function(e) {\n                                e.preventDefault();\n                                var this_combo = closest(this, combo_selector);\n                                var value_real_el = this_combo.querySelector(\".same-as-selected\"); //this_combo.querySelector(\".same-as-selected\");\n                                var value_real = value_real_el.getAttribute(\"value\");\n                                console.log(value_real);\n                                if (value_real) {\n                                    value_real = value_real.toString();\n                                    console.log(value_real);\n                                    value_real = value_real.split(\"-\");\n                                    value_real = value_real[value_real.length - 1];\n\n                                    this_combo.setAttribute(\"data-value\", value_real);\n                                }\n                                this_combo.classList.add(\"was-selected\");\n                                this_combo.setAttribute(\"data-state\", 1);\n\n\n                                CountDuplicatesThisDay(element);\n                                ValidateThisDay(element);\n                                ValidateAllDays();\n                            });\n                        })\n                    }\n\n                })\n\n\n            }\n\n        };\n        var CountDuplicatesThisDay = function(day) {\n            var combo_selector = \".custom-select.was-selected\";\n            var combo_option_selector = \".select-items > div\";\n            var combo_option_selected_selector = \".same-as-selected\"; //\n            var day_selector = \".itemdiacharla\"\n            var combos = day.querySelectorAll(combo_selector);\n            var tmpl_error = '<div class=\"message-error\"><p class=\"help-block error\">Debe seleccionar horarios diferentes</p></div>';\n            var error_selector = \".message-error\";\n            var error_element = day.querySelector(error_selector);\n            if (combos.length) {\n                var results = [];\n                for (var i = 0; i < combos.length; i++) {\n                    var current_value = combos[i].getAttribute(\"data-value\");\n                    for (var j = 0; j < combos.length; j++) {\n                        if (i != j) {\n                            var next_value = combos[j].getAttribute(\"data-value\");\n                            if (current_value == next_value) {\n                                results.push(combos[j]);\n                            }\n                        }\n\n                    }\n\n                }\n                console.log(results);\n                console.log(\"results:\");\n                console.log(results.length);\n                day.setAttribute(\"data-duplicates\", results.length / 2);\n                var duplicates = parseInt(day.getAttribute(\"data-duplicates\"));\n                var btn_form_selector = \"#btn_insCharla\";\n                var btn_form_element = document.querySelector(btn_form_selector);\n                if (duplicates >= 1) {\n                    if (!error_element) {\n                        console.log(\"no existe elemento error\");\n                        day.insertAdjacentHTML('beforeend', tmpl_error);\n\n                        if (btn_form_element) {\n                            btn_form_element.classList.add(\"disabled_button\");\n                        }\n                    }\n                } else {\n                    if (error_element) {\n                        console.log(\"existe elemento error\");\n                        error_element.parentNode.removeChild(error_element);\n                        if (btn_form_element) {\n                            btn_form_element.classList.remove(\"disabled_button\");\n                        }\n                    }\n                }\n            }\n        }\n\n        var ValidateThisDay = function(day) {\n\n            var combo_selector = \".custom-select\";\n            var combo_option_selector = \".select-items > div\";\n            var combo_option_selected_selector = \".same-as-selected\"; //\n            var btn_form_selector = \"#btn_insCharla\";\n            var btn_form_element = document.querySelector(btn_form_selector);\n            var combos = day.querySelectorAll(combo_selector);\n\n            if (combos.length) {\n                var counter = 0;\n\n                var total = combos.length;\n                combos.forEach(function(combo) {\n                    var state = parseInt(combo.getAttribute(\"data-state\"));\n                    counter += state;\n                })\n                console.log(counter);\n                console.log(total);\n                if (counter >= 1) { //<-- at least one day  // if (counter == total) //--> all days of this event //\n                    console.log(\"valid form\");\n                    if (btn_form_element) {\n                        btn_form_element.classList.remove(\"disabled_button\");\n                    }\n                }\n            }\n\n        };\n        var ValidateAllDays = function() {\n            var group_form_selector = \".charlasxcarrera\";\n            var meeting_of_day_selector = \".itemdiacharla\";\n            var all_meeting_of_day_element = document.querySelectorAll(meeting_of_day_selector);\n            var btn_form_selector = \"#btn_insCharla\";\n            var btn_form_element = document.querySelector(btn_form_selector);\n            if (all_meeting_of_day_element.length) {\n                var counter = 0;\n\n                var total = all_meeting_of_day_element.length;\n                all_meeting_of_day_element.forEach(function(item) {\n                    //console.log(item);\n                    var duplicates = parseInt(item.getAttribute(\"data-duplicates\"));\n                    counter += duplicates;\n\n\n                })\n                console.log(counter);\n                console.log(total);\n\n                if (counter == 0) { //<-- at least one day  // if (counter == total) //--> all days of this event\n                    console.log(\"valid form\");\n                    if (btn_form_element) {\n                        btn_form_element.classList.remove(\"disabled_button\");\n                    }\n                } else {\n                    if (btn_form_element) {\n                        btn_form_element.classList.add(\"disabled_button\");\n                    }\n                }\n            }\n        };\n\n\n        var Init = function() {\n            //INITIALIZATION\n            var _selector_form_linking_combo = \"#formSelectCarrera\";\n\n            var _form_linking_combo = document.querySelector(_selector_form_linking_combo);\n\n            if (_form_linking_combo) {\n                LinkingCombo();\n                SendingSuscription();\n            }\n\n            var _selector_combo_agreements = \".cont_buscador_mapa\";\n            var _combo_agreements = document.querySelector(_selector_combo_agreements);\n            if (_combo_agreements) {\n                LoadingComboAgreements();\n            }\n\n\n            var _selector_modal = \".modal-img-infra\";\n            var _modal = document.querySelector(_selector_modal);\n            console.log(\"modal\");\n            console.log(_modal);\n            if (_modal) {\n                LoadingModalGalleries();\n                console.log(\"yes!\");\n            }\n            var _selector_schedule = \".charlasxcarrera\";\n            var _schedule = document.querySelector(_selector_schedule);\n            if (_schedule) {\n                MeetingSchedule();\n            }\n        }\n        console.log(\"init\");\n        Init();\n    }\n\n\n\n\n    function SendingDataScheduleForm(e, form, state) {\n        var returnVal = {\n            message: \"customSubmitHandler callback fired\",\n            args: arguments\n        }\n        console.log(\"customSubmitHandler\", returnVal);\n        return returnVal;\n    };\n\n\n    function getJSON(url, qs_params) {\n        function buildQueryString(params) {\n            return Object.entries(params).map(d => `${d[0]}=${d[1]}`).join('&');\n        }\n\n        return new Promise((resolve, reject) => {\n            const qs = qs_params ? '?' + buildQueryString(qs_params) : '';\n            const xhr = new XMLHttpRequest();\n            xhr.open('GET', `${url}${qs}`);\n\n            xhr.onload = function() {\n                if (xhr.status >= 200 && xhr.status < 400) {\n                    resolve(JSON.parse(xhr.responseText));\n                } else {\n                    resolve(xhr.responseText);\n                }\n            };\n            xhr.onerror = () => reject(xhr.statusText);\n            xhr.send();\n        });\n    }\n\n\n    function AutoCompleteField() {\n\n        var colegios = [\n            { label: 'Bellavista', value: 'UK' },\n            { label: 'Benito Muslini', value: 'UK' },\n            { label: 'Buenos Aires', value: 'UK' },\n            { label: 'Ricardo Palma', value: 'UK' },\n            { label: 'Richard Clayderman', value: 'UK' },\n            { label: 'Rafael Nadal', value: 'UK' },\n            { label: 'Maristas', value: 'US' },\n            { label: 'Maria Reich', value: 'US' },\n            { label: 'Sagrado Corazon de Jesus', value: 'UK' },\n            { label: 'Sagrada Familia', value: 'UK' },\n            { label: 'San Vicente de Paul', value: 'US' }\n        ];\n        var form = document.querySelector(\".form-autocomplete\");\n        if (form) {\n\n\n            console.log(form)\n            if (typeof autocomplete == 'function') {\n                var field_autocomplete = document.querySelector(\"#colegios-list\");\n                if (field_autocomplete) {\n                    console.log(field_autocomplete)\n                };\n                console.log(\"function\")\n            }\n\n            //});\n\n            autocomplete({\n                input: field_autocomplete,\n                fetch: function(text, update) {\n                    text = text.toLowerCase();\n\n                    var suggestions = colegios.filter(n => n.label.toLowerCase().startsWith(text))\n                    update(suggestions);\n                },\n                onSelect: function(item) {\n                    console.log(item.value);\n                    console.log(item.label);\n                    field_autocomplete.value = item.label;\n\n                }\n            });\n        }\n    }\n\n\n\n\n\n    ExtraCrispy();\n    //AutoCompleteField();\n})\n\n//# sourceURL=webpack:///./src/main.js?");

        /***/
    })

    /******/
});

/* jquery*/
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
! function(e, t) { "use strict"; "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        E = C.document,
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.concat,
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) { return "function" == typeof e && "number" != typeof e.nodeType },
        x = function(e) { return null != e && e === e.window },
        c = { type: !0, src: !0, nonce: !0, noModule: !0 };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e }
    var f = "3.4.1",
        k = function(e, t) { return new k.fn.init(e, t) },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function d(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() { return s.call(this) },
        get: function(e) { return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e] },
        pushStack: function(e) { var t = k.merge(this.constructor(), e); return t.prevObject = this, t },
        each: function(e) { return k.each(this, e) },
        map: function(n) { return this.pushStack(k.map(this, function(e, t) { return n.call(e, t, e) })) },
        slice: function() { return this.pushStack(s.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() { return this.prevObject || this.constructor() },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) { throw new Error(e) },
        noop: function() {},
        isPlainObject: function(e) { var t, n; return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l) },
        isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
        globalEval: function(e, t) { b(e, { nonce: t && t.nonce }) },
        each: function(e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break; return e
        },
        trim: function(e) { return null == e ? "" : (e + "").replace(p, "") },
        makeArray: function(e, t) { var n = t || []; return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n },
        inArray: function(e, t, n) { return null == t ? -1 : i.call(t, e, n) },
        merge: function(e, t) { for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]; return e.length = i, e },
        grep: function(e, t, n) { for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]); return r },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (d(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date,
            m = n.document,
            S = 0,
            r = 0,
            p = ue(),
            x = ue(),
            N = ue(),
            A = ue(),
            D = function(e, t) { return e === t && (l = !0), 0 },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp($),
            V = new RegExp("^" + I + "$"),
            G = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + W), PSEUDO: new RegExp("^" + $), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + R + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ne = function(e, t, n) { var r = "0x" + t - 65536; return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) { return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e },
            oe = function() { T() },
            ae = be(function(e) { return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase() }, { dir: "parentNode", next: "legend" });
        try { H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType } catch (e) {
            H = {
                apply: t.length ? function(e, t) { L.apply(e, O.call(t)) } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) { if (9 === p) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n; if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n }
                if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie): e.setAttribute("id", s = k), o = (l = h(t)).length;
                        while (o--) l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try { return H.apply(n, f.querySelectorAll(c)), n } catch (e) { A(t, !0) } finally { s === k && e.removeAttribute("id") }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() { var r = []; return function e(t, n) { return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n } }

        function le(e) { return e[k] = !0, e }

        function ce(e) { var t = C.createElement("fieldset"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function he(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function ge(t) { return function(e) { return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t } }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) { return e && "undefined" != typeof e.getElementsByTagName && e }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function(e) { return e.className = "i", !e.getAttribute("className") }), d.getElementsByTagName = ce(function(e) { return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) { return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length }), d.getById ? (b.filter.ID = function(e) { var t = e.replace(te, ne); return function(e) { return e.getAttribute("id") === t } }, b.find.ID = function(e, t) { if ("undefined" != typeof t.getElementById && E) { var n = t.getElementById(e); return n ? [n] : [] } }) : (b.filter.ID = function(e) { var n = e.replace(te, ne); return function(e) { var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id"); return t && t.value === n } }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) { return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0 } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) { while (n = o[i++]) 1 === n.nodeType && r.push(n); return r }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) { if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e) }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) { a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]") }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) { d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $) }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function(e, t) { if (e === t) return l = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
                }), C
            }, se.matches = function(e, t) { return se(e, null, null, t) }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try { var n = c.call(e, t); if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) { A(t, !0) }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) { return (e.ownerDocument || e) !== C && T(e), y(e, t) }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) { return (e + "").replace(re, ie) }, se.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) { while (t = e[i++]) t === e[i] && (r = n.push(i)); while (r--) e.splice(n[r], 1) }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === i || 4 === i) return e.nodeValue } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(e) { return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } },
                filter: {
                    TAG: function(e) { var t = e.replace(te, ne).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } },
                    CLASS: function(e) { var t = p[e + " "]; return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) { return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "") }) },
                    ATTR: function(n, r, i) { return function(e) { var t = se.attr(e, n); return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-")) } },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) { return !!e.parentNode } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) { i[h] = [S, s, d]; break }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) { return a(e, 0, t) }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[k] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) { return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop() }
                    }),
                    has: le(function(t) { return function(e) { return 0 < se(t, e).length } }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) { return -1 < (e.textContent || o(e)).indexOf(t) }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do { if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id },
                    root: function(e) { return e === a },
                    focus: function(e) { return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                    selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) { return !b.pseudos.empty(e) },
                    header: function(e) { return J.test(e.nodeName) },
                    input: function(e) { return Q.test(e.nodeName) },
                    button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                    text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) },
                    first: ve(function() { return [0] }),
                    last: ve(function(e, t) { return [t - 1] }),
                    eq: ve(function(e, t, n) { return [n < 0 ? n + t : n] }),
                    even: ve(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }),
                    odd: ve(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }),
                    lt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r); return e }),
                    gt: ve(function(e, t, n) { for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r); return e })
                }
            }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = de(e);
        for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) { for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value; return r }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else { if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2]; if ((i[c] = a)[2] = s(e, t, n)) return !0 } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) { for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s))); return a }

        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) { for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) { i = Te(p, u), v(i, [], n, r), o = i.length; while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a)) }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) { return e === i }, a, !0), l = be(function(e) { return -1 < P(i, e) }, a, !0), c = [function(e, t, n) { var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n)); return i = null, r }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) { for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(B, " ") }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = N[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = S += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument === C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) { r.push(o); break }
                            i && (S = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (S = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) { if (a = o[i], b.relative[s = a.type]) break; if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) { if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n; break } }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) { return 1 & e.compareDocumentPosition(C.createElement("fieldset")) }), ce(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || fe("type|href|height|width", function(e, t, n) { if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), d.attributes && ce(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || fe("value", function(e, t, n) { if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue }), ce(function(e) { return null == e.getAttribute("disabled") }) || fe(R, function(e, t, n) { var r; if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null }), se
    }(C);
    k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
    var T = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && k(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        S = function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n },
        N = k.expr.match.needsContext;

    function A(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) { return m(n) ? k.grep(e, function(e, t) { return !!n.call(e, t, e) !== r }) : n.nodeType ? k.grep(e, function(e) { return e === n !== r }) : "string" != typeof n ? k.grep(e, function(e) { return -1 < i.call(n, e) !== r }) : k.filter(n, e, r) }
    k.filter = function(e, t, n) { var r = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) { return 1 === e.nodeType })) }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return 1 < r ? k.uniqueSort(n) : n
        },
        filter: function(e) { return this.pushStack(j(this, e || [], !1)) },
        not: function(e) { return this.pushStack(j(this, e || [], !0)) },
        is: function(e) { return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }).prototype = k.fn, q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };

    function P(e, t) { while ((e = e[t]) && 1 !== e.nodeType); return e }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) { return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(e, t) { return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t)))) },
        addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
    }), k.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return T(e, "parentNode") }, parentsUntil: function(e, t, n) { return T(e, "parentNode", n) }, next: function(e) { return P(e, "nextSibling") }, prev: function(e) { return P(e, "previousSibling") }, nextAll: function(e) { return T(e, "nextSibling") }, prevAll: function(e) { return T(e, "previousSibling") }, nextUntil: function(e, t, n) { return T(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return T(e, "previousSibling", n) }, siblings: function(e) { return S((e.parentNode || {}).firstChild, e) }, children: function(e) { return S(e.firstChild) }, contents: function(e) { return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes)) } }, function(r, i) { k.fn[r] = function(e, t) { var n = k.map(this, i, e); return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n) } });
    var R = /[^\x20\t\r\n\f]+/g;

    function M(e) { return e }

    function I(e) { throw e }

    function W(e, t, n, r) { var i; try { e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r)) } catch (e) { n.apply(void 0, [e]) } }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function(e, t) { n[t] = !0 }), n) : k.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) { t = u.shift(); while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1) }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = { add: function() { return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) { k.each(e, function(e, t) { m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t) }) }(arguments), t && !i && c()), this }, remove: function() { return k.each(arguments, function(e, t) { var n; while (-1 < (n = k.inArray(t, s, n))) s.splice(n, 1), n <= l && l-- }), this }, has: function(e) { return e ? -1 < k.inArray(e, s) : 0 < s.length }, empty: function() { return s && (s = []), this }, disable: function() { return a = u = [], s = t = "", this }, disabled: function() { return !s }, lock: function() { return a = u = [], t || i || (s = t = ""), this }, locked: function() { return !!a }, fireWith: function(e, t) { return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!o } };
        return f
    }, k.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                    ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() { return i },
                    always: function() { return s.done(arguments).fail(arguments), this },
                    "catch": function(e) { return a.then(null, e) },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() { try { e() } catch (e) { k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r)) } };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) { o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I)) }).promise()
                    },
                    promise: function(e) { return null != e ? k.extend(e, a) : a }
                },
                s = {};
            return k.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() { i = r }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() { return s[t[0] + "With"](this === s ? void 0 : this, arguments), this }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = k.Deferred(),
                a = function(t) { return function(e) { r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i) } };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) W(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) { C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t) }, k.readyException = function(e) { C.setTimeout(function() { throw e }) };
    var F = k.Deferred();

    function B() { E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready() }
    k.fn.ready = function(e) { return F.then(e)["catch"](function(e) { k.readyException(e) }), this }, k.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
        }
    }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) _(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) { return l.call(k(e), n) })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        z = /^-ms-/,
        U = /-([a-z])/g;

    function X(e, t) { return t.toUpperCase() }

    function V(e) { return e.replace(z, "ms-").replace(U, X) }
    var G = function(e) { return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType };

    function Y() { this.expando = k.expando + Y.uid++ }
    Y.uid = 1, Y.prototype = {
        cache: function(e) { var t = e[this.expando]; return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else
                for (r in t) i[V(r)] = t[r];
            return i
        },
        get: function(e, t) { return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)] },
        access: function(e, t, n) { return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t) },
        remove: function(e, t) { var n, r = e[this.expando]; if (void 0 !== r) { if (void 0 !== t) { n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length; while (n--) delete r[t[n]] }(void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]) } },
        hasData: function(e) { var t = e[this.expando]; return void 0 !== t && !k.isEmptyObject(t) }
    };
    var Q = new Y,
        J = new Y,
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;

    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try { n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i) } catch (e) {}
                J.set(e, t, n)
            } else n = void 0;
        return n
    }
    k.extend({ hasData: function(e) { return J.hasData(e) || Q.hasData(e) }, data: function(e, t, n) { return J.access(e, t, n) }, removeData: function(e, t) { J.remove(e, t) }, _data: function(e, t, n) { return Q.access(e, t, n) }, _removeData: function(e, t) { Q.remove(e, t) } }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
                    Q.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() { J.set(this, n) }) : _(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                this.each(function() { J.set(this, n, e) })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) { return this.each(function() { J.remove(this, e) }) }
    }), k.extend({
        queue: function(e, t, n) { var r; if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [] },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = k._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() { k.dequeue(e, t) }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) { var n = t + "queueHooks"; return Q.get(e, n) || Q.access(e, n, { empty: k.Callbacks("once memory").add(function() { Q.remove(e, [t + "queue", n]) }) }) }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) { return this.each(function() { k.dequeue(this, e) }) },
        clearQueue: function(e) { return this.queue(e || "fx", []) },
        promise: function(e, t) {
            var n, r = 1,
                i = k.Deferred(),
                o = this,
                a = this.length,
                s = function() {--r || i.resolveWith(o, [o]) };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ie = E.documentElement,
        oe = function(e) { return k.contains(e.ownerDocument, e) },
        ae = { composed: !0 };
    ie.getRootNode && (oe = function(e) { return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument });
    var se = function(e, t) { return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display") },
        ue = function(e, t, n, r) { var i, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in i = n.apply(e, r || []), t) e.style[o] = a[o]; return i };

    function le(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() { return r.cur() } : function() { return k.css(e, t, "") },
            u = s(),
            l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ce = {};

    function fe(e, t) { for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n))); for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]); return e }
    k.fn.extend({ show: function() { return fe(this, !0) }, hide: function() { return fe(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { se(this) ? k(this).show() : k(this).hide() }) } });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };

    function ve(e, t) { var n; return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n }

    function ye(e, t) { for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval")) }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;

    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r)) i && i.push(o);
            else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) { c = 0; while (o = a[c++]) he.test(o.type || "") && n.push(o) }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;

    function ke() { return !0 }

    function Se() { return !1 }

    function Ne(e, t) { return e === function() { try { return E.activeElement } catch (e) {} }() == ("focus" === t) }

    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) { for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ae(e, s, n, r, t[s], o); return e }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) { return k().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = k.guid++)), e.each(function() { k.event.add(this, t, i, r, n) })
    }

    function De(e, i, o) {
        o ? (Q.set(e, i, !1), k.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Q.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(k.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Q.set(this, i, { value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation())
            }
        })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) { var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t); if (v) { n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function(e) { return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0 }), l = (e = (e || "").match(R) || [""]).length; while (l--) d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && k.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0) } },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e),
                u = new Array(arguments.length),
                l = (Q.get(this, "events") || {})[s.type] || [],
                c = k.event.special[s.type] || {};
            for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) { a = k.event.handlers.call(this, s, l), t = 0; while ((i = a[t++]) && !s.isPropagationStopped()) { s.currentTarget = i.elem, n = 0; while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation())) } return c.postDispatch && c.postDispatch.call(this, s), s.result }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o })
                    }
            return l = this, u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
        },
        addProp: function(t, e) { Object.defineProperty(k.Event.prototype, t, { enumerable: !0, configurable: !0, get: m(e) ? function() { if (this.originalEvent) return e(this.originalEvent) } : function() { if (this.originalEvent) return this.originalEvent[t] }, set: function(e) { Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) } }) },
        fix: function(e) { return e[k.expando] ? e : new k.Event(e) },
        special: { load: { noBubble: !0 }, click: { setup: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1 }, trigger: function(e) { var t = this || e; return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0 }, _default: function(e) { var t = e.target; return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }
    }, k.removeEvent = function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n) }, k.Event = function(e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, code: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function(e) { var t = e.button; return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which } }, k.event.addProp), k.each({ focus: "focusin", blur: "focusout" }, function(e, t) { k.event.special[e] = { setup: function() { return De(this, e, Ne), !1 }, trigger: function() { return De(this, e), !0 }, delegateType: t } }), k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, i) {
        k.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), k.fn.extend({ on: function(e, t, n, r) { return Ae(this, e, t, n, r) }, one: function(e, t, n, r) { return Ae(this, e, t, n, r, 1) }, off: function(e, t, n) { var r, i; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (i in e) this.off(i, t, e[i]); return this } return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() { k.event.remove(this, e, n, t) }) } });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) { return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e }

    function Pe(e) { return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e }

    function Re(e) { return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e }

    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events))
                for (i in delete a.handle, a.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u))
        }
    }

    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o)
        });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }

    function We(e, t, n) { for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r)); return e }
    k.extend({
        htmlPrefilter: function(e) { return e.replace(je, "<$1></$2>") },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Me(o[r], a[r]);
                else Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }), k.fn.extend({
        detach: function(e) { return We(this, e, !0) },
        remove: function(e) { return We(this, e) },
        text: function(e) { return _(this, function(e) { return void 0 === e ? k.text(this) : this.empty().each(function() { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e) }) }, null, e, arguments.length) },
        append: function() { return Ie(this, arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e) }) },
        prepend: function() {
            return Ie(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Oe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() { return Ie(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) },
        after: function() { return Ie(this, arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) },
        empty: function() { for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = ""); return this },
        clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return k.clone(this, e, t) }) },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Ie(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { k.fn[e] = function(e) { for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get()); return this.pushStack(n) } });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function(e) { var t = e.ownerDocument.defaultView; return t && t.opener || (t = C), t.getComputedStyle(e) },
        Be = new RegExp(re.join("|"), "i");

    function _e(e, t, n) { var r, i, o, a, s = e.style; return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }

    function ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null
            }
        }

        function t(e) { return Math.round(parseFloat(e)) }
        var n, r, i, o, a, s = E.createElement("div"),
            u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, { boxSizingReliable: function() { return e(), r }, pixelBoxStyles: function() { return e(), o }, pixelPosition: function() { return e(), n }, reliableMarginLeft: function() { return e(), a }, scrollboxSize: function() { return e(), i } }))
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        Xe = E.createElement("div").style,
        Ve = {};

    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t) in Xe) return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Qe = /^--/,
        Je = { position: "absolute", visibility: "hidden", display: "block" },
        Ke = { letterSpacing: "0", fontWeight: "400" };

    function Ze(e, t, n) { var r = ne.exec(t); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t }

    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function tt(e, t, n) {
        var r = Fe(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
            o = i,
            a = _e(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function nt(e, t, n, r, i) { return new nt.prototype.init(e, t, n, r, i) }
    k.extend({
        cssHooks: { opacity: { get: function(e, t) { if (t) { var n = _e(e, "opacity"); return "" === n ? "1" : n } } } },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, gridArea: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnStart: !0, gridRow: !0, gridRowEnd: !0, gridRowStart: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t),
                    u = Qe.test(t),
                    l = e.style;
                if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) { var i, o, a, s = V(t); return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
    }), k.each(["height", "width"], function(e, u) {
        k.cssHooks[u] = {
            get: function(e, t, n) { if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() { return tt(e, u, n) }) },
            set: function(e, t, n) {
                var r, i = Fe(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
                    s = n ? et(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s)
            }
        }
    }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) { if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, { marginLeft: 0 }, function() { return e.getBoundingClientRect().left })) + "px" }), k.each({ margin: "", padding: "", border: "Width" }, function(i, o) { k.cssHooks[i + o] = { expand: function(e) { for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + re[t] + o] = r[t] || r[t - 2] || r[0]; return n } }, "margin" !== i && (k.cssHooks[i + o].set = Ze) }), k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) { for (r = Fe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r); return o }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((k.Tween = nt).prototype = { constructor: nt, init: function(e, t, n, r, i, o) { this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px") }, cur: function() { var e = nt.propHooks[this.prop]; return e && e.get ? e.get(this) : nt.propHooks._default.get(this) }, run: function(e) { var t, n = nt.propHooks[this.prop]; return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this } }).init.prototype = nt.prototype, (nt.propHooks = { _default: { get: function(e) { var t; return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 }, set: function(e) { k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit) } } }).scrollTop = nt.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, k.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 }, _default: "swing" }, k.fx = nt.prototype.init, k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;

    function lt() { it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick()) }

    function ct() { return C.setTimeout(function() { rt = void 0 }), rt = Date.now() }

    function ft(e, t) {
        var n, r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function dt(o, e, t) {
        var n, a, r = 0,
            i = dt.prefilters.length,
            s = k.Deferred().always(function() { delete u.elem }),
            u = function() { if (a) return !1; for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n); return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1) },
            l = s.promise({
                elem: o,
                props: k.extend({}, e),
                opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: rt || ct(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) { var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(n), n },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l
    }
    k.Animation = k.extend(dt, {
        tweeners: { "*": [function(e, t) { var n = this.createTween(e, t); return le(n.elem, e, ne.exec(t), n), n }] },
        tweener: function(e, t) { m(e) ? (t = e, e = ["*"]) : e = e.match(R); for (var n, r = 0, i = e.length; r < i; r++) n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t) },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && se(e),
                v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() { a.unqueued || s() }), a.unqueued++, p.always(function() { p.always(function() { a.unqueued--, k.queue(e, "fx").length || a.empty.fire() }) })), t)
                if (i = t[r], st.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() { h.display = l }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() { h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2] })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", { display: l }), o && (v.hidden = !g), g && fe([e], !0), p.done(function() { for (r in g || fe([e]), Q.remove(e, "fxshow"), d) k.style(e, r, d[r]) })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) { t ? dt.prefilters.unshift(e) : dt.prefilters.push(e) }
    }), k.speed = function(e, t, n) { var r = e && "object" == typeof e ? k.extend({}, e) : { complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t }; return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() { m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue) }, r }, k.fn.extend({
        fadeTo: function(e, t, n, r) { return this.filter(se).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r) },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t),
                o = k.speed(e, n, r),
                a = function() {
                    var e = dt(this, k.extend({}, t), o);
                    (i || Q.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = k.timers,
                    r = Q.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && ut.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Q.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = k.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) { return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n) }
    }), k.each({ slideDown: ft("show"), slideUp: ft("hide"), slideToggle: ft("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, r) { k.fn[e] = function(e, t, n) { return this.animate(r, e, t, n) } }), k.timers = [], k.fx.tick = function() {
        var e, t = 0,
            n = k.timers;
        for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), rt = void 0
    }, k.fx.timer = function(e) { k.timers.push(e), k.fx.start() }, k.fx.interval = 13, k.fx.start = function() { it || (it = !0, lt()) }, k.fx.stop = function() { it = null }, k.fx.speeds = { slow: 600, fast: 200, _default: 400 }, k.fn.delay = function(r, e) {
        return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() { C.clearTimeout(n) }
        })
    }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({ attr: function(e, t) { return _(this, k.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { k.removeAttr(this, e) }) } }), k.extend({
        attr: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r) },
        attrHooks: { type: { set: function(e, t) { if (!y.radioValue && "radio" === t && A(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(R);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ht = { set: function(e, t, n) { return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n } }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = gt[t] || k.find.attr;
        gt[t] = function(e, t, n) { var r, i, o = t.toLowerCase(); return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r }
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;

    function mt(e) { return (e.match(R) || []).join(" ") }

    function xt(e) { return e.getAttribute && e.getAttribute("class") || "" }

    function bt(e) { return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [] }
    k.fn.extend({ prop: function(e, t) { return _(this, k.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return this.each(function() { delete this[k.propFix[e] || e] }) } }), k.extend({ prop: function(e, t, n) { var r, i, o = e.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = k.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), y.optSelected || (k.propHooks.selected = {
        get: function(e) { var t = e.parentNode; return t && t.parentNode && t.parentNode.selectedIndex, null },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { k.propFix[this.toLowerCase()] = this }), k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { k(this).addClass(t.call(this, e, xt(this))) });
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) { k(this).removeClass(t.call(this, e, xt(this))) });
            if (!arguments.length) return this.attr("class", "");
            if ((e = bt(t)).length)
                while (n = this[u++])
                    if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = mt(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) { k(this).toggleClass(i.call(this, e, xt(this), t), t) }) : this.each(function() { var e, t, n, r; if (a) { t = 0, n = k(this), r = bt(i); while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e) } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || "")) })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) { return null == e ? "" : e + "" })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }), k.extend({
        valHooks: {
            option: { get: function(e) { var t = k.find.attr(e, "value"); return null != t ? t : mt(k.text(e)) } },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = k.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function() { k.valHooks[this] = { set: function(e, t) { if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t) } }, y.checkOn || (k.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }), y.focusin = "onfocusin" in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function(e) { e.stopPropagation() };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, { type: e, isSimulated: !0 });
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({ trigger: function(e, t) { return this.each(function() { k.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; if (n) return k.event.trigger(e, t, n, !0) } }), y.focusin || k.each({ focus: "focusin", blur: "focusout" }, function(n, r) {
        var i = function(e) { k.event.simulate(r, e.target, k.event.fix(e)) };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r);
                t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r))
            }
        }
    });
    var Et = C.location,
        kt = Date.now(),
        St = /\?/;
    k.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { t = (new C.DOMParser).parseFromString(e, "text/xml") } catch (e) { t = void 0 } return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t };
    var Nt = /\[\]$/,
        At = /\r?\n/g,
        Dt = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;

    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function(e, t) { r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i) });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() { i(this.name, this.value) });
        else
            for (n in e) qt(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({ serialize: function() { return k.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = k.prop(this, "elements"); return e ? k.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e)) }).map(function(e, t) { var n = k(this).val(); return null == n ? null : Array.isArray(n) ? k.map(n, function(e) { return { name: t.name, value: e.replace(At, "\r\n") } }) : { name: t.name, value: n.replace(At, "\r\n") } }).get() } });
    var Lt = /%20/g,
        Ht = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Ft = E.createElement("a");

    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function _t(t, i, o, a) {
        var s = {},
            u = t === Wt;

        function l(e) { var r; return s[e] = !0, k.each(t[e] || [], function(e, t) { var n = t(i, o, a); return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1) }), r }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function zt(e, t) { var n, r, i = k.ajaxSettings.flatOptions || {}; for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]); return r && k.extend(!0, e, r), e }
    Ft.href = Et.href, k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(e, t) { return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e) },
        ajaxPrefilter: Bt(It),
        ajaxTransport: Bt(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
                x = k.Deferred(),
                b = k.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) { n = {}; while (t = Pt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]) }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() { return h ? p : null },
                    setRequestHeader: function(e, t) { return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this },
                    overrideMimeType: function(e) { return null == h && (v.mimeType = e), this },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) { var t = e || u; return c && c.abort(t), l(0, t), this }
                };
            if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) { r = E.createElement("a"); try { r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host } catch (e) { v.crossDomain = !0 } }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;
            for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() { T.abort("timeout") }, v.timeout));
                try { h = !1, c.send(a, l) } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) { u.unshift(i); break }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) { o = i; break }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {!0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o } }
                    }
                    return { state: "success", data: t }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) { return k.get(e, t, n, "json") },
        getScript: function(e, t) { return k.get(e, void 0, t, "script") }
    }), k.each(["get", "post"], function(e, i) { k[i] = function(e, t, n, r) { return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({ url: e, type: i, dataType: r, data: t, success: n }, k.isPlainObject(e) && e)) } }), k._evalUrl = function(e, t) { return k.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, converters: { "text script": function() {} }, dataFilter: function(e) { k.globalEval(e, t) } }) }, k.fn.extend({
        wrapAll: function(e) { var t; return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() { var e = this; while (e.firstElementChild) e = e.firstElementChild; return e }).append(this)), this },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) { k(this).wrapInner(n.call(this, e)) }) : this.each(function() {
                var e = k(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) { var n = m(t); return this.each(function(e) { k(this).wrapAll(n ? t.call(this, e) : t) }) },
        unwrap: function(e) { return this.parent(e).not("body").each(function() { k(this).replaceWith(this.childNodes) }), this }
    }), k.expr.pseudos.hidden = function(e) { return !k.expr.pseudos.visible(e) }, k.expr.pseudos.visible = function(e) { return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length) }, k.ajaxSettings.xhr = function() { try { return new C.XMLHttpRequest } catch (e) {} };
    var Ut = { 0: 200, 1223: 204 },
        Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || Xt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) { return function() { o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders())) } }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() { 4 === r.readyState && C.setTimeout(function() { o && a() }) }, o = o("abort");
                try { r.send(i.hasContent && i.data || null) } catch (e) { if (o) throw e }
            },
            abort: function() { o && o() }
        }
    }), k.ajaxPrefilter(function(e) { e.crossDomain && (e.contents.script = !1) }), k.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e) { return k.globalEval(e), e } } }), k.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET") }), k.ajaxTransport("script", function(n) { var r, i; if (n.crossDomain || n.scriptAttrs) return { send: function(e, t) { r = k("<script>").attr(n.scriptAttrs || {}).prop({ charset: n.scriptCharset, src: n.url }).on("load error", i = function(e) { r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type) }), E.head.appendChild(r[0]) }, abort: function() { i && i() } } });
    var Vt, Gt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Gt.pop() || k.expando + "_" + kt++; return this[e] = !0, e } }), k.ajaxPrefilter("json jsonp", function(e, t, n) { var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data"); if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() { return o || k.error(r + " was not called"), o[0] }, e.dataTypes[0] = "json", i = C[r], C[r] = function() { o = arguments }, n.always(function() { void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0 }), "script" }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function(e, t, n) { return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes))); var r, i, o }, k.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && k.ajax({ url: e, type: i || "GET", dataType: "html", data: t }).done(function(e) { o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e) }).always(n && function(e, t) { a.each(function() { n.apply(this, o || [e.responseText, t, e]) }) }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { k.fn[t] = function(e) { return this.on(t, e) } }), k.expr.pseudos.animated = function(t) { return k.grep(k.timers, function(e) { return t === e.elem }).length }, k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = k.css(e, "position"),
                c = k(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, k.fn.extend({
        offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { k.offset.setOffset(this, t, e) }); var e, n, r = this[0]; return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0 },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = { top: 0, left: 0 };
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return { top: t.top - i.top - k.css(r, "marginTop", !0), left: t.left - i.left - k.css(r, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var e = this.offsetParent; while (e && "static" === k.css(e, "position")) e = e.offsetParent; return e || ie }) }
    }), k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function(e, n) { k.cssHooks[n] = ze(y.pixelPosition, function(e, t) { if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t }) }), k.each({ Height: "height", Width: "width" }, function(a, s) {
        k.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return _(this, function(e, t, n) { var r; return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i) }, s, n ? e : void 0, n)
            }
        })
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) { k.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }), k.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) } }), k.fn.extend({ bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, r) { return this.on(t, e, n, r) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }), k.proxy = function(e, t) { var n, r, i; if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() { return e.apply(t || this, r.concat(s.call(arguments))) }).guid = e.guid = e.guid || k.guid++, i }, k.holdReady = function(e) { e ? k.readyWait++ : k.ready(!0) }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function(e) { var t = k.type(e); return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e)) }, "function" == typeof define && define.amd && define("jquery", [], function() { return k });
    var Qt = C.jQuery,
        Jt = C.$;
    return k.noConflict = function(e) { return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k }, e || (C.jQuery = C.$ = k), k
});


/* jquery-validate */
/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018
 * https://jqueryvalidation.org/
 * Copyright (c) 2018 JÃ¶rn Zaefferer; Licensed MIT */
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery) }(function(a) {
    a.extend(a.fn, {
        validate: function(b) {
            if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) { c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0) }), this.on("submit.validate", function(b) {
                function d() { var d, e; return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !(c.settings.submitHandler && !c.settings.debug) || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e) }
                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function() { var b, c, d; return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() { b = c.element(this) && b, b || (d = d.concat(c.errorList)) }), c.errorList = d), b },
        rules: function(b, c) {
            var d, e, f, g, h, i, j = this[0],
                k = "undefined" != typeof this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != j && (!j.form && k && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function(a, b) { i[b] = f[b], delete f[b] }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({ required: h }, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, { remote: h })), g
            }
        }
    }), a.extend(a.expr.pseudos || a.expr[":"], { blank: function(b) { return !a.trim("" + a(b).val()) }, filled: function(b) { var c = a(b).val(); return null !== c && !!a.trim("" + c) }, unchecked: function(b) { return !a(b).prop("checked") } }), a.validator = function(b, c) { this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init() }, a.validator.format = function(b, c) { return 1 === arguments.length ? function() { var c = a.makeArray(arguments); return c.unshift(b), a.validator.format.apply(this, c) } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) { b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() { return c }) }), b) }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) { this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a))) },
            onfocusout: function(a) { this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a) },
            onkeyup: function(b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function(a) { a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode) },
            highlight: function(b, c, d) { "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d) },
            unhighlight: function(b, c, d) { "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d) }
        },
        setDefaults: function(b) { a.extend(a.validator.defaults, b) },
        messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", number: "Please enter a valid number.", digits: "Please enter only digits.", equalTo: "Please enter the same value again.", maxlength: a.validator.format("Please enter no more than {0} characters."), minlength: a.validator.format("Please enter at least {0} characters."), rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."), range: a.validator.format("Please enter a value between {0} and {1}."), max: a.validator.format("Please enter a value less than or equal to {0}."), min: a.validator.format("Please enter a value greater than or equal to {0}."), step: a.validator.format("Please enter a multiple of {0}.") },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function b(b) {
                    var c = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    if (!this.form && c && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name")), d === this.form) {
                        var e = a.data(this.form, "validator"),
                            f = "on" + b.type.replace(/^validate/, ""),
                            g = e.settings;
                        g[f] && !a(this).is(g.ignore) && g[f].call(e, this, b)
                    }
                }
                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.currentForm,
                    e = this.groups = {};
                a.each(this.settings.groups, function(b, c) { "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) { e[c] = b }) }), c = this.settings.rules, a.each(c, function(b, d) { c[b] = a.validator.normalizeRule(d) }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() { return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() },
            checkForm: function() { this.prepareForm(); for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]); return this.valid() },
            element: function(b) {
                var c, d, e = this.clean(b),
                    f = this.validationTargetFor(e),
                    g = this,
                    h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function(a, b) { b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h)) }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
            },
            showErrors: function(b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function(a, b) { return { message: a, element: c.findByName(b)[0] } }), this.successList = a.grep(this.successList, function(a) { return !(a.name in b) })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            },
            resetElements: function(a) {
                var b;
                if (this.settings.unhighlight)
                    for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
                else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() { return this.objectLength(this.invalid) },
            objectLength: function(a) { var b, c = 0; for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++; return c },
            hideErrors: function() { this.hideThese(this.toHide) },
            hideThese: function(a) { a.not(this.containers).text(""), this.addWrapper(a).hide() },
            valid: function() { return 0 === this.size() },
            size: function() { return this.errorList.length },
            focusInvalid: function() { if (this.settings.focusInvalid) try { a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (b) {} },
            findLastActive: function() { var b = this.lastActive; return b && 1 === a.grep(this.errorList, function(a) { return a.element.name === b.name }).length && b },
            elements: function() {
                var b = this,
                    c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var d = this.name || a(this).attr("name"),
                        e = "undefined" != typeof a(this).attr("contenteditable") && "false" !== a(this).attr("contenteditable");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), e && (this.form = a(this).closest("form")[0], this.name = d), this.form === b.currentForm && (!(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0))
                })
            },
            clean: function(b) { return a(b)[0] },
            errors: function() { var b = this.settings.errorClass.split(" ").join("."); return a(this.settings.errorElement + "." + b, this.errorContext) },
            resetInternals: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]) },
            reset: function() { this.resetInternals(), this.currentElements = a([]) },
            prepareForm: function() { this.reset(), this.toHide = this.errors().add(this.containers) },
            prepareElement: function(a) { this.reset(), this.toHide = this.errorsFor(a) },
            elementValue: function(b) {
                var c, d, e = a(b),
                    f = b.type,
                    g = "undefined" != typeof e.attr("contenteditable") && "false" !== e.attr("contenteditable");
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = g ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f, g = a(b).rules(),
                    h = a.map(g, function(a, b) { return b }).length,
                    i = !1,
                    j = this.elementValue(b);
                "function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f && (j = f.call(b, j), delete g.normalizer);
                for (d in g) { e = { method: d, parameters: g[d] }; try { if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) { i = !0; continue } if (i = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b))); if (!c) return this.formatAndAdd(b, e), !1 } catch (k) { throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k } }
                if (!i) return this.objectLength(g) && this.successList.push(b), !0
            },
            customDataMessage: function(b, c) { return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg") },
            customMessage: function(a, b) { var c = this.settings.messages[a]; return c && (c.constructor === String ? c : c[b]) },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function(b, c) {
                "string" == typeof c && (c = { method: c });
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                    e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
            },
            formatAndAdd: function(a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({ message: c, element: a, method: b.method }), this.errorMap[a.name] = c, this.submitted[a.name] = c
            },
            addWrapper: function(a) { return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a },
            defaultShowErrors: function() {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() { return this.currentElements.not(this.invalidElements()) },
            invalidElements: function() { return a(this.errorList).map(function() { return this.element }) },
            showLabel: function(b, c) {
                var d, e, f, g, h = this.errorsFor(b),
                    i = this.idOrName(b),
                    j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function(b, c) { c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id")) })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
            },
            errorsFor: function(b) {
                var c = this.escapeCssMeta(this.idOrName(b)),
                    d = a(b).attr("aria-describedby"),
                    e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
            },
            escapeCssMeta: function(a) { return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1") },
            idOrName: function(a) { return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name) },
            validationTargetFor: function(b) { return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0] },
            checkable: function(a) { return /radio|checkbox/i.test(a.type) },
            findByName: function(b) { return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']") },
            getLength: function(b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return a("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            },
            depend: function(a, b) { return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b) },
            dependTypes: { "boolean": function(a) { return a }, string: function(b, c) { return !!a(b, c.form).length }, "function": function(a, b) { return a(b) } },
            optional: function(b) { var c = this.elementValue(b); return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch" },
            startRequest: function(b) { this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0) },
            stopRequest: function(b, c) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) },
            previousValue: function(b, c) { return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", { old: null, valid: !0, message: this.defaultMessage(b, { method: c }) }) },
            destroy: function() { this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur") }
        },
        classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
        addClassRules: function(b, c) { b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b) },
        classRules: function(b) {
            var c = {},
                d = a(b).attr("class");
            return d && a.each(d.split(" "), function() { this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]) }), c
        },
        normalizeAttributeRule: function(a, b, c, d) { /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0) },
        attributeRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function(b) {
            var c, d, e = {},
                f = a(b),
                g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), "" === d && (d = !0), this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function(b) {
            var c = {},
                d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function(b, c) {
            return a.each(b, function(d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case "string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case "function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
                }
            }), a.each(b, function(d, e) { b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e }), a.each(["minlength", "maxlength"], function() { b[this] && (b[this] = Number(b[this])) }), a.each(["rangelength", "range"], function() {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function(b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function() { c[this] = !0 }), b = c
            }
            return b
        },
        addMethod: function(b, c, d) { a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b)) },
        methods: {
            required: function(b, c, d) { if (!this.depend(d, c)) return "dependency-mismatch"; if ("select" === c.nodeName.toLowerCase()) { var e = a(c).val(); return e && e.length > 0 } return this.checkable(c) ? this.getLength(b, c) > 0 : void 0 !== b && null !== b && b.length > 0 },
            email: function(a, b) { return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a) },
            url: function(a, b) { return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a) },
            date: function() { var a = !1; return function(b, c) { return a || (a = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(c) || !/Invalid|NaN/.test(new Date(b).toString()) } }(),
            dateISO: function(a, b) { return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a) },
            number: function(a, b) { return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a) },
            digits: function(a, b) { return this.optional(b) || /^\d+$/.test(a) },
            minlength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || e >= d },
            maxlength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || e <= d },
            rangelength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || e >= d[0] && e <= d[1] },
            min: function(a, b, c) { return this.optional(b) || a >= c },
            max: function(a, b, c) { return this.optional(b) || a <= c },
            range: function(a, b, c) { return this.optional(b) || a >= c[0] && a <= c[1] },
            step: function(b, c, d) {
                var e, f = a(c).attr("type"),
                    g = "Step attribute on input type " + f + " is not supported.",
                    h = ["text", "number", "range"],
                    i = new RegExp("\\b" + f + "\\b"),
                    j = f && !i.test(h.join()),
                    k = function(a) { var b = ("" + a).match(/(?:\.(\d+))?$/); return b && b[1] ? b[1].length : 0 },
                    l = function(a) { return Math.round(a * Math.pow(10, e)) },
                    m = !0;
                if (j) throw new Error(g);
                return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
            },
            equalTo: function(b, c, d) { var e = a(d); return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() { a(c).valid() }), b === e.val() },
            remote: function(b, c, d, e) {
                if (this.optional(c)) return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && { url: d } || d, h = a.param(a.extend({ data: b }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function(a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, { method: e, parameters: b }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    });
    var b, c = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) { var e = a.port; "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d) }) : (b = a.ajax, a.ajax = function(d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode,
            f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    }), a
});

/* jquery easy autocomplete */

/*
 * easy-autocomplete
 * jQuery plugin for autocompletion
 * 
 * @author Åukasz PaweÅ‚czak (http://github.com/pawelczak)
 * @version 1.3.5
 * Copyright  License: 
 */

var EasyAutocomplete = function(a) {
        return a.Configuration = function(a) {
            function b() {
                if ("xml" === a.dataType && (a.getValue || (a.getValue = function(a) { return $(a).text() }), a.list || (a.list = {}), a.list.sort || (a.list.sort = {}), a.list.sort.method = function(b, c) { return b = a.getValue(b), c = a.getValue(c), c > b ? -1 : b > c ? 1 : 0 }, a.list.match || (a.list.match = {}), a.list.match.method = function(a, b) { return a.search(b) > -1 }), void 0 !== a.categories && a.categories instanceof Array) {
                    for (var b = [], c = 0, d = a.categories.length; d > c; c += 1) {
                        var e = a.categories[c];
                        for (var f in h.categories[0]) void 0 === e[f] && (e[f] = h.categories[0][f]);
                        b.push(e)
                    }
                    a.categories = b
                }
            }

            function c() {
                function b(a, c) { var d = a || {}; for (var e in a) void 0 !== c[e] && null !== c[e] && ("object" != typeof c[e] || c[e] instanceof Array ? d[e] = c[e] : b(a[e], c[e])); return void 0 !== c.data && null !== c.data && "object" == typeof c.data && (d.data = c.data), d }
                h = b(h, a)
            }

            function d() {
                if ("list-required" !== h.url && "function" != typeof h.url) {
                    var b = h.url;
                    h.url = function() { return b }
                }
                if (void 0 !== h.ajaxSettings.url && "function" != typeof h.ajaxSettings.url) {
                    var b = h.ajaxSettings.url;
                    h.ajaxSettings.url = function() { return b }
                }
                if ("string" == typeof h.listLocation) { var c = h.listLocation; "XML" === h.dataType.toUpperCase() ? h.listLocation = function(a) { return $(a).find(c) } : h.listLocation = function(a) { return a[c] } }
                if ("string" == typeof h.getValue) {
                    var d = h.getValue;
                    h.getValue = function(a) { return a[d] }
                }
                void 0 !== a.categories && (h.categoriesAssigned = !0)
            }

            function e() { void 0 !== a.ajaxSettings && "object" == typeof a.ajaxSettings ? h.ajaxSettings = a.ajaxSettings : h.ajaxSettings = {} }

            function f(a) { return void 0 !== h[a] && null !== h[a] }

            function g(a, b) {
                function c(b, d) { for (var e in d) void 0 === b[e] && a.log("Property '" + e + "' does not exist in EasyAutocomplete options API."), "object" == typeof b[e] && -1 === $.inArray(e, i) && c(b[e], d[e]) }
                c(h, b)
            }
            var h = { data: "list-required", url: "list-required", dataType: "json", listLocation: function(a) { return a }, xmlElementName: "", getValue: function(a) { return a }, autocompleteOff: !0, placeholder: !1, ajaxCallback: function() {}, matchResponseProperty: !1, list: { sort: { enabled: !1, method: function(a, b) { return a = h.getValue(a), b = h.getValue(b), b > a ? -1 : a > b ? 1 : 0 } }, maxNumberOfElements: 6, hideOnEmptyPhrase: !0, match: { enabled: !1, caseSensitive: !1, method: function(a, b) { return a.search(b) > -1 } }, showAnimation: { type: "normal", time: 400, callback: function() {} }, hideAnimation: { type: "normal", time: 400, callback: function() {} }, onClickEvent: function() {}, onSelectItemEvent: function() {}, onLoadEvent: function() {}, onChooseEvent: function() {}, onKeyEnterEvent: function() {}, onMouseOverEvent: function() {}, onMouseOutEvent: function() {}, onShowListEvent: function() {}, onHideListEvent: function() {} }, highlightPhrase: !0, theme: "", cssClasses: "", minCharNumber: 0, requestDelay: 0, adjustWidth: !0, ajaxSettings: {}, preparePostData: function(a, b) { return a }, loggerEnabled: !0, template: "", categoriesAssigned: !1, categories: [{ maxNumberOfElements: 4 }] },
                i = ["ajaxSettings", "template"];
            this.get = function(a) { return h[a] }, this.equals = function(a, b) { return !(!f(a) || h[a] !== b) }, this.checkDataUrlProperties = function() { return "list-required" !== h.url || "list-required" !== h.data }, this.checkRequiredProperties = function() {
                for (var a in h)
                    if ("required" === h[a]) return logger.error("Option " + a + " must be defined"), !1;
                return !0
            }, this.printPropertiesThatDoesntExist = function(a, b) { g(a, b) }, b(), c(), h.loggerEnabled === !0 && g(console, a), e(), d()
        }, a
    }(EasyAutocomplete || {}),
    EasyAutocomplete = function(a) { return a.Logger = function() { this.error = function(a) { console.log("ERROR: " + a) }, this.warning = function(a) { console.log("WARNING: " + a) } }, a }(EasyAutocomplete || {}),
    EasyAutocomplete = function(a) {
        return a.Constans = function() {
            var a = { CONTAINER_CLASS: "easy-autocomplete-container", CONTAINER_ID: "eac-container-", WRAPPER_CSS_CLASS: "easy-autocomplete" };
            this.getValue = function(b) { return a[b] }
        }, a
    }(EasyAutocomplete || {}),
    EasyAutocomplete = function(a) {
        return a.ListBuilderService = function(a, b) {
            function c(b, c) {
                function d() { var d, e = {}; return void 0 !== b.xmlElementName && (e.xmlElementName = b.xmlElementName), void 0 !== b.listLocation ? d = b.listLocation : void 0 !== a.get("listLocation") && (d = a.get("listLocation")), void 0 !== d ? "string" == typeof d ? e.data = $(c).find(d) : "function" == typeof d && (e.data = d(c)) : e.data = c, e }

                function e() { var a = {}; return void 0 !== b.listLocation ? "string" == typeof b.listLocation ? a.data = c[b.listLocation] : "function" == typeof b.listLocation && (a.data = b.listLocation(c)) : a.data = c, a }
                var f = {};
                if (f = "XML" === a.get("dataType").toUpperCase() ? d() : e(), void 0 !== b.header && (f.header = b.header), void 0 !== b.maxNumberOfElements && (f.maxNumberOfElements = b.maxNumberOfElements), void 0 !== a.get("list").maxNumberOfElements && (f.maxListSize = a.get("list").maxNumberOfElements), void 0 !== b.getValue)
                    if ("string" == typeof b.getValue) {
                        var g = b.getValue;
                        f.getValue = function(a) { return a[g] }
                    } else "function" == typeof b.getValue && (f.getValue = b.getValue);
                else f.getValue = a.get("getValue");
                return f
            }

            function d(b) { var c = []; return void 0 === b.xmlElementName && (b.xmlElementName = a.get("xmlElementName")), $(b.data).find(b.xmlElementName).each(function() { c.push(this) }), c }
            this.init = function(b) {
                var c = [],
                    d = {};
                return d.data = a.get("listLocation")(b), d.getValue = a.get("getValue"), d.maxListSize = a.get("list").maxNumberOfElements, c.push(d), c
            }, this.updateCategories = function(b, d) {
                if (a.get("categoriesAssigned")) {
                    b = [];
                    for (var e = 0; e < a.get("categories").length; e += 1) {
                        var f = c(a.get("categories")[e], d);
                        b.push(f)
                    }
                }
                return b
            }, this.convertXml = function(b) {
                if ("XML" === a.get("dataType").toUpperCase())
                    for (var c = 0; c < b.length; c += 1) b[c].data = d(b[c]);
                return b
            }, this.processData = function(c, d) { for (var e = 0, f = c.length; f > e; e += 1) c[e].data = b(a, c[e], d); return c }, this.checkIfDataExists = function(a) {
                for (var b = 0, c = a.length; c > b; b += 1)
                    if (void 0 !== a[b].data && a[b].data instanceof Array && a[b].data.length > 0) return !0;
                return !1
            }
        }, a
    }(EasyAutocomplete || {}),
    EasyAutocomplete = function(a) {
        return a.proccess = function(b, c, d) {
            function e(a, c) {
                var d = [],
                    e = "";
                if (b.get("list").match.enabled)
                    for (var g = 0, h = a.length; h > g; g += 1) e = b.get("getValue")(a[g]), f(e, c) && d.push(a[g]);
                else d = a;
                return d
            }

            function f(a, c) { return b.get("list").match.caseSensitive || ("string" == typeof a && (a = a.toLowerCase()), c = c.toLowerCase()), !!b.get("list").match.method(a, c) }

            function g(a) { return void 0 !== c.maxNumberOfElements && a.length > c.maxNumberOfElements && (a = a.slice(0, c.maxNumberOfElements)), a }

            function h(a) { return b.get("list").sort.enabled && a.sort(b.get("list").sort.method), a }
            a.proccess.match = f;
            var i = c.data,
                j = d;
            return i = e(i, j), i = g(i), i = h(i)
        }, a
    }(EasyAutocomplete || {}),
    EasyAutocomplete = function(a) {
        return a.Template = function(a) {
            var b = { basic: { type: "basic", method: function(a) { return a }, cssClass: "" }, description: { type: "description", fields: { description: "description" }, method: function(a) { return a + " - description" }, cssClass: "eac-description" }, iconLeft: { type: "iconLeft", fields: { icon: "" }, method: function(a) { return a }, cssClass: "eac-icon-left" }, iconRight: { type: "iconRight", fields: { iconSrc: "" }, method: function(a) { return a }, cssClass: "eac-icon-right" }, links: { type: "links", fields: { link: "" }, method: function(a) { return a }, cssClass: "" }, custom: { type: "custom", method: function() {}, cssClass: "" } },
                c = function(a) { var c, d = a.fields; return "description" === a.type ? (c = b.description.method, "string" == typeof d.description ? c = function(a, b) { return a + " - <span>" + b[d.description] + "</span>" } : "function" == typeof d.description && (c = function(a, b) { return a + " - <span>" + d.description(b) + "</span>" }), c) : "iconRight" === a.type ? ("string" == typeof d.iconSrc ? c = function(a, b) { return a + "<img class='eac-icon' src='" + b[d.iconSrc] + "' />" } : "function" == typeof d.iconSrc && (c = function(a, b) { return a + "<img class='eac-icon' src='" + d.iconSrc(b) + "' />" }), c) : "iconLeft" === a.type ? ("string" == typeof d.iconSrc ? c = function(a, b) { return "<img class='eac-icon' src='" + b[d.iconSrc] + "' />" + a } : "function" == typeof d.iconSrc && (c = function(a, b) { return "<img class='eac-icon' src='" + d.iconSrc(b) + "' />" + a }), c) : "links" === a.type ? ("string" == typeof d.link ? c = function(a, b) { return "<a href='" + b[d.link] + "' >" + a + "</a>" } : "function" == typeof d.link && (c = function(a, b) { return "<a href='" + d.link(b) + "' >" + a + "</a>" }), c) : "custom" === a.type ? a.method : b.basic.method },
                d = function(a) { return a && a.type && a.type && b[a.type] ? c(a) : b.basic.method },
                e = function(a) { var c = function() { return "" }; return a && a.type && a.type && b[a.type] ? function() { var c = b[a.type].cssClass; return function() { return c } }() : c };
            this.getTemplateClass = e(a), this.build = d(a)
        }, a
    }(EasyAutocomplete || {}),
    EasyAutocomplete = function(a) {
        return a.main = function(b, c) {
            function d() { return 0 === t.length ? void p.error("Input field doesn't exist.") : o.checkDataUrlProperties() ? o.checkRequiredProperties() ? (e(), void g()) : void p.error("Will not work without mentioned properties.") : void p.error("One of options variables 'data' or 'url' must be defined.") }

            function e() {
                function a() {
                    var a = $("<div>"),
                        c = n.getValue("WRAPPER_CSS_CLASS");
                    o.get("theme") && "" !== o.get("theme") && (c += " eac-" + o.get("theme")), o.get("cssClasses") && "" !== o.get("cssClasses") && (c += " " + o.get("cssClasses")), "" !== q.getTemplateClass() && (c += " " + q.getTemplateClass()), a.addClass(c), t.wrap(a), o.get("adjustWidth") === !0 && b()
                }

                function b() {
                    var a = t.outerWidth();
                    t.parent().css("width", a)
                }

                function c() { t.unwrap() }

                function d() {
                    var a = $("<div>").addClass(n.getValue("CONTAINER_CLASS"));
                    a.attr("id", f()).prepend($("<ul>")),
                        function() {
                            a.on("show.eac", function() {
                                switch (o.get("list").showAnimation.type) {
                                    case "slide":
                                        var b = o.get("list").showAnimation.time,
                                            c = o.get("list").showAnimation.callback;
                                        a.find("ul").slideDown(b, c);
                                        break;
                                    case "fade":
                                        var b = o.get("list").showAnimation.time,
                                            c = o.get("list").showAnimation.callback;
                                        a.find("ul").fadeIn(b), c;
                                        break;
                                    default:
                                        a.find("ul").show()
                                }
                                o.get("list").onShowListEvent()
                            }).on("hide.eac", function() {
                                switch (o.get("list").hideAnimation.type) {
                                    case "slide":
                                        var b = o.get("list").hideAnimation.time,
                                            c = o.get("list").hideAnimation.callback;
                                        a.find("ul").slideUp(b, c);
                                        break;
                                    case "fade":
                                        var b = o.get("list").hideAnimation.time,
                                            c = o.get("list").hideAnimation.callback;
                                        a.find("ul").fadeOut(b, c);
                                        break;
                                    default:
                                        a.find("ul").hide()
                                }
                                o.get("list").onHideListEvent()
                            }).on("selectElement.eac", function() { a.find("ul li").removeClass("selected"), a.find("ul li").eq(w).addClass("selected"), o.get("list").onSelectItemEvent() }).on("loadElements.eac", function(b, c, d) {
                                var e = "",
                                    f = a.find("ul");
                                f.empty().detach(), v = [];
                                for (var h = 0, i = 0, k = c.length; k > i; i += 1) {
                                    var l = c[i].data;
                                    if (0 !== l.length) {
                                        void 0 !== c[i].header && c[i].header.length > 0 && f.append("<div class='eac-category' >" + c[i].header + "</div>");
                                        for (var m = 0, n = l.length; n > m && h < c[i].maxListSize; m += 1) e = $("<li><div class='eac-item'></div></li>"),
                                            function() {
                                                var a = m,
                                                    b = h,
                                                    f = c[i].getValue(l[a]);
                                                e.find(" > div").on("click", function() { t.val(f).trigger("change"), w = b, j(b), o.get("list").onClickEvent(), o.get("list").onChooseEvent() }).mouseover(function() { w = b, j(b), o.get("list").onMouseOverEvent() }).mouseout(function() { o.get("list").onMouseOutEvent() }).html(q.build(g(f, d), l[a]))
                                            }(), f.append(e), v.push(l[m]), h += 1
                                    }
                                }
                                a.append(f), o.get("list").onLoadEvent()
                            })
                        }(), t.after(a)
                }

                function e() { t.next("." + n.getValue("CONTAINER_CLASS")).remove() }

                function g(a, b) { return o.get("highlightPhrase") && "" !== b ? i(a, b) : a }

                function h(a) { return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") }

                function i(a, b) { var c = h(b); return (a + "").replace(new RegExp("(" + c + ")", "gi"), "<b>$1</b>") }
                t.parent().hasClass(n.getValue("WRAPPER_CSS_CLASS")) && (e(), c()), a(), d(), u = $("#" + f()), o.get("placeholder") && t.attr("placeholder", o.get("placeholder"))
            }

            function f() { var a = t.attr("id"); return a = n.getValue("CONTAINER_ID") + a }

            function g() {
                function a() { s("autocompleteOff", !0) && n(), b(), c(), d(), e(), f(), g() }

                function b() {
                    t.focusout(function() {
                        var a, b = t.val();
                        o.get("list").match.caseSensitive || (b = b.toLowerCase());
                        for (var c = 0, d = v.length; d > c; c += 1)
                            if (a = o.get("getValue")(v[c]), o.get("list").match.caseSensitive || (a = a.toLowerCase()), a === b) return w = c, void j(w)
                    })
                }

                function c() {
                    t.off("keyup").keyup(function(a) {
                        function b(a) {
                            function b() {
                                var a = {},
                                    b = o.get("ajaxSettings") || {};
                                for (var c in b) a[c] = b[c];
                                return a
                            }

                            function c(a, b) { return o.get("matchResponseProperty") !== !1 ? "string" == typeof o.get("matchResponseProperty") ? b[o.get("matchResponseProperty")] === a : "function" == typeof o.get("matchResponseProperty") ? o.get("matchResponseProperty")(b) === a : !0 : !0 }
                            if (!(a.length < o.get("minCharNumber"))) {
                                if ("list-required" !== o.get("data")) {
                                    var d = o.get("data"),
                                        e = r.init(d);
                                    e = r.updateCategories(e, d), e = r.processData(e, a), k(e, a), t.parent().find("li").length > 0 ? h() : i()
                                }
                                var f = b();
                                void 0 !== f.url && "" !== f.url || (f.url = o.get("url")), void 0 !== f.dataType && "" !== f.dataType || (f.dataType = o.get("dataType")), void 0 !== f.url && "list-required" !== f.url && (f.url = f.url(a), f.data = o.get("preparePostData")(f.data, a), $.ajax(f).done(function(b) {
                                    var d = r.init(b);
                                    d = r.updateCategories(d, b), d = r.convertXml(d), c(a, b) && (d = r.processData(d, a), k(d, a)), r.checkIfDataExists(d) && t.parent().find("li").length > 0 ? h() : i(), o.get("ajaxCallback")()
                                }).fail(function() { p.warning("Fail to load response data") }).always(function() {}))
                            }
                        }
                        switch (a.keyCode) {
                            case 27:
                                i(), l();
                                break;
                            case 38:
                                a.preventDefault(), v.length > 0 && w > 0 && (w -= 1, t.val(o.get("getValue")(v[w])), j(w));
                                break;
                            case 40:
                                a.preventDefault(), v.length > 0 && w < v.length - 1 && (w += 1, t.val(o.get("getValue")(v[w])), j(w));
                                break;
                            default:
                                if (a.keyCode > 40 || 8 === a.keyCode) {
                                    var c = t.val();
                                    o.get("list").hideOnEmptyPhrase !== !0 || 8 !== a.keyCode || "" !== c ? o.get("requestDelay") > 0 ? (void 0 !== m && clearTimeout(m), m = setTimeout(function() { b(c) }, o.get("requestDelay"))) : b(c) : i()
                                }
                        }
                    })
                }

                function d() { t.on("keydown", function(a) { a = a || window.event; var b = a.keyCode; return 38 === b ? (suppressKeypress = !0, !1) : void 0 }).keydown(function(a) { 13 === a.keyCode && w > -1 && (t.val(o.get("getValue")(v[w])), o.get("list").onKeyEnterEvent(), o.get("list").onChooseEvent(), w = -1, i(), a.preventDefault()) }) }

                function e() { t.off("keypress") }

                function f() { t.focus(function() { "" !== t.val() && v.length > 0 && (w = -1, h()) }) }

                function g() { t.blur(function() { setTimeout(function() { w = -1, i() }, 250) }) }

                function n() { t.attr("autocomplete", "off") }
                a()
            }

            function h() { u.trigger("show.eac") }

            function i() { u.trigger("hide.eac") }

            function j(a) { u.trigger("selectElement.eac", a) }

            function k(a, b) { u.trigger("loadElements.eac", [a, b]) }

            function l() { t.trigger("blur") }
            var m, n = new a.Constans,
                o = new a.Configuration(c),
                p = new a.Logger,
                q = new a.Template(c.template),
                r = new a.ListBuilderService(o, a.proccess),
                s = o.equals,
                t = b,
                u = "",
                v = [],
                w = -1;
            a.consts = n, this.getConstants = function() { return n }, this.getConfiguration = function() { return o }, this.getContainer = function() { return u }, this.getSelectedItemIndex = function() { return w }, this.getItems = function() { return v }, this.getItemData = function(a) { return v.length < a || void 0 === v[a] ? -1 : v[a] }, this.getSelectedItemData = function() { return this.getItemData(w) }, this.build = function() { e() }, this.init = function() { d() }
        }, a.eacHandles = [], a.getHandle = function(b) { return a.eacHandles[b] }, a.inputHasId = function(a) { return void 0 !== $(a).attr("id") && $(a).attr("id").length > 0 }, a.assignRandomId = function(b) {
            var c = "";
            do c = "eac-" + Math.floor(1e4 * Math.random()); while (0 !== $("#" + c).length);
            elementId = a.consts.getValue("CONTAINER_ID") + c, $(b).attr("id", c)
        }, a.setHandle = function(b, c) { a.eacHandles[c] = b }, a
    }(EasyAutocomplete || {});
! function(a) {
    a.fn.easyAutocomplete = function(b) {
        return this.each(function() {
            var c = a(this),
                d = new EasyAutocomplete.main(c, b);
            EasyAutocomplete.inputHasId(c) || EasyAutocomplete.assignRandomId(c), d.init(), EasyAutocomplete.setHandle(d, c.attr("id"))
        })
    }, a.fn.getSelectedItemIndex = function() { var b = a(this).attr("id"); return void 0 !== b ? EasyAutocomplete.getHandle(b).getSelectedItemIndex() : -1 }, a.fn.getItems = function() { var b = a(this).attr("id"); return void 0 !== b ? EasyAutocomplete.getHandle(b).getItems() : -1 }, a.fn.getItemData = function(b) { var c = a(this).attr("id"); return void 0 !== c && b > -1 ? EasyAutocomplete.getHandle(c).getItemData(b) : -1 }, a.fn.getSelectedItemData = function() { var b = a(this).attr("id"); return void 0 !== b ? EasyAutocomplete.getHandle(b).getSelectedItemData() : -1 }
}(jQuery);


/* render form meetings days */
$(document).ready(function() {
    var form = $(".form-meetings-days");
    var form_block = $(".cont_inscrip");
    var thanks_block = $(".thanks");
    form.validate({
        rules: {
            nombres: {
                required: true,
            },
            apellidos: {
                required: true,
            },
            numdoc: {
                required: true,
                number: true,
                minlength: 8,
                maxlength: 8
            },
            telefono: {
                required: true,
                number: true,
                minlength: 7,
                maxlength: 9
            },
            grado: {
                required: true,
            },
            terminos: {
                required: true,
            },
        },
        messages: {
            nombres: "Este campo es requerido",
            apellidos: "Este campo es requerido",
            numdoc: {
                required: "Este campo es requerido",
                number: "Solo nÃºmeros",
                minlength: "MÃ­nimo 8 dÃ­gitos",
                maxlength: "MÃ¡ximo 8 dÃ­gitos"
            },
            telefono: {
                required: "Este campo es requerido",
                number: "Solo nÃºmeros",
                minlength: "MÃ­nimo 7 dÃ­gitos",
                maxlength: "MÃ¡ximo 9 dÃ­gitos"
            },
            grado: "Este campo es requerido",
            terminos: "Este campo es requerido"
        }

    });
    var deployform = function() {
        form_block.hide();
        thanks_block.show();
        form[0].reset();
    };

    $(".btn-sender-meeting").click(function() {

        if (form.valid()) {
            console.log("valid form meeting");
            var url = form.attr("data-service-submit");
            if (url != "" && url != null) {
                $.post(url, form.serialize(), function(response) {
                    console.log("sending ajax result: message");
                    deployform();
                });
            } else {
                console.log("by default:message");
                deployform();
            }


        } else {
            console.log("not valid form meeting");
        };
    });
    $(".cerrar").click(function() {
        form_block.show();
        thanks_block.hide();
    });

    var field_autocomplete = $('.colegios-list');
    var url_autocomplete = form.attr("data-service-autocomplete");
    console.log(url_autocomplete);


    var options = {

        url: url_autocomplete,

        getValue: "name",

        list: {
            match: {
                enabled: true
            }
        },

        theme: "square"
    };

    field_autocomplete.easyAutocomplete(options);

    //RESTRICT FIELDS

    function setInputFilter(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
            if (textbox) {
                textbox.addEventListener(event, function() {
                    if (inputFilter(this.value)) {
                        this.oldValue = this.value;
                        this.oldSelectionStart = this.selectionStart;
                        this.oldSelectionEnd = this.selectionEnd;
                    } else if (this.hasOwnProperty("oldValue")) {
                        this.value = this.oldValue;
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    }
                });
            }

        });
    }
    setInputFilter(document.querySelector('input[name="numdoc"]'), function(value) {
        return /^\d*$/.test(value);
    });
    setInputFilter(document.querySelector('input[name="telefono"]'), function(value) {
        return /^\d*$/.test(value);
    });
    console.log("dark");
    document.getElementsByClassName('easy-autocomplete')[0].style.width='100%'
});