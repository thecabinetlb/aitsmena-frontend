<script setup>
// import { ref } from 'vue';
import { RouterLink } from 'vue-router'
defineProps({
    sectionid: String,
    sectiontitle: String,
    sectiondescription: String,
    data: Array
})

// const filteredjobs = ref(jobsorinternships.value)
// const filterJobs = () => {
//    if (filteredjobs.value === jobsorinternships.value) {
//     filteredjobs.value = jobsorinternships.value.filter(job => job.type === 'Internship');
//    } else {
//     filteredjobs.value = jobsorinternships.value;
//    }
// }
</script>

<template>
    <section :id="sectionid" class="w-11/12 pt-40 mx-auto 2xl:w-8/12 sm:w-10/12">
        <!-- <h1 class="text-accent1 font-[200] text-lg uppercase"> &#x2022; New Opportunities</h1>
        <hr class="w-full h-4 mt-3 text-accent2"/>-->
        <!-- <button @click="filterJobs" class="px-4 py-3 w-fit h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border border-accent2 focus:outline-none focus:ring-0 focus:border-bg2 peer">
            Internships</button> -->           
        <h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">{{ sectiontitle }}</h1>
        <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ sectiondescription }}</p>
        <!-- <ul role="list" class="flex flex-wrap justify-center lg;justify-between mt-10 gap-6 lg:gap-3 list-style-none">
            <li v-for="(item, key) in data" :key="key" class="flex-grow lg:w-5/12 w-full relative group sm:min-h-[135px] bg-extended-noise bg-cover bg-center rounded-[16px]">
                <div class="p-6 w-full h-full relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2">
                    <div class="w-8/12">
                        <h3 class="font-[200] max-sm:text-[14px] text-accent1 underline mb-3">{{ item.type }}</h3>
                        <h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500] mb-3">{{ item.title }}</h2>
                        <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.location }}</p>
                    </div>
                    <RouterLink :id="'go-to-' + item.title + '-page'" :aria-label="'apply for' + item.title" :to="item.to" :target="item.target" class="cursor-pointer px-4 py-3 mt-auto mb-0 w-fit block max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125">Apply</RouterLink>
                </div>
            </li>
        </ul> -->
        <div class="lg:w-full relative group bg-extended-noise bg-cover bg-center rounded-[16px] mt-10 mx-auto">
        <div class="p-6 w-full h-full relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2">
            <h3 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500]">No posted {{ sectionid }}.</h3>        
        </div>
        </div>        
    </section>
</template>

