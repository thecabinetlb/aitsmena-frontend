<script setup>
import Hero from '../components/Hero.vue'
import Contact from '../components/Contact.vue'
import OneImageTextFlex from '../components/OneImageTextFlex.vue'
import { useSeoMeta } from '@unhead/vue'

import Partners from '../components/Partners.vue'
import aveva from '../components/icons/aveva.vue'
import ic2 from '../components/icons/ic2.vue'

import IndustriesCarousel from '../components/IndustriesCarousel.vue'
import industriesiconF from '/images/industries/F&B.svg'
import industriesiconM from '/images/industries/manufactoring.svg'
import industriesiconC from '/images/industries/City.svg'
import industriesiconG from '/images/industries/Gas.svg'
import industriesiconU from '/images/industries/utilities.svg'
import industriesiconE from '/images/industries/energy.svg'
import industriesiconMi from '/images/industries/Mining.svg'

import ImageTextFlexFilters from '../components/ImageTextFlexFilters.vue'
import improvement from '/images/insidepages/about/csr/improvement_v1.webp'
import employee from '/images/insidepages/about/csr/employee_v1.webp'
import gender from '/images/insidepages/about/csr/gender_v1.webp'

const title = 'AITS - Industrial Software Solutions And Digital Services Tailored To Your Business';
const description = 'AITS transforms businesses like yours through innovative tech solutions tailored to your unique needs. Book your free consultation call to get started!';
const ogImage = 'https://aitsmena-test.netlify.app/aits-open-graph_v1.jpg';
const ogUrl = 'https://aitsmena-test.netlify.app'; // Replace with your website URL 

useSeoMeta({ 
  title,
  description,
  ogTitle: title, // Consider using the same title for consistency
  ogDescription: description,
  ogImage,
  ogUrl,
  ogType: 'website', // Recommended for most website content
  twitterTitle: title, // Consider using the same title for consistency
  twitterDescription: description,
  twitterImage: ogImage, // Assuming the same image is suitable for Twitter
  twitterCard: 'summary',
})
// useHead({
//   title,
//   meta: [
//     {
//       name: 'description',
//       content: description,
//     },
//     {
//       property: 'og:title',
//       content: title,
//     },
//     {
//       property: 'og:image',
//       content: ogImage,
//     },
//     {
//       property: 'og:description',
//       content: description,
//     },
//     {
//       property: 'og:url',
//       content: ogUrl,
//     },
//   ],
// });

const industries = [
{ id: 1, title: 'Smart Cities', icon:industriesiconC },
{ id: 2, title: 'Food & Beverage', icon:industriesiconF },
{ id: 3, title: 'Manufacturing', icon:industriesiconM },
{ id: 4, title: 'Oil & Gas', icon:industriesiconG },
{ id: 5, title: 'Energy', icon:industriesiconE },
{ id: 6, title: 'Utilities', icon:industriesiconU },
{ id: 7, title: 'Metal, Mining, & Minerals', icon:industriesiconMi },
];

const missionandvission =
  {
    title: "Leading the Region’s Industrial Digital Revolution",
    description: "AITS aims to be the leading industrial software innovator in the Gulf region. We deliver comprehensive software solutions that enhance operational efficiency, support sustainability, and provide a competitive advantage in an evolving market.",
    image: "/images/hero/missionandvision/vision_v1.webp",
}
const partners = [
    { id: 1, title: 'AVEVA Select Gulf', to:'https://gulf.avevaselect.com', logo: aveva, description:'AVEVA Select Gulf is dedicated to the distribution and support of AVEVA’s software portfolio. It manages licensing, offers expert support, and collaborates with system integrators to deliver top-tier software solutions. ' },
    { id: 2, title: 'IC2', logo: ic2, description:'IC2 is dedicated to driving industrial transformation in the Smart Cities and Food & Beverage/CPG sectors.  ' },
];
const csr = [
  {
    id: 1,
    image:gender,
    title: 'Human-centered',
    description: "Our dedication to ethical practices, open communication, and equal opportunity has created an inclusive environment where every voice is valued. We are committed to delivering effective solutions that align with our core values and support a diverse and equitable future for ourselves, our clients, and our partners.",
    cta: 'Contact Our Experts'
  },
  {
    id: 2,
    image:employee,
    title: 'Passionate & Driven',
    description: "Our purpose-driven approach ensures that every employee understands their impact and contributes meaningfully to our shared goals. Whether it’s serving our customers, driving innovation, or making a positive impact in the world, purpose guides our actions and inspires excellence. Our attractive salary packages include performance-based annual increases, bonuses, and comprehensive benefits like health insurance, annual air tickets, and various paid leaves. Access training, professional development opportunities, and leadership programs for career growth, and enjoy flexible hours and remote work options to support work-life balance."
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
  description: "By placing a strong emphasis on human-centered design, customer experience, and transparency, we strive to deliver solutions that meet industry specific needs while building trust and driving progress. Our dedication to innovation and integrity ensures that we approach every challenge with determination and passion, setting new standards for excellence in the industrial sector.",
  image: "/images/hero/values/values_v1.webp",
}  
  
</script>
<template>
  <Hero/>
  <IndustriesCarousel :data="industries"/>
  <OneImageTextFlex :item="missionandvission" 
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
  <Partners :data="partners"/>
  <ImageTextFlexFilters sectiontitle="Our culture" :data="csr"
  sectiondescription="This planet has already been through enough. We are committed to making a positive impact on society and the environment. Our commitment to sustainability is guided by three core values:"/>
  <OneImageTextFlex  sectiontitle="Innovating for a Sustainable Future" :item="valuesandcommitments" reverse hyphen
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
  <Contact/>
</template>
