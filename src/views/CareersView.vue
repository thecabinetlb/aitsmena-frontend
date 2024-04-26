<script setup>
import JobsList from '@/components/JobsList.vue';
import InnerHero from '../components/InnerHero.vue';
const jobs = [
  { id: 1, title: 'Software Engineer', type: 'Full-time', to: 'https://example.com/job1', target: '_blank', location: 'San Francisco, CA' },
  { id: 2, title: 'Data Analyst', type: 'Contract', to: 'https://example.com/job2', target: '_blank', location: 'New York, NY' },
  { id: 3, title: 'Marketing Specialist', type: 'Part-time', to: 'https://example.com/job3', target: '_blank', location: 'Los Angeles, CA' },
  { id: 4, title: 'Graphic Designer', type: 'Freelance', to: 'https://example.com/job4', target: '_blank', location: 'Chicago, IL' },
  { id: 5, title: 'Project Manager', type: 'Full-time', to: 'https://example.com/job5', target: '_blank', location: 'Seattle, WA' },
  { id: 6, title: 'HR Coordinator', type: 'Internship', to: 'https://example.com/job6', target: '_blank', location: 'Boston, MA' },
  { id: 7, title: 'Financial Analyst', type: 'Full-time', to: 'https://example.com/job7', target: '_blank', location: 'Austin, TX' },
  { id: 8, title: 'Customer Service Representative', type: 'Part-time', to: 'https://example.com/job8', target: '_blank', location: 'Denver, CO' },
];
</script>
<template>
    <main class="h-full">
        <InnerHero pagename="careers" pagedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."/>
        <JobsList sectiontitle="Jobs" sectiondescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip." :jobsorinternships='jobs'/>
    </main>
</template>