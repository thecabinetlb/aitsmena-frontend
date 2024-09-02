<script setup>
import PostsList from '../../components/PostsList.vue';
import { getAllResources } from '../../utils/api'
import banner from '/images/banners/resources.webp'
import InnerHero from '../../components/InnerHero.vue';
const posts = getAllResources()

</script>
<template>
      <head>
      <title>AITS - Resource Center</title>
      <meta name="description" content="Got a knack for reading? Gain access to free resources including whitepapers, industry insights, educational blogs, and specialized webinars."/>
    </head>
    <InnerHero :pagebanner="banner" pagetitle="Resources" pagedescription="Need some resources to explore the complex world of software solutions and digital services? Welcome to the home of the latest industry news, insights, trends, and much more."/>
    <PostsList :data='posts'/>
</template>