<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { ref, onMounted } from 'vue';

// Calculate the number of items to show based on screen width
const getItemsToShow = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1280) {
    return 3; // Desktop
  } else if (screenWidth >= 1024) {
    return 1; // smaller  Desktop
  } else if (screenWidth >= 768) {
    return 3; // Tablet
  } else {
    return 1; // Mobile
  }
};

onMounted(() => {
  window.addEventListener('resize', () => {
    getItemsToShow();
  });
});
const myCarousel = ref(null)
defineProps({
    sectionid: String,
    sectiontitle: String,
    sectiondescription: String,
    data: Array
})
</script>


<template>
    <section :id="sectionid" class="flex flex-wrap items-center w-full h-full gap-6 mt-40 lg:gap-0 lg:justify-between">
            <div class="lg:w-1/2 w-11/12 2xl:ps-[16.666667%] lg:ps-[8.333333%] lg:pe-6 mx-auto h-full">
                <h1 class="font-[400] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ sectiontitle }}</h1>
                <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">{{ sectiondescription }}</p>
                <RouterLink id="'go-to-blogs-page'" aria-label="go to blog page" to="/blogs" class="block cursor-pointer px-4 py-3 w-fit max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 mt-auto mb-0">Browes All</RouterLink>
            </div>            
            <div class="relative z-[1] lg:w-1/2 w-full h-full">
            <carousel
            ref="myCarousel"
            :wrap-around="true"
            :autoplay="6000" 
            :transition="2000"
            :items-to-show="getItemsToShow()"
            class="w-full h-full min-h-[40vh]">
                <slide v-for="item in data" :key="key" class="rounded-[16px] border-2 border-bg2">
                    <div class="w-full h-40 bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]"></div>
                    <div class="flex flex-col gap-3 p-3">
                        <h3 class="text-accent2 font-[100] max-sm:text-[14px]">{{ item.date }}</h3>
                        <h2 class="text-accent1 font-[400] sm:text-lg">{{ item.title }}</h2>
                        <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.summary }}</p>
                    </div>
                </slide>
                <template #addons>
                <Pagination />
                </template>
            </carousel>
            </div> 
    </section>
</template>

<style scoped>
.carousel__slide{
  display: block !important;
  text-align: left !important;
  margin: 10px !important;
} 
</style>