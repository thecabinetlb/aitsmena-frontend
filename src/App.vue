<script setup>
import Header from './components/layouts/Header.vue'
// import FloatingMenu from './components/layouts/FloatingMenu.vue'
import Footer from './components/layouts/Footer.vue';
import CookiesBanner from './components/layouts/CookiesBanner.vue';
</script>

<template>
  <main>
  <Header/>
  <RouterView/>
  <!-- <CookiesBanner/> -->
  <Footer/>
  <!-- <FloatingMenu/> -->
  </main>
</template>