import{o as n,c as r,a as l,w as k,p as y,b as I,t as h,r as u,d as D,e as M,f as d,F as g,g as b,h as v,T as B,i as L,j as N,k as V,l as j,v as q}from"./index-7608e7fc.js";import{S as F}from"./Scene-1679790f.js";import{_ as T,a as z,b as A}from"./SelectItem-c9fec258.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const O={},x=a=>(y("data-v-285fb576"),a=a(),I(),a),P={class:"relative grid h-[140px] place-items-center rounded-tl-2xl rounded-tr-2xl bg-[url('src/assets/images/bg_modal_head.png')] bg-cover"},R=x(()=>l("h5",{class:"h-[54px] w-[300px] bg-[url('src/assets/images/img_modal_title.png')] bg-contain bg-center bg-no-repeat"},null,-1)),W=x(()=>l("div",{class:"p-[50px] text-xl"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nam quae fuga minus aliquam exercitationem impedit, voluptatibus natus cum aperiam omnis harum, dolores tempora facere perferendis! Sunt officiis delectus odio. ",-1));function G(a,t){return n(),r("div",{class:"fixed bottom-0 left-0 right-0 top-0 z-30 grid place-items-center bg-neutral-900/60",onClick:t[2]||(t[2]=o=>a.$emit("close-modal"))},[l("div",{class:"w-[800px] rounded-2xl bg-[#fffbeb]",onClick:t[1]||(t[1]=k(()=>{},["stop"]))},[l("div",P,[R,l("div",{class:"close absolute cursor-pointer",onClick:t[0]||(t[0]=o=>a.$emit("close-modal"))})]),W])])}const H=E(O,[["render",G],["__scopeId","data-v-285fb576"]]),J={class:"mb-4 flex items-center justify-between rounded-md bg-[#56595c] px-4 py-2 font-bold text-white hover:bg-[#444648]"},K={__name:"Button",props:{msg:{type:String,required:!0}},setup(a){return(t,o)=>(n(),r("button",J,h(a.msg),1))}},Q={class:"pb-36"},U={class:"flex flex-row justify-between"},X={class:"text-sm"},Y={key:0,class:"mt-5 px-4"},Z=["href"],ee=["alt","src"],ne={__name:"SceneView",setup(a){const t=u("All"),o=u([]),m=u([]),c=u([]),$={flexRow:!0,photoWidth:"50%"},_=u(!1);D(()=>t.value,e=>{e=="All"?o.value=m.value:o.value=m.value.filter(i=>i.Classification==e)},{immediate:!0});const w=()=>{m.value.forEach(e=>{e.Classification&&c.value.push(e.Classification)}),c.value=[...new Set(c.value)],S(c.value)},S=e=>{e.sort(function(s,p){return s.localeCompare(p)})},C=e=>{t.value=e};return M(()=>{o.value=F.data.filter(e=>e._Status_=="3"||e._Status_=="4").sort(function(){return .5-Math.random()}),m.value=o.value,w()}),(e,i)=>(n(),r("div",Q,[l("div",U,[d(T,{data:c.value,onSelect:C},null,8,["data"]),d(K,{onClick:i[0]||(i[0]=s=>_.value=!0),msg:"推薦景點"})]),(n(!0),r(g,null,b(o.value,(s,p)=>(n(),L(A,{key:s.ID,data:s,layout:$,number:`${p+1}/${o.value.length}`},{classIcon:v(()=>[l("span",X,[d(z,{class:"inline-block align-text-top",name:`icon_class${c.value.indexOf(s.Classification)+1}`,size:"20",color:"#56595C"},null,8,["name"]),N(" "+h(s.Classification),1)])]),footer:v(()=>[s.Line?(n(),r("div",Y,[(n(!0),r(g,null,b(s.Line.split(",").slice(0,-1),f=>(n(),r("a",{href:`/tourist-guide/${f}`,class:"me-4 inline-block"},[l("img",{class:"h-[50px]",alt:`路線${f}`,src:e.$url.image(`scene_r${f}.png`)},null,8,ee)],8,Z))),256))])):V("",!0)]),_:2},1032,["data","number"]))),128)),d(B,{name:"fade"},{default:v(()=>[j(d(H,{onCloseModal:i[1]||(i[1]=s=>_.value=!1)},null,512),[[q,_.value]])]),_:1})]))}};export{ne as default};