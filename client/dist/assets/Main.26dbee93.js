import{R as K,r as j,g as J}from"./index.367d4241.js";import{p as s,j as S,u as Q,c as Z,R as tt,a as q,n as et,t as rt,e as nt,b as ot}from"./news.46e8e55d.js";import{_ as U}from"./typeof.2a08ffa3.js";import{c as it,n as st,s as ut}from"./notifications.ccd281a2.js";function at(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,k(t,e)}function k(t,e){return k=Object.setPrototypeOf||function(r,n){return r.__proto__=n,r},k(t,e)}var p={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},ct={rel:["amphtml","canonical","alternate"]},ft={type:["application/ld+json"]},pt={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]};Object.keys(p).map(function(t){return p[t]});var M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"};Object.keys(M).reduce(function(t,e){return t[M[e]]=e,t},{});var lt=function(t){return Array.isArray(t)?t.join(""):t},L=function(t,e){return Array.isArray(t)?t.reduce(function(r,n){return function(i,a){for(var u=Object.keys(i),o=0;o<u.length;o+=1)if(a[u[o]]&&a[u[o]].includes(i[u[o]]))return!0;return!1}(n,e)?r.priority.push(n):r.default.push(n),r},{priority:[],default:[]}):{default:t}},dt=[p.NOSCRIPT,p.SCRIPT,p.STYLE],_=function(t,e){return e===void 0&&(e=!0),e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},B=function(t){return Object.keys(t).reduce(function(e,r){var n=t[r]!==void 0?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n},"")},$=function(t,e){return e===void 0&&(e={}),Object.keys(t).reduce(function(r,n){return r[M[n]||n]=t[n],r},e)},I=function(t,e){return e.map(function(r,n){var i,a=((i={key:n})["data-rh"]=!0,i);return Object.keys(r).forEach(function(u){var o=M[u]||u;o==="innerHTML"||o==="cssText"?a.dangerouslySetInnerHTML={__html:r.innerHTML||r.cssText}:a[o]=r[u]}),K.createElement(t,a)})},g=function(t,e,r){switch(t){case p.TITLE:return{toComponent:function(){return i=e.titleAttributes,(a={key:n=e.title})["data-rh"]=!0,u=$(i,a),[K.createElement(p.TITLE,u,n)];var n,i,a,u},toString:function(){return function(n,i,a,u){var o=B(a),c=lt(i);return o?"<"+n+' data-rh="true" '+o+">"+_(c,u)+"</"+n+">":"<"+n+' data-rh="true">'+_(c,u)+"</"+n+">"}(t,e.title,e.titleAttributes,r)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return $(e)},toString:function(){return B(e)}};default:return{toComponent:function(){return I(t,e)},toString:function(){return function(n,i,a){return i.reduce(function(u,o){var c=Object.keys(o).filter(function(m){return!(m==="innerHTML"||m==="cssText")}).reduce(function(m,d){var v=o[d]===void 0?d:d+'="'+_(o[d],a)+'"';return m?m+" "+v:v},""),T=o.innerHTML||o.cssText||"",b=dt.indexOf(n)===-1;return u+"<"+n+' data-rh="true" '+c+(b?"/>":">"+T+"</"+n+">")},"")}(t,e,r)}}}},mt=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,i=t.htmlAttributes,a=t.noscriptTags,u=t.styleTags,o=t.title,c=o===void 0?"":o,T=t.titleAttributes,b=t.linkTags,m=t.metaTags,d=t.scriptTags,v={toComponent:function(){},toString:function(){return""}};if(t.prioritizeSeoTags){var O=function(f){var h=f.linkTags,x=f.scriptTags,y=f.encode,w=L(f.metaTags,pt),E=L(h,ct),C=L(x,ft);return{priorityMethods:{toComponent:function(){return[].concat(I(p.META,w.priority),I(p.LINK,E.priority),I(p.SCRIPT,C.priority))},toString:function(){return g(p.META,w.priority,y)+" "+g(p.LINK,E.priority,y)+" "+g(p.SCRIPT,C.priority,y)}},metaTags:w.default,linkTags:E.default,scriptTags:C.default}}(t);v=O.priorityMethods,b=O.linkTags,m=O.metaTags,d=O.scriptTags}return{priority:v,base:g(p.BASE,e,n),bodyAttributes:g("bodyAttributes",r,n),htmlAttributes:g("htmlAttributes",i,n),link:g(p.LINK,b,n),meta:g(p.META,m,n),noscript:g(p.NOSCRIPT,a,n),script:g(p.SCRIPT,d,n),style:g(p.STYLE,u,n),title:g(p.TITLE,{title:c,titleAttributes:T},n)}},N=[],bt=function(t,e){var r=this;e===void 0&&(e=typeof document<"u"),this.instances=[],this.value={setHelmet:function(n){r.context.helmet=n},helmetInstances:{get:function(){return r.canUseDOM?N:r.instances},add:function(n){(r.canUseDOM?N:r.instances).push(n)},remove:function(n){var i=(r.canUseDOM?N:r.instances).indexOf(n);(r.canUseDOM?N:r.instances).splice(i,1)}}},this.context=t,this.canUseDOM=e,e||(t.helmet=mt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},ht=K.createContext({}),yt=s.exports.shape({setHelmet:s.exports.func,helmetInstances:s.exports.shape({get:s.exports.func,add:s.exports.func,remove:s.exports.func})}),gt=typeof document<"u",A=function(t){function e(r){var n;return(n=t.call(this,r)||this).helmetData=new bt(n.props.context,e.canUseDOM),n}return at(e,t),e.prototype.render=function(){return S(ht.Provider,{value:this.helmetData.value,children:this.props.children})},e}(j.exports.Component);A.canUseDOM=gt,A.propTypes={context:s.exports.shape({helmet:s.exports.shape()}),children:s.exports.node.isRequired},A.defaultProps={context:{}},A.displayName="HelmetProvider";yt.isRequired;s.exports.object,s.exports.object,s.exports.oneOfType([s.exports.arrayOf(s.exports.node),s.exports.node]),s.exports.string,s.exports.bool,s.exports.bool,s.exports.object,s.exports.arrayOf(s.exports.object),s.exports.arrayOf(s.exports.object),s.exports.arrayOf(s.exports.object),s.exports.func,s.exports.arrayOf(s.exports.object),s.exports.arrayOf(s.exports.object),s.exports.string,s.exports.object,s.exports.string,s.exports.bool,s.exports.object;function vt(t){var e=t.store,r=t.context,n=t.children,i=j.exports.useMemo(function(){var o=Z(e);return{store:e,subscription:o}},[e]),a=j.exports.useMemo(function(){return e.getState()},[e]);Q(function(){var o=i.subscription;return o.onStateChange=o.notifyNestedSubs,o.trySubscribe(),a!==e.getState()&&o.notifyNestedSubs(),function(){o.tryUnsubscribe(),o.onStateChange=null}},[i,a]);var u=r||tt;return S(u.Provider,{value:i,children:n})}function Tt(t,e){if(U(t)!=="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(U(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ot(t){var e=Tt(t,"string");return U(e)==="symbol"?e:String(e)}function xt(t,e,r){return e=Ot(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function Y(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?W(Object(r),!0).forEach(function(n){xt(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function l(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var z=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),D=function(){return Math.random().toString(36).substring(7).split("").join(".")},P={INIT:"@@redux/INIT"+D(),REPLACE:"@@redux/REPLACE"+D(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+D()}};function St(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function R(t,e,r){var n;if(typeof e=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(l(0));if(typeof e=="function"&&typeof r>"u"&&(r=e,e=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(l(1));return r(R)(t,e)}if(typeof t!="function")throw new Error(l(2));var i=t,a=e,u=[],o=u,c=!1;function T(){o===u&&(o=u.slice())}function b(){if(c)throw new Error(l(3));return a}function m(f){if(typeof f!="function")throw new Error(l(4));if(c)throw new Error(l(5));var h=!0;return T(),o.push(f),function(){if(!!h){if(c)throw new Error(l(6));h=!1,T();var y=o.indexOf(f);o.splice(y,1),u=null}}}function d(f){if(!St(f))throw new Error(l(7));if(typeof f.type>"u")throw new Error(l(8));if(c)throw new Error(l(9));try{c=!0,a=i(a,f)}finally{c=!1}for(var h=u=o,x=0;x<h.length;x++){var y=h[x];y()}return f}function v(f){if(typeof f!="function")throw new Error(l(10));i=f,d({type:P.REPLACE})}function O(){var f,h=m;return f={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(l(11));function w(){y.next&&y.next(b())}w();var E=h(w);return{unsubscribe:E}}},f[z]=function(){return this},f}return d({type:P.INIT}),n={dispatch:d,subscribe:m,getState:b,replaceReducer:v},n[z]=O,n}var wt=R;function Et(t){Object.keys(t).forEach(function(e){var r=t[e],n=r(void 0,{type:P.INIT});if(typeof n>"u")throw new Error(l(12));if(typeof r(void 0,{type:P.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(l(13))})}function V(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var i=e[n];typeof t[i]=="function"&&(r[i]=t[i])}var a=Object.keys(r),u;try{Et(r)}catch(o){u=o}return function(c,T){if(c===void 0&&(c={}),u)throw u;for(var b=!1,m={},d=0;d<a.length;d++){var v=a[d],O=r[v],f=c[v],h=O(f,T);if(typeof h>"u")throw T&&T.type,new Error(l(14));m[v]=h,b=b||h!==f}return b=b||a.length!==Object.keys(c).length,b?m:c}}function F(t,e){return function(){return e(t.apply(this,arguments))}}function At(t,e){if(typeof t=="function")return F(t,e);if(typeof t!="object"||t===null)throw new Error(l(16));var r={};for(var n in t){var i=t[n];typeof i=="function"&&(r[n]=F(i,e))}return r}function X(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.length===0?function(n){return n}:e.length===1?e[0]:e.reduce(function(n,i){return function(){return n(i.apply(void 0,arguments))}})}function jt(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(n){return function(){var i=n.apply(void 0,arguments),a=function(){throw new Error(l(15))},u={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},o=e.map(function(c){return c(u)});return a=X.apply(void 0,o)(i.dispatch),Y(Y({},i),{},{dispatch:a})}}}const Pt=Object.freeze(Object.defineProperty({__proto__:null,__DO_NOT_USE__ActionTypes:P,applyMiddleware:jt,bindActionCreators:At,combineReducers:V,compose:X,createStore:R,legacy_createStore:wt},Symbol.toStringTag,{value:"Module"})),Nt=J(Pt);var G=Nt.compose,It=function(){if(arguments.length!==0)return typeof arguments[0]=="object"?G:G.apply(null,arguments)};const Mt={errorType:null},Rt=q({name:"error",initialState:Mt,reducers:{showNotFound(t){t.errorType="NOT_FOUND"},reset(t){t.errorType=null}}}),Ct={main:0,"user/posts":0},Lt=q({name:"scroll",initialState:Ct,reducers:{preserveScroll(t,{payload:{key:e,top:r}}){t[e]=r}}}),_t={timeframe:"week"},Dt=q({name:"home",initialState:_t,reducers:{choose(t,e){t.timeframe=e.payload}}}),Ut=V({core:it,news:et.reducer,error:Rt.reducer,scroll:Lt.reducer,home:Dt.reducer,theme:rt.reducer,notifications:st.reducer});const H=R(Ut,window.__REDUX_STATE__,It()),kt=()=>{const t=ut.getItem("theme");!t||(t==="dark"?H.dispatch(nt()):H.dispatch(ot()),document.body.dataset.theme=t)};function $t(t){return kt(),S(j.exports.Fragment,{children:S(j.exports.StrictMode,{children:S(A,{children:S(vt,{store:H,children:S(t,{})})})})})}export{$t as default};
