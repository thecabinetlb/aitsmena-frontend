import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { a as getResourceBySlug } from "./api-C19Ua8KE.js";
import { useRoute } from "vue-router";
const _sfc_main$1 = {
  __name: "PostDetails",
  __ssrInlineRender: true,
  props: {
    sectiontitle: String,
    item: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12" }, _attrs))}><h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">${ssrInterpolate(__props.item.title)}</h1><p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">${ssrInterpolate(__props.item.summary)}</p>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        id: "go-to-contact-page",
        "aria-label": "go to contact page",
        to: "/contact",
        class: "block w-fit ms-auto me-0 cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 transition-all duration-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col gap-3 mt-10"><div class="relative overflow-hidden aspect-video rounded-[16px]" style="${ssrRenderStyle({ backgroundImage: "url(" + __props.item.image + ")", backgroundSize: "cover", backgroundPosition: "center" })}">`);
      if (__props.item.customer_logo) {
        _push(`<div class="p-2 absolute top-3 right-3 w-1/4 h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]"><img${ssrRenderAttr("src", __props.item.customer_logo)}${ssrRenderAttr("alt", __props.item.title)} width="100%" height="100%" center cover responsive loading="lazy" class="mx-auto aspect-1.72/1 scale-125"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><h3 class="text-accent2 font-[200] max-sm:text-[14px] mb-6">${ssrInterpolate(__props.item.published_at)}</h3>`);
      if (__props.item.body) {
        _push(`<p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]">${ssrInterpolate(__props.item.body)}</p>`);
      } else {
        _push(`<div class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]"><h1 class="font-[200] md:text-4xl text-[30px] mb-2">Client Overview:</h1><p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] mb-6">AITS specializes in empowering industries to thrive by providing innovative software solutions tailored to their unique needs, all while prioritizing sustainability and efficiency. As the main company within the IBI family, AITS plays a pivotal role in driving positive transformation across various industrial sectors. With a keen focus on sustainability, AITS is committed to helping our clients achieve their objectives while minimizing environmental impact. AITS is the holder of two distinguished sub-companies: AVEVA Select Gulf and IC2. Together these companies offer a comprehensive suite of solutions designed to address the diverse challenges faced by today&#39;s industries. AITS’s mission is to become the leading industrial software innovator in the Gulf by delivering cutting-edge software solutions and exceptional customer experiences. </p><h1 class="font-[200] md:text-4xl text-[30px] mb-2">Objectives</h1><p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] mb-6"> To inform the target audience about what the Scada system is and what industries mainly use it, a breakdown of its 3 main layers, and the benefits / the role that the Scada system plays in industrial automation (industry 4.0). </p><h1 class="font-[200] md:text-4xl text-[30px] mb-2">Target Audience</h1><p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] mb-6"> Industrial companies (Small, Medium, or Large) in the Gulf region that haven&#39;t implemented the Scada system yet. These companies could work in the F&amp;B manufacturing, oil &amp; gas, energy, utilities, or the metal, mining, &amp; minerals industries. </p></div>`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PostDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    console.log(route);
    const post = getResourceBySlug(route.params.slug);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><title> Resource Center - ${ssrInterpolate(unref(post).title)}</title><meta name="description"${ssrRenderAttr("content", unref(post).summary)}></head>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        sectiontitle: "Resource Details",
        item: unref(post)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/resource-center/[...publication_type]/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
