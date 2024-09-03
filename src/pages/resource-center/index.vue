<script setup>
import PostsList from '../../components/PostsList.vue';
import { getAllResources } from '../../utils/api'
import banner from '/images/banners/resources.webp'
import InnerHero from '../../components/InnerHero.vue';
const posts = getAllResources();

// Extract the industries from the posts and then create a Set to get unique categories
let uniqueIndustries = [...new Set(posts.map(post => post.industry))];

console.log(uniqueIndustries);
</script>
<template>
      <head>
      <title>AITS - Resource Center</title>
      <meta name="description" content="Got a knack for reading? Gain access to free resources including whitepapers, industry insights, educational blogs, and specialized webinars."/>
    </head>
    <InnerHero :pagebanner="banner" isRC pagetitle="Innovation Insights Hub" pagedescription="Explore the latest resources designed to keep you informed and ahead in the fast-paced world of industrial digital transformation."/>
    <PostsList :uniqueIndustries="uniqueIndustries" :data='posts'/>
</template>