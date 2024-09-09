<script setup>
defineProps({
    sectionid: String,
    sectiontitle: String,
    sectiondescription: String,
    data: Array
})
</script>
<template>
    <section :id="sectionid" class="w-11/12 mx-auto 2xl:w-8/12 lg:w-10/12">
    <div class="flex flex-wrap justify-between gap-6 lg:gap-3">
        <div class="lg:w-6/12">
            <h1 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">Home of<br class="max-sm:hidden"> Two Divisions</h1>
            <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">
                {{ sectiondescription }}
            </p>
            <RouterLink id="go-to-contact-page" aria-label="go to contact page" to="/contact" class="block w-fit cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 transition-all duration-400">Contact Our Experts</RouterLink>
        </div>
        <div class="relative flex justify-center gap-5 mx-auto lg:ms-auto lg:me-0 lg;mt-0 mt-10 lg:justify-end lg:w-5/12">
            <div v-for="item in data" :key="key">
                <img :src="item.logo" width="168" height="168" :alt="item.title" cover center responsive loading="lazy" 
                class="aspect-square border-2 border-accent1 transform duration-600 shadow-md shadow-accent1 rounded-[16px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px]" />            
            </div>
        </div>
    </div>
    <hr class="w-full h-4 mt-40 text-accent2"/>
    </section>
</template>
