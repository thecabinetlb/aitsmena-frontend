<script setup>
import ic2 from '../assets/images/testimonies/partners/ic2.webp'
import aveva from '../assets/images/testimonies/partners/aveva.webp'
import { ref } from 'vue'
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
</style>

<template>
    <section class="w-11/12 mx-auto xl:w-8/12 sm:w-10/12 px-6">
    <h1 class="w-full text-accent1 font-[400] 2xl:text-6xl lg:text-5xl sm:text-5xl text-4xl uppercase">Our Sub-Companies</h1>
    <!-- Desktop -->
    <div class="lg:block relative hidden z-[1] min-h-[400px] mt-4">
        <div v-for="item in partners" :key="key" class="absolute inset-0 2xl:w-2/3 lg:w-1/2">
        <Transition>
            <p v-if="isHovered === item.id" class="text-accent2 font-[200] 2xl:text-lg text-justify">{{ item.description }}</p>
        </Transition>
        </div>
        <div class="2xl:ms-auto 2xl:me-0 ms-[50%] 2xl:w-1/3 lg:w-1/2 h-full flex justify-end items-center gap-6">
        <button v-for="item in partners" :key="key" :aria-label="'click on' + item.title + 'to read the description'">
            <img :src="item.logo" :alt="item.title" width="168" height="168" center cover responsive class="rounded-[16px]" 
            @mouseenter="showDes(item.id)" :class="{'-mb-10' : item.id === 1, '-mt-10' : item.id === 2, 'border-2 border-bg2 transform duration-600' : isHovered === item.id}"/>
        </button>
        </div>
    </div>
    <!-- Mobile -->
    <div class="relative z-[1] flex flex-col items-center space-y-4 lg:hidden">
        <div class="flex items-center justify-center w-full min-h-[20vh] gap-2">
        <button v-for="item in partners" :key="key" :aria-label="'click on' + item.title + 'to read the description'">
            <img :src="item.logo" :alt="item.title" width="168" height="168" center cover responsive class="rounded-[16px]" 
            @mouseenter="showDes(item.id)" :class="{'-mb-10' : item.id === 1, '-mt-10' : item.id === 2, 'border-2 border-bg2 transform duration-600' : isHovered === item.id}"/>
        </button>            
        </div>
        <div v-for="item in partners" :key="key" class="relative w-full">
        <p v-if="isHovered === item.id" class="sm:min-h-[200px] min-h-[60vh] text-accent2 font-[200] text-justify" style="text-align-last: center;">{{ item.description }}</p>
        </div>
    </div>
    </section>
</template>