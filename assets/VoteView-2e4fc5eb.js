import{S as m}from"./Scene-1679790f.js";import{_ as g,b as x}from"./SelectItem-76bf1b13.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{r,d as b,e as I,o as n,c as u,f as y,F as D,g as $,i as S,h as f,a as s,j as C,t as p,n as V,p as k,b as T}from"./index-66d284ed.js";const A=o=>(k("data-v-d400990c"),o=o(),T(),o),B={class:"pb-36"},L={class:"flex"},F={class:"text-2xl font-bold"},N={class:"f ms-1 rounded-md border border-slate-500 px-1 text-xs"},R=A(()=>s("strong",{class:"vote__num text-[#cd5c78]"},"1,234",-1)),j={class:"flex"},E=["href"],M=["src"],P=["href"],W=["src"],z={__name:"VoteView",setup(o){const d=r("All"),a=r([]),l=r([]),c=r([]),_={flexRow:!0,photoWidth:"60%"};b(()=>d.value,e=>{e=="All"?a.value=l.value:a.value=l.value.filter(i=>i.Classification==e)},{immediate:!0});const h=()=>{l.value.forEach(e=>{e.Classification!="Recreation_RestArea"&&e.Classification!=""&&c.value.push(e.Classification)}),c.value=[...new Set(c.value)]};return I(()=>{a.value=m.data.filter(e=>e.PICID),l.value=a.value,h()}),(e,i)=>(n(),u("div",B,[y(g,{data:c.value,onSelect:i[0]||(i[0]=t=>d.value=t)},null,8,["data"]),(n(!0),u(D,null,$(a.value,(t,v)=>(n(),S(x,{key:t.ID,data:t,layout:_,number:`${v+1}/${a.value.length}`},{title:f(()=>[s("div",L,[s("h2",F,[C(p(e.$filters.stripHTML(t.GroupTitle||t.TitleAlias||t.Title))+" ",1),s("small",N,p(t.PICID),1)])])]),footer:f(()=>[s("div",{class:"mt-6 flex items-center justify-between px-4",style:V(`margin-left:${_.photoWidth}`)},[R,s("div",j,[s("a",{class:"w-6",href:`https://facebook.com/sharer/sharer.php?u=https://2021tamsui.tw/vote/${t.ID}/f`},[s("img",{src:e.$url.image("icon_fb.svg"),alt:"分享到Facebook"},null,8,M)],8,E),s("a",{class:"ms-2 w-6",href:`https://social-plugins.line.me/lineit/share?url=https://2021tamsui.tw/vote/${t.ID}/l`},[s("img",{src:e.$url.image("icon_line.svg"),alt:"分享到Line"},null,8,W)],8,P)])],4)]),_:2},1032,["data","number"]))),128))]))}},K=w(z,[["__scopeId","data-v-d400990c"]]);export{K as default};
