<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '/AITSLogoNoSlogan.webp'
const navlinks = [
  { id: 1, name: 'Home', to: '/' },
  { id: 2, name: 'About', to: '/about' },
  {
  id: 3,
  name: "Industries",
  to: '/industries',
  submenu: [
  { id: 1, name: "Overview", to:"/industries" },
  { id: 2, name: "Case Studies/Testimonials", to:"/industries" },
  { id: 3, name: "Succes Stories", to:"/industries" },
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

const changecolor = ref(false)
const hasSubMenu = ref(false)
const openSubMenu = ref(null)
const isOpen = ref(false)

const changeColor = () => {
  if (window.scrollY > 10) {
    changecolor.value = true;
  } else {
    changecolor.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", changeColor);
})

onUnmounted(() => {
  window.removeEventListener("scroll", changeColor);
})

const toggleSubMenu = (item) => {
  hasSubMenu.value = item.submenu ? true : false
  openSubMenu.value = openSubMenu.value !== item.id ? item.id : null
}

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

</script>
<template>
 <header class="fixed left-1/2 transform -translate-x-1/2 top-[20px] h-[67px] z-[9] 2xl:w-8/12 lg:w-10/12 w-11/12 lg:flex justify-around items-center mx-auto gap-2 px-6 rounded-[16px]" 
    :class="{'h-fit' : isOpen}">
    <div class="absolute inset-0 w-full h-full z-[-1] rounded-[16px]"
    :class="{'bg-bg' : changecolor || isOpen || hasSubMenu}"/>
    <RouterLink id="Homepage" :aria-label="'go to homepage'" to="/">
    <img :src="logo" alt="AITS logo" width="80" height="22" cover center responsive loading="eager" class="max-lg:my-[20px]"/>    
    </RouterLink>
    <!-- Desktop -->
    <nav class="items-center justify-end hidden w-full h-full gap-4 lg:flex">
      <div v-for="(item, key) in navlinks" :key="key" class="relative">
        <RouterLink :id="item.name" :aria-label="'go to ' + item.name" :to="item.to" 
        :activeClass="'bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]'"
        :exactActiveClass="'bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]'"
        class="py-2 px-3 cursor-pointer text-lg font-[400] text-accent1 hover:bg-gradient-to-r hover:from-accent1/10 hover:to-accent1/20 hover:backdrop-blur-[16px] hover:rounded-[8px]"
        @mouseenter="openSubMenu = item.id, hasSubMenu = item.submenu ? true : false">
          {{ item.name }}
        </RouterLink>
        <nav v-if="hasSubMenu && openSubMenu === item.id" class="w-[280px] h-fit absolute left-0 top-[60px] p-5 rounded-[16px] bg-bg/80"
        @mouseleave="hasSubMenu = false">
          <div v-for="(subitem, subkey) in item.submenu" :key="subkey" class="hover:text-accent1/70 cursor-pointer font-[400] text-accent1 text-lg pb-4 drop-shadow-md">
            <RouterLink :id="item.name" :aria-label="'go to ' + item.name" :to="item.to"        
            :activeClass="'text-accent1/70'"
            :exactActiveClass="'text-accent1/70'">
              {{ subitem.name }}
            </RouterLink>            
          </div>
        </nav>
      </div> 
    </nav>   
    <!-- Mobile -->
    <button aria-label="open menu" class="absolute flex items-center justify-center w-6 h-6 lg:hidden right-6 top-5" @click="toggleOpen">
      <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" fill="white" viewBox="0 0 50 50">
      <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path>
      </svg>   
      <Transition>
      <h1 v-if="isOpen" class="text-2xl text-accent1">&#10005;</h1>
      </Transition> 
    </button>
    <nav v-if="isOpen" class="w-full py-5 mt-5 space-y-4 lg:hidden">
      <div v-for="(item, key) in navlinks" :key="key">
        <RouterLink :id="item.name" :aria-label="'go to ' + item.name" :to="item.to" class="cursor-pointer font-[400] text-accent1 drop-shadow-md"
        :activeClass="'text-accent1/70'"
        :exactActiveClass="'text-accent1/70'"
        @click="toggleSubMenu(item)">
          {{ item.name }}
        </RouterLink>
        <nav v-if="hasSubMenu && openSubMenu === item.id" class="mt-3 w-full p-4 rounded-[16px] bg-bg/80">
            <div v-for="(subitem, subkey) in item.submenu" :key="subkey" class="hover:text-accent1/70 cursor-pointer font-[400] text-accent1 pb-4 drop-shadow-md">
              <RouterLink :id="item.name" :aria-label="'go to ' + item.name" :to="item.to"
              :activeClass="'text-accent1/70'"
        :exactActiveClass="'text-accent1/70'">{{ subitem.name }}</RouterLink>
            </div>
        </nav>
      </div>
    </nav>
  </header>
</template>