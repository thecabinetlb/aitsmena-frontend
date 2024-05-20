<script setup>
import banner from '/images/banners/about.webp'
import InnerHero from '../components/InnerHero.vue';
import Partners from '../components/Partners.vue';
import InsideBody from '../components/InsideBody.vue';
import ImageTextFlexFilters from '../components/ImageTextFlexFilters.vue';
// import teammember1 from '/images/insidepages/about/team/teammember1.webp'
// import teammember2 from '/images/insidepages/about/team/teammember2.webp'
// import teammember3 from '/images/insidepages/about/team/teammember3.webp'
import ImagesFlex from '../components/ImagesFlex.vue';
import ic2 from '/images/testimonies/partners/ic2.webp'
import aveva from '/images/testimonies/partners/aveva.webp'
import improvement from '/images/insidepages/about/csr/improvement.webp'
import gender from '/images/insidepages/about/csr/gender.webp'
import employee from '/images/insidepages/about/csr/employee.webp'
const csr = [
  {
    id: 1,
    image:gender,
    title: 'Gender Equality',
    description: "Inclusivity within our workplace culture is crucial, where everyone, regardless of gender, has equal opportunities for growth and success. Gender equality is promoted through:",
    initiatives: [
      'Diverse Workforce',
      'Equal Opportunities',
      'Supportive Policies'
    ]
  },
  {
    id: 2,
    image:employee,
    title: 'Employee First',
    description: "When they feel good, we feel good. AITS employees are our greatest asset and their well-being is our top priority. A supportive work environment makes them feel valued, empowered, and motivated to excel. Our employee-first approach includes:",
    initiatives: [
      'Health and Safety',
      'Professional Development',
      'Employee Engagement'
    ]
  },
  {
    id: 3,
    image:improvement,
    title: 'Continuous Improvement',
    description: "Practice makes perfect. We strive to continuously improve in all aspects of our business operations to attain excellence in performance, efficiency, and sustainability. This requires:",
    initiatives: [
      'Quality Management',
      'Innovation',
      'Sustainability'
    ]
  }
];
// const team = [
//   { 
//     name: 'Emmy Rosum',
//     jobtitle: 'Co-founder and CEO',
//     image: teammember1
//   },
//   {
//     name: 'Sarah Johnson',
//     jobtitle: 'Marketing Manager',
//     image: teammember2
//   },
//   {
//     name: 'Michael Smith',
//     jobtitle: 'Sales Director',
//     image: teammember3
//   }
// ];
const partners = [
    { id: 1, title: 'AVEVA Select Gulf', logo: aveva },
    { id: 2, title: 'IC2', logo: ic2 },
];
</script>
<template>
    <head>
      <title>AITS - About Us</title>
      <meta name="description" content="Powered by IBI, AITS plays a pivotal role in driving positive transformation across various industrial sectors. Explore our added value to diverse industries."/>
    </head>        
    <InnerHero :pagebanner="banner" isAbout="true" 
      pagedescription="Do you need a trusted software company and strategic ally in navigating the complex landscape of industrial automation? You’re in the right place. Powered by IBI, AITS plays a pivotal role in driving positive transformation across various industrial sectors. Explore our added value to diverse industries, compelling employee propositions, and available job vacancies."/>
      <section class="relative">
          <Partners sectionid="sub-companies" sectiontitle="Mother Company of Two" sectiondescription="AITS takes pride in holding two distinguished sub-companies: AVEVA Select Gulf and IC2. Together, we offer a comprehensive suite of solutions designed to address the diverse challenges faced by today's industries." :data="partners"/>
          <ImageTextFlexFilters sectiontitle="Because We Care" :data="csr"
          sectiondescription="This planet has already been through enough. We are committed to making a positive impact on society and the environment. Our CSR initiatives are guided by three core values:"/>
          <!-- <ImagesFlex sectiontitle="Meet The Team" :data="team"/> -->
          <InsideBody/>
      </section>
</template>