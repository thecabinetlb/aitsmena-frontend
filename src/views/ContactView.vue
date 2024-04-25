<script setup>
import axios from 'axios';
import { ref, reactive, watch } from 'vue'
import { Checkbox } from 'vue-recaptcha';
import { useRecaptchaProvider } from 'vue-recaptcha'

useRecaptchaProvider()
const ReCaptchaValid = ref(false)
const hasErrorMessages = ref(false)
const loading = ref(null)
console.log('hasErrorMessages', hasErrorMessages)

const errors = {
  NameRequired: 'Name is required.',
  EmailRequired: 'Email is required.',
  EmailInvalid: 'Please specify a real email.',
  CompanyNameRequired: 'Company Name is required.',
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
    company_name: '',
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
        CompanyName : {
            name: 'CompanyName',
            value : '',
            isValid: null,
            validationMessage: "",
            required: true,            
        },
        Subject : {
            name: 'Subject',
            value : 'General Inquiries',
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
    // if (!ReCaptchaValid.value) {
    //     console.log('ReCaptcha is invalid');
    //     return; // Don't proceed with form submission
    // }
    loading.value = true;
    if (formData.isValid) {
        // Create a new data object with the data to be sent
        const data = {
            name: formData.data.Name.value,
            email: formData.data.Email.value,
            phone: formData.data.Phone.value,
            company_name: formData.data.CompanyName.value,
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
                CompanyName: '',
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
    <main class="flex flex-col items-center justify-center 2xl:w-8/12 sm:w-10/12 w-11/12 z-[1] px-6 mx-auto my-40">
        <h1 class="font-[400] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-10">Contact Us</h1>
        <form class="grid w-full grid-cols-2 gap-6 mx-auto" @submit.prevent="handleSubmit">
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="Name" name="Name"
                placeholder="Your Name" 
                v-model="formData.data.Name.value"
                :required="formData.data.Name.required" 
                class="w-full px-4 py-3 border border-accent1 focus:border-b-bg2 rounded-[20px]">
                <p v-show="!formData.data.Name.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Name.validationMessage}}</p>
            </div>
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="Email" name="Email"
                placeholder="example@gmail.com" 
                v-model="formData.data.Email.value" 
                :required="formData.data.Email.required" 
                class="w-full px-4 py-3 border border-accent1 focus:border-b-bg2 rounded-[20px]">
                <p v-show="!formData.data.Email.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Email.validationMessage}}</p>
            </div>      
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="phone" id="Phone" name="Phone" 
                placeholder="+008 654 231" 
                v-model="formData.data.Phone.value"          
                :required="formData.data.Phone.required" 
                class="w-full px-4 py-3 border border-accent1 focus:border-b-bg2 rounded-[20px]">
                <p v-show="!formData.data.Phone.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Phone.validationMessage}}</p>
            </div> 
            <div class="w-full col-span-2 sm:col-span-1">
                <input type="text" id="CompanyName" name="CompanyName" 
                placeholder="Your Company's Name"
                v-model="formData.data.CompanyName.value"              
                :required="formData.data.CompanyName.required" 
                class="w-full px-4 py-3  border border-accent1 focus:border-b-bg2 rounded-[20px]">
                <p v-show="!formData.data.CompanyName.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.CompanyName.validationMessage}}</p>
            </div>    
            <div class="w-full col-span-2">
                <select id="Subject" name="Subject"
                v-model="formData.data.Subject.value"
                :required="formData.data.Subject.required" 
                class="w-full px-4 py-3 border border-accent1 focus:border-b-bg2 text-gray-400 rounded-[20px]" >
                    <option selected>General Inquiries</option>
                    <option>Sales and Support</option>
                </select>                    
                <p v-show="!formData.data.Subject.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Subject.validationMessage}}</p>
            </div>
            <div class="w-full col-span-2">
                <textarea id="Message" name="Message" rows="5" 
                placeholder="Briefly tell us about your project and your current goals. How can we help you?" 
                v-model="formData.data.Message.value" 
                :required="formData.data.Message.required" 
                class="w-full px-4 py-3 border bg-accent1 focus:border-b-bg2 rounded-[20px]"></textarea>
                <p v-show="!formData.data.Message.isValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">{{formData.data.Message.validationMessage}}</p>
            </div>
            <!-- Recaptchs -->
            <div class="w-full col-span-2">
              <Checkbox v-model="ReCaptchaValid" theme="dark" />          
              <p v-show="!ReCaptchaValid" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">Please click the checkbox</p>
            </div>
            <!-- Submit -->
            <div class="flex flex-wrap items-center w-full gap-2">
            <button aria-label="send your message" class="cursor-pointer w-fit relative z-[2] col-span-2 px-4 py-3 text-accent1 font-[400] text-center rounded-[20px] shadow-sm bg-bg2 hover:brightness-125">
              {{loading === true ?  'Sending...' : 'Send Message'}}
            </button>            
            <p v-if="loading === false" class="text-green-500">Thank you for your message, we'll get back to you soon.</p>                
            </div>

            <!-- Errors after submit -->
            <ul v-if="hasErrorMessages === true" class="p-4 list-disc bg-red-200 border-red-600 border-s-4 marker:text-red-600" role="list">
                <li v-for="(item, key) in ErrorMessages" :key="key" className="list-item mx-2">{{ item[0] }}</li>
            </ul>
        </form>
    </main>
</template>