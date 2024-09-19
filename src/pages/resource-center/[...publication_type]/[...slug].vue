<script setup>
import RelatedPosts from '../../../components/RelatedPosts.vue';
import PostDetails from '../../../components/PostDetails.vue';
import { getAllResources, getResourceBySlug } from '../../../utils/api';
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';

const route = useRoute();
const posts = getAllResources();
const post = ref({});

const fetchPost = async (slug) => {
  post.value = await getResourceBySlug(slug);
};

// Fetch the initial post
fetchPost(route.params.slug);

// Watch for route changes and fetch new post
watch(() => route.params.slug, (newSlug) => {
  fetchPost(newSlug);
});
</script>

<template>
    <head>
      <title> Resource Center - {{ post?.title }}</title>
      <meta name="description" :content="post?.summary"/>
    </head>
    <PostDetails :item="post"/>
    <RelatedPosts :data="posts" :currentId="post.id" :industry="post.industry"/>
</template>