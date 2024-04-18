<script setup>
import { RouterLink } from 'vue-router'
import VisionandValues from './VisionandValues.vue';
</script>

<template>
  <section id="AITSHero" class="relative flex flex-col flex-wrap items-center h-full mx-auto px-6"> 
    <!-- headline + cta -->
    <div class="text-accent1 sm:10/12 w-11/12 flex flex-col justify-center items-center mx-auto gap-4 min-h-[90vh] h-screen md:pt-40 pt-20">
      <h1 class="uppercase xl:text-9xl lg:text-8xl sm:text-6xl text-4xl text-center font-[700]">Lorem ipsum<br/><span class="font-[100]"> dolor sit</span></h1>
      <p class="font-[200] text-justify text-accent2 2xl:w-1/3 md:w-2/3 mt-4" style="text-align-last: center;">AITS is not a generic company; we offer innovative software solutions tailored to your needs. Merging technology with excellence and vitality, AITS allows industrial plants to experience unprecedented production efficiency and a simpler means for monitoring, controlling, and acquiring real-time data.</p>
      <RouterLink id="go-to-contact-section" aria-label="go to contact section" to="/#contact" class="cursor-pointer px-4 py-3 mt-5 font-[200] text-center rounded-[8px] shadow-lg text-accent1 bg-bg2 hover:brightness-125 relative z-[2]">Contact Us</RouterLink>
      <img src="../assets/images/hero/arrow.webp" alt="AITS" width="178" height="145" center cover responsive  loading="eager" class="sm:w-50 w-[70px] mt-10"
      v-motion  
        :initial="{
          x:0,
          y:0,
        }"
        :visible="{
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
     <img src="../assets/images/hero/elements/centermiddle.svg" alt="AITS" width="1275" height="1585" center cover responsive loading="eager"
      v-motion  
        :initial="{
          opacity: 1,
          position: 'absolute',
          top: '0',
          left: '50%',
          zIndex: 1,
          transform: 'translateX(-50%)',
          x:0,
          y:0,
        }"
        :visibleOnce="{
          opacity: 0,
          transform: 'translate(100%)',
          x:0,
          y:0,
          transition: {
            type: 'spring',
            delay: 1000,
            duration: 4000
          },
        }"/>
      
      <!-- left layer -->
      <img src="../assets/images/hero/elements/lefttop.svg" alt="AITS" width="846" height="1078" center cover responsive loading="eager"
      v-motion  
        :initial="{
          opacity: 1,
          position: 'absolute',
          top: '0',
          left: '0',
          transform: 'translate(0%)',
          zIndex: 3,
          x:0,
          y:0,
        }"
        :visibleOnce="{
          opacity: 0,
          transform: 'translateY(-150%)',
          x:0,
          y:0,
          transition: {
            type: 'spring',
            delay: 1100,
            duration: 4000
          },
        }"/>

      <img src="../assets/images/hero/elements/leftmiddle.svg" alt="AITS" width="2765" height="2473" center cover responsive loading="eager"
      class="absolute left-0 transform -translate-y-1/2 z-1 top-1/2"/>
      <img src="../assets/images/hero/elements/leftmiddleoposite.svg" alt="AITS" width="1232" height="233" center cover responsive loading="eager"
      class="absolute left-0 transform -translate-y-1/2 z-1 top-1/2"/>    
      <!-- <img src="../assets/images/hero/elements/leftbottom.svg" alt="AITS" width="339" height="1416" center cover responsive loading="eager"
      class="absolute left-0 transform z-3 top-1/3 -translate-y-1/3"/> -->
 
      <!-- right layer -->
      <img src="../assets/images/hero/elements/righttop.svg" alt="AITS" width="1745" height="572" center cover responsive loading="eager"
      v-motion  
        :initial="{
          opacity: 1,
          position: 'absolute',
          top: '0',
          right: '0',
          transform: 'translate(0%)',
          zIndex: 3,
          x:0,
          y:0,
        }"
        :visibleOnce="{
          opacity: 0,
          transform: 'translate(100%)',
          x:0,
          y:0,
          transition: {
            type: 'spring',
            delay: 1100,
            duration: 4000
          },
        }"/>
      <img src="../assets/images/hero/elements/rightmiddle.svg" alt="AITS" width="2499" height="1501"  center cover responsive loading="eager"
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
      <!-- <img src="../assets/images/hero/elements/rightbottom.svg" alt="AITS" width="943" height="925" center cover responsive loading="eager"
      class="absolute right-0 transform -translate-y-[100%] z-1 top-[100%]"/>          -->
      
      <!-- pattern -->
      <img src="../assets/images/patterns/pattern (2).svg" alt="AITS" width="832" height="1771" center cover responsive loading="eager"
      class="absolute z-[-1] right-0 top-[100%] transform -translate-y-[100%] opacity-75"/>                


    <!-- Mission and Values  -->
    <VisionandValues/>

  </section>
</template>
