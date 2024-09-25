<script setup>
import axios from 'axios';
import { ref, reactive, watch } from 'vue'
// import {Checkbox, useRecaptchaProvider} from 'vue-recaptcha'
// useRecaptchaProvider() 
// import { VueRecaptcha } from 'vue-recaptcha';

// const recaptcha = ref()
// const reCaptchaValid = ref(false)
// console.log('reCaptchaValid', reCaptchaValid.value)
const hasErrorMessages = ref(false)
const loading = ref(null)
console.log('hasErrorMessages', hasErrorMessages)

// const onVerify = (response) => {
//   reCaptchaValid.value = true; // Set to true when verified
// };

// const onExpired = () => {
//   reCaptchaValid.value = false; // Reset if expired
// };


const ErrorMessages = ref({
    email: ''
})
console.log('ErrorMessages',ErrorMessages)

const formData = reactive({ 
    data: {         
        Email : {
            name: 'Email',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        }
    },
    isValid: false
});
console.log('Newsletter formData',formData)
console.log('Newsletter formData.isValid',formData.isValid)


const validateField = (field) => {
    if (field.required && !field.value) {
        field.isValid = false;
        field.validationMessage = errors[`${field.name}Required`];
    } else if (field.name === 'Email' && field.value && !isEmailValid(field.value)) {
        field.isValid = false;
        field.validationMessage = errors.EmailInvalid;
    } else {
        field.isValid = true;
        field.validationMessage = '';
    }
};

const isEmailValid = (email) => {
    // Add your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
};

// Watch for changes in form data
watch(formData, (newFormData) => {
    let allFieldsValid = true;
    for (const key in newFormData.data) {
        validateField(newFormData.data[key])
        if (!newFormData.data[key].isValid) {
            allFieldsValid = false;
        }
    }
    formData.isValid = allFieldsValid;
    formData.value = newFormData.value
    console.log('watcher data',formData)
}, { deep: true });

const handleSubmit = () => {
    // if (reCaptchaValid.value === false) {
    //     console.log('ReCaptcha is invalid');
    //     return; // Don't proceed with form submission
    // }
    loading.value = true;
    if (formData.isValid) {
        // Create a new data object with the data to be sent
        const data = {
            email: formData.data.Email.value,
        };
        // Submit the data
        axios.post('https://aitsmena.com/api/v1/newsletter_subscriptions', data, {
            headers: {
                'Access-Control-Allow-Origin': '*', // Replace * with the specific origin if needed
            }
        }).then(response => {
            console.log('Data submitted:', response.data);
            // Clear form inputs
            formData.data.value = {
                Email: ''
            };
        loading.value = false;
        }).catch(error => {
            console.error('Errors:', error.response.data.errors);
            hasErrorMessages.value = true;
            ErrorMessages.value = error.response.data.errors;
            loading.value = false;
        });
    } 
};
// const sitekey = import.meta.env.VITE_RECAPTCHAV2_SITEKEY;
</script>
<template>
    <form class="w-11/12 mx-auto space-y-3 2xl:w-8/12 lg:w-10/12" @submit.prevent="handleSubmit">
        <div class="flex items-center justify-center gap-3 max-sm:flex-wrap">
        <input type="text" id="Email" name="Email" aria-label="Enter your email to subscribe to our newsletter"
        placeholder="Subscribe to our newsletter" 
        v-model="formData.data.Email.value" 
        :required="formData.data.Email.required" 
        class="md:w-6/12 w-full block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none outline-none focus:ring-0 focus:border-bg2"
        :class="{'border-red-500 focus:border-red-500' : formData.data.Email.isValid===false}">
        <p v-show="!formData.data.Email.isValid" class="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Email.validationMessage}}</p>
        <button aria-label="subscribe to our newsletter" 
        class="block w-fit cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 transition-all duration-400">
        {{loading === true ?  'Sending...' : 'Subscribe'}}</button>
        </div>
        <!-- <div>
            <vue-recaptcha 
            ref="recaptcha" 
            :sitekey="sitekey"
            @verify="onVerify"
            @expired="onExpired"
            theme="dark"
            ></vue-recaptcha>    
            <p v-if="reCaptchaValid === false" class="ms-2 mb-2 font-[700] text-[12px] text-red-500">Please click the checkbox</p>
        </div> -->
        <p v-if="loading === false" class="text-center text-green-500">Thank you for your subscription, we'll get back to you soon.</p>                
        <ul v-if="hasErrorMessages === true && ErrorMessages != null" class="list-disc bg-red-200 tep-4 border-b-red-600 border-b-s-4 marker:text-red-600" role="list">
            <li v-for="(item, key) in ErrorMessages" :key="key" class="mx-2 list-item">{{ item[0] }}</li>
        </ul>
    </form>
</template>