<script setup>
import logo from '../../assets/AITSwhite.webp'
import { RouterLink } from 'vue-router'
const footerlinks = [
  {
  id: 1,
  name: "Quick Links",
  submenu: [
    { id: 1, name: "About Us" },
    { id: 2, name: "Contact Us" },
  ]
  },
  {
  id: 2,
  name: "Industries",
  submenu: [
    { id: 1, name: "Food & Beverage" },
    { id: 2, name: "Water & Wastewater" },
    { id: 3, name: "Smart Cities" },
    { id: 4, name: "Oil & Gas" },
    { id: 5, name: "Chemicals" },
    { id: 6, name: "Power & Utilities" },
    { id: 7, name: "Life Science" },
    { id: 8, name: "Metals, Mining, & Minerals" }
  ]
  },
  { 
    id: 3, 
    name: 'Resources', 
    to: '/resources',
    submenu: [
      { id: 1, name: 'Blog' },
      { id: 2, name: 'Whitepapers' },
      { id: 3, name: 'Webinars' },
      { id: 4, name: 'Industry Insights' }
    ]
  },
  { 
    id: 4, 
    name: 'Careers', 
    to: '/careers',
    submenu: [
      { id: 1, name: 'Job Openings' },
      { id: 2, name: 'Internship Opportunities' },
      { id: 3, name: 'Employee Benefits' }
    ]
  },
]

</script>

<template>
    <footer class="relative flex flex-col items-center justify-center gap-2 py-20 bg-bg">
        <div class="flex flex-wrap justify-between w-full gap-2">
            <div class="w-full lg:w-[30%] lg:mb-0 mb-4">
            <img :src="logo" alt="AITS logo" width="100" height="33" class="mx-auto" responsive/>
            </div>
            <nav class="flex flex-wrap justify-center w-full px-4 gap-y-4 md:px-2 lg:w-2/3">
                <div v-for="(item, key) in footerlinks" :key="key" class="w-1/2 sm:w-1/4">
                <h1 class="text-lg font-[400] text-accent1 lg:mb-4 mb-2">
                    {{ item.name }}
                </h1>            
                <div v-for="(subitem, subkey) in item.submenu" :key="subkey" class="text-sm font-[200] text-accent1 hover:brightness-95">
                    {{ subitem.name }}
                </div>                
                </div>
            </nav>
        </div>

      <!-- pattern -->
      <img src="../../assets/images/patterns/patternfooter.svg" alt="AITS" width="446" height="643" responsive loading="eager"
      class="absolute left-0 top-[100%] transform -translate-y-[100%] opacity-75"/>       
      <div class="relative text-center min-h-[50px] w-full mt-20 mb-10 flex flex-col items-center justify-center bg-noise bg-cover bg-center">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent1/10 to-accent1/20"></div>
        <p class="text-accent1">Copyright @ AITS All Rights Reserved.</p>
      </div>
    </footer>
</template>