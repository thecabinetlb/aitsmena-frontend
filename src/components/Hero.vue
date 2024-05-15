<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="AITSHero" class="relative flex flex-col flex-wrap items-center h-full px-6 mx-auto"> 
    <!-- headline + cta -->
    <div class="sm:10/12 w-11/12 flex flex-col justify-center items-center mx-auto gap-6 h-[90vh] lg:pt-40 pt-40">
      <h1 class="text-accent1 uppercase 2xl:text-9xl lg:text-8xl md:text-6xl sm:text-5xl text-[36px] text-center font-[700]">AITS</h1>
      <h1 class="text-accent1 uppercase 2xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-[30px] text-center font-[700]">Where Innovation<br/> Knows No Limits</h1>
      <p class="font-[200] max-sm:text-[14px] text-justify text-accent2 2xl:w-5/12 px-4 sm:w-2/3" style="text-align-last: center;">
        Your trusted partner for industrial software solutions
        empowering industries to thrive through innovative tech solutions tailored to their unique
        needs. Our commitment to sustainability and efficiency drives everything we do, ensuring
        that our clients achieve their objectives while minimizing environmental impact.</p>
      <RouterLink id="go-to-contact-page" aria-label="go to contact page" to="/contact" class="relative z-[4] block w-fit cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125">Get Started</RouterLink>
      <img src="/images/hero/arrow.webp" alt="AITS" width="178" height="145" center cover responsive  loading="eager" class="w-[100px] max-md:w-[50px]"
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
            delay: 600,
            duration: 600
          },
        }"/>    
    </div>
    <!-- animation elements -->
      <!-- middle layor -->
     <img src="/images/hero/elements/centermiddle.webp" alt="AITS" width="1253" height="1239" center cover responsive loading="eager"
      v-motion  
        :initial="{
          opacity: 1,
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
        }" class="absolute top-0 z-1 left-1/2 max-sm:top-32 max-sm:-translate-y-1/4 max-sm:h-[400px]" />
      
      <!-- left layer -->
      <img src="/images/hero/elements/lefttop (1).webp" alt="AITS" width="339" height="1416" center cover responsive loading="eager"
      v-motion  
        :initial="{
          transform: 'translate(0%)',
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
        }" class="absolute top-0 left-0 z-3 max-sm:top-20 max-sm:h-[400px]" />

      <img src="/images/hero/elements/leftmiddle (1).webp" alt="AITS" width="1232" height="233" center cover responsive loading="eager"
      class="absolute left-0 transform md:-translate-y-1/2 z-1 md:top-1/2 top-2/3 -translate-y-2/3  max-sm:h-[400px]"/>
      <img src="/images/hero/elements/leftmiddleoposite (1).webp" alt="AITS" width="339" height="1416" center cover responsive loading="eager"
      class="absolute left-0 transform md:-translate-y-1/2 z-1 md:top-1/2 top-2/3 -translate-y-2/3 max-sm:h-[400px]"/>    
      <img src="/images/hero/elements/leftbottom (1).webp" alt="AITS" width="1122" height="764" center cover responsive loading="eager"
      class="absolute left-0 z-3 top-[100%]"/>
 
      <!-- right layer -->
      <img src="/images/hero/elements/righttop.webp" alt="AITS" width="1467" height="1474" 
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
      <img src="/images/hero/elements/rightmiddle.webp" alt="AITS" width="2499" height="1501" center cover responsive loading="eager"
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
      <img src="/images/patterns/patternhero.webp" alt="AITS" width="862" height="1771" center cover responsive loading="eager"
      class="absolute z-[-1] right-0 top-0 opacity-75"/>

  </section>
</template>
