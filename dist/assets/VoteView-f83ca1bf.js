import{S as g}from"./Scene-1679790f.js";import{_ as x,b as w}from"./SelectItem-c9fec258.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{r as i,d as I,e as y,o as r,c as d,f as D,F as S,g as $,i as C,h as f,a as t,j as V,t as p,n as k,p as T,b as A}from"./index-7608e7fc.js";const B=o=>(T("data-v-151034a2"),o=o(),A(),o),L={class:"pb-36"},F={class:"flex"},N={class:"text-2xl font-bold"},R={class:"f ms-1 rounded-md border border-slate-500 px-1 text-xs"},j=B(()=>t("strong",{class:"vote__num text-[#cd5c78]"},"1,234",-1)),E={class:"flex"},M=["href"],P=["src"],W=["href"],z=["src"],G={__name:"VoteView",setup(o){const n=i("All"),a=i([]),l=i([]),c=i([]),_={flexRow:!0,photoWidth:"60%"};I(()=>n.value,e=>{e=="All"?a.value=l.value:a.value=l.value.filter(u=>u.Classification==e)},{immediate:!0});const h=()=>{l.value.forEach(e=>{e.Classification!="Recreation_RestArea"&&e.Classification!=""&&c.value.push(e.Classification)}),c.value=[...new Set(c.value)]},v=e=>{n.value=e};return y(()=>{a.value=g.data.filter(e=>e.PICID),l.value=a.value,h()}),(e,u)=>(r(),d("div",L,[D(x,{data:c.value,onSelect:v},null,8,["data"]),(r(!0),d(S,null,$(a.value,(s,m)=>(r(),C(w,{key:s.ID,data:s,layout:_,number:`${m+1}/${a.value.length}`},{title:f(()=>[t("div",F,[t("h2",N,[V(p(e.$filters.stripHTML(s.GroupTitle||s.TitleAlias||s.Title))+" ",1),t("small",R,p(s.PICID),1)])])]),footer:f(()=>[t("div",{class:"mt-6 flex items-center justify-between px-4",style:k(`margin-left:${_.photoWidth}`)},[j,t("div",E,[t("a",{class:"w-6",href:`https://facebook.com/sharer/sharer.php?u=https://2021tamsui.tw/vote/${s.ID}/f`},[t("img",{src:e.$url.image("icon_fb.svg"),alt:"分享到Facebook"},null,8,P)],8,M),t("a",{class:"ms-2 w-6",href:`https://social-plugins.line.me/lineit/share?url=https://2021tamsui.tw/vote/${s.ID}/l`},[t("img",{src:e.$url.image("icon_line.svg"),alt:"分享到Line"},null,8,z)],8,W)])],4)]),_:2},1032,["data","number"]))),128))]))}},O=b(G,[["__scopeId","data-v-151034a2"]]);export{O as default};