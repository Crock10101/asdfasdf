(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!o(e[l],i[l]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!o(l.value[1],i.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!o(e[s[l]],i[s[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,a=r(7294),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},587:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return xe}});var n,a,o,i,c=r(7294),l=r(7108),s=r.p+"static/BBI_15SecondReel-aa3dbfa4d715657c1d08eb51cb185af7.mp4",u=r(1293),f=r(838),p=r(5444),m=r(1496),d=r.p+"static/Carriers2-37ed092cfa92000920acdbba471a91a8.png",h=r.p+"static/ServicesImage-8159a07c215471bcce2334d358963919.webp",y=r.p+"static/team-f774a3fb36a02dacb1d1312f658e4595.webp",b=r.p+"static/comb1-360bd0408cf81c2147395c1a0b8195d6.webp",g=r(5697),E=r.n(g),v=r(4839),T=r.n(v),w=r(2993),O=r.n(w),C=r(6494),A=r.n(C),S="bodyAttributes",I="htmlAttributes",x="titleAttributes",N={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},k=(Object.keys(N).map((function(e){return N[e]})),"charset"),j="cssText",P="href",L="http-equiv",R="innerHTML",Z="itemprop",M="name",B="property",_="rel",H="src",U="target",Y={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},W="defaultTitle",D="defer",q="encodeSpecialCharacters",F="onChangeClientState",z="titleTemplate",G=Object.keys(Y).reduce((function(e,t){return e[Y[t]]=t,e}),{}),K=[N.NOSCRIPT,N.SCRIPT,N.STYLE],V="data-react-helmet",$="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Q=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ee=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},te=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},re=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ne=function(e){var t=le(e,N.TITLE),r=le(e,z);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=le(e,W);return t||n||void 0},ae=function(e){return le(e,F)||function(){}},oe=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return X({},e,t)}),{})},ie=function(e,t){return t.filter((function(e){return void 0!==e[N.BASE]})).map((function(e){return e[N.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},ce=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&me("Helmet: "+e+' should be of type "Array". Instead found type "'+$(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===_&&"canonical"===e[r].toLowerCase()||l===_&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==R&&c!==j&&c!==Z||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=A()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},le=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},se=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){se(e)}),0)}),ue=function(e){return clearTimeout(e)},fe="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||se:r.g.requestAnimationFrame||se,pe="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ue:r.g.cancelAnimationFrame||ue,me=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},de=null,he=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,p=e.titleAttributes;ge(N.BODY,n),ge(N.HTML,a),be(f,p);var m={baseTag:Ee(N.BASE,r),linkTags:Ee(N.LINK,o),metaTags:Ee(N.META,i),noscriptTags:Ee(N.NOSCRIPT,c),scriptTags:Ee(N.SCRIPT,s),styleTags:Ee(N.STYLE,u)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,d,h)},ye=function(e){return Array.isArray(e)?e.join(""):e},be=function(e,t){void 0!==e&&document.title!==e&&(document.title=ye(e)),ge(N.TITLE,t)},ge=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(V),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute(V):r.getAttribute(V)!==i.join(",")&&r.setAttribute(V,i.join(","))}},Ee=function(e,t){var r=document.head||document.querySelector(N.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===R)r.innerHTML=t.innerHTML;else if(n===j)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(V,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ve=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},Te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Y[r]||r]=e[r],t}),t)},we=function(e,t,r){switch(e){case N.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[V]=!0,a=Te(r,n),[c.createElement(N.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ve(r),o=ye(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+re(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+re(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case S:case I:return{toComponent:function(){return Te(t)},toString:function(){return ve(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[V]=!0,n);return Object.keys(t).forEach((function(e){var r=Y[e]||e;if(r===R||r===j){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),c.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===R||e===j)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+re(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===K.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},Oe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,p=e.titleAttributes;return{base:we(N.BASE,t,n),bodyAttributes:we(S,r,n),htmlAttributes:we(I,a,n),link:we(N.LINK,o,n),meta:we(N.META,i,n),noscript:we(N.NOSCRIPT,c,n),script:we(N.SCRIPT,l,n),style:we(N.STYLE,s,n),title:we(N.TITLE,{title:f,titleAttributes:p},n)}},Ce=T()((function(e){return{baseTag:ie([P,U],e),bodyAttributes:oe(S,e),defer:le(e,D),encode:le(e,q),htmlAttributes:oe(I,e),linkTags:ce(N.LINK,[_,P],e),metaTags:ce(N.META,[M,k,L,B,Z],e),noscriptTags:ce(N.NOSCRIPT,[R],e),onChangeClientState:ae(e),scriptTags:ce(N.SCRIPT,[H,R],e),styleTags:ce(N.STYLE,[j],e),title:ne(e),titleAttributes:oe(x,e)}}),(function(e){de&&pe(de),e.defer?de=fe((function(){he(e,(function(){de=null}))})):(he(e),de=null)}),Oe)((function(){return null})),Ae=(a=Ce,i=o=function(e){function t(){return J(this,t),te(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!O()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case N.SCRIPT:case N.NOSCRIPT:return{innerHTML:t};case N.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return X({},n,((t={})[r.type]=[].concat(n[r.type]||[],[X({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case N.TITLE:return X({},a,((t={})[n.type]=i,t.titleAttributes=X({},o),t));case N.BODY:return X({},a,{bodyAttributes:X({},o)});case N.HTML:return X({},a,{htmlAttributes:X({},o)})}return X({},a,((r={})[n.type]=X({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=X({},t);return Object.keys(e).forEach((function(t){var n;r=X({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[G[r]||r]=e[r],t}),t)}(ee(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case N.LINK:case N.META:case N.NOSCRIPT:case N.SCRIPT:case N.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=ee(e,["children"]),n=X({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(a,n)},Q(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:E().object,bodyAttributes:E().object,children:E().oneOfType([E().arrayOf(E().node),E().node]),defaultTitle:E().string,defer:E().bool,encodeSpecialCharacters:E().bool,htmlAttributes:E().object,link:E().arrayOf(E().object),meta:E().arrayOf(E().object),noscript:E().arrayOf(E().object),onChangeClientState:E().func,script:E().arrayOf(E().object),style:E().arrayOf(E().object),title:E().string,titleAttributes:E().object,titleTemplate:E().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=Oe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);Ae.renderStatic=Ae.rewind;var Se=r(3332),Ie=r(8779);function xe(){var e=(0,p.K2)("3588406196");return c.createElement(l.Z,null,c.createElement(Ae,null,c.createElement("html",{lang:"en"}),c.createElement("title",null,"BBI Logistics Home Page"),c.createElement("meta",{name:"description",content:"This is the home page of BBI Logistics. We are on the forefront of freight and we will get  the job done fast and efficient. "})),c.createElement("div",{className:"sideways pbutt"},c.createElement(Se.Z,{className:"",style:{color:Ie.Z[50]},size:"large",variant:"text",href:"https://form.jotform.com/211394934568062"},"Get A Quote")),c.createElement("div",{className:"pop"},c.createElement("div",{className:"videoPlay"},c.createElement("video",{class:"overlay",autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:s,type:"video/mp4"})),c.createElement("div",{className:"overlay"},c.createElement("h1",{className:""},"BUILT ON BETTER INTEGRITY"))),c.createElement(u.Z,{fluid:!0,className:"cushion"},c.createElement("h1",{className:"blue2 center"},"GROW WITH US"),c.createElement(f.Z,{container:!0},c.createElement(f.Z,{className:"",item:!0,xs:12,sm:4},c.createElement("h2",{className:"linesmall"},"CARRIERS"),c.createElement("div",{class:"wrapper"},c.createElement("div",{class:"card",style:{backgroundImage:"url("+d+")"}},c.createElement("div",{class:"text-wrapper t2"},c.createElement("div",{class:"text"},"SUPPLY CHAIN LOGISTICS"),c.createElement("div",{class:"text-small"},"Utilize our dedicated freight to help maximize your load potential. We can provide you with reliable backhauls, long miles, local runs, and expedited shipments. Our 24/7/365 support and technology allow for easy updates and hassle-free billing."))))),c.createElement(f.Z,{className:"",item:!0,xs:12,sm:4},c.createElement("h2",{className:"linesmall"},"CUSTOMERS"),c.createElement("div",{class:"wrapper"},c.createElement("div",{class:"card",style:{backgroundImage:"url("+h+")"}},c.createElement("div",{class:"text-wrapper t1"},c.createElement("div",{class:"text"},"BOOK YOUR FREIGHT"),c.createElement("div",{class:"text-small "},"Leverage our vast carrier network to improve efficiency in your supply chain. We tailor our solutions around your needs to guarantee the most reliable transportation in the industry. The ability to adapt and scale our team around your needs allows us to grow together."))))),c.createElement(f.Z,{className:"",item:!0,xs:12,sm:4},c.createElement("h2",{className:"linesmall nowrap"},"JOIN OUR TEAM"),c.createElement("div",{class:"wrapper"},c.createElement("div",{class:"card",style:{backgroundImage:"url("+y+")"}},c.createElement("div",{class:"text-wrapper t3"},c.createElement("div",{class:"text"},"NOW HIRING!"),c.createElement("div",{class:"text-small"},"BBI Logistics is a fast-growing freight brokerage startup located in downtown Columbus. We are an exploding business in a dynamic industry. Take advantage of the opportunity to be part of something big."))))))),c.createElement(u.Z,{maxWidth:!1,className:"CC "},c.createElement(u.Z,null,c.createElement(f.Z,{className:"cred",container:!0},c.createElement(f.Z,{className:"center",item:!0,xs:12,sm:6},c.createElement("h7",null,c.createElement("span",{className:"blue"}," BUILT ON BETTER INTEGRITY"),c.createElement("span",null,", a company that customers endorse, carriers prefer, and employees are proud of. We go the"," ",c.createElement("span",{className:"lblue"},"extra mile")," to ensure exceptional transportation solutions and scalability.")),c.createElement(f.Z,{container:!0},c.createElement(f.Z,{className:"cred",item:!0,xs:12,sm:6},c.createElement("div",{className:"center lblue"},c.createElement("h3",null,"25,000+"),c.createElement("p",null,"Carrier Network"))),c.createElement(f.Z,{className:"cred",item:!0,xs:12,sm:6},c.createElement("div",{className:"center lblue"},c.createElement("h3",null,"800+"),c.createElement("p",null,"Clients Served"))),c.createElement(f.Z,{item:!0,xs:12,sm:12},c.createElement("div",{className:"center lblue"},c.createElement("h3",null," 100%+"),c.createElement("p",null,"YOY Growth "))))),c.createElement(f.Z,{className:"center",item:!0,xs:12,sm:6},c.createElement(m.Z,{fluid:e.mash.childImageSharp.fluid,alt:"combination of images "}))))),c.createElement(u.Z,{maxWidth:!1,className:" "},c.createElement(u.Z,{style:{backgroundImage:"url("+b+")"},className:"phil cushion"},c.createElement("h1",null,"PHILANTHROPIC"),c.createElement("p",null,'"We give back to the communities in which we work"'),c.createElement("h3",{className:"lblue"},"Proud supporters of:"),c.createElement(f.Z,{className:"cred",container:!0,spacing:4},c.createElement(f.Z,{item:!0,xs:8,sm:3},c.createElement("div",null,c.createElement(m.Z,{fluid:e.hum.childImageSharp.fluid,alt:"humane society logo columbus"}))),c.createElement(f.Z,{item:!0,xs:8,sm:3},c.createElement("div",null,c.createElement(m.Z,{fluid:e.nwc.childImageSharp.fluid,alt:"nationwide childrens columbus logo"}))),c.createElement(f.Z,{item:!0,xs:8,sm:3},c.createElement("div",null,c.createElement(m.Z,{fluid:e.nwc.childImageSharp.fluid,alt:"nationwide childrens columbus logo"}))),c.createElement(f.Z,{item:!0,xs:8,sm:3},c.createElement("div",null,c.createElement(m.Z,{fluid:e.food.childImageSharp.fluid,alt:"worthington resource pantry logo"})))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4e072bac4772f854acfe.js.map