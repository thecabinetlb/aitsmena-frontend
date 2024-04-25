<script setup>
import { RouterLink } from 'vue-router'
defineProps({
  pagename: String,
  navlinks: Array
})
</script>
<template>
    <section class="flex flex-col justify-end bg-bg2 h-[40vh] -mt-[40px] mb-20">
        <div class="w-11/12 px-6 mx-auto 2xl:w-8/12 sm:w-10/12">
        <h1 class="font-[400] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-10 text-accent">{{ pagename }}</h1>          
        </div>
        <nav class="flex gap-6 bg-accent1/20">
            <div class="w-11/12 px-6 mx-auto 2xl:w-8/12 sm:w-10/12">
            <RouterLink v-for="(item, key) in navlinks" :key="key" :id="item.name" :aria-label="'go to' + item.name" :to="item.to" class="text-lg w-fit text-accent1 hover:brightness-85">
                {{ item.name }}
            <span v-show="item.id < navlinks.length" class="px-3">&raquo;</span>
            </RouterLink>                
            </div>
        </nav>
    </section>
</template>