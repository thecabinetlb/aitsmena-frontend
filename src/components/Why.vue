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
          <h1 class="sm:w-2/12 w-full font-[400] 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] text-accent1">
            <svg height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17.837 17.837" xml:space="preserve" fill="#F2F2F2">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <g> <path style="fill:#F2F2F2;" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27 c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0 L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"/> </g> </g>
            </svg>
          </h1>
          <h2 class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">{{ item }}</h2>          
        </li>
      </ul>
    </section>
</template>