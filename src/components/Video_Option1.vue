<template>
    <section class="relative w-full h-full">
        <video ref="videoRef" autoplay muted loop width="100%" height="100%" class="relative inset-0 w-full h-full">
            <source preload="auto" src="/241011 0131 Aits Company Overview Video E028 V3.webm" type="video/webm">
            Your browser does not support the video tag.
        </video>    
        <img src="/images/hero/arrow.webp" alt="AITS" loading="eager" class="absolute md:left-1/2 left-[46%] md:-translate-x-1/2 bottom-1/4 md:w-[100px] w-[50px]"
        v-motion  
            :initial="{
            x:0,
            y:0,
            }"
            :visibleOnce="{
            x:0,
            y:90,
            transition: {
                type: 'spring',
                delay: 5000,
                duration: 1000
            },
            }"/>    
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const videoRef = ref();

onMounted(() => {
  console.log(videoRef.value);
});
</script>