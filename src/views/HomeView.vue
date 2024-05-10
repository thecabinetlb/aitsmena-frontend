<script setup>
import Hero from '../components/Hero.vue'
import Contact from '../components/Contact.vue'
import OneImageTextFlex from '@/components/OneImageTextFlex.vue';
const missionandvission =
  {
    title: "Our Aspirations",
    description: "At AITS, our goal is to be the leading industrial software innovator in the Gulf region. We achieve this by delivering cutting-edge software solutions and exceptional customer experiences. Through our dedication to innovation and excellence, we empower individualsand organizations to reach new heights of efficiency and success.",
    image: "/images/hero/missionandvision/vision.webp",
  }
  const valuesandcommitments =
  {
    title: "Our Promise",
    description: "At AITS, we are guided by a set of core values that shape our culture and define who we are. We believe in integrity, collaboration, and continuous improvement. Our commitment is to cultivate positive transformation in the industrial landscape, creating an environment where our dedicated team can thrive, enabling us to better serve our clients and contribute to a brighter, more sustainable future",
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
