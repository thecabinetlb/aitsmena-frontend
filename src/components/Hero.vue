<script setup>

</script>

<template>
  <section id="AITSHero" class="relative flex flex-col flex-wrap items-center h-full mx-auto">
    <!-- headline + cta -->
    <div class="sm:10/12 w-11/12 flex flex-col justify-center items-center mx-auto space-y-4 gap-4 h-[90vh] pt-40">
      <h1 class="text-accent1 uppercase 2xl:text-9xl xl:text-8xl lg:text-7xl text-2xl text-center font-[700]">Lorem Ipsum <br/><span class="font-[100]">Dolor Sit</span></h1>
      <p class="font-[200] text-justify text-accent2 xl:w-1/3 lg:w-1/2" style="text-align-last: center;">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim Exercitation veniam consequat velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <button class="px-4 py-3 text-center rounded-full shadow-lg cursor-pointer bg-accent1 text-bg2 hover:bg-opacity-95">See our Solutions</button>
      <img src="../assets/images/hero/arrow.webp" alt="AITS" width="178" height="145" responsive class="pt-10"/>    
    </div>
      <!-- animation elements -->
      <!-- middle layor -->
      <img src="../assets/images/hero/elements/centermiddle.svg" alt="AITS" width="1275" height="1585" responsive loading="eager"
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
            delay: 1500,
            duration: 4000
          },
        }"/>
      
      <!-- left layer -->
      <img src="../assets/images/hero/elements/lefttop.svg" alt="AITS" width="846" height="1078" responsive loading="eager"
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
            delay: 1600,
            duration: 4000
          },
        }"/>

      <img src="../assets/images/hero/elements/leftmiddle.svg" alt="AITS" width="2765" height="2473" responsive loading="eager"
      class="absolute left-0 transform -translate-y-1/2 z-2 top-1/2"/>
      <img src="../assets/images/hero/elements/leftmiddleoposite.svg" alt="AITS" width="1232" height="233" responsive loading="eager"
      class="absolute left-0 transform -translate-y-1/2 z-2 top-1/2"/>    
      <!-- <img src="../assets/images/hero/elements/leftbottom.svg" alt="AITS" width="339" height="1416" responsive loading="eager"
      class="absolute left-0 transform z-3 top-1/3 -translate-y-1/3"/> -->
 
      <!-- right layer -->
      <img src="../assets/images/hero/elements/righttop.svg" alt="AITS" width="1745" height="572" responsive loading="eager"
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
            delay: 1600,
            duration: 4000
          },
        }"/>
      <img src="../assets/images/hero/elements/rightbottom.svg" alt="AITS" width="832" height="764" responsive loading="eager"
      class="absolute z-3 right-0 top-[100%] transform -translate-y-[100%]"/>

      <!-- pattern -->
      <img src="../assets/images/patterns/pattern (2).svg" alt="AITS" width="832" height="1771" responsive loading="eager"
      class="absolute z-4 right-0 top-[100%] transform -translate-y-[100%] opacity-75"/>       


    <!-- Mission and Values  -->
    <section class="w-11/12 mx-auto mt-40 space-y-2 xl:w-8/12 sm:10/12">
      <h1 class="text-accent1 font-[700] text-lg uppercase">Mission and Vision</h1>
      <hr class="w-full h-4 text-accent2"/>
      <div class="relative mt-4 space-y-20 z-5">
        <div class="flex flex-wrap items-center justify-between lg:gap-4"
        v-motion
          :initial="{
            opacity: 0,
            y: 100,
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: '100',
              delay: 100,
            },
          }">
          <div class="w-full space-y-2 2xl:w-2/3 sm:w-1/2">
            <h2 class="text-accent1 font-[400] text-2xl lg:text-4xl 2xl:text-5xl uppercase">Mission and vision</h2>
            <p class="text-accent2 font-[200] 2xl:text-lg lg:text-md text-justify">Explore how AITS combines production with sustainability and preservation. By providing users with unique and easily accessible software solutions, AITS utilizes manufacturing plants’ various faculties and divisions under a common software that can be operated anywhere. With this approach, AITS  is one step closer to becoming the leading software innovator in the Gulf region.</p>
          </div>
          <img src="../assets/images/hero/missionandvision/vision.webp" alt="AITS" width="391" height="290" responsive/>    
        </div>
        <div class="flex flex-wrap items-center justify-between gap-4"
        v-motion
          :initial="{
            opacity: 0,
            y: 100,
          }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: '100',
              delay: 200,
            },
          }">
          <img src="../assets/images/hero/values/values.webp" alt="AITS" width="391" height="290"/>    
          <div class="w-full space-y-2 2xl:w-2/3 sm:w-1/2">
            <h2 class="text-accent1 font-[400] text-2xl lg:text-4xl 2xl:text-5xl uppercase">Values and Commitments</h2>
            <p class="text-accent2 font-[200] 2xl:text-lg lg:text-md text-justify">At AITS, we value change, and that is just what we are committed to doing. AITS is devoted to reshaping the production industry into a more cordial environment, allowing employees to thrive and offer the best customer service experience. With AITS’s amicable approach and customer-friendly attitude, a brighter future dawns on the automation industry.</p>
          </div>
        </div>      
      </div>
    </section>

  </section>
</template>
