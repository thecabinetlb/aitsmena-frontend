import { ref, reactive, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { useRecaptchaProvider, Checkbox } from "vue-recaptcha";
const _sfc_main = {
  __name: "ContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    useRecaptchaProvider();
    const ReCaptchaValid = ref(false);
    const hasErrorMessages = ref(false);
    const loading = ref(null);
    console.log("hasErrorMessages", hasErrorMessages);
    const errors = {
      NameRequired: "Name is required.",
      EmailRequired: "Email is required.",
      EmailInvalid: "Please specify a real email.",
      CompanyNameRequired: "Company Name is required.",
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
      company_name: "",
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
        CompanyName: {
          name: "CompanyName",
          value: "",
          isValid: null,
          validationMessage: "",
          required: true
        },
        Subject: {
          name: "Subject",
          value: "General Inquiries",
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
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "contact-form",
        class: "flex flex-wrap justify-between w-11/12 gap-6 mx-auto lg:gap-3 2xl:w-8/12 lg:w-10/12"
      }, _attrs))}><div class="w-full lg:w-6/12"><h1 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">Contact Us</h1><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">Have questions or inquiries? Contact us today to learn more about our software solutions, digital services, and how we can help your business succeed. Our team is here to assist you every step of the way.</p></div><form class="grid w-full h-full grid-cols-2 gap-3 lg:w-5/12"><div class="w-full col-span-2 sm:col-span-1"><input type="text" id="Name" name="Name" placeholder="Your Name" aria-label="Enter your name"${ssrRenderAttr("value", formData.data.Name.value)}${ssrIncludeBooleanAttr(formData.data.Name.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Name.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2"])}"><p style="${ssrRenderStyle(!formData.data.Name.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Name.validationMessage)}</p></div><div class="w-full col-span-2 sm:col-span-1"><input type="text" id="Email" name="Email" aria-label="Enter your email" placeholder="example@gmail.com"${ssrRenderAttr("value", formData.data.Email.value)}${ssrIncludeBooleanAttr(formData.data.Email.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Email.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><p style="${ssrRenderStyle(!formData.data.Email.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Email.validationMessage)}</p></div><div class="w-full col-span-2 sm:col-span-1"><input type="text" id="Phone" name="Phone" aria-label="Enter your phone" placeholder="00961 71 654 231"${ssrRenderAttr("value", formData.data.Phone.value)}${ssrIncludeBooleanAttr(formData.data.Phone.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Phone.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><p style="${ssrRenderStyle(!formData.data.Phone.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Phone.validationMessage)}</p></div><div class="w-full col-span-2 sm:col-span-1"><input type="text" id="CompanyName" name="CompanyName" aria-label="Enter your company&#39;s name" placeholder="Your Company&#39;s Name"${ssrRenderAttr("value", formData.data.CompanyName.value)}${ssrIncludeBooleanAttr(formData.data.CompanyName.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.CompanyName.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><p style="${ssrRenderStyle(!formData.data.CompanyName.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.CompanyName.validationMessage)}</p></div><div class="w-full col-span-2 mb-3"><select id="Subject" name="Subject" aria-label="select a subject for your message"${ssrIncludeBooleanAttr(formData.data.Subject.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Subject.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1/50 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><option class="text-black" selected>General Inquiries</option><option class="text-black"${ssrIncludeBooleanAttr(Array.isArray(formData.data.Subject.value) ? ssrLooseContain(formData.data.Subject.value, null) : ssrLooseEqual(formData.data.Subject.value, null)) ? " selected" : ""}>Sales and Support</option></select><p style="${ssrRenderStyle(!formData.data.Subject.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Subject.validationMessage)}</p></div><div class="w-full col-span-2"><textarea id="Message" name="Message" rows="5" aria-label="Type out your message" placeholder="Briefly tell us about your project and your current goals. How can we help you?"${ssrIncludeBooleanAttr(formData.data.Message.required) ? " required" : ""} style="${ssrRenderStyle({ "min-height": "60px" })}" class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Message.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}">${ssrInterpolate(formData.data.Message.value)}</textarea><p style="${ssrRenderStyle(!formData.data.Message.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Message.validationMessage)}</p></div><div class="w-full col-span-2">`);
      _push(ssrRenderComponent(unref(Checkbox), {
        modelValue: ReCaptchaValid.value,
        "onUpdate:modelValue": ($event) => ReCaptchaValid.value = $event,
        theme: "dark"
      }, null, _parent));
      _push(`<p style="${ssrRenderStyle(!ReCaptchaValid.value ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">Please click the checkbox</p></div><div class="flex flex-wrap items-center w-full gap-2"><button aria-label="send your message" class="cursor-pointer w-fit relative z-[2] col-span-2 px-4 py-3 text-accent1 font-[400] text-center rounded-[20px] shadow-sm bg-bg2 hover:brightness-125">${ssrInterpolate(loading.value === true ? "Sending..." : "Send Message")}</button>`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
