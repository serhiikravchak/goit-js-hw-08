var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var r,o,i,a,u,f,c=0,l=!1,g=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,u=setTimeout(j,t),l?b(e):a}function T(e){var n=e-f;return void 0===f||n>=t||n<0||g&&e-c>=i}function j(){var e=m();if(T(e))return O(e);u=setTimeout(j,function(e){var n=t-(e-f);return g?d(n,i-(e-c)):n}(e))}function O(e){return u=void 0,y&&r?b(e):(r=o=void 0,a)}function h(){var e=m(),n=T(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return S(f);if(g)return u=setTimeout(j,t),b(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=p(t)||0,v(n)&&(l=!!n.leading,i=(g="maxWait"in n)?s(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},h.flush=function(){return void 0===u?a:O(m())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const y=document.querySelector("form"),b=document.querySelector("input"),S=document.querySelector("textarea");if(y.addEventListener("submit",(function(e){if(e.preventDefault(),""===e.currentTarget.email.value||""===e.currentTarget.message.value)alert("Заповніть всі поля");else{const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);console.log(t),y.reset(),localStorage.clear()}})),y.addEventListener("input",t((function(){const e={email:b.value,message:S.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),localStorage.getItem("feedback-form-state")){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);b.value=t.email,S.value=t.message}
//# sourceMappingURL=03-feedback.5d42419a.js.map
