<script setup>
import industriesicon from '../assets/images/hero/patterns/patternhero.svg'
const industries = [
{ id: 1, title: 'Food & Beverage', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', icon:industriesicon },
{ id: 2, title: 'Water & Wastewater', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', icon:industriesicon },
{ id: 3, title: 'Smart City', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', icon:industriesicon },
{ id: 4, title: 'Oil & Gas', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', icon:industriesicon },
{ id: 5, title: 'Power Utilities', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', icon:industriesicon },
{ id: 6, title: 'Chemicals', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', icon:industriesicon },
{ id: 7, title: 'Life Science', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', icon:industriesicon },
{ id: 8, title: 'Metals Mining Minerals ', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.', icon:industriesicon },
];
</script>
<template>
    <section class="lg:w-8/12 sm:10/12 w-full mx-auto space-y-4 min-h-screen h-full flex flex-col">
        <h1 class="text-accent1 font-[900] text-lg uppercase">Industries we serve</h1>
        <hr class="w-full h-4 text-accent2"/>
        
        <div class="flex flex-wrap items-center justify-center gap-4">
            <div v-for="(item, key) in industries" :key="key" className="w-[302px] h-[292px] text-bg bg-accent1 rounded-tl-[40px] rounded-tr-lg rounded-br-[40px] rounded-bl-lg shadow-sm text-center flex flex-col justify-center items-center gap-4 p-4">
            <div className="absolute z-[-1] -inset-1 bg-gradient-to-r from-accent1 to-accent2 rounded-tl-[30px] rounded-tr-lg rounded-br-[30px] rounded-bl-lg blur opacity-25"></div> 
                <!-- <img :src="item.icon" :alt="item.title" width="80" height="80" responsive/> -->
                <h2 class="lg:text-2xl text-xl">{{ item.title }}</h2>
                <!-- <p class="text-accent2">{{ item.content }}</p> -->
            </div>
        </div>
    </section>
</template>