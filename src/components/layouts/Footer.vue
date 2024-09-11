<script setup>
import { RouterLink } from 'vue-router'
import logo from '/AITS_v1.svg'
import x from '/images/socials/x.svg'
import youtube from '/images/socials/youtube.svg'
import facebook from '/images/socials/facebook.svg'
import linkedin from '/images/socials/linkedin.svg'
const footerlinks = [
  { 
    id: 1, 
    name: 'Quick Links',
    submenu: [
    { id: 1, name: "Home", to:"/" },
    { id: 2, name: 'Contact ', to: '/contact' },
    { id: 3, name: 'Industries ', to: '/industries' },
  ]
  },
  {
    id: 2, 
    name: 'Resource Center', 
    to: '/resource-center',
    // submenu: [
    //   { id: 1, name: 'Blog', to:'#blog' },
    //   { id: 2, name: 'Whitepapers', to:'#whitepapers' },
    //   // { id: 3, name: 'Webinars', to:'#webinars' },
    //   { id: 3, name: 'Industry Insights', to:'#industry-insights' }
    // ]
  },
  {
    id: 3, 
    name: 'Careers', 
    to: '/careers',
    submenu: [
      { id: 1, name: 'Job Openings', to:'#jobs-openings' },
      { id: 2, name: 'Internship Opportunities', to:'#internship-opportunities' },
      { id: 3, name: 'Employee Benefits', to:'#employee-benefits' }
    ]
  }
]
    // { id: 1, name: "Food & Beverage" },
    // { id: 2, name: "Water & Wastewater" },
    // { id: 3, name: "Smart Cities" },
    // { id: 4, name: "Oil & Gas" },
    // { id: 5, name: "Chemicals" },
    // { id: 6, name: "Power & Utilities" },
    // { id: 7, name: "Life Science" },
    // { id: 8, name: "Metals, Mining, & Minerals" }
const sociallinks = [
  { id: 1, name:'Linkedin', to: 'https://www.linkedin.com/company/aitsmena/', target:"_blank", icon:linkedin },
  { id: 2, name:'Facebook', to: 'https://www.facebook.com/people/AITS/100057457570552/', target:"_blank", icon:facebook },
  { id: 3, name:'X', to: 'https://twitter.com/AITSglobal', target:"_blank", icon:x },
  { id: 4, name:'Youtube', to: 'https://www.youtube.com/channel/UC2e3BlBOc1EfhuxlBAaLQNw', target:"_blank", icon:youtube }
];
</script>

<template>
    <footer class="relative flex flex-col items-center justify-center gap-10 pt-20 sm:pt-40">
      <div class="flex items-center justify-center w-11/12 gap-3 p-6 mx-auto max-sm:flex-wrap 2xl:w-8/12 lg:w-10/12 rounded-[16px] bg-bg">
        <input type="text" id="email" placeholder="Subscribe to our newsletter" class="md:w-6/12 w-full block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"/>
        <div  to="/" class="block w-fit cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 transition-all duration-400">Subscribe</div>
          <!-- <RouterLink id="subscribe-to-newsletter" aria-label="subscribe to newsletter" to="/" class="relative z-[4] block w-fit cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 transition-all duration-400">Subscribe</RouterLink> -->
      </div>
      <div class="flex flex-wrap justify-between w-11/12 gap-6 px-6 my-10 lg:gap-0 2xl:w-8/12 lg:w-10/12">
            <div class="flex flex-col w-full gap-2 mb-10 lg:w-4/12 lg:mb-0">
              <img :src="logo" alt="AITS logo" width="164" height="43" center cover responsive loading="lazy" class="-ms-4"/>
              <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">AITS is dedicated to identifying and fulfilling the industrial sector’s software needs. We focus on creating value for our partners, customers, and the company by continuously delivering innovative software solutions.</p>
              <div class="relative z-[2] flex items-center gap-2">
                <a v-for="(item, key) in sociallinks" :key="key" :id="'go-to-' + item.name" :href="item.to" :target="item.target" class="w-8 aspect-square font-[200] bg-bg2 text-accent1 hover:brightness-125 transition-all duration-400 rounded-[8px] p-2 flex items-center justify-center">
                    <img :src="item.icon" :alt="'AITS' + item.name" center cover responsive class="w-full h-full" loading="lazy"/>
                </a>
              </div>
            </div>
            <ul role="list" class="flex flex-wrap justify-between w-full lg:w-7/12 gap-y-3 list-style-none">
              <li v-for="(item, key) in footerlinks" :key="key" class="w-full sm:w-1/2 md:w-1/3">
                <RouterLink :id="item.name" :aria-label="'go to ' + item.name" :to="item.to" class="mb-6 block text-lg font-[400] text-accent1">
                    {{ item.name }}
                </RouterLink>            
                <div v-for="(subitem, subkey) in item.submenu" :key="subkey" class="pb-3">
                    <RouterLink :id="subitem.name" :aria-label="'go to ' + subitem.name" :to="`${item.to}${subitem?.to}`" 
                    class="font-[200] text-accent1 hover:brightness-75 max-sm:text-[14px]">
                    {{ subitem.name }}</RouterLink>
                </div>                
              </li>
            </ul>
      </div>
      <!-- pattern -->
      <img src="/images/patterns/patternfooter.svg" alt="AITS" width="446" height="643" center cover responsive loading="lazy"
      class="absolute left-0 top-[100%] transform -translate-y-[100%] opacity-75"/>       
     
      <div class="text-center min-h-[50px] w-full flex flex-col items-center justify-center bg-footer-noise bg-cover bg-center">
      <p class="tracking-wide text-accent1 max-sm:text-[14px]">Copyright @ AITS All Rights Reserved.</p>
      </div>
    </footer>
</template>    