<script setup>
import Hero from '../components/Hero.vue'
import Contact from '../components/Contact.vue'
import OneImageTextFlex from '@/components/OneImageTextFlex.vue';
const missionandvission =
  {
    title: "A Vision In Sight",
    description: "AITS has one main goal - to be the leading industrial software innovator in the Gulf region. How? By delivering cutting-edge software solutions and exceptional customer experiences. It takes a thrill for innovation and excellence to empower organizations in reaching new heights of success.",
    image: "/images/hero/missionandvision/vision.webp",
  }
  const valuesandcommitments =
  {
    title: "You Have Our Word",
    description: "No company can operate without a set of core values that shape its culture and defines who it is. As for us? We believe in integrity, collaboration, and continuous improvement. Our commitment to cultivate positive transformation in the industrial landscape creates an environment where our dedicated team can thrive. This enables us to better serve our clients and contribute to a brighter, more sustainable future.",
    image: "/images/hero/values/values.webp",
  }

</script>

<template>
  <main>
  <Hero/>
  <OneImageTextFlex sectiontitle="Mission and Vision" :item="missionandvission"/>
  <OneImageTextFlex  sectiontitle="Values and Commitments" :item="valuesandcommitments" reverse/>
  <!-- <IndustriesList/> -->
  <Contact/>
  </main>
</template>
