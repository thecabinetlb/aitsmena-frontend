<script setup>
import Hero from '../components/Hero.vue'
import Contact from '../components/Contact.vue'
import OneImageTextFlex from '../components/OneImageTextFlex.vue'

import Partners from '../components/Partners.vue'
import avevaicons from '../components/icons/aveva.vue'
import ic2icons from '../components/icons/ic2.vue'

import IndustriesCarousel from '../components/IndustriesCarousel.vue'
import industriesiconF from '/images/industries/F&B.svg'
import industriesiconM from '/images/industries/manufactoring.svg'
import industriesiconC from '/images/industries/City.svg'
// import industriesiconG from '/images/industries/Gas.svg'
import industriesiconU from '/images/industries/utilities.svg'
import industriesiconE from '/images/industries/energy.svg'
import industriesiconMi from '/images/industries/Mining.svg'

import ImageTextFlexFilters from '../components/ImageTextFlexFilters.vue'
import improvement from '/images/insidepages/about/csr/improvement_v1.webp'
import employee from '/images/insidepages/about/csr/employee_v1.webp'
import gender from '/images/insidepages/about/csr/gender_v1.webp'

const industries = [
{ id: 1, title: 'Smart Cities', icon:industriesiconC },
{ id: 2, title: 'Food and Beverage', icon:industriesiconF },
{ id: 3, title: 'Manufacturing', icon:industriesiconM },
// { id: 4, title: 'Oil and Gas', icon:industriesiconG },
{ id: 4, title: 'Energy', icon:industriesiconE },
{ id: 5, title: 'Water and Wasterwater', icon:industriesiconU },
{ id: 6, title: 'Metal, Mining, and Minerals', icon:industriesiconMi },
];

const missionandvission =
  {
    title: "Leading the Region’s Industrial Digital Revolution",
    description: "We are leading the industrial software innovation in the Gulf. By delivering comprehensive software solutions we are enhancing operational efficiency, supporting sustainability, and providing a competitive advantage in an ever-evolving market.",
    image: "/images/hero/missionandvision/vision_v1.webp",
}
const partners = [
    { id: 1, title: 'AVEVA Select Gulf', logo: avevaicons, to:'https://gulf.avevaselect.com', description:'AVEVA Select Gulf is a business line under AITS. It is dedicated to the distribution and support of AVEVA’s software portfolio. It manages licensing, offers expert support, and collaborates with system integrators to deliver top-tier software solutions. ' },
    { id: 2, title: 'IC2', logo: ic2icons, description:'IC2 is another AITS business line. It is dedicated to driving industrial transformation in the Smart Cities and Food and Beverage/CPG sectors.  ' },
];
const csr = [
  {
    id: 1,
    image:gender,
    title: 'Human-centered',
    description: "Our dedication to ethical practices, open communication, and equal opportunity has created an inclusive environment where every voice is valued. We are committed to delivering effective solutions that align with our core values and support a diverse and equitable future for ourselves, our clients, and our partners.",
  },
  {
    id: 2,
    image:employee,
    title: 'Passionate and Driven',
    description: "Our purpose-driven approach ensures that every employee understands their impact and contributes meaningfully to our shared goals. Whether it’s serving our customers, driving innovation, or making a positive impact in the world, purpose guides our actions and inspires excellence."
  },
  {
    id: 3,
    image:improvement,
    title: 'Collaborative Spirit',
    description: "We strive to promote an environment where everyone plays an active role in identifying and solving problems and proposing improvements. Our common mindsets and attitudes are detected throughout the organization by putting values and principles into practice."
  }
];
const valuesandcommitments =
{
  title: "Innovation with Integrity and Passion",
  description: "By placing a strong emphasis on human-centered design, customer experience, and transparency, we strive to deliver solutions that meet industry specific needs while building trust and driving progress. Our dedication to innovation and integrity ensures that we approach every challenge with determination and passion, setting new standards for excellence.",
  image: "/images/hero/values/values_v1.webp",
}  
  
</script>
<template>
  <head>
    <title>AITS - Industrial Software Solutions And Digital Services Tailored To Your Business</title>
    <meta name="description" content="Browse through our available job openings to join the team and make an impact at AITS! We welcome diverse experts from all parts of the world."/>
  </head>
  <Hero/>
  <OneImageTextFlex :item="missionandvission"/>  
  <IndustriesCarousel :data="industries"
  v-motion
  :initial="{
    opacity: 0,
    y: 100,
  }"
  :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: '100',
      delay: 100,
    },
  }"/>
  <Partners :data="partners"
  v-motion
  :initial="{
    opacity: 0,
    y: 100,
  }"
  :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: '100',
      delay: 100,
    },
  }"/>
  <ImageTextFlexFilters sectiontitle="Our culture" :data="csr"
  sectiondescription="This planet has already been through enough. We are committed to making a positive impact on society and the environment. Our commitment to sustainability is guided by three core values:"/>
  <OneImageTextFlex :item="valuesandcommitments" reverse
  v-motion
  :initial="{
    opacity: 0,
    y: 100,
  }"
  :visibleOnce="{
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: '100',
      delay: 100,
    },
  }"/>
  <Contact sectiondescription="We empower Gulf-based companies to become future-ready,  more competitive, and sustainable at every stage of their operational lifecycle." sectioncta="Speak With an Expert"/>
</template>