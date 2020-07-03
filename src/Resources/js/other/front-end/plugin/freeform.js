"use strict";function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(r,!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Freeform=function(){function e(t,r){var n=this;if(_classCallCheck(this,e),_defineProperty(this,"form",void 0),_defineProperty(this,"options",{ajax:!1,disableSubmit:!1,scrollToAnchor:!1,prevButtonName:"form_previous_page_button",successBannerMessage:"Form has been submitted successfully!",errorBannerMessage:"Error! Please review the form and try submitting again.",errorClassBanner:"ff-form-errors",errorClassList:"ff-errors",errorClassField:"ff-has-errors",successClassBanner:"ff-form-success",removeMessages:null,renderSuccess:null,renderFormErrors:null,renderFieldErrors:null}),_defineProperty(this,"_beforeSubmitCallbackStack",[]),_defineProperty(this,"_successfulAjaxSubmitCallbackStack",[]),_defineProperty(this,"_failedAjaxSubmitCallbackStack",[]),_defineProperty(this,"_afterAjaxSubmitCallbackStack",[]),_defineProperty(this,"setOption",function(e,t){n.options[e]=t}),_defineProperty(this,"lockSubmit",function(){var e=n.options.disableSubmit;if(e)for(var t=n._getSubmitButtons(),r=0;r<t.length;r++){var o=t[r];o.disabled=!0}}),_defineProperty(this,"unlockSubmit",function(){var e=n.options.disableSubmit;if(e)for(var t=n._getSubmitButtons(),r=0;r<t.length;r++){var o=t[r];o.disabled=!1}}),_defineProperty(this,"triggerSubmit",function(){n.unlockSubmit();var e=n._getSubmitButtons();e.length&&e[0].click()}),_defineProperty(this,"_setInstances",function(){var t=n.form;e.instances.set(t,n),t.freeform=n}),_defineProperty(this,"_emitInitEvent",function(){var e=n.form,t=n._createNewEvent("freeform-ready");e.dispatchEvent(t)}),_defineProperty(this,"_attachListeners",function(){n.form.addEventListener("submit",n._onSubmit);for(var e=n.form.querySelectorAll("input, select, textarea"),t=0;t<e.length;t++){var r=e[t];r.addEventListener("change",function(e){n._removeMessageFrom(e.target)})}}),_defineProperty(this,"_onSubmit",function(t){n.lockSubmit();var r=n.form,o=n.options,a=!0,i=n.form.querySelector("[type=submit]:focus"),s=!1;i&&i.name&&i.name===e._BACK_BUTTON_NAME&&(s=!0);for(var c=0;c<n._beforeSubmitCallbackStack.length;c++){var l=n._beforeSubmitCallbackStack[c],u=l.bind(n);u(r,o,s)||(a=!1)}return a?!o.ajax||(t.preventDefault(),t.stopPropagation(),n._onSubmitAjax(t)):(t.preventDefault(),t.stopPropagation(),!1)}),_defineProperty(this,"_removeMessages",function(){if("function"==typeof n.options.removeMessages)return n.options.removeMessages=n.options.removeMessages.bind(n),n.options.removeMessages();var e=n.form,t=n.options,r=t.successClassBanner,o=t.errorClassBanner,a=t.errorClassList,i=t.errorClassField;e.querySelectorAll(".".concat(n._getClassArray(a).join("."))).remove();for(var s=e.querySelectorAll(".".concat(n._getClassArray(i).join("."))),c=0;c<s.length;c++){var l=s[c];n._removeMessageFrom(l)}e.querySelectorAll(".".concat(n._getClassArray(r).join("."))).remove(),document.querySelectorAll(".".concat(n._getClassArray(o).join("."))).remove()}),_defineProperty(this,"_removeMessageFrom",function(e){var t=n.options,r=t.errorClassList,o=t.errorClassField,a=e.parentNode;e.type&&("radio"===e.type||"checkbox"===e.type&&/\[]$/.test(e.name))&&(a=e.parentNode.parentNode);var i=a.querySelector(".".concat(r));i&&i.remove();for(var s=a.querySelectorAll("input, select, textarea"),c=0;c<s.length;c++)n._removeClass(s[c],o)}),_defineProperty(this,"_renderSuccessBanner",function(){if("function"==typeof n.options.renderSuccess)return n.options.renderSuccess=n.options.renderSuccess.bind(n),n.options.renderSuccess();var e=n.form,t=n.options,r=t.successBannerMessage,o=t.successClassBanner,a=document.createElement("div");n._addClass(a,o);var i=document.createElement("p");i.appendChild(document.createTextNode(r)),a.appendChild(i),e.insertBefore(a,e.childNodes[0])}),_defineProperty(this,"_renderFieldErrors",function(e){if("function"==typeof n.options.renderFieldErrors)return n.options.renderFieldErrors=n.options.renderFieldErrors.bind(n),n.options.renderFieldErrors(e);var t=n.form,r=n.options,o=r.errorClassList,a=r.errorClassField;for(var i in e)if(e.hasOwnProperty(i)&&i){var s=e[i],c=document.createElement("ul");n._addClass(c,o);for(var l=0;l<s.length;l++){var u=s[l],f=document.createElement("li");f.appendChild(document.createTextNode(u)),c.appendChild(f)}for(var d=t.querySelectorAll('*[name="'.concat(i,'"], *[name="').concat(i,'[0][0]"], *[type=file][name="').concat(i,'"], *[type=file][name="').concat(i,'[]"]')),p=0;p<d.length;p++){var m=d[p];n._addClass(m,a),m.parentElement.appendChild(c)}for(var v=t.querySelectorAll('input[type=checkbox][name="'.concat(i,'[]"], input[type=radio][name="').concat(i,'"]')),_=0;_<v.length;_++){var h=v[_];n._addClass(h,a),h.parentElement.parentElement.appendChild(c)}}}),_defineProperty(this,"_renderFormErrors",function(e){if("function"==typeof n.options.renderFormErrors)return n.options.renderFormErrors=n.options.renderFormErrors.bind(n),n.options.renderFormErrors(e);var t=n.form,r=n.options,o=r.errorClassBanner,a=r.errorBannerMessage,i=document.createElement("div");n._addClass(i,o);var s=document.createElement("p");if(s.appendChild(document.createTextNode(a)),i.appendChild(s),e.length){for(var c=document.createElement("ul"),l=0;l<e.length;l++){var u=e[l],f=document.createElement("li");f.appendChild(document.createTextNode(u)),c.appendChild(f)}i.appendChild(c)}t.insertBefore(i,t.childNodes[0])}),_defineProperty(this,"_onSuccessfulSubmit",function(e,t,r){for(var o=0;o<n._successfulAjaxSubmitCallbackStack.length;o++){var a=n._successfulAjaxSubmitCallbackStack[o];a(e,t,r)}}),_defineProperty(this,"_onFailedSubmit",function(e,t,r){for(var o=0;o<n._failedAjaxSubmitCallbackStack.length;o++){var a=n._failedAjaxSubmitCallbackStack[o];a(e,t,r)}}),_defineProperty(this,"_onAfterSubmit",function(e,t,r){for(var o=0;o<n._afterAjaxSubmitCallbackStack.length;o++){var a=n._afterAjaxSubmitCallbackStack[o];a(e,t,r)}}),_defineProperty(this,"_onSubmitAjax",function(e){var t=n.form,r=new FormData(t),o=new XMLHttpRequest;if(n._isSafari())for(var a=0;a<t.elements.length;a++)if("file"===t.elements[a].type&&""===t.elements[a].value){var i=t.elements[a];r["delete"](i.name)}var s=t.getAttribute("method"),c=t.getAttribute("action");return o.open(s,c?c:window.location.href,!0),o.setRequestHeader("Cache-Control","no-cache"),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.setRequestHeader("HTTP_X_REQUESTED_WITH","XMLHttpRequest"),o.onload=function(){if(n._removeMessages(),200===o.status){var r=JSON.parse(o.response),a=r.success,i=r.finished,s=r.actions,c=void 0===s?[]:s,l=r.errors,u=r.formErrors,f=r.honeypot;if(c.length||(a&&i?(t.reset(),n._onSuccessfulSubmit(e,t,r),n._renderSuccessBanner()):(l||u)&&(n._onFailedSubmit(e,t,r),n._renderFieldErrors(l),n._renderFormErrors(u))),f){var d=t.querySelector("input[name^=freeform_form_handle]");d&&(d.setAttribute("name",f.name),d.setAttribute("id",f.name),d.value=f.hash)}n._onAfterSubmit(e,t,r)}else console.error(o);n.unlockSubmit(t)},o.send(r),!1}),_defineProperty(this,"_getSubmitButtons",function(){var e=n.options.prevButtonName;return n.form.querySelectorAll('*[type=submit]:not([name="'.concat(e,'"])'))}),_defineProperty(this,"_isSafari",function(){return navigator.userAgent.indexOf("Safari")>-1}),_defineProperty(this,"_isIe",function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return parseInt(e.substring(t+5,e.indexOf(".",t)),10);var r=e.indexOf("Trident/");if(r>0){var n=e.indexOf("rv:");return parseInt(e.substring(n+3,e.indexOf(".",n)),10)}var o=e.indexOf("Edge/");return o>0&&parseInt(e.substring(o+5,e.indexOf(".",o)),10)}),_defineProperty(this,"_getClassArray",function(e){return"string"==typeof e&&(e=e.split(" ")),e}),_defineProperty(this,"_addClass",function(e,t){for(var r=n._getClassArray(t),o=0;o<r.length;o++){var a=r[o];e.classList.add(a)}}),_defineProperty(this,"_removeClass",function(e,t){"string"==typeof t&&(t=t.split(" "));for(var r=0;r<t.length;r++){var n=t[r];e.classList.remove(n)}}),_defineProperty(this,"_createNewEvent",function(e){var t,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return"function"==typeof Event?t=new Event(e,{bubbles:r,cancelable:n}):(t=document.createEvent("Event"),t.initEvent(e,!0,!0)),t}),this.form=t,this.options=_objectSpread({},this.options,{},r),!this.form)return void console.error('Could not find a form with ID "'.concat(id,'"'));if(this._attachListeners(),this._setInstances(),this._emitInitEvent(),this.options.scrollToAnchor)var o=setInterval(function(){"complete"===document.readyState&&(clearInterval(o),document.getElementById(t.dataset.id).scrollIntoView())},300)}return _createClass(e,[{key:"addOnSubmitCallback",value:function(e){"function"==typeof e&&this._beforeSubmitCallbackStack.push(e)}},{key:"addOnSuccessfulAjaxSubmit",value:function(e){"function"==typeof e&&this._successfulAjaxSubmitCallbackStack.push(e)}},{key:"addOnFailedAjaxSubmit",value:function(e){"function"==typeof e&&this._failedAjaxSubmitCallbackStack.push(e)}},{key:"addOnAfterAjaxSubmit",value:function(e){"function"==typeof e&&this._afterAjaxSubmitCallbackStack.push(e)}}]),e}();_defineProperty(Freeform,"_BACK_BUTTON_NAME","form_previous_page_button"),_defineProperty(Freeform,"instances",new WeakMap),_defineProperty(Freeform,"getInstance",function(e){return Freeform.instances.get(e)}),Element.prototype.remove=function(){this.parentElement.removeChild(this)},NodeList.prototype.remove=HTMLCollection.prototype.remove=function(){for(var e=this.length-1;e>=0;e--)this[e]&&this[e].parentElement&&this[e].parentElement.removeChild(this[e])};