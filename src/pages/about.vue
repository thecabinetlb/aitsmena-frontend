<script setup>
import { ref, onMounted } from 'vue';

const videoRef = ref();

onMounted(() => {
  console.log(videoRef.value);
});
</script>

<template>
  <video ref="videoRef" autoplay muted loop width="100%">
    <source preload="auto" src="/241011 0131 Aits Company Overview Video E028 V3.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>
</template>
