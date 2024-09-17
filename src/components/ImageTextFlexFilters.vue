<script setup>
import { ref } from 'vue';

const props = defineProps({
    sectionid: String,
    sectiontitle: String,
    sectiondescription: String,
    data: Array
})
const clicked = ref(0)
const item = ref(props.data[0])
const filterData = (key) => {
  clicked.value = key
  if (item.value === props.data[0]) {
    item.value === props.data[key];
   } else {
    item.value = props.data[key];
   }
}
</script>
<template>
    <section :id="sectionid" class="w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12">
      <h1 class="text-accent1 font-[200] text-lg uppercase mb-3">{{ sectiontitle }}</h1>
      <hr class="w-full h-4 text-accent2"/>
      <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] mt-10">{{ sectiondescription }}</p>
      <div class="flex justify-between w-full mt-6 md:gap-6 lg:w-6/12">
        <button @click="filterData(0)"
        class="px-2 sm:px-4 py-3 w-fit max-w-80 max-sm:text-[14px] transition-all duration-400 rounded-[16px] text-accent1 bg-transparent border-b-2 hover:border-accent1 outline-none"
        :class="{'border-b-2 border-accent1': clicked === 0, 'border-b-2 border-bg2' : clicked !== 0}">
        Human-centered</button>
        <button @click="filterData(1)" 
        class="px-2 sm:px-4 py-3 w-fit max-sm:text-[14px] transition-all duration-400 rounded-[16px] text-accent1 bg-transparent border-b-2 hover:border-accent1 outline-none"
        :class="{'border-b-2 border-accent1': clicked === 1, 'border-b-2 border-bg2' : clicked !== 1}">
        Passionate & Driven</button>      
        <button @click="filterData(2)" 
        class="px-2 sm:px-4 py-3 w-fit max-sm:text-[14px] transition-all duration-400 rounded-[16px] text-accent1 bg-transparent border-b-2 hover:border-accent1 outline-none"
        :class="{'border-b-2 border-accent1': clicked === 2, 'border-b-2 border-bg2' : clicked !== 2}">
        Collaborative Spirit</button>                 
      </div>
      <div class="flex flex-wrap items-center justify-center w-full gap-6 mt-10 lg:gap-3 lg:justify-between"
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: '100',
          delay: 100,
        },
      }">
        <div class="w-full space-y-3 lg:w-6/12">
          <h2 class="font-[200] text-accent1 md:text-4xl text-[30px] uppercase mb-6">{{ item.title }}</h2>
          <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">{{ item.description }}</p>
          <ul role="list" v-if="item.list" v-for="(listitem, key) in item.list" :key="key" class="list-disc ps-4">
            <li class="text-accent2 font-[200] max-sm:text-[14px]">{{ listitem }}</li>
          </ul>
        </div>
        <img :src="item.image" :alt="item.title" width="391" height="290" center cover responsive loading="lazy"/>    
      </div>
      <RouterLink id="go-to-contact-page" aria-label="go to contact page" to="/contact" class="mt-6 w-fit block relative z-[2] cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 transition-all duration-400">Contact Our Experts</RouterLink>

    </section>
</template>