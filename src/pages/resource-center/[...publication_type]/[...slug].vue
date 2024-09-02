<script setup>
import PostDetails from '../../../components/PostDetails.vue'
import { getResourceBySlug } from '../../../utils/api'
import { useRoute } from 'vue-router'
const route = useRoute()

const post = getResourceBySlug(route.params.slug)
</script>
<template>
      <head>
      <title>{{ post.title }}</title>
      <meta name="description" :content="post.summary"/>
    </head>
    <PostDetails sectiontitle="Resource Details" :item="post"/>
</template>