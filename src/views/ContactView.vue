<script setup>
import banner from '/images/banners/contact.webp'
import InnerHero from '../components/InnerHero.vue';
import ContactForm from '../components/ContactForm.vue';

</script>

<template>
    <main>
        <InnerHero :pagebanner="banner" pagename="Contact" pagedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."/>
        <section class="relative overflow-hidden before:absolute before:inset-0 before:w-full before:h-full before:max-sm:h-11/12 before:transform before:bg-center before:bg-cover before:z-[-1] before:sm:bg-colors before:bg-mobilecolors">
            <ContactForm/>
        </section>
    </main>

</template>