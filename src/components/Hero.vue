<script setup>
import { RouterLink } from 'vue-router'
import VisionandValues from './VisionandValues.vue';
</script>

<template>
  <section id="AITSHero" class="relative flex flex-col flex-wrap items-center h-full px-6 mx-auto"> 
    <!-- headline + cta -->
    <div class="sm:10/12 w-11/12 flex flex-col justify-center items-center mx-auto gap-6 lg:h-[90vh] h-[80vh] lg:pt-40 pt-20">
      <h1 class="text-accent1 uppercase xl:text-9xl lg:text-8xl sm:text-6xl text-4xl text-center font-[700]">Lorem ipsum<br/><span class="font-[100]"> dolor sit</span></h1>
      <p class="font-[200] text-justify text-accent2 2xl:w-1/3 w-2/3" style="text-align-last: center;">AITS is not a generic company; we offer innovative software solutions tailored to your needs. Merging technology with excellence and vitality, AITS allows industrial plants to experience unprecedented production efficiency and a simpler means for monitoring, controlling, and acquiring real-time data.</p>
      <RouterLink id="go-to-contact-section" aria-label="go to contact section" to="#contact" class="cursor-pointer px-4 py-3 font-[200] text-center rounded-[8px] shadow-lg text-accent1 bg-bg2 hover:brightness-125">Contact Us</RouterLink>
      <img src="../assets/images/hero/arrow.webp" alt="AITS" width="178" height="145" center cover responsive  loading="eager" class="sm:w-50 w-[70px] mt-10"
      v-motion  
        :initial="{
          x:0,
          y:0,
        }"
        :visibleOnce="{
          x:0,
          y:100,
          transition: {
            type: 'spring',
            delay: 1000,
            duration: 600
          },
        }"/>    
    </div>
    <!-- animation elements -->
      <!-- middle layor -->
     <img src="../assets/images/hero/elements/centermiddle.svg" alt="AITS" width="1275" height="1585" class="min-h-[400px]" center cover responsive loading="eager"
      v-motion  
        :initial="{
          opacity: 1,
          position: 'absolute',
          top: '0',
          left: '50%',
          zIndex: 1,
          transform: 'translate(-50%, 0%)',
          x:0,
          y:0,
        }"
        :visibleOnce="{
          opacity: 0,
          transform: 'translate(100%, 100%)',
          x:0,
          y:0,
          transition: {
            type: 'spring',
            delay: 1000,
            duration: 4000
          },
        }"/>
      
      <!-- left layer -->
      <img src="../assets/images/hero/elements/lefttop.svg" alt="AITS" width="846" height="1078" class="min-h-[400px]" center cover responsive loading="eager"
      v-motion  
        :initial="{
          position: 'absolute',
          top: '0',
          left: '0',
          transform: 'translate(0%)',
          zIndex: 3,
          x:0,
          y:0,
        }"
        :visibleOnce="{
          transform: 'translateY(-70%)',
          x:0,
          y:0,
          transition: {
            type: 'spring',
            delay: 1100,
            duration: 4000
          },
        }"/>

      <img src="../assets/images/hero/elements/leftmiddle.svg" alt="AITS" width="2765" height="2473" center cover responsive loading="eager"
      class="absolute left-0 transform md:-translate-y-1/2 z-1 md:top-1/2 top-2/3 -translate-y-2/3 min-h-[400px]"/>
      <img src="../assets/images/hero/elements/leftmiddleoposite.svg" alt="AITS" width="1232" height="233" center cover responsive loading="eager"
      class="absolute left-0 transform md:-translate-y-1/2 z-1 md:top-1/2 top-2/3 -translate-y-2/3 min-h-[233px]"/>    
      <!-- <img src="../assets/images/hero/elements/leftbottom.svg" alt="AITS" width="339" height="1416" center cover responsive loading="eager"
      class="absolute left-0 transform z-3 top-1/3 -translate-y-1/3"/> -->
 
      <!-- right layer -->
      <img src="../assets/images/hero/elements/righttop.svg" alt="AITS" width="1098" height="1431" center cover responsive loading="eager"
      v-motion  
        :initial="{
          position: 'absolute',
          top: '0',
          right: '0',
          transform: 'translate(0%, 0%)',
          zIndex: 3,
          x:0,
          y:0,
        }"
        :visibleOnce="{
          transform: 'translate(50%, -70%)',
          x:0,
          y:0,
          transition: {
            type: 'spring',
            delay: 1100,
            duration: 4000
          },
        }"/>
      <img src="../assets/images/hero/elements/rightmiddle.svg" alt="AITS" width="2499" height="1501" center cover responsive loading="eager"
      v-motion  
        :initial="{
          position: 'absolute',
          top: '35%',
          right: '0',
          transform: 'translate(0%)',
          zIndex: -1,
          x:0,
          y:0,
        }"
        :visibleOnce="{
          transform: 'translate(50%)',
          x:0,
          y:0,
          transition: {
            type: 'spring',
            delay: 1100,
            duration: 4000
          },
        }"/>    
      
      <!-- pattern -->
      <img src="../assets/images/patterns/pattern (2).svg" alt="AITS" width="832" height="1771" center cover responsive loading="eager"
      class="absolute z-[-1] right-0 top-[100%] transform -translate-y-[100%] opacity-75"/>                


    <!-- Mission and Values  -->
    <VisionandValues/>

  </section>
</template>
