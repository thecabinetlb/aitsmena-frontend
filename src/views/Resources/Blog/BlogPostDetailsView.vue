<script setup>
import PostDetails from '../../../components/PostDetails.vue'
import { getBlogPostById } from '../../../helpers/api'
import { useRoute } from 'vue-router'

const route = useRoute()

const blogpost = getBlogPostById(route.params.id)
</script>
<template>
    <PostDetails sectiontitle="Blog Post Details" :item="blogpost"/>
</template>