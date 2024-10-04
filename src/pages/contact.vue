<script setup>
import banner from '/images/banners/contact.webp'
import InnerHero from '../components/InnerHero.vue';
import InsideBody from '../components/InsideBody.vue';
import TextGrid from '../components/TextGrid.vue';
import ContactForm from '../components/ContactForm.vue';

const locations = [
{
    id: 1,
    address: 'UAE, Dubai, Dubai Digital Park, A6 Building, 401 Office',
    phone: '00971043444901',
    email: 'info@aitsmena.com',
  },
  // {
  //   id: 2,
  //   title: 'Dubai Digital Park',
  //   address: 'A6 building, 401 Office Silicon Oasis, Dubai, UAE',
  //   phone: '+971 4 344 4901',
  //   fax: '+971 4 344 4902',
  //   poBox: 'PO Box: 342112',
  //   email: 'info@aitsmena.com',
  //   website: 'https://aitsmena.com/'
  // },
  // {
  //   id:3,
  //   address: 'Sulimaniyah Office Building, Office no.214, 3132 Prince Sultan Bin Abdulaziz Road, Sulimaniyah, Riyad, Kingdom of Saudi Arabia.',
  //   phone: '+966 114314440',
  //   fax: '+966 114314440',
  //   email: 'info@aitsmena.com',
  //   website: 'https://aitsmena.com/'  
  // }  
]


</script>

<template>
    <head>
      <title>Contact Us - AITS | Future-Proof Your Business with Innovative Software Solutions</title>
      <meta name="description" content="Have questions about our software solutions and digital services? Contact AITS today! Our expert team is here to assist you in transforming your business for the future."/>
      <meta name="keywords" content="Contact AITS, software solutions, digital services, business inquiries, innovative technology, future-proof business, customer support, AITS contact information"/>
      <meta property="og:title" content="Contact Us - AITS | Future-Proof Your Business with Innovative Software Solutions">
      <meta property="og:description" content="Have questions about our software solutions and digital services? Contact AITS today! Our expert team is here to assist you in transforming your business for the future.">
      <meta name="twitter:title" content="Contact Us - AITS | Future-Proof Your Business with Innovative Software Solutions">
      <meta name="twitter:description" content="Have questions about our software solutions and digital services? Contact AITS today! Our expert team is here to assist you in transforming your business for the future.">
    </head>     
    <InnerHero :pagebanner="banner" pagetitle="Get in Touch" pagedescription="Learn how our solutions future-proof your business."/>
    <div class="relative">
        <ContactForm/>
        <TextGrid sectiontitle="Office Location" :data="locations"/>
        <InsideBody/>        
    </div>
</template>