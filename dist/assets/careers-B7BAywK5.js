import{o as i,b as a,d as e,t as o,F as d,e as u,i as r,w as g,j as m,u as p,R as h}from"./app-BBA4c7Ju.js";import{_ as f}from"./InnerHero-B412dUvI.js";import{I as b}from"./InsideBody-CdWF0AQO.js";const w="/images/banners/careers.webp",v=["id"],y={class:"font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6"},_={class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px]"},k={key:0,role:"list",class:"flex flex-wrap justify-center lg;justify-between mt-10 gap-6 lg:gap-3 list-style-none"},j={class:"p-6 w-full h-full relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2"},S={class:"w-8/12"},B={class:"font-[200] max-sm:text-[14px] text-accent1 underline mb-3"},A={class:"2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500] mb-3"},I={class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px]"},$={key:1,class:"lg:w-full relative group bg-extended-noise bg-cover bg-center bg-opacity-50 rounded-[16px] mt-10 mx-auto"},T={class:"md:px-10 p-6 relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2"},O={class:"2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500]"},c={__name:"JobsList",props:{sectionid:String,sectiontitle:String,sectiondescription:String,data:Array},setup(t){return(l,n)=>(i(),a("section",{id:t.sectionid,class:"w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12"},[e("h1",y,o(t.sectiontitle),1),e("p",_,o(t.sectiondescription),1),t.data?(i(),a("ul",k,[(i(!0),a(d,null,u(t.data,(s,x)=>(i(),a("li",{key:x,class:"flex-grow lg:w-5/12 w-full relative group sm:min-h-[135px] bg-extended-noise bg-cover bg-center rounded-[16px]"},[e("div",j,[e("div",S,[e("h3",B,o(s.type),1),e("h2",A,o(s.title),1),e("p",I,o(s.location),1)]),r(p(h),{id:"go-to-"+s.title+"-page","aria-label":"apply for"+s.title,to:s.to,target:s.target,class:"cursor-pointer px-4 py-3 mt-auto mb-0 w-fit block max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 transition-all duration-400"},{default:g(()=>n[0]||(n[0]=[m("Apply")])),_:2},1032,["id","aria-label","to","target"])])]))),128))])):(i(),a("div",$,[e("div",T,[e("h3",O,"No posted "+o(t.sectionid)+".",1)])]))],8,v))}},J={id:"employee-benefits",class:"w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12"},N={class:"font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6"},W={class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px]"},E={__name:"BenefitsFlexWithBlur",props:{sectiontitle:String,sectiondescription:String},setup(t){return(l,n)=>(i(),a("section",J,[e("h1",N,o(t.sectiontitle),1),e("p",W,o(t.sectiondescription),1),n[0]||(n[0]=e("div",{class:"space-y-3 md:p-10 p-6 bg-gradient-to-r from-accent1/10 to-accent1/20 rounded-[16px] mt-10"},[e("p",{class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px]"},"At AITS, we’re committed to creating an environment where employees thrive both personally and professionally. Our inclusive culture celebrates diversity and collaboration, valuing every employee. We’re committed to aligning our mission and values with the work we do. Our purpose-driven approach ensures that every employee understands their impact and contributes meaningfully to our shared goals. Whether it’s serving our customers, driving innovation, or making a positive impact in the world, purpose guides our actions and inspires excellence."),e("p",{class:"tracking-wide text-accent2 font-[200] max-sm:text-[14px]"},"Our attractive salary packages include performance-based annual increases, bonuses, and comprehensive benefits like health insurance, annual air tickets, and various paid leaves. Get access to training, professional development opportunities, and leadership programs for career growth, and enjoy flexible hours and remote work options to support work-life balance.")],-1))]))}},F={class:"relative -mt-40"},G={__name:"careers",setup(t){return(l,n)=>(i(),a(d,null,[n[0]||(n[0]=e("head",null,[e("title",null,"AITS - Join the AITS Team"),e("meta",{name:"description",content:"Browse through our available job openings to join the team and make an impact at AITS! We welcome diverse experts from all parts of the world."})],-1)),r(f,{pagebanner:p(w),pagetitle:"Careers",pagedescription:"You might just be the employee we’ve been looking for! Browse through our selection of job vacancies and apply to be part of the family."},null,8,["pagebanner"]),e("section",F,[r(c,{sectionid:"jobs-openings",sectiontitle:"Job Openings",sectiondescription:`Stay informed with the latest insights, trends, and developments in industrial automation.\r
      Explore our blog for thought-provoking articles, expert opinions, and practical tips to help\r
      your business stay ahead of the curve.`}),r(c,{sectionid:"internship-opportunities",sectiontitle:"Internship Opportunities",sectiondescription:"Got a knack for learning? Join our team as an intern and develop your skills while exploring the mystical world of software solutions and digital services."}),r(E,{sectiontitle:"Employees Benefits"}),r(b)])],64))}};export{G as default};
