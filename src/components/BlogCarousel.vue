<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { ref, onMounted } from 'vue';

// Calculate the number of items to show based on screen width
const getItemsToShow = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1280) {
    return 2; // Desktop
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
    sectiontitle: String,
    sectiondescription: String,
    blogorindustryinsights: Array
})
</script>


<template>
    <section>
        <div class="flex flex-wrap items-center w-full h-full gap-6 my-40 lg:gap-0 lg:justify-between">
            <div class="lg:w-1/2 w-11/12 2xl:ps-[16.666667%] lg:ps-[8.333333%] lg:pe-6 mx-auto h-full">
                <h1 class="font-[400] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ sectiontitle }}</h1>
                <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">{{ sectiondescription }}</p>
                <!-- Navigation arrows -->
                <div class="items-center hidden gap-4 mx-auto md:flex relative z-[1]">
                <button aria-label="go to the next post" @click="myCarousel.prev()">
                    <svg width="70" height="70" viewBox="0 0 70 70" class="w-10 cursor-pointer aspect-square"  fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35 0C15.67 0 0 15.67 0 35C0 54.33 15.67 70 35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 0 35 0ZM35 1.2069C53.6634 1.2069 68.7931 16.3366 68.7931 35C68.7931 53.6634 53.6634 68.7931 35 68.7931C16.3366 68.7931 1.2069 53.6634 1.2069 35C1.2069 16.3366 16.3366 1.2069 35 1.2069Z" fill="url(#paint0_linear_274_875)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3273 35.2041L32.6364 25.362C33.0705 24.9142 33.775 24.8622 34.2819 25.3167C34.7341 25.7216 34.7455 26.5131 34.3273 26.9541L26.8544 34.8422H45.8364C46.4796 34.8422 47 35.3601 47 36.0001C47 36.6401 46.4795 37.158 45.8364 37.158H26.8544L34.3273 45.0462C34.7455 45.4872 34.7159 46.2584 34.2819 46.6835C33.8228 47.1313 33.0636 47.0928 32.6364 46.6383L23.3273 36.7962C23.0545 36.5293 23.0045 36.2715 23 36.0001C23 35.7333 23.1636 35.376 23.3273 35.2041Z" fill="url(#paint1_linear_274_875)"/>
                        <defs>
                        <linearGradient id="paint0_linear_274_875" x1="-12.8909" y1="-9.82164" x2="75.5039" y2="75.5039" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFE3C9"/>
                        <stop offset="0.528659" stop-color="#98C5FF"/>
                        <stop offset="1" stop-color="#91FFFF"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_274_875" x1="51.4197" y1="21.9132" x2="23.6582" y2="51.1469" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFE3C9"/>
                        <stop offset="0.528659" stop-color="#98C5FF"/>
                        <stop offset="1" stop-color="#91FFFF"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </button>
                <button aria-label="go to the previous post"@click="myCarousel.next()">
                    <svg width="70" height="70" viewBox="0 0 70 70" class="w-10 cursor-pointer aspect-square" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 6.25948e-06 35 4.5696e-06C15.67 2.87972e-06 -2.87972e-06 15.67 -4.5696e-06 35C-6.25948e-06 54.33 15.67 70 35 70ZM35 68.7931C16.3366 68.7931 1.2069 53.6634 1.2069 35C1.2069 16.3366 16.3366 1.2069 35 1.2069C53.6634 1.2069 68.7931 16.3366 68.7931 35C68.7931 53.6634 53.6634 68.7931 35 68.7931Z" fill="url(#paint0_linear_274_876)"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M45.6864 34.7959L36.7651 44.638C36.3491 45.0858 35.6739 45.1378 35.1882 44.6833C34.7548 44.2784 34.7439 43.4869 35.1447 43.0459L42.3062 35.1578L24.1152 35.1578C23.4988 35.1578 23 34.6399 23 33.9999C23 33.3599 23.4988 32.842 24.1152 32.842L42.3062 32.842L35.1447 24.9538C34.7439 24.5128 34.7722 23.7416 35.1882 23.3165C35.6282 22.8687 36.3557 22.9072 36.7651 23.3617L45.6864 33.2038C45.9477 33.4707 45.9956 33.7285 46 33.9999C46 34.2667 45.8432 34.624 45.6864 34.7959Z" fill="url(#paint1_linear_274_876)"/>
                        <defs>
                        <linearGradient id="paint0_linear_274_876" x1="82.8909" y1="79.8216" x2="-5.50385" y2="-5.50388" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFE3C9"/>
                        <stop offset="0.528659" stop-color="#98C5FF"/>
                        <stop offset="1" stop-color="#91FFFF"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_274_876" x1="18.7644" y1="48.0868" x2="46.5618" y2="20.0349" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FFE3C9"/>
                        <stop offset="0.528659" stop-color="#98C5FF"/>
                        <stop offset="1" stop-color="#91FFFF"/>
                        </linearGradient>
                        </defs>
                    </svg>  
                </button>
                </div>
            </div>            
            <div class="relative z-[1] lg:w-1/2 w-full h-full">
            <carousel
            ref="myCarousel"
            :wrap-around="true"
            :autoplay="6000" 
            :transition="2000"
            :items-to-show="getItemsToShow()"
            class="w-full h-full min-h-[50vh] lg:py-20">
                <slide v-for="item in blogorindustryinsights" :key="key" class="h-full min-h-[50vh] rounded-[16px] border border-bg2">
                    <div class="w-full h-40 bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]"></div>
                    <div class="flex flex-col gap-6 p-6">
                        <h3 class="text-accent2 font-[100] max-sm:text-[14px]">{{ item.date }}</h3>
                        <h2 class="text-accent1 font-[500] sm:text-lg">{{ item.title }}</h2>
                        <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.summary }}</p>
                    </div>
                    <div class="h-20">
                    <RouterLink :id="'go-to-' + item.title + '-page'" :aria-label="'read-more-about' + item.title" :to="item.to" :target="item.target" class="ms-6 ursor-pointer px-4 py-3 w-fit max-sm:text-[14px] font-[200] text-center rounded-[8px] shadow-lg text-accent1 bg-bg2 hover:brightness-125 mt-auto mb-0">Read More</RouterLink>
                    </div>
                </slide>
                <template #addons>
                <Pagination />
                </template>
            </carousel>
            </div> 
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