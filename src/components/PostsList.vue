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
    filteredData.value = props.data.filter(item => item.industry === industry);
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
</script>

<template>
  <section class="w-11/12 mx-auto 2xl:w-8/12 lg:w-10/12">
    <!-- Filters -->
    <div class="flex flex-wrap justify-center gap-6 mt-10 lg:justify-end">
      <button @click="filterData('All')"
      class="px-4 py-3 w-fit max-sm:text-[14px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent hover:border-accent1 focus:outline-none focus:ring-0 focus:border-accent1"
      :class="{'border-b-2 border-accent1': isClicked === 'All', 'border-b-2 border-bg2' : isClicked != 'All'}">
      All</button>
      <button 
      v-for="(item, key) in props.uniqueIndustries" :key="key" 
      :id="item + (isClicked === item ? '-active' : '')" 
      :aria-label="'show ' + item"
      class="px-4 py-3 w-fit max-sm:text-[14px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent hover:border-accent1 focus:outline-none focus:ring-0 focus:border-accent1"
      :class="{'border-b-2 border-accent1': isClicked === item, 'border-b-2 border-bg2' : isClicked != item}"
      @click="filterData(item)">
      {{item}}</button>
    </div>        
    <ul role="list" class="grid grid-cols-3 gap-6 mt-10 lg:gap-3 list-style-none">
      <li v-for="(item, key) in paginatedData" :key="key" class="flex-grow lg:col-span-1 ms:col-span-2 col-span-3 w-full relative group sm:min-h-[135px] rounded-[16px] border-2 border-bg2">
        <div class="relative aspect-video bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]"
        :style="{ backgroundImage: 'url(' + item.image + ')', backgroundSize:'cover', backgroundPosition: 'center'}">
          <div v-if="item.customer_logo" class="p-2 absolute top-3 right-3 w-1/4 h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]">
            <img :src="item.customer_logo" :alt="item.title" width="100%" height="100%" center cover responsive loading="lazy" class="mx-auto aspect-1.72/1 scale-125"/>    
          </div>
          <h2 class="p-2 absolute w-fit left-3 -bottom-5 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2">{{ item.publication_type }}</h2>
        </div>
        <div class="flex flex-col gap-3 p-6 lg:gap-6">
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
