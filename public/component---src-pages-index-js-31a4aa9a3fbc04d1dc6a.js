(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!o(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},489:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Se}});var n,a,o,i,c=r(7294),l=r(2543),s=r.p+"static/BBI_15SecondReel-aa3dbfa4d715657c1d08eb51cb185af7.mp4",u=r(1293),f=r(838),p=r(5444),d=r(1496),m=r.p+"static/car-cfc23f679a33153bfc91b03e913280fd.webp",h=r.p+"static/ServicesImage-8159a07c215471bcce2334d358963919.webp",y=r.p+"static/team-f774a3fb36a02dacb1d1312f658e4595.webp",b=r.p+"static/comb1-360bd0408cf81c2147395c1a0b8195d6.webp",E=r(5697),v=r.n(E),g=r(4839),T=r.n(g),w=r(2993),O=r.n(w),C=r(6494),A=r.n(C),S="bodyAttributes",I="htmlAttributes",x="titleAttributes",P={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},N=(Object.keys(P).map((function(e){return P[e]})),"charset"),k="cssText",j="href",L="http-equiv",R="innerHTML",M="itemprop",Z="name",B="property",_="rel",Y="src",H="target",q={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},U="defaultTitle",D="defer",F="encodeSpecialCharacters",W="onChangeClientState",z="titleTemplate",K=Object.keys(q).reduce((function(e,t){return e[q[t]]=t,e}),{}),G=[P.NOSCRIPT,P.SCRIPT,P.STYLE],V="data-react-helmet",$="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},J=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ee=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},te=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},re=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ne=function(e){var t=le(e,P.TITLE),r=le(e,z);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=le(e,U);return t||n||void 0},ae=function(e){return le(e,W)||function(){}},oe=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return X({},e,t)}),{})},ie=function(e,t){return t.filter((function(e){return void 0!==e[P.BASE]})).map((function(e){return e[P.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},ce=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&de("Helmet: "+e+' should be of type "Array". Instead found type "'+$(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===_&&"canonical"===e[r].toLowerCase()||l===_&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==R&&c!==k&&c!==M||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=A()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},le=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},se=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){se(e)}),0)}),ue=function(e){return clearTimeout(e)},fe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||se:r.g.requestAnimationFrame||se,pe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ue:r.g.cancelAnimationFrame||ue,de=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},me=null,he=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;Ee(P.BODY,n),Ee(P.HTML,a),be(f,p);var d={baseTag:ve(P.BASE,r),linkTags:ve(P.LINK,o),metaTags:ve(P.META,i),noscriptTags:ve(P.NOSCRIPT,c),scriptTags:ve(P.SCRIPT,s),styleTags:ve(P.STYLE,u)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},ye=function(e){return Array.isArray(e)?e.join(""):e},be=function(e,t){void 0!==e&&document.title!==e&&(document.title=ye(e)),Ee(P.TITLE,t)},Ee=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(V),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(V):r.getAttribute(V)!==i.join(",")&&r.setAttribute(V,i.join(","))}},ve=function(e,t){var r=document.head||document.querySelector(P.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===R)r.innerHTML=t.innerHTML;else if(n===k)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(V,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ge=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)},we=function(e,t,r){switch(e){case P.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[V]=!0,a=Te(r,n),[c.createElement(P.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ge(r),o=ye(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+re(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+re(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case S:case I:return{toComponent:function(){return Te(t)},toString:function(){return ge(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[V]=!0,n);return Object.keys(t).forEach((function(e){var r=q[e]||e;if(r===R||r===k){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===R||e===k)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+re(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===G.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},Oe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:we(P.BASE,t,n),bodyAttributes:we(S,r,n),htmlAttributes:we(I,a,n),link:we(P.LINK,o,n),meta:we(P.META,i,n),noscript:we(P.NOSCRIPT,c,n),script:we(P.SCRIPT,l,n),style:we(P.STYLE,s,n),title:we(P.TITLE,{title:f,titleAttributes:p},n)}},Ce=T()((function(e){return{baseTag:ie([j,H],e),bodyAttributes:oe(S,e),defer:le(e,D),encode:le(e,F),htmlAttributes:oe(I,e),linkTags:ce(P.LINK,[_,j],e),metaTags:ce(P.META,[Z,N,L,B,M],e),noscriptTags:ce(P.NOSCRIPT,[R],e),onChangeClientState:ae(e),scriptTags:ce(P.SCRIPT,[Y,R],e),styleTags:ce(P.STYLE,[k],e),title:ne(e),titleAttributes:oe(x,e)}}),(function(e){me&&pe(me),e.defer?me=fe((function(){he(e,(function(){me=null}))})):(he(e),me=null)}),Oe)((function(){return null})),Ae=(a=Ce,i=o=function(e){function t(){return Q(this,t),te(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!O()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case P.SCRIPT:case P.NOSCRIPT:return{innerHTML:t};case P.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return X({},n,((t={})[r.type]=[].concat(n[r.type]||[],[X({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case P.TITLE:return X({},a,((t={})[n.type]=i,t.titleAttributes=X({},o),t));case P.BODY:return X({},a,{bodyAttributes:X({},o)});case P.HTML:return X({},a,{htmlAttributes:X({},o)})}return X({},a,((r={})[n.type]=X({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=X({},t);return Object.keys(e).forEach((function(t){var n;r=X({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[K[r]||r]=e[r],t}),t)}(ee(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case P.LINK:case P.META:case P.NOSCRIPT:case P.SCRIPT:case P.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=ee(e,["children"]),n=X({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},J(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:v().object,bodyAttributes:v().object,children:v().oneOfType([v().arrayOf(v().node),v().node]),defaultTitle:v().string,defer:v().bool,encodeSpecialCharacters:v().bool,htmlAttributes:v().object,link:v().arrayOf(v().object),meta:v().arrayOf(v().object),noscript:v().arrayOf(v().object),onChangeClientState:v().func,script:v().arrayOf(v().object),style:v().arrayOf(v().object),title:v().string,titleAttributes:v().object,titleTemplate:v().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=Oe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);Ae.renderStatic=Ae.rewind;function Se(){var e=(0,p.K2)("3588406196");return c.createElement(l.Z,null,c.createElement(Ae,null,c.createElement("html",{lang:"en"}),c.createElement("title",null,"BBI Logistics Home Page"),c.createElement("meta",{name:"description",content:"This is the home page of BBI Logistics. We are on the forefront of freight and we will get  the job done fast and efficient. "})),c.createElement("div",{className:"pop"},c.createElement("div",{className:"videoPlay"},c.createElement("video",{class:"overlay",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:s,type:"video/mp4"})),c.createElement("div",{className:"overlay"},c.createElement("h2",null,"BUILT ON BETTER INTEGRITY"))),c.createElement(u.Z,{fluid:!0,className:"acc cushion"},c.createElement("div",{class:"wrapper"},c.createElement("div",{class:"card",style:{backgroundImage:"url("+h+")"}},c.createElement("h3",null,"CARRIERS"),c.createElement("div",{class:"text-wrapper t2"},c.createElement("div",{class:"text"},"CARRIERS"),c.createElement("div",{class:"text-small"},"Utilize our dedicated freight to help maximize your load potential. We can provide you with reliable backhauls, long miles, local runs, and expedited shipments. Our 24/7/365 support and technology allow for easy updates and hassle-free billing."))),c.createElement("div",{class:"card",style:{backgroundImage:"url("+m+")"}},c.createElement("h3",null,"SHIPPERS"),c.createElement("div",{class:"text-wrapper t1"},c.createElement("div",{class:"text"},"SHIPPERS"),c.createElement("div",{class:"text-small"},"Leverage our vast carrier network to improve efficiency in your supply chain. We tailor our solutions around your needs to guarantee the most reliable transportation in the industry. The ability to adapt and scale our team around your needs allows us to grow together."))),c.createElement("div",{class:"card",style:{backgroundImage:"url("+y+")"}},c.createElement("h3",null,"EMPLOYEMENT OPPURTUNITY"),c.createElement("div",{class:"text-wrapper t3"},c.createElement("div",{class:"text"},"EMPLOYEMENT OPPURTUNITY"),c.createElement("div",{class:"text-small"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque metus quam. Cras finibus quam eget metus tristique, eu lobortis libero auctor. Quisque sollicitudin in lectus sit amet tincidunt."))))),c.createElement(u.Z,{maxWidth:!1,className:"CC "},c.createElement(u.Z,null,c.createElement(f.Z,{className:"cred",container:!0},c.createElement(f.Z,{className:"center",item:!0,xs:12,sm:6},c.createElement("h7",null,c.createElement("span",{className:"blue"}," BUILT ON BETTER INTRGRITY"),c.createElement("span",null,", a company that customers endorse, carriers prefer, and employees are proud of. We go the"," ",c.createElement("span",{className:"lblue"},"extra mile")," to ensure exceptional transportation solutions and scalability.")),c.createElement(f.Z,{container:!0},c.createElement(f.Z,{className:"cred",item:!0,xs:6,sm:6},c.createElement("div",{className:"center lblue"},c.createElement("h3",null,"25,000+"),c.createElement("p",null,"Carrier Network"))),c.createElement(f.Z,{className:"cred",item:!0,xs:6,sm:6},c.createElement("div",{className:"center lblue"},c.createElement("h3",null,"800+"),c.createElement("p",null,"Clients Served"))),c.createElement(f.Z,{item:!0,xs:6,sm:6},c.createElement("div",{className:"center lblue"},c.createElement("h3",null,"4"),c.createElement("p",null," 100%+ YOY Growth "))),c.createElement(f.Z,{item:!0,xs:6,sm:6},c.createElement("div",{className:"center lblue"},c.createElement("h3",null,"4"),c.createElement("p",null,"Years of Service"))))),c.createElement(f.Z,{className:"center",item:!0,xs:12,sm:6},c.createElement(d.Z,{fluid:e.mash.childImageSharp.fluid,alt:"combination of images "}))))),c.createElement(u.Z,{maxWidth:!1,className:" "},c.createElement(u.Z,{style:{backgroundImage:"url("+b+")"},className:"phil "},c.createElement("h1",null,"PHILANTHROPIC"),c.createElement("p",null,'"We give back to the communities in which we work"'),c.createElement("h3",{className:"lblue"},"Proud supporters of:"),c.createElement(f.Z,{className:"cred",container:!0,spacing:4},c.createElement(f.Z,{item:!0,xs:8,sm:3},c.createElement("div",null,c.createElement(d.Z,{fluid:e.hum.childImageSharp.fluid,alt:"humane society logo columbus"}))),c.createElement(f.Z,{item:!0,xs:8,sm:3},c.createElement("div",null,c.createElement(d.Z,{fluid:e.nwc.childImageSharp.fluid,alt:"nationwide childrens columbus logo"}))),c.createElement(f.Z,{item:!0,xs:8,sm:3},c.createElement("div",null,c.createElement(d.Z,{fluid:e.nwc.childImageSharp.fluid,alt:"nationwide childrens columbus logo"}))),c.createElement(f.Z,{item:!0,xs:8,sm:3},c.createElement("div",null,c.createElement(d.Z,{fluid:e.food.childImageSharp.fluid,alt:"worthington resource pantry logo"})))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-31a4aa9a3fbc04d1dc6a.js.map