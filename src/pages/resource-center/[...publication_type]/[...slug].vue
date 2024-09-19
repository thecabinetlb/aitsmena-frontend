<script setup>
import PostDetails from '../../../components/PostDetails.vue';
import { getBlogPosts, getResourceBySlug } from '../../../utils/api'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route);
const posts = getBlogPosts()
const post = getResourceBySlug(route.params.slug)
</script>
<template>
      <head>
      <title> Resource Center - {{ post.title }}</title>
      <meta name="description" :content="post.summary"/>
    </head>
    <PostDetails sectiontitle="Resource Details" :item="post" :data="posts"/>
</template>