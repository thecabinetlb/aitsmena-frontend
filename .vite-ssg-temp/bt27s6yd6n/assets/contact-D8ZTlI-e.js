import { mergeProps, useSSRContext, ref, reactive, watch, resolveComponent, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrLooseContain, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./InnerHero-C1gsH4_z.js";
import { I as InsideBody } from "./InsideBody-CGbuGZ0l.js";
import "vue-router";
import "../main.mjs";
import "vite-ssg";
import "@unhead/vue";
import "vue3-carousel";
import "@vueuse/motion";
import "vue-recaptcha";
import "vue-awesome-paginate";
const banner = "/images/banners/contact.webp";
const _sfc_main$2 = {
  __name: "TextGrid",
  __ssrInlineRender: true,
  props: {
    sectiontitle: String,
    sectiondescription: String,
    data: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12" }, _attrs))}><h1 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">${ssrInterpolate(__props.sectiontitle)}</h1><p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">${ssrInterpolate(__props.sectiondescription)}</p><ul role="list" class="mt-10 md:p-10 p-6 bg-gradient-to-r from-accent1/10 to-accent1/20 rounded-[16px] list-style-none"><!--[-->`);
      ssrRenderList(__props.data, (item, key) => {
        _push(`<li class="flex flex-col gap-3 md:p-10"><h2 class="tracking-wide max-sm:text-[14px] text-accent1 font-[200]"><svg width="17" height="21" viewBox="0 0 17 21" fill="none" class="inline" xmlns="http://www.w3.org/2000/svg"><path d="M8.25001 0C6.06276 0.00258035 3.96584 0.872603 2.41923 2.41922C0.872612 3.96584 0.00258913 6.06276 8.77716e-06 8.25C-0.00261089 10.0374 0.581244 11.7763 1.66201 13.2C1.66201 13.2 1.88701 13.4962 1.92376 13.539L8.25001 21L14.5793 13.5353C14.6123 13.4955 14.838 13.2 14.838 13.2L14.8388 13.1978C15.919 11.7747 16.5026 10.0366 16.5 8.25C16.4974 6.06276 15.6274 3.96584 14.0808 2.41922C12.5342 0.872603 10.4373 0.00258035 8.25001 0ZM8.25001 11.25C7.65666 11.25 7.07665 11.0741 6.5833 10.7444C6.08995 10.4148 5.70543 9.94623 5.47837 9.39805C5.25131 8.84987 5.1919 8.24667 5.30765 7.66473C5.42341 7.08279 5.70913 6.54824 6.12869 6.12868C6.54825 5.70912 7.08279 5.4234 7.66474 5.30764C8.24668 5.19189 8.84988 5.2513 9.39806 5.47836C9.94624 5.70542 10.4148 6.08994 10.7444 6.58329C11.0741 7.07664 11.25 7.65666 11.25 8.25C11.249 9.04534 10.9326 9.80783 10.3702 10.3702C9.80784 10.9326 9.04535 11.249 8.25001 11.25Z" fill="white"></path></svg><span style="${ssrRenderStyle(item.title ? null : { display: "none" })}" class="inline ps-2">${ssrInterpolate(item.title)}</span><span class="inline ps-2">${ssrInterpolate(item.address)}</span></h2><a prefetch="false" style="${ssrRenderStyle(item.phone ? null : { display: "none" })}"${ssrRenderAttr("id", "call-" + item.title + "location")}${ssrRenderAttr("aria-label", "Call" + item.title + "Location")}${ssrRenderAttr("href", "tel:" + item.phone)} class="cursor-pointer max-sm:text-[14px] font-[200] text-accent1 hover:brightness-75"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" class="inline" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_863_319" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_863_319)"><path d="M16.2002 17.0833C14.6298 17.0833 13.0521 16.7182 11.4671 15.9879C9.88222 15.2576 8.42604 14.2275 7.09854 12.8975C5.77118 11.5674 4.74236 10.1111 4.01208 8.52875C3.2818 6.94653 2.91666 5.37021 2.91666 3.79979C2.91666 3.54743 3 3.33715 3.16666 3.16896C3.33333 3.00076 3.54166 2.91667 3.79166 2.91667H6.50958C6.72 2.91667 6.90562 2.98535 7.06646 3.12271C7.22729 3.25993 7.32958 3.42952 7.37333 3.63146L7.85104 6.08333C7.8841 6.31083 7.87715 6.50632 7.83021 6.66979C7.78312 6.83327 7.69868 6.97056 7.57687 7.08167L5.65229 8.95521C5.96201 9.52243 6.3159 10.059 6.71396 10.565C7.11187 11.0708 7.54271 11.554 8.00646 12.0144C8.46368 12.4717 8.94979 12.8965 9.46479 13.2885C9.97979 13.6806 10.5359 14.0455 11.1331 14.3831L13.0031 12.4969C13.1335 12.3612 13.2915 12.266 13.4769 12.2115C13.6622 12.157 13.8547 12.1437 14.0546 12.1715L16.3685 12.6427C16.579 12.6983 16.7507 12.8056 16.8837 12.9648C17.0168 13.124 17.0833 13.3045 17.0833 13.5065V16.2083C17.0833 16.4583 16.9992 16.6667 16.831 16.8333C16.6628 17 16.4526 17.0833 16.2002 17.0833ZM5.06083 7.7725L6.54812 6.34938C6.57479 6.32799 6.59215 6.29861 6.60021 6.26125C6.60826 6.22389 6.60694 6.18917 6.59625 6.15708L6.23396 4.29479C6.22326 4.25215 6.20458 4.22014 6.17791 4.19875C6.15125 4.17736 6.11653 4.16667 6.07375 4.16667H4.29166C4.25958 4.16667 4.23284 4.17736 4.21146 4.19875C4.19021 4.22014 4.17958 4.24688 4.17958 4.27896C4.22222 4.8484 4.31541 5.42688 4.45916 6.01438C4.60278 6.60202 4.80333 7.18806 5.06083 7.7725ZM12.3108 14.9744C12.8632 15.2319 13.4393 15.4288 14.0392 15.565C14.6392 15.7011 15.1998 15.782 15.721 15.8077C15.7531 15.8077 15.7799 15.797 15.8012 15.7756C15.8226 15.7542 15.8333 15.7275 15.8333 15.6954V13.9423C15.8333 13.8995 15.8226 13.8648 15.8012 13.8381C15.7799 13.8115 15.7478 13.7928 15.7052 13.7821L13.9552 13.4263C13.9231 13.4156 13.8951 13.4142 13.871 13.4223C13.847 13.4303 13.8216 13.4477 13.7948 13.4744L12.3108 14.9744Z" fill="#1C1B1F"></path></g></svg><span class="inline ps-2">+971 4 344 4901</span></a><h2 style="${ssrRenderStyle(item.poBOX ? null : { display: "none" })}" class="max-sm:text-[14px] text-accent1 font-[400]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" class="inline" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_863_301" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_863_301)"><path d="M4.30775 19.5C3.80258 19.5 3.375 19.325 3.025 18.975C2.675 18.625 2.5 18.1974 2.5 17.6923V6.30775C2.5 5.80258 2.675 5.375 3.025 5.025C3.375 4.675 3.80258 4.5 4.30775 4.5H19.6923C20.1974 4.5 20.625 4.675 20.975 5.025C21.325 5.375 21.5 5.80258 21.5 6.30775V17.6923C21.5 18.1974 21.325 18.625 20.975 18.975C20.625 19.325 20.1974 19.5 19.6923 19.5H4.30775ZM12 12.5577L4 7.44225V17.6923C4 17.7821 4.02883 17.8558 4.0865 17.9135C4.14417 17.9712 4.21792 18 4.30775 18H19.6923C19.7821 18 19.8558 17.9712 19.9135 17.9135C19.9712 17.8558 20 17.7821 20 17.6923V7.44225L12 12.5577ZM12 11L19.8463 6H4.15375L12 11ZM4 7.44225V6V17.6923C4 17.7821 4.02883 17.8558 4.0865 17.9135C4.14417 17.9712 4.21792 18 4.30775 18H4V7.44225Z" fill="#1C1B1F"></path></g></svg><span class="inline ps-2">${ssrInterpolate(item.poBOX)}</span></h2><a prefetch="false" style="${ssrRenderStyle(item.email ? null : { display: "none" })}"${ssrRenderAttr("id", "email-" + item.title + "location")}${ssrRenderAttr("aria-label", "Email" + item.title + "Location")}${ssrRenderAttr("href", "mailto:" + item.email)} class="cursor-pointer max-sm:text-[14px] font-[200] text-accent1 hover:brightness-75"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" class="inline" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_863_301" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_863_301)"><path d="M4.30775 19.5C3.80258 19.5 3.375 19.325 3.025 18.975C2.675 18.625 2.5 18.1974 2.5 17.6923V6.30775C2.5 5.80258 2.675 5.375 3.025 5.025C3.375 4.675 3.80258 4.5 4.30775 4.5H19.6923C20.1974 4.5 20.625 4.675 20.975 5.025C21.325 5.375 21.5 5.80258 21.5 6.30775V17.6923C21.5 18.1974 21.325 18.625 20.975 18.975C20.625 19.325 20.1974 19.5 19.6923 19.5H4.30775ZM12 12.5577L4 7.44225V17.6923C4 17.7821 4.02883 17.8558 4.0865 17.9135C4.14417 17.9712 4.21792 18 4.30775 18H19.6923C19.7821 18 19.8558 17.9712 19.9135 17.9135C19.9712 17.8558 20 17.7821 20 17.6923V7.44225L12 12.5577ZM12 11L19.8463 6H4.15375L12 11ZM4 7.44225V6V17.6923C4 17.7821 4.02883 17.8558 4.0865 17.9135C4.14417 17.9712 4.21792 18 4.30775 18H4V7.44225Z" fill="#1C1B1F"></path></g></svg><span class="inline ps-2">${ssrInterpolate(item.email)}</span></a></li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TextGrid.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const ReCaptchaValid = ref(false);
    const hasErrorMessages = ref(false);
    const loading = ref(null);
    console.log("hasErrorMessages", hasErrorMessages);
    const errors = {
      NameRequired: "Name is required.",
      EmailRequired: "Email is required.",
      EmailInvalid: "Please specify a real email.",
      CountryRequired: "Country Name is required.",
      CityRequired: "City Name is required.",
      IndustryRequired: "Industry is required.",
      PhoneRequired: "Phone Number is required.",
      PhoneInvalid: "Phone Number should be numeric.",
      SubjectRequired: "Subject is required.",
      SubjectInvalid: "Invalid subject. Please select either General Inquiries or Sales and Support.",
      MessageRequired: "Please enter your message."
    };
    const ErrorMessages = ref({
      name: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      industry: "",
      subject: "",
      message: ""
    });
    console.log("ErrorMessages", ErrorMessages);
    const formData = reactive({
      data: {
        Name: {
          name: "Name",
          value: "",
          isValid: null,
          validationMessage: "",
          required: true
        },
        Phone: {
          name: "Phone",
          value: "",
          isValid: null,
          validationMessage: "",
          required: true
        },
        Email: {
          name: "Email",
          value: "",
          isValid: null,
          validationMessage: "",
          required: true
        },
        Country: {
          name: "Country",
          value: "",
          isValid: null,
          validationMessage: "",
          required: true
        },
        City: {
          name: "City",
          value: "",
          isValid: null,
          validationMessage: "",
          required: true
        },
        Industry: {
          name: "Industry",
          value: "smart-cities",
          isValid: null,
          validationMessage: "",
          required: true
        },
        Subject: {
          name: "Subject",
          value: "general-inquiry",
          isValid: true,
          validationMessage: "",
          required: false
        },
        Message: {
          name: "Message",
          value: "",
          isValid: null,
          validationMessage: "",
          required: true
        }
      },
      isValid: false
    });
    console.log("formData", formData);
    console.log("formData.isValid", formData.isValid);
    const validateField = (field) => {
      if (field.required && !field.value) {
        field.isValid = false;
        field.validationMessage = errors[`${field.name}Required`];
      } else if (field.name === "Email" && field.value && !isEmailValid(field.value)) {
        field.isValid = false;
        field.validationMessage = errors.EmailInvalid;
      } else if (field.name === "Phone" && field.value && !isPhoneValid(field.value)) {
        field.isValid = false;
        field.validationMessage = errors.PhoneInvalid;
      } else {
        field.isValid = true;
        field.validationMessage = "";
      }
    };
    const isEmailValid = (email) => {
      return /\S+@\S+\.\S+/.test(email);
    };
    const isPhoneValid = (phone) => {
      return /^[0-9]+$/.test(phone);
    };
    watch(formData, (newFormData) => {
      let allFieldsValid = true;
      for (const key in newFormData.data) {
        validateField(newFormData.data[key]);
        if (!newFormData.data[key].isValid) {
          allFieldsValid = false;
        }
      }
      formData.isValid = allFieldsValid;
      formData.value = newFormData.value;
      console.log("watcher data", formData);
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_vue_recaptcha = resolveComponent("vue-recaptcha");
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "contact-form",
        class: "flex flex-wrap justify-between w-11/12 gap-6 pt-40 mx-auto lg:gap-3 2xl:w-8/12 lg:w-10/12"
      }, _attrs))}><div class="w-full lg:w-6/12"><h1 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">Contact Us</h1><p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">Have questions or inquiries? Contact us today to learn more about our software solutions, digital services, and how we can help your business succeed in an ever ever-evolving market. Our team is here to assist you every step of the way.</p></div><form class="grid w-full h-full grid-cols-2 gap-3 lg:w-5/12"><div class="w-full col-span-2"><input type="text" id="Name" name="Name" placeholder="Your Full Name" aria-label="Enter your full name"${ssrRenderAttr("value", formData.data.Name.value)}${ssrIncludeBooleanAttr(formData.data.Name.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Name.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2"])}"><p style="${ssrRenderStyle(!formData.data.Name.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Name.validationMessage)}</p></div><div class="w-full col-span-2 sm:col-span-1"><input type="text" id="Email" name="Email" aria-label="Enter your email" placeholder="Work Email: example@gmail.com"${ssrRenderAttr("value", formData.data.Email.value)}${ssrIncludeBooleanAttr(formData.data.Email.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Email.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><p style="${ssrRenderStyle(!formData.data.Email.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Email.validationMessage)}</p></div><div class="w-full col-span-2 sm:col-span-1"><input type="text" id="Phone" name="Phone" aria-label="Enter your phone" placeholder="71 654 231"${ssrRenderAttr("value", formData.data.Phone.value)}${ssrIncludeBooleanAttr(formData.data.Phone.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Phone.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><p style="${ssrRenderStyle(!formData.data.Phone.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Phone.validationMessage)}</p></div><div class="w-full col-span-2 sm:col-span-1"><input type="text" id="Country" name="Country" aria-label="Enter your Country" placeholder="Your Country"${ssrRenderAttr("value", formData.data.Country.value)}${ssrIncludeBooleanAttr(formData.data.Country.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Country.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><p style="${ssrRenderStyle(!formData.data.Country.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Country.validationMessage)}</p></div><div class="w-full col-span-2 sm:col-span-1"><input type="text" id="City" name="City" aria-label="Enter your City" placeholder="Your City"${ssrRenderAttr("value", formData.data.City.value)}${ssrIncludeBooleanAttr(formData.data.City.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.City.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><p style="${ssrRenderStyle(!formData.data.City.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.City.validationMessage)}</p></div><div class="w-full col-span-2"><select id="industry" name="industry" aria-label="Choose an Industry" placeholder="Choose an industry"${ssrIncludeBooleanAttr(formData.data.Industry.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Industry.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1/50 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><option value="smart-cities" class="text-black" selected>Smart Cities</option><option value="food-and-beverage" class="text-black"${ssrIncludeBooleanAttr(Array.isArray(formData.data.Industry.value) ? ssrLooseContain(formData.data.Industry.value, "food-and-beverage") : ssrLooseEqual(formData.data.Industry.value, "food-and-beverage")) ? " selected" : ""}>Food and Beverage</option><option value="manufacturing" class="text-black"${ssrIncludeBooleanAttr(Array.isArray(formData.data.Industry.value) ? ssrLooseContain(formData.data.Industry.value, "manufacturing") : ssrLooseEqual(formData.data.Industry.value, "manufacturing")) ? " selected" : ""}>Manufacturing</option><option value="oil-and-gas" class="text-black"${ssrIncludeBooleanAttr(Array.isArray(formData.data.Industry.value) ? ssrLooseContain(formData.data.Industry.value, "oil-and-gas") : ssrLooseEqual(formData.data.Industry.value, "oil-and-gas")) ? " selected" : ""}>Oil and Gas</option><option value="energy" class="text-black"${ssrIncludeBooleanAttr(Array.isArray(formData.data.Industry.value) ? ssrLooseContain(formData.data.Industry.value, "energy") : ssrLooseEqual(formData.data.Industry.value, "energy")) ? " selected" : ""}>Energy</option><option value="utilities" class="text-black"${ssrIncludeBooleanAttr(Array.isArray(formData.data.Industry.value) ? ssrLooseContain(formData.data.Industry.value, "utilities") : ssrLooseEqual(formData.data.Industry.value, "utilities")) ? " selected" : ""}>Utilities</option><option value="metal-mining-and-minerals" class="text-black"${ssrIncludeBooleanAttr(Array.isArray(formData.data.Industry.value) ? ssrLooseContain(formData.data.Industry.value, "metal-mining-and-minerals") : ssrLooseEqual(formData.data.Industry.value, "metal-mining-and-minerals")) ? " selected" : ""}>Metal, Mining and Minerals</option></select><p style="${ssrRenderStyle(!formData.data.Industry.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Industry.validationMessage)}</p></div><div class="w-full col-span-2 mb-3"><select id="Subject" name="Subject" aria-label="select a subject for your message"${ssrIncludeBooleanAttr(formData.data.Subject.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Subject.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1/50 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><option class="text-black" value="general-inquiry" selected>General Inquiry</option><option class="text-black" value="sales-and-support"${ssrIncludeBooleanAttr(Array.isArray(formData.data.Subject.value) ? ssrLooseContain(formData.data.Subject.value, "sales-and-support") : ssrLooseEqual(formData.data.Subject.value, "sales-and-support")) ? " selected" : ""}>Sales and Support</option></select><p style="${ssrRenderStyle(!formData.data.Subject.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Subject.validationMessage)}</p></div><div class="w-full col-span-2"><textarea id="Message" name="Message" rows="5" aria-label="Type out your message" placeholder="Tell us about your project and your current goals. How can we help you?"${ssrIncludeBooleanAttr(formData.data.Message.required) ? " required" : ""} style="${ssrRenderStyle({ "min-height": "60px" })}" class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Message.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}">${ssrInterpolate(formData.data.Message.value)}</textarea><p style="${ssrRenderStyle(!formData.data.Message.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Message.validationMessage)}</p></div><div class="w-full col-span-2">`);
      _push(ssrRenderComponent(_component_vue_recaptcha, {
        ref: "recaptcha",
        modelValue: ReCaptchaValid.value,
        "onUpdate:modelValue": ($event) => ReCaptchaValid.value = $event,
        sitekey: "6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl"
      }, null, _parent));
      _push(`<p style="${ssrRenderStyle(!ReCaptchaValid.value ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">Please click the checkbox</p></div><div class="flex flex-wrap items-center w-full gap-2"><button aria-label="send your message" class="cursor-pointer w-fit relative z-[2] col-span-2 px-4 py-3 text-accent1 font-[400] text-center rounded-[20px] shadow-sm bg-bg2 hover:brightness-125 transition-all duration-400">${ssrInterpolate(loading.value === true ? "Sending..." : "Send Message")}</button>`);
      if (loading.value === false) {
        _push(`<p class="text-green-500">Thank you for your message, we&#39;ll get back to you soon.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (hasErrorMessages.value === true) {
        _push(`<ul class="p-4 list-disc bg-red-200 border-b-red-600 border-b-s-4 marker:text-red-600" role="list"><!--[-->`);
        ssrRenderList(ErrorMessages.value, (item, key) => {
          _push(`<li className="list-item mx-2">${ssrInterpolate(item[0])}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const locations = [
      {
        id: 1,
        address: "UAE, Dubai, Dubai Digital Park, A6 Building, 401 Office",
        phone: "00971043444901",
        email: "info@aitsmena.com"
      }
      // {
      //   id: 2,
      //   title: 'Dubai Digital Park',
      //   address: 'A6 building, 401 Office Silicon Oasis, Dubai, UAE',
      //   phone: '+971 4 344 4901',
      //   fax: '+971 4 344 4902',
      //   poBox: 'PO Box: 342112',
      //   email: 'info@aitsmena.com',
      //   website: 'https://aitsmena.com/'
      // },
      // {
      //   id:3,
      //   address: 'Sulimaniyah Office Building, Office no.214, 3132 Prince Sultan Bin Abdulaziz Road, Sulimaniyah, Riyad, Kingdom of Saudi Arabia.',
      //   phone: '+966 114314440',
      //   fax: '+966 114314440',
      //   email: 'info@aitsmena.com',
      //   website: 'https://aitsmena.com/'  
      // }  
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><title>AITS - Contact Us Today</title><meta name="description" content="Would you like to get in touch? Fill out the contact form with any inquiries you have and one of our AITS experts will respond as soon as possible."></head>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        pagebanner: unref(banner),
        pagetitle: "Get in Touch",
        pagedescription: "Learn how our solutions future-proof your business."
      }, null, _parent));
      _push(`<div class="relative">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        sectiontitle: "Office Location",
        data: locations
      }, null, _parent));
      _push(ssrRenderComponent(InsideBody, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
