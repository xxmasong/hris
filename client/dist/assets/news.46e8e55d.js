import{r as Ce,R as kt,a as Wt}from"./index.367d4241.js";var Lt={exports:{}},zt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",qt=zt,Bt=qt;function ht(){}function mt(){}mt.resetWarningCache=ht;var Ut=function(){function e(n,o,a,u,c,f){if(f!==Bt){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:mt,resetWarningCache:ht};return r.PropTypes=r,r};Lt.exports=Ut();var se={exports:{}},le={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vt=Ce.exports,Kt=Symbol.for("react.element"),Gt=Symbol.for("react.fragment"),Yt=Object.prototype.hasOwnProperty,Ht=Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jt={key:!0,ref:!0,__self:!0,__source:!0};function bt(e,t,r){var n,o={},a=null,u=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(u=t.ref);for(n in t)Yt.call(t,n)&&!Jt.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Kt,type:e,key:a,ref:u,props:o,_owner:Ht.current}}le.Fragment=Gt;le.jsx=bt;le.jsxs=bt;(function(e){e.exports=le})(se);const un=se.exports.Fragment,cn=se.exports.jsx,fn=se.exports.jsxs;var sn=kt.createContext(null);function Xt(e){e()}var gt=Xt,Qt=function(t){return gt=t},Zt=function(){return gt};function er(){var e=Zt(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e(function(){for(var o=t;o;)o.callback(),o=o.next})},get:function(){for(var o=[],a=t;a;)o.push(a),a=a.next;return o},subscribe:function(o){var a=!0,u=r={callback:o,next:null,prev:r};return u.prev?u.prev.next=u:t=u,function(){!a||t===null||(a=!1,u.next?u.next.prev=u.prev:r=u.prev,u.prev?u.prev.next=u.next:t=u.next)}}}}var tt={notify:function(){},get:function(){return[]}};function ln(e,t){var r,n=tt;function o(l){return f(),n.subscribe(l)}function a(){n.notify()}function u(){s.onStateChange&&s.onStateChange()}function c(){return Boolean(r)}function f(){r||(r=t?t.addNestedSub(u):e.subscribe(u),n=er())}function i(){r&&(r(),r=void 0,n.clear(),n=tt)}var s={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:c,trySubscribe:f,tryUnsubscribe:i,getListeners:function(){return n}};return s}var dn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?Ce.exports.useLayoutEffect:Ce.exports.useEffect;function Me(){return Me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Me.apply(this,arguments)}var wt={exports:{}},h={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=typeof Symbol=="function"&&Symbol.for,Le=O?Symbol.for("react.element"):60103,ze=O?Symbol.for("react.portal"):60106,de=O?Symbol.for("react.fragment"):60107,pe=O?Symbol.for("react.strict_mode"):60108,ye=O?Symbol.for("react.profiler"):60114,ve=O?Symbol.for("react.provider"):60109,he=O?Symbol.for("react.context"):60110,qe=O?Symbol.for("react.async_mode"):60111,me=O?Symbol.for("react.concurrent_mode"):60111,be=O?Symbol.for("react.forward_ref"):60112,ge=O?Symbol.for("react.suspense"):60113,tr=O?Symbol.for("react.suspense_list"):60120,we=O?Symbol.for("react.memo"):60115,Pe=O?Symbol.for("react.lazy"):60116,rr=O?Symbol.for("react.block"):60121,nr=O?Symbol.for("react.fundamental"):60117,or=O?Symbol.for("react.responder"):60118,ar=O?Symbol.for("react.scope"):60119;function _(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Le:switch(e=e.type,e){case qe:case me:case de:case ye:case pe:case ge:return e;default:switch(e=e&&e.$$typeof,e){case he:case be:case Pe:case we:case ve:return e;default:return t}}case ze:return t}}}function Pt(e){return _(e)===me}h.AsyncMode=qe;h.ConcurrentMode=me;h.ContextConsumer=he;h.ContextProvider=ve;h.Element=Le;h.ForwardRef=be;h.Fragment=de;h.Lazy=Pe;h.Memo=we;h.Portal=ze;h.Profiler=ye;h.StrictMode=pe;h.Suspense=ge;h.isAsyncMode=function(e){return Pt(e)||_(e)===qe};h.isConcurrentMode=Pt;h.isContextConsumer=function(e){return _(e)===he};h.isContextProvider=function(e){return _(e)===ve};h.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Le};h.isForwardRef=function(e){return _(e)===be};h.isFragment=function(e){return _(e)===de};h.isLazy=function(e){return _(e)===Pe};h.isMemo=function(e){return _(e)===we};h.isPortal=function(e){return _(e)===ze};h.isProfiler=function(e){return _(e)===ye};h.isStrictMode=function(e){return _(e)===pe};h.isSuspense=function(e){return _(e)===ge};h.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===de||e===me||e===ye||e===pe||e===ge||e===tr||typeof e=="object"&&e!==null&&(e.$$typeof===Pe||e.$$typeof===we||e.$$typeof===ve||e.$$typeof===he||e.$$typeof===be||e.$$typeof===nr||e.$$typeof===or||e.$$typeof===ar||e.$$typeof===rr)};h.typeOf=_;(function(e){e.exports=h})(wt);var Be=wt.exports,ir={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ur={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ot={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ue={};Ue[Be.ForwardRef]=cr;Ue[Be.Memo]=Ot;function rt(e){return Be.isMemo(e)?Ot:Ue[e.$$typeof]||ir}var fr=Object.defineProperty,sr=Object.getOwnPropertyNames,nt=Object.getOwnPropertySymbols,lr=Object.getOwnPropertyDescriptor,dr=Object.getPrototypeOf,ot=Object.prototype;function St(e,t,r){if(typeof t!="string"){if(ot){var n=dr(t);n&&n!==ot&&St(e,n,r)}var o=sr(t);nt&&(o=o.concat(nt(t)));for(var a=rt(e),u=rt(t),c=0;c<o.length;++c){var f=o[c];if(!ur[f]&&!(r&&r[f])&&!(u&&u[f])&&!(a&&a[f])){var i=lr(t,f);try{fr(e,f,i)}catch{}}}}return e}var pn=St,pr={exports:{}},m={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oe=60103,Se=60106,Q=60107,Z=60108,ee=60114,te=60109,re=60110,ne=60112,oe=60113,Ve=60120,ae=60115,ie=60116,$t=60121,jt=60122,_t=60117,xt=60129,Rt=60131;if(typeof Symbol=="function"&&Symbol.for){var $=Symbol.for;Oe=$("react.element"),Se=$("react.portal"),Q=$("react.fragment"),Z=$("react.strict_mode"),ee=$("react.profiler"),te=$("react.provider"),re=$("react.context"),ne=$("react.forward_ref"),oe=$("react.suspense"),Ve=$("react.suspense_list"),ae=$("react.memo"),ie=$("react.lazy"),$t=$("react.block"),jt=$("react.server.block"),_t=$("react.fundamental"),xt=$("react.debug_trace_mode"),Rt=$("react.legacy_hidden")}function E(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Oe:switch(e=e.type,e){case Q:case ee:case Z:case oe:case Ve:return e;default:switch(e=e&&e.$$typeof,e){case re:case ne:case ie:case ae:case te:return e;default:return t}}case Se:return t}}}var yr=te,vr=Oe,hr=ne,mr=Q,br=ie,gr=ae,wr=Se,Pr=ee,Or=Z,Sr=oe;m.ContextConsumer=re;m.ContextProvider=yr;m.Element=vr;m.ForwardRef=hr;m.Fragment=mr;m.Lazy=br;m.Memo=gr;m.Portal=wr;m.Profiler=Pr;m.StrictMode=Or;m.Suspense=Sr;m.isAsyncMode=function(){return!1};m.isConcurrentMode=function(){return!1};m.isContextConsumer=function(e){return E(e)===re};m.isContextProvider=function(e){return E(e)===te};m.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oe};m.isForwardRef=function(e){return E(e)===ne};m.isFragment=function(e){return E(e)===Q};m.isLazy=function(e){return E(e)===ie};m.isMemo=function(e){return E(e)===ae};m.isPortal=function(e){return E(e)===Se};m.isProfiler=function(e){return E(e)===ee};m.isStrictMode=function(e){return E(e)===Z};m.isSuspense=function(e){return E(e)===oe};m.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Q||e===ee||e===xt||e===Z||e===oe||e===Ve||e===Rt||typeof e=="object"&&e!==null&&(e.$$typeof===ie||e.$$typeof===ae||e.$$typeof===te||e.$$typeof===re||e.$$typeof===ne||e.$$typeof===_t||e.$$typeof===$t||e[0]===jt)};m.typeOf=E;(function(e){e.exports=m})(pr);Qt(Wt.exports.unstable_batchedUpdates);function T(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+e+(r.length?" "+r.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function D(e){return!!e&&!!e[b]}function M(e){var t;return!!e&&(function(r){if(!r||typeof r!="object")return!1;var n=Object.getPrototypeOf(r);if(n===null)return!0;var o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===Cr}(e)||Array.isArray(e)||!!e[lt]||!!(!((t=e.constructor)===null||t===void 0)&&t[lt])||Ke(e)||Ge(e))}function W(e,t,r){r===void 0&&(r=!1),U(e)===0?(r?Object.keys:B)(e).forEach(function(n){r&&typeof n=="symbol"||t(n,e[n],e)}):e.forEach(function(n,o){return t(o,n,e)})}function U(e){var t=e[b];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:Ke(e)?2:Ge(e)?3:0}function q(e,t){return U(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function $r(e,t){return U(e)===2?e.get(t):e[t]}function At(e,t,r){var n=U(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function Tt(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function Ke(e){return Tr&&e instanceof Map}function Ge(e){return Er&&e instanceof Set}function F(e){return e.o||e.t}function Ye(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=Ct(e);delete t[b];for(var r=B(t),n=0;n<r.length;n++){var o=r[n],a=t[o];a.writable===!1&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[o]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function He(e,t){return t===void 0&&(t=!1),Je(e)||D(e)||!M(e)||(U(e)>1&&(e.set=e.add=e.clear=e.delete=jr),Object.freeze(e),t&&W(e,function(r,n){return He(n,!0)},!0)),e}function jr(){T(2)}function Je(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function C(e){var t=Fe[e];return t||T(18,e),t}function _r(e,t){Fe[e]||(Fe[e]=t)}function Ne(){return H}function je(e,t){t&&(C("Patches"),e.u=[],e.s=[],e.v=t)}function ue(e){Ie(e),e.p.forEach(xr),e.p=null}function Ie(e){e===H&&(H=e.l)}function at(e){return H={p:[],l:H,h:e,m:!0,_:0}}function xr(e){var t=e[b];t.i===0||t.i===1?t.j():t.g=!0}function _e(e,t){t._=t.p.length;var r=t.p[0],n=e!==void 0&&e!==r;return t.h.O||C("ES5").S(t,e,n),n?(r[b].P&&(ue(t),T(4)),M(e)&&(e=ce(t,e),t.l||fe(t,e)),t.u&&C("Patches").M(r[b].t,e,t.u,t.s)):e=ce(t,r,[]),ue(t),t.u&&t.v(t.u,t.s),e!==Et?e:void 0}function ce(e,t,r){if(Je(t))return t;var n=t[b];if(!n)return W(t,function(c,f){return it(e,n,t,c,f,r)},!0),t;if(n.A!==e)return t;if(!n.P)return fe(e,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=n.i===4||n.i===5?n.o=Ye(n.k):n.o,a=o,u=!1;n.i===3&&(a=new Set(o),o.clear(),u=!0),W(a,function(c,f){return it(e,n,o,c,f,r,u)}),fe(e,o,!1),r&&e.u&&C("Patches").N(n,r,e.u,e.s)}return n.o}function it(e,t,r,n,o,a,u){if(D(o)){var c=ce(e,o,a&&t&&t.i!==3&&!q(t.R,n)?a.concat(n):void 0);if(At(r,n,c),!D(c))return;e.m=!1}else u&&r.add(o);if(M(o)&&!Je(o)){if(!e.h.D&&e._<1)return;ce(e,o),t&&t.A.l||fe(e,o)}}function fe(e,t,r){r===void 0&&(r=!1),!e.l&&e.h.D&&e.m&&He(t,r)}function xe(e,t){var r=e[b];return(r?F(r):e)[t]}function ut(e,t){if(t in e)for(var r=Object.getPrototypeOf(e);r;){var n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Object.getPrototypeOf(r)}}function N(e){e.P||(e.P=!0,e.l&&N(e.l))}function Re(e){e.o||(e.o=Ye(e.t))}function De(e,t,r){var n=Ke(t)?C("MapSet").F(t,r):Ge(t)?C("MapSet").T(t,r):e.O?function(o,a){var u=Array.isArray(o),c={i:u?1:0,A:a?a.A:Ne(),P:!1,I:!1,R:{},l:a,t:o,k:null,o:null,j:null,C:!1},f=c,i=J;u&&(f=[c],i=Y);var s=Proxy.revocable(f,i),l=s.revoke,d=s.proxy;return c.k=d,c.j=l,d}(t,r):C("ES5").J(t,r);return(r?r.A:Ne()).p.push(n),n}function Rr(e){return D(e)||T(22,e),function t(r){if(!M(r))return r;var n,o=r[b],a=U(r);if(o){if(!o.P&&(o.i<4||!C("ES5").K(o)))return o.t;o.I=!0,n=ct(r,a),o.I=!1}else n=ct(r,a);return W(n,function(u,c){o&&$r(o.t,u)===c||At(n,u,t(c))}),a===3?new Set(n):n}(e)}function ct(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return Ye(e)}function Ar(){function e(a,u){var c=o[a];return c?c.enumerable=u:o[a]=c={configurable:!0,enumerable:u,get:function(){var f=this[b];return J.get(f,a)},set:function(f){var i=this[b];J.set(i,a,f)}},c}function t(a){for(var u=a.length-1;u>=0;u--){var c=a[u][b];if(!c.P)switch(c.i){case 5:n(c)&&N(c);break;case 4:r(c)&&N(c)}}}function r(a){for(var u=a.t,c=a.k,f=B(c),i=f.length-1;i>=0;i--){var s=f[i];if(s!==b){var l=u[s];if(l===void 0&&!q(u,s))return!0;var d=c[s],p=d&&d[b];if(p?p.t!==l:!Tt(d,l))return!0}}var y=!!u[b];return f.length!==B(u).length+(y?0:1)}function n(a){var u=a.k;if(u.length!==a.t.length)return!0;var c=Object.getOwnPropertyDescriptor(u,u.length-1);if(c&&!c.get)return!0;for(var f=0;f<u.length;f++)if(!u.hasOwnProperty(f))return!0;return!1}var o={};_r("ES5",{J:function(a,u){var c=Array.isArray(a),f=function(s,l){if(s){for(var d=Array(l.length),p=0;p<l.length;p++)Object.defineProperty(d,""+p,e(p,!0));return d}var y=Ct(l);delete y[b];for(var v=B(y),S=0;S<v.length;S++){var g=v[S];y[g]=e(g,s||!!y[g].enumerable)}return Object.create(Object.getPrototypeOf(l),y)}(c,a),i={i:c?5:4,A:u?u.A:Ne(),P:!1,I:!1,R:{},l:u,t:a,k:f,o:null,g:!1,C:!1};return Object.defineProperty(f,b,{value:i,writable:!0}),f},S:function(a,u,c){c?D(u)&&u[b].A===a&&t(a.p):(a.u&&function f(i){if(i&&typeof i=="object"){var s=i[b];if(s){var l=s.t,d=s.k,p=s.R,y=s.i;if(y===4)W(d,function(w){w!==b&&(l[w]!==void 0||q(l,w)?p[w]||f(d[w]):(p[w]=!0,N(s)))}),W(l,function(w){d[w]!==void 0||q(d,w)||(p[w]=!1,N(s))});else if(y===5){if(n(s)&&(N(s),p.length=!0),d.length<l.length)for(var v=d.length;v<l.length;v++)p[v]=!1;else for(var S=l.length;S<d.length;S++)p[S]=!0;for(var g=Math.min(d.length,l.length),P=0;P<g;P++)d.hasOwnProperty(P)||(p[P]=!0),p[P]===void 0&&f(d[P])}}}}(a.p[0]),t(a.p))},K:function(a){return a.i===4?r(a):n(a)}})}var ft,H,Xe=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",Tr=typeof Map<"u",Er=typeof Set<"u",st=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Et=Xe?Symbol.for("immer-nothing"):((ft={})["immer-nothing"]=!0,ft),lt=Xe?Symbol.for("immer-draftable"):"__$immer_draftable",b=Xe?Symbol.for("immer-state"):"__$immer_state",Cr=""+Object.prototype.constructor,B=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,Ct=Object.getOwnPropertyDescriptors||function(e){var t={};return B(e).forEach(function(r){t[r]=Object.getOwnPropertyDescriptor(e,r)}),t},Fe={},J={get:function(e,t){if(t===b)return e;var r=F(e);if(!q(r,t))return function(o,a,u){var c,f=ut(a,u);return f?"value"in f?f.value:(c=f.get)===null||c===void 0?void 0:c.call(o.k):void 0}(e,r,t);var n=r[t];return e.I||!M(n)?n:n===xe(e.t,t)?(Re(e),e.o[t]=De(e.A.h,n,e)):n},has:function(e,t){return t in F(e)},ownKeys:function(e){return Reflect.ownKeys(F(e))},set:function(e,t,r){var n=ut(F(e),t);if(n!=null&&n.set)return n.set.call(e.k,r),!0;if(!e.P){var o=xe(F(e),t),a=o==null?void 0:o[b];if(a&&a.t===r)return e.o[t]=r,e.R[t]=!1,!0;if(Tt(r,o)&&(r!==void 0||q(e.t,t)))return!0;Re(e),N(e)}return e.o[t]===r&&(r!==void 0||t in e.o)||Number.isNaN(r)&&Number.isNaN(e.o[t])||(e.o[t]=r,e.R[t]=!0),!0},deleteProperty:function(e,t){return xe(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Re(e),N(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var r=F(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty:function(){T(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){T(12)}},Y={};W(J,function(e,t){Y[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Y.deleteProperty=function(e,t){return Y.set.call(this,e,t,void 0)},Y.set=function(e,t,r){return J.set.call(this,e[0],t,r,e[0])};var Mr=function(){function e(r){var n=this;this.O=st,this.D=!0,this.produce=function(o,a,u){if(typeof o=="function"&&typeof a!="function"){var c=a;a=o;var f=n;return function(v){var S=this;v===void 0&&(v=c);for(var g=arguments.length,P=Array(g>1?g-1:0),w=1;w<g;w++)P[w-1]=arguments[w];return f.produce(v,function(x){var R;return(R=a).call.apply(R,[S,x].concat(P))})}}var i;if(typeof a!="function"&&T(6),u!==void 0&&typeof u!="function"&&T(7),M(o)){var s=at(n),l=De(n,o,void 0),d=!0;try{i=a(l),d=!1}finally{d?ue(s):Ie(s)}return typeof Promise<"u"&&i instanceof Promise?i.then(function(v){return je(s,u),_e(v,s)},function(v){throw ue(s),v}):(je(s,u),_e(i,s))}if(!o||typeof o!="object"){if((i=a(o))===void 0&&(i=o),i===Et&&(i=void 0),n.D&&He(i,!0),u){var p=[],y=[];C("Patches").M(o,i,p,y),u(p,y)}return i}T(21,o)},this.produceWithPatches=function(o,a){if(typeof o=="function")return function(i){for(var s=arguments.length,l=Array(s>1?s-1:0),d=1;d<s;d++)l[d-1]=arguments[d];return n.produceWithPatches(i,function(p){return o.apply(void 0,[p].concat(l))})};var u,c,f=n.produce(o,a,function(i,s){u=i,c=s});return typeof Promise<"u"&&f instanceof Promise?f.then(function(i){return[i,u,c]}):[f,u,c]},typeof(r==null?void 0:r.useProxies)=="boolean"&&this.setUseProxies(r.useProxies),typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze)}var t=e.prototype;return t.createDraft=function(r){M(r)||T(8),D(r)&&(r=Rr(r));var n=at(this),o=De(this,r,void 0);return o[b].C=!0,Ie(n),o},t.finishDraft=function(r,n){var o=r&&r[b],a=o.A;return je(a,n),_e(void 0,a)},t.setAutoFreeze=function(r){this.D=r},t.setUseProxies=function(r){r&&!st&&T(20),this.O=r},t.applyPatches=function(r,n){var o;for(o=n.length-1;o>=0;o--){var a=n[o];if(a.path.length===0&&a.op==="replace"){r=a.value;break}}o>-1&&(n=n.slice(o+1));var u=C("Patches").$;return D(r)?u(r,n):this.produce(r,function(c){return u(c,n)})},e}(),j=new Mr,Mt=j.produce;j.produceWithPatches.bind(j);j.setAutoFreeze.bind(j);j.setUseProxies.bind(j);j.applyPatches.bind(j);j.createDraft.bind(j);j.finishDraft.bind(j);var Nt=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Nr=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,o,a,u;return u={next:c(0),throw:c(1),return:c(2)},typeof Symbol=="function"&&(u[Symbol.iterator]=function(){return this}),u;function c(i){return function(s){return f([i,s])}}function f(i){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(a=i[0]&2?o.return:i[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,i[1])).done)return a;switch(o=0,a&&(i=[i[0]&2,a.value]),i[0]){case 0:case 1:a=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,o=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!a||i[1]>a[0]&&i[1]<a[3])){r.label=i[1];break}if(i[0]===6&&r.label<a[1]){r.label=a[1],a=i;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(i);break}a[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(s){i=[6,s],o=0}finally{n=a=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},X=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},Ir=Object.defineProperty,Dr=Object.defineProperties,Fr=Object.getOwnPropertyDescriptors,dt=Object.getOwnPropertySymbols,kr=Object.prototype.hasOwnProperty,Wr=Object.prototype.propertyIsEnumerable,pt=function(e,t,r){return t in e?Ir(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},k=function(e,t){for(var r in t||(t={}))kr.call(t,r)&&pt(e,r,t[r]);if(dt)for(var n=0,o=dt(t);n<o.length;n++){var r=o[n];Wr.call(t,r)&&pt(e,r,t[r])}return e},Ae=function(e,t){return Dr(e,Fr(t))},Lr=function(e,t,r){return new Promise(function(n,o){var a=function(f){try{c(r.next(f))}catch(i){o(i)}},u=function(f){try{c(r.throw(f))}catch(i){o(i)}},c=function(f){return f.done?n(f.value):Promise.resolve(f.value).then(a,u)};c((r=r.apply(e,t)).next())})};(function(e){Nt(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,X([void 0],r[0].concat(this)))):new(t.bind.apply(t,X([void 0],r.concat(this))))},t})(Array);(function(e){Nt(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,X([void 0],r[0].concat(this)))):new(t.bind.apply(t,X([void 0],r.concat(this))))},t})(Array);function ke(e){return M(e)?Mt(e,function(){}):e}function I(e,t){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var a=t.apply(void 0,n);if(!a)throw new Error("prepareAction did not return an object");return k(k({type:e,payload:a.payload},"meta"in a&&{meta:a.meta}),"error"in a&&{error:a.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function It(e){var t={},r=[],n,o={addCase:function(a,u){var c=typeof a=="string"?a:a.type;if(c in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[c]=u,o},addMatcher:function(a,u){return r.push({matcher:a,reducer:u}),o},addDefaultCase:function(a){return n=a,o}};return e(o),[t,r,n]}function zr(e){return typeof e=="function"}function qr(e,t,r,n){r===void 0&&(r=[]);var o=typeof t=="function"?It(t):[t,r,n],a=o[0],u=o[1],c=o[2],f;if(zr(e))f=function(){return ke(e())};else{var i=ke(e);f=function(){return i}}function s(l,d){l===void 0&&(l=f());var p=X([a[d.type]],u.filter(function(y){var v=y.matcher;return v(d)}).map(function(y){var v=y.reducer;return v}));return p.filter(function(y){return!!y}).length===0&&(p=[c]),p.reduce(function(y,v){if(v)if(D(y)){var S=y,g=v(S,d);return g===void 0?y:g}else{if(M(y))return Mt(y,function(P){return v(P,d)});var g=v(y,d);if(g===void 0){if(y===null)return y;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return y},l)}return s.getInitialState=f,s}function Br(e,t){return e+"/"+t}function Dt(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:ke(e.initialState),n=e.reducers||{},o=Object.keys(n),a={},u={},c={};o.forEach(function(s){var l=n[s],d=Br(t,s),p,y;"reducer"in l?(p=l.reducer,y=l.prepare):p=l,a[s]=p,u[d]=p,c[s]=y?I(d,y):I(d)});function f(){var s=typeof e.extraReducers=="function"?It(e.extraReducers):[e.extraReducers],l=s[0],d=l===void 0?{}:l,p=s[1],y=p===void 0?[]:p,v=s[2],S=v===void 0?void 0:v,g=k(k({},d),u);return qr(r,function(P){for(var w in g)P.addCase(w,g[w]);for(var x=0,R=y;x<R.length;x++){var V=R[x];P.addMatcher(V.matcher,V.reducer)}S&&P.addDefaultCase(S)})}var i;return{name:t,reducer:function(s,l){return i||(i=f()),i(s,l)},actions:c,caseReducers:a,getInitialState:function(){return i||(i=f()),i.getInitialState()}}}var Ur="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Vr=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=Ur[Math.random()*64|0];return t},Kr=["name","message","stack","code"],Te=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),yt=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),Gr=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=Kr;r<n.length;r++){var o=n[r];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}};(function(){function e(t,r,n){var o=I(t+"/fulfilled",function(i,s,l,d){return{payload:i,meta:Ae(k({},d||{}),{arg:l,requestId:s,requestStatus:"fulfilled"})}}),a=I(t+"/pending",function(i,s,l){return{payload:void 0,meta:Ae(k({},l||{}),{arg:s,requestId:i,requestStatus:"pending"})}}),u=I(t+"/rejected",function(i,s,l,d,p){return{payload:d,error:(n&&n.serializeError||Gr)(i||"Rejected"),meta:Ae(k({},p||{}),{arg:l,requestId:s,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(i==null?void 0:i.name)==="AbortError",condition:(i==null?void 0:i.name)==="ConditionError"})}}),c=typeof AbortController<"u"?AbortController:function(){function i(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return i.prototype.abort=function(){},i}();function f(i){return function(s,l,d){var p=n!=null&&n.idGenerator?n.idGenerator(i):Vr(),y=new c,v;function S(P){v=P,y.abort()}var g=function(){return Lr(this,null,function(){var P,w,x,R,V,K,et;return Nr(this,function(L){switch(L.label){case 0:return L.trys.push([0,4,,5]),R=(P=n==null?void 0:n.condition)==null?void 0:P.call(n,i,{getState:l,extra:d}),Hr(R)?[4,R]:[3,2];case 1:R=L.sent(),L.label=2;case 2:if(R===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return V=new Promise(function(A,G){return y.signal.addEventListener("abort",function(){return G({name:"AbortError",message:v||"Aborted"})})}),s(a(p,i,(w=n==null?void 0:n.getPendingMeta)==null?void 0:w.call(n,{requestId:p,arg:i},{getState:l,extra:d}))),[4,Promise.race([V,Promise.resolve(r(i,{dispatch:s,getState:l,extra:d,requestId:p,signal:y.signal,abort:S,rejectWithValue:function(A,G){return new Te(A,G)},fulfillWithValue:function(A,G){return new yt(A,G)}})).then(function(A){if(A instanceof Te)throw A;return A instanceof yt?o(A.payload,p,i,A.meta):o(A,p,i)})])];case 3:return x=L.sent(),[3,5];case 4:return K=L.sent(),x=K instanceof Te?u(null,p,i,K.payload,K.meta):u(K,p,i),[3,5];case 5:return et=n&&!n.dispatchConditionRejection&&u.match(x)&&x.meta.condition,et||s(x),[2,x]}})})}();return Object.assign(g,{abort:S,requestId:p,arg:i,unwrap:function(){return g.then(Yr)}})}}return Object.assign(f,{pending:a,rejected:u,fulfilled:o,typePrefix:t})}return e.withTypes=function(){return e},e})();function Yr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Hr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Qe="listenerMiddleware";I(Qe+"/add");I(Qe+"/removeAll");I(Qe+"/remove");var vt;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:typeof global<"u"?global:globalThis);Ar();const Jr={theme:"default",systemTheme:"not-ready"},Xr=Dt({name:"theme",initialState:Jr,reducers:{enableTheme(e){e.theme="dark"},enableLightMode(e){e.theme="light"},setSystemTheme(e,t){e.systemTheme=t.payload}}}),{enableTheme:yn,enableLightMode:vn,setSystemTheme:hn}=Xr.actions;var $e={exports:{}};$e.exports=Ze;$e.exports.isMobile=Ze;$e.exports.default=Ze;const Qr=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,Zr=/CrOS/,en=/android|ipad|playbook|silk/i;function Ze(e){e||(e={});let t=e.ua;if(!t&&typeof navigator<"u"&&(t=navigator.userAgent),t&&t.headers&&typeof t.headers["user-agent"]=="string"&&(t=t.headers["user-agent"]),typeof t!="string")return!1;let r=Qr.test(t)&&!Zr.test(t)||!!e.tablet&&en.test(t);return!r&&e.tablet&&e.featureDetect&&navigator&&navigator.maxTouchPoints>1&&t.indexOf("Macintosh")!==-1&&t.indexOf("Safari")!==-1&&(r=!0),r}const tn=$e.exports();function z(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function Ft(e){if(!z(e))return e;const t={};return Object.keys(e).forEach(r=>{t[r]=Ft(e[r])}),t}function We(e,t,r={clone:!0}){const n=r.clone?Me({},e):e;return z(e)&&z(t)&&Object.keys(t).forEach(o=>{o!=="__proto__"&&(z(t[o])&&o in e&&z(e[o])?n[o]=We(e[o],t[o],r):r.clone?n[o]=z(t[o])?Ft(t[o]):t[o]:n[o]=t[o])}),n}const Ee={palette:{background:{default:"#fafafa",paper:"#fff"}},components:{MuiButtonBase:{defaultProps:{disableRipple:!0}},MuiDivider:{styleOverrides:{vertical:{marginRight:10,marginLeft:10},middle:{marginTop:10,marginBottom:10,width:"80%"}}}}},mn={light:We(Ee,{palette:{mode:"light",background:{default:"#fafafa",paper:"#fff"},primary:{main:"#3f51b5"}}}),dark:We(Ee,{palette:{mode:"dark",background:{default:"#111",paper:"#171717"},primary:{main:"#333"}}}),default:Ee},rn="xxmasong@gmail.com",bn={app:{crash:{title:"A Critical Error Occured!",options:{email:`Report bug to ${rn}`,reset:"Try resetting application here"}}},loader:{fail:"An error occured in component loading process. Try again later."},404:"Resource Not Found!"},gn={options:{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3},maxSnack:tn?3:4},wn={delay:300,minimumLoading:700},Pn="https://giphy.com/embed/xTiN0L7EW5trfOvEk0",nn={sources:[],articles:[],related:[],newsByCategory:{top:[],world:[],politics:[],business:[],entertainment:[],sports:[],health:[],technology:[],science:[]},article:void 0,nextPage:null},on=Dt({name:"news",initialState:nn,reducers:{setNewsSources(e,t){e.sources=t.payload},setNewsArticles(e,t){e.articles=t.payload},setRelatedNews(e,t){e.related=t.payload},setNewsByCategory(e,t){const{category:r,articles:n}=t.payload;e.newsByCategory[r]=n},setNewsReadArticle(e,t){e.article=t.payload},setNextPage(e,t){e.nextPage=t.payload}}}),{setNewsSources:On,setNewsArticles:Sn,setRelatedNews:$n,setNewsByCategory:jn,setNewsReadArticle:_n,setNextPage:xn}=on.actions;export{xn as A,Pn as B,un as F,sn as R,Me as _,Dt as a,vn as b,ln as c,gn as d,yn as e,fn as f,We as g,rn as h,z as i,cn as j,mn as k,pn as l,bn as m,on as n,wn as o,Lt as p,nn as q,On as r,hn as s,Xr as t,dn as u,pr as v,Sn as w,$n as x,jn as y,_n as z};