
<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { Carousel, Slide, Pagination } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
defineProps({
    data: Array
})
// Calculate the number of items to show based on screen width
const getItemsToShow = () => {
  if (typeof window !== 'undefined') {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1280) {
    return 4; // Desktop
  } else if (screenWidth >= 1024) {
    return 3; // smaller  Desktop
  } else if (screenWidth >= 768) {
    return 2.25; // Tablet
  } else if (screenWidth >= 640) {
    return 2.50; // big mobile
  } else if (screenWidth < 640) {
    return 1; // Mobile
  }
  }};

onMounted(() => {
    window.addEventListener('resize', () => {
      getItemsToShow()
    });
});

</script>
<template>
    <section class="w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12">
        <Carousel
        :items-to-show="getItemsToShow()"
        :wrap-around="true"
        class="w-full h-full maskleft maskright">
          <Slide v-for="(item, key) in data" :key="key" class="relative p-6 cursor-pointer flex flex-col gap-3 justify-center items-center text-center aspect-square rounded-[16px] border-2 bg-noise bg-opacity-50 bg-cover bg-center my-10">
            <RouterLink :id="'go-to-' + item.title + '-page'" :aria-label="'go to ' + item.title" to="/industries" class="absolute inset-0 w-full h-full rounded-[16px] bg-gradient-to-br transition-all duration-300 z-[-1] from-accent1/10 to-accent1/30 bg-opacity-50 hover:from-bg2/50 hover:to-bg2 hover:bg-opacity-75">
                <img :src="item.icon" :alt="item.title" width="94" height="94" center cover responsive loading="lazy" class="max-sm:w-[54px] aspect-square mx-auto"/>
                <h2 class="max-sm:text-[14px] text-accent1 font-[400] h-[48px]">{{ item.title }}</h2>
                <img src="/arrowleft.svg" alt="AITS" width="34" height="41" class="mx-auto" cover center responsive loading="lazy" />    
            </RouterLink>
          </Slide>
          <template #addons>
            <Pagination/>              
          </template>
      </Carousel>
    </section>
</template>

<style scoped>
.carousel__slide{
  display: block !important;
  text-align: left !important;
  margin: 10px !important;  
}
.maskleft {
  -webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
  mask-size: cover; 
  mask-position: center;
}
.maskright {
  -webkit-mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
  mask-image: linear-gradient(to right, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0));
  mask-size: cover; 
  mask-position: center;
}

@media (max-width: 640px) {
  .carousel__slide {
    width: 97% !important;
    margin: 5px !important;  
  }
}
</style>