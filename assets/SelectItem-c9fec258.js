import{m as N,o as l,i as E,h as x,c as o,F as z,g as T,q as C,S as q,l as B,a as e,s as j,x as M,r,y as g,e as L,z as p,A as b,n as I,f as k,t as u,k as y,B as R,T as P}from"./index-7608e7fc.js";const V=["alt"],O={__name:"SlideImage",props:{data:{type:Array,default:[],required:!0}},setup(t){const s=t,n={rewind:!0,heightRatio:.75,arrows:s.data.length>1};return(i,d)=>{const f=N("lazy");return l(),E(C(j),{options:n},{default:x(()=>[(l(!0),o(z,null,T(s.data,a=>(l(),E(C(q),{key:a.ID},{default:x(()=>[B(e("img",{class:"inline h-full w-full rounded-lg object-cover",alt:a.ID},null,8,V),[[f,`https://picsum.photos/400/300?random=${a.ID||a}`]])]),_:2},1024))),128))]),_:1})}}},U={class:"mb-6 w-full rounded-xl bg-[#f2e48e] px-2 py-6"},W={class:"flex flex-col px-4"},G={class:"flex justify-between"},J={class:"text-2xl font-bold"},K={key:0},Q={key:1},X={key:2},ne={__name:"CardItem",props:{data:{type:Object,default:()=>({}),required:!0},layout:{type:Object,default:()=>({}),required:!0},number:{type:String,required:!0}},setup(t){const s=t,n=M(),i=r(),d=r(),f=r(),a=r(),v=r(),h=r(""),A=r("800"),$=r(!1),m=r(!1),D=()=>{m.value=!m.value},w=g(()=>n.deviceMode=="deskTop"?s.layout.flexRow:!1),F=g(()=>n.deviceMode=="deskTop"?s.layout.photoWidth:"100%"),H=g(()=>m.value?h.value:A.value);return L(()=>{var c,_,S;h.value=i.value.offsetHeight-(((c=d.value)==null?void 0:c.offsetHeight)+((_=v.value)==null?void 0:_.offsetHeight)),((S=a.value)==null?void 0:S.offsetHeight)>h.value-28&&($.value=!0,m.value=!0,h.value=h.value-80)}),(c,_)=>(l(),o("div",U,[p(c.$slots,"header"),e("div",{class:b(["flex flex-col",[w.value&&"lg:flex-row"]])},[e("div",{ref_key:"photoEl",ref:i,class:b(["mb-4 shrink-0 self-start px-4",[w.value&&"lg:mb-0"]]),style:I(`width:${F.value}`)},[p(c.$slots,"photo",{},()=>[k(O,{data:s.data.Imgs},null,8,["data"])])],6),e("div",W,[p(c.$slots,"body",{},()=>[e("div",{ref_key:"titleEl",ref:d,class:"mb-4"},[p(c.$slots,"title",{},()=>[e("div",G,[e("h2",J,u(s.data.Title),1),e("small",null,u(s.number),1)])]),p(c.$slots,"classIcon")],512),e("div",{ref_key:"contentEl",ref:f,class:"mb-4 grow"},[e("p",{ref_key:"desEl",ref:a,class:"overflow-hidden transition-all duration-500 ease-in",style:I(`max-height: ${H.value}px;`)},u(c.$filters.stripHTML(t.data.Des)),5),$.value?(l(),o("div",{key:0,onClick:D,class:b([["relative mt-3 rounded p-1.5 text-center","bg-[#e0cf7c]","before:transition-all before:delay-100 before:duration-300 before:ease-in","before:opacity-1 before:bg-gradient-to-t before:from-[#f2e48e] before:to-[#f2e48e]/10","before:contentEl-[''] before:absolute before:-inset-1 before:block before:-translate-y-[53px]",!m.value&&"before:opacity-0"],"pointer"])}," 閱讀更多 ",2)):y("",!0)],512),e("ul",{ref_key:"infoEl",ref:v,class:"text-sm"},[e("li",null,"地址："+u(t.data.Address),1),t.data.TEL?(l(),o("li",K,"電話："+u(t.data.TEL),1)):t.data.Phone?(l(),o("li",Q,"電話："+u(t.data.Phone),1)):y("",!0),t.data.NickNameByUser?(l(),o("li",X," 景點推薦人："+u(t.data.NickNameByUser),1)):y("",!0)],512)])])],2),p(c.$slots,"footer")]))}};const Y=["xlink:href"],Z={__name:"SvgIcon",props:{name:{type:String,required:!0},size:{type:String,default:"16"},color:{type:String,default:""}},setup(t){const s=t,n=g(()=>`#icon-${s.name}`),i=g(()=>s.name?`svg-icon icon-${s.name}`:"svg-icon");return(d,f)=>(l(),o("svg",R({class:i.value},d.$attrs,{style:{width:s.size+"px",height:s.size+"px",color:t.color}}),[e("use",{"xlink:href":n.value},null,8,Y)],16))}};const ee={class:"mb-4 w-[167px] font-bold text-white"},te={class:"flex w-full items-center justify-between rounded-md bg-[#cd5c78] px-4 py-2 hover:bg-[#c43f60]"},se={key:0,class:"relative z-10"},le={class:"absolute top-1 w-[167px] rounded-md bg-[#cd5c78]"},ae=["onClick"],re={__name:"SelectItem",props:{data:{type:Array,default:[],required:!0}},emits:["select"],setup(t,{emit:s}){const n=r(!1),i=r("All"),d=f=>{n.value=!1,i.value=f,s("select",i.value)};return(f,a)=>(l(),o("ul",ee,[e("li",{onClick:a[0]||(a[0]=v=>n.value=!n.value)},[e("button",te,[e("span",null,u(i.value),1),k(Z,{name:"icon_arrow",size:"18",color:"#FFFFFF"})])]),k(P,{name:"toggle"},{default:x(()=>[n.value?(l(),o("li",se,[e("ul",le,[i.value!="All"?(l(),o("li",{key:0,onClick:a[1]||(a[1]=v=>d("All")),class:"px-4 py-1.5 hover:bg-[#c43f60]"}," All ")):y("",!0),(l(!0),o(z,null,T(t.data,v=>(l(),o("li",{onClick:h=>d(v),class:"px-4 py-1.5 hover:bg-[#c43f60]"},u(v),9,ae))),256))])])):y("",!0)]),_:1})]))}};export{re as _,Z as a,ne as b,O as c};