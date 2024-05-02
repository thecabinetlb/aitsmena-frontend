<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="AITSHero" class="relative flex flex-col flex-wrap items-center h-full px-6 mx-auto"> 
    <!-- headline + cta -->
    <div class="sm:10/12 w-11/12 flex flex-col justify-center items-center mx-auto gap-6 h-[90vh] lg:pt-40 pt-20">
      <h1 class="text-accent1 uppercase 2xl:text-9xl lg:text-8xl md:text-6xl sm:text-4xl text-[30px] text-center font-[700]">Lorem ipsum</h1>
      <p class="font-[200] max-sm:text-[14px] text-justify text-accent2 2xl:w-1/2 sm:w-2/3" style="text-align-last: center;">AITS is not a generic company; we offer innovative software solutions tailored to your needs. Merging technology with excellence and vitality, AITS allows industrial plants to experience unprecedented production efficiency and a simpler means for monitoring, controlling, and acquiring real-time data.</p>
      <RouterLink id="go-to-contact-page" aria-label="go to contact page" to="/contact" class="relative z-[2] block w-fit cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125">Contact Us</RouterLink>
      <img src="/images/hero/arrow.webp" alt="AITS" width="178" height="145" center cover responsive  loading="eager" class="sm:w-50 w-[50px]"
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
            delay: 800,
            duration: 600
          },
        }"/>    
    </div>
    <!-- animation elements -->
      <!-- middle layor -->
     <img src="/images/hero/elements/centermiddle.svg" alt="AITS" width="1253" height="1239" class="min-h-[90vh]" center cover responsive loading="eager"
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
          transform: 'translate(100%, -100%)',
          x:0,
          y:0,
          transition: {
            type: 'spring',
            delay: 800,
            duration: 600
          },
        }"/>
      
      <!-- left layer -->
      <img src="/images/hero/elements/lefttop.svg" alt="AITS" width="846" height="1078" class="min-h-screen" center cover responsive loading="eager"
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
            delay: 900,
            duration: 600
          },
        }"/>

      <img src="/images/hero/elements/leftmiddle.svg" alt="AITS" width="2765" height="2473" center cover responsive loading="eager"
      class="absolute left-0 min-h-screen transform md:-translate-y-1/2 z-1 md:top-1/2 top-2/3 -translate-y-2/3"/>
      <img src="/images/hero/elements/leftmiddleoposite.svg" alt="AITS" width="1232" height="233" center cover responsive loading="eager"
      class="absolute left-0 transform md:-translate-y-1/2 z-1 md:top-1/2 top-2/3 -translate-y-2/3 min-h-[233px]"/>    
      <!-- <img src="/images/hero/elements/leftbottom.svg" alt="AITS" width="339" height="1416" center cover responsive loading="eager"
      class="absolute left-0 transform z-3 top-1/3 -translate-y-1/3"/> -->
 
      <!-- right layer -->
      <img src="/images/hero/elements/righttop.svg" alt="AITS" width="1467" height="1474" 
      class="min-h-screen w-screen absolute right-0 lg:top-1/4 lg:-translate-y-1/4 top-0 z-[-1]" center cover responsive loading="eager" />
      <!-- v-motion  
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
          transform: 'translate(50%, -50%)',
          x:0,
          y:0,
          transition: {
            type: 'spring',
            delay: 1100,
            duration: 4000
          },
        }" -->
      <img src="/images/hero/elements/rightmiddle.svg" alt="AITS" width="2499" height="1501" center cover responsive loading="eager"
      v-motion  
        :initial="{
          position: 'absolute',
          top: '35%',
          right: '0',
          transform: 'translate(0%)',
          zIndex: 2,
          x:0,
          y:0,
        }"
        :visibleOnce="{
          transform: 'translate(50%)',
          x:0,
          y:0,
          transition: {
            type: 'spring',
            delay: 100,
            duration: 600
          },
        }"/>    
      
      <!-- pattern -->
      <img src="/images/patterns/pattern (2).svg" alt="AITS" width="832" height="1771" center cover responsive loading="eager"
      class="absolute z-[-1] right-0 top-[100%] transform -translate-y-[100%] opacity-75"/>                

  </section>
</template>
