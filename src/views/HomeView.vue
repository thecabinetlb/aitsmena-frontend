<script setup>
import Hero from '../components/Hero.vue'
import Contact from '../components/Contact.vue'
import OneImageTextFlex from '@/components/OneImageTextFlex.vue';
const missionandvission =
  {
    title: "A Vision In Sight",
    description: "AITS strives to be the leading industrial software innovator in the Gulf region. How? By delivering cutting-edge software solutions and exceptional customer experiences. It takes a thrill for innovation and excellence to empower organizations in reaching new heights of success.",
    image: "/images/hero/missionandvision/vision.webp",
}
const valuesandcommitments =
{
  title: "You Have Our Word",
  description: "No company can operate without a set of core values that shape its culture and defines who it is. As for us? We believe in integrity, collaboration, and continuous improvement. Our commitment to enhance positive transformation in the industrial landscape creates an environment where our dedicated team can thrive. This enables us to better serve our clients and contribute to a brighter, more sustainable future.",
  image: "/images/hero/values/values.webp",
}

</script>
<template>
  <head>
    <title>AITS - Industrial Software Solutions Tailored To Your Business</title>
    <meta name="description" content="AITS transforms businesses like yours through innovative tech solutions tailored to your unique needs. Book your free consultation call to get started!"/>
    <meta property="og:title" content="AITS - Industrial Software Solutions Tailored To Your Business" />
    <meta name="org:description" content="AITS transforms businesses like yours through innovative tech solutions tailored to your unique needs. Book your free consultation call to get started!"/>
    <meta property="og:image" content="/AITSLogoWithSlogan.webp" />  
  </head>
  <Hero/>
  <OneImageTextFlex sectiontitle="Mission and Vision" :item="missionandvission"/>
  <OneImageTextFlex  sectiontitle="Values and Commitments" :item="valuesandcommitments" reverse/>
  <!-- <IndustriesList/> -->
  <Contact/>
</template>
