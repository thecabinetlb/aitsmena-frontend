<script setup>
import { ref } from 'vue';

defineProps({
    sectionid: String,
    sectiontitle: String,
    sectiondescription: String,
    data: Array
})

const filterdata = ref(data[0])
const filterData = (key) => {
   if (filterdata.value === data[0]) {
    filterdata.value === data[key];
   } else {
    filterdata.value = data[key];
   }
}
</script>
<template>
    <section :id="sectionid" class="w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12">
      <h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ sectiontitle }}</h1>
      <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ sectiondescription }}</p>
      <div class="flex flex-wrap justify-end gap-3 mt-10">
        <button @click="filterData(0)" 
        class="px-4 py-3 w-fit h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border border-accent2 focus:outline-none focus:ring-0 focus:border-bg2 peer"
        :class="{'border-bg2' : filterdata === data[0]}">
            Gender Equality</button>   
        <button @click="filterData(1)" 
        class="px-4 py-3 w-fit h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border border-accent2 focus:outline-none focus:ring-0 focus:border-bg2 peer">
            Employee First</button>      
          <button @click="filterData(2)" 
          class="px-4 py-3 w-fit h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border border-accent2 focus:outline-none focus:ring-0 focus:border-bg2 peer">
            Continuous Improvement</button>                 
      </div>
      <div class="flex flex-wrap items-center justify-center w-full gap-6 mt-10 lg:gap-3 lg:justify-between max-lg:flex-col-reverse">
        <img :src="filterdata.image" :alt="filterdata.title" width="391" height="290" center cover responsive loading="lazy"/>    
        <div class="w-full lg:w-6/12">
          <h2 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ filterdata.title }}</h2>
          <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">{{ filterdata.description }}</p>
          <ul v-for="(listitem, key) in filterdata.initiatives" :key="key" class="list-style-none">
            <li class="text-accent2 font-[200] max-sm:text-[14px] text-justify">&#x2022; {{ listitem }}</li>
          </ul>
          <!-- <RouterLink v-if="item.to" :id="'go-to-' + item.title + '-page'" :aria-label="'go to ' + item.title" :to="item.to" class="cursor-pointer px-4 py-3 w-fit block max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125">Browse</RouterLink> -->
        </div>
      </div>
    </section>
</template>