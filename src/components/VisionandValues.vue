<template>
    <section class="w-11/12 mx-auto lg:mt-40 2xl:w-8/12 lg:10/12">
      <h1 class="text-accent1 font-[200] text-lg uppercase">&#x2022; Mission and Vision</h1>
      <hr class="w-full h-4 mt-3 text-accent2"/>
      <div class="relative mt-10 space-y-20 z-[5]">
        <div class="flex flex-wrap items-center justify-center w-full gap-6 lg:gap-0 lg:justify-between"
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
          <div class="w-full space-y-10 2xl:w-3/5 lg:w-1/2">
            <h2 class="text-accent1 font-[400] 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase">Mission and vision</h2>
            <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">Explore how AITS combines production with sustainability and preservation. By providing users with unique and easily accessible software solutions, AITS utilizes manufacturing plants’ various faculties and divisions under a common software that can be operated anywhere. With this approach, AITS  is one step closer to becoming the leading software innovator in the Gulf region.</p>
          </div>
          <img src="/images/hero/missionandvision/vision.webp" alt="AITS" width="391" height="290" center cover responsive loading="lazy"/>    
        </div>
        <div class="flex flex-wrap items-center justify-center w-full gap-6 lg:gap-0 lg:justify-between"
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
          <img src="/images/hero/values/values.webp" alt="AITS" width="391" height="290" center cover responsive loading="lazy"/>    
          <div class="w-full space-y-10 2xl:w-3/5 lg:w-1/2">
            <h2 class="text-accent1 font-[400] 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase">Values and Commitments</h2>
            <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">At AITS, we value change, and that is just what we are committed to doing. AITS is devoted to reshaping the production industry into a more cordial environment, allowing employees to thrive and offer the best customer service experience. With AITS’s amicable approach and customer-friendly attitude, a brighter future dawns on the automation industry.</p>
          </div>
        </div>      
      </div>
    </section>
</template>