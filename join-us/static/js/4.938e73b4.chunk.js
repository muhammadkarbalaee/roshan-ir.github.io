/*! For license information please see 4.938e73b4.chunk.js.LICENSE.txt */
(this["webpackJsonpjoin-us"]=this["webpackJsonpjoin-us"]||[]).push([[4],{74:function(e,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n,r=s(0),t=(n=r)&&"object"===typeof n&&"default"in n?n.default:n,o=new(s(75)),a=o.getBrowser(),l=(o.getCPU(),o.getDevice()),d=o.getEngine(),u=o.getOS(),w=o.getUA(),c=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";return e||i},m=function(){return!("undefined"===typeof window||!window.navigator&&!navigator)&&(window.navigator||navigator)},b=function(e){var i=m();return i&&i.platform&&(-1!==i.platform.indexOf(e)||"MacIntel"===i.platform&&i.maxTouchPoints>1&&!window.MSStream)};function f(e){return f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,i){for(var s=0;s<i.length;s++){var n=i[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,i,s){return i in e?Object.defineProperty(e,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[i]=s,e}function g(){return g=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},g.apply(this,arguments)}function v(e,i){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),s.push.apply(s,n)}return s}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function x(e,i){return x=Object.setPrototypeOf||function(e,i){return e.__proto__=i,e},x(e,i)}function O(e,i){if(null==e)return{};var s,n,r=function(e,i){if(null==e)return{};var s,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)s=t[n],i.indexOf(s)>=0||(r[s]=e[s]);return r}(e,i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)s=t[n],i.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var k="mobile",S="tablet",C="smarttv",N="console",F="wearable",A=void 0,P={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},M={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},T={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},V=function(e,i,s,n){return function(e){for(var i=1;i<arguments.length;i++){var s=null!=arguments[i]?arguments[i]:{};i%2?v(s,!0).forEach((function(i){h(e,i,s[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):v(s).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(s,i))}))}return e}({},e,{vendor:c(i.vendor),model:c(i.model),os:c(s.name),osVersion:c(s.version),ua:c(n)})},W=function(e){switch(e){case k:return{isMobile:!0};case S:return{isTablet:!0};case C:return{isSmartTV:!0};case N:return{isConsole:!0};case F:return{isWearable:!0};case A:return{isBrowser:!0};default:return T}}(l.type);var j=function(){return"string"===typeof w&&-1!==w.indexOf("Edg/")},_=function(){return l.type===A},B=function(){return a.name===P.Edge},I=function(){return b("iPad")},L=l.type===C,z=l.type===N,R=l.type===F,q=a.name===P.MobileSafari||I(),U=a.name===P.Chromium,D=function(){switch(l.type){case k:case S:return!0;default:return!1}}()||I(),G=l.type===k,H=l.type===S||I(),Z=_(),Y=_(),$=u.name===M.Android,X=u.name===M.WindowsPhone,J=u.name===M.IOS||I(),K=a.name===P.Chrome,Q=a.name===P.Firefox,ee=a.name===P.Safari||a.name===P.MobileSafari,ie=a.name===P.Opera,se=a.name===P.InternetExplorer||a.name===P.Ie,ne=c(u.version),re=c(u.name),te=c(a.version),oe=c(a.major),ae=c(a.name),le=c(l.vendor),de=c(l.model),ue=c(d.name),we=c(d.version),ce=c(w),me=B()||j(),be=a.name===P.Yandex,fe=c(l.type,"browser"),pe=function(){var e=m();return e&&(/iPad|iPhone|iPod/.test(e.platform)||"MacIntel"===e.platform&&e.maxTouchPoints>1)&&!window.MSStream}(),he=I(),ge=b("iPhone"),ve=b("iPod"),ye=function(){var e=m(),i=e&&e.userAgent&&e.userAgent.toLowerCase();return"string"===typeof i&&/electron/.test(i)}(),xe=j(),Oe=B()&&!j(),Ee=u.name===M.Windows,ke=u.name===M.MAC_OS,Se=a.name===P.MIUI,Ce=a.name===P.SamsungBrowser;i.AndroidView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return $?i?t.createElement(r.Fragment,null,s):t.createElement("div",g({className:n,style:o},a),s):null},i.BrowserTypes=P,i.BrowserView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return Z?i?t.createElement(r.Fragment,null,s):t.createElement("div",g({className:n,style:o},a),s):null},i.ConsoleView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return z?i?t.createElement(r.Fragment,null,s):t.createElement("div",g({className:n,style:o},a),s):null},i.CustomView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,o=e.style,a=e.condition,l=O(e,["renderWithFragment","children","viewClassName","style","condition"]);return a?i?t.createElement(r.Fragment,null,s):t.createElement("div",g({className:n,style:o},l),s):null},i.IEView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return se?i?t.createElement(r.Fragment,null,s):t.createElement("div",g({className:n,style:o},a),s):null},i.IOSView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return J?i?t.createElement(r.Fragment,null,s):t.createElement("div",g({className:n,style:o},a),s):null},i.MobileOnlyView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return G?i?t.createElement(r.Fragment,null,s):t.createElement("div",g({className:n,style:o},a),s):null},i.MobileView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return D?i?t.createElement(r.Fragment,null,s):t.createElement("div",g({className:n,style:o},a),s):null},i.OsTypes=M,i.SmartTVView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return L?i?t.createElement(r.Fragment,null,s):t.createElement("div",g({className:n,style:o},a),s):null},i.TabletView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return H?i?t.createElement(r.Fragment,null,s):t.createElement("div",g({className:n,style:o},a),s):null},i.WearableView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return R?i?t.createElement(r.Fragment,null,s):t.createElement("div",g({className:n,style:o},a),s):null},i.WinPhoneView=function(e){var i=e.renderWithFragment,s=e.children,n=e.viewClassName,o=e.style,a=O(e,["renderWithFragment","children","viewClassName","style"]);return X?i?t.createElement(r.Fragment,null,s):t.createElement("div",g({className:n,style:o},a),s):null},i.browserName=ae,i.browserVersion=oe,i.deviceDetect=function(){var e=W.isBrowser,i=W.isMobile,s=W.isTablet,n=W.isSmartTV,r=W.isConsole,t=W.isWearable;return e?function(e,i,s,n,r){return{isBrowser:e,browserMajorVersion:c(i.major),browserFullVersion:c(i.version),browserName:c(i.name),engineName:c(s.name),engineVersion:c(s.version),osName:c(n.name),osVersion:c(n.version),userAgent:c(r)}}(e,a,d,u,w):n?function(e,i,s,n){return{isSmartTV:e,engineName:c(i.name),engineVersion:c(i.version),osName:c(s.name),osVersion:c(s.version),userAgent:c(n)}}(n,d,u,w):r?function(e,i,s,n){return{isConsole:e,engineName:c(i.name),engineVersion:c(i.version),osName:c(s.name),osVersion:c(s.version),userAgent:c(n)}}(r,d,u,w):i||s?V(W,l,u,w):t?function(e,i,s,n){return{isWearable:e,engineName:c(i.name),engineVersion:c(i.version),osName:c(s.name),osVersion:c(s.version),userAgent:c(n)}}(t,d,u,w):void 0},i.deviceType=fe,i.engineName=ue,i.engineVersion=we,i.fullBrowserVersion=te,i.getUA=ce,i.isAndroid=$,i.isBrowser=Z,i.isChrome=K,i.isChromium=U,i.isConsole=z,i.isDesktop=Y,i.isEdge=me,i.isEdgeChromium=xe,i.isElectron=ye,i.isFirefox=Q,i.isIE=se,i.isIOS=J,i.isIOS13=pe,i.isIPad13=he,i.isIPhone13=ge,i.isIPod13=ve,i.isLegacyEdge=Oe,i.isMIUI=Se,i.isMacOs=ke,i.isMobile=D,i.isMobileOnly=G,i.isMobileSafari=q,i.isOpera=ie,i.isSafari=ee,i.isSamsungBrowser=Ce,i.isSmartTV=L,i.isTablet=H,i.isWearable=R,i.isWinPhone=X,i.isWindows=Ee,i.isYandex=be,i.mobileModel=de,i.mobileVendor=le,i.osName=re,i.osVersion=ne,i.withOrientationChange=function(e){return function(i){function s(e){var i,n,r;return function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,s),n=this,(i=!(r=y(s).call(this,e))||"object"!==typeof r&&"function"!==typeof r?E(n):r).isEventListenerAdded=!1,i.handleOrientationChange=i.handleOrientationChange.bind(E(i)),i.onOrientationChange=i.onOrientationChange.bind(E(i)),i.onPageLoad=i.onPageLoad.bind(E(i)),i.state={isLandscape:!1,isPortrait:!1},i}var n,r,o;return function(e,i){if("function"!==typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(i&&i.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),i&&x(e,i)}(s,i),n=s,(r=[{key:"handleOrientationChange",value:function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var e=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:0===e,isLandscape:90===e})}},{key:"onOrientationChange",value:function(){this.handleOrientationChange()}},{key:"onPageLoad",value:function(){this.handleOrientationChange()}},{key:"componentDidMount",value:function(){void 0!==("undefined"===typeof window?"undefined":f(window))&&D&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onOrientationChange,!1)}},{key:"render",value:function(){return t.createElement(e,g({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))}}])&&p(n.prototype,r),o&&p(n,o),s}(t.Component)}},75:function(e,i,s){var n;!function(r,t){"use strict";var o="function",a="undefined",l="object",d="string",u="model",w="name",c="type",m="vendor",b="version",f="architecture",p="console",h="mobile",g="tablet",v="smarttv",y="wearable",x="embedded",O={extend:function(e,i){var s={};for(var n in e)i[n]&&i[n].length%2===0?s[n]=i[n].concat(e[n]):s[n]=e[n];return s},has:function(e,i){return typeof e===d&&-1!==i.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return typeof e===d?e.replace(/[^\d\.]/g,"").split(".")[0]:t},trim:function(e,i){return e=e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),typeof i===a?e:e.substring(0,255)}},E={rgx:function(e,i){for(var s,n,r,a,d,u,w=0;w<i.length&&!d;){var c=i[w],m=i[w+1];for(s=n=0;s<c.length&&!d;)if(d=c[s++].exec(e))for(r=0;r<m.length;r++)u=d[++n],typeof(a=m[r])===l&&a.length>0?2==a.length?typeof a[1]==o?this[a[0]]=a[1].call(this,u):this[a[0]]=a[1]:3==a.length?typeof a[1]!==o||a[1].exec&&a[1].test?this[a[0]]=u?u.replace(a[1],a[2]):t:this[a[0]]=u?a[1].call(this,u,a[2]):t:4==a.length&&(this[a[0]]=u?a[3].call(this,u.replace(a[1],a[2])):t):this[a]=u||t;w+=2}},str:function(e,i){for(var s in i)if(typeof i[s]===l&&i[s].length>0){for(var n=0;n<i[s].length;n++)if(O.has(i[s][n],e))return"?"===s?t:s}else if(O.has(i[s],e))return"?"===s?t:s;return e}},k={browser:{oldSafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}},oldEdge:{version:{.1:"12.",21:"13.",31:"14.",39:"15.",41:"16.",42:"17.",44:"18."}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},S={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[b,[w,"Chrome"]],[/(?:edge|edgios|edga|edg)\/([\w\.]+)/i],[b,[w,"Edge"]],[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i,/(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],[w,b],[/opios[\/\s]+([\w\.]+)/i],[b,[w,"Opera Mini"]],[/\sopr\/([\w\.]+)/i],[b,[w,"Opera"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,/(ba?idubrowser)[\/\s]?([\w\.]+)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,/(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,/(weibo)__([\d\.]+)/i],[w,b],[/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[b,[w,"UCBrowser"]],[/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],[b,[w,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[b,[w,"WeChat"]],[/konqueror\/([\w\.]+)/i],[b,[w,"Konqueror"]],[/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],[b,[w,"IE"]],[/yabrowser\/([\w\.]+)/i],[b,[w,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[w,/(.+)/,"$1 Secure Browser"],b],[/focus\/([\w\.]+)/i],[b,[w,"Firefox Focus"]],[/opt\/([\w\.]+)/i],[b,[w,"Opera Touch"]],[/coc_coc_browser\/([\w\.]+)/i],[b,[w,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[b,[w,"Dolphin"]],[/coast\/([\w\.]+)/i],[b,[w,"Opera Coast"]],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[b,[w,"MIUI Browser"]],[/fxios\/([\w\.-]+)/i],[b,[w,"Firefox"]],[/(qihu|qhbrowser|qihoobrowser|360browser)/i],[[w,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[w,/(.+)/,"$1 Browser"],b],[/(comodo_dragon)\/([\w\.]+)/i],[[w,/_/g," "],b],[/\s(electron)\/([\w\.]+)\ssafari/i,/(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],[w,b],[/(MetaSr)[\/\s]?([\w\.]+)/i,/(LBBROWSER)/i],[w],[/;fbav\/([\w\.]+);/i],[b,[w,"Facebook"]],[/FBAN\/FBIOS|FB_IAB\/FB4A/i],[[w,"Facebook"]],[/safari\s(line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/\s]([\w\.-]+)/i],[w,b],[/\bgsa\/([\w\.]+)\s.*safari\//i],[b,[w,"GSA"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[b,[w,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[w,"Chrome WebView"],b],[/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],[b,[w,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[w,b],[/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],[b,[w,"Mobile Safari"]],[/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],[b,w],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[w,[b,E.str,k.browser.oldSafari.version]],[/(webkit|khtml)\/([\w\.]+)/i],[w,b],[/(navigator|netscape)\/([\w\.-]+)/i],[[w,"Netscape"],b],[/ile\svr;\srv:([\w\.]+)\).+firefox/i],[b,[w,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,/(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[w,b]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[[f,"amd64"]],[/(ia32(?=;))/i],[[f,O.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[f,"ia32"]],[/\b(aarch64|armv?8e?l?)\b/i],[[f,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[f,"armhf"]],[/windows\s(ce|mobile);\sppc;/i],[[f,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[[f,/ower/,"",O.lowerize]],[/(sun4\w)[;\)]/i],[[f,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[f,O.lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],[u,[m,"Samsung"],[c,g]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i,/\ssamsung[\s-]([\w-]+)/i,/sec-(sgh\w+)/i],[u,[m,"Samsung"],[c,h]],[/\((ip(?:hone|od)[\s\w]*);/i],[u,[m,"Apple"],[c,h]],[/\((ipad);[\w\s\),;-]+apple/i,/applecoremedia\/[\w\.]+\s\((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[m,"Apple"],[c,g]],[/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],[u,[m,"Huawei"],[c,g]],[/d\/huawei([\w\s-]+)[;\)]/i,/\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,/\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],[u,[m,"Huawei"],[c,h]],[/\b(poco[\s\w]+)(?:\sbuild|\))/i,/\b;\s(\w+)\sbuild\/hm\1/i,/\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,/\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,/\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],[[u,/_/g," "],[m,"Xiaomi"],[c,h]],[/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],[[u,/_/g," "],[m,"Xiaomi"],[c,g]],[/;\s(\w+)\sbuild.+\soppo/i,/\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],[u,[m,"OPPO"],[c,h]],[/\svivo\s(\w+)(?:\sbuild|\))/i,/\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],[u,[m,"Vivo"],[c,h]],[/\s(rmx[12]\d{3})(?:\sbuild|;)/i],[u,[m,"Realme"],[c,h]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,/\smot(?:orola)?[\s-](\w*)/i,/((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],[u,[m,"Motorola"],[c,h]],[/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[u,[m,"Motorola"],[c,g]],[/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],[u,[m,"LG"],[c,g]],[/(lm-?f100[nv]?|nexus\s[45])/i,/lg[e;\s\/-]+((?!browser|netcast)\w+)/i,/\blg(\-?[\d\w]+)\sbuild/i],[u,[m,"LG"],[c,h]],[/(ideatab[\w\-\s]+)/i,/lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],[u,[m,"Lenovo"],[c,g]],[/(?:maemo|nokia).*(n900|lumia\s\d+)/i,/nokia[\s_-]?([\w\.-]*)/i],[[u,/_/g," "],[m,"Nokia"],[c,h]],[/droid.+;\s(pixel\sc)[\s)]/i],[u,[m,"Google"],[c,g]],[/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],[u,[m,"Google"],[c,h]],[/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[m,"Sony"],[c,h]],[/sony\stablet\s[ps]\sbuild\//i,/(?:sony)?sgp\w+(?:\sbuild\/|\))/i],[[u,"Xperia Tablet"],[m,"Sony"],[c,g]],[/\s(kb2005|in20[12]5|be20[12][59])\b/i,/\ba000(1)\sbuild/i,/\boneplus\s(a\d{4})[\s)]/i],[u,[m,"OnePlus"],[c,h]],[/(alexa)webm/i,/(kf[a-z]{2}wi)(\sbuild\/|\))/i,/(kf[a-z]+)(\sbuild\/|\)).+silk\//i],[u,[m,"Amazon"],[c,g]],[/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],[[u,"Fire Phone"],[m,"Amazon"],[c,h]],[/\((playbook);[\w\s\),;-]+(rim)/i],[u,m,[c,g]],[/((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10;\s(\w+)/i],[u,[m,"BlackBerry"],[c,h]],[/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],[u,[m,"ASUS"],[c,g]],[/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],[u,[m,"ASUS"],[c,h]],[/(nexus\s9)/i],[u,[m,"HTC"],[c,g]],[/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[m,[u,/_/g," "],[c,h]],[/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],[u,[m,"Acer"],[c,g]],[/droid.+;\s(m[1-5]\snote)\sbuild/i,/\bmz-([\w-]{2,})/i],[u,[m,"Meizu"],[c,h]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i,/(microsoft);\s(lumia[\s\w]+)/i,/(lenovo)[_\s-]?([\w-]+)/i,/linux;.+(jolla);/i,/droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[m,u,[c,h]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i,/[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,/[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,/\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,/\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],[m,u,[c,g]],[/\s(surface\sduo)\s/i],[u,[m,"Microsoft"],[c,g]],[/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],[u,[m,"Fairphone"],[c,h]],[/\s(u304aa)\sbuild/i],[u,[m,"AT&T"],[c,h]],[/sie-(\w*)/i],[u,[m,"Siemens"],[c,h]],[/[;\/]\s?(rct\w+)\sbuild/i],[u,[m,"RCA"],[c,g]],[/[;\/\s](venue[\d\s]{2,7})\sbuild/i],[u,[m,"Dell"],[c,g]],[/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],[u,[m,"Verizon"],[c,g]],[/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],[u,[m,"Barnes & Noble"],[c,g]],[/[;\/]\s(tm\d{3}\w+)\sbuild/i],[u,[m,"NuVision"],[c,g]],[/;\s(k88)\sbuild/i],[u,[m,"ZTE"],[c,g]],[/;\s(nx\d{3}j)\sbuild/i],[u,[m,"ZTE"],[c,h]],[/[;\/]\s?(gen\d{3})\sbuild.*49h/i],[u,[m,"Swiss"],[c,h]],[/[;\/]\s?(zur\d{3})\sbuild/i],[u,[m,"Swiss"],[c,g]],[/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],[u,[m,"Zeki"],[c,g]],[/[;\/]\s([yr]\d{2})\sbuild/i,/[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],[[m,"Dragon Touch"],u,[c,g]],[/[;\/]\s?(ns-?\w{0,9})\sbuild/i],[u,[m,"Insignia"],[c,g]],[/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],[u,[m,"NextBook"],[c,g]],[/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],[[m,"Voice"],u,[c,h]],[/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],[[m,"LvTel"],u,[c,h]],[/;\s(ph-1)\s/i],[u,[m,"Essential"],[c,h]],[/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],[u,[m,"Envizen"],[c,g]],[/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],[u,[m,"MachSpeed"],[c,g]],[/[;\/]\s?tu_(1491)\sbuild/i],[u,[m,"Rotor"],[c,g]],[/(shield[\w\s]+)\sbuild/i],[u,[m,"Nvidia"],[c,g]],[/(sprint)\s(\w+)/i],[m,u,[c,h]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[m,"Microsoft"],[c,h]],[/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[u,[m,"Zebra"],[c,g]],[/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[m,"Zebra"],[c,h]],[/\s(ouya)\s/i,/(nintendo)\s([wids3utch]+)/i],[m,u,[c,p]],[/droid.+;\s(shield)\sbuild/i],[u,[m,"Nvidia"],[c,p]],[/(playstation\s[345portablevi]+)/i],[u,[m,"Sony"],[c,p]],[/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],[u,[m,"Microsoft"],[c,p]],[/smart-tv.+(samsung)/i],[m,[c,v]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[m,"Samsung"],[c,v]],[/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],[[m,"LG"],[c,v]],[/(apple)\s?tv/i],[m,[u,"Apple TV"],[c,v]],[/crkey/i],[[u,"Chromecast"],[m,"Google"],[c,v]],[/droid.+aft([\w])(\sbuild\/|\))/i],[u,[m,"Amazon"],[c,v]],[/\(dtv[\);].+(aquos)/i],[u,[m,"Sharp"],[c,v]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[m,O.trim],[u,O.trim],[c,v]],[/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],[[c,v]],[/((pebble))app\/[\d\.]+\s/i],[m,u,[c,y]],[/droid.+;\s(glass)\s\d/i],[u,[m,"Google"],[c,y]],[/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],[u,[m,"Zebra"],[c,y]],[/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],[m,[c,x]],[/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],[u,[c,h]],[/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],[u,[c,g]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[c,O.lowerize]],[/(android[\w\.\s\-]{0,9});.+build/i],[u,[m,"Generic"]],[/(phone)/i],[[c,h]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[b,[w,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[b,[w,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[w,b],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[b,w]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[w,b],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],[w,[b,E.str,k.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[w,"Windows"],[b,E.str,k.os.windows.version]],[/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,/cfnetwork\/.+darwin/i],[[b,/_/g,"."],[w,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],[[w,"Mac OS"],[b,/_/g,"."]],[/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/\s]([\w\.]+)/i,/\((series40);/i],[w,b],[/\(bb(10);/i],[b,[w,"BlackBerry"]],[/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],[b,[w,"Symbian"]],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[w,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[b,[w,"webOS"]],[/crkey\/([\d\.]+)/i],[b,[w,"Chromecast"]],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[w,"Chromium OS"],b],[/(nintendo|playstation)\s([wids345portablevuch]+)/i,/(xbox);\s+xbox\s([^\);]+)/i,/(mint)[\/\s\(\)]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i,/\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku)\s(\w+)/i],[w,b],[/(sunos)\s?([\w\.\d]*)/i],[[w,"Solaris"],b],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,/(unix)\s?([\w\.]*)/i],[w,b]]},C=function e(i,s){if("object"===typeof i&&(s=i,i=t),!(this instanceof e))return new e(i,s).getResult();var n=i||("undefined"!==typeof r&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:""),o=s?O.extend(S,s):S;return this.getBrowser=function(){var e={name:t,version:t};return E.rgx.call(e,n,o.browser),e.major=O.major(e.version),e},this.getCPU=function(){var e={architecture:t};return E.rgx.call(e,n,o.cpu),e},this.getDevice=function(){var e={vendor:t,model:t,type:t};return E.rgx.call(e,n,o.device),e},this.getEngine=function(){var e={name:t,version:t};return E.rgx.call(e,n,o.engine),e},this.getOS=function(){var e={name:t,version:t};return E.rgx.call(e,n,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return n},this.setUA=function(e){return n=typeof e===d&&e.length>255?O.trim(e,255):e,this},this.setUA(n),this};C.VERSION="0.7.28",C.BROWSER={NAME:w,MAJOR:"major",VERSION:b},C.CPU={ARCHITECTURE:f},C.DEVICE={MODEL:u,VENDOR:m,TYPE:c,CONSOLE:p,MOBILE:h,SMARTTV:v,TABLET:g,WEARABLE:y,EMBEDDED:x},C.ENGINE={NAME:w,VERSION:b},C.OS={NAME:w,VERSION:b},typeof i!==a?(typeof e!==a&&e.exports&&(i=e.exports=C),i.UAParser=C):(n=function(){return C}.call(i,s,i,e))===t||(e.exports=n);var N="undefined"!==typeof r&&(r.jQuery||r.Zepto);if(N&&!N.ua){var F=new C;N.ua=F.getResult(),N.ua.get=function(){return F.getUA()},N.ua.set=function(e){F.setUA(e);var i=F.getResult();for(var s in i)N.ua[s]=i[s]}}}("object"===typeof window?window:this)}}]);
//# sourceMappingURL=4.938e73b4.chunk.js.map