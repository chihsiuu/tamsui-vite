import{S as x}from"./Scene-1679790f.js";import{_ as w,a as I}from"./SelectItem-50106e5d.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import{r as i,w as y,b as D,o as n,c as d,d as S,F as $,e as C,f as V,g as p,a as t,i as k,t as f,n as T,p as A,j as B}from"./index-11ebdc7c.js";const L=l=>(A("data-v-a294c660"),l=l(),B(),l),F={class:"pb-36"},N={class:"flex"},R={class:"text-2xl font-bold"},j={class:"f ms-1 rounded-md border border-slate-500 px-1 text-xs"},E=L(()=>t("strong",{class:"vote__num text-[#cd5c78]"},"1,234",-1)),M={class:"flex"},P=["href"],W=["src"],z=["href"],G=["src"],H={__name:"VoteView",setup(l){const _=i("All"),a=i([]),c=i([]),r=i([]),u={flexRow:!0,photoWidth:"60%"},h=e=>{let o="";return typeof e=="string"&&(o=e.replace(/(<([^>]+)>)/gi,"")),o};y(()=>_.value,e=>{e=="All"?a.value=c.value:a.value=c.value.filter(o=>o.Classification==e)},{immediate:!0});const v=()=>{c.value.forEach(e=>{e.Classification!="Recreation_RestArea"&&e.Classification!=""&&r.value.push(e.Classification)}),r.value=[...new Set(r.value)]},m=e=>{_.value=e};return D(()=>{a.value=x.data.filter(e=>e.PICID),c.value=a.value,v()}),(e,o)=>(n(),d("div",F,[S(w,{data:r.value,onSelect:m},null,8,["data"]),(n(!0),d($,null,C(a.value,(s,g)=>(n(),V(I,{key:s.ID,data:s,layout:u,number:`${g+1}/${a.value.length}`},{title:p(()=>[t("div",N,[t("h2",R,[k(f(h(s.GroupTitle||s.TitleAlias||s.Title))+" ",1),t("small",j,f(s.PICID),1)])])]),footer:p(()=>[t("div",{class:"mt-6 flex items-center justify-between px-4",style:T(`margin-left:${u.photoWidth}`)},[E,t("div",M,[t("a",{class:"w-6",href:`https://facebook.com/sharer/sharer.php?u=https://2021tamsui.tw/vote/${s.ID}/f`},[t("img",{src:e.$url.image("icon_fb.svg"),alt:"分享到Facebook"},null,8,W)],8,P),t("a",{class:"ms-2 w-6",href:`https://social-plugins.line.me/lineit/share?url=https://2021tamsui.tw/vote/${s.ID}/l`},[t("img",{src:e.$url.image("icon_line.svg"),alt:"分享到Line"},null,8,G)],8,z)])],4)]),_:2},1032,["data","number"]))),128))]))}},Q=b(H,[["__scopeId","data-v-a294c660"]]);export{Q as default};
