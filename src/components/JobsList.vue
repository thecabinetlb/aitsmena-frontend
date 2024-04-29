<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    sectiontitle: String,
    sectiondescription: String,
    jobsorinternships: Array
})
</script>

<template>
    <section class="w-11/12 mx-auto 2xl:w-8/12 sm:w-10/12">
        <h1 class="text-accent1 font-[200] text-lg uppercase"> &#x2022; New Opportunities</h1>
        <hr class="w-full h-4 mt-3 text-accent2"/>          
        <div class="w-full my-10">
            <h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase lg:mb-10 mb-20">{{ sectiontitle }}</h1>
            <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ sectiondescription }}</p>
        </div>
        <ul role="list" class="flex flex-wrap justify-center lg;justify-between gap-10 lg:gap-3 list-style-none">
            <li v-for="(item, key) in jobsorinternships" :key="key" class="sm:w-[49%] cursor-pointer relative group max-sm:min-h-[135px] bg-extended-noise bg-cover bg-center rounded-[16px]">
                <div class="p-3 w-full h-full relative flex justify-between items-center lg:gap-3 gap-6 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2">
                    <div class="w-2/3">
                        <h3 class="px-3 py-2 w-fit font-[200] max-sm:text-[14px] rounded-[16px] text-accent1 shadow-sm border-2 border-bg2 mb-3">{{ item.type }}</h3>
                        <h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[400] max-sm:min-h-[48px] mb-3">{{ item.title }}</h2>
                        <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.location }}</p>
                    </div>
                    <RouterLink :id="'go-to-' + item.title + '-page'" :aria-label="'apply for' + item.title" :to="item.to" :target="item.target" class="cursor-pointer px-4 py-3 mt-auto mb-0 w-fit block max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125">Apply</RouterLink>
                </div>
            </li>
        </ul>
    </section>
</template>

