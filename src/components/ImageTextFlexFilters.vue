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
      <h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ sectiontitle }}</h1>
      <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">{{ sectiondescription }}</p>
      <div class="flex flex-wrap justify-end gap-6 mt-10">
        <button @click="filterData(0)"
        class="px-4 py-3 w-fit max-w-80 max-sm:text-[14px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] transition-all duration-400 rounded-[16px] text-accent1 bg-transparent hover:border-accent1 focus:outline-none"
        :class="{'border-b-2 border-accent1': clicked === 0, 'border-b-2 border-bg2' : clicked !==0}">
        Human-centered</button>
        <button @click="filterData(1)" 
        class="px-4 py-3 w-fit max-sm:text-[14px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] transition-all duration-400 rounded-[16px] text-accent1 bg-transparent border-b-2 hover:border-accent1 border-bg2 focus:outline-none">
        Passionate & Driven</button>      
        <button @click="filterData(2)" 
        class="px-4 py-3 w-fit max-sm:text-[14px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] transition-all duration-400 rounded-[16px] text-accent1 bg-transparent border-b-2 hover:border-accent1 border-bg2 focus:outline-none">
        Collaborative Spirit</button>                 
      </div>
      <div class="flex flex-wrap items-center justify-center w-full gap-6 mt-10 lg:gap-3 lg:justify-between max-lg:flex-col-reverse">
        <img :src="item.image" :alt="item.title" width="391" height="290" center cover responsive loading="lazy"/>    
        <div class="w-full space-y-3 lg:w-6/12">
          <h2 class="font-[200] text-accent1 md:text-4xl text-[30px] uppercase mb-6">{{ item.title }}</h2>
          <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">{{ item.description }}</p>
          <ul role="list" v-if="item.list" v-for="(listitem, key) in item.list" :key="key" class="list-disc ps-4">
            <li class="text-accent2 font-[200] max-sm:text-[14px]">{{ listitem }}</li>
          </ul>
          <RouterLink v-if="item.cta" id="go-to-contact-page" aria-label="go to contact page" to="/contact" class="w-fit block relative z-[2] cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 transition-all duration-400">{{ item.cta }}</RouterLink>
        </div>
      </div>
    </section>
</template>