<script setup>
import PostsList from '../../components/PostsList.vue';
import { getBlogPosts } from '../../utils/api'

const blogposts = getBlogPosts()

</script>
<template>
      <head>
      <title>AITS - Resource Center</title>
      <meta name="description" content="Got a knack for reading? Gain access to free resources including whitepapers, industry insights, educational blogs, and specialized webinars."/>
    </head>
  <PostsList sectiontitle="Resource Center" category="blog" sectiondescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip." :data='blogposts'/>
</template>