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
const formatPublicationType = (publicationType) => {
  if (publicationType === 'BlogPost') {
    return 'blog';
  }
  return publicationType.toLowerCase().replace(/\s+/g, '-');
};

</script>

<template>
    <section class="w-11/12 pt-20 mx-auto 2xl:w-8/12 lg:w-10/12">
      <h1 class="font-[500] text-accent1 md:text-4xl text-[30px] uppercase mb-6">Related Insights</h1>
        <ul role="list" v-if="filteredData.length > 0" class="grid grid-cols-1 gap-3 mt-10 lg:grid-cols-3 sm:grid-cols-2 list-style-none">
        <li v-for="(item, key) in filteredData" :key="key" class="flex-grow group w-full relative group sm:min-h-[135px] rounded-[16px] border-2 border-bg2">
          <RouterLink 
            v-if="item.slug && item.publication_type"
            :id="'go-to-' + item.title + '-page'" 
            :aria-label="'read more about ' + item.title" 
            :to="{ path: `/resource-center/${formatPublicationType(item.publication_type)}/${item.slug}` }">
            <div class="relative overflow-hidden aspect-video bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]">
              <div class="absolute inset-0 z-[-1] duration-500 transform group-hover:scale-110"
              :style="{ backgroundImage: 'url(' + item.image + ')', backgroundSize:'cover', backgroundPosition: 'center'}"/>
                <div v-if="item.customer_logo" class="p-2 absolute top-3 right-3 w-1/4 h-fit backdrop-blur-[16px] rounded-[8px]">
                  <img :src="item.customer_logo" :alt="item.title" width="100%" height="100%" center cover responsive loading="lazy" class="mx-auto aspect-1.72/1 scale-125"/>
                </div>
            </div>
            <div class="flex flex-col gap-3 p-6">
              <h2 class="p-2 relative w-fit z-[3] bottom-10 -mb-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2">
                  {{ item.publication_type }}
                </h2>
              <h3 class="text-accent2 font-[200] max-sm:text-[14px]">{{ item.published_at }}</h3>
              <h2 class="text-accent1 font-[400] sm:text-xl">{{ item.industry }}</h2>
              <h2 class="text-accent1 font-[200] sm:text-xl">{{ item.title }}</h2>
              <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">{{ item.summary }}</p>
              <span class="border-accent2 text-accent2 w-[34px] h-[34px] cursor-pointer grid place-content-center ms-auto me-0 border-2 transition-all duration-400 hover:text-bg2 hover:border-bg2 text-xl rounded-full">
              🡥
              </span>
            </div>
          </RouterLink> 
        </li>
        </ul>
      <div v-else class="lg:w-full relative group bg-extended-noise bg-cover bg-center bg-opacity-50 rounded-[16px] mt-10 mx-auto">
        <div class="md:px-10 p-6 relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2">
            <h3 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500]">No related insights.</h3>        
        </div>
      </div>
    </section>
</template>