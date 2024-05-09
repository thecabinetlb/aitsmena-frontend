<script setup>
import Hero from '../components/Hero.vue'
import IndustriesList from '../components/IndustriesList.vue'
import Contact from '../components/Contact.vue'
import ImageTextFlex from '@/components/ImageTextFlex.vue';
const missionandvalues = [
  {
    title: "At AITS, our goal is to be the leading industrial software innovator in the Gulf region.",
    description: "We achieve this by delivering cutting-edge software solutions and exceptional customer experiences. Through our dedication to innovation and excellence, we empower individualsand organizations to reach new heights of efficiency and success.",
    image: "/images/hero/missionandvision/vision.webp",
  },
  {
    title: "At AITS, we are guided by a set of core values that shape our culture and define who we are.",
    description: "We believe in integrity, collaboration, and continuous improvement. Our commitment is to cultivate positive transformation in the industrial landscape, creating an environment where our dedicated team can thrive, enabling us to better serve our clients and contribute to a brighter, more sustainable future",
    image: "/images/hero/values/values.webp",
  }
];
</script>

<template>
  <main>
  <Hero/>
  <ImageTextFlex sectiontitle="Mission and Values" :data="missionandvalues"/>
  <!-- <IndustriesList/> -->
  <Contact/>
  </main>
</template>
