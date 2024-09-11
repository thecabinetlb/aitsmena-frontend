<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    data: Array
})
const isHovered = ref(1);
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
<section class="w-11/12 px-6 pt-20 mx-auto 2xl:w-8/12 sm:w-10/12 sm:pt-40">
    <!-- Desktop -->
    <div class="relative hidden h-[200px] lg:flex gap-2">
        <div class="lg:w-6/12">
            <h1 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">Home of<br class="max-sm:hidden"> Two Divisions</h1>
            <div v-for="item in data" :key="key">
                <p v-show="isHovered === item.id" class="text-accent2 font-[200] max-sm:text-[14px]">{{ item.description }}</p>
            </div>
        </div>     
        <div class="absolute inset-0 flex justify-end w-6/12 h-full gap-6 ms-auto me-0">
            <RouterLink v-for="item in data" :key="key" :aria-label="'click on' + item.title + 'to read the description'" :to="item?.to" 
            class="w-[160px] h-[160px] grid place-content-center rounded-[16px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px]"
            @mouseenter="showDes(item.id)" :class="{ 'border-2 border-accent1 transform duration-600 shadow-md shadow-accent1' : isHovered === item.id}">
            <component :is="item.logo" />
            </RouterLink>
        </div>
    </div>
    <!-- Mobile -->
    <div class="relative lg:hidden">
        <div class="flex items-center justify-center w-full gap-6 pb-6">
        <div v-for="item in partners" :key="key" class="mt-10">
            <p v-show="isHovered === item.id" class="text-accent2 font-[200] max-sm:text-[14px]">{{ item.description }}</p>
        </div>            
        <RouterLink v-for="item in data" :key="key" :aria-label="'click on' + item.title + 'to read the description'" :to="item?.to" 
            class="w-[160px] h-[160px] grid place-content-center rounded-[16px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px]"
                @mouseenter="showDes(item.id)" :class="{'border-2 border-accent1 transform duration-600 shadow-md shadow-accent1' : isHovered === item.id}">
                <component :is="item.logo" />
            </RouterLink>            
        </div>
    </div>
    </section>
</template>
