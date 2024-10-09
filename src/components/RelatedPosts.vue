<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue';

const props = defineProps({
  data: Array,
  industry: String,
  currentId: Number
});

const filteredData = computed(() => {
  return props.data.filter(item => item.industry === props.industry && item.id !== props.currentId);
});

const formattedDate = (dateString) => {
    const dateObject = new Date(dateString);
    // Check if the date object is valid
    if (isNaN(dateObject)) {
        return ''; // Return a default message for invalid dates
    }
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(dateObject);
};

</script>

<template>
    <section class="w-11/12 pt-20 mx-auto 2xl:w-8/12 lg:w-10/12">
      <h1 class="font-[500] text-accent1 md:text-4xl text-[30px] uppercase mb-6">Related Insights</h1>
      <ul v-if="filteredData.length > 0" role="list" class="grid grid-cols-1 gap-3 mt-10 xl:grid-cols-3 md:grid-cols-2 list-style-none">
        <li v-for="(item, key) in filteredData" :key="key" class="flex-grow group w-full relative group rounded-[16px] border-2 border-bg2">
          <RouterLink 
            v-if="item.slug && item.publicationtype"
            :id="'go-to-' + item.title + '-page'" 
            :aria-label="'read more about ' + item.title" 
            :to="{ path: `/resource-center/${item.publicationtype.slug}/${item.slug}` }">
            <div class="relative overflow-hidden aspect-video bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]">
              <div class="absolute inset-0 z-[-1] duration-500 transform group-hover:scale-110"
              :style="{ backgroundImage: 'url(' + item.image + ')', backgroundSize:'cover', backgroundPosition: 'center'}"/>
                <div v-if="item.customer_logo" class="p-2 absolute top-3 right-3 w-1/4 h-fit backdrop-blur-[16px] rounded-[8px]">
                  <img :src="item.customer_logo" :alt="item.title" width="100%" height="100%" center cover responsive loading="lazy" class="mx-auto aspect-1.72/1 scale-125"/>
                </div>
            </div>
            <div class="flex flex-col gap-3 p-6">
            <h2 class="p-2 relative w-fit z-[3] bottom-10 -mb-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2">
                {{ item.publicationtype.title }}
            </h2>
            <div class="flex flex-wrap justify-between gap-3 pb-3 border-b border-bg2">
            <h2 class="text-accent1 font-[400] max-sm:text-[14px]">{{ item.industry.title }}</h2>              
            <h2 class="text-accent2 font-[200] max-sm:text-[14px]">{{ formattedDate(item.published_at) }}</h2>
            </div>
            <h2 class="text-accent1 font-[700] 2xl:text-3xl lg:text-2xl md:text-xl text-[30px] 2xl:min-h-full md:min-h-[98px]">{{ item.title }}</h2>
            <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] xl:min-h-[192px] md:min-h-[169px]">{{ item.summary }}</p>
            <span class="border-accent2 w-[34px] h-[34px] cursor-pointer grid place-content-center mt-auto mb-0 ms-auto me-0 border-2  hover:border-bg2 text-xl rounded-full">
                <svg width="100%" height="100%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" class="transition-all stroke-accent2 duration-400 hover:stroke-bg2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
                </g>
                </svg>
              </span>
          </div>
          </RouterLink> 
        </li>
      </ul>
      <div v-else class="mt-10 p-6 relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2">
        <h3 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500]">No related insights.</h3>        
      </div>
    </section>
</template>