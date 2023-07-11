import{r as s,R as S}from"./index.e8235cbb.js";import{W as l,X as c,at as A,au as v,av as N}from"./App.9734c6d7.js";import{m as a,A as z}from"./index.6f219f27.js";import{j as t,f as i,F as $}from"./news.f22987b2.js";import{u as w,b as R,a as T,S as m}from"./useNews.471fdd10.js";import{A as _}from"./ArticleCardGrid.cc0a2004.js";import{B as H,P as j}from"./index.122d970b.js";import"./notifications.2f8a387c.js";import"./typeof.2a08ffa3.js";const y=({children:e,className:n,style:o})=>t(B,{children:e,className:n,style:o}),B=l.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  ${a.small} {
    width: 100%;
  }
`;function C(){const{article:e}=w(),[n,o]=s.exports.useState(""),[r,p]=s.exports.useState(""),[u,f]=s.exports.useState(null),[g,b]=s.exports.useState(null);return s.exports.useEffect(()=>{var x;o((e==null?void 0:e.title.trim())||""),p(e!=null&&e.pubDate?R(e.pubDate):""),f((e==null?void 0:e.image_url)&&!((x=e==null?void 0:e.content)!=null&&x.includes(encodeURI(e.image_url)))?e==null?void 0:e.image_url:null),b(e!=null&&e.source_id?e.source_id.charAt(0).toUpperCase()+e.source_id.slice(1):null)},[e]),i(E,{children:[i("div",{className:"head-wrapper",children:[t("h1",{children:n}),i(I,{children:[i("div",{className:"information",children:[t("span",{className:"date",children:r}),t("br",{}),g&&t("span",{className:"source",children:g})]}),(e==null?void 0:e.link)&&i(P,{href:e.link,target:"_blank",children:[t(A,{}),i(M,{children:["Read",t("br",{}),"More"]})]})]})]}),u&&t(L,{src:u,alt:"article-thumbnail"},u)]})}const E=l(y)`
  margin-top: 5rem;
  .head-wrapper {
    ${a.medium} {
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
  ${a.medium} {
    margin-top: 2rem;
    h1 {
      font-size: 1.5rem;
    }
  }
`,I=l.div`
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
  ${a.small} {
    margin-bottom: 0.5rem;
  }
`,L=l.img`
  max-height: 100vh;
  max-width: 100%;
  width: auto;
  margin: 0 auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin-top: 1rem;
  ${a.small} {
    margin-top: 1rem;
  }
`,P=l.a`
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
`,M=l.div`
  color: ${c.text2};
  line-height: 1;
  font-size: 0.5rem;
  font-weight: bold;
`;function q(){const{article:e}=w(),[n,o]=s.exports.useState(""),[r,p]=T();return s.exports.useEffect(()=>{o(e!=null&&e.creator?e==null?void 0:e.creator.join(", "):""),p((e==null?void 0:e.content)||"")},[e,p]),i(U,{children:[t(D,{dangerouslySetInnerHTML:{__html:`${r}`}}),t(F,{children:t("div",{className:"information",children:n&&i($,{children:[t("span",{children:"By "}),t("span",{className:"text",children:n})]})})})]})}const U=l.div`
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  ${a.medium} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  ${a.small} {
    width: 100%;
  }
`,D=l.div``,F=l.div`
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
  ${a.small} {
    margin-bottom: 0.75rem;
  }
`;function O(e){const n=i("div",{className:"lines",children:[t("div",{className:"line",children:[3,5,2,7,6,5,4].map((o,r)=>t(m,{flex:o},r))}),t("div",{className:"line",children:[4,2,6,3,7,4,2].map((o,r)=>t(m,{flex:o},r))}),t("div",{className:"line",children:[4,2,4,3,2,7,3].map((o,r)=>t(m,{flex:o},r))}),t("div",{className:"line",style:{paddingRight:"8rem"},children:[4,6,3,2,3].map((o,r)=>t(m,{flex:o},r))})]});return i(V,{children:[i(k,{children:[i("h1",{children:[t(m,{flex:6}),t(m,{flex:2}),t(m,{flex:5}),t(m,{flex:2}),t(m,{flex:3})]}),i("div",{className:"subinfo",children:[t(m,{width:"5rem",marginRight:"1.5rem",noSpacing:!0}),t(m,{width:"7.5rem",noSpacing:!0})]}),i("div",{className:"tags",children:[t(m,{width:"4rem",className:"tag-skeleton",noSpacing:!0}),t(m,{width:"6rem",noSpacing:!0,className:"tag-skeleton"}),t(m,{width:"5rem",noSpacing:!0,className:"tag-skeleton"})]})]}),t("div",{className:"thumbnail",children:t(m,{className:"thumbnail-skeleton"})}),t(k,{children:i("div",{className:"contents",children:[n,n,n]})})]})}const V=l(y)`
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

  ${a.medium} {
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
`,k=l.div`
  ${a.small} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;function W(){const{article:e}=w(),[n,o]=s.exports.useState([]),[r,p]=s.exports.useState(!1),u=s.exports.useCallback(async()=>{var b,x;let f=[],g=[];if(o([]),(e==null?void 0:e.keywords)&&((b=e==null?void 0:e.keywords)==null?void 0:b.length)>0){const d=e.keywords.join(" OR "),h=await v({q:d});(h==null?void 0:h.status)==="success"&&(f=(h==null?void 0:h.results)||[])}if((e==null?void 0:e.category)&&((x=e==null?void 0:e.category)==null?void 0:x.length)>0){const d=await v({category:e.category});(d==null?void 0:d.status)==="success"&&(g=(d==null?void 0:d.results)||[])}o([...f.filter(d=>(e==null?void 0:e.title)!==d.title),...g.filter(d=>(e==null?void 0:e.title)!==d.title&&!f.some(h=>h.title===d.title))])},[e]);return s.exports.useEffect(()=>{p(!0),e!=null&&e.title&&u(),p(!1)},[e==null?void 0:e.title]),{articles:n,loading:r}}function G(){const{articles:e,loading:n}=W();return i($,{children:[i(J,{children:[t(X,{children:"Recommended Articles"}),t(K,{children:t(_,{articles:e,loading:!e.length||n,forArticle:!0})})]}),t(Q,{})]})}const X=l.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 400;
  color: ${c.text2};
  margin-bottom: 3.5rem;
  ${a.custom(1376)} {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  ${a.medium} {
    font-size: 1.25rem;
  }
`,J=l.div`
  z-index: 5;
  position: relative;
  padding-top: 4rem;
  padding-bottom: 4rem;

  ${a.custom(1376)} {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
  margin-top: 4rem;
  background: ${c.bg_page1};
  box-shadow: 0px -16px 16px rgb(0 0 0 / 4%);
`,K=l.div`
  width: 1376px;
  margin: 0 auto;
  padding-bottom: 3rem;
  ${a.xlarge} {
    width: 1024px;
  }
  ${a.custom(1056)} {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`,Q=l.div`
  margin-bottom: -4rem;
`;function Y(e){const{article:n,preFetchArticle:o}=w(),[r,p]=s.exports.useState(!1),u=decodeURI(e||""),f=s.exports.useCallback(async()=>{const g=await v({qInTitle:u});(g==null?void 0:g.status)==="success"&&g.results.length>=1?o(g.results[0]):o(null)},[o,u]);return s.exports.useEffect(()=>{p(!0),(!n||(n==null?void 0:n.title)!==u)&&f(),p(!1)},[n,u]),{article:n,loading:r}}const Z=({urlTitle:e})=>{const n=z(),{article:o,loading:r}=Y(e);return s.exports.useEffect(()=>{window.scrollTo(0,0)},[e]),s.exports.useEffect(()=>{!r&&o===null&&n.push("/")},[o,n,r]),t($,{children:r?t(O,{}):i($,{children:[t(C,{}),t(q,{}),o&&t(ee,{children:i(H,{color:"transparent",size:"large",onClick:()=>n.push("/"),children:[t(N,{}),"Back"]})}),!r&&o&&t(G,{})]})})},ee=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${c.text3};
  margin-top: 1rem;
  svg {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  ${a.small} {
    margin-top: 0.5rem;
  }
`,te=S.memo(Z),de=({match:e})=>{const{urlTitle:n}=e.params;return i(j,{children:[t(te,{urlTitle:n}),";"]})};export{de as default};
