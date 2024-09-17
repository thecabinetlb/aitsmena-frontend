<script setup>
import axios from 'axios';
import { ref, reactive, watch } from 'vue'
// import {Checkbox, useRecaptchaProvider} from 'vue-recaptcha'
// useRecaptchaProvider() 

const ReCaptchaValid = ref(false)
const hasErrorMessages = ref(false)
const loading = ref(null)
console.log('hasErrorMessages', hasErrorMessages)

const errors = {
  NameRequired: 'Name is required.',
  EmailRequired: 'Email is required.',
  EmailInvalid: 'Please specify a real email.',
  CountryRequired: 'Country Name is required.',
  CityRequired: 'City Name is required.',
  IndustryRequired: 'Industry is required.',
  PhoneRequired: 'Phone Number is required.',
  PhoneInvalid: 'Phone Number should be numeric.',
  SubjectRequired: 'Subject is required.',
  SubjectInvalid: 'Invalid subject. Please select either General Inquiries or Sales and Support.',
  MessageRequired: 'Please enter your message.'
};

const ErrorMessages = ref({
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    industry: '',
    subject: '',
    message: ''
})
console.log('ErrorMessages',ErrorMessages)

const formData = reactive({ 
    data: { 
        Name : {
            name: 'Name',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },
        Phone : {
            name: 'Phone',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },            
        Email : {
            name: 'Email',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },            
        Country : {
            name: 'Country',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },
        City : {
            name: 'City',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },
        Industry : {
            name: 'Industry',
            value : 'smart-cities',
            isValid: true,
            validationMessage: "",
            required: false,            
        },
        Subject : {
            name: 'Subject',
            value : 'general-inquiry',
            isValid: true,
            validationMessage: "",
            required: false,            
        },
        Message : {
            name: 'Message',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        }
    },
    isValid: false
});
console.log('formData',formData)
console.log('formData.isValid',formData.isValid)


const validateField = (field) => {
    if (field.required && !field.value) {
        field.isValid = false;
        field.validationMessage = errors[`${field.name}Required`];
    } else if (field.name === 'Email' && field.value && !isEmailValid(field.value)) {
        field.isValid = false;
        field.validationMessage = errors.EmailInvalid;
    } else if (field.name === 'Phone' && field.value && !isPhoneValid(field.value)) {
        field.isValid = false;
        field.validationMessage = errors.PhoneInvalid;
    } else {
        field.isValid = true;
        field.validationMessage = '';
    }
};

const isEmailValid = (email) => {
    // Add your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
};
const isPhoneValid = (phone) => {
    // Add your phone validation logic here
    return /^[0-9]+$/.test(phone);
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
    if (!ReCaptchaValid.value) {
        console.log('ReCaptcha is invalid');
        return; // Don't proceed with form submission
    }
    loading.value = true;
    if (formData.isValid) {
        // Create a new data object with the data to be sent
        const data = {
            name: formData.data.Name.value,
            email: formData.data.Email.value,
            phone: formData.data.Phone.value,
            country: formData.data.Country.value,
            city: formData.data.City.value,
            industry: formData.data.industry.value,
            subject: formData.data.Subject.value,
            message: formData.data.Message.value
        };
        // Submit the data
        axios.post('http://localhost:8000/api/v1/contact_submissions', data, {
            headers: {
                'Access-Control-Allow-Origin': '*', // Replace * with the specific origin if needed
            }
        }).then(response => {
            console.log('Data submitted:', response.data);
            // Clear form inputs
            formData.data.value = {
                Name: '',
                Email: '',
                Phone: '',
                Country: '',
                City: '',
                Industry: '',
                Subject: '',
                Message: ''
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

</script>

<template>
    <div id="contact-form"class="flex flex-wrap justify-between w-11/12 gap-6 mx-auto lg:gap-3 2xl:w-8/12 lg:w-10/12">
        <div class="w-full lg:w-6/12">
            <h1 class="font-[200] text-accent1 md:text-4xl text-[30px] uppercase mb-6">Contact Us</h1>
            <p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">Have questions or inquiries? Contact us today to learn more about our software solutions, digital services, and how we can help your business succeed in an ever ever-evolving market. Our team is here to assist you every step of the way.</p>
        </div>
        <form  class="grid w-full h-full grid-cols-2 gap-3 lg:w-5/12" @submit.prevent="handleSubmit">
            <div class="w-full col-span-2">
                <input type="text" id="Name" name="Name"
                placeholder="Your Full Name" aria-label="Enter your full name"
                v-model="formData.data.Name.value"
                :required="formData.data.Name.required" 
                class="block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none outline-none focus:ring-0 focus:border-bg2"               
                :class="{'border-red-500 focus:border-red-500' : formData.data.Name.isValid===false}">
                <p v-show="!formData.data.Name.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Name.validationMessage}}</p>
            </div>
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="Email" name="Email" aria-label="Enter your email"
                placeholder="Work Email: example@gmail.com" 
                v-model="formData.data.Email.value" 
                :required="formData.data.Email.required" 
                class="block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none outline-none focus:ring-0 focus:border-bg2 peer"                
                :class="{'border-red-500 focus:border-red-500' : formData.data.Email.isValid===false}">
                <p v-show="!formData.data.Email.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Email.validationMessage}}</p>
            </div>      
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="Phone" name="Phone" aria-label="Enter your phone"
                placeholder="71 654 231" 
                v-model="formData.data.Phone.value"          
                :required="formData.data.Phone.required" 
                class="block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none outline-none focus:ring-0 focus:border-bg2 peer"                
                :class="{'border-red-500 focus:border-red-500' : formData.data.Phone.isValid===false}">
                <p v-show="!formData.data.Phone.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Phone.validationMessage}}</p>
            </div> 
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="Country" name="Country"  aria-label="Enter your Country"
                placeholder="Your Country"
                v-model="formData.data.Country.value"              
                :required="formData.data.Country.required" 
                class="block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none outline-none focus:ring-0 focus:border-bg2 peer"                
                :class="{'border-red-500 focus:border-red-500' : formData.data.Country.isValid===false}">
                <p v-show="!formData.data.Country.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Country.validationMessage}}</p>
            </div>    
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="City" name="City"  aria-label="Enter your City"
                placeholder="Your City"
                v-model="formData.data.City.value"              
                :required="formData.data.City.required" 
                class="block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none outline-none focus:ring-0 focus:border-bg2 peer"                
                :class="{'border-red-500 focus:border-red-500' : formData.data.City.isValid===false}">
                <p v-show="!formData.data.City.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.City.validationMessage}}</p>
            </div>  
            <div class="w-full col-span-2">
                <select id="industry" name="industry" aria-label="Choose an Industry"
                placeholder="Choose an industry"
                v-model="formData.data.Industry.value"              
                :required="formData.data.Industry.required" 
                class="block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1/50 bg-transparent border border-accent2 appearance-none outline-none focus:ring-0 focus:border-bg2 peer"                
                :class="{'border-red-500 focus:border-red-500' : formData.data.Industry.isValid===false}">
                <option value="smart-cities" class="text-black"selected>Smart Cities</option>
                <option value="food-and-beverage" class="text-black">Food and Beverage</option>
                <option value="manufacturing" class="text-black">Manufacturing</option>
                <option value="oil-and-gas" class="text-black">Oil and Gas</option>
                <option value="energy" class="text-black">Energy</option>
                <option value="utilities" class="text-black">Utilities</option>
                <option value="metal-mining-and-minerals" class="text-black">Metal, Mining and Minerals</option>
                </select>
                <p v-show="!formData.data.Industry.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Industry.validationMessage}}</p>
            </div>
            <div class="w-full col-span-2 mb-3">
                <select id="Subject" name="Subject" aria-label="select a subject for your message"
                v-model="formData.data.Subject.value"
                :required="formData.data.Subject.required" 
                class="block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1/50 bg-transparent border border-accent2 appearance-none outline-none focus:ring-0 focus:border-bg2 peer"                
                :class="{'border-red-500 focus:border-red-500' : formData.data.Subject.isValid===false}">
                    <option  class="text-black" value="general-inquiry" selected>General Inquiry</option>
                    <option class="text-black" value="sales-and-support">Sales and Support</option>
                </select>
                <p v-show="!formData.data.Subject.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Subject.validationMessage}}</p>
            </div>
            <div class="w-full col-span-2">
                <textarea id="Message" name="Message" rows="5"  aria-label="Type out your message"
                placeholder="Tell us about your project and your current goals. How can we help you?" 
                v-model="formData.data.Message.value" 
                :required="formData.data.Message.required" 
                style="min-height: 60px;"
                class="block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none outline-none focus:ring-0 focus:border-bg2 peer"
                :class="{'border-red-500 focus:border-red-500' : formData.data.Message.isValid===false}"></textarea>
                <p v-show="!formData.data.Message.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Message.validationMessage}}</p>
            </div>
            <!-- Recaptcha -->
            <div class="w-full col-span-2">
                <vue-recaptcha ref="recaptcha" v-model="ReCaptchaValid" sitekey="6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl"></vue-recaptcha>

                <!-- <Checkbox v-model="ReCaptchaValid" theme="dark" /> -->
                <p v-show="!ReCaptchaValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">Please click the checkbox</p>
            </div>
            <!-- Submit -->
            <div class="flex flex-wrap items-center w-full gap-2">
            <button aria-label="send your message" class="cursor-pointer w-fit relative z-[2] col-span-2 px-4 py-3 text-accent1 font-[400] text-center rounded-[20px] shadow-sm bg-bg2 hover:brightness-125 transition-all duration-400">
            {{loading === true ?  'Sending...' : 'Send Message'}}
            </button>            
            <p v-if="loading === false" class="text-green-500">Thank you for your message, we'll get back to you soon.</p>                
            </div>

            <!-- Errors after submit -->
            <ul v-if="hasErrorMessages === true" class="p-4 list-disc bg-red-200 border-b-red-600 border-b-s-4 marker:text-red-600" role="list">
                <li v-for="(item, key) in ErrorMessages" :key="key" className="list-item mx-2">{{ item[0] }}</li>
            </ul>
        </form>
    </div>
</template>
