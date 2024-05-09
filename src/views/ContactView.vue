<script setup>
import banner from '/images/banners/contact.webp'
import InnerHero from '../components/InnerHero.vue';
import InsideBody from '../components/InsideBody.vue';
import ContactForm from '../components/ContactForm.vue';
</script>

<template>
    <main>
        <InnerHero :pagebanner="banner" pagename="Contact" pagedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."/>
        <div class="relative">
            <ContactForm/>
            <InsideBody/>        
        </div>
    </main>
</template>