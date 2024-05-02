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
    <section :id="sectionid" class="flex flex-wrap items-center justify-between w-11/12 gap-6 pt-40 mx-auto lg:gap-0 2xl:w-8/12 lg:w-10/12">
        <div class="w-full lg:w-6/12 lg:pe-8">
            <h1 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ sectiontitle }}</h1>
            <p class="text-accent2 font-[200] max-sm:text-[14px] sm:text-justify mb-6">{{ sectiondescription }}</p>
            <RouterLink id="'go-to-success-stories-page'" aria-label="go to success stories page" to="/industries/#success-stories" class="block cursor-pointer px-4 py-3 w-fit max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 mt-auto mb-0">Browse All</RouterLink>
        </div> 
        <div class="grid flex-grow w-full h-full grid-cols-2 gap-3 mx-auto lg:w-6/12">
            <div v-for="item in data" :key="key" class="md:col-span-1 col-span-2 aspect-square w-full rounded-[16px] border-2 border-bg2">
                <div class="relative w-full h-40 bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]">
                    <div class="absolute inset-3 w-1/4 h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]">
                        <img :src="item.logo" :alt="item.title" width="100%" height="100%" center cover responsive loading="lazy" class="mx-auto aspect-video"/>    
                    </div>
                </div>
                <div class="flex flex-col gap-6 p-6">
                    <h3 class="font-[200] max-sm:text-[14px] rounded-[16px] text-accent1 border-b-accent1 underline">{{ item.category }}</h3>
                    <h2 class="text-accent1 font-[400] sm:text-lg h-[48px]">{{ item.title }}</h2>
                    <div class="hover:text-accent1 text-accent2 w-[34px] h-[34px] cursor-pointer aspect-square grid place-content-center ms-auto me-0 border-2 border-accent2 hover:border-accent1 text-xl rounded-full"> 🡥 </div>             
                    <!-- <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.summary }}</p> -->
                </div>
            </div>
        </div>
    </section>
</template>