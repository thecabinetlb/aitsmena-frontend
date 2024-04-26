<script setup>
defineProps({
    pagebanner: Image,
    pagename: String,
    pagedescription: String
})
</script>
<template>
    <section class="relative flex flex-col justify-center items-center -mt-[40px] h-[70vh] mb-20">
        <img :src="pagebanner" :alt="pagetitle" width="1442" height="718" center cover responsive loading="eager" class="absolute inset-0 w-full h-full aspect-[2.01/1]"/>
        <div class="absolute w-11/12 mx-auto transform -translate-y-1/2 top-1/2 z-1 2xl:w-8/12 sm:w-10/12">
            <div class="h-[40vh] rounded-[16px] flex flex-col justify-center items-center mx-auto bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px]">
                <h1 class="font-[400] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] text-center uppercase mb-10 text-accent">{{ pagename }}</h1>   
                <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify mx-auto sm:w-2/3" style="text-align-last: center;">{{ pagedescription }}</p>
            </div>
        </div>
        <!-- Highlights -->
            <!-- top left -->
            <img src="/images/banners/elements/topleft.svg" alt="AITS" width="909" height="683" center cover responsive loading="lazy"
            class="absolute inset-0 z-1"/>

            <!-- top right -->
            <img src="/images/banners/elements/topright.svg" alt="AITS" width="1232" height="792" center cover responsive loading="lazy"
            class="absolute top-0 right-0 z-1"/> 

            <!-- bottom right -->
            <img src="/images/banners/elements/bottomright.svg" alt="AITS" width="728" height="1074" center cover responsive loading="lazy"
            class="absolute bottom-0 right-0 z-1"/>
    </section>
</template>