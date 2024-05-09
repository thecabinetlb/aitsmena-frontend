<script setup>
import banner from '/images/banners/industries.webp'
import industriesiconF from '/images/industries/F&B.svg'
import industriesiconW from '/images/industries/Water.svg'
import industriesiconC from '/images/industries/City.svg'
import industriesiconG from '/images/industries/Gas.svg'
import industriesiconP from '/images/industries/Power.svg'
import industriesiconCh from '/images/industries/Chemicals.svg'
import industriesiconM from '/images/industries/Mining.svg'
import industriesiconL from '/images/industries/LifeScience.svg'
import InnerHero from '../../components/InnerHero.vue';
import IndustriesGrid from '../../components/IndustriesGrid.vue'
import Testimonials from '../../components/Testimonials.vue'
import InsideBody from '../../components/InsideBody.vue'
import PostsGrid from '../../components/PostsGrid.vue'
import { getSuccessStories } from '../../helpers/api'
const industries = [
{ id: 1, title: 'Food & Beverages', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconF },
{ id: 2, title: 'Water & Wastewater', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconW },
{ id: 3, title: 'Smart Cities', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconC },
{ id: 4, title: 'Oil & Gas', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconG },
{ id: 5, title: 'Power Utilities', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconP },
{ id: 6, title: 'Chemicals', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconCh },
{ id: 7, title: 'Metals Mining Minerals', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank',  icon:industriesiconM },
{ id: 8, title: 'Life Science', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconL },
];
const successStories = getSuccessStories()
console.log(successStories)
</script>
<template>
    <main>
        <InnerHero sectionid="overview" isIndustries :pagebanner="banner" pagename="Industries" pagedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."/>
        
        <section class="relative">
            <IndustriesGrid :industries="industries"/>
            <Testimonials />
            <PostsGrid sectionid="success-stories" sectiontitle="Success Stories" sectiondescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip." :data='successStories'/>
            <InsideBody/>
        </section>
 
    </main>
</template>