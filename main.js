/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h={};function p(){}function d(){}function y(){}var _={};s(_,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(S([])));m&&m!==n&&o.call(m,a)&&(_=m);var b=y.prototype=p.prototype=Object.create(_);function g(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(e,r){function n(i,a,c,u){var s=f(e[i],e,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=y,s(b,"constructor",y),s(y,"constructor",d),d.displayName=s(y,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},g(w.prototype),s(w.prototype,c,(function(){return this})),r.AsyncIterator=w,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new w(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(b),s(b,u,"Generator"),s(b,a,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var i=function(){function t(e,r,n,i,a,c){var u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),o(this,"_setEventListeners",(function(){u._cardDelete.addEventListener("click",u._deleteTask.bind(u)),u._cardLike.addEventListener("click",u._likeTask.bind(u)),u._cardPhoto.addEventListener("click",(function(){u._handleCardClick(u._name,u._link)}))})),o(this,"_likeTask",(function(t){u._cardLike.classList.contains("card__like_active")?u._deleteLike(u._id).then((function(e){t.target.classList.remove("card__like_active"),u._viewLikes(e.likes)})):u._markLike(u._id).then((function(e){t.target.classList.add("card__like_active"),u._viewLikes(e.likes)}))})),this._selectorTemplate=e,this._handleCardClick=r,this._markLike=a,this._deleteLike=c,this._handleCardDelete=i,this._element=this._getTemplate(),this._cardDelete=this._element.querySelector(".card__delete"),this._cardLike=this._element.querySelector(".card__like"),this._cardPhoto=this._element.querySelector(".card__photo"),this._cardTitle=this._element.querySelector(".card__title"),this._cardLikeUsers=this._element.querySelector(".card__like-users"),this._userId=n}var i,a,c,u;return i=t,a=[{key:"getData",value:function(t){this._data=t,this._name=this._data.name,this._link=this._data.link,this._likes=this._data.likes,this._ownerId=this._data.owner._id,this._id=this._data._id}},{key:"_getTemplate",value:function(){return document.querySelector(this._selectorTemplate).content.querySelector(".card").cloneNode(!0)}},{key:"_deleteTask",value:(c=e().mark((function t(r){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r.preventDefault(),t.next=4,this._handleCardDelete(this._id,this._element);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("'Ошибочка при удалении' ".concat(t.t0));case 9:case"end":return t.stop()}}),t,this,[[0,6]])})),u=function(){var t=this,e=arguments;return new Promise((function(n,o){var i=c.apply(t,e);function a(t){r(i,n,o,a,u,"next",t)}function u(t){r(i,n,o,a,u,"throw",t)}a(void 0)}))},function(t){return u.apply(this,arguments)})},{key:"_viewLikes",value:function(t){var e=t.length;this._cardLikeUsers.textContent=e,0==e&&(this._cardLikeUsers.textContent="")}},{key:"_viewMyActiveLike",value:function(){var t=this;this._likes.find((function(e){return e._id===t._userId}))&&this._cardLike.classList.add("card__like_active")}},{key:"_viewDelete",value:function(){this._ownerId!==this._userId&&this._cardDelete.remove()}},{key:"generateCard",value:function(){return this._cardTitle.textContent=this._name,this._cardPhoto.alt=this._name,this._cardPhoto.src=this._link,this._viewLikes(this._likes),this._viewMyActiveLike(),this._viewDelete(),this._setEventListeners(),this._element}}],a&&n(i.prototype,a),Object.defineProperty(i,"prototype",{writable:!1}),t}();function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.formElement=r,this.buttonElement=this.formElement.querySelector(e.formSubmit),this.inputs=Array.from(this.formElement.querySelectorAll(e.formInput))}var e,r;return e=t,r=[{key:"_hasInvalidInput",value:function(t){return!t.validity.valid}},{key:"_hasInvalidForm",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_toggleButton",value:function(t,e,r){this._hasInvalidForm(t)?this._toggleButtonState(r):(e.classList.remove(r.formSubmitDisabled),e.removeAttribute("disabled",!1))}},{key:"_showInputError",value:function(t,e){e.classList.add(t.formInputTypeError);var r=e.nextElementSibling;r.classList.remove(t.formErrorMessageHiden),r.textContent=e.validationMessage}},{key:"_hideInputError",value:function(t,e){e.classList.remove(t.formInputTypeError);var r=e.nextElementSibling;r.classList.add(t.formErrorMessageHiden),r.textContent=""}},{key:"_addEventListeners",value:function(t,e,r){var n=this;t.addEventListener("input",(function(){n._hasInvalidInput(t)?(n._showInputError(r,t),n._toggleButton(e,n.buttonElement,r)):(n._hideInputError(r,t),n._toggleButton(e,n.buttonElement,r))}))}},{key:"_toggleButtonState",value:function(t){this.buttonElement.setAttribute("disabled",!0),this.buttonElement.classList.add(t.formSubmitDisabled)}},{key:"resetValidation",value:function(t){var e=this;this._toggleButtonState(t),this.inputs.forEach((function(r){e._hideInputError(t,r)}))}},{key:"enableValidation",value:function(t){var e=this;this.inputs.forEach((function(r){e._addEventListeners(r,e.inputs,t)}))}}],r&&a(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=document.querySelector(r)}var e,r;return e=t,(r=[{key:"setItems",value:function(t){this._data=t}},{key:"renderAllElements",value:function(){var t=this;this._data.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var f=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._buttonClose=this._popup.querySelector(".form__close"),this._containerViewPhotoName=document.querySelector(".container-view-photo__photo"),this.keyNmbrEsc=27,this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"_handleEscClose",value:function(t){t.keyCode===this.keyNmbrEsc&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._buttonClose.addEventListener("click",this.close.bind(this)),document.addEventListener("mousedown",(function(e){e.target.contains(t._popup)&&t.close()}))}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=y(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},d.apply(this,arguments)}function y(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=m(t)););return t}function _(t,e){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_(t,e)}function v(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=m(n);if(o){var r=m(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return v(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,t))._buttonClose=e._popup.querySelector(".container-view-photo__button-close"),e._title=e._popup.querySelector(".container-view-photo__title"),e._image=e._popup.querySelector(".container-view-photo__photo"),e}return e=a,(r=[{key:"open",value:function(t,e){d(m(a.prototype),"open",this).call(this),this._title.textContent=t,this._image.src=e,this._image.alt=t}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=E(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},k.apply(this,arguments)}function E(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}function L(t,e){return L=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},L(t,e)}function O(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&L(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return O(this,t)});function a(t){var e,r=t.popupSelector,n=t.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,r))._submitForm=n,e._inputList=e._popup.querySelectorAll(".form__input"),e._form=e._popup.querySelector(".form__sending"),e._buttonSubmit=e._popup.querySelector(".form__submit"),e._formValues={},e}return e=a,(r=[{key:"_getInputValues",value:function(){var t=this;return this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;k(S(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._buttonSubmit.textContent="Сохранение...",t._submitForm(t._getInputValues())}))}},{key:"close",value:function(){k(S(a.prototype),"close",this).call(this),this._form.reset()}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function C(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=I(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},x.apply(this,arguments)}function I(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}function T(t,e){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},T(t,e)}function q(t,e){if(e&&("object"===j(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return R(t)}function R(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(a,t);var e,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(n);if(o){var r=D(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return q(this,t)});function a(t){var e,r=t.popupSelector,n=t.submitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.call(this,r))._submitForm=n,e._buttonSubmit=e._popup.querySelector(".form__submit"),e._form=e._popup.querySelector(".form__sending"),e._deleteCard=e._deleteCard.bind(R(e)),e}return e=a,(r=[{key:"_deleteCard",value:function(t){t.preventDefault(),this._buttonSubmit.textContent="Сохранение...",this._submitForm(this._id)}},{key:"open",value:function(t){x(D(a.prototype),"open",this).call(this),this._buttonSubmit.textContent="Да",this._id=t,document.addEventListener("submit",this._deleteCard)}},{key:"close",value:function(){x(D(a.prototype),"close",this).call(this),document.removeEventListener("submit",this._deleteCard)}}])&&C(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),a}(f);function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var N=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameProfile=e,this._aboutProfile=r,this._avatar=document.querySelector(".profile__avatar")}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return this._formValues={},this._formValues.name=this._nameProfile.textContent,this._formValues.info=this._aboutProfile.textContent,this._formValues}},{key:"setUserInfo",value:function(t,e){this._nameProfile.textContent=t,this._aboutProfile.textContent=e}},{key:"submitAvatar",value:function(t){this._avatar.style.content="url(".concat(t.avatar,")")}}])&&A(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function V(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var F=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._header=e.headers,this._baseUrl=e.baseUrl}var e,r;return e=t,(r=[{key:"_getJsonOrError",value:function(t){if(t.ok)return t.json();throw new Error("Ошибка при загрузке данных с сервера")}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._header}).then(this._getJsonOrError)}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._header}).then(this._getJsonOrError)}},{key:"saveProfile",value:function(t,e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._header,body:JSON.stringify({name:"".concat(t),about:"".concat(e)})}).then(this._getJsonOrError)}},{key:"createNewCard",value:function(t,e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._header,body:JSON.stringify({name:"".concat(t),link:"".concat(e)})}).then(this._getJsonOrError)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._header}).then(this._getJsonOrError)}},{key:"markLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._header}).then(this._getJsonOrError)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._header}).then(this._getJsonOrError)}},{key:"submitAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._header,body:JSON.stringify({avatar:"".concat(t)})}).then(this._getJsonOrError)}}])&&V(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),B={tasksList:".cards",taskListItemText:".card__title",taskListItemUrl:".card__photo",taskListItemDelete:".card__delete",taskListItemLikeButtom:".card__like",templateItem:"#card",formInput:".form__input",formErrorMessageHiden:"form__error-message_hiden",formSubmit:".form__submit",form:".form",formSubmitDisabled:"form__submit_type_disabled",formInputTypeError:"form__input_type_error"},J=document.querySelector(".profile__edit"),G=document.querySelector(".form__input_type_name"),M=document.querySelector(".form__input_type_about"),H=document.querySelector(".profile__name"),Y=document.querySelector(".profile__about-name"),z=document.querySelector(".profile__add-button"),K=document.querySelector(".form__sending_profile"),Q=document.querySelector(".form__sending_foto_add"),W=document.querySelector(".form__sending_submit-avatar"),X=(document.querySelector(".container-view-photo__photo"),document.querySelector(".container-view-photo__title"),document.querySelector(".card__delete"),document.querySelector(".profile__btn-sbmt-photo")),Z=document.querySelector(".form__submit_foto"),$=document.querySelector(".form__submit_avatar"),tt=document.querySelector(".form__submit_profile"),et=null,rt=new F({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-52",headers:{authorization:"eedc1c72-62bc-4062-b0d7-5fb34f1900fa","Content-Type":"application/json"}}),nt=new N(H,Y),ot=new s({renderer:function(t){ot.addItem(ft(t))}},B.tasksList);rt.getCards().then((function(t){ot.setItems(t),ot.renderAllElements()})).catch((function(t){return console.log(t)}));var it=new P({popupSelector:".popup_add_photo",submitForm:function(t){rt.createNewCard(t.inputPhotoName,t.inputPhotoUrl).then((function(t){ot.addItem(ft(t))})).then((function(){it.close(),Z.textContent="Создать"})).catch((function(t){return console.log(t)}))}});it.setEventListeners();var at=new P({popupSelector:".popup_edit_profile",submitForm:function(t){rt.saveProfile(t.inputName,t.inputAbout).then((function(t){nt.setUserInfo(t.name,t.about)})).then((function(){at.close(),tt.textContent="Сохранить"})).catch((function(t){return console.log(t)}))}});function ct(t,e){pt.open(t,e)}function ut(t,e){var r=new U({popupSelector:".popup_confirmation-delete",submitForm:function(t){rt.deleteCard(t).then((function(){e.remove()})).then((function(){r.close()})).catch((function(t){return console.log(t)}))}});r.setEventListeners(),r.open(t)}function st(t){return rt.markLike(t)}function lt(t){return rt.deleteLike(t)}function ft(t){var e=new i("#card",ct,et,ut,st,lt);return e.getData(t),e.generateCard()}at.setEventListeners(),rt.getProfile().then((function(t){nt.setUserInfo(t.name,t.about),et=t._id,nt.submitAvatar(t)})).catch((function(t){return console.log(t)}));var ht=new P({popupSelector:".popup_submit-avatar",submitForm:function(t){rt.submitAvatar(t.avatar).then((function(t){nt.submitAvatar(t)})).then((function(){ht.close(),$.textContent="Сохранить"})).catch((function(t){return console.log(t)}))}});ht.setEventListeners();var pt=new b(".popup_view_photo");pt.setEventListeners();var dt=new c(B,Q);dt.enableValidation(B);var yt=new c(B,K);yt.enableValidation(B);var _t=new c(B,W);_t.enableValidation(B),J.addEventListener("click",(function(){var t=nt.getUserInfo();G.value=t.name,M.value=t.info,at.open(),yt.resetValidation(B)})),z.addEventListener("click",(function(){it.open(),dt.resetValidation(B)})),X.addEventListener("click",(function(){ht.open(),_t.resetValidation(B)}))})();