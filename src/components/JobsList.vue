<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    sectiontitle: String,
    sectiondescription: String,
    jobsorinternships: Array
})
</script>

<template>
    <section class="w-11/12 px-6 mx-auto my-40 2xl:w-8/12 sm:w-10/12">
        <h1 class="text-accent1 font-[200] text-lg uppercase"> &#x2022; New Opportunity</h1>
        <hr class="w-full h-4 mt-3 text-accent2"/>          
        <div class="flex flex-wrap items-center justify-center w-full gap-6 mt-10 lg:gap-0 lg:justify-between">
        <div class="w-full space-y-10 lg:w-1/2">
            <h1 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase lg:mb-10 mb-20">{{ sectiontitle }}</h1>
            <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ sectiondescription }}</p>
        </div>
        <ul role="list" class="flex flex-col gap-10 list-style-none">
            <li v-for="(item, key) in jobsorinternships" :key="key" class="cursor-pointer relative group max-sm:min-h-[135px]">
            <div class="w-full h-full max-sm:min-h-[135px] absolute -inset-0 bg-gradient-to-br from-accent1/10 to-accent1/30 group-hover:from-bg2/50 group-hover:to-bg2 rounded-[16px] opacity-35 group-hover:opacity-50 transform duration-400 group-hover:duration-600"></div>
                <div class="p-3 w-full h-full max-sm:min-h-[135px] relative flex justify-between items-center gap-5 rounded-[16px] bg-noise bg-cover bg-center border border-bg2">
                    <div class="w-2/3 space-y-3">
                        <h3 class="px-3 py-2 w-fit font-[200] max-sm:text-[14px] rounded-[16px] text-accent1 shadow-sm border border-bg2">{{ item.type }}</h3>
                        <h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[400] max-sm:min-h-[48px]">{{ item.title }}</h2>
                        <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.location }}</p>
                    </div>
                    <RouterLink :id="'go-to-' + item.title + '-page'" :aria-label="'apply-from-' + item.title" :to="item.to" :target="item.target" class="cursor-pointer px-4 py-3 mt-auto mb-0 w-fit max-sm:text-[14px] font-[200] text-center rounded-[8px] shadow-lg text-accent1 bg-bg2 hover:brightness-125">Apply</RouterLink>
                </div>
            </li>
        </ul>
        </div>
    </section>
</template>

