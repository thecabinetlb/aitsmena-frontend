<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import client1 from '../assets/images/testimonies/client1.svg'
import ic2 from '../assets/images/testimonies/partners/ic2.webp'
import aveva from '../assets/images/testimonies/partners/aveva.webp'
import { ref } from 'vue'
import Contact from './Contact.vue'

const myCarousel = ref(null)

const testimoniesslides = [
    { id: 1, title: 'We are in a good company', ceo:'Samir A.', content: '"AITS proved worthy of our trust with their up-to-date smart solutions. Tripoli’s wastewater problem wouldn’t have been solved without them."', icon: client1 },
    { id: 2, title: 'We are in a good company', ceo:'Malak H.', content: '"Our company witnessed tangible growth in profit after collaborating with AITS. Their services were just perfect and precisely what we needed."', icon: client1 },
];
const partners = [
    { id: 1, title: 'AVEVA Select Gulf', description: 'With more than 10 years of market presence and experience diversified across different industrial fields, AVEVA Select Gulf offers customers a uniquely tailored experience of facilitating industrial operations across all manufacturing plants. Specialized in reducing the time needed for a plant’s monitoring and controlling activities, AVEVA Select Gulf’s solutions provide real-time data acquisition and merge industrial knowledge with innovative technology and AI. AVEVA Select Gulf also provides customers with personal training and follow-up to guarantee the best outcome for sustainable industrial production. From energy to chemicals, mining to water and wastewater management, AVEVA Select Gulf’s solutions offer businesses unique, cost-friendly solutions for better handling industrial operations and leveraging production and profit sustainably and continuously. Visit the website to learn more.', logo: aveva },
    { id: 2, title: 'IC2', description: 'The Integrated Competency Center (IC2) is AITS’s newest subsidiary in the market. As a consulting agency, IC2 offers businesses realistic, tangible solutions in the food and beverage and smart city solutions industries. With a gap in professional experience in the Gulf region in these sectors and a need for innovative solutions and progression, IC2 provides customers with the best applicable approaches and solutions in these two industries. At IC2, the future is one step closer. Visit the website and be part of the change.', logo: ic2 },
];
const isHovered = ref(2);
const showDes = (id) => {
  isHovered.value = id
};
</script>

<style scoped>
.carousel__slide{
  display: block !important;
} 
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease;
  transform: none;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.carousel__pagination-button--active::after {
  background-color: white !important;
}
</style>

<template>
  <section class="relative w-full h-full mt-40 space-y-4">
    
    <!-- Partners -->    
    <section class="w-11/12 mx-auto xl:w-8/12 sm:w-10/12">
      <h1 class="w-full text-accent1 font-[400] 2xl:text-6xl lg:text-5xl sm:text-5xl text-4xl uppercase">Our Sub-Companies</h1>
      <!-- Desktop -->
      <div class="lg:block relative hidden z-[1] min-h-[400px] mt-4">
        <div v-for="item in partners" :key="key" class="absolute inset-0 2xl:w-2/3 lg:w-1/2">
          <Transition>
            <p v-if="isHovered === item.id" class="text-accent2 font-[200] 2xl:text-lg text-justify">{{ item.description }}</p>
          </Transition>
        </div>
        <div class="2xl:ms-auto 2xl:me-0 ms-[50%] 2xl:w-1/3 lg:w-1/2 h-full flex justify-end items-center gap-6">
          <div v-for="item in partners" :key="key" role="button" :aria-label="'click on' + item.title + 'to read the description'">
            <img :src="item.logo" :alt="item.title" width="168" height="168" responsive class="rounded-[16px] border-2 border-bg2/10"
            @mouseenter="showDes(item.id)" :class="{'-mb-10' : item.id === 1, '-mt-10' : item.id === 2, 'border-bg2 transform duration-600' : isHovered === item.id}"/>
          </div>
        </div>
      </div>
      <!-- Mobile -->
      <div class="relative z-[1] flex flex-col items-center space-y-4 lg:hidden">
        <div v-for="item in partners" :key="key" class="flex items-center justify-center w-full min-h-[20vh] gap-2">
        <button :aria-label="'click on' + item.title + 'to read the description'"class="w-1/2">
          <img :src="item.logo" :alt="item.title" width="168" height="168" responsive class="rounded-[16px] border-bg2/10"
          @mouseenter="showDes(item.id)" :class="{'-ms-10' : item.id === 1, 'ms-10' : item.id === 2, 'border-bg2 transform duration-600' : isHovered === item.id}"/>
        </button>             
        </div>
        <div  v-for="item in partners" :key="key" class="relative w-full">
          <p v-if="isHovered === item.id" class="sm:min-h-[200px] min-h-[60vh] text-accent2 font-[200] text-justify" style="text-align-last: center;">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Testimonies -->
   <section class="relative mb-20 z-[1]">
    <carousel
    ref="myCarousel"
    :wrap-around="true"
    :items-to-show="1" 
    :autoplay="6000" 
    :transition="2000"
    class="w-11/12 py-10 mx-auto xl:w-8/12 sm:w-10/12">
        <slide v-for="slide in testimoniesslides" :key="slide.id" class="px-5 space-y-10">
            <h1 class="text-accent1 font-[400] 2xl:text-6xl lg:text-5xl sm:text-5xl text-4xl uppercase">
                {{ slide.title }}
            </h1>
            <p class="text-accent2 font-[200] 2xl:text-lg lg:text-md text-justify" style="text-align-last: center;">{{ slide.content }}</p>
            <figcaption class="flex items-center justify-center gap-2 mt-4">
                <cite class="text-accent2 font-[400]">{{ slide.ceo }}</cite>
                <img :src="slide.icon" :alt="slide.title" width="40" height="40" responsive class="rounded-full"/>
            </figcaption>
        </slide>
        <template #addons>
          <Pagination class="sm:hidden"/>
        </template>
      </carousel>   
    <!-- Navigation arrows -->
    <div class="sm:absolute hidden z-1 transform -translate-y-1/2 xl:top-1/2 -bottom-18 xl:left-[10em] left-1/4">
      <button aria-label="go to the next testimony" @click="myCarousel.next()">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </div>
    <div class="sm:absolute hidden z-1 transform -translate-y-1/2 xl:top-1/2 -bottom-18 xl:right-[10em] right-1/4">
      <button aria-label="go to the previous testimony"@click="myCarousel.prev()">
        <svg width="70" height="70" viewBox="0 0 70 70"  fill="none" xmlns="http://www.w3.org/2000/svg">
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
   </section>  

   <!-- Contact -->
   <Contact/>

   
  <!-- Highlights -->
    <!-- right top -->
    <img src="../assets/images/testimonies/elements/righttop.svg" alt="AITS" width="1098" height="1431" responsive loading="lazy"
    class="absolute top-0 right-0"/>

    <!-- left middle -->
    <img src="../assets/images/testimonies/elements/leftmiddle.svg" alt="AITS" width="895" height="1444" responsive loading="lazy"
    class="absolute left-0 transform -translate-y-1/2 top-1/2"/> 
    <img src="../assets/images/testimonies/elements/leftmiddlebig.svg" alt="AITS" width="860" height="1563" responsive loading="lazy"
    class="absolute left-0 transform -translate-y-1/2 top-1/2"/>

    <!-- left bottom -->
    <img src="../assets/images/testimonies/elements/leftbottom.svg" alt="AITS" width="943" height="1635" responsive loading="lazy"
    class="absolute left-0 top-[100%] transform -translate-y-[100%]"/>

    <!-- right middle -->
    <img src="../assets/images/testimonies/elements/rightmiddle.svg" alt="AITS" width="1251" height="1710"  responsive loading="lazy"
    class="absolute right-0 transform -translate-y-1/2 top-1/2"/>

    <!-- center middle -->
    <img src="../assets/images/testimonies/elements/centermiddle.svg" alt="AITS" width="1253" height="1239" responsive loading="lazy"
    class="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"/>
    <img src="../assets/images/testimonies/elements/centermiddlebig.svg" alt="AITS" width="860" height="1563" responsive loading="lazy"
    class="absolute right-0 transform -translate-y-1/2 top-1/2"/>
</section>  

</template>
