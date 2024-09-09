<script setup>
import banner from '/images/banners/about.webp'
import InnerHero from '../components/InnerHero.vue';
import Partners from '../components/Partners.vue';
import InsideBody from '../components/InsideBody.vue';
import ImageTextFlexFilters from '../components/ImageTextFlexFilters.vue';
// import teammember1 from '/images/insidepages/about/team/teammember1.webp'
// import teammember2 from '/images/insidepages/about/team/teammember2.webp'
// import teammember3 from '/images/insidepages/about/team/teammember3.webp'
import ic2 from '/images/testimonies/partners/ic2.webp'
import aveva from '/images/testimonies/partners/aveva.webp'
import improvement from '/images/insidepages/about/csr/improvement_v1.webp'
import employee from '/images/insidepages/about/csr/employee_v1.webp'
import gender from '/images/insidepages/about/csr/gender_v1.webp'

const csr = [
  {
    id: 1,
    image:gender,
    title: 'Commitment to Integrity, Diversity, and Transparency',
    description: "Our dedication to ethical practices, open communication, and equal opportunity fosters an inclusive environment where every voice is valued. We are committed to delivering effective solutions that align with our core values and support a diverse and equitable future for ourselves, our clients, and our partners.",
    list: [
      "Human-centered",
      "Passionate & Driven",
      "Collaborative Spirit"
    ],
    cta: 'Work with Us'
  },
  {
    id: 2,
    image:employee,
    title: 'Our People First',
    description: "Our purpose-driven approach ensures that every employee understands their impact and contributes meaningfully to our shared goals. Whether it’s serving our customers, driving innovation, or making a positive impact in the world, purpose guides our actions and inspires excellence. Our attractive salary packages include performance-based annual increases, bonuses, and comprehensive benefits like health insurance, annual air tickets, and various paid leaves. Access training, professional development opportunities, and leadership programs for career growth, and enjoy flexible hours and remote work options to support work-life balance."
  },
  {
    id: 3,
    image:improvement,
    title: 'Continuous Improvement',
    description: "We strive to promote an environment where everyone plays an active role in identifying and solving problems and proposing improvements. Our common mindsets and attitudes are detected throughout the organization by putting values and principles into practice."
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
    <InnerHero :pagebanner="banner" pagetitle="Shaping the Industrial Software Future " hyphen
      pagedescription="AITS serves as the central hub for software innovation within IBI Holding - an investment company, operating with a distinct focus on developing and optimizing industrial software solutions."
      pagedescription1="AITS aims to lead the digital transformation journey across various industries in the GCC, ensuring they achieve operational excellence and sustainability throughout their entire operational lifecycle."
      pagedescription2="AITS is dedicated to identifying and fulfilling the industrial sector’s software needs. We focus on creating value for our partners, customers, and the company by continuously delivering innovation and excellence."/>
      <section class="relative">
          <Partners sectionid="sub-companies" sectiondescription="AITS is leading two dynamic business divisions: AVEVA Select Gulf and IC2. Each one of these divisions plays a crucial role in our mission to advance industrial software solutions." :data="partners"/>
          <ImageTextFlexFilters sectiontitle="Culture of Innovation and Excellence" :data="csr"
          sectiondescription="This planet has already been through enough. We are committed to making a positive impact on society and the environment. Our commitment to sustainability is guided by three core values:"/>
          <!-- <ImagesFlex sectiontitle="Meet The Team" :data="team"/> -->
          <InsideBody/>
      </section>
</template>