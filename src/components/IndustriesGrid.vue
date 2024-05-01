<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  industries: Array
})
</script>
<template>
    <section class="w-11/12 h-full mx-auto 2xl:w-8/12 lg:w-10/12">
        <h1 class="text-accent1 font-[200] text-lg uppercase"> &#x2022; Industries we serve</h1>
        <hr class="w-full h-4 mt-3 text-accent2"/>        
        <div class="grid items-center w-full grid-cols-2 gap-6 mt-10 text-center lg:grid-cols-4 md:grid-cols-3">
            <div v-for="(item, key) in industries" :key="key" class="relative cursor-pointer group aspect-square min-h-[135px]">
            <div class="w-full h-full absolute inset-0 bg-gradient-to-br from-accent1/10 to-accent1/30 group-hover:from-bg2/50 group-hover:to-bg2 rounded-[16px] opacity-35 group-hover:opacity-50 transform duration-400 group-hover:duration-600"></div>
                <RouterLink :id="'go-to-' + item.title + '-page'" :aria-label="'go to ' + item.title + ' page'" :to="item.to" :target="item.target" class="w-full h-full relative flex flex-col justify-center items-center gap-3 rounded-[16px] bg-noise bg-opacity-10 bg-cover bg-center border-2 border-bg2/30 goup-hover:border-bg2">
                    <img :src="item.icon" :alt="item.title" width="94" height="94" center cover responsive loading="lazy" class="max-sm:w-[54px] aspect-square"/>
                    <h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[400] h-[48px]">{{ item.title }}</h2>
                </RouterLink>
            </div>
        </div>
    </section>
</template>
<!-- shadow-[4px_-4px_25px_-12px_rgba(50,82,123)]  shadow-[4px_-4px_25px_-12px_rgba(50,82,123)]-->