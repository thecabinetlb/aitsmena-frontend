<script setup>
import ic2 from '/images/testimonies/partners/ic2.webp'
import aveva from '/images/testimonies/partners/aveva.webp'
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
    <section class="w-11/12 px-6 mx-auto mt-40 2xl:w-8/12 sm:w-10/12">
    <h1 class="font-[400] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercas lg:mb-10 mb-20">Our Sub-Companies</h1>
    <!-- Desktop -->
    <div class="relative hidden lg:block 2xl:min-h-[200px] xl:h-full lg:h-[400px]">
        <div v-for="item in partners" :key="key" class="absolute inset-0 lg:w-[60%]">
        <Transition>
            <p v-show="isHovered === item.id" class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.description }}</p>
        </Transition>
        </div>
        <div class="2xl:ms-auto 2xl:me-0 ms-[60%] 2xl:w-1/3 h-full flex 2xl:flex-row flex-col justify-center items-center gap-6">
            <button v-for="item in partners" :key="key" :aria-label="'click on' + item.title + 'to read the description'">
                <img :src="item.logo" :alt="item.title" width="168" height="168" center cover responsive class="rounded-[16px]" 
                @mouseenter="showDes(item.id)" :class="{'2xl:-mb-10 2xl:me-0 lg:me-20' : item.id === 1, '2xl:-mt-10 2xl:ms-0 lg:ms-20' : item.id === 2, 'border-2 border-bg2 transform duration-600' : isHovered === item.id}"/>
            </button>
        </div>
    </div>
    <!-- Mobile -->
    <div class="relative lg:hidden">
        <div class="flex items-center justify-center w-full gap-6 pb-6">
            <button v-for="item in partners" :key="key" :aria-label="'click on' + item.title + 'to read the description'">
                <img :src="item.logo" :alt="item.title" width="168" height="168" center cover responsive class="rounded-[16px]" 
                @mouseenter="showDes(item.id)" :class="{'-mb-10' : item.id === 1, '-mt-10' : item.id === 2, 'border-2 border-bg2 transform duration-600' : isHovered === item.id}"/>
            </button>            
        </div>
        <div v-for="item in partners" :key="key" class="mt-10">
            <p v-show="isHovered === item.id" class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.description }}</p>
        </div>
    </div>
    </section>
</template>
<!--  sm:min-h-[200px] min-h-[60vh] -->