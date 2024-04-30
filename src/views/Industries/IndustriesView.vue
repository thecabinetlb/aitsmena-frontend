<script setup>
import banner from '/images/banners/industries.webp'
import customerlogo from '/images/insidepages/industries/successstories/customerlogo.webp'
import industriesiconF from '/images/industries/F&B.svg'
import industriesiconW from '/images/industries/Water.svg'
import industriesiconC from '/images/industries/City.svg'
import industriesiconG from '/images/industries/Gas.svg'
import industriesiconP from '/images/industries/Power.svg'
import industriesiconCh from '/images/industries/Chemicals.svg'
import industriesiconM from '/images/industries/Mining.svg'
import industriesiconL from '/images/industries/LifeScience.svg'
import InnerHero from '../../components/InnerHero.vue';
import IndustriesList from '../../components/IndustriesList.vue'
import Testimonies from '../../components/Testimonies.vue'
import PostsGrid from '@/components/PostsGrid.vue'
const industries = [
{ id: 1, title: 'Food & Beverage', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconF },
{ id: 2, title: 'Water & Wastewater', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconW },
{ id: 3, title: 'Smart City', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconC },
{ id: 4, title: 'Oil & Gas', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconG },
{ id: 5, title: 'Power Utilities', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconP },
{ id: 6, title: 'Chemicals', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconCh },
{ id: 7, title: 'Metals Mining Minerals', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank',  icon:industriesiconM },
{ id: 8, title: 'Life Science', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', to:'/', target:'_blank', icon:industriesiconL },
];
const successStories = [
  // Food & Beverage
  {
    id: 1,
    category: "Food & Beverage",
    title: "Reducing Waste and Increasing Efficiency in Food Processing",
    logo: customerlogo,
    summary: "Learn how a food processing company implemented digital solutions to optimize their production processes, resulting in significant waste reduction and improved efficiency.",
    to: "https://example.com/success/food-processing",
    target: "_blank",
  },
  // Water & Wastewater
  {
    id: 2,
    category: "Water & Wastewater",
    title: "Improving Water Treatment Efficiency with IoT Sensors",
    logo: customerlogo,
    summary: "Discover how a wastewater treatment plant utilized IoT sensors to monitor water quality in real-time, leading to more efficient treatment processes and reduced environmental impact.",
    to: "https://example.com/success/water-treatment",
    target: "_blank",
  },
  // Smart Cities
  {
    id: 3,
    category: "Smart Cities",
    title: "Transforming Urban Mobility with Smart Transportation Systems",
    logo: customerlogo,
    summary: "Explore how a city implemented smart transportation systems, including traffic monitoring and dynamic routing, to alleviate congestion and improve overall mobility for residents.",
    to: "https://example.com/success/smart-transportation",
    target: "_blank",
  },
  // Oil & Gas
  {
    id: 4,
    category: "Oil & Gas",
    title: "Enhancing Safety and Efficiency in Offshore Drilling Operations",
    logo: customerlogo,
    summary: "Learn how an oil and gas company utilized advanced technology and automation to improve safety standards and increase efficiency in offshore drilling operations.",
    to: "https://example.com/success/offshore-drilling",
    target: "_blank",
  },
  // Chemicals
  // {
  //   id: 5,
  //   category: "Chemicals",
  //   title: "Optimizing Chemical Manufacturing Processes with Data Analytics",
  //   logo: customerlogo,
  //   summary: "Discover how a chemical manufacturing plant implemented data analytics tools to optimize production processes, resulting in reduced costs and improved product quality.",
  //   to: "https://example.com/success/chemical-manufacturing",
  //   target: "_blank",
  // },
  // Power & Utilities
  // {
  //   id: 6,
  //   category: "Power & Utilities",
  //   title: "Transitioning to Renewable Energy Sources for Sustainable Power Generation",
  //   logo: customerlogo,
  //   summary: "Explore how a utility company transitioned from traditional fossil fuels to renewable energy sources, such as solar and wind, to reduce carbon emissions and promote sustainability.",
  //   to: "https://example.com/success/renewable-energy",
  //   target: "_blank",
  // },
  // Life Science
  // {
  //   id: 7,
  //   category: "Life Science",
  //   title: "Accelerating Drug Discovery with AI and Machine Learning",
  //   summary: "Learn how a pharmaceutical company utilized AI and machine learning algorithms to analyze vast amounts of data and accelerate the drug discovery process, leading to the development of life-saving medications.",
  //   to: "https://example.com/success/drug-discovery",
  //   target: "_blank",
  // },
  // Metals, Mining, & Minerals
  // {
  //   id: 8,
  //   category: "Metals, Mining, & Minerals",
  //   title: "Increasing Efficiency and Safety in Mining Operations",
  //   summary: "Discover how a mining company implemented autonomous vehicles and remote monitoring systems to increase operational efficiency and ensure the safety of workers in mining operations.",
  //   to: "https://example.com/success/mining-operations",
  //   target: "_blank",
  // }
];
</script>
<template>
    <main>
        <InnerHero :pagebanner="banner" pagename="Industries" pagedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."/>
        
        <section class="relative overflow-hidden before:absolute before:inset-0 before:w-full before:h-full before:max-sm:h-11/12 before:transform before:bg-center before:bg-cover before:z-[-1] before:sm:bg-colors before:bg-mobilecolors">
            <IndustriesList :industries="industries"/>
            <Testimonies/>
            <PostsGrid sectiontitle="Success Stories" sectiondescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip." :data='successStories'/>
        </section>
 
    </main>
</template>