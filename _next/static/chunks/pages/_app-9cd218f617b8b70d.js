(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6386)}])},9749:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(c){l=!0,i=c}finally{try{o||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,l=void 0!==r&&r,c=e.priority,u=void 0!==c&&c,h=e.loading,g=e.lazyRoot,x=void 0===g?null:g,E=e.lazyBoundary,k=void 0===E?"200px":E,z=e.className,N=e.quality,P=e.width,L=e.height,R=e.style,C=e.objectFit,M=e.objectPosition,q=e.onLoadingComplete,D=e.placeholder,U=void 0===D?"empty":D,B=e.blurDataURL,H=v(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=s.useContext(m.ImageConfigContext),W=s.useMemo((function(){var e=b||T||d.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:n})}),[T]),F=H,V=n?"responsive":"intrinsic";"layout"in F&&(F.layout&&(V=F.layout),delete F.layout);var K=_;if("loader"in F){if(F.loader){var $=F.loader;K=function(e){e.config;var t=v(e,["config"]);return $(t)}}delete F.loader}var G="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(t)){var J=S(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(B=B||J.blurDataURL,G=J.src,(!V||"fill"!==V)&&(L=L||J.height,P=P||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}t="string"===typeof t?t:G;var X=A(P),Q=A(L),Y=A(N),Z=!u&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Z=!1);w.has(t)&&(Z=!1);var ee,te=a(s.useState(!1),2),ne=te[0],re=te[1],ie=a(p.useIntersection({rootRef:x,rootMargin:k,disabled:!Z}),3),ae=ie[0],oe=ie[1],le=ie[2],ce=!Z||oe,ue={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},fe=!1,de={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:M};0;0;var pe=Object.assign({},R,"raw"===V?{}:de),me="blur"!==U||ne?{}:{filter:"blur(20px)",backgroundSize:C||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:M||"0% 0%"};if("fill"===V)ue.display="block",ue.position="absolute",ue.top=0,ue.left=0,ue.bottom=0,ue.right=0;else if("undefined"!==typeof X&&"undefined"!==typeof Q){var he=Q/X,ge=isNaN(he)?"100%":"".concat(100*he,"%");"responsive"===V?(ue.display="block",ue.position="relative",fe=!0,se.paddingTop=ge):"intrinsic"===V?(ue.display="inline-block",ue.position="relative",ue.maxWidth="100%",fe=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(X,"%27%20height=%27").concat(Q,"%27/%3e")):"fixed"===V&&(ue.display="inline-block",ue.position="relative",ue.width=X,ue.height=Q)}else 0;var ye={src:j,srcSet:void 0,sizes:void 0};ce&&(ye=O({config:W,src:t,unoptimized:l,layout:V,width:X,quality:Y,sizes:n,loader:K}));var ve=t;0;var be,we="imagesrcset",je="imagesizes";we="imageSrcSet",je="imageSizes";var xe=(i(be={},we,ye.srcSet),i(be,je,ye.sizes),be),Se=s.default.useLayoutEffect,Oe=s.useRef(q),Ae=s.useRef(t);s.useEffect((function(){Oe.current=q}),[q]),Se((function(){Ae.current!==t&&(le(),Ae.current=t)}),[le,t]);var _e=y({isLazy:Z,imgAttributes:ye,heightInt:Q,widthInt:X,qualityInt:Y,layout:V,className:z,imgStyle:pe,blurStyle:me,loading:h,config:W,unoptimized:l,placeholder:U,loader:K,srcString:ve,onLoadingCompleteRef:Oe,setBlurComplete:re,setIntersection:ae,isVisible:ce},F);return s.default.createElement(s.default.Fragment,null,"raw"===V?s.default.createElement(I,Object.assign({},_e)):s.default.createElement("span",{style:ue},fe?s.default.createElement("span",{style:se},ee?s.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,s.default.createElement(I,Object.assign({},_e))),u?s.default.createElement(f.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},xe))):null)};var c,u,s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),f=(c=n(3121))&&c.__esModule?c:{default:c},d=n(139),p=n(9246),m=n(8730),h=(n(670),n(2700));function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){g(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}function v(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}u={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1};var b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,j=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var x=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,a=new URL("".concat(t.path).concat(k(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),i&&o.set("q",i.toString());return a.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,a=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(k(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(k(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function O(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,l=e.quality,c=e.sizes,u=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,u=[];l=c.exec(r);l)u.push(parseInt(l[2]));if(u.length){var s,f=.01*(s=Math).min.apply(s,o(u));return{widths:a.filter((function(e){return e>=i[0]*f})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,c),f=s.widths,d=s.kind,p=f.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:f.map((function(e,r){return"".concat(u({config:t,src:n,quality:l,width:e})," ").concat("w"===d?e:r+1).concat(d)})).join(", "),src:u({config:t,src:n,quality:l,width:f[p]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function _(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",r=x.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(n))}function E(e,t,n,r,i,a){e&&e.src!==j&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===r&&a(!0),null===i||void 0===i?void 0:i.current)){var n=e.naturalWidth,o=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:o})}})))}var I=function(e){var t=e.imgAttributes,n=e.heightInt,r=e.widthInt,i=e.qualityInt,a=e.layout,o=e.className,l=e.imgStyle,c=e.blurStyle,u=e.isLazy,f=e.placeholder,d=e.loading,p=e.srcString,m=e.config,h=e.unoptimized,g=e.loader,b=e.onLoadingCompleteRef,w=e.setBlurComplete,j=e.setIntersection,x=e.onLoad,S=e.onError,A=(e.isVisible,v(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},A,t,"raw"===a?{height:n,width:r}:{},{decoding:"async","data-nimg":a,className:o,style:y({},l,c),ref:s.useCallback((function(e){j(e),(null===e||void 0===e?void 0:e.complete)&&E(e,p,0,f,b,w)}),[j,p,a,f,b,w]),onLoad:function(e){E(e.currentTarget,p,0,f,b,w),x&&x(e)},onError:function(e){"blur"===f&&w(!0),S&&S(e)}})),(u||"blur"===f)&&s.default.createElement("noscript",null,s.default.createElement("img",Object.assign({},A,O({config:m,src:p,unoptimized:h,layout:a,width:r,quality:i,sizes:t.sizes,loader:g}),"raw"===a?{height:n,width:r}:{},{decoding:"async","data-nimg":a,style:l,className:o,loading:d||"lazy"}))))};function k(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(c){l=!0,i=c}finally{try{o||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},l=n(1003),c=n(880),u=n(9246);function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var f={};function d(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(i?"%"+i:"")]=!0}}var p=o.default.forwardRef((function(e,t){var n,r=e.legacyBehavior,a=void 0===r?!0!==Boolean(!1):r,p=e.href,m=e.as,h=e.children,g=e.prefetch,y=e.passHref,v=e.replace,b=e.shallow,w=e.scroll,j=e.locale,x=e.onClick,S=e.onMouseEnter,O=s(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=h,a&&"string"===typeof n&&(n=o.default.createElement("a",null,n));var A,_=!1!==g,E=c.useRouter(),I=o.default.useMemo((function(){var e=i(l.resolveHref(E,p,!0),2),t=e[0],n=e[1];return{href:t,as:m?l.resolveHref(E,m):n||t}}),[E,p,m]),k=I.href,z=I.as,N=o.default.useRef(k),P=o.default.useRef(z);a&&(A=o.default.Children.only(n));var L=a?A&&"object"===typeof A&&A.ref:t,R=i(u.useIntersection({rootMargin:"200px"}),3),C=R[0],M=R[1],q=R[2],D=o.default.useCallback((function(e){P.current===z&&N.current===k||(q(),P.current=z,N.current=k),C(e),L&&("function"===typeof L?L(e):"object"===typeof L&&(L.current=e))}),[z,L,k,q,C]);o.default.useEffect((function(){var e=M&&_&&l.isLocalURL(k),t="undefined"!==typeof j?j:E&&E.locale,n=f[k+"%"+z+(t?"%"+t:"")];e&&!n&&d(E,k,z,{locale:t})}),[z,k,M,j,_,E]);var U={ref:D,onClick:function(e){a||"function"!==typeof x||x(e),a&&A.props&&"function"===typeof A.props.onClick&&A.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,a,o,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[i?"replace":"push"](n,r,{shallow:a,locale:c,scroll:o}))}(e,E,k,z,v,b,w,j)},onMouseEnter:function(e){a||"function"!==typeof S||S(e),a&&A.props&&"function"===typeof A.props.onMouseEnter&&A.props.onMouseEnter(e),l.isLocalURL(k)&&d(E,k,z,{priority:!0})}};if(!a||y||"a"===A.type&&!("href"in A.props)){var B="undefined"!==typeof j?j:E&&E.locale,H=E&&E.isLocaleDomain&&l.getDomainLocale(z,B,E&&E.locales,E&&E.domainLocales);U.href=H||l.addBasePath(l.addLocale(z,B,E&&E.defaultLocale))}return a?o.default.cloneElement(A,U):o.default.createElement("a",Object.assign({},O,U),n)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(c){l=!0,i=c}finally{try{o||null==n.return||n.return()}finally{if(l)throw i}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!l,s=a.useRef(),f=i(a.useState(!1),2),d=f[0],p=f[1],m=i(a.useState(t?t.current:null),2),h=m[0],g=m[1],y=a.useCallback((function(e){s.current&&(s.current(),s.current=void 0),r||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),u.push(n));if(t)return t;var i=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:a,elements:i}),t}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),c.delete(i);var t=u.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&u.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:n}))}),[r,h,n,d]),v=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!l&&!d){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&g(t.current)}),[t]),[y,d,v]};var a=n(7294),o=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},6386:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),i=function(){return(0,r.jsx)("footer",{className:"page-footer",children:"PageFooter"})},a=n(5675),o=n.n(a),l=n(1163),c=n(1664),u=n.n(c),s=function(e,t){var n=!1,r=!0,i=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done);r=!0){var c=o.value;if((null===c||void 0===c?void 0:c.path)===t){n=!0;break}Array.isArray(c.childs)&&(n=s(c.childs,t))}}catch(u){i=!0,a=u}finally{try{r||null==l.return||l.return()}finally{if(i)throw a}}return n},f=function(e,t){return e.map((function(e){if(Array.isArray(e.childs)){var n=e.content||(0,r.jsx)(u(),{href:e.path,className:"main-nav__link",children:e.text}),i=s(e.childs,t),a=f(e.childs,t);return(0,r.jsxs)("li",{className:"\n            main-nav__item\n            main-nav__item--has-sublist\n            ".concat(e.path===t||i?"main-nav__item--active":"","\n            ").concat(e.className||"","\n          "),children:[(0,r.jsx)("div",{className:"main-nav__item-inner",children:n}),(0,r.jsx)("ul",{className:"main-nav__sublist",children:a})]},e.id)}var o=e.content||(0,r.jsx)(u(),{href:e.path,className:"main-nav__link",children:e.text});return(0,r.jsx)("li",{className:"\n          main-nav__item\n          ".concat(e.path===t?"main-nav__item--active":"","\n          ").concat(e.className||"","\n        "),children:(0,r.jsx)("div",{className:"main-nav__item-inner",children:o})},e.id)}))},d=[{id:1,text:"Home",path:"/",className:"nano-class"},{id:2,text:"Items",path:"/items",childs:[{id:11,text:"Item 1",path:"/items/1",className:"mega-class"},{id:12,text:"Item 2",path:"/items/2"},{id:13,text:"Item 3",path:"/items/3"}]},{id:3,text:"Contacts",path:"/contacts"},{id:4,content:(0,r.jsx)(r.Fragment,{children:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u043f\u0443\u043d\u043a\u0442 4"})}],p=function(){var e=(0,l.useRouter)().asPath,t=f(d,e);return(0,r.jsx)("nav",{className:"main-nav",children:(0,r.jsx)("ul",{className:"main-nav__list",children:t})})},m=function(){return(0,r.jsxs)("header",{className:"page-header",children:[(0,r.jsx)(o(),{className:"logo1",src:"/logo.png",width:24,height:24,alt:"logo"}),(0,r.jsx)("img",{className:"logo2",src:"/logo.png",width:24,height:24,alt:"logo"}),(0,r.jsx)("img",{className:"logo3",src:"logo.png",width:24,height:24,alt:"logo"}),(0,r.jsx)("img",{className:"logo4",src:"nth-start-project-research/logo.png",width:24,height:24,alt:"logo"}),(0,r.jsx)("div",{children:"PageHeader"}),(0,r.jsx)(p,{})]})},h=function(e){var t=e.children;return(0,r.jsxs)("div",{className:"layout",children:[(0,r.jsx)("div",{className:"layout__header",children:(0,r.jsx)(m,{})}),(0,r.jsx)("div",{className:"layout__content",children:t}),(0,r.jsx)("div",{className:"layout__footer",children:(0,r.jsx)(i,{})})]})};n(1542);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){g(e,t,n[t])}))}return e}var v=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsx)(h,{children:(0,r.jsx)(t,y({},n))})}},1542:function(){},5675:function(e,t,n){e.exports=n(9749)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(880)}));var n=e.O();_N_E=n}]);