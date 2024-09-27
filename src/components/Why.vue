<script setup>
defineProps({
  sectiontitle: String,
  data: Array
})
</script>
<template>
    <section id="why-aits" class="w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12">
      <h1 class="font-[500] text-accent1 md:text-4xl text-[30px] uppercase mb-6">{{ sectiontitle }}</h1>
      <ul role="list" class="grid lg:grid-cols-2 grid-cols-1 gap-6 h-full md:p-10 p-6 bg-gradient-to-r from-accent1/10 to-accent1/20 rounded-[16px] list-style-none">
        <li v-for="(item, key) in data" :key="key" class="flex flex-wrap items-center gap-3">
          <svg height="24px" id="Layer_1" version="1.1" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#F2F2F2"><path clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>
          <h2 class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">{{ item }}</h2>          
        </li>
      </ul>
    </section>
</template>