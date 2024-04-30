<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    sectionid: String,
    sectiontitle: String,
    sectiondescription: String,
    data: Array
})
</script>


<template>
    <section :id="sectionid" class="flex flex-wrap justify-between gap-3 items-center 2xl:w-8/12 lg:w-10/12 w-11/12 z-[1] mx-auto mt-40">
        <div class="w-full lg:w-2/5">
            <h1 class="font-[400] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ sectiontitle }}</h1>
            <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">{{ sectiondescription }}</p>
            <RouterLink id="'go-to-success-stories-page'" aria-label="go to success stories page" to="/industries/#success-stories" class="block cursor-pointer px-4 py-3 w-1/3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 mt-auto mb-0">Browes All</RouterLink>
        </div> 
        <div class="flex flex-wrap items-center w-full h-full gap-3 justify-between mx-auto lg:w-[58%]">
            <div v-for="item in data" :key="key" class="sm:w-[48%] w-full flex-grow rounded-[16px] border-2 border-bg2">
                <div class="relative w-full h-40 bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]">
                    <div class="absolute inset-3 w-1/4 h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]">
                        <img :src="item.logo" :alt="item.title" width="100%" height="100%" center cover responsive loading="lazy" class="mx-auto aspect-video"/>    
                    </div>
                </div>
                <div class="flex flex-col gap-3 p-3">
                    <h2 class="text-accent1 font-[400] sm:text-lg">{{ item.title }}</h2>
                    <h3 class="text-accent2 font-[100] max-sm:text-[14px]">{{ item.category }}</h3>
                    <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.summary }}</p>
                </div>
            </div>
        </div>
    </section>
</template>