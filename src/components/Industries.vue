<script setup>
import industriesiconF from '../assets/images/industries/F&B.svg'
import industriesiconW from '../assets/images/industries/Water.svg'
import industriesiconC from '../assets/images/industries/City.svg'
import industriesiconG from '../assets/images/industries/Gas.svg'
import industriesiconP from '../assets/images/industries/Power.svg'
import industriesiconCh from '../assets/images/industries/Chemicals.svg'
import industriesiconM from '../assets/images/industries/Mining.svg'
import industriesiconL from '../assets/images/industries/LifeScience.svg'

const industries = [
{ id: 1, title: 'Food & Beverage', icon:industriesiconF },
{ id: 2, title: 'Water & Wastewater', icon:industriesiconW },
{ id: 3, title: 'Smart City', icon:industriesiconC },
{ id: 4, title: 'Oil & Gas', icon:industriesiconG },
{ id: 5, title: 'Power Utilities', icon:industriesiconP },
{ id: 6, title: 'Chemicals', icon:industriesiconCh },
{ id: 7, title: 'Metals Mining Minerals',  icon:industriesiconM },
{ id: 8, title: 'Life Science', icon:industriesiconL },
];
</script>
<template>
    <section class="flex flex-col w-11/12 h-full mx-auto mt-40 xl:w-8/12 sm:10/12">
        <h1 class="text-accent1 font-[200] text-lg uppercase"> &#x2022; Industries we serve</h1>
        <hr class="w-full h-4 mt-3 text-accent2"/>
        <div class="grid items-center w-full gap-6 mt-4 text-center sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
            <div v-for="(item, key) in industries" :key="key" class="relative group col-sapn-1 aspect-square">
            <div class="w-full h-full absolute -inset-0 bg-gradient-to-br from-accent1/10 to-accent1/30 group-hover:from-bg2/50 group-hover:to-bg2 rounded-[16px] opacity-35 group-hover:opacity-50 transform duration-400 group-hover:duration-600"></div>
                <div class="w-full h-full relative flex flex-col justify-center items-center gap-4 rounded-[16px] bg-noise bg-cover bg-center border border-bg2/30 goup-hover:border-bg2">
                    <img :src="item.icon" :alt="item.title" width="94" height="94" center cover responsive class="rounded-full"/>
                    <h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[400]">{{ item.title }}</h2>
                </div>
            </div>
        </div>
    </section>
</template>
<!-- shadow-[4px_-4px_25px_-12px_rgba(50,82,123)]  shadow-[4px_-4px_25px_-12px_rgba(50,82,123)]-->