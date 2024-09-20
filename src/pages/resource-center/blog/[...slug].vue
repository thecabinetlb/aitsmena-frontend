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
      <title>AITS - Resource Center</title>
      <meta name="description" content="Got a knack for reading? Gain access to free resources including whitepapers, industry insights, educational blogs, and specialized webinars."/>
    </head>
  <section>
    <PostDetails v-if="post" :item="post"/>
    <RelatedPosts v-if="posts.length > 0 && post" :data="posts" :currentId="post.id" :industry="post.industry"/>    
  </section>
</template>