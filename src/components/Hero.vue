<script setup>

</script>

<template>
  <section id="AITSHero" class="relative flex flex-col flex-wrap items-center h-full mx-auto">
    <!-- headline + cta -->
    <div class="sm:10/12 w-11/12 flex flex-col justify-center items-center mx-auto space-y-2 gap-4 h-[90vh] pt-10">
      <h1 class="text-accent1 uppercase text-[30px] lg:text-7xl xl:text-8xl text-center font-[700]">Lorem Ipsum <br/><span class="font-[100]">Dolor Sit</span></h1>
      <p class="font-[200] text-center text-accent2 md:w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
      <button class="px-4 py-3 text-center bg-accent1 text-bg2 rounded-full shadow-lg hover:bg-opacity-95 cursor-pointer">See our Solutions</button>
      <img src="../assets/images/hero/arrow.webp" alt="AITS" width="178" height="145" responsive class="pt-10"/>    
    </div>
    <!-- animation elements -->
    <div class="absolute inset-0 w-full h-full">
      <!-- middle layor -->
      <img src="../assets/images/hero/elements/centermiddle.svg" alt="AITS" width="1068" height="1583" responsive
      class="absolute z-1 left-1/2 top-0 transform -translate-x-1/2 centermiddle scale-125"/>    
      
      <!-- left layer -->
      <img src="../assets/images/hero/elements/lefttop.svg" alt="AITS" width="846" height="1078" responsive
      class="absolute z-3 left-0 top-0 transform -translate-y-0"/>
      <img src="../assets/images/hero/elements/leftmiddle.svg" alt="AITS" width="2765" height="2473" responsive
      class="absolute z-2 left-0 top-1/3 transform -translate-y-1/3"/>    
      <img src="../assets/images/hero/elements/leftmiddleoposite.svg" alt="AITS" width="1232" height="233" responsive
      class="absolute z-2 left-0 top-1/3 transform -translate-y-1/3"/>    
      <img src="../assets/images/hero/elements/leftbottom.svg" alt="AITS" width="339" height="1416" responsive
      class="absolute z-3 left-0 top-[100%] transform -translate-y-[100%]"/>
      
      <!-- right layer -->
      <img src="../assets/images/hero/elements/righttop.svg" alt="AITS" width="1745" height="572" responsive
      class="absolute z-3 right-0 top-0 transform -translate-y-0"/>
      <img src="../assets/images/hero/elements/rightbottom.svg" alt="AITS" width="832" height="764" responsive
      class="absolute z-3 right-0 top-[100%] transform -translate-y-[100%]"/>

      <!-- pattern -->
      <img src="../assets/images/hero/patterns/pattern (2).svg" alt="AITS" width="832" height="1771" responsive
      class="absolute z-4 right-0 top-[100%] transform -translate-y-[100%] opacity-75"/>       
    </div>


    <!-- Mission and Values  -->
    <section class="xl:w-8/12 sm:10/12 w-11/12 mx-auto space-y-2 mt-20">
      <h1 class="text-accent1 font-[700] text-lg uppercase">Mission and Vision</h1>
      <hr class="w-full h-4 text-accent2"/>
      <div class="relative space-y-20 z-5 mt-4">
        <div class="flex flex-wrap justify-between items-center gap-4"
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
          <div class="space-y-2 sm:w-1/2 w-full">
            <h2 class="text-accent1 font-[400] text-[30px] lg:text-4xl 2xl:text-5xl uppercase">Mission and vision</h2>
            <p class="text-accent2 font-[200] 2xl:text-lg lg:text-md text-justify">Explore how AITS combines production with sustainability and preservation. By providing users with unique and easily accessible software solutions, AITS utilizes manufacturing plants’ various faculties and divisions under a common software that can be operated anywhere. With this approach, AITS  is one step closer to becoming the leading software innovator in the Gulf region.</p>
          </div>
          <img src="../assets/images/hero/missionandvision/vision.webp" alt="AITS" width="391" height="290" responsive/>    
        </div>
        <div class="flex flex-wrap justify-between items-center gap-4"
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
          <div class="space-y-2 sm:w-1/2 w-full">
            <h2 class="text-accent1 font-[400] text-[30px] lg:text-4xl 2xl:text-5xl uppercase">Values and Commitments</h2>
            <p class="text-accent2 font-[200] 2xl:text-lg lg:text-md text-justify">At AITS, we value change, and that is just what we are committed to doing. AITS is devoted to reshaping the production industry into a more cordial environment, allowing employees to thrive and offer the best customer service experience. With AITS’s amicable approach and customer-friendly attitude, a brighter future dawns on the automation industry.</p>
          </div>
        </div>      
      </div>
    </section>

  </section>
</template>
