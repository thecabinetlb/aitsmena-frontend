<script setup>
import Contact from '../../../components/Contact.vue';
import PostDetails from '../../../components/PostDetails.vue';
import { getResourceBySlug } from '../../../utils/api'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route);

const post = getResourceBySlug(route.params.slug)
</script>
<template>
      <head>
      <title> Resource Center - {{ post.title }}</title>
      <meta name="description" :content="post.summary"/>
    </head>
    <PostDetails sectiontitle="Resource Details" :item="post"/>
    <Contact/>
</template>