<script setup>
import InnerHero from '@/components/InnerHero.vue';
import Partners from '@/components/Partners.vue';
// const navlinks = [
// { id: 1, name: 'Home', to: '/' },
// { id: 2, name: 'About', to: '/about' },
// ];

</script>
<template>
    <main class="h-full">
        <InnerHero pagename="About Us" pagedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip."/>
        <Partners/>
    </main>
</template>