<script setup>
import Hero from '../components/Hero.vue'
import IndustriesList from '../components/IndustriesList.vue'
import Contact from '../components/Contact.vue'
import ImageTextFlex from '@/components/ImageTextFlex.vue';
const missionandvalues = [
  {
    title: "Mission and Vision",
    description: "Explore how AITS combines production with sustainability and preservation. By providing users with unique and easily accessible software solutions, AITS utilizes manufacturing plants’ various faculties and divisions under a common software that can be operated anywhere. With this approach, AITS  is one step closer to becoming the leading software innovator in the Gulf region.",
    image: "/images/hero/missionandvision/vision.webp",
  },
  {
    title: "Values and Commitments",
    description: "At AITS, we value change, and that is just what we are committed to doing. AITS is devoted to reshaping the production industry into a more cordial environment, allowing employees to thrive and offer the best customer service experience. With AITS’s amicable approach and customer-friendly attitude, a brighter future dawns on the automation industry.",
    image: "/images/hero/values/values.webp",
  }
];
</script>

<template>
  <main>
  <Hero/>
  <ImageTextFlex sectiontitle="Mission and Values" :data="missionandvalues"/>
  <IndustriesList/>
  <Contact/>
  </main>
</template>
