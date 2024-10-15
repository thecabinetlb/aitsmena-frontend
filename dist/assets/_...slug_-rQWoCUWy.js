import{e as y,a as o,c as r,b as t,F as p,f,g as m,w as b,n as x,h as u,t as d,u as _,R as v,r as g,o as w,i as k,j as S,k as I,l as $}from"./app-C4d7ysU_.js";const C={class:"w-11/12 pt-20 mx-auto 2xl:w-8/12 lg:w-10/12"},R={key:0,role:"list",class:"grid grid-cols-1 gap-3 mt-10 xl:grid-cols-3 md:grid-cols-2 list-style-none"},B={class:"relative overflow-hidden aspect-video bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]"},D={key:0,class:"p-2 absolute top-3 right-3 w-1/4 h-fit backdrop-blur-[16px] rounded-[8px]"},T=["src","alt"],A={class:"flex flex-col gap-3 p-6"},E={class:"p-2 relative w-fit z-[3] bottom-10 -mb-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2"},M={class:"flex flex-wrap justify-between gap-3 pb-3 border-b border-bg2"},j={class:"text-accent1 font-[400] max-sm:text-[14px]"},N={class:"text-accent2 font-[200] max-sm:text-[14px]"},z={class:"text-accent1 font-[700] 2xl:text-3xl lg:text-2xl md:text-xl text-[30px] 2xl:min-h-full md:min-h-[98px]"},F={class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px] xl:min-h-[192px] md:min-h-[169px]"},W={key:1,class:"mt-10 p-6 relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2"},V={__name:"RelatedPosts",props:{data:Array,industry:String,currentId:Number},setup(a){const l=a,i=y(()=>l.data.filter(c=>c.industry===l.industry&&c.id!==l.currentId)),e=c=>{const s=new Date(c);return isNaN(s)?"":new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(s)};return(c,s)=>(o(),r("section",C,[s[2]||(s[2]=t("h1",{class:"font-[500] text-accent1 md:text-4xl text-[30px] uppercase mb-6"},"Related Insights",-1)),i.value.length>0?(o(),r("ul",R,[(o(!0),r(p,null,f(i.value,(n,h)=>(o(),r("li",{key:h,class:"flex-grow group w-full relative group rounded-[16px] border-2 border-bg2"},[n.slug&&n.publicationtype?(o(),m(_(v),{key:0,id:"go-to-"+n.title+"-page","aria-label":"read more about "+n.title,to:{path:`/resource-center/${n.publicationtype.slug}/${n.slug}`}},{default:b(()=>[t("div",B,[t("div",{class:"absolute inset-0 z-[-1] duration-500 transform group-hover:scale-110",style:x({backgroundImage:"url("+n.image+")",backgroundSize:"cover",backgroundPosition:"center"})},null,4),n.customer_logo?(o(),r("div",D,[t("img",{src:n.customer_logo,alt:n.title,width:"100%",height:"100%",center:"",cover:"",responsive:"",loading:"lazy",class:"mx-auto aspect-1.72/1 scale-125"},null,8,T)])):u("",!0)]),t("div",A,[t("h2",E,d(n.publicationtype.title),1),t("div",M,[t("h2",j,d(n.industry.title),1),t("h2",N,d(e(n.published_at)),1)]),t("h2",z,d(n.title),1),t("p",F,d(n.summary),1),s[0]||(s[0]=t("span",{class:"border-accent2 w-[34px] h-[34px] cursor-pointer grid place-content-center mt-auto mb-0 ms-auto me-0 border-2 hover:border-bg2 text-xl rounded-full"},[t("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"none",class:"transition-all stroke-accent2 duration-400 hover:stroke-bg2","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[t("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"}),t("g",{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}),t("g",{id:"SVGRepo_iconCarrier"},[t("line",{x1:"7",y1:"17",x2:"17",y2:"7"}),t("polyline",{points:"7 7 17 7 17 17"})])])],-1))])]),_:2},1032,["id","aria-label","to"])):u("",!0)]))),128))])):(o(),r("div",W,s[1]||(s[1]=[t("h3",{class:"2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500]"},"No related insights.",-1)])))]))}},L={class:"w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12"},P={class:"font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-3"},G={class:"flex flex-col gap-6 mt-10"},O={key:0,class:"p-2 absolute top-3 right-3 w-1/4 h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]"},H=["src","alt"],U={class:"text-accent2 font-[200] max-sm:text-[14px] mb-6"},q=["innerHTML"],J={__name:"PostDetails",props:{item:Object},setup(a){const l=i=>{const e=new Date(i);return isNaN(e)?"":new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric"}).format(e)};return(i,e)=>(o(),r("section",L,[t("h1",P,d(a.item.title),1),t("div",G,[t("div",{class:"relative overflow-hidden aspect-video rounded-[16px]",style:x({backgroundImage:"url("+a.item.cover+")",backgroundSize:"cover",backgroundPosition:"center"})},[a.item.customer_logo?(o(),r("div",O,[t("img",{src:a.item.customer_logo,alt:a.item.title,width:"100%",height:"100%",center:"",cover:"",responsive:"",loading:"lazy",class:"mx-auto aspect-1.72/1 scale-125"},null,8,H)])):u("",!0)],4),t("h3",U,d(l(a.item.published_at)),1),t("div",{class:"space-y-6 tracking-wide font-[200]",innerHTML:a.item.body},null,8,q)])]))}},K={key:0},Q=["content"],X=["content"],Y=["content"],Z=["content"],tt=["content"],et={key:1},st={__name:"[...slug]",setup(a){const l=S(),i=g([]),e=g([]),c=async s=>{i.value=await I(),e.value=await $(s),console.log(i.value),console.log(e.value)};return w(()=>{c(l.params.slug)}),k(()=>l.params.slug,s=>{s&&(c(s),console.log("newSlug",s))}),(s,n)=>(o(),r(p,null,[e.value?(o(),r("head",K,[t("title",null,d(e.value.title),1),t("meta",{name:"description",content:e.value.summary},null,8,Q),n[0]||(n[0]=t("meta",{name:"keywords",content:"industrial software insights, whitepapers, case studies, industry blogs, industrial innovation, digital transformation resources, industry reports, AITS resource center, technology in energy, smart cities, water management, mining solutions, F&B manufacturing trends"},null,-1)),t("meta",{property:"og:title",content:e.value.title},null,8,X),t("meta",{property:"og:description",content:e.value.summary},null,8,Y),t("meta",{name:"twitter:title",content:e.value.title},null,8,Z),t("meta",{name:"twitter:description",content:e.value.summary},null,8,tt)])):(o(),r("head",et,n[1]||(n[1]=[t("title",null,"Resource Center | Industry Insights, Whitepapers, Case Studies & Blogs | AITS",-1),t("meta",{name:"description",content:"Explore the AITS Resource Center for the latest industry insights, in-depth whitepapers, real-world case studies, and expert blogs. Stay informed on industrial innovations, digital transformation, and best practices across Energy, Smart Cities, Water Management, Manufacturing, and more."},null,-1),t("meta",{name:"keywords",content:"industrial software insights, whitepapers, case studies, industry blogs, industrial innovation, digital transformation resources, industry reports, AITS resource center, technology in energy, smart cities, water management, mining solutions, F&B manufacturing trends"},null,-1),t("meta",{property:"og:title",content:"Resource Center | Industry Insights, Whitepapers, Case Studies & Blogs | AITS"},null,-1),t("meta",{property:"og:description",content:"Explore the AITS Resource Center for the latest industry insights, in-depth whitepapers, real-world case studies, and expert blogs. Stay informed on industrial innovations, digital transformation, and best practices across Energy, Smart Cities, Water Management, Manufacturing, and more."},null,-1),t("meta",{name:"twitter:title",content:"Resource Center | Industry Insights, Whitepapers, Case Studies & Blogs | AITS"},null,-1),t("meta",{name:"twitter:description",content:"Explore the AITS Resource Center for the latest industry insights, in-depth whitepapers, real-world case studies, and expert blogs. Stay informed on industrial innovations, digital transformation, and best practices across Energy, Smart Cities, Water Management, Manufacturing, and more."},null,-1)]))),t("section",null,[e.value?(o(),m(J,{key:0,item:e.value},null,8,["item"])):u("",!0),i.value.length>0&&e.value?(o(),m(V,{key:1,data:i.value,currentId:e.value.id,industry:e.value.industry},null,8,["data","currentId","industry"])):u("",!0)])],64))}};export{st as default};
