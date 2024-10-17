<script setup>
import RelatedPosts from '../../../components/RelatedPosts.vue';
import PostDetails from '../../../components/PostDetails.vue';
import { getAllResources, getBlogBySlug } from '../../../utils/laravel_api_functions';
import { useRoute } from 'vue-router';
import { watch, ref, onMounted } from 'vue';

const route = useRoute();
const posts = ref([]);
const post = ref([]);

const fetchData = async (slug) => {
  posts.value = await getAllResources();
  post.value = await getBlogBySlug(slug);
  console.log(posts.value);
  console.log(post.value);
};
onMounted(() => {
  fetchData(route.params.slug);
});

// Watch for route changes and fetch new post
watch(() => route.params.slug, (newSlug) => {
  if (newSlug) {
    fetchData(newSlug);
   console.log("newSlug",newSlug)
  }
});
</script>

<template>
  <head v-if="post">
      <title>{{post.title}}</title>
      <meta name="description" :content="post.summary"/>
      <meta name="keywords" content="industrial software insights, whitepapers, case studies, industry blogs, industrial innovation, digital transformation resources, industry reports, AITS resource center, technology in energy, smart cities, water management, mining solutions, F&B manufacturing trends"/>
      <meta property="og:title" :content="post.title">
      <meta property="og:description" :content="post.summary">
      <meta name="twitter:title" :content="post.title">
      <meta name="twitter:description" :content="post.summary">
    </head>   
    <head v-else>
      <title>Resource Center | Industry Insights, Whitepapers, Case Studies & Blogs | AITS</title>
      <meta name="description" content="Explore the AITS Resource Center for the latest industry insights, in-depth whitepapers, real-world case studies, and expert blogs. Stay informed on industrial innovations, digital transformation, and best practices across Energy, Smart Cities, Water Management, Manufacturing, and more."/>
      <meta name="keywords" content="industrial software insights, whitepapers, case studies, industry blogs, industrial innovation, digital transformation resources, industry reports, AITS resource center, technology in energy, smart cities, water management, mining solutions, F&B manufacturing trends"/>
      <meta property="og:title" content="Resource Center | Industry Insights, Whitepapers, Case Studies & Blogs | AITS">
      <meta property="og:description" content="Explore the AITS Resource Center for the latest industry insights, in-depth whitepapers, real-world case studies, and expert blogs. Stay informed on industrial innovations, digital transformation, and best practices across Energy, Smart Cities, Water Management, Manufacturing, and more.">
      <meta name="twitter:title" content="Resource Center | Industry Insights, Whitepapers, Case Studies & Blogs | AITS">
      <meta name="twitter:description" content="Explore the AITS Resource Center for the latest industry insights, in-depth whitepapers, real-world case studies, and expert blogs. Stay informed on industrial innovations, digital transformation, and best practices across Energy, Smart Cities, Water Management, Manufacturing, and more.">
    </head>
  <section>
    <PostDetails v-if="post" :item="post"/>
    <RelatedPosts v-if="posts.length > 0 && post" :data="posts" :currentId="post.id" :industry="post.industry"/>    
  </section>
</template>