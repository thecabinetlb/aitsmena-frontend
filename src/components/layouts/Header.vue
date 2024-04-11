<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../../assets/AITS.webp'
const navlinks = [
  { id: 1, name: 'Home', to: '/' },
  { id: 2, name: 'About', to: '/about' },
  {
  id: 3,
  name: "Industries",
  to: '/industries',
  submenu: [
    { id: 1, name: "Food & Beverage" },
    { id: 2, name: "Water & Wastewater" },
    { id: 3, name: "Smart Cities" },
    { id: 4, name: "Oil & Gas" },
    { id: 5, name: "Chemicals" },
    { id: 6, name: "Power & Utilities" },
    { id: 7, name: "Life Science" },
    { id: 8, name: "Metals, Mining, & Minerals" }
  ]},
  { 
    id: 4, 
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
    id: 5, 
    name: 'Careers', 
    to: '/careers',
    submenu: [
      { id: 1, name: 'Job Openings' },
      { id: 2, name: 'Internship Opportunities' },
      { id: 3, name: 'Employee Benefits' }
    ]
  },
  { id: 5, name: 'Contact', to: '/contact' },
]

const isOpen = ref(false)
const openSubMenu = ref(null)
const changecolor = ref(false)

const changeColor = () => {
  if (window.scrollY > 10) {
    changecolor.value = true;
  } else {
    changecolor.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", changeColor);
});

onUnmounted(() => {
  window.removeEventListener("scroll", changeColor);
});
</script>

<template>
   <header class="fixed left-1/2 transform -translate-x-1/2 top-[20px] h-[70px] z-10 xl:w-8/12 lg:w-10/12 w-11/12 flex md:justify-around justify-between items-center mx-auto gap-2 px-6 rounded-full md:shadow-sm" 
   :class="{'bg-accent1/10' : changecolor}">
    <img :src="logo" alt="AITS logo" class="h-8" responsive/>
    <!-- Desktop -->
    <nav class="items-center justify-end hidden lg:flex ps-4">
      <div v-for="(item, key) in navlinks" :key="key" class="relative w-full">
      <RouterLink :id="item.name" :aria-label="'go to' + item.name" :to="item.to" class="cursor-pointer text-lg font-[400] text-accent1 px-[14px] py-[10px] hover:rounded-full hover:bg-accent1/10"
        @mouseenter="openSubMenu = item.id"
        @mouseleave="openSubMenu = null">
        {{ item.name }}
      </RouterLink>
      <nav v-if="item.submenu && openSubMenu === item.id"
        @mouseenter="openSubMenu = item.id"
        @mouseleave="openSubMenu = null"
        class="w-[300px] absolute left-0 top-[50px] p-4 flex flex-col space-y-2 backdrop-blur-sm bg-accent1/10 shadow-lg rounded-[16px]">
        <div v-for="(subitem, subkey) in item.submenu" :key="subkey" class="cursor-pointer font-[400] text-accent1 text-lg px-[14px] py-[10px] hover:rounded-full hover:bg-accent1/10">
          {{ subitem.name }}
        </div>
      </nav>
      </div>
    </nav>

  </header>
</template>