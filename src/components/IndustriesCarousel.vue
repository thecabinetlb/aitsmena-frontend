
<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
const myCarousel = ref(null)
defineProps({
    data: Array
})
const breakpoints = {
    280: {
    itemsToShow: 1.5,
    snapAlign: 'staart',
  },
  // 768px and up
  768: {
    itemsToShow: 3.5,
    snapAlign: 'start',
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
}

</script>
<template>
    <section class="pt-40">
      <div class="w-11/12 mx-auto 2xl:w-8/12 sm:w-10/12">
        <h1 class="text-accent1 font-[200] text-lg uppercase">Our industries</h1>
        <hr class="w-full h-4 mt-3 text-accent2"/>          
      </div>
      <div class="relative w-full h-full z-[5]">
        <Carousel
          ref="myCarousel"
          :breakpoints="breakpoints"
          :autoplay="6000"
          :transition="500"
          class="w-11/12 mx-auto mt-10 2xl:w-8/12 sm:w-10/12 mask">
          <Slide v-for="(item, key) in data" :key="item.id" class="relative aspect-square rounded-[16px] border-2 bg-noise bg-opacity-50 bg-cover bg-center my-10 border-bg2">
          <RouterLink :id="'go-to-' + item.title + '-page'" :aria-label="'go to ' + item.title" to="industries" class="cursor-pointer flex flex-col gap-3 justify-center items-center text-center absolute inset-0 w-full h-full rounded-[16px] bg-gradient-to-br transition-all duration-300 z-[-1] from-accent1/10 to-accent1/30 bg-opacity-50 hover:from-bg2/50 hover:to-bg2 hover:bg-opacity-75">
            <img :src="item.icon" :alt="item.title" width="94" height="94" center cover responsive loading="lazy" class="mx-auto"/>
            <h2 class="max-sm:text-[14px] text-accent1 font-[400] sm:h-[48px]">{{ item.title }}</h2>
          </RouterLink>
        </Slide>
        </Carousel>
        <!-- Carousel Navigation -->
        <button aria-label="go to the next industry" @click="myCarousel.prev()" class="hidden absolute 2xl:left-40 left-6 top-1/2 transform -translate-y-1/2 z-[4] hover:brightness-75 text-2xl w-[44px] h-[44px] cursor-pointer aspect-square md:grid place-content-center border-2 border-accent1 rounded-full"> 
            <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.827274 10.2041L10.1364 0.361975C10.5705 -0.085807 11.275 -0.13782 11.7819 0.316747C12.2341 0.721559 12.2455 1.51309 11.8273 1.95406L4.3544 9.84223H23.3364C23.9796 9.84223 24.5 10.3601 24.5 11.0001C24.5 11.6401 23.9795 12.158 23.3364 12.158H4.3544L11.8273 20.0462C12.2455 20.4872 12.2159 21.2584 11.7819 21.6835C11.3228 22.1313 10.5636 22.0928 10.1364 21.6383L0.827274 11.7962C0.554544 11.5293 0.504543 11.2715 0.5 11.0001C0.5 10.7333 0.663637 10.376 0.827274 10.2041Z" fill="url(#paint0_linear_274_838)"/>
            <defs>
            <linearGradient id="paint0_linear_274_838" x1="28.9197" y1="-3.0868" x2="1.15825" y2="26.1469" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.528659" stop-color="white"/>
            <stop offset="1" stop-color="#91FFFF"/>
            </linearGradient>
            </defs>
            </svg>
        </button>            
        <button aria-label="go to the prev industry" @click="myCarousel.next()" class="hidden absolute 2xl:right-40 right-6 top-1/2 transform -translate-y-1/2 z-[4] hover:brightness-75 text-2xl w-[44px] h-[44px] cursor-pointer aspect-square md:grid place-content-center border-2 border-accent1 rounded-full"> 
            <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6864 11.7959L13.7651 21.638C13.3491 22.0858 12.6739 22.1378 12.1882 21.6833C11.7548 21.2784 11.7439 20.4869 12.1447 20.0459L19.3062 12.1578L1.11516 12.1578C0.498755 12.1578 9.0571e-07 11.6399 9.61662e-07 10.9999C1.01761e-06 10.3599 0.498772 9.84198 1.11516 9.84198L19.3062 9.84198L12.1447 1.95381C11.7439 1.51282 11.7722 0.741607 12.1882 0.316491C12.6282 -0.131291 13.3557 -0.0928428 13.7651 0.361718L22.6864 10.2038C22.9477 10.4707 22.9956 10.7285 23 10.9999C23 11.2667 22.8432 11.624 22.6864 11.7959Z" fill="url(#paint0_linear_274_870)"/>
            <defs>
            <linearGradient id="paint0_linear_274_870" x1="-4.23558" y1="25.0868" x2="23.5618" y2="-2.96506" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.528659" stop-color="white"/>
            <stop offset="1" stop-color="#91FFFF"/>
            </linearGradient>
            </defs>
            </svg>
        </button>   
      </div>  
    </section>
</template>


<style scoped>
.carousel__slide{
  display: flex !important;
  flex-direction: column !important;
  margin:0 10px !important;
  justify-content: center !important;
  align-items: center !important;
} 
.mask {
  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%);
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%);
  mask-size: cover; 
  mask-position: center;
}

</style>