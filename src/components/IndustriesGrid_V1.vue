<script setup>
import { ref } from 'vue'
defineProps({
    data: Array
})
const openDetails = ref(null)

</script>
<template>
    <section class="w-11/12 h-full mx-auto 2xl:w-8/12 lg:w-10/12">
        <h1 class="text-accent1 font-[200] text-lg uppercase"> &#x2022; Industries we serve</h1>
        <hr class="w-full h-4 mt-3 text-accent2"/>
        <div class="grid w-full grid-cols-1 gap-6 mt-10 2xl:grid-cols-3 sm:grid-cols-2">
            <div v-for="(item, key) in data" :key="key" 
            class="relative p-6 cursor-pointer flex flex-col justify-center gap-3 min-h-[293px] rounded-[16px] border-2 bg-noise bg-opacity-10 bg-cover bg-center"
            @click="openDetails = key"
            :class="{'scale-105 border-bg2/30 items-start sm:col-span-2 col-span-1 transform transition-all duration-300' : openDetails === key, 'items-center border-bg2 col-span-1' : openDetails !== key}">
            <div class="absolute inset-0 w-full h-full rounded-[16px] bg-gradient-to-br transform duration-300 z-[-1]"
            :class="{'from-bg2/50 to-bg2 bg-opacity-75' : openDetails === key, 'from-accent1/10 to-accent1/30 bg-opacity-50' : openDetails != key}"></div>
                <div :class="{'flex max-sm:flex-col gap-3 justify-center items-center' : openDetails === key}">
                    <div :class="{'sm:w-1/3' : openDetails === key}">
                        <img :src="item.icon" :alt="item.title" width="94" height="94" center cover responsive loading="lazy" class="max-sm:w-[54px] aspect-square mx-auto"/>
                        <h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[400] h-[48px] text-center">{{ item.title }}</h2>
                    </div>
                    <p v-show="openDetails === key" class="font-[200] max-sm:text-[14px] text-justify text-accent2"  :class="{'sm:w-2/3' : openDetails === key}">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>