(this["webpackJsonpnew-roshan-website"]=this["webpackJsonpnew-roshan-website"]||[]).push([[3],{39:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n(11),i=n(13),c=n(12),o=n(0),s=n.n(o),l=(n(46),n(39),n(1));var u=function(){return Object(l.jsx)("div",{title:"\u0628\u062e\u0634 \u0647\u0645\u06a9\u0627\u0631\u06cc \u0628\u0627 \u0645\u0627",style:{marginTop:"0.39vw"}})};var d=function(){return Object(l.jsx)("div",{title:"\u0628\u062e\u0634 \u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627",style:{marginTop:"0.39vw"},children:Object(l.jsx)("a",{href:"https://www.roshan-ai.ir/contact-us",className:"header-button"})})},b=(n(47),n(5)),h=b.Fullpage.changeFullpageSlide.bind(null,5);var j=function(){return Object(l.jsxs)("nav",{className:"links-group",children:[Object(l.jsx)("button",{onClick:h,className:"header-button",id:"clients-button",title:"\u0628\u062e\u0634 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0645\u0627",children:"\u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0645\u0627"}),Object(l.jsx)(d,{}),Object(l.jsx)(u,{})]})},m=(n(48),n(49),n.p+"static/media/\u0631\u0648\u0634\u0646.8a28e744.svg");var f=function(){return Object(l.jsx)("div",{className:"roshan-icon",title:"\u062e\u0627\u0646\u0647",style:{marginTop:"0.3vw"},children:Object(l.jsx)("a",{href:"https://www.roshan-ai.ir/",children:Object(l.jsx)("img",{className:"icon",src:m,alt:"\u0631\u0648\u0634\u0646"})})})};var g=function(){return Object(l.jsx)("div",{className:"roshan-icon-group",children:Object(l.jsx)(f,{})})},p=(n(50),n(51),n.p+"static/media/menu-icon.a0de4dbf.svg"),O=n.p+"static/media/close-icon.20012dc4.svg";var v=function(e){return Object(l.jsx)("div",{className:"menu-buttons",children:Object(l.jsxs)("button",{onClick:e.toggle,children:[Object(l.jsx)("img",{className:"icon",id:e.isOpen?"hidden":"",src:p,alt:"\u0645\u0646\u0648 \u0631\u0648\u0634\u0646"}),Object(l.jsx)("img",{className:"icon",id:e.isOpen?"":"hidden",src:O,alt:"\u0645\u0646\u0648 \u0631\u0648\u0634\u0646"})]})})},x=n(35);var w=function(e){return Object(l.jsxs)(x.a.header,{className:"navbar",children:[Object(l.jsx)(j,{}),Object(l.jsx)(g,{}),Object(l.jsx)(v,{toggle:e.toggle,isOpen:e.isOpen})]})},y=(n(52),n.p+"static/media/wallpaper.e4312dfe.png"),N=n(7);function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(s){o=!0,a=s}finally{try{c||null==n.return||n.return()}finally{if(o)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"===typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(53);var k=n(6),E=function(e){var t=e.color,n=void 0===t?"currentColor":t,r=e.direction,a=void 0===r?"left":r,i=e.distance,c=void 0===i?"md":i,s=e.duration,l=void 0===s?.4:s,u=e.easing,d=void 0===u?"cubic-bezier(0, 0, 0, 1)":u,b=e.hideOutline,h=void 0===b||b,j=e.label,m=e.lines,f=void 0===m?3:m,g=e.onToggle,p=e.render,O=e.rounded,v=void 0!==O&&O,x=e.size,w=void 0===x?32:x,y=e.toggle,N=e.toggled,S=T(Object(o.useState)(!1),2),k=S[0],E=S[1],L=Math.max(12,Math.min(48,w)),M=Math.round((48-L)/2),A=L/12,C=Math.round(A),F=L/(f*(("lg"===c?.25:"sm"===c?.75:.5)+(3===f?1:1.25))),R=Math.round(F),z=C*f+R*(f-1),I=Math.round((48-z)/2),Q=parseFloat((L/(3===f?"lg"===c?4.0425:"sm"===c?5.1625:4.6325:"lg"===c?6.7875:"sm"===c?8.4875:7.6675)-(A-C+(F-R))/(3===f?1:2)/(4/3)).toFixed(2)),H=Math.max(0,l),J={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(H,"s ").concat(d),userSelect:"none",width:"".concat(48,"px")},U={background:n,height:"".concat(C,"px"),left:"".concat(M,"px"),position:"absolute"};h&&(J.outline="none"),v&&(U.borderRadius="9em");var K=y||E,P=void 0!==N?N:k;return p({barHeight:C,barStyles:U,burgerStyles:J,easing:d,handler:function(){K(!P),"function"===typeof g&&g(!P)},isLeft:"left"===a,isToggled:P,label:j,margin:R,move:Q,time:H,topOffset:I,width:L})};function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}var M=function(e){return s.a.createElement(E,L({},e,{lines:2,render:function(e){return s.a.createElement("div",{className:"hamburger-react","aria-label":e.label,onClick:e.handler,onKeyUp:function(t){return"Enter"===t.key&&e.handler()},role:"button",style:e.burgerStyles,tabIndex:0},s.a.createElement("div",{style:Object(k.a)(Object(k.a)({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"rotate(".concat(45*(e.isLeft?-1:1),"deg) translate(").concat(e.move*(e.isLeft?-1:1),"px, ").concat(e.move,"px)"):"none")})}),s.a.createElement("div",{style:Object(k.a)(Object(k.a)({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset+e.barHeight+e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"rotate(".concat(45*(e.isLeft?1:-1),"deg) translate(").concat(e.move*(e.isLeft?-1:1),"px, ").concat(-1*e.move,"px)"):"none")})}))}}))},A=b.Fullpage.changeFullpageSlide.bind(null,5);var C=function(){var e=T(Object(o.useState)(!1),2),t=e[0],n=e[1],r=window.innerWidth/70;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{id:"hamburger-button",children:Object(l.jsx)(M,{toggled:t,color:"white",toggle:n,size:r,onToggle:function(){},direction:"right",duration:.6})}),Object(l.jsxs)("div",{id:"hamburger-menu",className:t?"opened":"closed",children:[Object(l.jsxs)("div",{id:"hamburger-links",children:[Object(l.jsx)("a",{href:"https://www.roshan-ai.ir/",className:"hamburger-menu-button",style:{fontSize:"1.3vw",marginLeft:"25px"},children:"\u0631\u0648\u0634\u0646"}),Object(l.jsx)("button",{onClick:A,className:"hamburger-menu-button",id:"clients-button",title:"\u0628\u062e\u0634 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0645\u0627",children:"\u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0645\u0627"}),Object(l.jsx)("a",{href:"https://www.roshan-ai.ir/contact-us",className:"hamburger-menu-button",children:"\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627"}),Object(l.jsx)("a",{href:"https://www.roshan-ai.ir/join-us",className:"hamburger-menu-button",children:"\u0647\u0645\u06a9\u0627\u0631\u06cc \u0628\u0627 \u0645\u0627"})]}),Object(l.jsxs)("div",{id:"hamburger-footer",children:[Object(l.jsx)("a",{href:"https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=salam@roshan-ai.ir",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("p",{id:"email",children:"salam@roshan-ai.ir"})}),Object(l.jsx)("p",{id:"company",className:"comp-temp",children:"\u0634\u0631\u06a9\u062a \u062f\u0627\u0646\u0634 \u0628\u0646\u06cc\u0627\u0646 \xab\u0631\u0627\u0647\u06a9\u0627\u0631 \u067e\u0631\u062f\u0627\u0632\u0634 \u0698\u0631\u0641\xbb"})]})]})]})},F=function(e){return e.shouldRerender&&0===e.scrollQuantity?N.f:1===e.scrollQuantity?N.a:N.c};var R=function(e){Object(o.useEffect)((function(){return window.addEventListener("beforeunload",t),function(){window.removeEventListener("beforeunload",t)}}),[]);var t=function(){window.scrollTo({top:0})};return Object(l.jsxs)(x.a.div,{className:"all",initial:F(e).initial,animate:F(e).animate,transition:F(e).transition,children:[Object(l.jsxs)("p",{children:["\u0645\u0627 \u0645\u0627\u0634\u06cc\u0646 \u0631\u0627 \u0622\u0645\u0648\u0632\u0634 \u0645\u06cc \u200c\u062f\u0647\u06cc\u0645",Object(l.jsx)("br",{}),"\u062a\u0627 \u0645\u0627\u0646\u0646\u062f \u0627\u0646\u0633\u0627\u0646 \u0641\u06a9\u0631 \u06a9\u0646\u062f"]}),Object(l.jsx)("img",{src:y,className:"web-background",alt:""})]})},z=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={isOpen:!1,timesRendered:0},e.toggle=function(){e.setState({isOpen:!e.state.isOpen,timesRendered:e.state.timesRendered+1})},e.reactToToggles=function(){return e.state.isOpen?Object(l.jsxs)("div",{id:"compact-menu",children:[Object(l.jsx)("div",{children:Object(l.jsx)("a",{href:"https://www.roshan-ai.ir/",className:"header-button",children:"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc"})}),Object(l.jsx)(d,{}),Object(l.jsx)(u,{})]}):Object(l.jsx)(R,{scrollQuantity:e.props.scrollQuantity,shouldRerender:0===e.state.timesRendered})},e}return Object(a.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{id:"all",children:[Object(l.jsx)(C,{}),Object(l.jsxs)("div",{className:"header-wrapper",children:[Object(l.jsx)(w,{toggle:this.toggle,isOpen:this.state.isOpen}),this.reactToToggles()]})]})}}]),n}(o.Component);t.default=z}}]);