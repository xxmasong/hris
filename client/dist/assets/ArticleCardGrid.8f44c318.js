import{R as $,r as a}from"./index.724d464e.js";import{W as c,X as m,Y as p}from"./App.bfe04db8.js";import{S as h,u as j,a as H,c as T,R as z}from"./useNews.05a78353.js";import{j as n,F as D,f as t}from"./news.98d612ed.js";import{L as U,D as d,A as B}from"./index.5460d30b.js";function w({wordLengths:e,useFlex:r}){return n(D,{children:e.map((i,l)=>{const s={[r?"flex":"width"]:r?i:`${i}rem`};return n(h,{...s},l)})})}function F({article:e,forHome:r,forArticle:i}){const l=B(),{preFetchArticle:s}=j(),[o,N]=a.exports.useState(""),[C,I]=a.exports.useState(""),[u,L]=a.exports.useState(""),[f,R]=a.exports.useState(""),[x,_]=a.exports.useState(""),[g,b]=H(),k=a.exports.useCallback(()=>{s(e),l.push(`/article/${encodeURI(o)}`)},[o]);return a.exports.useEffect(()=>{N(e.title.trim()),I(e.pubDate?T(e.pubDate):""),L(e!=null&&e.source_id?(e==null?void 0:e.source_id.charAt(0).toUpperCase())+(e==null?void 0:e.source_id.slice(1)):""),R((e==null?void 0:e.image_url)||""),_(e!=null&&e.creator?e==null?void 0:e.creator.join(", "):""),b((e==null?void 0:e.description)||"")},[e,g,b]),t(y,{forHome:!!r,forArticle:!!i,children:[f&&n(v,{to:`/article/${encodeURI(o)}`,onClick:k,children:n(z,{widthRatio:1.916,heightRatio:1,src:f})}),t(A,{hasImage:!!f,children:[t(v,{to:`/article/${encodeURI(o)}`,onClick:k,children:[n("h4",{children:o}),n("div",{className:"description-wrapper",dangerouslySetInnerHTML:{__html:`${g}`}})]}),n("div",{className:"sub-info",children:n("span",{children:C})})]}),(x||u)&&t(S,{children:[n("div",{className:"userinfo",children:x&&n("span",{children:x})}),n("div",{className:"sub-info",children:u&&n("span",{children:n("b",{children:u})})})]})]})}function M({forHome:e,forArticle:r}){return t(G,{forHome:!!e,forArticle:!!r,children:[n("div",{className:"skeleton-thumbnail-wrapper",children:n(h,{className:"skeleton-thumbnail"})}),t(A,{hasImage:!0,isSkeleton:!0,children:[n("h4",{children:n(w,{wordLengths:[2,4,3,6,5]})}),n("div",{className:"description-wrapper",children:t("div",{className:"lines",children:[n("div",{className:"line",children:n(w,{wordLengths:[2,4,3,6,2,7],useFlex:!0})}),n("div",{className:"line",children:n(w,{wordLengths:[3,2]})})]})}),n("div",{className:"sub-info",children:n("span",{children:n(h,{width:"3rem"})})})]}),t(S,{children:[n("div",{className:"userinfo",children:n("span",{children:n(h,{width:"6rem"})})}),n("div",{className:"sub-info",children:n("span",{children:n(h,{width:"6rem"})})})]})]})}const v=c(U)`
  display: block;
  color: inherit;
  text-decoration: none;
`,y=c.div`
  width: 25rem;
  background: ${m.bg_element1};
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition: 0.25s box-shadow ease-in, 0.25s transform ease-in;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.08);
    ${d(1024)} {
      transform: none;
    }
  }
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${e=>!e.forHome&&!e.forArticle&&p`
      ${d(1440)} {
        width: calc(25% - 2rem);
      }
      ${d(1312)} {
        width: calc(33% - 1.8125rem);
      }
    `}

  ${d(1056)} {
    width: calc(50% - 2rem);
  }
  ${d(767)} {
    margin: 0;
    width: 100%;
    & + & {
      margin-top: 1rem;
    }
  }
`,A=c.div`
  padding: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  h4 {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    ${e=>e.isSkeleton&&p`
        text-overflow: initial;
      `}
    color: ${m.text1};
    ${d(767)} {
      white-space: initial;
    }
  }
  .description-wrapper {
    flex: 1;
  }
  p {
    margin: 0;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    ${e=>e.hasImage?p`
      height: 6.5625rem;
      -webkit-line-clamp: 5;
    `:p`
      height: 13.125rem;
      -webkit-line-clamp: 10;
    `}
    overflow: hidden;
    text-overflow: ellipsis;  
    color: ${m.text2};
    margin-bottom: 0.5rem;
  }
  .sub-info {
    font-size: 0.75rem;
    line-height: 1.5;
    color: ${m.text3};
  }
`,S=c.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid ${m.border4};
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
  .userinfo {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    span {
      color: ${m.text1};
    }
  }
`,G=c(y)`
  .skeleton-thumbnail-wrapper {
    width: 100%;
    padding-top: 52.19%;
    position: relative;
    .skeleton-thumbnail {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .lines {
    height: 3.9375rem;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    .line {
      display: flex;
    }
    .line + .line {
      margin-top: 0.3rem;
    }
  }
`,Y=$.memo(F);function E({articles:e,loading:r,forHome:i,forArticle:l}){return t(P,{children:[e.map((s,o)=>s&&n(Y,{article:s,forHome:i,forArticle:l},o)),r&&Array.from({length:10}).map((s,o)=>n(M,{forHome:i,forArticle:l},o))]})}const P=c.div`
  display: flex;
  margin: -1rem;
  flex-wrap: wrap;
  ${d(767)} {
    margin: 0;
  }
  justify-content: center;
`,K=$.memo(E);export{K as A};
