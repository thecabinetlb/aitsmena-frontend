<script setup>
defineProps({
    item: Object,
})
const formattedDate = (dateString) => {
    const dateObject = new Date(dateString);
    // Check if the date object is valid
    if (isNaN(dateObject)) {
        return ''; // Return a default message for invalid dates
    }
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(dateObject);
};
const baseurl_storage = import.meta.env.VITE_BASE_URL_STORAGE;

</script>
<template>
    <section class="w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12">
      <h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-3">{{ item.title }}</h1>
      <div class="flex flex-col gap-6 mt-10">
            <div class="relative overflow-hidden aspect-video rounded-[16px]"
            :style="{ backgroundImage: 'url(' + baseurl_storage + '/' + item.cover + ')', backgroundSize:'cover', backgroundPosition: 'center'}">
              <div v-if="item.customer_logo" class="p-2 absolute top-3 right-3 w-1/4 h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]">
                <img :src="`${baseurl_storage}/${item.customer_logo}`":alt="item.title" width="100%" height="100%" center cover responsive loading="lazy" class="mx-auto aspect-1.72/1 scale-125"/>
              </div>
            </div>
            <h3 class="text-accent2 font-[200] max-sm:text-[14px] mb-6">{{ formattedDate(item.published_at) }}</h3>
            <div class="space-y-6 tracking-wide font-[200]" v-html="item.body"></div>
        </div>
    </section>
</template>