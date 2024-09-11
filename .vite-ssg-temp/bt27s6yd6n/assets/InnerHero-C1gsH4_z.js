import { mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
import { RouterLink } from "vue-router";
const _imports_0 = "/images/banners/elements/topleft.webp";
const _imports_1 = "/images/banners/elements/topright.webp";
const _imports_2 = "/images/banners/elements/bottomright.webp";
const logo = "/AITSLogoWithSlogan.webp";
const _sfc_main = {
  __name: "InnerHero",
  __ssrInlineRender: true,
  props: {
    pagebanner: String,
    pagetitle: String,
    pagedescription: String,
    sectionid: String,
    isAbout: Boolean,
    hyphen: Boolean,
    cta: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col justify-center items-center -mt-[40px] md:h-[90vh] min-h-[70vh]" }, _attrs))}><img${ssrRenderAttr("src", __props.pagebanner)}${ssrRenderAttr("alt", "AITS" + __props.pagetitle)} width="1140" height="718" center cover responsive loading="eager" class="absolute inset-0 z-[-1] w-full h-full aspect-[1.59/1]"><div class="absolute w-11/12 mx-auto md:transform md:-translate-y-1/2 md:top-1/2 z-[1] 2xl:w-8/12 lg:w-10/12 top-2/3 -translate-y-2/3"><div class="mx-auto md:h-[85%] min-h-[40vh] space-y-6 rounded-[16px] flex flex-col justify-center p-6 items-center bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px]">`);
      if (__props.isAbout) {
        _push(`<img${ssrRenderAttr("src", unref(logo))} alt="AITS logo" width="443" height="148" cover center responsive loading="eager" class="transform scale-95">`);
      } else {
        _push(`<h1 class="font-[400] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] text-center uppercase mx-auto lg:w-9/12">${ssrInterpolate(__props.pagetitle)}</h1>`);
      }
      _push(`<p class="tracking-wide text-accent2 font-[200] max-sm:text-[14px] mx-auto lg:w-9/12 text-justify" style="${ssrRenderStyle({ "text-align-last": "center" })}">${ssrInterpolate(__props.pagedescription)}</p>`);
      if (__props.cta) {
        _push(ssrRenderComponent(unref(RouterLink), {
          id: "go-to-contact-page",
          "aria-label": "go to contact page",
          to: "/contact",
          class: "block relative z-[2] cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125 transition-all duration-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(__props.cta)}`);
            } else {
              return [
                createTextVNode(toDisplayString(__props.cta), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><img${ssrRenderAttr("src", _imports_0)} alt="AITS" width="909" height="683" center cover responsive loading="lazy" class="absolute inset-0 z-1"><img${ssrRenderAttr("src", _imports_1)} alt="AITS" width="1232" height="792" center cover responsive loading="lazy" class="absolute top-0 right-0 z-1"><img${ssrRenderAttr("src", _imports_2)} alt="AITS" width="728" height="1074" center cover responsive loading="lazy" class="absolute bottom-0 right-0 z-1"></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/InnerHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
