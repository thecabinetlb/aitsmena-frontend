<script setup>
import PostDetails from '../../../components/PostDetails.vue'
import { getBlogPostBySlug } from '../../../utils/api'
import { useRoute } from 'vue-router'
const route = useRoute()

const blogpost = getBlogPostBySlug(route.params.slug)
</script>
<template>
    <PostDetails sectiontitle="Resource Details" :item="blogpost"/>
</template>