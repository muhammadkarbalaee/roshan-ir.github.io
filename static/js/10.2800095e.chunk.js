(this["webpackJsonpnew-roshan-website"]=this["webpackJsonpnew-roshan-website"]||[]).push([[10],{36:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return o}))},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(8),o=n(36),a=n(0),i=n.n(a),u=function(e){var t=e.color,n=void 0===t?"currentColor":t,r=e.direction,i=void 0===r?"left":r,u=e.distance,c=void 0===u?"md":u,s=e.duration,l=void 0===s?.4:s,f=e.easing,p=void 0===f?"cubic-bezier(0, 0, 0, 1)":f,d=e.hideOutline,h=void 0===d||d,y=e.label,v=e.lines,b=void 0===v?3:v,m=e.onToggle,g=e.render,w=e.rounded,T=void 0!==w&&w,O=e.size,x=void 0===O?32:O,S=e.toggle,E=e.toggled,j=Object(a.useState)(!1),P=Object(o.a)(j,2),R=P[0],M=P[1],A=Math.max(12,Math.min(48,x)),I=Math.round((48-A)/2),_=A/12,k=Math.round(_),Y=A/(b*(("lg"===c?.25:"sm"===c?.75:.5)+(3===b?1:1.25))),X=Math.round(Y),C=k*b+X*(b-1),N=Math.round((48-C)/2),q=parseFloat((A/(3===b?"lg"===c?4.0425:"sm"===c?5.1625:4.6325:"lg"===c?6.7875:"sm"===c?8.4875:7.6675)-(_-k+(Y-X))/(3===b?1:2)/(4/3)).toFixed(2)),F=Math.max(0,l),B={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(F,"s ").concat(p),userSelect:"none",width:"".concat(48,"px")},H={background:n,height:"".concat(k,"px"),left:"".concat(I,"px"),position:"absolute"};h&&(B.outline="none"),T&&(H.borderRadius="9em");var U=S||M,D=void 0!==E?E:R;return g({barHeight:k,barStyles:H,burgerStyles:B,easing:p,handler:function(){U(!D),"function"===typeof m&&m(!D)},isLeft:"left"===i,isToggled:D,label:y,margin:X,move:q,time:F,topOffset:N,width:A})};function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}var s=function(e){return i.a.createElement(u,c({},e,{lines:2,render:function(e){return i.a.createElement("div",{className:"hamburger-react","aria-label":e.label,onClick:e.handler,onKeyUp:function(t){return"Enter"===t.key&&e.handler()},role:"button",style:e.burgerStyles,tabIndex:0},i.a.createElement("div",{style:{transition:"".concat(e.time/2,"s ").concat(e.easing," ").concat(e.isToggled?"0s":"".concat(e.time/2,"s")),transform:"".concat(e.isToggled?"translateY(".concat(e.barHeight/2+e.margin/2,"px)"):"none")}},i.a.createElement("div",{style:Object(r.a)(Object(r.a)({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset,"px"),transition:"".concat(e.time/2,"s ").concat(e.easing," ").concat(e.isToggled?"".concat(e.time/2,"s"):"0s"),transform:"".concat(e.isToggled?"rotate(45deg)":"none")})})),i.a.createElement("div",{style:{transition:"".concat(e.time/2,"s ").concat(e.easing," ").concat(e.isToggled?"0s":"".concat(e.time/2,"s")),transform:"".concat(e.isToggled?"translateY(-".concat(e.barHeight/2+e.margin/2,"px)"):"none")}},i.a.createElement("div",{style:Object(r.a)(Object(r.a)({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset+e.barHeight+e.margin,"px"),transition:"".concat(e.time/2,"s ").concat(e.easing," ").concat(e.isToggled?"".concat(e.time/2,"s"):"0s"),transform:"".concat(e.isToggled?"rotate(-45deg)":"none")})})))}}))}},60:function(e,t,n){var r;r=function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";var r=function(e){};r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")},e.exports=function(e,t,n,o,a,i,u,c){if(r(t),!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,a,i,u,c],f=0;(s=new Error(t.replace(/%s/g,(function(){return l[f++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,t,n){"use strict";var r=n(0);(function(){var e=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!==typeof console&&console.error(a);try{throw new Error(a)}catch(i){}};r=function(t,n){if(void 0===n)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==n.indexOf("Failed Composite propType: ")&&!t){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];e.apply(void 0,[n].concat(o))}}})(),e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=n(7)((function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}),!0)},function(t,n){t.exports=e},function(e,t,n){"use strict";var r=n(1),o=n(2),a=n(3),i={};e.exports=function(e,t,n,u,c){for(var s in e)if(e.hasOwnProperty(s)){var l;try{r("function"===typeof e[s],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",u||"React class",n,s),l=e[s](t,s,u,n,null,a)}catch(p){l=p}if(o(!l||l instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",u||"React class",n,s,typeof l),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var f=c?c():"";o(!1,"Failed %s type: %s%s",n,l.message,null!=f?f:"")}}}},function(e,t,n){"use strict";var r=n(0),o=n(1),a=n(2),i=n(3),u=n(6);e.exports=function(e,t){var n="function"===typeof Symbol&&Symbol.iterator,c="<<anonymous>>",s={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:p(r.thatReturnsNull),arrayOf:function(e){return p((function(t,n,r,o,a){if("function"!==typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u))return new f("Invalid "+o+" `"+a+"` of type `"+y(u)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<u.length;c++){var s=e(u,c,r,o,a+"["+c+"]",i);if(s instanceof Error)return s}return null}))},element:p((function(t,n,r,o,a){var i=t[n];return e(i)?null:new f("Invalid "+o+" `"+a+"` of type `"+y(i)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return p((function(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||c;return new f("Invalid "+o+" `"+a+"` of type `"+((u=t[n]).constructor&&u.constructor.name?u.constructor.name:c)+"` supplied to `"+r+"`, expected instance of `"+i+"`.")}var u;return null}))},node:p((function(e,t,n,r,o){return h(e[t])?null:new f("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,n,r,o,a){if("function"!==typeof e)return new f("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],c=y(u);if("object"!==c)return new f("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var s in u)if(u.hasOwnProperty(s)){var l=e(u,s,r,o,a+"."+s,i);if(l instanceof Error)return l}return null}))},oneOf:function(e){return Array.isArray(e)?p((function(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(l(i,e[u]))return null;return new f("Invalid "+o+" `"+a+"` of value `"+i+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")})):(a(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)},oneOfType:function(e){return Array.isArray(e)?p((function(t,n,r,o,a){for(var u=0;u<e.length;u++)if(null==(0,e[u])(t,n,r,o,a,i))return null;return new f("Invalid "+o+" `"+a+"` supplied to `"+r+"`.")})):(a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull)},shape:function(e){return p((function(t,n,r,o,a){var u=t[n],c=y(u);if("object"!==c)return new f("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var l=e[s];if(l){var p=l(u,s,r,o,a+"."+s,i);if(p)return p}}return null}))}};function l(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function f(e){this.message=e,this.stack=""}function p(e){var n={},r=0;function u(u,s,l,p,d,h,y){if(p=p||c,h=h||l,y!==i)if(t)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("undefined"!==typeof console){var v=p+":"+l;!n[v]&&r<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",h,p),n[v]=!0,r++)}return null==s[l]?u?null===s[l]?new f("The "+d+" `"+h+"` is marked as required in `"+p+"`, but its value is `null`."):new f("The "+d+" `"+h+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:e(s,l,p,d,h)}var s=u.bind(null,!1);return s.isRequired=u.bind(null,!0),s}function d(e){return p((function(t,n,r,o,a,i){var u=t[n];if(y(u)!==e){var c=function(e){var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}(u);return new f("Invalid "+o+" `"+a+"` of type `"+c+"` supplied to `"+r+"`, expected `"+e+"`.")}return null}))}function h(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(h);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"===typeof t)return t}(t);if(!r)return!1;var o,a=r.call(t);if(r!==t.entries){for(;!(o=a.next()).done;)if(!h(o.value))return!1}else for(;!(o=a.next()).done;){var i=o.value;if(i&&!h(i[1]))return!1}return!0;default:return!1}}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}return f.prototype=Error.prototype,s.checkPropTypes=u,s.PropTypes=s,s}},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var i=n(5),u=n(4);function c(e){return e.touches[0].clientX}function s(e){return e.touches[0].clientY}var l=function(e){function t(){var e,n,r;o(this,t);for(var i=arguments.length,u=Array(i),l=0;l<i;l++)u[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.handleTouchStart=function(e){r.touchStarted||(r.touchStarted=!0,r.touchMoved=!1,r.swipeOutBounded=!1,r.startX=c(e),r.startY=s(e),r.currentX=0,r.currentY=0)},r.handleTouchMove=function(e){if(r.currentX=c(e),r.currentY=s(e),r.touchMoved){if(!r.swipeOutBounded){var t=r.props.swipeTolerance;r.swipeOutBounded=Math.abs(r.startX-r.currentX)>t&&Math.abs(r.startY-r.currentY)>t}}else{var n=r.props.tapTolerance;r.touchMoved=Math.abs(r.startX-r.currentX)>n||Math.abs(r.startY-r.currentY)>n}},r.handleTouchCancel=function(){r.touchStarted=r.touchMoved=!1,r.startX=r.startY=0},r.handleTouchEnd=function(e){if(r.touchStarted=!1,r.touchMoved){if(!r.swipeOutBounded&&r.props.onSwipe){var t=r.props.swipeTolerance,n=void 0;n=Math.abs(r.startX-r.currentX)<t?r.startY>r.currentY?"top":"bottom":r.startX>r.currentX?"left":"right",r.props.onSwipe(n,e)}}else r.props.onTap&&r.props.onTap(e)},a(r,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props.children,t=e?i.Children.only(e):i.createElement("button",null);return i.cloneElement(t,{onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchCancel:this.handleTouchCancel,onTouchEnd:this.handleTouchEnd})}}]),t}(i.Component);l.defaultProps={tapTolerance:10,swipeTolerance:30},l.propTypes={children:u.node,tapTolerance:u.number,swipeTolerance:u.number,onTap:u.func,onSwipe:u.func},e.exports=l}])},e.exports=r(n(0))}}]);