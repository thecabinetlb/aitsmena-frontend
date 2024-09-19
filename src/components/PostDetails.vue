<script setup>
defineProps({
    item: Object,
})
</script>
<template>
    <section class="w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12">
        <h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ item.title }}</h1>
        <div class="flex flex-col gap-6 mt-10">
            <div class="relative overflow-hidden aspect-video rounded-[16px]"
            :style="{ backgroundImage: 'url(' + item.image + ')', backgroundSize:'cover', backgroundPosition: 'center'}">
              <div v-if="item.customer_logo" class="p-2 absolute top-3 right-3 w-1/4 h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]">
                <img :src="item.customer_logo" :alt="item.title" width="100%" height="100%" center cover responsive loading="lazy" class="mx-auto aspect-1.72/1 scale-125"/>
              </div>
            </div>
            <h3 class="text-accent2 font-[200] max-sm:text-[14px] mb-6">{{ item.published_at }}</h3>
            <div class="space-y-6 tracking-wide text-accent2" v-html="item.content"></div>
            <div class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]" v-html="item.cta_description"></div>
            <!-- <div v-else class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">
                <h1 class="font-[200] md:text-4xl text-[30px] mb-2">Client Overview:</h1>
                <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] mb-6">AITS specializes in empowering industries to thrive by providing innovative software solutions tailored to their unique needs, all while prioritizing sustainability and efficiency.
                As the main company within the IBI family, AITS plays a pivotal role in driving positive transformation across various industrial sectors. With a keen focus on sustainability, AITS is committed to helping our clients achieve their objectives while minimizing environmental impact. 
                AITS is the holder of two distinguished sub-companies: AVEVA Select Gulf and IC2. Together these companies offer a comprehensive suite of solutions designed to address the diverse challenges faced by today's industries.
                AITS’s mission is to become the leading industrial software innovator in the Gulf by delivering cutting-edge software solutions and exceptional customer experiences.
                </p>
                <h1 class="font-[200] md:text-4xl text-[30px] mb-2">Objectives</h1>
                <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] mb-6">
                To inform the target audience about what the Scada system is and what industries mainly use it, a breakdown of its 3 main layers, and the benefits / the role that the Scada system plays in industrial automation (industry 4.0).                    
                </p>
                <h1 class="font-[200] md:text-4xl text-[30px] mb-2">Target Audience</h1>
                <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] mb-6">
                Industrial companies (Small, Medium, or Large) in the Gulf region that haven't implemented the Scada system yet. These companies could work in the F&B manufacturing, oil & gas, energy, utilities, or the metal, mining, & minerals industries.
                </p>
            </div> -->
        </div>
    </section>
</template>