<script setup>
import banner from '/images/banners/about.webp'
import InnerHero from '../components/InnerHero.vue';
import Partners_V1 from '../components/Partners_V1.vue';
import InsideBody from '../components/InsideBody.vue';
import ImageTextFlexFilters from '../components/ImageTextFlexFilters.vue';
import teammember1 from '/images/insidepages/about/team/teammember1.webp'
import teammember2 from '/images/insidepages/about/team/teammember2.webp'
import teammember3 from '/images/insidepages/about/team/teammember3.webp'
import ImagesFlex from '../components/ImagesFlex.vue';
import ic2 from '/images/testimonies/partners/ic2.webp'
import aveva from '/images/testimonies/partners/aveva.webp'

const team = [
  { 
    name: 'Emmy Rosum',
    jobtitle: 'Co-founder and CEO',
    image: teammember1
  },
  {
    name: 'Sarah Johnson',
    jobtitle: 'Marketing Manager',
    image: teammember2
  },
  {
    name: 'Michael Smith',
    jobtitle: 'Sales Director',
    image: teammember3
  }
];
const partners = [
    { id: 1, title: 'AVEVA Select Gulf', logo: aveva },
    { id: 2, title: 'IC2', logo: ic2 },
];


</script>
<template>
    <main>
        <InnerHero :pagebanner="banner" isAbout="true" pagetitle="Company Overview"
        pagedescription="At AITS we are not only your trusted software company, we are also your strategic ally in
        navigating the complex landscape of industrial automation. As a subsidiary within the IBi
        family, we play a pivotal role in driving positive transformation across various industrial
        sectors. Explore the essential values we contribute to diverse industries, our compelling
        employee proposition, and explore current career opportunities at AITS"/>

        <section class="relative">
            <Partners_V1 sectionid="sub-companies" sectiondescription="As part of our family, we take pride in hosting two distinguished sub-companies: AVEVA
            Select Gulf and IC2. Together, we offer a comprehensive suite of solutions designed to
            address the diverse challenges faced by today's industries." :data="partners"/>
            <ImageTextFlexFilters sectiontitle="Corporate Social Responsability (CSR)" sectiondescription="We are committed to making a positive impact on society and the environment. Our CSR
            initiatives are guided by three core verticals:"/>
            <!-- <ImagesFlex sectiontitle="Meet The Team" :data="team"/> -->
            <InsideBody/>
        </section>
    </main>
</template>