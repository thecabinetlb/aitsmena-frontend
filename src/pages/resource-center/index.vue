<script setup>
import PostsList from '../../components/PostsList.vue';
import { getAllResources } from '../../utils/api'

const posts = getAllResources()

</script>
<template>
      <head>
      <title>AITS - Resource Center</title>
      <meta name="description" content="Got a knack for reading? Gain access to free resources including whitepapers, industry insights, educational blogs, and specialized webinars."/>
    </head>
  <PostsList sectiontitle="Resource Center" sectiondescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip." :data='posts'/>
</template>