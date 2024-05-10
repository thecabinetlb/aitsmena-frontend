<script setup>
import { ref } from 'vue';
import improvement from '/images/insidepages/about/csr/improvement.webp'
import gender from '/images/insidepages/about/csr/gender.webp'
import employee from '/images/insidepages/about/csr/employee.webp'

defineProps({
    sectionid: String,
    sectiontitle: String,
    sectiondescription: String,
})
const data = [
  {
    id: 1,
    image:gender,
    title: 'Gender Equality',
    description: 'At AITS, we believe in adopting an inclusive workplace culture where everyone, regardless of gender, has equal opportunities for growth and success. We are dedicated to promoting gender equality within our organization and the communities we serve through:',
    initiatives: [
      'Diverse Workforce',
      'Equal Opportunities',
      'Supportive Policies'
    ]
  },
  {
    id: 2,
    image:employee,
    title: 'Employee First',
    description: 'Our employees are our greatest asset, and their well-being is our top priority. We are committed to creating a supportive and inclusive work environment where employees feel valued, empowered, and motivated to excel. Our employee-first approach includes:',
    initiatives: [
      'Health and Safety',
      'Professional Development',
      'Employee Engagement'
    ]
  },
  {
    id: 3,
    image:improvement,
    title: 'Continuous Improvement',
    description: 'We are committed to continuous improvement in all aspects of our business operations, striving for excellence in performance, efficiency, and sustainability. Our continuous improvement initiatives include:',
    initiatives: [
      'Quality Management',
      'Innovation',
      'Sustainability'
    ]
  }
];
const filterdata = ref(data[0])
const filterData = (key) => {
   if (filterdata.value === data[0]) {
    filterdata.value === data[key];
   } else {
    filterdata.value = data[key];
   }
}
</script>
<template>
    <section :id="sectionid" class="w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12">
      <h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ sectiontitle }}</h1>
      <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ sectiondescription }}</p>
      <div class="flex flex-wrap justify-end gap-2 mt-10">
        <button @click="filterData(0)" 
        class="px-4 py-3 w-fit h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border border-accent2 focus:outline-none focus:ring-0 focus:border-bg2 peer"
        :class="{'border-bg2' : filterdata === data[0]}">
            Gender Equality</button>   
        <button @click="filterData(1)" 
        class="px-4 py-3 w-fit h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border border-accent2 focus:outline-none focus:ring-0 focus:border-bg2 peer">
            Employee First</button>      
          <button @click="filterData(2)" 
          class="px-4 py-3 w-fit h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border border-accent2 focus:outline-none focus:ring-0 focus:border-bg2 peer">
            Continuous Improvement</button>                 
        </div>
      <div class="flex flex-wrap items-center justify-center w-full gap-6 mt-10 lg:gap-3 lg:justify-between max-lg:flex-col-reverse" >
        <img :src="filterdata.image" :alt="filterdata.title" width="391" height="290" center cover responsive loading="lazy"/>    
        <div class="w-full lg:w-6/12">
          <h2 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ filterdata.title }}</h2>
          <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">{{ filterdata.description }}</p>
          <ul v-for="(listitem, key) in filterdata.initiatives" :key="key" class="list-style-none">
            <li class="text-accent2 font-[200] max-sm:text-[14px] text-justify">&#x2022; {{ listitem }}</li>
          </ul>
          <!-- <RouterLink v-if="item.to" :id="'go-to-' + item.title + '-page'" :aria-label="'go to ' + item.title" :to="item.to" class="cursor-pointer px-4 py-3 w-fit block max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125">Browse</RouterLink> -->
        </div>
      </div>
    </section>
</template>