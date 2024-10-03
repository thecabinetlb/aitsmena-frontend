<script setup>
import banner from '/images/banners/industries.webp'
import industriesiconF from '/images/industries/F&B.svg'
import industriesiconM from '/images/industries/manufactoring.svg'
import industriesiconC from '/images/industries/City.svg'
// import industriesiconG from '/images/industries/Gas.svg'
import industriesiconU from '/images/industries/utilities.svg'
import industriesiconE from '/images/industries/energy.svg'
import industriesiconMi from '/images/industries/Mining.svg'
import InnerHero from '../components/InnerHero.vue';
import IndustriesInsideCarousel from '../components/IndustriesInsideCarousel.vue'
import InsideBody from '../components/InsideBody.vue'

const industries = [
{ id: 1, title: 'Smart Cities', icon:industriesiconC },
{ id: 2, title: 'Food and Beverage', icon:industriesiconF },
{ id: 3, title: 'Manufacturing', icon:industriesiconM },
// { id: 4, title: 'Oil and Gas', icon:industriesiconG },
{ id: 4, title: 'Energy', icon:industriesiconE },
{ id: 5, title: 'Water and Wasterwater', icon:industriesiconU },
{ id: 6, title: 'Metal, Mining, and Minerals', icon:industriesiconMi },
];

</script>
<template>
    <head>
      <title>Industries We Serve | AITS - Driving Digital Transformation in Energy, Water, Smart Cities, F&B, and More.</title>
      <meta name="description" content="AITS delivers tailored solutions across key industries Energy, Water, Smart Cities, Metals & Mining, F&B, and Manufacturing. Our innovations boost efficiency, sustainability, and compliance while driving digital transformation to meet today's global challenges."/>
    </head>        
    <InnerHero :pagebanner="banner" pagetitle="Innovative Solutions for Every Industry"
        pagedescription="Whether you’re in an emerging sector or a traditional industry, AITS can help you enhance operational efficiency and future-proof your business with the most innovative industrial software solutions."/>
        <section class="relative">
            <IndustriesInsideCarousel sectiontitle="Industries We Serve" :data="industries"/>
            <!-- <Testimonials />
            <PostsGrid sectionid="success-stories" sectiontitle="Success Stories" sectiondescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip." :data='successStories'/> -->
            <InsideBody/>
        </section>
</template>