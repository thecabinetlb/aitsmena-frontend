<script setup>
import { ref } from 'vue'

const formData = ref({
    name: '',
    email: '',
    phone: '',
    subject: '',
    company: '',
    message: '',
  });

</script>

<template>
    <main class="flex flex-col items-center justify-center 2xl:w-8/12 sm:w-10/12 w-11/12 z-[1] px-6 mx-auto my-40">
        <h1 class="font-[400] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-10">Contact Us</h1>
        <form class="grid w-full grid-cols-2 gap-6 mx-auto">
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="name" placeholder="Your Name" v-model="formData.name" required class="w-full px-4 py-3 text-accent1 border border-accent1 focus:border-b-bg2 rounded-[20px]">
            </div>    
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="email" placeholder="example@gmail.com" v-model="formData.email" required class="w-full px-4 py-3 text-accent1 border border-accent1 focus:border-b-bg2 rounded-[20px]">
            </div>      
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="phone" id="phone" placeholder="+008 654 231" v-model="formData.phone" required class="w-full px-4 py-3 text-accent1 border border-accent1 focus:border-b-bg2 rounded-[20px]">
            </div> 
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="company" placeholder="Your Company's Name" v-model="formData.company" required  class="w-full px-4 py-3 text-accent1 border border-accent1 focus:border-b-bg2 rounded-[20px]">
            </div>    
            <div class="w-full col-span-2">
                <select class="w-full px-4 py-3 border border-accent1 focus:border-b-bg2 text-gray-500 rounded-[20px]">
                    <option selected>General Inquiries</option>
                    <option>Sales and Support</option>
                </select>
            </div>
            <div class="w-full col-span-2">
                <textarea id="message" rows="5" placeholder="Briefly tell us about your project and your current goals. How can we help you?" v-model="formData.message" required class="w-full px-4 py-3 text-accent1 border bg-accent1 focus:border-b-bg2 rounded-[20px]"></textarea>
            </div>    
            <button aria-label="go to contact section" class="cursor-pointer w-fit col-span-2 px-4 py-3 text-accent1 font-[400] text-center rounded-[20px] ms-auto me-0 shadow-sm bg-bg2 hover:brightness-125">Send Message</button>    
        </form>
    </main>
</template>