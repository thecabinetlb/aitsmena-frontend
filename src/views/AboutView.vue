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
import improvement from '/images/insidepages/about/csr/improvement_v1.webp'
import gender from '/images/insidepages/about/csr/gender_v1.webp'
import employee from '/images/insidepages/about/csr/employee.webp'
const csr = [
  {
    id: 1,
    image:gender,
    title: 'Diversity & Inclusion',
    description: "At AITS, we’re committed to creating an environment where employees thrive both personally and professionally. Our inclusive culture celebrates diversity and collaboration, valuing every employee. We’re committed to aligning our mission and values with the work we do. Inclusivity within our workplace culture is crucial, where everyone, regardless of gender, age, or race has equal opportunities for growth and success. Equality is promoted through a diverse workforce, equal opportunities, and supportive policies.",
  },
  {
    id: 2,
    image:employee,
    title: 'Our People First',
    description: "Our purpose-driven approach ensures that every employee understands their impact and contributes meaningfully to our shared goals. Whether it’s serving our customers, driving innovation, or making a positive impact in the world, purpose guides our actions and inspires excellence. Our attractive salary packages include performance-based annual increases and bonuses. Enjoy comprehensive benefits like health insurance, annual air tickets, and various paid leaves. Access training, professional development opportunities, and leadership programs for career growth, and enjoy flexible hours and remote work options to support work-life balance."
  },
  {
    id: 3,
    image:improvement,
    title: 'Continuous Improvement',
    description: "Our purpose-driven approach ensures that every employee understands their impact and contributes meaningfully to our shared goals. Whether it’s serving our customers, driving innovation, or making a positive impact in the world, purpose guides our actions and inspires excellence. Our attractive salary packages include performance-based annual increases, bonuses, and comprehensive benefits like health insurance, annual air tickets, and various paid leaves. Access training, professional development opportunities, and leadership programs for career growth, and enjoy flexible hours and remote work options to support work-life balance."
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
      pagedescription="Do you need a trusted software company and strategic ally in navigating the complex landscape of industrial automation? You’re in the right place. AITS is powered by IBI Holding, an investment company that fuels innovation in businesses across various industries and actively seeks partnerships with companies and individuals who are driving transformation in today’s dynamic market. AITS plays a pivotal role in driving positive transformation across various industrial sectors. Explore our added value to diverse industries, compelling employee propositions, and available job vacancies."/>
      <section class="relative">
          <Partners sectionid="sub-companies" sectiontitle="Mother Company of Two" sectiondescription="Our portfolio holds two distinguished business lines: AVEVA Select Gulf and IC2. Together, we offer a comprehensive suite of solutions designed to address the diverse challenges faced by today's industries." :data="partners"/>
          <ImageTextFlexFilters sectiontitle="Our Culture" :data="csr"
          sectiondescription="This planet has already been through enough. We are committed to making a positive impact on society and the environment. Our commitment to sustainability is guided by three core values:"/>
          <!-- <ImagesFlex sectiontitle="Meet The Team" :data="team"/> -->
          <InsideBody/>
      </section>
</template>