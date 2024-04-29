<script setup>
import industriesiconF from '/images/industries/F&B.svg'
import industriesiconC from '/images/industries/City.svg'

const industries = [
{ id: 1, title: 'Food & Beverage', description:'Abiding with all the industry regulations, AITS delivers food production firms with cutting-edge technological solutions and software customized to prevent any of the machinery’s faulty errors or production failure. AITS works on advancing food production activities into a sustainable and smooth-running industry.', icon:industriesiconF },
{ id: 2, title: 'Smart City', description:'Humanity has gone from living in jungles and caves to inhabiting structured cities connecting people from far and beyond. With the technological and societal advancement we are building, smart cities that serve and cater to every citizen’s necessities are but a stone’s throw away. AITS brings the future closer with its visionary appeal to bring about smart cities all over the Gulf region.', icon:industriesiconC }
];
</script>
<template>
    <section class="w-11/12 h-full mx-auto mt-40 2xl:w-8/12 lg:w-10/12">
        <h1 class="text-accent1 font-[200] text-lg uppercase"> &#x2022; Industries we serve</h1>
        <hr class="w-full h-4 mt-3 text-accent2"/>
        <div v-for="(item, key) in industries" :key="item.id" class="mt-10 cursor-pointer relative group max-sm:min-h-[135px]">
        <div class="w-full h-full max-sm:min-h-[200px] absolute -inset-0 bg-gradient-to-br from-accent1/10 to-accent1/30 group-hover:from-bg2/50 group-hover:to-bg2 rounded-[16px] opacity-35 group-hover:opacity-50 transform duration-400 group-hover:duration-600"></div>
            <div class="flex items-center p-6 gap-6 lg:gap-3 w-full h-full relative rounded-[16px] bg-noise bg-cover bg-center border border-bg2/30 goup-hover:border-bg2">
                <div class="flex flex-col items-center justify-center w-1/3 gap-3">
                    <img :src="item.icon" :alt="item.title" width="94" height="94" center cover responsive loading="lazy" class="max-sm:w-[54px] aspect-square"/>
                    <h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 text-center font-[400]">{{ item.title }}</h2>                        
                </div>
                <div class="w-2/3">
                    <p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>
<!-- shadow-[4px_-4px_25px_-12px_rgba(50,82,123)]  shadow-[4px_-4px_25px_-12px_rgba(50,82,123)]-->