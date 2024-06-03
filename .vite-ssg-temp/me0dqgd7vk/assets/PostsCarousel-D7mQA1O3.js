import { onMounted, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Carousel, Pagination, Slide } from "vue3-carousel";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  __name: "PostsCarousel",
  __ssrInlineRender: true,
  props: {
    sectionid: String,
    sectiontitle: String,
    sectiondescription: String,
    data: Array
  },
  setup(__props) {
    const getItemsToShow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        return 2;
      } else if (screenWidth >= 1024) {
        return 1.5;
      } else if (screenWidth >= 768) {
        return 2.25;
      } else if (screenWidth >= 640) {
        return 2.5;
      } else if (screenWidth < 640) {
        return 1;
      }
    };
    onMounted(() => {
      window.addEventListener("resize", () => {
      });
    });
    const myCarousel = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: __props.sectionid,
        class: "relative flex flex-wrap items-center w-full gap-6 pt-40 lg:gap-3 lg:justify-between"
      }, _attrs))} data-v-fabd039e><div class="lg:w-6/12 w-11/12 2xl:ps-[15.666667%] lg:ps-[8.333333%] lg:pe-8 mx-auto h-full" data-v-fabd039e><h1 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6" data-v-fabd039e>${ssrInterpolate(__props.sectiontitle)}</h1><p class="text-accent2 font-[200] max-sm:text-[14px] sm:text-justify mb-6" data-v-fabd039e>${ssrInterpolate(__props.sectiondescription)}</p></div><div class="relative w-full mx-auto lg:w-5/12" data-v-fabd039e>`);
      _push(ssrRenderComponent(unref(Carousel), {
        ref_key: "myCarousel",
        ref: myCarousel,
        "items-to-show": getItemsToShow(),
        "wrap-around": true,
        class: "w-full h-full maskleft"
      }, {
        addons: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Pagination), null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Pagination))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.data, (item, key) => {
              _push2(ssrRenderComponent(unref(Slide), {
                key,
                class: "rounded-[16px] md:aspect-square border-2 border-bg2 my-10"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="w-full h-40 bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]" data-v-fabd039e${_scopeId2}></div><div class="flex flex-col gap-3 p-6 lg:gap-6" data-v-fabd039e${_scopeId2}><h3 class="text-accent2 font-[200] max-sm:text-[14px]" data-v-fabd039e${_scopeId2}>${ssrInterpolate(item.date)}</h3><h2 class="text-accent1 font-[400] sm:text-lg sm:min-h-[56px] min-h-[56px]" data-v-fabd039e${_scopeId2}>${ssrInterpolate(item.title)}</h2><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify sm:min-h-[72px] min-h-[63px]" data-v-fabd039e${_scopeId2}>${ssrInterpolate(item.summary)}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "w-full h-40 bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]" }),
                      createVNode("div", { class: "flex flex-col gap-3 p-6 lg:gap-6" }, [
                        createVNode("h3", { class: "text-accent2 font-[200] max-sm:text-[14px]" }, toDisplayString(item.date), 1),
                        createVNode("h2", { class: "text-accent1 font-[400] sm:text-lg sm:min-h-[56px] min-h-[56px]" }, toDisplayString(item.title), 1),
                        createVNode("p", { class: "text-accent2 font-[200] max-sm:text-[14px] text-justify sm:min-h-[72px] min-h-[63px]" }, toDisplayString(item.summary), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (item, key) => {
                return openBlock(), createBlock(unref(Slide), {
                  key,
                  class: "rounded-[16px] md:aspect-square border-2 border-bg2 my-10"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "w-full h-40 bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]" }),
                    createVNode("div", { class: "flex flex-col gap-3 p-6 lg:gap-6" }, [
                      createVNode("h3", { class: "text-accent2 font-[200] max-sm:text-[14px]" }, toDisplayString(item.date), 1),
                      createVNode("h2", { class: "text-accent1 font-[400] sm:text-lg sm:min-h-[56px] min-h-[56px]" }, toDisplayString(item.title), 1),
                      createVNode("p", { class: "text-accent2 font-[200] max-sm:text-[14px] text-justify sm:min-h-[72px] min-h-[63px]" }, toDisplayString(item.summary), 1)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PostsCarousel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PostsCarousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fabd039e"]]);
export {
  PostsCarousel as default
};
