<script setup>
import { ref,computed } from 'vue';
import { RouterLink } from 'vue-router'
defineProps({
    sectiontitle: String,
    sectiondescription: String,
})
const jobsorinternships = ref([
  { id: 1, title: 'Software Engineer', type: 'Full-time', to: 'https://example.com/job1', target: '_blank', location: 'San Francisco, CA' },
  { id: 2, title: 'Data Analyst', type: 'Contract', to: 'https://example.com/job2', target: '_blank', location: 'New York, NY' },
  { id: 3, title: 'Marketing Specialist', type: 'Part-time', to: 'https://example.com/job3', target: '_blank', location: 'Los Angeles, CA' },
  { id: 4, title: 'Graphic Designer', type: 'Freelance', to: 'https://example.com/job4', target: '_blank', location: 'Chicago, IL' },
  { id: 5, title: 'Project Manager', type: 'Full-time', to: 'https://example.com/job5', target: '_blank', location: 'Seattle, WA' },
  { id: 6, title: 'HR Coordinator', type: 'Internship', to: 'https://example.com/job6', target: '_blank', location: 'Boston, MA' },
  { id: 7, title: 'Financial Analyst', type: 'Full-time', to: 'https://example.com/job7', target: '_blank', location: 'Austin, TX' },
  { id: 8, title: 'Customer Service Representative', type: 'Part-time', to: 'https://example.com/job8', target: '_blank', location: 'Denver, CO' },
]);
const filteredjobs = ref(jobsorinternships)
const filterJobs = () => {
    filteredjobs.value = jobsorinternships.value.filter(job => job.type === 'Internship');
};
</script>

<template>
    <section id="jobs-and-internships" class="w-11/12 mx-auto 2xl:w-8/12 sm:w-10/12">
        <!-- <h1 class="text-accent1 font-[200] text-lg uppercase"> &#x2022; New Opportunities</h1>
        <hr class="w-full h-4 mt-3 text-accent2"/>-->
            <div class="flex flex-wrap items-center justify-center w-full gap-3 mb-6 lg:gap-0 max-md:text-center md:justify-between">
            <h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase">{{ sectiontitle }}</h1>
            <button @click="filterJobs" class="px-4 py-3 w-fit h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border border-accent2 focus:outline-none focus:ring-0 focus:border-bg2 peer">
            Internships</button>
            </div>
            <p class="text-accent2 font-[200] max-md:text-center max-sm:text-[14px] md:text-justify">{{ sectiondescription }}</p>
        <ul role="list" class="flex flex-wrap justify-center lg;justify-between mt-10 gap-6 lg:gap-3 list-style-none">
            <li v-for="(item, key) in filteredjobs" :key="key" class="flex-grow lg:w-5/12 w-full cursor-pointer relative group sm:min-h-[135px] bg-extended-noise bg-cover bg-center rounded-[16px]">
                <div class="p-3 w-full h-full relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2">
                    <div class="w-8/12">
                        <h3 class="font-[200] max-sm:text-[14px] rounded-[16px] text-accent1 border-b-accent1 pb-2 mb-3">{{ item.type }}</h3>
                        <h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[400] mb-3">{{ item.title }}</h2>
                        <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.location }}</p>
                    </div>
                    <RouterLink :id="'go-to-' + item.title + '-page'" :aria-label="'apply for' + item.title" :to="item.to" :target="item.target" class="cursor-pointer px-4 py-3 mt-auto mb-0 w-fit block max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125">Apply</RouterLink>
                </div>
            </li>
        </ul>
    </section>
</template>

