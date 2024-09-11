import { ref, computed, resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { RouterLink } from "vue-router";
import { g as getAllResources } from "./api-C19Ua8KE.js";
import { _ as _sfc_main$2 } from "./InnerHero-C1gsH4_z.js";
const itemsPerPage = 6;
const _sfc_main$1 = {
  __name: "PostsList",
  __ssrInlineRender: true,
  props: {
    data: Array,
    uniqueIndustries: Array
  },
  setup(__props) {
    const props = __props;
    const isClicked = ref(null);
    const filteredData = ref(props.data);
    const currentPage = ref(1);
    const filterData = (industry) => {
      isClicked.value = industry;
      {
        filteredData.value = props.data;
      }
      currentPage.value = 1;
    };
    filterData("All");
    const formatPublicationType = (publicationType) => {
      return publicationType.toLowerCase().replace(/\s+/g, "-");
    };
    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      return filteredData.value.slice(start, end);
    });
    const onPageChange = (page) => {
      currentPage.value = page;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_vue_awesome_paginate = resolveComponent("vue-awesome-paginate");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-11/12 mx-auto 2xl:w-8/12 lg:w-10/12" }, _attrs))}><div class="flex flex-wrap justify-end gap-6 mt-10"><button class="${ssrRenderClass([{ "border-b-2 border-accent1": isClicked.value === "All", "border-b-2 border-bg2": isClicked.value != "All" }, "px-4 py-3 w-fit max-sm:text-[14px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] transition-all duration-400 rounded-[16px] text-accent1 bg-transparent hover:border-accent1 focus:outline-none"])}"> All</button><!--[-->`);
      ssrRenderList(props.uniqueIndustries, (item, key) => {
        _push(`<button${ssrRenderAttr("id", item + (isClicked.value === item ? "-active" : ""))}${ssrRenderAttr("aria-label", "show " + item)} class="${ssrRenderClass([{ "border-b-2 border-accent1": isClicked.value === item, "border-b-2 border-bg2": isClicked.value != item }, "px-4 py-3 w-fit max-sm:text-[14px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] transition-all duration-400 rounded-[16px] text-accent1 bg-transparent hover:border-accent1 focus:outline-none"])}">${ssrInterpolate(item)}</button>`);
      });
      _push(`<!--]--></div><ul role="list" class="grid grid-cols-1 gap-3 mt-10 lg:grid-cols-3 sm:grid-cols-2 list-style-none"><!--[-->`);
      ssrRenderList(paginatedData.value, (item, key) => {
        _push(`<li class="flex-grow group w-full relative group sm:min-h-[135px] rounded-[16px] border-2 border-bg2">`);
        if (item.slug && item.publication_type) {
          _push(ssrRenderComponent(unref(RouterLink), {
            id: "go-to-" + item.title + "-page",
            "aria-label": "read more about " + item.title,
            to: `/resource-center/${formatPublicationType(item.publication_type)}/${item.slug}`
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="relative overflow-hidden aspect-video bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]"${_scopeId}><div class="absolute inset-0 z-[-1] duration-500 transform group-hover:scale-110" style="${ssrRenderStyle({ backgroundImage: "url(" + item.image + ")", backgroundSize: "cover", backgroundPosition: "center" })}"${_scopeId}></div>`);
                if (item.customer_logo) {
                  _push2(`<div class="p-2 absolute top-3 right-3 w-1/4 h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]"${_scopeId}><img${ssrRenderAttr("src", item.customer_logo)}${ssrRenderAttr("alt", item.title)} width="100%" height="100%" center cover responsive loading="lazy" class="mx-auto aspect-1.72/1 scale-125"${_scopeId}></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex flex-col gap-3 p-6"${_scopeId}><h2 class="p-2 relative w-fit z-[3] bottom-10 -mb-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2"${_scopeId}>${ssrInterpolate(item.publication_type)}</h2><h3 class="text-accent2 font-[200] max-sm:text-[14px]"${_scopeId}>${ssrInterpolate(item.published_at)}</h3><h2 class="text-accent1 font-[400] sm:text-xl"${_scopeId}>${ssrInterpolate(item.industry)}</h2><h2 class="text-accent1 font-[200] sm:text-xl"${_scopeId}>${ssrInterpolate(item.title)}</h2><p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px]"${_scopeId}>${ssrInterpolate(item.summary)}</p>`);
                _push2(ssrRenderComponent(unref(RouterLink), {
                  id: "go-to-" + item.title + "-page",
                  "aria-label": "read more about " + item.title,
                  to: `/resource-center/${item.publication_type.toLowerCase().replace(/\s+/g, "-")}/${item.slug}`,
                  class: "border-accent2 text-accent2 w-[34px] h-[34px] cursor-pointer grid place-content-center ms-auto me-0 border-2 transition-all duration-400 hover:text-bg2 hover:border-bg2 text-xl rounded-full"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` 🡥 `);
                    } else {
                      return [
                        createTextVNode(" 🡥 ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "relative overflow-hidden aspect-video bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]" }, [
                    createVNode("div", {
                      class: "absolute inset-0 z-[-1] duration-500 transform group-hover:scale-110",
                      style: { backgroundImage: "url(" + item.image + ")", backgroundSize: "cover", backgroundPosition: "center" }
                    }, null, 4),
                    item.customer_logo ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "p-2 absolute top-3 right-3 w-1/4 h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]"
                    }, [
                      createVNode("img", {
                        src: item.customer_logo,
                        alt: item.title,
                        width: "100%",
                        height: "100%",
                        center: "",
                        cover: "",
                        responsive: "",
                        loading: "lazy",
                        class: "mx-auto aspect-1.72/1 scale-125"
                      }, null, 8, ["src", "alt"])
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex flex-col gap-3 p-6" }, [
                    createVNode("h2", { class: "p-2 relative w-fit z-[3] bottom-10 -mb-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2" }, toDisplayString(item.publication_type), 1),
                    createVNode("h3", { class: "text-accent2 font-[200] max-sm:text-[14px]" }, toDisplayString(item.published_at), 1),
                    createVNode("h2", { class: "text-accent1 font-[400] sm:text-xl" }, toDisplayString(item.industry), 1),
                    createVNode("h2", { class: "text-accent1 font-[200] sm:text-xl" }, toDisplayString(item.title), 1),
                    createVNode("p", { class: "tracking-wide text-accent2 font-[200] max-sm:text-[14px]" }, toDisplayString(item.summary), 1),
                    createVNode(unref(RouterLink), {
                      id: "go-to-" + item.title + "-page",
                      "aria-label": "read more about " + item.title,
                      to: `/resource-center/${item.publication_type.toLowerCase().replace(/\s+/g, "-")}/${item.slug}`,
                      class: "border-accent2 text-accent2 w-[34px] h-[34px] cursor-pointer grid place-content-center ms-auto me-0 border-2 transition-all duration-400 hover:text-bg2 hover:border-bg2 text-xl rounded-full"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" 🡥 ")
                      ]),
                      _: 2
                    }, 1032, ["id", "aria-label", "to"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="mx-auto mt-10 text-end">`);
      _push(ssrRenderComponent(_component_vue_awesome_paginate, {
        modelValue: currentPage.value,
        "onUpdate:modelValue": ($event) => currentPage.value = $event,
        "total-items": filteredData.value.length,
        "items-per-page": itemsPerPage,
        "max-pages-shown": 5,
        onPageChange
      }, null, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PostsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const banner = "/images/banners/resources.webp";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = getAllResources();
    let uniqueIndustries = [...new Set(posts.map((post) => post.industry))];
    console.log(uniqueIndustries);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><title>AITS - Resource Center</title><meta name="description" content="Got a knack for reading? Gain access to free resources including whitepapers, industry insights, educational blogs, and specialized webinars."></head>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        pagebanner: unref(banner),
        pagetitle: "Innovation Insights Hub",
        pagedescription: "Explore the latest resources designed to keep you informed and ahead in the fast-paced world of industrial digital transformation."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        uniqueIndustries: unref(uniqueIndustries),
        data: unref(posts)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/resource-center/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
