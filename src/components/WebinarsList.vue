<script setup>
defineProps({
    sectiontitle: String,
    sectiondescription: String,
    data: Array
})
</script>

<template>
    <section class="w-11/12 mx-auto mt-40 2xl:w-8/12 sm:w-10/12">
        <h1 class="text-accent1 font-[200] text-lg uppercase"> &#x2022; Upcomming Events</h1>
        <hr class="w-full h-4 mt-3 text-accent2"/>          
        <div class="w-full my-10">
            <h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase lg:mb-10 mb-20">{{ sectiontitle }}</h1>
            <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ sectiondescription }}</p>
        </div>
        <ul role="list" class="flex flex-wrap justify-center lg;justify-between md:gap-3 gap-6 list-style-none">
            <li v-for="(item, key) in data" :key="key" class="flex-grow lg:w-[49%] sm:w-[46%] w-full relative group max-sm:min-h-[440px]">
            <div class="w-full h-full max-sm:min-h-[440px] absolute -inset-0 bg-gradient-to-br from-accent1/10 to-accent1/30 group-hover:from-bg2/50 group-hover:to-bg2 rounded-[16px] opacity-35 group-hover:opacity-50 transform duration-400 group-hover:duration-600"></div>
                <div class="p-3 w-full h-full relative flex justify-between items-center gap-3 rounded-[16px] bg-noise bg-opacity-10 bg-cover bg-center border-2 border-bg2">
                    <h1 class="w-full text-center sm:w-1/4"><span class="font-[400] 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] text-accent1">{{ item.date.day }}</span><br/>
                    <span class="font-[200] text-accent2">{{ item.date.month }} {{ item.date.year }}</span></h1>                        
                    <div class="w-full sm:w-3/4">
                        <h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[400] mb-3">{{ item.title }}</h2>
                        <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify mb-3">{{ item.description }}</p>
                        <!-- <RouterLink :id="'go-to-' + item.title + '-page'" :aria-label="'apply for' + item.title" :to="item.to" :target="item.target" class="ms-auto me-0 block w-fit cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125">Secure Your Spot</RouterLink> -->
                    </div>
                    <div class="w-full cursor-pointer sm:w-1/4">
                        <svg width="70" height="70" viewBox="0 0 70 70" class="w-10 mx-auto aspect-square max-sm:ms-auto max-sm:me-0" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35 70C54.33 70 70 54.33 70 35C70 15.67 54.33 6.25948e-06 35 4.5696e-06C15.67 2.87972e-06 -2.87972e-06 15.67 -4.5696e-06 35C-6.25948e-06 54.33 15.67 70 35 70ZM35 68.7931C16.3366 68.7931 1.2069 53.6634 1.2069 35C1.2069 16.3366 16.3366 1.2069 35 1.2069C53.6634 1.2069 68.7931 16.3366 68.7931 35C68.7931 53.6634 53.6634 68.7931 35 68.7931Z" fill="url(#paint0_linear_274_876)"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M45.6864 34.7959L36.7651 44.638C36.3491 45.0858 35.6739 45.1378 35.1882 44.6833C34.7548 44.2784 34.7439 43.4869 35.1447 43.0459L42.3062 35.1578L24.1152 35.1578C23.4988 35.1578 23 34.6399 23 33.9999C23 33.3599 23.4988 32.842 24.1152 32.842L42.3062 32.842L35.1447 24.9538C34.7439 24.5128 34.7722 23.7416 35.1882 23.3165C35.6282 22.8687 36.3557 22.9072 36.7651 23.3617L45.6864 33.2038C45.9477 33.4707 45.9956 33.7285 46 33.9999C46 34.2667 45.8432 34.624 45.6864 34.7959Z" fill="url(#paint1_linear_274_876)"/>
                            <defs>
                            <linearGradient id="paint0_linear_274_876" x1="82.8909" y1="79.8216" x2="-5.50385" y2="-5.50388" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFE3C9"/>
                            <stop offset="0.528659" stop-color="#98C5FF"/>
                            <stop offset="1" stop-color="#91FFFF"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_274_876" x1="18.7644" y1="48.0868" x2="46.5618" y2="20.0349" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFE3C9"/>
                            <stop offset="0.528659" stop-color="#98C5FF"/>
                            <stop offset="1" stop-color="#91FFFF"/>
                            </linearGradient>
                            </defs>
                        </svg>  
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

