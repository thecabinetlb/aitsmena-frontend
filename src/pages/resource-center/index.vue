<script setup>
import PostsList from '../../components/PostsList.vue';
import { getAllResources } from '../../utils/api'
import banner from '/images/banners/resources.webp'
import InnerHero from '../../components/InnerHero.vue';
const posts = getAllResources()
// Extract the industries from the posts and then create a Set to get unique categories
let uniqueIndustries = [...new Set(posts.map(post => post.industry))];

console.log(uniqueIndustries);
</script>
<template>
      <head>
      <title>AITS - Resource Center</title>
      <meta name="description" content="Got a knack for reading? Gain access to free resources including whitepapers, industry insights, educational blogs, and specialized webinars."/>
    </head>
    <InnerHero :pagebanner="banner" pagetitle="Resources" pagedescription="Need some resources to explore the complex world of software solutions and digital services? Welcome to the home of the latest industry news, insights, trends, and much more."/>
    <PostsList :uniqueIndustries="uniqueIndustries" :data='posts'/>
</template>