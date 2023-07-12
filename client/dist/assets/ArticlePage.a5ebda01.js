import{r as m,R as A}from"./index.367d4241.js";import{W as a,X as c,at as N,au as z,av as R,aw as T}from"./App.724dbeb2.js";import{m as s,t as _,A as B}from"./index.f724b001.js";import{j as t,f as i,F as b}from"./news.46e8e55d.js";import{u as w,b as H,a as j,S as l}from"./useNews.c03feea2.js";import{A as C}from"./ArticleCardGrid.645c571c.js";import{B as E,P as I}from"./index.a40bc28b.js";import"./notifications.ccd281a2.js";import"./typeof.2a08ffa3.js";const k=({children:e,className:o,style:n})=>t(L,{children:e,className:o,style:n}),L=a.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  ${s.small} {
    width: 100%;
  }
`;function M(){const{article:e}=w(),[o,n]=m.exports.useState(""),[r,d]=m.exports.useState(""),[g,u]=m.exports.useState(null),[p,x]=m.exports.useState(null);return m.exports.useEffect(()=>{var f;n((e==null?void 0:e.title.trim())||""),d(e!=null&&e.pubDate?H(e.pubDate):""),u((e==null?void 0:e.image_url)&&!((f=e==null?void 0:e.content)!=null&&f.includes(encodeURI(e.image_url)))?e==null?void 0:e.image_url:null),x(e!=null&&e.source_id?e.source_id.charAt(0).toUpperCase()+e.source_id.slice(1):null)},[e]),i(P,{children:[i("div",{className:"head-wrapper",children:[t("h1",{children:o}),i(q,{children:[i("div",{className:"information",children:[t("span",{className:"date",children:r}),t("br",{}),p&&t("span",{className:"source",children:p})]}),(e==null?void 0:e.link)&&i(U,{href:e.link,target:"_blank",children:[t(N,{}),i(F,{children:["Read",t("br",{}),"More"]})]})]})]}),g&&t(D,{src:g,alt:"article-thumbnail"},g)]})}const P=a(k)`
  margin-top: 5rem;
  .head-wrapper {
    ${s.medium} {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
  h1 {
    /* font-family: 'Spoqa Han Sans'; */
    letter-spacing: -0.004em;
    margin-top: 0;
    font-size: 2rem;
    font-weight: 800;
    color: ${c.text1};
    margin-bottom: 2rem;
    word-break: keep-all;
    transition: color 0.125s ease-in;
  }
  ${s.medium} {
    margin-top: 2rem;
    h1 {
      font-size: 1.5rem;
    }
  }
`,q=a.div`
  align-items: center;
  color: ${c.text2};
  /* font-family: 'Spoqa Han Sans'; */
  display: flex;
  justify-content: space-between;
  .information {
    .date {
      font-size: 0.875rem;
    }
    .source {
      font-size: 1rem;
      font-weight: bold;
      color: ${c.text1};
      &:hover {
        color: ${c.text2};
      }
    }
  }
  ${s.small} {
    margin-bottom: 0.5rem;
  }
`,D=a.img`
  max-height: 100vh;
  max-width: 100%;
  width: auto;
  margin: 0 auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin-top: 1rem;
  ${s.small} {
    margin-top: 1rem;
  }
`,U=a.a`
  background: ${c.bg_element1};
  border: 1px solid ${c.border2};
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  display: flex;
  align-items: center;
  height: 2rem;
  border-radius: 0.75rem;
  outline: none;
  text-decoration: none;
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.75rem;
    color: ${c.text3};
  }
  span {
    font-size: 0.75rem;
    font-weight: bold;
    color: ${c.text3};
  }
`,F=a.div`
  color: ${c.text2};
  line-height: 1;
  font-size: 0.5rem;
  font-weight: bold;
`;function O(){const{article:e}=w(),[o,n]=m.exports.useState(""),[r,d]=j();return m.exports.useEffect(()=>{n(e!=null&&e.creator?e==null?void 0:e.creator.join(", "):""),d((e==null?void 0:e.content)||"")},[e,d]),i(V,{children:[t(W,{dangerouslySetInnerHTML:{__html:`${r}`}}),t(G,{children:t("div",{className:"information",children:o&&i(b,{children:[t("span",{children:"By "}),t("span",{className:"text",children:o})]})})})]})}const V=a.div`
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  ${s.medium} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  ${s.small} {
    width: 100%;
  }
`,W=a.div``,G=a.div`
  margin-top: 2rem;
  align-items: center;
  font-size: 1rem;
  color: ${c.text2};
  /* font-family: 'Spoqa Han Sans'; */
  display: flex;
  justify-content: space-between;
  .information {
    font-size: 0.875rem;
    .text {
      color: ${c.text1};
      font-weight: bold;
      &:hover {
        color: ${c.text2};
      }
    }
  }
  ${s.small} {
    margin-bottom: 0.75rem;
  }
`;function X(e){const o=i("div",{className:"lines",children:[t("div",{className:"line",children:[3,5,2,7,6,5,4].map((n,r)=>t(l,{flex:n},r))}),t("div",{className:"line",children:[4,2,6,3,7,4,2].map((n,r)=>t(l,{flex:n},r))}),t("div",{className:"line",children:[4,2,4,3,2,7,3].map((n,r)=>t(l,{flex:n},r))}),t("div",{className:"line",style:{paddingRight:"8rem"},children:[4,6,3,2,3].map((n,r)=>t(l,{flex:n},r))})]});return i(J,{children:[i(y,{children:[i("h1",{children:[t(l,{flex:6}),t(l,{flex:2}),t(l,{flex:5}),t(l,{flex:2}),t(l,{flex:3})]}),i("div",{className:"subinfo",children:[t(l,{width:"5rem",marginRight:"1.5rem",noSpacing:!0}),t(l,{width:"7.5rem",noSpacing:!0})]}),i("div",{className:"tags",children:[t(l,{width:"4rem",className:"tag-skeleton",noSpacing:!0}),t(l,{width:"6rem",noSpacing:!0,className:"tag-skeleton"}),t(l,{width:"5rem",noSpacing:!0,className:"tag-skeleton"})]})]}),t("div",{className:"thumbnail",children:t(l,{className:"thumbnail-skeleton"})}),t(y,{children:i("div",{className:"contents",children:[o,o,o]})})]})}const J=a(k)`
  margin-top: 5.5rem;

  h1 {
    padding-right: 2rem;
    font-size: 3.75rem;
    margin-top: 0;
    margin-bottom: 2rem;
    display: flex;
  }
  .subinfo {
    font-size: 1rem;
  }
  .tags {
    font-size: 2rem;
    margin-top: 0.875rem;
    .tag-skeleton + .tag-skeleton {
      margin-left: 0.5rem;
    }
  }
  .series {
    margin-top: 2rem;
  }
  .thumbnail {
    margin-top: 2rem;
    padding-top: 52.35%;
    position: relative;
    .thumbnail-skeleton {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .contents {
    margin-top: 5rem;
    .line {
      margin-bottom: 0.75rem;
      display: flex;
      font-size: 1.125rem;
    }
    .lines + .lines {
      margin-top: 3rem;
    }
  }

  ${s.medium} {
    margin-top: 2rem;
    h1 {
      font-size: 2.25rem;
    }
    .subinfo {
      font-size: 0.875rem;
    }
    .tags {
      font-size: 1.5rem;
    }
  }
`,y=a.div`
  ${s.small} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;function K(){const{user:e,validating:o}=_(),{article:n,related:r,updateRelated:d}=w(),[g,u]=m.exports.useState(!1),p=m.exports.useCallback(async()=>{var $,v;u(!0),d([]);let x=[];e&&(e==null?void 0:e.country)&&(x=[($=e==null?void 0:e.country)==null?void 0:$.code]);let f=[];(n==null?void 0:n.category)&&((v=n==null?void 0:n.category)==null?void 0:v.length)>0&&(f=n.category);const h=await z(n==null?void 0:n.keywords,f,x);(h==null?void 0:h.status)==="success"&&d([...((h==null?void 0:h.results)||[]).filter(S=>(n==null?void 0:n.title)!==S.title)]),u(!1)},[n,d]);return m.exports.useEffect(()=>{o||n!=null&&n.title&&p()},[o,n==null?void 0:n.title]),{related:r,loading:g}}function Q(){const{related:e,loading:o}=K();return i(b,{children:[i(Z,{children:[t(Y,{children:"Recommended Articles"}),t(ee,{children:t(C,{articles:e,loading:!e.length||o,forArticle:!0})})]}),t(te,{})]})}const Y=a.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  color: ${c.text2};
  margin-bottom: 3.5rem;
  ${s.custom(1376)} {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  ${s.medium} {
    font-size: 1.25rem;
  }
`,Z=a.div`
  z-index: 5;
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;

  ${s.custom(1376)} {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
  margin-top: 4rem;
  background: ${c.bg_page1};
  box-shadow: 0px -16px 16px rgb(0 0 0 / 4%);
`,ee=a.div`
  width: 1376px;
  margin: 0 auto;
  padding-bottom: 3rem;
  ${s.xlarge} {
    width: 1024px;
  }
  ${s.custom(1056)} {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`,te=a.div`
  margin-bottom: -4rem;
`;function ne(e){const{article:o,preFetchArticle:n}=w(),[r,d]=m.exports.useState(!1),g=decodeURI(e||""),u=m.exports.useCallback(async()=>{d(!0);const p=await R({qInTitle:g});(p==null?void 0:p.status)==="success"&&p.results.length>=1?n(p.results[0]):n(null),d(!1)},[n,g]);return m.exports.useEffect(()=>{(!o||(o==null?void 0:o.title)!==g)&&u()},[o,g]),{article:o,loading:r}}const oe=({urlTitle:e})=>{const o=B(),{article:n,loading:r}=ne(e);return m.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),m.exports.useEffect(()=>{!r&&n===null&&o.push("/")},[n,o,r]),t(b,{children:r?t(X,{}):i(b,{children:[t(M,{}),t(O,{}),n&&t(re,{children:i(E,{color:"transparent",size:"large",onClick:()=>o.push("/"),children:[t(T,{}),"Back"]})}),!r&&n&&t(Q,{})]})})},re=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${c.text3};
  margin-top: 1rem;
  svg {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  ${s.small} {
    margin-top: 0.5rem;
  }
`,ie=A.memo(oe),he=({match:e})=>{const{urlTitle:o}=e.params;return i(I,{children:[t(ie,{urlTitle:o}),";"]})};export{he as default};
