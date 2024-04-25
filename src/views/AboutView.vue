<script setup>
import InnerHero from '@/components/InnerHero.vue';
import Partners from '@/components/Partners.vue';
const navlinks = [
{ id: 1, name: 'Home', to: '/' },
{ id: 2, name: 'About', to: '/about' },
];

</script>
<template>
    <main class="h-full">
        <InnerHero :navlinks="navlinks" pagename="About Us"/>
        <Partners/>
    </main>
</template>