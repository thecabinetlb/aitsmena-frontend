<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    sectionid: String,
    sectiontitle: String,
    item: Object, 
    reverse: Boolean,
    width: Boolean,
})
</script>
<template>
    <section :id="sectionid" class="w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12">
      <h1 class="text-accent1 font-[200] text-lg uppercase mb-3">{{ sectiontitle }}</h1>
      <hr v-if="sectiontitle" class="w-full h-4 mb-10 text-accent2"/>
      <div class="flex flex-wrap items-center justify-center w-full gap-6 lg:gap-3 lg:justify-between" :class="{'lg:flex-row-reverse' : reverse}">
        <div class="w-full lg:w-6/12">
          <h2 class="font-[200] text-accent1 md:text-4xl text-[30px] uppercase mb-6" :class="{'lg:w-[73.666667%]' : width}">{{ item.title }}</h2>
          <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] mb-6">{{ item.description }}</p>
          <RouterLink v-if="item.to" :id="'go-to-' + item.title + '-page'" :aria-label="'go to ' + item.title" :to="item.to" class="cursor-pointer px-4 py-3 w-fit block max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 transition-all duration-400">Browse</RouterLink>
        </div>
        <img :src="item.image" :alt="item.title" width="391" height="290" center cover responsive loading="lazy"/>    
      </div>
    </section>
</template>