<script setup>
defineProps({
  sectiontitle: String,
  sectiondescription: String,
  data: Array
})
</script>
<template>
    <section id="employee-benefits" class="w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12">
      <h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ sectiontitle }}</h1>
      <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ sectiondescription }}</p>
      <ul role="list" class="flex flex-col mt-10 flex-wrap gap-10 w-full h-full p-10 bg-gradient-to-r from-accent1/10 to-accent1/20 rounded-[16px] list-style-none">
        <li v-for="(item, key) in data" :key="key" class="flex items-center justify-between flex-grow w-full h-full gap-3 border-b lg:min-h-[108px] pb-3 max-sm:flex-wrap border-accent1"
        :class="{'lg:border-none' : key === 2}">
          <h1 class="sm:w-2/12 w-full font-[400] 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] text-accent1">0{{ item.id }}</h1>
          <div class="w-full lg:w-10/12">
              <!-- <h2 class="2xl:text-2xl lg:text-xl text-lg text-accent1 font-[400] mb-3">{{ item.title }}</h2> -->
              <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.title }}</p>          
          </div>
        </li>
      </ul>
      <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify mt-10">Unlock the full potential of your career journey with AITS, where your talents are nurtured, and your aspirations are embraced.</p>
    </section>
</template>