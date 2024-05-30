<script setup>
import banner from '/images/banners/contact.webp'
import InnerHero from '../components/InnerHero.vue';
import InsideBody from '../components/InsideBody.vue';
import ContactForm from '../components/ContactForm.vue';
import TextGrid from '../components/TextGrid.vue';

const locations = 
  {
    title: 'Sulimaniyah Office Building, Office no.214, 3132 Prince Sultan Bin Abdulaziz Road, Sulimaniyah, Riyad, Kingdom of Saudi Arabia.',
  }

</script>

<template>
    <head>
      <title>AITS - Contact Us Today</title>
      <meta name="description" content="Would you like to get in touch? Fill out the contact form with any inquiries you have and one of our AITS experts will respond as soon as possible."/>
    </head>
    <InnerHero :pagebanner="banner" pagetitle="Contact" pagedescription="Get in touch to learn more about our industry software solutions and how you can take your business a step further!"/>
    <div class="relative">
        <ContactForm/>
        <TextGrid sectionid="office-locations" sectiontitle="Office Locations"
        sectiondescription="Need assistance with sales or support? Get in touch with our dedicated sales and support team for personalized assistance and expert guidance. Find the nearest AITS office and get in touch with us to schedule a consultation or learn more about our solutions and services. We have offices located across the Gulf region to serve you better." :item="locations"/>
        <InsideBody/>        
    </div>
</template>