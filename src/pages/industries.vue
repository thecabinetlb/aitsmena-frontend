<script setup>
import banner from '/images/banners/industries.webp'
import InnerHero from '../components/InnerHero.vue';
import IndustriesInsideCarousel from '../components/IndustriesInsideCarousel.vue'
import InsideBody from '../components/InsideBody.vue'
import { getIndustries } from '../utils/laravel_api_functions'
import { onMounted, ref } from 'vue';

const industries = ref([]);

const fetchData = async () => {
  industries.value = await getIndustries();
  console.log(industries.value);
};
onMounted(() => {
  fetchData();
});


</script>
<template>
    <head>
      <title>Industries We Serve | AITS - Driving Digital Transformation in Energy, Water, Smart Cities, F&B, and More.</title>
      <meta name="description" content="AITS delivers tailored solutions across key industries Energy, Water, Smart Cities, Metals & Mining, F&B, and Manufacturing. Our innovations boost efficiency, sustainability, and compliance while driving digital transformation to meet today's global challenges."/>
      <meta name="keywords" content="AITS, industries, digital transformation, energy sector, renewable energy, water management, wastewater, smart cities, food and beverage, manufacturing, mining, minerals, industrial software, sustainability, real-time insights, automation, operational efficiency, sustainability goals (SDGs), regulatory compliance"/>
      <meta property="og:title" content="Industries We Serve | AITS - Driving Digital Transformation in Energy, Water, Smart Cities, F&B, and More.">
      <meta property="og:description" content="AITS delivers tailored solutions across key industries Energy, Water, Smart Cities, Metals & Mining, F&B, and Manufacturing. Our innovations boost efficiency, sustainability, and compliance while driving digital transformation to meet today's global challenges.">
      <meta name="twitter:title" content="Industries We Serve | AITS - Driving Digital Transformation in Energy, Water, Smart Cities, F&B, and More.">
      <meta name="twitter:description" content="AITS delivers tailored solutions across key industries Energy, Water, Smart Cities, Metals & Mining, F&B, and Manufacturing. Our innovations boost efficiency, sustainability, and compliance while driving digital transformation to meet today's global challenges.">
    </head>        
    <InnerHero :pagebanner="banner" pagetitle="Innovative Solutions for Every Industry"
        pagedescription="Whether you’re in an emerging sector or a traditional industry, AITS can help you enhance operational efficiency and future-proof your business with the most innovative industrial software solutions."/>
        <section class="relative">
            <IndustriesInsideCarousel v-if="industries.length > 0" sectiontitle="Industries We Serve" :data="industries"/>
            <!-- <Testimonials />
            <PostsGrid sectionid="success-stories" sectiontitle="Success Stories" sectiondescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip." :data='successStories'/> -->
            <InsideBody/>
        </section>
</template>