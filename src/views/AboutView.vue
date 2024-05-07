<script setup>
import banner from '/images/banners/about.webp'
import InnerHero from '../components/InnerHero.vue';
import Partners from '../components/Partners.vue';
import InsideBody from '../components/InsideBody.vue';
import ImageTextFlex from '../components/ImageTextFlex.vue';
import teammember1 from '/images/insidepages/about/team/teammember1.webp'
import teammember2 from '/images/insidepages/about/team/teammember2.webp'
import teammember3 from '/images/insidepages/about/team/teammember3.webp'
import ImagesFlex from '../components/ImagesFlex.vue';

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
// const navlinks = [
// { id: 1, name: 'Home', to: '/' },
// { id: 2, name: 'About', to: '/about' },
// ];
const csr = [
  { id: 1, title: 'Company Social Responsability', description: 'Explore how AITS combines production with sustainability and preservation. By providing users with unique and easily accessible software solutions, AITS utilizes manufacturing plants’ various faculties and divisions under a common software that can be operated anywhere. With this approach, AITS  is one step closer to becoming the leading software innovator in the Gulf region.', image:'/images/insidepages/about/plant.webp' },
];
</script>
<template>
    <main>
        <InnerHero :pagebanner="banner" isAbout="true" pagedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."/>

        <section class="relative">
            <Partners/>
            <ImageTextFlex sectiontitle="Company Social Responsability" :data="csr"/>
            <ImagesFlex sectiontitle="Meet The Team" :data="team"/>
            <InsideBody/>
        </section>

    </main>
</template>