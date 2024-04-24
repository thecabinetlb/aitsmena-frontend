<script setup>
import { ref } from 'vue'
import { Checkbox } from 'vue-recaptcha';
import { useRecaptchaProvider } from 'vue-recaptcha'

useRecaptchaProvider()
const formData = ref({
    name: '',
    email: '',
    phone: '',
    subject: '',
    company: '',
    message: '',
  });
  const response = ref()
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
            <div class="w-full col-span-2o">
              <div>{{ response ? 'Verified' : 'Please click the checkbox' }}</div>
              <Checkbox v-model="response" theme="dark" />          
            </div>
            <button aria-label="go to contact section" class="cursor-pointer w-fit col-span-2 px-4 py-3 text-accent1 font-[400] text-center rounded-[20px] shadow-sm bg-bg2 hover:brightness-125">Send Message</button>    
        </form>
    </main>
</template>
<!-- 
const ReCaptchaKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

export default ReCaptchaKey;
 if (!reCaptchaValid) {
      setReCaptchaValid(false);
      return;
    }    
      const [postError, setPostError] = useState(false);
  const [queryResult, setQueryResult] = useState();

  const formSubmitted = async (event) => {
    event.preventDefault();
    setLoading(true);
    dispatchForm({
      type: "form_submit",
    });
    if (!reCaptchaValid) {
      setReCaptchaValid(false);
      return;
    }    
    setReCaptchaValid(true);
    if (formState.isValid) {
      const formData = {};

      for (const key in formState.data) {
        formData[key] = formState.data[key].value;
      }

      const encRes = await GETEncryptQueryApp({
        Barcode: formData.barCode,
        Selected: "Bar",
      });

      if (encRes.error) {
        setPostError(true);
        setLoading(false);
        return;
      } else {
        setPostError(false);
        setLoading(false);
      }
      setLoading(true);

      const { data, status, error } = await POSTQueryApp(encRes);

      if (!error) {
        if (status == 200) 
        setQueryResult(data.Records);
      }     
    }
  };
      <div className="col-span-2 flex justify-between items-center sm:flex-col">
        <div
            className={`g-recaptcha ${
              reCaptchaValid == false && ""
            } rounded-md`}
          >
            <ReCAPTCHA sitekey={ReCaptchaKey} onChange={onChange} />
            <div
              className={`text-red-600 text-lg m-2 ${
                reCaptchaValid == false ? "max-h-20" : "max-h-0"
              } overflow-hidden transition-all duration-300`}
            >
              {t("form:fieldIsRequired")}
            </div>
          </div>           
          <div className="md:w-1/2 sm:w-full w-full flex items-center md:justify-end justify-start">
            <PrimaryButton>
              {t("send")}
            </PrimaryButton>
            <SecondaryButton
            onClick={clearInputs}
            type="button"
            >
              {t("cancel")}
            </SecondaryButton>
          </div>
      </div>
        const defaultData = {
    data: {
      Type: {
        value: "CorMessageRequestFromWebsite",
        isValid: true,
        validationMessage: "",
        required: true,
        ref: useRef(),
      },
      RequesterType: {
        value: "I",
        isValid: true,
        validationMessage: "",
        required: true,
        ref: useRef(),
      },
      Nic: {
        value: "",
        isValid: true,
        validationMessage: "",
        required: false,
        ref: useRef(),
        hidden: true
      },
      Name: {
        value: "",
        isValid: null,
        validationMessage: "",
        required: true,
        ref: useRef(),
      },
      Email: {
        value: "",
        isValid: true,
        validationMessage: "",
        required: false,
        ref: useRef(),
      },
      MobileNo: {
        value: "",
        isValid: null,
        validationMessage: "",
        required: true,
        ref: useRef(),
      },
      Subject: {
        value: "",
        isValid: null,
        validationMessage: "",
        required: true,
        ref: useRef(),
      },
      Message: {
        value: "",
        isValid: null,
        validationMessage: "",
        required: true,
        ref: useRef(),
      },
      RequestFiles: {
        value: selectedFiles,
        isValid: true,
        validationMessage: "",
        required: false,
        ref: useRef(),
      }
    },
    isValid: false,
  };
 -->