<script setup>
import banner from '/images/banners/careers.webp'
import JobsList from '../components/JobsList.vue';
import InnerHero from '../components/InnerHero.vue';
import InsideBody from '../components/InsideBody.vue';
import BenifitsFlexWithBlur from '@/components/BenifitsFlexWithBlur.vue';
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
const benefits = [
  { 
    id: 1, 
    title: 'Health Insurance', 
    description: 'Comprehensive health insurance coverage for employees and their dependents, including medical, dental, and vision benefits.'
  },
  { 
    id: 2, 
    title: 'Competitive Compensation', 
    description: 'Competitive salaries and performance-based bonuses or incentives to reward employees for their contributions and achievements.'
  },
  { 
    id: 3, 
    title: 'Professional Development', 
    description: 'Support for ongoing learning and skill development through training programs, workshops, conferences, and tuition reimbursement.'
  },
  { 
    id: 4, 
    title: 'Company Events and Perks', 
    description: 'Regular social events, team-building activities, and employee perks such as catered lunches, snacks, and recreational facilities to foster a positive and inclusive company culture.'
  },
  // { 
  //   id: 5, 
  //   title: 'Parental Leave', 
  //   description: 'Paid parental leave policies for new parents, including maternity, paternity, and adoption leave, to support employees during significant life transitions.'
  // },
  // { 
  //   id: 6, 
  //   title: 'Employee Recognition Programs', 
  //   description: 'Recognition programs to acknowledge and reward employees for their contributions, milestones, and achievements, fostering a culture of appreciation and recognition.'
  // },
  // { 
  //   id: 7, 
  //   title: 'Employee Referral Program', 
  //   description: 'Incentives for employees who refer qualified candidates to open positions within the company, helping to attract top talent through employee networks.'
  // }
];
</script>
<template>
  <main>
      <InnerHero :pagebanner="banner" pagename="careers" pagedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."/>
      
      <section class="relative">
        <JobsList sectiontitle="Available Jobs and Internships" sectiondescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip." :jobsorinternships='jobs'/>
        <BenifitsFlexWithBlur sectiontitle="What  Our Employees Get" sectiondescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip." :data='benefits'/>
        <InsideBody/>
      </section>    
    </main>
</template>