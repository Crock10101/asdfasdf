(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{1293:function(e,t,n){"use strict";var r=n(2122),a=n(1253),i=n(6156),o=n(7294),c=n(5505),s=n(4621),l=n(1664),u=o.forwardRef((function(e,t){var n=e.classes,i=e.className,s=e.component,u=void 0===s?"div":s,f=e.disableGutters,d=void 0!==f&&f,p=e.fixed,m=void 0!==p&&p,h=e.maxWidth,g=void 0===h?"lg":h,y=(0,a.Z)(e,["classes","className","component","disableGutters","fixed","maxWidth"]);return o.createElement(u,(0,r.Z)({className:(0,c.Z)(n.root,i,m&&n.fixed,d&&n.disableGutters,!1!==g&&n["maxWidth".concat((0,l.Z)(String(g)))]),ref:t},y))}));t.Z=(0,s.Z)((function(e){return{root:(0,i.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:e.spacing(2),paddingRight:e.spacing(2),display:"block"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(e.breakpoints.values).reduce((function(t,n){var r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:r}),t}),{}),maxWidthXs:(0,i.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),maxWidthSm:(0,i.Z)({},e.breakpoints.up("sm"),{maxWidth:e.breakpoints.values.sm}),maxWidthMd:(0,i.Z)({},e.breakpoints.up("md"),{maxWidth:e.breakpoints.values.md}),maxWidthLg:(0,i.Z)({},e.breakpoints.up("lg"),{maxWidth:e.breakpoints.values.lg}),maxWidthXl:(0,i.Z)({},e.breakpoints.up("xl"),{maxWidth:e.breakpoints.values.xl})}}),{name:"MuiContainer"})(u)},838:function(e,t,n){"use strict";var r=n(1253),a=n(2122),i=n(7294),o=n(5505),c=n(4621),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var f=i.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,u=e.classes,f=e.className,d=e.component,p=void 0===d?"div":d,m=e.container,h=void 0!==m&&m,g=e.direction,y=void 0===g?"row":g,b=e.item,v=void 0!==b&&b,E=e.justify,x=void 0===E?"flex-start":E,w=e.lg,T=void 0!==w&&w,S=e.md,C=void 0!==S&&S,O=e.sm,A=void 0!==O&&O,k=e.spacing,I=void 0===k?0:k,j=e.wrap,N=void 0===j?"wrap":j,P=e.xl,L=void 0!==P&&P,R=e.xs,Z=void 0!==R&&R,M=e.zeroMinWidth,W=void 0!==M&&M,B=(0,r.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),_=(0,o.Z)(u.root,f,h&&[u.container,0!==I&&u["spacing-xs-".concat(String(I))]],v&&u.item,W&&u.zeroMinWidth,"row"!==y&&u["direction-xs-".concat(String(y))],"wrap"!==N&&u["wrap-xs-".concat(String(N))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==c&&u["align-content-xs-".concat(String(c))],"flex-start"!==x&&u["justify-xs-".concat(String(x))],!1!==Z&&u["grid-xs-".concat(String(Z))],!1!==A&&u["grid-sm-".concat(String(A))],!1!==C&&u["grid-md-".concat(String(C))],!1!==T&&u["grid-lg-".concat(String(T))],!1!==L&&u["grid-xl-".concat(String(L))]);return i.createElement(p,(0,a.Z)({className:_,ref:t},B))})),d=(0,c.Z)((function(e){return(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(r){var a=e.spacing(r);0!==a&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(u(a,2)),width:"calc(100% + ".concat(u(a),")"),"& > $item":{padding:u(a,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,a.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(f);t.Z=d},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(!i(e[s],o[s]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!i(s.value[1],o.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(e[s]!==o[s])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!i(e[l[s]],o[l[s]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},489:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Oe}});var r,a,i,o,c=n(7294),s=n(2543),l=n.p+"static/BBI_15SecondReel-aa3dbfa4d715657c1d08eb51cb185af7.mp4",u=n(1293),f=n(838),d=n(5444),p=n(1496),m=n.p+"static/car-cfc23f679a33153bfc91b03e913280fd.webp",h=n.p+"static/ServicesImage-8159a07c215471bcce2334d358963919.webp",g=n.p+"static/team-f774a3fb36a02dacb1d1312f658e4595.webp",y=n.p+"static/comb1-360bd0408cf81c2147395c1a0b8195d6.webp",b=n(5697),v=n.n(b),E=n(4839),x=n.n(E),w=n(2993),T=n.n(w),S=n(6494),C=n.n(S),O="bodyAttributes",A="htmlAttributes",k="titleAttributes",I={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},j=(Object.keys(I).map((function(e){return I[e]})),"charset"),N="cssText",P="href",L="http-equiv",R="innerHTML",Z="itemprop",M="name",W="property",B="rel",_="src",Y="target",H={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},q="defaultTitle",D="defer",U="encodeSpecialCharacters",z="onChangeClientState",F="titleTemplate",G=Object.keys(H).reduce((function(e,t){return e[H[t]]=t,e}),{}),K=[I.NOSCRIPT,I.SCRIPT,I.STYLE],V="data-react-helmet",X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ee=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},te=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ne=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},re=function(e){var t=se(e,I.TITLE),n=se(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=se(e,q);return t||r||void 0},ae=function(e){return se(e,z)||function(){}},ie=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},oe=function(e,t){return t.filter((function(e){return void 0!==e[I.BASE]})).map((function(e){return e[I.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},ce=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&pe("Helmet: "+e+' should be of type "Array". Instead found type "'+X(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||n===B&&"canonical"===e[n].toLowerCase()||s===B&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==R&&c!==N&&c!==Z||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],s=C()({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},se=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},le=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){le(e)}),0)}),ue=function(e){return clearTimeout(e)},fe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||le:n.g.requestAnimationFrame||le,de="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ue:n.g.cancelAnimationFrame||ue,pe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},me=null,he=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;be(I.BODY,r),be(I.HTML,a),ye(f,d);var p={baseTag:ve(I.BASE,n),linkTags:ve(I.LINK,i),metaTags:ve(I.META,o),noscriptTags:ve(I.NOSCRIPT,c),scriptTags:ve(I.SCRIPT,l),styleTags:ve(I.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,m,h)},ge=function(e){return Array.isArray(e)?e.join(""):e},ye=function(e,t){void 0!==e&&document.title!==e&&(document.title=ge(e)),be(I.TITLE,t)},be=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(V),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===a.indexOf(s)&&a.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute(V):n.getAttribute(V)!==o.join(",")&&n.setAttribute(V,o.join(","))}},ve=function(e,t){var n=document.head||document.querySelector(I.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===R)n.innerHTML=t.innerHTML;else if(r===N)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(V,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},Ee=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},xe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)},we=function(e,t,n){switch(e){case I.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[V]=!0,a=xe(n,r),[c.createElement(I.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=Ee(n),i=ge(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+ne(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ne(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case O:case A:return{toComponent:function(){return xe(t)},toString:function(){return Ee(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[V]=!0,r);return Object.keys(t).forEach((function(e){var n=H[e]||e;if(n===R||n===N){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===R||e===N)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+ne(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===K.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Te=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:we(I.BASE,t,r),bodyAttributes:we(O,n,r),htmlAttributes:we(A,a,r),link:we(I.LINK,i,r),meta:we(I.META,o,r),noscript:we(I.NOSCRIPT,c,r),script:we(I.SCRIPT,s,r),style:we(I.STYLE,l,r),title:we(I.TITLE,{title:f,titleAttributes:d},r)}},Se=x()((function(e){return{baseTag:oe([P,Y],e),bodyAttributes:ie(O,e),defer:se(e,D),encode:se(e,U),htmlAttributes:ie(A,e),linkTags:ce(I.LINK,[B,P],e),metaTags:ce(I.META,[M,j,L,W,Z],e),noscriptTags:ce(I.NOSCRIPT,[R],e),onChangeClientState:ae(e),scriptTags:ce(I.SCRIPT,[_,R],e),styleTags:ce(I.STYLE,[N],e),title:re(e),titleAttributes:ie(k,e)}}),(function(e){me&&de(me),e.defer?me=fe((function(){he(e,(function(){me=null}))})):(he(e),me=null)}),Te)((function(){return null})),Ce=(a=Se,o=i=function(e){function t(){return $(this,t),te(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!T()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case I.SCRIPT:case I.NOSCRIPT:return{innerHTML:t};case I.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case I.TITLE:return J({},a,((t={})[r.type]=o,t.titleAttributes=J({},i),t));case I.BODY:return J({},a,{bodyAttributes:J({},i)});case I.HTML:return J({},a,{htmlAttributes:J({},i)})}return J({},a,((n={})[r.type]=J({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[G[n]||n]=e[n],t}),t)}(ee(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case I.LINK:case I.META:case I.NOSCRIPT:case I.SCRIPT:case I.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=ee(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(a,r)},Q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:v().object,bodyAttributes:v().object,children:v().oneOfType([v().arrayOf(v().node),v().node]),defaultTitle:v().string,defer:v().bool,encodeSpecialCharacters:v().bool,htmlAttributes:v().object,link:v().arrayOf(v().object),meta:v().arrayOf(v().object),noscript:v().arrayOf(v().object),onChangeClientState:v().func,script:v().arrayOf(v().object),style:v().arrayOf(v().object),title:v().string,titleAttributes:v().object,titleTemplate:v().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=Te({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);Ce.renderStatic=Ce.rewind;function Oe(){var e=(0,d.K2)("3588406196");return c.createElement(s.Z,null,c.createElement(Ce,null,c.createElement("title",null,"BBI Logistics Home Page"),c.createElement("meta",{name:"description",content:"This is the home page of BBI Logistics. We are on the forefront of freight and we will get  the job done fast and efficient. "})),c.createElement("div",{className:"pop"},c.createElement("div",{className:"videoPlay"},c.createElement("video",{class:"overlay",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:l,type:"video/mp4"})),c.createElement("div",{className:"overlay"},c.createElement("h2",null,"BUILT ON BETTER INTEGRITY"))),c.createElement(u.Z,{fluid:!0,className:"acc cushion"},c.createElement("div",{class:"wrapper"},c.createElement("div",{class:"card",style:{backgroundImage:"url("+m+")"}},c.createElement("h3",null,"SHIPPERS"),c.createElement("div",{class:"text-wrapper t1"},c.createElement("div",{class:"text"},"SHIPPERS"),c.createElement("div",{class:"text-small"},"Leverage our vast carrier network to improve efficiency in your supply chain. We tailor our solutions around your needs to guarantee the most reliable transportation in the industry. The ability to adapt and scale our team around your needs allows us to grow together."))),c.createElement("div",{class:"card",style:{backgroundImage:"url("+h+")"}},c.createElement("h3",null,"CARRIERS"),c.createElement("div",{class:"text-wrapper t2"},c.createElement("div",{class:"text"},"CARRIERS"),c.createElement("div",{class:"text-small"},"Utilize our dedicated freight to help maximize your load potential. We can provide you with reliable backhauls, long miles, local runs, and expedited shipments. Our 24/7/365 support and technology allow for easy updates and hassle-free billing."))),c.createElement("div",{class:"card",style:{backgroundImage:"url("+g+")"}},c.createElement("h3",null,"EMPLOYEMENT OPPURTUNITY"),c.createElement("div",{class:"text-wrapper t3"},c.createElement("div",{class:"text"},"EMPLOYEMENT OPPURTUNITY"),c.createElement("div",{class:"text-small"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque metus quam. Cras finibus quam eget metus tristique, eu lobortis libero auctor. Quisque sollicitudin in lectus sit amet tincidunt."))))),c.createElement(u.Z,{maxWidth:!1,className:"CC "},c.createElement(u.Z,null,c.createElement(f.Z,{className:"cred",container:!0},c.createElement(f.Z,{className:"center",item:!0,xs:12,sm:6},c.createElement("h7",null,c.createElement("span",{className:"blue"}," BUILT ON BETTER INTRGRITY"),c.createElement("span",null,", a company that customers endorse, carriers prefer, and employees are proud of. We go the"," ",c.createElement("span",{className:"lblue"},"EXTRA MILE")," to ensure exceptional transportation solutions and scalability.")),c.createElement(f.Z,{container:!0},c.createElement(f.Z,{className:"cred",item:!0,xs:6,sm:6},c.createElement("div",{className:"center"},c.createElement("h3",null,"25,000+"),c.createElement("p",null,"Carrier Network"))),c.createElement(f.Z,{className:"cred",item:!0,xs:6,sm:6},c.createElement("div",{className:"center"},c.createElement("h3",null,"800+"),c.createElement("p",null,"Clients Served"))),c.createElement(f.Z,{item:!0,xs:6,sm:6},c.createElement("div",{className:"center"},c.createElement("h3",null,"4"),c.createElement("p",null," 100%+ YOY Growth "))),c.createElement(f.Z,{item:!0,xs:6,sm:6},c.createElement("div",{className:"center"},c.createElement("h3",null,"4"),c.createElement("p",null,"Years of Service"))))),c.createElement(f.Z,{className:"center",item:!0,xs:12,sm:6},c.createElement(p.Z,{fluid:e.mash.childImageSharp.fluid,alt:"combination of images "}))))),c.createElement(u.Z,{maxWidth:!1,className:" "},c.createElement(u.Z,{style:{backgroundImage:"url("+y+")"},className:"phil "},c.createElement("h1",null,"PHILANTHROPIC"),c.createElement("p",null,'"We give back to the communities in which we work'),c.createElement("h3",null,"Proud supporters of:"),c.createElement(f.Z,{className:"cred",container:!0,spacing:4},c.createElement(f.Z,{item:!0,xs:8,sm:3},c.createElement("div",null,c.createElement(p.Z,{fluid:e.hum.childImageSharp.fluid,alt:"humane society logo columbus"}))),c.createElement(f.Z,{item:!0,xs:8,sm:3},c.createElement("div",null,c.createElement(p.Z,{fluid:e.nwc.childImageSharp.fluid,alt:"nationwide childrens columbus logo"}))),c.createElement(f.Z,{item:!0,xs:8,sm:3},c.createElement("div",null,c.createElement(p.Z,{fluid:e.nwc.childImageSharp.fluid,alt:"nationwide childrens columbus logo"}))),c.createElement(f.Z,{item:!0,xs:8,sm:3},c.createElement("div",null,c.createElement(p.Z,{fluid:e.food.childImageSharp.fluid,alt:"worthington resource pantry logo"})))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-78a56d737972b014f97b.js.map