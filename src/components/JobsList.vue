<script setup>
import { ref } from 'vue';
defineProps({
    sectionType: String,
    sectiontitle: String,
    sectiondescription1: String,
    sectiondescription2: String,
    sectiondescription3: String,
    sectiondescription4: String,
    data: Array
})
const showDetails = ref(false)
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
    <section class="w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12">
        <!-- <h1 class="text-accent1 font-[200] text-lg uppercase">New Opportunities</h1>
        <hr class="w-full h-4 mt-3 text-accent2"/>-->
        <!-- <button @click="filterJobs" class="px-4 py-3 w-fit h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border border-accent2 outline-none focus:ring-0 focus:border-bg2 peer">
            Internships</button> -->           
        <h1 class="font-[500] text-accent1 md:text-4xl text-[30px] uppercase mb-6">{{ sectiontitle }}</h1>
        <p v-if="sectiondescription1" class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] mb-3">{{ sectiondescription1 }}</p>
        <p v-if="sectiondescription2" class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] mb-3">{{ sectiondescription2 }}<br/>{{ sectiondescription3 }}</p>
        <p v-if="sectiondescription3" class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">{{ sectiondescription4 }}</p>
        
        <h2 v-if="sectionType === 'graduate program and internship opportunities'" class="text-accent1 font-[700] text-lg mt-10">Graduate Program:</h2>
       
        <ul v-if="data" role="list" class="flex flex-wrap justify-center lg;justify-between gap-6 lg:gap-3 mt-3 list-style-none">
            <li v-for="(item, key) in data" :key="key" class="flex-grow lg:w-5/12 w-full p-6 space-y-6 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2">
                    <div class="space-y-3">
                        <h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[700]">{{ item.title }}</h2>
                        <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">{{ item.location }}</p>
                    </div>
                    <div class="space-y-3">
                        <h3 class="lg:text-lg text-md text-accent1 font-[500]">{{ item?.summarytitle }}</h3>
                        <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">{{ item.summary }}</p>
                    </div>
                    <Transition>
                        <div v-if="showDetails === true" class="space-y-6">
                            <component :is="item.description"></component>
                            <a :id="'apply-for-' + item.title" :aria-label="'apply for' + item.title" href="mailto:careers@aitsmena.com" class="cursor-pointer px-4 py-3 w-fit block text-nowrap max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 transition-all duration-400">Apply Now</a>
                        </div>
                    </Transition>
                    <button @click="showDetails = !showDetails"
                    aria-label="View job" id="view-job"
                    class="block w-fit cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 border-b-[3px] border-bg2 pb-2 hover:border-accent1 transition-all duration-400">
                    {{showDetails === false ? 'View Details' : 'Close Details'}}</button>
            </li>
        </ul>
        <div v-else class="mt-10 p-6 relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2">
            <h3 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[700]">No posted {{ sectionType }}.</h3>        
        </div>
    </section>
<!-- <iframe src='https://widgets.sociablekit.com/linkedin-page-jobs/iframe/25415756' frameborder='0' width='100%' height='1000'></iframe></section> -->
</template>

