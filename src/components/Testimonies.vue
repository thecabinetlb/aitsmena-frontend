<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import client1 from '../assets/images/testimonies/client1'
import client2 from '../assets/images/testimonies/client1'
const testimoniesslided = [
{ id: 1, title: 'We are in a good company', ceo:'Samir A.', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.""', icon:client1 },
{ id: 2, title: 'We are in a good company', ceo:'Malak H.', content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.""', icon:client2 },
];
</script>

<template>
    <carousel :items-to-show="1">
      <slide v-for="slide in testimoniesslided" :key="key" class="lg:w-8/12 sm:10/12 w-full mx-auto space-y-2">
        <h1 class="text-accent1 font-[400] text-[30px] lg:text-4xl 2xl:text-5xl">
            {{ slide.title }}
        </h1>
        <p class="text-accent2 font-[200] 2xl:text-lg lg:text-md text-justify italic">{{ slide.content }}</p>
        <figcaption class="flex items-center justify-center mt-6 space-x-3">
            <img :src="item.icon" :alt="item.title" width="40" height="40" responsive class="rounded-full"/>
            <cite class="text-accent2 font-[400]">{{ slide.ceo }} </cite>
        </figcaption>
      </slide>
  
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </template>