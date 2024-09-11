
<script setup>
import arrowleft from '../components/icons/arrowleft.vue';
import { ref,onMounted } from 'vue';
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
        snapAlign: 'center',
      },
      // 768px and up
      768: {
        itemsToShow: 3.5,
        snapAlign: 'center',
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
          :wrap-around="true"
          :autoplay="6000"
          :transition="500"
          class="w-11/12 mx-auto mt-10 2xl:w-8/12 sm:w-10/12 mask">
          <Slide v-for="(item, key) in data" :key="item.d" class="relative aspect-square rounded-[16px] border-2 bg-noise bg-opacity-50 bg-cover bg-center my-10">
          <RouterLink :id="'go-to-' + item.title + '-page'" :aria-label="'go to ' + item.title" to="/industries" class="cursor-pointer flex flex-col gap-3 justify-center items-center text-center absolute inset-0 w-full h-full rounded-[16px] bg-gradient-to-br transition-all duration-300 z-[-1] from-accent1/10 to-accent1/30 bg-opacity-50 hover:from-bg2/50 hover:to-bg2 hover:bg-opacity-75">
            <img :src="item.icon" :alt="item.title" width="94" height="94" center cover responsive loading="lazy" class="mx-auto"/>
            <h2 class="max-sm:text-[14px] text-accent1 font-[400] sm:h-[48px]">{{ item.title }}</h2>
            <arrowleft />
          </RouterLink>
        </Slide>

          <template #addons>
            <Pagination @click="handlePaginationClick(item.id)"/>
          </template>        
        </Carousel>
        <button aria-label="go to the next industry" @click="myCarousel.prev()" class="hidden absolute 2xl:left-20 left-6 top-1/2 transform -translate-y-1/2 z-[4] text-accent2 hover:text-accent1 text-2xl w-[44px] h-[44px] cursor-pointer aspect-square md:grid place-content-center border-2 border-accent2 hover:border-accent1 rounded-full"> 🡠 </button>            
        <button aria-label="go to the prev industry" @click="myCarousel.next()" class="hidden absolute 2xl:right-20 right-6 top-1/2 transform -translate-y-1/2 z-[4] text-accent2 hover:text-accent1 text-2xl w-[44px] h-[44px] cursor-pointer aspect-square md:grid place-content-center border-2 border-accent2 hover:border-accent1 rounded-full"> 🡢 </button>
      </div>  
    </section>
</template>


<style scoped>
.carousel__slide{
  display: block !important;
  margin:0 10px !important;
} 
.mask {
  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%);
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 15%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 0) 100%);
  mask-size: cover; 
  mask-position: center;
}

</style>