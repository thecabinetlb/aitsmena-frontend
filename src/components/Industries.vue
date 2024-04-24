<script setup>
import { RouterLink } from 'vue-router'
import industriesiconF from '/images/industries/F&B.svg'
// import industriesiconW from '/images/industries/Water.svg'
import industriesiconC from '/images/industries/City.svg'
// import industriesiconG from '/images/industries/Gas.svg'
// import industriesiconP from '/images/industries/Power.svg'
// import industriesiconCh from '/images/industries/Chemicals.svg'
// import industriesiconM from '/images/industries/Mining.svg'
// import industriesiconL from '/images/industries/LifeScience.svg'

const industries = [
{ id: 1, title: 'Food & Beverage', icon:industriesiconF },
// { id: 2, title: 'Water & Wastewater', icon:industriesiconW },
{ id: 2, title: 'Smart City', icon:industriesiconC }
// { id: 4, title: 'Oil & Gas', icon:industriesiconG },
// { id: 5, title: 'Power Utilities', icon:industriesiconP },
// { id: 6, title: 'Chemicals', icon:industriesiconCh },
// { id: 7, title: 'Metals Mining Minerals',  icon:industriesiconM },
// { id: 8, title: 'Life Science', icon:industriesiconL },
];
</script>
<template>
    <section class="w-11/12 h-full mx-auto mt-40 2xl:w-8/12 lg:w-10/12">
        <h1 class="text-accent1 font-[200] text-lg uppercase"> &#x2022; Industries we serve</h1>
        <hr class="w-full h-4 mt-3 text-accent2"/>
        <div class="grid items-center w-full gap-6 mt-10 text-center sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
            <div v-for="(item, key) in industries" :key="item.id" class="cursor-pointer relative group col-sapn-1 aspect-square max-sm:min-h-[135px]">
            <div class="w-full h-full max-sm:min-h-[135px] absolute -inset-0 bg-gradient-to-br from-accent1/10 to-accent1/30 group-hover:from-bg2/50 group-hover:to-bg2 rounded-[16px] opacity-35 group-hover:opacity-50 transform duration-400 group-hover:duration-600"></div>
                <div class="w-full h-full max-sm:min-h-[135px] relative flex flex-col justify-center items-center gap-4 rounded-[16px] bg-noise bg-cover bg-center border border-bg2/30 goup-hover:border-bg2">
                    <img :src="item.icon" :alt="item.title" width="94" height="94" center cover responsive loading="lazy" class="max-sm:w-[54px] aspect-square"/>
                    <h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[400] max-sm:min-h-[48px]">{{ item.title }}</h2>
                </div>
            </div>
        </div>
    </section>
</template>
<!-- shadow-[4px_-4px_25px_-12px_rgba(50,82,123)]  shadow-[4px_-4px_25px_-12px_rgba(50,82,123)]-->