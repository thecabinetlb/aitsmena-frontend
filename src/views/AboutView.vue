<script setup>
import banner from '/images/banners/about.webp'
import InnerHero from '../components/InnerHero.vue';
import Partners from '../components/Partners.vue';
import CSR from '../components/CSR.vue';
import InsideBody from '@/components/InsideBody.vue';
// const navlinks = [
// { id: 1, name: 'Home', to: '/' },
// { id: 2, name: 'About', to: '/about' },
// ];

</script>
<template>
    <main>
        <InnerHero :pagebanner="banner" pagename="About Us" pagedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."/>

        <section class="relative ">
            <Partners/>
            <CSR/>
            <InsideBody/>
        </section>

    </main>
</template>