<script setup>
import RelatedPosts from '../../../components/RelatedPosts.vue';
import PostDetails from '../../../components/PostDetails.vue';
import { getBlogPosts, getBlogPostBySlug } from '../../../utils/api';
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';

const route = useRoute();
const posts = getBlogPosts();
const post = ref(null);
console.log("post",post.value)

const fetchPost = (slug) => {
  try {
    post.value = getBlogPostBySlug(slug)
  } catch (error) {
    console.error('Failed to fetch post:', error);
  }
};

fetchPost(route.params.slug);

// Watch for route changes and fetch new post
watch(() => route.params.slug, (newSlug) => {
  if (newSlug) {
   fetchPost(newSlug);
   console.log("newSlug",newSlug)
  }
});
</script>

<template>
  <head v-if="post">
      <title>{{post.title}}</title>
      <meta name="description" :content="post.summary"/>
  </head>
  <head v-else>
      <title>Resource Center | Industry Insights, Whitepapers, Case Studies & Blogs | AITS</title>
      <meta name="description" content="Explore the AITS Resource Center for the latest industry insights, in-depth whitepapers, real-world case studies, and expert blogs. Stay informed on industrial innovations, digital transformation, and best practices across Energy, Smart Cities, Water Management, Manufacturing, and more."/>
    </head>
  <section>
    <PostDetails v-if="post" :item="post"/>
    <RelatedPosts v-if="posts.length > 0 && post" :data="posts" :currentId="post.id" :industry="post.industry"/>    
  </section>
</template>