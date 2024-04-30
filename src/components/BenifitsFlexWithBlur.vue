<script setup>
defineProps({
    sectiontitle: String,
    sectiondescription: String,
    data: Array
})
</script>
<template>
    <section class="w-11/12 mx-auto mt-40 2xl:w-8/12 lg:w-10/12">
      <div class="flex flex-col items-center justify-center w-full gap-6 mt-10 2xl:gap-[4px] lg:gap-3 lg:justify-between">
        <div>
            <h1 class="font-[400] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ sectiontitle }}</h1>
            <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">{{ sectiondescription }}</p>
        </div>
        <ul role="list" class="flex flex-wrap items-center justify-between md:gap-3 gap-6 w-full p-6 bg-gradient-to-r from-accent1/10 to-accent1/20 rounded-[16px] list-style-none">
          <li v-for="(item, key) in data" :key="key" class="flex max-sm:items-center justify-between gap-3 sm:w-[48%] w-full flex-grow">
            <h1 class="sm:w-1/3 w-full text-center font-[400] 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] text-accent1">0{{ item.id }}</h1>
            <div class="w-full sm:w-2/3">
                <h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[400] mb-3">{{ item.title }}</h2>
                <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.description }}</p>          
            </div>
          </li>
        </ul>
      </div>
    </section>
</template>