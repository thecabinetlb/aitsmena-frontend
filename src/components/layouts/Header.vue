<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../../assets/AITSwhite.webp'
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
  { id: 6, name: 'Contact', to: '/contact' },
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
const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
const toggleSubMenu = (id) => {
  openSubMenu.value = openSubMenu.value !== id ? id : null;
}
</script>

<template>
  <header class="fixed left-1/2 transform -translate-x-1/2 top-[20px] h-[70px] z-10 xl:w-8/12 lg:w-10/12 w-11/12 flex justify-between items-center mx-auto gap-4 px-5 rounded-[16px]"
   :class="{'before:absolute before:backdrop-blur-[16px] before:rounded-[16px] before:z-[-1] before:inset-0 before:w-full before:h-full bg-gradient-to-r from-accent1/10 to-accent1/20' : changecolor || openSubMenu != null || isOpen, 'rounded-b-none before:rounded-b-none' : openSubMenu != null || isOpen}">
    <img :src="logo" alt="AITS logo" class="h-8" center cover responsive />
    <!-- Desktop -->
    <nav class="items-center justify-end hidden w-full gap-4 lg:flex">
      <div v-for="(item, key) in navlinks" :key="key">
        <RouterLink :id="item.name" :aria-label="'go to' + item.name" :to="item.to" 
        class="py-3 px-4 cursor-pointer text-lg font-[400] text-accent1"
        :class="{'bg-gradient-to-r from-accent1/10 to-accent1/20 rounded-full transform duration-600' : openSubMenu === item.id }"
          @click="toggleSubMenu(item.id)">
          {{ item.name }}
        </RouterLink>      
        <nav v-if="item.submenu && openSubMenu === item.id" 
        class="w-full h-fit absolute left-0 top-[70.5px] p-5 bg-gradient-to-r from-accent1/10 to-accent1/20 rounded-b-[16px] backdrop-blur-[16px]">
          <div class="w-full space-y-3 p-4 rounded-[16px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px]">
            <div v-for="(subitem, subkey) in item.submenu" :key="subkey" class="hover:brightness-85 cursor-pointer font-[400] text-accent1 text-lg pb-4">
              {{ subitem.name }}
            </div>
          </div>
        </nav>      
      </div>
    </nav>
    <!-- Mobile -->
    <button aria-label="open menu" class="flex items-center justify-center w-6 h-6 lg:hidden" @click="toggleOpen">
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" fill="white" viewBox="0 0 50 50">
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
      </svg>   
      <Transition>
      <h1 v-if="isOpen" class="text-2xl text-accent1">&#10005;</h1>
      </Transition> 
    </button>
    <nav v-show="isOpen" class="p-5 space-y-4 w-full lg:hidden absolute top-[70px] left-0 bg-gradient-to-r from-accent1/10 to-accent1/20 rounded-b-[16px] backdrop-blur-[16px]">
      <div v-for="(item, key) in navlinks" :key="key">
        <RouterLink :id="item.name" :aria-label="'go to' + item.name" :to="item.to" class="cursor-pointer font-[400] text-accent1"
        :class="{'brightness-85' : openSubMenu === item.id }"
        @click="toggleSubMenu(item.id)">
          {{ item.name }}
        </RouterLink>
        <nav v-if="item.submenu && openSubMenu === item.id" class="mt-3 w-full p-4 rounded-[16px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px]">
            <div v-for="(subitem, subkey) in item.submenu" :key="subkey" class="hover:brightness-85 cursor-pointer font-[400] text-accent1 pb-4">
              {{ subitem.name }}
            </div>
        </nav>
      </div>
    </nav>
  </header>
</template>