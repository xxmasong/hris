import{r as g,g as cr,R as sr}from"./index.724d464e.js";import{S as pr}from"./index.999239b2.js";import{W as L,X as w,Y as Ae,aw as dr}from"./App.bfe04db8.js";import{p as Fe,m as O,v as mr,G as hr,H as yr,J as gr,A as Je,L as Ie,t as vr,K as Me}from"./index.5460d30b.js";import{f as Q,j as y,F as Sr}from"./news.98d612ed.js";import{u as xr,a as br,c as wr,R as $r}from"./useNews.05a78353.js";import{u as Or}from"./useScrollPagination.a9ab45b0.js";import"./notifications.f7445e66.js";import"./typeof.2a08ffa3.js";function Er(r){const[e,t]=g.exports.useState(r),n=g.exports.useCallback(a=>{t(a.target.value)},[]),i=g.exports.useCallback(()=>t(""),[]);return[e,n,i]}function De(r,e,t,n){var i,a=!1,l=0;function u(){i&&clearTimeout(i)}function f(){u(),a=!0}typeof e!="boolean"&&(n=t,t=e,e=void 0);function o(){for(var s=arguments.length,d=new Array(s),c=0;c<s;c++)d[c]=arguments[c];var h=this,p=Date.now()-l;if(a)return;function S(){l=Date.now(),t.apply(h,d)}function $(){i=void 0}n&&!i&&S(),u(),n===void 0&&p>r?S():e!==!0&&(i=setTimeout(n?$:S,n===void 0?r-p:r))}return o.cancel=f,o}function Cr(r,e,t){return t===void 0?De(r,e,!1):De(r,t,e!==!1)}function Nr({className:r,onSearch:e,initial:t="",large:n,autosearch:i}){const[a,l]=mr(!1),[u,f]=Er(t),o=g.exports.useRef(null),s=g.exports.useRef(!1),d=g.exports.useMemo(()=>Cr(1e3,p=>{e(p)}),[e]),c=()=>{!o.current||o.current.focus()},h=p=>{p.key==="Enter"&&e(u)};return g.exports.useEffect(()=>{if(!s.current){s.current=!0;return}i&&d(u)},[d,i,u]),Q(Rr,{className:r,focus:a,onClick:c,large:n,children:[y(hr,{}),y("input",{placeholder:"Search news here ...",onFocus:l,onBlur:l,onKeyPress:h,ref:o,onChange:f,value:u,autoFocus:!0})]})}const Rr=L.div`
  display: flex;
  height: 2.25rem;
  border: 1px solid ${w.border2};
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  align-items: center;
  transition: all 0.125s ease-in;
  cursor: text;
  svg {
    transition: all 0.125s ease-in;
    margin-right: 0.5rem;
    width: 1rem;
    height: 1rem;
    fill: ${Fe.gray5};
    flex-shrink: 0;
  }
  input {
    transition: all 0.125s ease-in;
    font-size: 0.875rem;
    flex: 1;
    display: block;
    line-height: 1rem;
    height: 1rem;
    padding: 0;
    border: none;
    outline: 0;
    background: transparent;
    color: ${w.text2};
    min-width: 0;
    &::placeholder {
      color: ${w.text3};
    }
  }

  ${r=>r.focus&&Ae`
      border: 1px solid ${w.border1};
      svg {
        fill: ${Fe.gray9};
      }
      input {
        color: ${w.text1};
      }
    `}

  ${r=>r.large&&Ae`
      height: 4rem;
      padding: 0 1.5rem;
      svg {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1.25rem;
      }
      input {
        font-size: 1.5rem;
        line-height: 2rem;
        height: 2rem;
      }
      ${O.small} {
        height: 2.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
        svg {
          width: 1rem;
          height: 1rem;
          margin-right: 0.75rem;
        }
        input {
          flex: 1;
          font-size: 1.125rem;
          line-height: 1.5;
          height: auto;
        }
      }
    `}
`,Ar={},Fr=Object.freeze(Object.defineProperty({__proto__:null,default:Ar},Symbol.toStringTag,{value:"Module"})),Ir=cr(Fr);var we=typeof Map=="function"&&Map.prototype,fe=Object.getOwnPropertyDescriptor&&we?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,ie=we&&fe&&typeof fe.get=="function"?fe.get:null,Pe=we&&Map.prototype.forEach,$e=typeof Set=="function"&&Set.prototype,ue=Object.getOwnPropertyDescriptor&&$e?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,oe=$e&&ue&&typeof ue.get=="function"?ue.get:null,Te=$e&&Set.prototype.forEach,Mr=typeof WeakMap=="function"&&WeakMap.prototype,j=Mr?WeakMap.prototype.has:null,Dr=typeof WeakSet=="function"&&WeakSet.prototype,ee=Dr?WeakSet.prototype.has:null,Pr=typeof WeakRef=="function"&&WeakRef.prototype,Le=Pr?WeakRef.prototype.deref:null,Tr=Boolean.prototype.valueOf,Lr=Object.prototype.toString,zr=Function.prototype.toString,Wr=String.prototype.match,Oe=String.prototype.slice,T=String.prototype.replace,Br=String.prototype.toUpperCase,ze=String.prototype.toLowerCase,Xe=RegExp.prototype.test,We=Array.prototype.concat,N=Array.prototype.join,_r=Array.prototype.slice,Be=Math.floor,he=typeof BigInt=="function"?BigInt.prototype.valueOf:null,ce=Object.getOwnPropertySymbols,ye=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,U=typeof Symbol=="function"&&typeof Symbol.iterator=="object",b=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===U?"object":"symbol")?Symbol.toStringTag:null,Ye=Object.prototype.propertyIsEnumerable,_e=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function ke(r,e){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||Xe.call(/e/,e))return e;var t=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var n=r<0?-Be(-r):Be(r);if(n!==r){var i=String(n),a=Oe.call(e,i.length+1);return T.call(i,t,"$&_")+"."+T.call(T.call(a,/([0-9]{3})/g,"$&_"),/_$/,"")}}return T.call(e,t,"$&_")}var ge=Ir,He=ge.custom,qe=je(He)?He:null,kr=function r(e,t,n,i){var a=t||{};if(P(a,"quoteStyle")&&a.quoteStyle!=="single"&&a.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(P(a,"maxStringLength")&&(typeof a.maxStringLength=="number"?a.maxStringLength<0&&a.maxStringLength!==1/0:a.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var l=P(a,"customInspect")?a.customInspect:!0;if(typeof l!="boolean"&&l!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(P(a,"indent")&&a.indent!==null&&a.indent!=="	"&&!(parseInt(a.indent,10)===a.indent&&a.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(P(a,"numericSeparator")&&typeof a.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var u=a.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return rr(e,a);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var f=String(e);return u?ke(e,f):f}if(typeof e=="bigint"){var o=String(e)+"n";return u?ke(e,o):o}var s=typeof a.depth>"u"?5:a.depth;if(typeof n>"u"&&(n=0),n>=s&&s>0&&typeof e=="object")return ve(e)?"[Array]":"[Object]";var d=it(a,n);if(typeof i>"u")i=[];else if(er(i,e)>=0)return"[Circular]";function c(E,D,A){if(D&&(i=_r.call(i),i.push(D)),A){var Y={depth:a.depth};return P(a,"quoteStyle")&&(Y.quoteStyle=a.quoteStyle),r(E,Y,n+1,i)}return r(E,a,n+1,i)}if(typeof e=="function"&&!Qe(e)){var h=Xr(e),p=te(e,c);return"[Function"+(h?": "+h:" (anonymous)")+"]"+(p.length>0?" { "+N.call(p,", ")+" }":"")}if(je(e)){var S=U?T.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):ye.call(e);return typeof e=="object"&&!U?Z(S):S}if(tt(e)){for(var $="<"+ze.call(String(e.nodeName)),m=e.attributes||[],R=0;R<m.length;R++)$+=" "+m[R].name+"="+Ze(Hr(m[R].value),"double",a);return $+=">",e.childNodes&&e.childNodes.length&&($+="..."),$+="</"+ze.call(String(e.nodeName))+">",$}if(ve(e)){if(e.length===0)return"[]";var I=te(e,c);return d&&!at(I)?"["+Se(I,d)+"]":"[ "+N.call(I,", ")+" ]"}if(Qr(e)){var k=te(e,c);return!("cause"in Error.prototype)&&"cause"in e&&!Ye.call(e,"cause")?"{ ["+String(e)+"] "+N.call(We.call("[cause]: "+c(e.cause),k),", ")+" }":k.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+N.call(k,", ")+" }"}if(typeof e=="object"&&l){if(qe&&typeof e[qe]=="function"&&ge)return ge(e,{depth:s-n});if(l!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(Yr(e)){var K=[];return Pe&&Pe.call(e,function(E,D){K.push(c(D,e,!0)+" => "+c(E,e))}),Ue("Map",ie.call(e),K,d)}if(et(e)){var J=[];return Te&&Te.call(e,function(E){J.push(c(E,e))}),Ue("Set",oe.call(e),J,d)}if(Zr(e))return se("WeakMap");if(rt(e))return se("WeakSet");if(jr(e))return se("WeakRef");if(Vr(e))return Z(c(Number(e)));if(Kr(e))return Z(c(he.call(e)));if(Gr(e))return Z(Tr.call(e));if(Ur(e))return Z(c(String(e)));if(!qr(e)&&!Qe(e)){var W=te(e,c),X=_e?_e(e)===Object.prototype:e instanceof Object||e.constructor===Object,M=e instanceof Object?"":"null prototype",H=!X&&b&&Object(e)===e&&b in e?Oe.call(z(e),8,-1):M?"Object":"",B=X||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",q=B+(H||M?"["+N.call(We.call([],H||[],M||[]),": ")+"] ":"");return W.length===0?q+"{}":d?q+"{"+Se(W,d)+"}":q+"{ "+N.call(W,", ")+" }"}return String(e)};function Ze(r,e,t){var n=(t.quoteStyle||e)==="double"?'"':"'";return n+r+n}function Hr(r){return T.call(String(r),/"/g,"&quot;")}function ve(r){return z(r)==="[object Array]"&&(!b||!(typeof r=="object"&&b in r))}function qr(r){return z(r)==="[object Date]"&&(!b||!(typeof r=="object"&&b in r))}function Qe(r){return z(r)==="[object RegExp]"&&(!b||!(typeof r=="object"&&b in r))}function Qr(r){return z(r)==="[object Error]"&&(!b||!(typeof r=="object"&&b in r))}function Ur(r){return z(r)==="[object String]"&&(!b||!(typeof r=="object"&&b in r))}function Vr(r){return z(r)==="[object Number]"&&(!b||!(typeof r=="object"&&b in r))}function Gr(r){return z(r)==="[object Boolean]"&&(!b||!(typeof r=="object"&&b in r))}function je(r){if(U)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!ye)return!1;try{return ye.call(r),!0}catch{}return!1}function Kr(r){if(!r||typeof r!="object"||!he)return!1;try{return he.call(r),!0}catch{}return!1}var Jr=Object.prototype.hasOwnProperty||function(r){return r in this};function P(r,e){return Jr.call(r,e)}function z(r){return Lr.call(r)}function Xr(r){if(r.name)return r.name;var e=Wr.call(zr.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function er(r,e){if(r.indexOf)return r.indexOf(e);for(var t=0,n=r.length;t<n;t++)if(r[t]===e)return t;return-1}function Yr(r){if(!ie||!r||typeof r!="object")return!1;try{ie.call(r);try{oe.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function Zr(r){if(!j||!r||typeof r!="object")return!1;try{j.call(r,j);try{ee.call(r,ee)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function jr(r){if(!Le||!r||typeof r!="object")return!1;try{return Le.call(r),!0}catch{}return!1}function et(r){if(!oe||!r||typeof r!="object")return!1;try{oe.call(r);try{ie.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function rt(r){if(!ee||!r||typeof r!="object")return!1;try{ee.call(r,ee);try{j.call(r,j)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function tt(r){return!r||typeof r!="object"?!1:typeof HTMLElement<"u"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function rr(r,e){if(r.length>e.maxStringLength){var t=r.length-e.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return rr(Oe.call(r,0,e.maxStringLength),e)+n}var i=T.call(T.call(r,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,nt);return Ze(i,"single",e)}function nt(r){var e=r.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return t?"\\"+t:"\\x"+(e<16?"0":"")+Br.call(e.toString(16))}function Z(r){return"Object("+r+")"}function se(r){return r+" { ? }"}function Ue(r,e,t,n){var i=n?Se(t,n):N.call(t,", ");return r+" ("+e+") {"+i+"}"}function at(r){for(var e=0;e<r.length;e++)if(er(r[e],`
`)>=0)return!1;return!0}function it(r,e){var t;if(r.indent==="	")t="	";else if(typeof r.indent=="number"&&r.indent>0)t=N.call(Array(r.indent+1)," ");else return null;return{base:t,prev:N.call(Array(e+1),t)}}function Se(r,e){if(r.length===0)return"";var t=`
`+e.prev+e.base;return t+N.call(r,","+t)+`
`+e.prev}function te(r,e){var t=ve(r),n=[];if(t){n.length=r.length;for(var i=0;i<r.length;i++)n[i]=P(r,i)?e(r[i],r):""}var a=typeof ce=="function"?ce(r):[],l;if(U){l={};for(var u=0;u<a.length;u++)l["$"+a[u]]=a[u]}for(var f in r)!P(r,f)||t&&String(Number(f))===f&&f<r.length||U&&l["$"+f]instanceof Symbol||(Xe.call(/[^\w$]/,f)?n.push(e(f,r)+": "+e(r[f],r)):n.push(f+": "+e(r[f],r)));if(typeof ce=="function")for(var o=0;o<a.length;o++)Ye.call(r,a[o])&&n.push("["+e(a[o])+"]: "+e(r[a[o]],r));return n}var Ee=yr,G=gr,ot=kr,lt=Ee("%TypeError%"),ne=Ee("%WeakMap%",!0),ae=Ee("%Map%",!0),ft=G("WeakMap.prototype.get",!0),ut=G("WeakMap.prototype.set",!0),ct=G("WeakMap.prototype.has",!0),st=G("Map.prototype.get",!0),pt=G("Map.prototype.set",!0),dt=G("Map.prototype.has",!0),Ce=function(r,e){for(var t=r,n;(n=t.next)!==null;t=n)if(n.key===e)return t.next=n.next,n.next=r.next,r.next=n,n},mt=function(r,e){var t=Ce(r,e);return t&&t.value},ht=function(r,e,t){var n=Ce(r,e);n?n.value=t:r.next={key:e,next:r.next,value:t}},yt=function(r,e){return!!Ce(r,e)},gt=function(){var e,t,n,i={assert:function(a){if(!i.has(a))throw new lt("Side channel does not contain "+ot(a))},get:function(a){if(ne&&a&&(typeof a=="object"||typeof a=="function")){if(e)return ft(e,a)}else if(ae){if(t)return st(t,a)}else if(n)return mt(n,a)},has:function(a){if(ne&&a&&(typeof a=="object"||typeof a=="function")){if(e)return ct(e,a)}else if(ae){if(t)return dt(t,a)}else if(n)return yt(n,a);return!1},set:function(a,l){ne&&a&&(typeof a=="object"||typeof a=="function")?(e||(e=new ne),ut(e,a,l)):ae?(t||(t=new ae),pt(t,a,l)):(n||(n={key:{},next:null}),ht(n,a,l))}};return i},vt=String.prototype.replace,St=/%20/g,pe={RFC1738:"RFC1738",RFC3986:"RFC3986"},Ne={default:pe.RFC3986,formatters:{RFC1738:function(r){return vt.call(r,St,"+")},RFC3986:function(r){return String(r)}},RFC1738:pe.RFC1738,RFC3986:pe.RFC3986},xt=Ne,de=Object.prototype.hasOwnProperty,_=Array.isArray,C=function(){for(var r=[],e=0;e<256;++e)r.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return r}(),bt=function(e){for(;e.length>1;){var t=e.pop(),n=t.obj[t.prop];if(_(n)){for(var i=[],a=0;a<n.length;++a)typeof n[a]<"u"&&i.push(n[a]);t.obj[t.prop]=i}}},tr=function(e,t){for(var n=t&&t.plainObjects?Object.create(null):{},i=0;i<e.length;++i)typeof e[i]<"u"&&(n[i]=e[i]);return n},wt=function r(e,t,n){if(!t)return e;if(typeof t!="object"){if(_(e))e.push(t);else if(e&&typeof e=="object")(n&&(n.plainObjects||n.allowPrototypes)||!de.call(Object.prototype,t))&&(e[t]=!0);else return[e,t];return e}if(!e||typeof e!="object")return[e].concat(t);var i=e;return _(e)&&!_(t)&&(i=tr(e,n)),_(e)&&_(t)?(t.forEach(function(a,l){if(de.call(e,l)){var u=e[l];u&&typeof u=="object"&&a&&typeof a=="object"?e[l]=r(u,a,n):e.push(a)}else e[l]=a}),e):Object.keys(t).reduce(function(a,l){var u=t[l];return de.call(a,l)?a[l]=r(a[l],u,n):a[l]=u,a},i)},$t=function(e,t){return Object.keys(t).reduce(function(n,i){return n[i]=t[i],n},e)},Ot=function(r,e,t){var n=r.replace(/\+/g," ");if(t==="iso-8859-1")return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch{return n}},Et=function(e,t,n,i,a){if(e.length===0)return e;var l=e;if(typeof e=="symbol"?l=Symbol.prototype.toString.call(e):typeof e!="string"&&(l=String(e)),n==="iso-8859-1")return escape(l).replace(/%u[0-9a-f]{4}/gi,function(s){return"%26%23"+parseInt(s.slice(2),16)+"%3B"});for(var u="",f=0;f<l.length;++f){var o=l.charCodeAt(f);if(o===45||o===46||o===95||o===126||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||a===xt.RFC1738&&(o===40||o===41)){u+=l.charAt(f);continue}if(o<128){u=u+C[o];continue}if(o<2048){u=u+(C[192|o>>6]+C[128|o&63]);continue}if(o<55296||o>=57344){u=u+(C[224|o>>12]+C[128|o>>6&63]+C[128|o&63]);continue}f+=1,o=65536+((o&1023)<<10|l.charCodeAt(f)&1023),u+=C[240|o>>18]+C[128|o>>12&63]+C[128|o>>6&63]+C[128|o&63]}return u},Ct=function(e){for(var t=[{obj:{o:e},prop:"o"}],n=[],i=0;i<t.length;++i)for(var a=t[i],l=a.obj[a.prop],u=Object.keys(l),f=0;f<u.length;++f){var o=u[f],s=l[o];typeof s=="object"&&s!==null&&n.indexOf(s)===-1&&(t.push({obj:l,prop:o}),n.push(s))}return bt(t),e},Nt=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"},Rt=function(e){return!e||typeof e!="object"?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},At=function(e,t){return[].concat(e,t)},Ft=function(e,t){if(_(e)){for(var n=[],i=0;i<e.length;i+=1)n.push(t(e[i]));return n}return t(e)},nr={arrayToObject:tr,assign:$t,combine:At,compact:Ct,decode:Ot,encode:Et,isBuffer:Rt,isRegExp:Nt,maybeMap:Ft,merge:wt},ar=gt,xe=nr,re=Ne,It=Object.prototype.hasOwnProperty,Ve={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},F=Array.isArray,Mt=String.prototype.split,Dt=Array.prototype.push,ir=function(r,e){Dt.apply(r,F(e)?e:[e])},Pt=Date.prototype.toISOString,Ge=re.default,x={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:xe.encode,encodeValuesOnly:!1,format:Ge,formatter:re.formatters[Ge],indices:!1,serializeDate:function(e){return Pt.call(e)},skipNulls:!1,strictNullHandling:!1},Tt=function(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"||typeof e=="symbol"||typeof e=="bigint"},me={},Lt=function r(e,t,n,i,a,l,u,f,o,s,d,c,h,p,S,$){for(var m=e,R=$,I=0,k=!1;(R=R.get(me))!==void 0&&!k;){var K=R.get(e);if(I+=1,typeof K<"u"){if(K===I)throw new RangeError("Cyclic object value");k=!0}typeof R.get(me)>"u"&&(I=0)}if(typeof f=="function"?m=f(t,m):m instanceof Date?m=d(m):n==="comma"&&F(m)&&(m=xe.maybeMap(m,function(le){return le instanceof Date?d(le):le})),m===null){if(a)return u&&!p?u(t,x.encoder,S,"key",c):t;m=""}if(Tt(m)||xe.isBuffer(m)){if(u){var J=p?t:u(t,x.encoder,S,"key",c);if(n==="comma"&&p){for(var W=Mt.call(String(m),","),X="",M=0;M<W.length;++M)X+=(M===0?"":",")+h(u(W[M],x.encoder,S,"value",c));return[h(J)+(i&&F(m)&&W.length===1?"[]":"")+"="+X]}return[h(J)+"="+h(u(m,x.encoder,S,"value",c))]}return[h(t)+"="+h(String(m))]}var H=[];if(typeof m>"u")return H;var B;if(n==="comma"&&F(m))B=[{value:m.length>0?m.join(",")||null:void 0}];else if(F(f))B=f;else{var q=Object.keys(m);B=o?q.sort(o):q}for(var E=i&&F(m)&&m.length===1?t+"[]":t,D=0;D<B.length;++D){var A=B[D],Y=typeof A=="object"&&typeof A.value<"u"?A.value:m[A];if(!(l&&Y===null)){var ur=F(m)?typeof n=="function"?n(E,A):E:E+(s?"."+A:"["+A+"]");$.set(e,I);var Re=ar();Re.set(me,$),ir(H,r(Y,ur,n,i,a,l,u,f,o,s,d,c,h,p,S,Re))}}return H},zt=function(e){if(!e)return x;if(e.encoder!==null&&typeof e.encoder<"u"&&typeof e.encoder!="function")throw new TypeError("Encoder has to be a function.");var t=e.charset||x.charset;if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=re.default;if(typeof e.format<"u"){if(!It.call(re.formatters,e.format))throw new TypeError("Unknown format option provided.");n=e.format}var i=re.formatters[n],a=x.filter;return(typeof e.filter=="function"||F(e.filter))&&(a=e.filter),{addQueryPrefix:typeof e.addQueryPrefix=="boolean"?e.addQueryPrefix:x.addQueryPrefix,allowDots:typeof e.allowDots>"u"?x.allowDots:!!e.allowDots,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:x.charsetSentinel,delimiter:typeof e.delimiter>"u"?x.delimiter:e.delimiter,encode:typeof e.encode=="boolean"?e.encode:x.encode,encoder:typeof e.encoder=="function"?e.encoder:x.encoder,encodeValuesOnly:typeof e.encodeValuesOnly=="boolean"?e.encodeValuesOnly:x.encodeValuesOnly,filter:a,format:n,formatter:i,serializeDate:typeof e.serializeDate=="function"?e.serializeDate:x.serializeDate,skipNulls:typeof e.skipNulls=="boolean"?e.skipNulls:x.skipNulls,sort:typeof e.sort=="function"?e.sort:null,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:x.strictNullHandling}},Wt=function(r,e){var t=r,n=zt(e),i,a;typeof n.filter=="function"?(a=n.filter,t=a("",t)):F(n.filter)&&(a=n.filter,i=a);var l=[];if(typeof t!="object"||t===null)return"";var u;e&&e.arrayFormat in Ve?u=e.arrayFormat:e&&"indices"in e?u=e.indices?"indices":"repeat":u="indices";var f=Ve[u];if(e&&"commaRoundTrip"in e&&typeof e.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var o=f==="comma"&&e&&e.commaRoundTrip;i||(i=Object.keys(t)),n.sort&&i.sort(n.sort);for(var s=ar(),d=0;d<i.length;++d){var c=i[d];n.skipNulls&&t[c]===null||ir(l,Lt(t[c],c,f,o,n.strictNullHandling,n.skipNulls,n.encode?n.encoder:null,n.filter,n.sort,n.allowDots,n.serializeDate,n.format,n.formatter,n.encodeValuesOnly,n.charset,s))}var h=l.join(n.delimiter),p=n.addQueryPrefix===!0?"?":"";return n.charsetSentinel&&(n.charset==="iso-8859-1"?p+="utf8=%26%2310003%3B&":p+="utf8=%E2%9C%93&"),h.length>0?p+h:""},V=nr,be=Object.prototype.hasOwnProperty,Bt=Array.isArray,v={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:V.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},_t=function(r){return r.replace(/&#(\d+);/g,function(e,t){return String.fromCharCode(parseInt(t,10))})},or=function(r,e){return r&&typeof r=="string"&&e.comma&&r.indexOf(",")>-1?r.split(","):r},kt="utf8=%26%2310003%3B",Ht="utf8=%E2%9C%93",qt=function(e,t){var n={},i=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,l=i.split(t.delimiter,a),u=-1,f,o=t.charset;if(t.charsetSentinel)for(f=0;f<l.length;++f)l[f].indexOf("utf8=")===0&&(l[f]===Ht?o="utf-8":l[f]===kt&&(o="iso-8859-1"),u=f,f=l.length);for(f=0;f<l.length;++f)if(f!==u){var s=l[f],d=s.indexOf("]="),c=d===-1?s.indexOf("="):d+1,h,p;c===-1?(h=t.decoder(s,v.decoder,o,"key"),p=t.strictNullHandling?null:""):(h=t.decoder(s.slice(0,c),v.decoder,o,"key"),p=V.maybeMap(or(s.slice(c+1),t),function(S){return t.decoder(S,v.decoder,o,"value")})),p&&t.interpretNumericEntities&&o==="iso-8859-1"&&(p=_t(p)),s.indexOf("[]=")>-1&&(p=Bt(p)?[p]:p),be.call(n,h)?n[h]=V.combine(n[h],p):n[h]=p}return n},Qt=function(r,e,t,n){for(var i=n?e:or(e,t),a=r.length-1;a>=0;--a){var l,u=r[a];if(u==="[]"&&t.parseArrays)l=[].concat(i);else{l=t.plainObjects?Object.create(null):{};var f=u.charAt(0)==="["&&u.charAt(u.length-1)==="]"?u.slice(1,-1):u,o=parseInt(f,10);!t.parseArrays&&f===""?l={0:i}:!isNaN(o)&&u!==f&&String(o)===f&&o>=0&&t.parseArrays&&o<=t.arrayLimit?(l=[],l[o]=i):f!=="__proto__"&&(l[f]=i)}i=l}return i},Ut=function(e,t,n,i){if(!!e){var a=n.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,l=/(\[[^[\]]*])/,u=/(\[[^[\]]*])/g,f=n.depth>0&&l.exec(a),o=f?a.slice(0,f.index):a,s=[];if(o){if(!n.plainObjects&&be.call(Object.prototype,o)&&!n.allowPrototypes)return;s.push(o)}for(var d=0;n.depth>0&&(f=u.exec(a))!==null&&d<n.depth;){if(d+=1,!n.plainObjects&&be.call(Object.prototype,f[1].slice(1,-1))&&!n.allowPrototypes)return;s.push(f[1])}return f&&s.push("["+a.slice(f.index)+"]"),Qt(s,t,n,i)}},Vt=function(e){if(!e)return v;if(e.decoder!==null&&e.decoder!==void 0&&typeof e.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof e.charset<"u"&&e.charset!=="utf-8"&&e.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=typeof e.charset>"u"?v.charset:e.charset;return{allowDots:typeof e.allowDots>"u"?v.allowDots:!!e.allowDots,allowPrototypes:typeof e.allowPrototypes=="boolean"?e.allowPrototypes:v.allowPrototypes,allowSparse:typeof e.allowSparse=="boolean"?e.allowSparse:v.allowSparse,arrayLimit:typeof e.arrayLimit=="number"?e.arrayLimit:v.arrayLimit,charset:t,charsetSentinel:typeof e.charsetSentinel=="boolean"?e.charsetSentinel:v.charsetSentinel,comma:typeof e.comma=="boolean"?e.comma:v.comma,decoder:typeof e.decoder=="function"?e.decoder:v.decoder,delimiter:typeof e.delimiter=="string"||V.isRegExp(e.delimiter)?e.delimiter:v.delimiter,depth:typeof e.depth=="number"||e.depth===!1?+e.depth:v.depth,ignoreQueryPrefix:e.ignoreQueryPrefix===!0,interpretNumericEntities:typeof e.interpretNumericEntities=="boolean"?e.interpretNumericEntities:v.interpretNumericEntities,parameterLimit:typeof e.parameterLimit=="number"?e.parameterLimit:v.parameterLimit,parseArrays:e.parseArrays!==!1,plainObjects:typeof e.plainObjects=="boolean"?e.plainObjects:v.plainObjects,strictNullHandling:typeof e.strictNullHandling=="boolean"?e.strictNullHandling:v.strictNullHandling}},Gt=function(r,e){var t=Vt(e);if(r===""||r===null||typeof r>"u")return t.plainObjects?Object.create(null):{};for(var n=typeof r=="string"?qt(r,t):r,i=t.plainObjects?Object.create(null):{},a=Object.keys(n),l=0;l<a.length;++l){var u=a[l],f=Ut(u,n[u],t,typeof r=="string");i=V.merge(i,f,t)}return t.allowSparse===!0?i:V.compact(i)},Kt=Wt,Jt=Gt,Xt=Ne,lr={formats:Xt,parse:Jt,stringify:Kt};const Yt=L(Nr)`
  margin-bottom: 1.5rem;
`;function Zt({initialKeyword:r}){const e=Je(),t=g.exports.useCallback(n=>{const i=lr.stringify({q:n});e.replace(`/search?${i}`)},[e]);return y(jt,{children:y(Yt,{onSearch:t,initial:r,large:!0,autosearch:!0})})}const jt=L.div``;function en({count:r}){return r===0?y(Ke,{children:"No news article found."}):Q(Ke,{children:[y("b",{children:r})," news articles found."]})}const Ke=L.p`
  margin-bottom: 4rem;
  font-size: 1.125rem;
  line-height: 1.5;
  ${O.small} {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  color: ${w.text2};
  b {
    color: ${w.text1};
  }
`,rn=({article:r})=>{const e=Je(),{preFetchArticle:t}=xr(),[n,i]=g.exports.useState(""),[a,l]=g.exports.useState(""),[u,f]=g.exports.useState(""),[o,s]=g.exports.useState(""),[d,c]=g.exports.useState(""),[h,p]=br(),S=g.exports.useCallback(()=>{t(r),e.push(`/article/${encodeURI(n)}`)},[n]);return g.exports.useEffect(()=>{i(r.title.trim()),l(r.pubDate?wr(r.pubDate):""),f(r!=null&&r.source_id?(r==null?void 0:r.source_id.charAt(0).toUpperCase())+(r==null?void 0:r.source_id.slice(1)):""),s((r==null?void 0:r.image_url)||""),c(r!=null&&r.creator?r==null?void 0:r.creator.join(", "):""),p((r==null?void 0:r.description)||"")},[r,h,p]),Q(fr,{children:[y("div",{className:"source",children:u}),!!o&&y(Ie,{to:`/article/${encodeURI(n)}`,onClick:S,children:y($r,{widthRatio:1.916,heightRatio:1,src:o,className:"article-thumbnail"})}),y(Ie,{to:`/article/${encodeURI(n)}`,onClick:S,children:y("h2",{children:n})}),y("p",{children:h}),Q("div",{className:"subinfo",children:[y("span",{children:a}),y("div",{className:"separator",children:"\xB7"}),y("span",{className:"author",children:y("b",{children:d})})]})]})},fr=L.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  ${O.small} {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  & > a {
    color: inherit;
    text-decoration: none;
  }
  &:first-child {
    padding-top: 0;
  }
  .source {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    color: ${w.text1};
    font-weight: bold;
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: ${w.text1};
      }
    }
    margin-bottom: 1.5rem;
    ${O.small} {
      margin-bottom: 0.75rem;
    }
  }
  .article-thumbnail {
    margin-bottom: 1rem;
    ${O.small} {
    }
  }
  line-height: 1.5;
  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: ${w.text1};
    word-break: keep-all;
    ${O.small} {
      font-size: 1rem;
    }
  }
  p {
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${w.text2};
    word-break: keep-all;
    overflow-wrap: break-word;
    ${O.small} {
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
    }
  }
  .subinfo {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    font-size: 0.875rem;
    ${O.small} {
      font-size: 0.75rem;
    }
    span {
    }
    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    .source {
      display: flex;
      align-items: center;
      color: ${w.text1};
      font-weight: bold;
      &:hover {
        color: ${w.text1};
      }
    }
  }
  .tags-wrapper {
    margin-bottom: -0.875rem;
    ${O.small} {
      margin-bottom: -0.5rem;
    }
  }

  & + & {
    border-top: 1px solid ${w.border4};
  }
`;L(fr)`
  h2 {
    display: flex;
    margin-top: 1.375rem;
    margin-bottom: 0.375rem;
  }
  .user-thumbnail-skeleton {
    width: 3rem;
    height: 3rem;
    ${O.small} {
      width: 2rem;
      height: 2rem;
    }
  }
  .thumbnail-skeleton-wrapper {
    width: 100%;
    padding-top: 52.35%;
    position: relative;
    .skeleton {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .short-description {
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-size: 1rem;
    .line {
      display: flex;
    }
    .line + .line {
      margin-top: 0.5rem;
    }
  }
  .tags-skeleton {
    line-height: 1;
    font-size: 2rem;
    ${O.small} {
      font-size: 1.25rem;
    }
  }
`;const tn=sr.memo(rn),nn=L.div``,an=({articles:r})=>y(nn,{children:r.map((e,t)=>y(tn,{article:e},t))});L.div`
  border-top: 1px solid ${w.border4};
`;function on({keyword:r}){const{user:e}=vr(),[t,n]=g.exports.useState(!1),[i,a]=g.exports.useState([]),[l,u]=g.exports.useState(""),f=g.exports.useCallback(async()=>{var d;n(!0);let o=[];e&&(e==null?void 0:e.country)&&(o=[(d=e==null?void 0:e.country)==null?void 0:d.code]);const s=(r==null?void 0:r.replace(/^"(.*)"$/,"$1"))||"";if(s.length>0){const c=await dr(s,o,l,/^".*"$/.test(r));(c==null?void 0:c.status)==="success"&&(a([...i,...c.results]),u(c==null?void 0:c.nextPage))}n(!1)},[e,r]);return g.exports.useEffect(()=>{a([]),f()},[r]),Or({offset:i==null?void 0:i.length,onLoadMoreByOffset:f}),i?!i.length&&t?y(Me,{}):Q(Sr,{children:[y(en,{count:i.length}),y(an,{articles:i}),t&&!!i.length&&y(Me,{})]}):null}function yn({location:r}){const e=g.exports.useMemo(()=>lr.parse(r.search,{ignoreQueryPrefix:!0}),[r.search]);return Q(pr,{children:[y(Zt,{initialKeyword:e.q}),y(on,{keyword:e.q})]})}export{yn as default};
