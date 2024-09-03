<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
const props = defineProps({
    data: Array,
    uniqueIndustries: Array
})
const isClicked = ref('All');
const filteredData = ref([]);
const visibleData = ref(props.data);
const itemsToShow = ref(props.limit);

const filterData = (industry) => {
  isClicked.value = industry;
  
  // Update the filtered data based on the industry and apply the initial slice
  if (industry === 'All') {
    filteredData.value = visibleData.value.slice(0, itemsToShow.value);
  } else {
    filteredData.value = visibleData.value.filter(item => item.industry === industry).slice(0, itemsToShow.value);
  }
};

// Initial filtering
filterData('All');
</script>

<template>
    <section class="w-11/12 mx-auto 2xl:w-8/12 lg:w-10/12">
        <!-- <h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ sectiontitle }}</h1>
        <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ sectiondescription }}</p> -->
        <div class="flex flex-wrap justify-center gap-6 mt-10 lg:justify-end">
            <button @click="filterData('All')"
            class="px-4 py-3 w-fit max-sm:text-[14px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent hover:border-accent1 focus:outline-none focus:ring-0 focus:border-accent1"
            :class="{'border-b-2 border-accent1': isClicked === 'All', 'border-b-2 border-bg2' : isClicked != 'All'}">
            All</button>
            <button 
            v-for="(item, key) in props.uniqueIndustries" :key="key" 
            :id="item + (isClicked === item ? '-active' : '')" 
            :aria-label="'show ' + item"
            class="px-4 py-3 w-fit max-sm:text-[14px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border-b-2 hover:border-accent1 border-bg2 focus:outline-none focus:ring-0 focus:border-accent1"
            @click="filterData(item)">
            {{item}}</button>                      
        </div>        
        <ul role="list" class="grid grid-cols-3 gap-6 mt-10 lg:gap-3 list-style-none">
            <li v-for="(item, key) in filteredData" :key="key" class="flex-grow lg:col-span-1 ms:col-span-2 col-span-3 w-full relative group sm:min-h-[135px] rounded-[16px] border-2 border-bg2">
                <!-- image should go here -->
                <div class="relative aspect-video bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px] mb-3"
                :style="{ backgroundImage: 'url(' + item.image + ')', backgroundSize:'cover', backgroundPosition: 'center'}">
                    <!-- image should go here -->
                    <div v-if="item.customer_logo" class="p-2 absolute top-3 right-3 w-1/4 h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]">
                        <img :src="item.customer_logo" :alt="item.title" width="100%" height="100%" center cover responsive loading="lazy" class="mx-auto aspect-1.72/1 scale-125"/>    
                    </div>
                    <h2 class="p-2 absolute w-fit left-3 -bottom-5 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2">{{ item.publication_type }}</h2>
                </div>
                <!-- <div class="w-full h-40 bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]"></div> -->
                <div class="flex flex-col gap-3 p-6">
                    <h3 class="text-accent2 font-[200] max-sm:text-[14px]">{{ item.published_at }}</h3>
                    <h2 class="text-accent1 font-[400] sm:text-lg">{{ item.industry }}</h2>
                    <h2 class="text-accent1 font-[200] sm:text-lg">{{ item.title }}</h2>
                    <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.summary }}</p>
                    <RouterLink 
                    :id="'go-to-' + item.title + '-page'" 
                    :aria-label="'read more about ' + item.title" 
                    :to="`/resource-center/${item.publication_type.toLowerCase().replace(/\s+/g, '-')}/${item.slug}`" 
                    class="hover:text-accent1 text-accent2 w-[34px] h-[34px] cursor-pointer grid place-content-center ms-auto me-0 border-2 border-accent2 hover:border-accent1 text-xl rounded-full"> 
                    🡥 
                    </RouterLink>
                </div>
            </li>
        </ul>
    </section>
</template>

