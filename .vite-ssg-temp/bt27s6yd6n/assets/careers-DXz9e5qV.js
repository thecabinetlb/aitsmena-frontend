import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { RouterLink } from "vue-router";
import { _ as _sfc_main$3 } from "./InnerHero-C1gsH4_z.js";
import { I as InsideBody } from "./InsideBody-CGbuGZ0l.js";
import "../main.mjs";
import "vite-ssg";
import "@unhead/vue";
import "vue3-carousel";
import "@vueuse/motion";
import "vue-recaptcha";
import "vue-awesome-paginate";
const banner = "/images/banners/careers.webp";
const _sfc_main$2 = {
  __name: "JobsList",
  __ssrInlineRender: true,
  props: {
    sectionid: String,
    sectiontitle: String,
    sectiondescription: String,
    data: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: __props.sectionid,
        class: "w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12"
      }, _attrs))}><h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">${ssrInterpolate(__props.sectiontitle)}</h1><p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">${ssrInterpolate(__props.sectiondescription)}</p>`);
      if (__props.data) {
        _push(`<ul role="list" class="flex flex-wrap justify-center lg;justify-between mt-10 gap-6 lg:gap-3 list-style-none"><!--[-->`);
        ssrRenderList(__props.data, (item, key) => {
          _push(`<li class="flex-grow lg:w-5/12 w-full relative group sm:min-h-[135px] bg-extended-noise bg-cover bg-center rounded-[16px]"><div class="p-6 w-full h-full relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2"><div class="w-8/12"><h3 class="font-[200] max-sm:text-[14px] text-accent1 underline mb-3">${ssrInterpolate(item.type)}</h3><h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500] mb-3">${ssrInterpolate(item.title)}</h2><p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">${ssrInterpolate(item.location)}</p></div>`);
          _push(ssrRenderComponent(unref(RouterLink), {
            id: "go-to-" + item.title + "-page",
            "aria-label": "apply for" + item.title,
            to: item.to,
            target: item.target,
            class: "cursor-pointer px-4 py-3 mt-auto mb-0 w-fit block max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 transition-all duration-400"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Apply`);
              } else {
                return [
                  createTextVNode("Apply")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<div class="lg:w-full relative group bg-extended-noise bg-cover bg-center bg-opacity-50 rounded-[16px] mt-10 mx-auto"><div class="md:px-10 p-6 relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2"><h3 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500]">No posted ${ssrInterpolate(__props.sectionid)}.</h3></div></div>`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/JobsList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "BenefitsFlexWithBlur",
  __ssrInlineRender: true,
  props: {
    sectiontitle: String,
    sectiondescription: String
    // data: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "employee-benefits",
        class: "w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12"
      }, _attrs))}><h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">${ssrInterpolate(__props.sectiontitle)}</h1><p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">${ssrInterpolate(__props.sectiondescription)}</p><div class="space-y-3 md:p-10 p-6 bg-gradient-to-r from-accent1/10 to-accent1/20 rounded-[16px] mt-10"><p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">At AITS, we’re committed to creating an environment where employees thrive both personally and professionally. Our inclusive culture celebrates diversity and collaboration, valuing every employee. We’re committed to aligning our mission and values with the work we do. Our purpose-driven approach ensures that every employee understands their impact and contributes meaningfully to our shared goals. Whether it’s serving our customers, driving innovation, or making a positive impact in the world, purpose guides our actions and inspires excellence.</p><p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">Our attractive salary packages include performance-based annual increases, bonuses, and comprehensive benefits like health insurance, annual air tickets, and various paid leaves. Get access to training, professional development opportunities, and leadership programs for career growth, and enjoy flexible hours and remote work options to support work-life balance.</p></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BenefitsFlexWithBlur.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "careers",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><title>AITS - Join the AITS Team</title><meta name="description" content="Browse through our available job openings to join the team and make an impact at AITS! We welcome diverse experts from all parts of the world."></head>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        pagebanner: unref(banner),
        pagetitle: "Careers",
        pagedescription: "You might just be the employee we’ve been looking for! Browse through our selection of job vacancies and apply to be part of the family."
      }, null, _parent));
      _push(`<section class="relative -mt-40">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        sectionid: "jobs-openings",
        sectiontitle: "Job Openings",
        sectiondescription: "Stay informed with the latest insights, trends, and developments in industrial automation.\r\n      Explore our blog for thought-provoking articles, expert opinions, and practical tips to help\r\n      your business stay ahead of the curve."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        sectionid: "internship-opportunities",
        sectiontitle: "Internship Opportunities",
        sectiondescription: "Got a knack for learning? Join our team as an intern and develop your skills while exploring the mystical world of software solutions and digital services."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { sectiontitle: "Employees Benefits" }, null, _parent));
      _push(ssrRenderComponent(InsideBody, null, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/careers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
