<script setup>
defineProps({
    sectiontitle: String,
    item: Object
})
</script>
<template>
    <section class="w-11/12 py-40 mx-auto 2xl:w-8/12 lg:w-10/12">
        <h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ item.title }}</h1>
        <p class="tracking-wide hyphens-auto text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.summary }}</p>
        <RouterLink id="go-to-contact-page" aria-label="go to contact page" to="/contact" class="block w-fit ms-auto me-0cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125">Contact</RouterLink>
        <div class="flex flex-col gap-3 mt-10">
            <!-- <div class="w-full h-40 bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]"></div> -->
            <img :src="item.image" :alt="item.title" center cover responsive loading="eager" class="aspect-video bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]"/>
            <h3 class="text-accent2 font-[200] max-sm:text-[14px] mb-2">{{ item.published_at }}</h3>
            <p v-if="item.body" class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">{{ item.body }}</p>
            <div v-else class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">
                <h1 class="font-[200] md:text-4xl text-[30px] mb-2">Client Overview:</h1>
                <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">AITS specializes in empowering industries to thrive by providing innovative software solutions tailored to their unique needs, all while prioritizing sustainability and efficiency.
                As the main company within the IBI family, AITS plays a pivotal role in driving positive transformation across various industrial sectors. With a keen focus on sustainability, AITS is committed to helping our clients achieve their objectives while minimizing environmental impact. 
                AITS is the holder of two distinguished sub-companies: AVEVA Select Gulf and IC2. Together these companies offer a comprehensive suite of solutions designed to address the diverse challenges faced by today's industries.
                AITS’s mission is to become the leading industrial software innovator in the Gulf by delivering cutting-edge software solutions and exceptional customer experiences.
                </p>
                <h1 class="font-[200] md:text-4xl text-[30px] mb-2">Objectives</h1>
                <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">
                To inform the target audience about what the Scada system is and what industries mainly use it, a breakdown of its 3 main layers, and the benefits / the role that the Scada system plays in industrial automation (industry 4.0).                    
                </p>
                <h1 class="font-[200] md:text-4xl text-[30px] mb-2">Target Audience</h1>
                <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">
                Industrial companies (Small, Medium, or Large) in the Gulf region that haven't implemented the Scada system yet. These companies could work in the F&B manufacturing, oil & gas, energy, utilities, or the metal, mining, & minerals industries.
                </p>
            </div>
        </div>
    </section>
</template>