(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c8f67c6"],{"159b":function(t,n,e){var r=e("da84"),a=e("fdbc"),i=e("17c2"),o=e("9112");for(var c in a){var s=r[c],f=s&&s.prototype;if(f&&f.forEach!==i)try{o(f,"forEach",i)}catch(l){f.forEach=i}}},"17c2":function(t,n,e){"use strict";var r=e("b727").forEach,a=e("b301");t.exports=a("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},2710:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Header"),e("router-view")],1)},a=[],i=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"app-header header-shadow"},[r("div",{staticClass:"app-header__content pl-5"},[r("div",{staticClass:"app-header-left"},[r("img",{staticStyle:{width:"200px"},attrs:{src:e("cf05"),alt:""}})]),r("div",{staticClass:"app-header-right mr-5"},[r("button",{staticStyle:{"margin-right":"50px"},attrs:{type:"btn btn-sm"},on:{click:t.goDash}},[t._v("DASHBOARD")]),t.isAdmin?r("button",{staticStyle:{"margin-right":"50px"},attrs:{type:"btn btn-sm"},on:{click:t.goFuelPrice}},[t._v("FUEL PRICE")]):t._e(),r("button",{staticStyle:{"margin-right":"50px"},attrs:{type:"btn btn-sm"},on:{click:t.goReport}},[t._v("REFUEL REPORT")]),r("button",{attrs:{type:"btn btn-sm"},on:{click:t.logout}},[t._v("LOGOUT")])])]),r("div",{staticClass:"app-header__mobile-menu"},[r("div",[r("button",{staticClass:"hamburger close-sidebar-btn hamburger--elastic",class:{"is-active":t.isOpen},attrs:{type:"button"},on:{click:function(n){return t.toggleMobile("closed-sidebar-open")}}},[t._m(0)])])]),r("div",{staticClass:"app-header__menu"},[r("span",[r("b-button",{staticClass:"btn-icon btn-icon-only",class:{active:t.isOpenMobileMenu},attrs:{variant:"primary",size:"sm"},on:{click:function(n){return t.toggleMobile2("header-menu-open")}}},[r("div",{staticClass:"btn-icon-wrapper"},[r("font-awesome-icon",{attrs:{icon:"ellipsis-v"}})],1)])],1)])])},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"hamburger-box"},[e("span",{staticClass:"hamburger-inner"})])}],c=(e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("159b"),e("2fa7")),s=e("ecee"),f={prefix:"fas",iconName:"ellipsis-v",icon:[192,512,[],"f142","M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"]},l=e("ad3d"),u=e("2f62"),p=e("be16");function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(e,!0).forEach((function(n){Object(c["a"])(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}s["c"].add(f);var h={components:{"font-awesome-icon":l["a"]},data:function(){return{isOpen:!1,isOpenMobileMenu:!1}},created:function(){},mounted:function(){var t=this;p["a"].$on("LOG_OUT",(function(){t.logout()}))},computed:m({},Object(u["b"])("loginInfo",["isAdmin"])),methods:m({},Object(u["c"])("loginInfo",["CLEAR_LOGIN_DATA"]),{logout:function(){this.CLEAR_LOGIN_DATA(),this.$router.push({name:"login"})},toggleMobile:function(t){var n=document.body;this.isOpen=!this.isOpen,this.isOpen?n.classList.add(t):n.classList.remove(t)},toggleMobile2:function(t){var n=document.body;this.isOpenMobileMenu=!this.isOpenMobileMenu,this.isOpenMobileMenu?n.classList.add(t):n.classList.remove(t)},goReport:function(){this.$router.push({name:"report"})},goDash:function(){this.$router.push({name:"dashboard"})},goFuelPrice:function(){this.$router.push({name:"fuelPrice"})}})},g=h,y=e("2877"),b=Object(y["a"])(g,i,o,!1,null,null,null),v=b.exports,w={components:{Header:v}},x=w,k=Object(y["a"])(x,r,a,!1,null,null,null);n["default"]=k.exports},"2fa7":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e("85d3"),a=e.n(r);function i(t,n,e){return n in t?a()(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},"3e476":function(t,n,e){var r=e("a5eb"),a=e("c1b2"),i=e("4180");r({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperty:i.f})},4160:function(t,n,e){"use strict";var r=e("23e7"),a=e("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"85d3":function(t,n,e){t.exports=e("9a13")},"9a13":function(t,n,e){t.exports=e("a38c")},a38c:function(t,n,e){e("3e476");var r=e("764b"),a=r.Object,i=t.exports=function(t,n,e){return a.defineProperty(t,n,e)};a.defineProperty.sham&&(i.sham=!0)},ad3d:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return k}));var r=e("ecee"),a="undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{};function i(t,n){return n={exports:{}},t(n,n.exports),n.exports}var o=i((function(t){(function(n){var e=function(t,n,r){if(!f(n)||u(n)||p(n)||d(n)||s(n))return n;var a,i=0,o=0;if(l(n))for(a=[],o=n.length;i<o;i++)a.push(e(t,n[i],r));else for(var c in a={},n)Object.prototype.hasOwnProperty.call(n,c)&&(a[t(c,r)]=e(t,n[c],r));return a},r=function(t,n){n=n||{};var e=n.separator||"_",r=n.split||/(?=[A-Z])/;return t.split(r).join(e)},a=function(t){return m(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,n){return n?n.toUpperCase():""})),t.substr(0,1).toLowerCase()+t.substr(1))},i=function(t){var n=a(t);return n.substr(0,1).toUpperCase()+n.substr(1)},o=function(t,n){return r(t,n).toLowerCase()},c=Object.prototype.toString,s=function(t){return"function"===typeof t},f=function(t){return t===Object(t)},l=function(t){return"[object Array]"==c.call(t)},u=function(t){return"[object Date]"==c.call(t)},p=function(t){return"[object RegExp]"==c.call(t)},d=function(t){return"[object Boolean]"==c.call(t)},m=function(t){return t-=0,t===t},h=function(t,n){var e=n&&"process"in n?n.process:n;return"function"!==typeof e?t:function(n,r){return e(n,t,r)}},g={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(t,n){return e(h(a,n),t)},decamelizeKeys:function(t,n){return e(h(o,n),t,n)},pascalizeKeys:function(t,n){return e(h(i,n),t)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=g:n.humps=g})(a)})),c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t},f=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},l=function(t,n){var e={};for(var r in t)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},u=function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)};function p(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,n){var e=n.indexOf(":"),r=o.camelize(n.slice(0,e)),a=n.slice(e+1).trim();return t[r]=a,t}),{})}function d(t){return t.split(/\s+/).reduce((function(t,n){return t[n]=!0,t}),{})}function m(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.reduce((function(t,n){return Array.isArray(n)?t=t.concat(n):t.push(n),t}),[])}function h(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=(n.children||[]).map(h.bind(null,t)),i=Object.keys(n.attributes||{}).reduce((function(t,e){var r=n.attributes[e];switch(e){case"class":t["class"]=d(r);break;case"style":t["style"]=p(r);break;default:t.attrs[e]=r}return t}),{class:{},style:{},attrs:{}}),o=r.class,c=void 0===o?{}:o,s=r.style,u=void 0===s?{}:s,g=r.attrs,y=void 0===g?{}:g,b=l(r,["class","style","attrs"]);return"string"===typeof n?n:t(n.tag,f({class:m(i.class,c),style:f({},i.style,u),attrs:f({},i.attrs,y)},b,{props:e}),a)}var g=!1;try{g=!0}catch(O){}function y(){var t;!g&&console&&"function"===typeof console.error&&(t=console).error.apply(t,arguments)}function b(t,n){return Array.isArray(n)&&n.length>0||!Array.isArray(n)&&n?s({},t,n):{}}function v(t){var n,e=(n={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-flip-horizontal":"horizontal"===t.flip||"both"===t.flip,"fa-flip-vertical":"vertical"===t.flip||"both"===t.flip},s(n,"fa-"+t.size,null!==t.size),s(n,"fa-rotate-"+t.rotation,null!==t.rotation),s(n,"fa-pull-"+t.pull,null!==t.pull),s(n,"fa-swap-opacity",t.swapOpacity),n);return Object.keys(e).map((function(t){return e[t]?t:null})).filter((function(t){return t}))}function w(t,n){var e=0===(t||"").length?[]:[t];return e.concat(n).join(" ")}function x(t){return null===t?null:"object"===("undefined"===typeof t?"undefined":c(t))&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"===typeof t?{prefix:"fas",iconName:t}:void 0}var k={name:"FontAwesomeIcon",functional:!0,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null}},render:function(t,n){var e=n.props,a=e.icon,i=e.mask,o=e.symbol,c=e.title,s=x(a),l=b("classes",v(e)),u=b("transform","string"===typeof e.transform?r["d"].transform(e.transform):e.transform),p=b("mask",x(i)),d=Object(r["b"])(s,f({},l,u,p,{symbol:o,title:c}));if(!d)return y("Could not find one or more icon(s)",s,p);var m=d.abstract,g=h.bind(null,t);return g(m[0],{},n.data)}};Boolean}).call(this,e("c8ba"))},be16:function(t,n,e){"use strict";var r=e("2b0e"),a=new r["default"];n["a"]=a},cf05:function(t,n,e){t.exports=e.p+"img/logo.14251217.png"},dbb4:function(t,n,e){var r=e("23e7"),a=e("83ab"),i=e("56ef"),o=e("fc6a"),c=e("06cf"),s=e("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var n,e,r=o(t),a=c.f,f=i(r),l={},u=0;while(f.length>u)e=a(r,n=f[u++]),void 0!==e&&s(l,n,e);return l}})},e439:function(t,n,e){var r=e("23e7"),a=e("d039"),i=e("fc6a"),o=e("06cf").f,c=e("83ab"),s=a((function(){o(1)})),f=!c||s;r({target:"Object",stat:!0,forced:f,sham:!c},{getOwnPropertyDescriptor:function(t,n){return o(i(t),n)}})},ecee:function(t,n,e){"use strict";(function(t){function r(t){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){c(t,n,e[n])}))}return t}function f(t,n){return p(t)||m(t,n)||g()}function l(t){return u(t)||d(t)||h()}function u(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}function p(t){if(Array.isArray(t))return t}function d(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function m(t,n){var e=[],r=!0,a=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0)if(e.push(o.value),n&&e.length===n)break}catch(s){a=!0,i=s}finally{try{r||null==c["return"]||c["return"]()}finally{if(a)throw i}}return e}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function g(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}e.d(n,"b",(function(){return fn})),e.d(n,"a",(function(){return W})),e.d(n,"e",(function(){return ln})),e.d(n,"c",(function(){return on})),e.d(n,"d",(function(){return sn}));var y=function(){},b={},v={},w={mark:y,measure:y};try{"undefined"!==typeof window&&(b=window),"undefined"!==typeof document&&(v=document),"undefined"!==typeof MutationObserver&&MutationObserver,"undefined"!==typeof performance&&(w=performance)}catch(un){}var x=b.navigator||{},k=x.userAgent,O=void 0===k?"":k,z=b,j=v,A=w,P=(z.document,!!j.documentElement&&!!j.head&&"function"===typeof j.addEventListener&&"function"===typeof j.createElement),M=~O.indexOf("MSIE")||~O.indexOf("Trident/"),_="___FONT_AWESOME___",C=16,E="fa",S="svg-inline--fa",L="data-fa-i2svg",I=(function(){try{}catch(un){return!1}}(),[1,2,3,4,5,6,7,8,9,10]),N=I.concat([11,12,13,14,15,16,17,18,19,20]),R={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},T=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",R.GROUP,R.SWAP_OPACITY,R.PRIMARY,R.SECONDARY].concat(I.map((function(t){return"".concat(t,"x")}))).concat(N.map((function(t){return"w-".concat(t)}))),z.FontAwesomeConfig||{});function D(t){var n=j.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function B(t){return""===t||"false"!==t&&("true"===t||t)}if(j&&"function"===typeof j.querySelector){var Y=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Y.forEach((function(t){var n=f(t,2),e=n[0],r=n[1],a=B(D(e));void 0!==a&&null!==a&&(T[r]=a)}))}var U={familyPrefix:E,replacementClass:S,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},X=s({},U,T);X.autoReplaceSvg||(X.observeMutations=!1);var W=s({},X);z.FontAwesomeConfig=W;var F=z||{};F[_]||(F[_]={}),F[_].styles||(F[_].styles={}),F[_].hooks||(F[_].hooks={}),F[_].shims||(F[_].shims=[]);var H=F[_],G=[],$=function t(){j.removeEventListener("DOMContentLoaded",t),K=1,G.map((function(t){return t()}))},K=!1;P&&(K=(j.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(j.readyState),K||j.addEventListener("DOMContentLoaded",$));var q,V="pending",J="settled",Z="fulfilled",Q="rejected",tt=function(){},nt="undefined"!==typeof t&&"undefined"!==typeof t.process&&"function"===typeof t.process.emit,et="undefined"===typeof setImmediate?setTimeout:setImmediate,rt=[];function at(){for(var t=0;t<rt.length;t++)rt[t][0](rt[t][1]);rt=[],q=!1}function it(t,n){rt.push([t,n]),q||(q=!0,et(at,0))}function ot(t,n){function e(t){ft(n,t)}function r(t){ut(n,t)}try{t(e,r)}catch(un){r(un)}}function ct(t){var n=t.owner,e=n._state,r=n._data,a=t[e],i=t.then;if("function"===typeof a){e=Z;try{r=a(r)}catch(un){ut(i,un)}}st(i,r)||(e===Z&&ft(i,r),e===Q&&ut(i,r))}function st(t,n){var e;try{if(t===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"===typeof n||"object"===r(n))){var a=n.then;if("function"===typeof a)return a.call(n,(function(r){e||(e=!0,n===r?lt(t,r):ft(t,r))}),(function(n){e||(e=!0,ut(t,n))})),!0}}catch(un){return e||ut(t,un),!0}return!1}function ft(t,n){t!==n&&st(t,n)||lt(t,n)}function lt(t,n){t._state===V&&(t._state=J,t._data=n,it(dt,t))}function ut(t,n){t._state===V&&(t._state=J,t._data=n,it(mt,t))}function pt(t){t._then=t._then.forEach(ct)}function dt(t){t._state=Z,pt(t)}function mt(n){n._state=Q,pt(n),!n._handled&&nt&&t.process.emit("unhandledRejection",n._data,n)}function ht(n){t.process.emit("rejectionHandled",n)}function gt(t){if("function"!==typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof gt===!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],ot(t,this)}gt.prototype={constructor:gt,_state:V,_then:null,_data:void 0,_handled:!1,then:function(t,n){var e={owner:this,then:new this.constructor(tt),fulfilled:t,rejected:n};return!n&&!t||this._handled||(this._handled=!0,this._state===Q&&nt&&it(ht,this)),this._state===Z||this._state===Q?it(ct,e):this._then.push(e),e.then},catch:function(t){return this.then(null,t)}},gt.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new gt((function(n,e){var r=[],a=0;function i(t){return a++,function(e){r[t]=e,--a||n(r)}}for(var o,c=0;c<t.length;c++)o=t[c],o&&"function"===typeof o.then?o.then(i(c),e):r[c]=o;a||n(r)}))},gt.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new gt((function(n,e){for(var r,a=0;a<t.length;a++)r=t[a],r&&"function"===typeof r.then?r.then(n,e):n(r)}))},gt.resolve=function(t){return t&&"object"===r(t)&&t.constructor===gt?t:new gt((function(n){n(t)}))},gt.reject=function(t){return new gt((function(n,e){e(t)}))};var yt=C,bt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vt(t){if(t&&P){var n=j.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=j.head.childNodes,r=null,a=e.length-1;a>-1;a--){var i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return j.head.insertBefore(n,r),t}}var wt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xt(){var t=12,n="";while(t-- >0)n+=wt[62*Math.random()|0];return n}function kt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ot(t){return Object.keys(t||{}).reduce((function(n,e){return n+"".concat(e,'="').concat(kt(t[e]),'" ')}),"").trim()}function zt(t){return Object.keys(t||{}).reduce((function(n,e){return n+"".concat(e,": ").concat(t[e],";")}),"")}function jt(t){return t.size!==bt.size||t.x!==bt.x||t.y!==bt.y||t.rotate!==bt.rotate||t.flipX||t.flipY}function At(t){var n=t.transform,e=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*n.x,", ").concat(32*n.y,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(c)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:s,path:f}}function Pt(t){var n=t.transform,e=t.width,r=void 0===e?C:e,a=t.height,i=void 0===a?C:a,o=t.startCentered,c=void 0!==o&&o,s="";return s+=c&&M?"translate(".concat(n.x/yt-r/2,"em, ").concat(n.y/yt-i/2,"em) "):c?"translate(calc(-50% + ".concat(n.x/yt,"em), calc(-50% + ").concat(n.y/yt,"em)) "):"translate(".concat(n.x/yt,"em, ").concat(n.y/yt,"em) "),s+="scale(".concat(n.size/yt*(n.flipX?-1:1),", ").concat(n.size/yt*(n.flipY?-1:1),") "),s+="rotate(".concat(n.rotate,"deg) "),s}var Mt={x:0,y:0,width:"100%",height:"100%"};function _t(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Ct(t){return"g"===t.tag?t.children:[t]}function Et(t){var n=t.children,e=t.attributes,r=t.main,a=t.mask,i=t.transform,o=r.width,c=r.icon,f=a.width,l=a.icon,u=At({transform:i,containerWidth:f,iconWidth:o}),p={tag:"rect",attributes:s({},Mt,{fill:"white"})},d=c.children?{children:c.children.map(_t)}:{},m={tag:"g",attributes:s({},u.inner),children:[_t(s({tag:c.tag,attributes:s({},c.attributes,u.path)},d))]},h={tag:"g",attributes:s({},u.outer),children:[m]},g="mask-".concat(xt()),y="clip-".concat(xt()),b={tag:"mask",attributes:s({},Mt,{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,h]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Ct(l)},b]};return n.push(v,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(g,")")},Mt)}),{children:n,attributes:e}}function St(t){var n=t.children,e=t.attributes,r=t.main,a=t.transform,i=t.styles,o=zt(i);if(o.length>0&&(e["style"]=o),jt(a)){var c=At({transform:a,containerWidth:r.width,iconWidth:r.width});n.push({tag:"g",attributes:s({},c.outer),children:[{tag:"g",attributes:s({},c.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:s({},r.icon.attributes,c.path)}]}]})}else n.push(r.icon);return{children:n,attributes:e}}function Lt(t){var n=t.children,e=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(jt(o)&&e.found&&!r.found){var c=e.width,f=e.height,l={x:c/f/2,y:.5};a["style"]=zt(s({},i,{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:n}]}function It(t){var n=t.prefix,e=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=!0===i?"".concat(n,"-").concat(W.familyPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s({},a,{id:o}),children:r}]}]}function Nt(t){var n=t.icons,e=n.main,r=n.mask,a=t.prefix,i=t.iconName,o=t.transform,c=t.symbol,f=t.title,l=t.extra,u=t.watchable,p=void 0!==u&&u,d=r.found?r:e,m=d.width,h=d.height,g="fa-w-".concat(Math.ceil(m/h*16)),y=[W.replacementClass,i?"".concat(W.familyPrefix,"-").concat(i):"",g].filter((function(t){return-1===l.classes.indexOf(t)})).concat(l.classes).join(" "),b={children:[],attributes:s({},l.attributes,{"data-prefix":a,"data-icon":i,class:y,role:l.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(h)})};p&&(b.attributes[L]=""),f&&b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(xt())},children:[f]});var v=s({},b,{prefix:a,iconName:i,main:e,mask:r,transform:o,symbol:c,styles:l.styles}),w=r.found&&e.found?Et(v):St(v),x=w.children,k=w.attributes;return v.children=x,v.attributes=k,c?It(v):Lt(v)}function Rt(t){var n=t.content,e=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,c=t.watchable,f=void 0!==c&&c,l=s({},o.attributes,i?{title:i}:{},{class:o.classes.join(" ")});f&&(l[L]="");var u=s({},o.styles);jt(a)&&(u["transform"]=Pt({transform:a,startCentered:!0,width:e,height:r}),u["-webkit-transform"]=u["transform"]);var p=zt(u);p.length>0&&(l["style"]=p);var d=[];return d.push({tag:"span",attributes:l,children:[n]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}var Tt=function(){},Dt=(W.measurePerformance&&A&&A.mark&&A.measure,function(t,n){return function(e,r,a,i){return t.call(n,e,r,a,i)}}),Bt=function(t,n,e,r){var a,i,o,c=Object.keys(t),s=c.length,f=void 0!==r?Dt(n,r):n;for(void 0===e?(a=1,o=t[c[0]]):(a=0,o=e);a<s;a++)i=c[a],o=f(o,t[i],i,t);return o};function Yt(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e.skipHooks,a=void 0!==r&&r,i=Object.keys(n).reduce((function(t,e){var r=n[e],a=!!r.icon;return a?t[r.iconName]=r.icon:t[e]=r,t}),{});"function"!==typeof H.hooks.addPack||a?H.styles[t]=s({},H.styles[t]||{},i):H.hooks.addPack(t,i),"fas"===t&&Yt("fa",n)}var Ut=H.styles,Xt=H.shims,Wt=function(){var t=function(t){return Bt(Ut,(function(n,e,r){return n[r]=Bt(e,t,{}),n}),{})};t((function(t,n,e){return n[3]&&(t[n[3]]=e),t})),t((function(t,n,e){var r=n[2];return t[e]=e,r.forEach((function(n){t[n]=e})),t}));var n="far"in Ut;Bt(Xt,(function(t,e){var r=e[0],a=e[1],i=e[2];return"far"!==a||n||(a="fas"),t[r]={prefix:a,iconName:i},t}),{})};Wt();H.styles;function Ft(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}function Ht(t){var n=t.tag,e=t.attributes,r=void 0===e?{}:e,a=t.children,i=void 0===a?[]:a;return"string"===typeof t?kt(t):"<".concat(n," ").concat(Ot(r),">").concat(i.map(Ht).join(""),"</").concat(n,">")}var Gt=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce((function(t,n){var e=n.toLowerCase().split("-"),r=e[0],a=e.slice(1).join("-");if(r&&"h"===a)return t.flipX=!0,t;if(r&&"v"===a)return t.flipY=!0,t;if(a=parseFloat(a),isNaN(a))return t;switch(r){case"grow":t.size=t.size+a;break;case"shrink":t.size=t.size-a;break;case"left":t.x=t.x-a;break;case"right":t.x=t.x+a;break;case"up":t.y=t.y-a;break;case"down":t.y=t.y+a;break;case"rotate":t.rotate=t.rotate+a;break}return t}),n):n};function $t(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}$t.prototype=Object.create(Error.prototype),$t.prototype.constructor=$t;var Kt={fill:"currentColor"},qt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},Vt=(s({},Kt,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),s({},qt,{attributeName:"opacity"}));s({},Kt,{cx:"256",cy:"364",r:"28"}),s({},qt,{attributeName:"r",values:"28;14;28;28;14;28;"}),s({},Vt,{values:"1;0;1;1;0;1;"}),s({},Kt,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),s({},Vt,{values:"1;0;0;0;0;1;"}),s({},Kt,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),s({},Vt,{values:"0;0;1;1;0;0;"}),H.styles;function Jt(t){var n=t[0],e=t[1],r=t.slice(4),a=f(r,1),i=a[0],o=null;return o=Array.isArray(i)?{tag:"g",attributes:{class:"".concat(W.familyPrefix,"-").concat(R.GROUP)},children:[{tag:"path",attributes:{class:"".concat(W.familyPrefix,"-").concat(R.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(W.familyPrefix,"-").concat(R.PRIMARY),fill:"currentColor",d:i[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:n,height:e,icon:o}}H.styles;var Zt='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';function Qt(){var t=E,n=S,e=W.familyPrefix,r=W.replacementClass,a=Zt;if(e!==t||r!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(n),"g");a=a.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(c,".".concat(r))}return a}var tn=function(){function t(){a(this,t),this.definitions={}}return o(t,[{key:"add",value:function(){for(var t=this,n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];var a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach((function(n){t.definitions[n]=s({},t.definitions[n]||{},a[n]),Yt(n,a[n]),Wt()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var e=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(e).map((function(n){var r=e[n],a=r.prefix,i=r.iconName,o=r.icon;t[a]||(t[a]={}),t[a][i]=o})),t}}]),t}();function nn(){W.autoAddCss&&!cn&&(vt(Qt()),cn=!0)}function en(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return Ht(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(P){var n=j.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function rn(t){var n=t.prefix,e=void 0===n?"fa":n,r=t.iconName;if(r)return Ft(on.definitions,e,r)||Ft(H.styles,e,r)}function an(t){return function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(n||{}).icon?n:rn(n||{}),a=e.mask;return a&&(a=(a||{}).icon?a:rn(a||{})),t(r,s({},e,{mask:a}))}}var on=new tn,cn=!1,sn={transform:function(t){return Gt(t)}},fn=an((function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.transform,r=void 0===e?bt:e,a=n.symbol,i=void 0!==a&&a,o=n.mask,c=void 0===o?null:o,f=n.title,l=void 0===f?null:f,u=n.classes,p=void 0===u?[]:u,d=n.attributes,m=void 0===d?{}:d,h=n.styles,g=void 0===h?{}:h;if(t){var y=t.prefix,b=t.iconName,v=t.icon;return en(s({type:"icon"},t),(function(){return nn(),W.autoA11y&&(l?m["aria-labelledby"]="".concat(W.replacementClass,"-title-").concat(xt()):(m["aria-hidden"]="true",m["focusable"]="false")),Nt({icons:{main:Jt(v),mask:c?Jt(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:b,transform:s({},bt,r),symbol:i,title:l,extra:{attributes:m,styles:g,classes:p}})}))}})),ln=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.transform,r=void 0===e?bt:e,a=n.title,i=void 0===a?null:a,o=n.classes,c=void 0===o?[]:o,f=n.attributes,u=void 0===f?{}:f,p=n.styles,d=void 0===p?{}:p;return en({type:"text",content:t},(function(){return nn(),Rt({content:t,transform:s({},bt,r),title:i,extra:{attributes:u,styles:d,classes:["".concat(W.familyPrefix,"-layers-text")].concat(l(c))}})}))}}).call(this,e("c8ba"))}}]);
//# sourceMappingURL=chunk-4c8f67c6.de06d83a.js.map