<template>
<section class="flex flex-col items-center justify-center h-screen mx-auto bg-center bg-cover bg-placeholder">
  <img :src="logo" alt="AITS logo" width="164" height="43" class="mt-10" loading="eager" />

  <div class="flex flex-col items-center justify-center w-11/12 h-full mx-auto 2xl:w-8/12 lg:w-10/12">
    <h1 class="text-4xl text-center uppercase text-accent1 2xl:text-8xl lg:text-8xl md:text-7xl sm:text-5xl">
      <span class="font-[200]">Innovative Solutions</span>
      <br />
      <span class="font-[700]">Coming Soon</span>
    </h1>

    <div class="flex items-center justify-center w-full gap-3 px-2 mt-10">
      <span class="text-base font-[200] text-accent1">0%</span>
      <div class="relative w-full border border-accent1 rounded-full h-2.5">
        <div class="bg-accent1 h-2.5 rounded-full" style="width: 85%;"></div>
      </div>
      <span class="text-sm font-[200] text-accent1">100%</span>
    </div>

    <p class="tracking-wide font-[200] lg:text-[24px] md:text-[20px] sm:text-[18px] text-center text-accent2 mt-10">
      Follow us for the latest updates:
    </p>

    <div class="relative z-[2] flex items-center gap-2 mt-6">
      <a v-for="(item, key) in sociallinks" :key="key" :id="'go-to-' + item.name" :href="item.to" :target="item.target"
        class="w-12 aspect-square font-[200] bg-bg2 text-accent1 hover:brightness-125 transition-all duration-400 rounded-[8px] p-3 flex items-center justify-center">
        <img :src="item.icon" :alt="'AITS' + item.name" class="w-full h-full" loading="lazy" />
      </a>
    </div>
  </div>
</section>

</template>

<script setup>
import logo from '/AITS_v1.svg'
import { useSeoMeta } from '@unhead/vue'
import x from '/images/socials/x.svg'
import youtube from '/images/socials/youtube.svg'
import facebook from '/images/socials/facebook.svg'
import linkedin from '/images/socials/linkedin.svg'

const title = 'AITS - Industrial Software Solutions And Digital Services Tailored To Your Business';
const description = 'AITS transforms businesses like yours through innovative tech solutions tailored to your unique needs. Book your free consultation call to get started!';
const ogImage = 'https://aitsmena-test.netlify.app/aits-open-graph_v1.jpg';
const ogUrl = 'https://aitsmena-test.netlify.app'; // Replace with your website URL 

useSeoMeta({ 
  title,
  description,
  ogTitle: title, // Consider using the same title for consistency
  ogDescription: description,
  ogImage,
  ogUrl,
  ogType: 'website', // Recommended for most website content
  twitterTitle: title, // Consider using the same title for consistency
  twitterDescription: description,
  twitterImage: ogImage, // Assuming the same image is suitable for Twitter
  twitterCard: 'summary',
})
const sociallinks = [
  { id: 1, name:'Linkedin', to: 'https://www.linkedin.com/company/aitsmena/', target:"_blank", icon:linkedin },
  { id: 2, name:'Facebook', to: 'https://www.facebook.com/people/AITS/100057457570552/', target:"_blank", icon:facebook },
  { id: 3, name:'X', to: 'https://twitter.com/AITSglobal', target:"_blank", icon:x },
  { id: 4, name:'Youtube', to: 'https://www.youtube.com/channel/UC2e3BlBOc1EfhuxlBAaLQNw', target:"_blank", icon:youtube }
];

</script>