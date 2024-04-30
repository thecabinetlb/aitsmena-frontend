<script setup>
import { RouterLink } from 'vue-router'
import logo from '/AITSLogoNoSlogan.webp'
const footerlinks = [
  { id: 1, 
    name: 'Quick Links',
    to:'',
    submenu: [
    { id: 1, name: "Home", to:"/" },
    { id: 2, name: 'About', to: '/about' },
    { id: 3, name: 'Contact ', to: '/contact' },
  ]},
  {
  id: 3,
  name: "Industries",
  to: '/industries',
  submenu: [
  { id: 1, name: "Overview", to:"/industries" },
  { id: 2, name: "Case Studies/Testimonials", to:"#testimonials" },
  { id: 3, name: "Succes Stories", to:"#success-stories" },
  ]},
  { 
    id: 4, 
    name: 'Resources', 
    to: '/resources',
    submenu: [
      { id: 1, name: 'Blog', to:'#blog' },
      { id: 2, name: 'Whitepapers', to:'#whitepapers' },
      { id: 3, name: 'Webinars', to:'#webinars' },
      { id: 4, name: 'Industry Insights', to:'#industry-insights' }
    ]
  },
  { 
    id: 5, 
    name: 'Careers', 
    to: '/careers',
    submenu: [
      { id: 1, name: 'Job Openings', to:'#jobs-and-internships' },
      { id: 2, name: 'Internship Opportunities', to:'#jobs-and-internships' },
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
</script>

<template>
    <footer class="relative flex flex-col items-center justify-center gap-10 pt-20 mt-20">
        <div class="flex flex-wrap justify-between w-11/12 gap-6 px-6 my-10 lg:gap-0 2xl:w-8/12 sm:w-10/12 gap-y-6">
            <div class="w-full lg:w-[20%] lg:mb-0 mb-10">
            <img :src="logo" alt="AITS logo" width="80" height="22" center cover responsive loading="lazy"/>
            </div>
            <ul role="list" class="flex flex-wrap justify-between w-full gap-y-3 lg:gap-3 lg:w-3/4 list-style-none">
              <li v-for="(item, key) in footerlinks" :key="key" class="w-full sm:w-1/2 lg:w-[24%] md:w-1/3">
                <h1 class="text-lg font-[400] text-accent1 mb-3">
                    {{ item.name }}
                </h1>            
                <div v-for="(subitem, subkey) in item.submenu" :key="subkey" class="pb-3">
                    <RouterLink :id="subitem.name" :aria-label="'go to ' + subitem.name" :to="{path: item.to, hash: subitem?.to}" 
                    class="font-[200] text-accent1 hover:brightness-75">
                    {{ subitem.name }}</RouterLink>
                </div>                
              </li>
            </ul>
        </div>

      <!-- pattern -->
      <img src="/images/patterns/patternfooter.svg" alt="AITS" width="446" height="643" center cover responsive loading="lazy"
      class="absolute left-0 top-[100%] transform -translate-y-[100%] opacity-75"/>       
     
      <div class="text-center min-h-[50px] w-full flex flex-col items-center justify-center bg-footer-noise bg-cover bg-center">
      <p class="text-accent1">Copyright @ AITS All Rights Reserved.</p>
      </div>
    </footer>
</template>    