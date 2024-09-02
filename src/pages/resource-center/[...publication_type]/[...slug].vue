<script setup>
import PostDetails from '../../../components/PostDetails.vue'
import { getResourceBySlug } from '../../../utils/api'
import { useRoute } from 'vue-router'
const route = useRoute()

const post = getResourceBySlug(route.params.slug)
</script>
<template>
    <PostDetails sectiontitle="Resource Details" :item="post"/>
</template>