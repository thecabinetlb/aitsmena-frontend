import{o as n,b as o,d as t,t as a,F as d,e as x,i as r,w as u,l as h,u as g,R as m,k as f}from"./app-C9xtF9y1.js";import{_ as b}from"./InnerHero-7xU0Zjkx.js";import{I as w}from"./InsideBody-BlbbbjVT.js";const _="/images/banners/careers.webp",y=["id"],v={class:"font-[500] text-accent1 md:text-4xl text-[30px] uppercase mb-6"},k={class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px]"},S={key:0,role:"list",class:"flex flex-wrap justify-center lg;justify-between mt-10 gap-6 lg:gap-3 list-style-none"},j={class:"p-6 w-full h-full relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2"},F={class:"w-8/12"},$={class:"font-[200] max-sm:text-[14px] text-accent1 underline mb-3"},A={class:"2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500] mb-3"},I={class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px]"},L={key:1,class:"lg:w-full relative group bg-extended-noise bg-cover bg-center bg-opacity-50 rounded-[16px] mt-10 mx-auto"},V={class:"md:px-10 p-6 relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2"},B={class:"2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500]"},p={__name:"JobsList",props:{sectionid:String,sectiontitle:String,sectiondescription:String,data:Array},setup(s){return(l,i)=>(n(),o("section",{id:s.sectionid,class:"w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12"},[t("h1",v,a(s.sectiontitle),1),t("p",k,a(s.sectiondescription),1),s.data?(n(),o("ul",S,[(n(!0),o(d,null,x(s.data,(e,c)=>(n(),o("li",{key:c,class:"flex-grow lg:w-5/12 w-full relative group sm:min-h-[135px] bg-extended-noise bg-cover bg-center rounded-[16px]"},[t("div",j,[t("div",F,[t("h3",$,a(e.type),1),t("h2",A,a(e.title),1),t("p",I,a(e.location),1)]),r(g(m),{id:"go-to-"+e.title+"-page","aria-label":"apply for"+e.title,to:e.to,target:e.target,class:"cursor-pointer px-4 py-3 mt-auto mb-0 w-fit block max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 transition-all duration-400"},{default:u(()=>i[0]||(i[0]=[h("Apply")])),_:2},1032,["id","aria-label","to","target"])])]))),128))])):(n(),o("div",L,[t("div",V,[t("h3",B,"No posted "+a(s.sectionid)+".",1)])]))],8,y))}},C={id:"why-aits",class:"w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12"},T={class:"font-[500] text-accent1 md:text-4xl text-[30px] uppercase mb-6"},G={role:"list",class:"grid lg:grid-cols-2 grid-cols-1 gap-6 h-full md:p-10 p-6 bg-gradient-to-r from-accent1/10 to-accent1/20 rounded-[16px] list-style-none"},N={class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px]"},R={__name:"Why",props:{sectiontitle:String,data:Array},setup(s){return(l,i)=>(n(),o("section",C,[t("h1",T,a(s.sectiontitle),1),t("ul",G,[(n(!0),o(d,null,x(s.data,(e,c)=>(n(),o("li",{key:c,class:"flex flex-wrap items-center gap-3"},[i[0]||(i[0]=f('<h1 class="sm:w-2/12 w-full font-[400] 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] text-accent1"><svg height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837" xml:space="preserve" fill="#F2F2F2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path style="fill:#F2F2F2;" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"></path></g></g></svg></h1>',1)),t("h2",N,a(e),1)]))),128))])]))}},J={class:"relative -mt-40"},E={__name:"careers",setup(s){const l=["Thrive personally and professionally","Inclusive culture that celebrates diversity","Purpose-driven approach","Attractive salary packages","Performance-based annual increases","Work-life balance"];return(i,e)=>(n(),o(d,null,[e[0]||(e[0]=t("head",null,[t("title",null,"AITS - Join the AITS Team")],-1)),r(b,{pagebanner:g(_),pagetitle:"Careers",pagedescription:"You might just be the employee we’ve been looking for! Browse through our selection of job vacancies and apply to be part of the family."},null,8,["pagebanner"]),t("section",J,[r(R,{sectiontitle:"Why AITS?",data:l}),r(p,{sectionid:"jobs-openings",sectiontitle:"Job Openings",sectiondescription:`Stay informed with the latest insights, trends, and developments in industrial automation and digitalization.\r
      Explore our blog for thought-provoking articles, expert opinions, and practical tips to help\r
      your business stay ahead of the curve.`}),r(p,{sectionid:"internship-opportunities",sectiontitle:"Graduate Program and Internship Opportunities",sectiondescription:"Kickstart your career with real-world challenges and mentorship from industry leaders. Join our Graduate Program or explore an internship opportunity with us to develop your skills and dive into the fascinating world of software solutions and digital services."}),r(w)])],64))}};export{E as default};
