<script setup>
defineProps({
    sectionid: String,
    sectiondescription: String,
    data: Array
})
</script>
<template>
    <section :id="sectionid" class="w-11/12 px-6 mx-auto 2xl:w-8/12 sm:w-10/12">
    <div class="flex flex-wrap justify-between gap-6 lg:gap-3">
        <div class="lg:w-6/12">
            <h1 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">Our</br>Sub-Companies</h1>
            <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">
                {{ sectiondescription }}
            </p>
        </div>
        <div class="relative flex gap-6 lg:w-5/12">
            <div v-for="item in data" :key="key" class="ms-auto me-0">
            <img :src="item.logo" width="168" height="168" :alt="item.title" cover center responsive loading="lazy" 
            class="aspect-square border-2 border-accent1 transform duration-600 shadow-md shadow-accent1 rounded-[16px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px]" />            
            </div>
        </div>
    </div>
    </section>
</template>
