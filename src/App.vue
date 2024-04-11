<script setup>
import Header from './components/layouts/Header.vue'
import FloatingMenu from './components/layouts/FloatingMenu.vue'
import Hero from './components/Hero.vue'
import Industries from './components/Industries.vue'
import Testimonies from './components/Testimonies.vue'
import Footer from './components/layouts/Footer.vue';
</script>

<template>
  <main class="bg-black">
  <Header/>
  <Hero/>
  <Industries/>
  <Testimonies/>
  <Footer/>
  <FloatingMenu/>
  </main>
</template>