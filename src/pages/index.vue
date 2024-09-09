<script setup>
import Hero from '../components/Hero.vue'
import Contact from '../components/Contact.vue'
import OneImageTextFlex from '../components/OneImageTextFlex.vue'
import { useSeoMeta } from '@unhead/vue'

const title = 'AITS - Industrial Software Solutions And Digital Services Tailored To Your Business';
const description = 'AITS transforms businesses like yours through innovative tech solutions tailored to your unique needs. Book your free consultation call to get started!';
const ogImage = 'https://aitsmena-test.netlify.app/aits-open-graph_v1.jpg';
const ogUrl = 'https://aitsmena-test.netlify.app'; // Replace with your website URL 

useSeoMeta({ 
  title,
  description,
  ogTitle: title, // Consider using the same title for consistency
  ogDescription: description,
  ogImage,
  ogUrl,
  ogType: 'website', // Recommended for most website content
  twitterTitle: title, // Consider using the same title for consistency
  twitterDescription: description,
  twitterImage: ogImage, // Assuming the same image is suitable for Twitter
  twitterCard: 'summary',
})
// useHead({
//   title,
//   meta: [
//     {
//       name: 'description',
//       content: description,
//     },
//     {
//       property: 'og:title',
//       content: title,
//     },
//     {
//       property: 'og:image',
//       content: ogImage,
//     },
//     {
//       property: 'og:description',
//       content: description,
//     },
//     {
//       property: 'og:url',
//       content: ogUrl,
//     },
//   ],
// });


const missionandvission =
  {
    title: "Leading the Region’s Industrial Digital Revolution",
    description: "AITS aims to be the leading industrial software innovator in the Gulf region. We deliver comprehensive software solutions that enhance operational efficiency, support sustainability, and provide a competitive advantage in an evolving market.",
    image: "/images/hero/missionandvision/vision_v1.webp",
}
const valuesandcommitments =
{
  title: "Innovation with Integrity and Passion",
  description: "By placing a strong emphasis on human-centered design, customer experience, and transparency, we strive to deliver solutions that meet industry specific needs while building trust and driving progress. Our dedication to innovation and integrity ensures that we approach every challenge with determination and passion, setting new standards for excellence in the industrial sector.",
  image: "/images/hero/values/values_v1.webp",
}  
  
</script>
<template>
  <Hero/>
  <OneImageTextFlex sectiontitle="Our Mission" :item="missionandvission" 
  v-motion
  :initial="{
    opacity: 0,
    y: 100,
  }"
  :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: '100',
      delay: 100,
    },
  }"/>
  <OneImageTextFlex  sectiontitle="Innovating for a Sustainable Future" :item="valuesandcommitments" reverse hyphen
  v-motion
  :initial="{
    opacity: 0,
    y: 100,
  }"
  :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: '100',
      delay: 100,
    },
  }"/>
  <!-- <IndustriesList/> -->
  <Contact/>
</template>
