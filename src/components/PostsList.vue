<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router'

const props = defineProps({
  data: Array, 
  uniqueIndustries: Array,
})

const isClicked = ref(null);
const filteredData = ref(props.data);
const currentPage = ref(1);
const itemsPerPage = 6;

// Function to filter data based on the selected industry
const filterData = (industry) => {
  isClicked.value = industry;
  if (industry === 'All') {
    filteredData.value = props.data;
  } else {
    filteredData.value = props.data.filter(item => item.industry.title === industry);
  }
  currentPage.value = 1;
};

// Initial filter
filterData('All');

// Compute the paginated data
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return filteredData.value.slice(start, end);
});

// Watch for page changes
const onPageChange = (page) => {
  currentPage.value = page;
};

const formattedDate = (dateString) => {
    const dateObject = new Date(dateString);
    
    // Check if the date object is valid
    if (isNaN(dateObject)) {
        return 'Invalid Date'; // Return a default message for invalid dates
    }

    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(dateObject);
};

</script>

<template>
  <section class="w-11/12 mx-auto 2xl:w-8/12 lg:w-10/12">
    <!-- Filters -->
    <div class="flex flex-wrap justify-end gap-3 mt-10 sm:gap-6">
      <button @click="filterData('All')"
      class="px-2 sm:px-4 py-3 w-fit max-sm:text-[14px] backdrop-blur-[16px] transition-all duration-400 rounded-[16px] text-accent1 bg-transparent hover:border-accent1 outline-none"
      :class="{'border-b-2 border-accent1': isClicked === 'All', 'border-b-2 border-bg2' : isClicked != 'All'}">
      All</button>
      <button 
      v-for="(item, key) in props.uniqueIndustries" :key="key" 
      :id="item + (isClicked === item ? '-active' : '')" 
      :aria-label="'show ' + item"
      class="px-2 sm:px-4 py-3 w-fit max-sm:text-[14px] backdrop-blur-[16px] transition-all duration-400 rounded-[16px] text-accent1 bg-transparent hover:border-accent1 outline-none"
      :class="{'border-b-2 border-accent1': isClicked === item, 'border-b-2 border-bg2' : isClicked != item}"
      @click="filterData(item)">
      {{item}}</button>
    </div>        
    <ul role="list" class="grid grid-cols-1 gap-3 mt-10 xl:grid-cols-3 md:grid-cols-2 list-style-none">
      <li v-for="(item, key) in paginatedData" :key="key" class="flex-grow group w-full relative group rounded-[16px] border-2 border-bg2">
        <RouterLink 
          v-if="item.slug && item.publicationtype"
          :id="'go-to-' + item.title + '-page'" 
          :aria-label="'read more about ' + item.title" 
          :to="{ path: `/resource-center/${item.publicationtype.slug}/${item.slug}` }">
          <div class="relative overflow-hidden aspect-video bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]">
            <div class="absolute inset-0 z-[-1] duration-500 transform group-hover:scale-110"
            :style="{ backgroundImage: 'url(' + item.cover + ')', backgroundSize:'cover', backgroundPosition: 'center'}"/>
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
            <span class="border-accent2 w-[34px] h-[34px] cursor-pointer grid place-content-center ms-auto me-0 border-2 hover:border-bg2 text-xl rounded-full">
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
    <!-- Pagination -->
    <div class="mx-auto mt-10 text-end">
      <vue-awesome-paginate
        v-model="currentPage"
        :total-items="filteredData.length"
        :items-per-page="itemsPerPage"
        :max-pages-shown="5"
        @page-change="onPageChange"
      />            
    </div>
  </section>
</template>

<style>
  /* Style the pagination container */
  .pagination-container {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    flex-wrap: wrap;
  }

  /* Style the individual page buttons */
  .paginate-buttons {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    background-color: #32527B;
    border: 1px solid #32527B;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .paginate-buttons:hover, .active-page,  .active-page:hover{
     filter: brightness(125%);
  }
</style>
