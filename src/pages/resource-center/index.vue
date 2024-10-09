<script setup>
import PostsList from '../../components/PostsList.vue';
import { getAllResources } from '../../utils/laravel_api_functions'
import banner from '/images/banners/resources.webp'
import InnerHero from '../../components/InnerHero.vue';
import { onMounted, ref } from 'vue';

const posts = ref([]);
const uniqueIndustries = ref([]);

const fetchData = async () => {
  posts.value = await getAllResources(); // Fetching posts
  if (posts.value.length > 0) {
    uniqueIndustries.value = [...new Set(posts.value.map(post => post.industry.title))];
  }
  console.log(posts.value);
  console.log(uniqueIndustries.value);
};
onMounted(() => {
  fetchData();
});

</script>
<template>
      <head>
      <title>Resource Center | Industry Insights, Whitepapers, Case Studies & Blogs | AITS</title>
      <meta name="description" content="Explore the AITS Resource Center for the latest industry insights, in-depth whitepapers, real-world case studies, and expert blogs. Stay informed on industrial innovations, digital transformation, and best practices across Energy, Smart Cities, Water Management, Manufacturing, and more."/>
      <meta name="keywords" content="industrial software insights, whitepapers, case studies, industry blogs, industrial innovation, digital transformation resources, industry reports, AITS resource center, technology in energy, smart cities, water management, mining solutions, F&B manufacturing trends"/>
      <meta property="og:title" content="Resource Center | Industry Insights, Whitepapers, Case Studies & Blogs | AITS">
      <meta property="og:description" content="Explore the AITS Resource Center for the latest industry insights, in-depth whitepapers, real-world case studies, and expert blogs. Stay informed on industrial innovations, digital transformation, and best practices across Energy, Smart Cities, Water Management, Manufacturing, and more.">
      <meta name="twitter:title" content="Resource Center | Industry Insights, Whitepapers, Case Studies & Blogs | AITS">
      <meta name="twitter:description" content="Explore the AITS Resource Center for the latest industry insights, in-depth whitepapers, real-world case studies, and expert blogs. Stay informed on industrial innovations, digital transformation, and best practices across Energy, Smart Cities, Water Management, Manufacturing, and more.">
    </head>     
    <InnerHero :pagebanner="banner" pagetitle="Innovation Insights Hub" pagedescription="Explore the latest resources designed to keep you informed and ahead in the fast-paced world of industrial digital transformation."/>
   <div v-if="posts.length > 0">
    <PostsList :uniqueIndustries="uniqueIndustries" :data='posts'/>
   </div>
</template>