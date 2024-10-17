<template>
  <video ref="videoRef" autoplay muted loop controls class="w-11/12 mt-40 mx-auto h-auto 2xl:w-8/12 lg:w-10/12 border-accent1 border-2 rounded-[18px]">
    <source preload="auto" src="/241011 0131 Aits Company Overview Video E028 V3.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>
</template>


<script setup>
import { ref, onMounted } from 'vue';

const videoRef = ref();

onMounted(() => {
  console.log(videoRef.value);
});
</script>