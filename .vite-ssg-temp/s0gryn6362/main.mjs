import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, resolveComponent, resolveDirective, reactive, watch, onMounted, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrGetDirectiveProps, ssrIncludeBooleanAttr, ssrRenderClass, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { RouterLink, useRoute, createRouter, createWebHistory } from "vue-router";
import { useSeoMeta, createHead } from "@unhead/vue";
import { useRecaptchaProvider, Checkbox } from "vue-recaptcha";
import { Carousel, Pagination, Slide } from "vue3-carousel";
import { MotionPlugin } from "@vueuse/motion";
import { InferSeoMetaPlugin } from "@unhead/addons";
import { VueRecaptchaPlugin } from "vue-recaptcha/head";
import { ViteSSG } from "vite-ssg";
const logo$1 = "/AITSLogoNoSlogan.webp";
const _sfc_main$q = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const navlinks = [
      { id: 1, name: "Home", to: "/" },
      { id: 2, name: "About", to: "/about" },
      {
        id: 3,
        name: "Industries",
        to: "/industries"
      },
      {
        id: 4,
        name: "Resources",
        to: "/resources",
        submenu: [
          { id: 4, name: "Blog", to: "#blog" },
          { id: 5, name: "Whitepapers", to: "#whitepapers" },
          // { id: 6, name: 'Webinars', to:'#webinars' },
          { id: 7, name: "Industry Insights", to: "#industry-insights" }
        ]
      },
      {
        id: 5,
        name: "Careers",
        to: "/careers",
        submenu: [
          { id: 8, name: "Job Openings", to: "#jobs-openings" },
          { id: 9, name: "Internship Opportunities", to: "#internship-opportunities" },
          { id: 10, name: "Employee Benefits", to: "#employee-benefits" }
        ]
      },
      { id: 6, name: "Contact", to: "/contact" }
    ];
    const hasSubMenu = ref(false);
    const openSubMenu = ref(null);
    const isOpen = ref(false);
    const isClicked = ref(null);
    const toggleSubMenu = (item) => {
      hasSubMenu.value = item.submenu ? true : false;
      isOpen.value = hasSubMenu.value ? true : false;
      openSubMenu.value = openSubMenu.value !== item.id ? item.id : null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["fixed left-1/2 transform bg-bg/90 -translate-x-1/2 top-0 h-[67px] z-[9] 2xl:w-8/12 lg:w-10/12 w-11/12 lg:flex justify-between items-center mx-auto px-6 rounded-b-[16px]", { "h-fit": isOpen.value }]
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        id: "Home",
        "aria-label": "go to home",
        to: "/",
        class: "w-4/12"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(logo$1))} alt="AITS logo" width="80" height="22" cover center responsive loading="eager" class="max-lg:my-[20px]"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logo$1),
                alt: "AITS logo",
                width: "80",
                height: "22",
                cover: "",
                center: "",
                responsive: "",
                loading: "eager",
                class: "max-lg:my-[20px]"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="items-center justify-end hidden w-8/12 h-full gap-2.5 lg:flex"><!--[-->`);
      ssrRenderList(navlinks, (item, key) => {
        _push(`<div class="relative">`);
        _push(ssrRenderComponent(unref(RouterLink), {
          id: item.name + (openSubMenu.value === item.id ? "-active" : ""),
          "aria-label": "go to " + item.name,
          to: item.to,
          activeClass: "bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]",
          exactActiveClass: "bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[8px]",
          class: "py-2 px-3 cursor-pointer text-lg font-[400] text-accent1 hover:bg-gradient-to-r hover:from-accent1/10 hover:to-accent1/20 hover:backdrop-blur-[16px] hover:rounded-[8px]",
          onMouseenter: ($event) => (openSubMenu.value = item.id, hasSubMenu.value = item.submenu ? true : false)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (hasSubMenu.value && openSubMenu.value === item.id) {
          _push(`<nav class="w-[290px] h-fit absolute left-0 top-[50px] p-6 rounded-[16px] bg-bg/90"><!--[-->`);
          ssrRenderList(item.submenu, (subitem, subkey) => {
            _push(`<div class="hover:text-accent1/70 cursor-pointer font-[400] text-accent1 text-lg pb-3 drop-shadow-md">`);
            _push(ssrRenderComponent(unref(RouterLink), {
              id: subitem.name + (isClicked.value === subitem.id ? "-active" : ""),
              "aria-label": "go to " + subitem.name,
              to: { path: item.to, hash: subitem.to },
              class: { "text-accent1/70": isClicked.value === subitem.id }
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(subitem.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(subitem.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></nav>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></nav><button${ssrRenderAttr("id", !isOpen.value ? "open-menu" : "close-menu")}${ssrRenderAttr("aria-label", !isOpen.value ? "open menu" : "close menu")} class="absolute flex items-center justify-center w-6 h-6 lg:hidden right-6 top-6">`);
      if (!isOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" fill="white" viewBox="0 0 50 50"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      if (isOpen.value) {
        _push(`<h1 class="text-2xl text-accent1">✕</h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
      if (isOpen.value) {
        _push(`<nav class="w-full py-5 mt-5 space-y-4 lg:hidden"><!--[-->`);
        ssrRenderList(navlinks, (item, key) => {
          _push(`<div>`);
          _push(ssrRenderComponent(unref(RouterLink), {
            id: item.name + (isClicked.value === item.id ? "-active" : ""),
            "aria-label": "go to " + item.name,
            to: item.to,
            class: "cursor-pointer font-[400] text-accent1 drop-shadow-md",
            activeClass: "text-accent1/70",
            exactActiveClass: "text-accent1/70",
            onClick: ($event) => toggleSubMenu(item)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          if (hasSubMenu.value && openSubMenu.value === item.id) {
            _push(`<nav class="mt-3 w-full p-4 rounded-[16px] bg-bg/70"><!--[-->`);
            ssrRenderList(item.submenu, (subitem, subkey) => {
              _push(`<div class="hover:text-accent1/70 cursor-pointer font-[400] text-accent1 pb-3 drop-shadow-md">`);
              _push(ssrRenderComponent(unref(RouterLink), {
                id: subitem.name + (isClicked.value === subitem.id ? "-active" : ""),
                "aria-label": "go to " + subitem.name,
                to: { path: item.to, hash: subitem.to },
                onClick: ($event) => (isClicked.value = subitem.id, isOpen.value = null),
                class: { "text-accent1/70": isClicked.value === subitem.id }
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(subitem.name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(subitem.name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</div>`);
            });
            _push(`<!--]--></nav>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layouts/Header.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const _imports_0$4 = "/images/patterns/patternfooter.svg";
const x = "/images/socials/x.svg";
const youtube = "/images/socials/youtube.svg";
const facebook = "/images/socials/facebook.svg";
const linkedin = "/images/socials/linkedin.svg";
const _sfc_main$p = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const footerlinks = [
      {
        id: 1,
        name: "Quick Links",
        to: "",
        submenu: [
          { id: 1, name: "Home", to: "/" },
          { id: 2, name: "About", to: "/about" },
          { id: 3, name: "Contact ", to: "/contact" },
          { id: 3, name: "Industries ", to: "/industries" }
        ]
      },
      {
        id: 2,
        name: "Resources",
        to: "/resources",
        submenu: [
          { id: 1, name: "Blog", to: "#blog" },
          { id: 2, name: "Whitepapers", to: "#whitepapers" },
          // { id: 3, name: 'Webinars', to:'#webinars' },
          { id: 3, name: "Industry Insights", to: "#industry-insights" }
        ]
      },
      {
        id: 3,
        name: "Careers",
        to: "/careers",
        submenu: [
          { id: 1, name: "Job Openings", to: "#jobs-openings" },
          { id: 2, name: "Internship Opportunities", to: "#internship-opportunities" },
          { id: 3, name: "Employee Benefits", to: "#employee-benefits" }
        ]
      }
    ];
    const sociallinks = [
      { id: 1, name: "Linkedin", to: "https://www.linkedin.com/company/aitsmena/", target: "_blank", icon: linkedin },
      { id: 2, name: "Facebook", to: "https://www.facebook.com/people/AITS/100057457570552/", target: "_blank", icon: facebook },
      { id: 3, name: "X", to: "https://twitter.com/AITSglobal", target: "_blank", icon: x },
      { id: 4, name: "Youtube", to: "https://www.youtube.com/channel/UC2e3BlBOc1EfhuxlBAaLQNw", target: "_blank", icon: youtube }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col items-center justify-center gap-10 pt-40" }, _attrs))}><div class="flex items-center justify-center w-11/12 gap-3 p-6 mx-auto max-sm:flex-wrap 2xl:w-8/12 lg:w-10/12 rounded-[16px] bg-bg"><input type="text" id="email" placeholder="example@gmail.com" class="md:w-6/12 w-full block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"><div to="/" class="block w-fit cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125">Subscribe</div></div><div class="flex flex-wrap justify-between w-11/12 gap-6 px-6 my-10 lg:gap-0 2xl:w-8/12 lg:w-10/12"><div class="flex flex-col w-full gap-2 mb-10 lg:w-4/12 lg:mb-0"><img${ssrRenderAttr("src", unref(logo$1))} alt="AITS logo" width="80" height="22" center cover responsive loading="lazy"><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">Stay connected with AITS on social media for the latest updates, news, and insights. Follow us on LinkedIn, Twitter, Facebook, and Instagram to join the conversation and stay informed.</p><div class="relative z-[2] flex items-center gap-2"><!--[-->`);
      ssrRenderList(sociallinks, (item, key) => {
        _push(`<a${ssrRenderAttr("id", "go-to-" + item.name)}${ssrRenderAttr("href", item.to)}${ssrRenderAttr("target", item.target)} class="w-8 aspect-square font-[200] bg-bg2 text-accent1 hover:brightness-125 rounded-[8px] p-2 flex items-center justify-center"><img${ssrRenderAttr("src", item.icon)}${ssrRenderAttr("alt", "AITS" + item.name)} center cover responsive class="w-full h-full" loading="lazy"></a>`);
      });
      _push(`<!--]--></div></div><ul role="list" class="flex flex-wrap justify-between w-full lg:w-7/12 gap-y-3 list-style-none"><!--[-->`);
      ssrRenderList(footerlinks, (item, key) => {
        _push(`<li class="w-full sm:w-1/2 md:w-1/3"><h1 class="text-lg font-[400] text-accent1 mb-3">${ssrInterpolate(item.name)}</h1><!--[-->`);
        ssrRenderList(item.submenu, (subitem, subkey) => {
          _push(`<div class="pb-3">`);
          _push(ssrRenderComponent(unref(RouterLink), {
            id: subitem.name,
            "aria-label": "go to " + subitem.name,
            to: { path: item.to, hash: subitem == null ? void 0 : subitem.to },
            class: "font-[200] text-accent1 hover:brightness-75 max-sm:text-[14px]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(subitem.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(subitem.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></li>`);
      });
      _push(`<!--]--></ul></div><img${ssrRenderAttr("src", _imports_0$4)} alt="AITS" width="446" height="643" center cover responsive loading="lazy" class="absolute left-0 top-[100%] transform -translate-y-[100%] opacity-75"><div class="text-center min-h-[50px] w-full flex flex-col items-center justify-center bg-footer-noise bg-cover bg-center"><p class="text-accent1 max-sm:text-[14px]">Copyright @ AITS All Rights Reserved.</p></div></footer>`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layouts/Footer.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$q, null, null, _parent));
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$p, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _imports_0$3 = "/images/hero/arrow.webp";
const _imports_1$3 = "/images/hero/elements/centermiddle.webp";
const _imports_2$3 = "/images/hero/elements/lefttop_small.webp";
const _imports_3$2 = "/images/hero/elements/leftmiddle_small.webp";
const _imports_4$1 = "/images/hero/elements/leftmiddleoposite_small.webp";
const _imports_5$1 = "/images/hero/elements/leftbottom_small.webp";
const _imports_6 = "/images/hero/elements/righttop_small.webp";
const _imports_7 = "/images/hero/elements/rightmiddle_small.webp";
const _imports_8 = "/images/patterns/patternhero.webp";
const _sfc_main$n = {
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "AITSHero",
        class: "relative flex flex-col flex-wrap items-center h-full px-6 mx-auto"
      }, _attrs))}><div class="sm:10/12 w-11/12 flex flex-col justify-center items-center mx-auto gap-6 h-[90vh] lg:pt-40 pt-40"><h1 class="text-accent1 uppercase 2xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-[30px] text-center font-[700]">Welcome to AITS</h1><p class="font-[200] max-sm:text-[14px] text-justify text-accent2 2xl:w-5/12 px-4 sm:w-2/3" style="${ssrRenderStyle({ "text-align-last": "center" })}"> Looking for a trusted industrial software partner? AITS empowers people like you to thrive through innovative tech solutions tailored to your unique needs. </p>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        id: "go-to-contact-page",
        "aria-label": "go to contact page",
        to: "/contact",
        class: "relative z-[4] block w-fit cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get Started`);
          } else {
            return [
              createTextVNode("Get Started")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<img${ssrRenderAttrs(mergeProps({
        src: _imports_0$3,
        alt: "AITS",
        width: "178",
        height: "145",
        center: "",
        cover: "",
        responsive: "",
        loading: "eager",
        class: "w-[100px] max-md:w-[50px]",
        initial: {
          x: 0,
          y: 0
        },
        visibleOnce: {
          x: 0,
          y: 90,
          transition: {
            type: "spring",
            delay: 600,
            duration: 600
          }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}></div><img${ssrRenderAttrs(mergeProps({
        src: _imports_1$3,
        alt: "AITS",
        width: "1253",
        height: "1239",
        center: "",
        cover: "",
        responsive: "",
        loading: "eager",
        initial: {
          opacity: 1,
          transform: "translate(-50%, 0%)",
          x: 0,
          y: 0
        },
        visibleOnce: {
          opacity: 0,
          transform: "translate(100%, -100%)",
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            delay: 800,
            duration: 600
          }
        },
        class: "absolute top-0 z-1 left-1/2 max-sm:top-32 max-sm:-translate-y-1/4 max-sm:h-[400px]"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><img${ssrRenderAttrs(mergeProps({
        src: _imports_2$3,
        alt: "AITS",
        width: "712",
        height: "964",
        center: "",
        cover: "",
        responsive: "",
        loading: "eager",
        initial: {
          transform: "translate(0%)",
          x: 0,
          y: 0
        },
        visibleOnce: {
          transform: "translateY(-70%)",
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            delay: 900,
            duration: 600
          }
        },
        class: "absolute top-0 left-0 z-3 max-sm:top-20 max-sm:h-[400px] overflow-hidden"
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><img${ssrRenderAttr("src", _imports_3$2)} alt="AITS" width="824" height="1096" center cover responsive loading="eager" class="absolute left-0 transform md:-translate-y-1/2 z-1 md:top-1/2 top-2/3 -translate-y-2/3 max-sm:h-[400px]"><img${ssrRenderAttr("src", _imports_4$1)} alt="AITS" width="962" height="1753" center cover responsive loading="eager" class="absolute left-0 transform md:-translate-y-1/2 z-1 md:top-1/2 top-2/3 -translate-y-2/3 max-sm:h-[400px]"><img${ssrRenderAttr("src", _imports_5$1)} alt="AITS" width="616" height="1104" center cover responsive loading="eager" class="absolute left-0 z-3 top-[100%]"><img${ssrRenderAttr("src", _imports_6)} alt="AITS" width="720" height="749" class="min-h-screen w-screen absolute right-0 lg:top-1/4 lg:-translate-y-1/4 top-0 z-[-1]" center cover responsive loading="eager"><img${ssrRenderAttrs(mergeProps({
        src: _imports_7,
        alt: "AITS",
        width: "720",
        height: "1151",
        center: "",
        cover: "",
        responsive: "",
        loading: "eager",
        initial: {
          position: "absolute",
          top: "35%",
          right: "0",
          transform: "translate(0%)",
          zIndex: 2,
          x: 0,
          y: 0
        },
        visibleOnce: {
          transform: "translate(50%)",
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            delay: 100,
            duration: 600
          }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><img${ssrRenderAttr("src", _imports_8)} alt="AITS" width="626" height="1394" center cover responsive loading="eager" class="absolute z-[-1] right-0 top-1/3 transform -translate-y-1/3 opacity-75"></section>`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Hero.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const _imports_0$2 = "/images/testimonies/contact/elements/leftmiddle.svg";
const _imports_1$2 = "/images/testimonies/contact/elements/centermiddle.svg";
const _imports_2$2 = "/images/testimonies/contact/elements/rightmiddle.svg";
const _imports_3$1 = "/images/testimonies/contact/elements/rightbottom.svg";
const _sfc_main$m = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "relative mt-40 bg-gradient-to-r from-accent1/10 to-accent1/20 md:h-[50vh] flex flex-col items-center justify-center overflow-hidden max-md:py-40"
      }, _attrs))}><div class="relative text-center 2xl:w-8/12 lg:w-10/12 w-11/12 z-[1] px-6 space-y-6"><p class="font-[200] max-sm:text-[14px] text-justify text-accent2 2xl:w-5/12 sm:w-2/3 mx-auto" style="${ssrRenderStyle({ "text-align-last": "center" })}">Ready to revolutionize the industrial world with innovative software solutions and a firm dedication to sustainability? Together, we can build a better tomorrow.</p>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        id: "go-to-contact-page",
        "aria-label": "go to contact page",
        to: "/contact",
        class: "block w-fit mx-auto cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Transform My Business`);
          } else {
            return [
              createTextVNode("Transform My Business")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><img${ssrRenderAttr("src", _imports_0$2)} alt="AITS" width="513" height="631" center cover responsive loading="lazy" class="absolute top-0 transform lg:-translate-y-1/2 2xl:left-0 lg:top-1/2 -left-10"><img${ssrRenderAttr("src", _imports_1$2)} alt="AITS" width="345" height="338" center cover responsive loading="lazy" class="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"><img${ssrRenderAttr("src", _imports_2$2)} alt="AITS" width="767" height="699" center cover responsive loading="lazy" class="absolute top-[100%] transform lg:-translate-y-1/2 -translate-y-[100%] 2xl:right-0 lg:top-1/2 -right-1/4"><img${ssrRenderAttr("src", _imports_3$1)} alt="AITS" width="287" height="315" center cover responsive loading="lazy" class="absolute 2xl:right-0 top-[100%] transform -translate-y-[100%] -right-1/4"></section>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Contact.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const _sfc_main$l = {
  __name: "OneImageTextFlex",
  __ssrInlineRender: true,
  props: {
    sectionid: String,
    sectiontitle: String,
    item: Object,
    reverse: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: __props.sectionid,
        class: "w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12"
      }, _attrs))}><h1 class="text-accent1 font-[200] text-lg uppercase">• ${ssrInterpolate(__props.sectiontitle)}</h1><hr class="w-full h-4 mt-3 text-accent2"><div${ssrRenderAttrs(mergeProps({
        class: ["flex flex-wrap items-center justify-center w-full gap-6 mt-10 lg:gap-3 lg:justify-between", { "lg:flex-row-reverse": __props.reverse }],
        initial: {
          opacity: 0,
          y: 100
        },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: "100",
            delay: 100
          }
        }
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))}><img${ssrRenderAttr("src", __props.item.image)}${ssrRenderAttr("alt", __props.item.title)} width="391" height="290" center cover responsive loading="lazy"><div class="w-full lg:w-6/12"><h2 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">${ssrInterpolate(__props.item.title)}</h2><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">${ssrInterpolate(__props.item.description)}</p>`);
      if (__props.item.to) {
        _push(ssrRenderComponent(unref(RouterLink), {
          id: "go-to-" + __props.item.title + "-page",
          "aria-label": "go to " + __props.item.title,
          to: __props.item.to,
          class: "cursor-pointer px-4 py-3 w-fit block max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Browse`);
            } else {
              return [
                createTextVNode("Browse")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/OneImageTextFlex.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "HomeView",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "AITS - Industrial Software Solutions Tailored To Your Business",
      description: "AITS transforms businesses like yours through innovative tech solutions tailored to your unique needs. Book your free consultation call to get started!",
      ogTitle: "AITS - Industrial Software Solutions Tailored To Your Business",
      ogDescription: "AITS transforms businesses like yours through innovative tech solutions tailored to your unique needs. Book your free consultation call to get started!",
      ogImage: "/aits-og-image.png"
    });
    const missionandvission = {
      title: "A Vision In Sight",
      description: "AITS strives to be the leading industrial software innovator in the Gulf region. How? By delivering cutting-edge software solutions, digital threads, and connected workers. It takes a thrill for innovation and excellence to empower organizations in reaching new heights of success.",
      image: "/images/hero/missionandvision/vision.webp"
    };
    const valuesandcommitments = {
      title: "You Have Our Word",
      description: "No company can operate without a set of core values that shape its culture and defines who it is. As for us? We believe in integrity, collaboration, and continuous improvement. Our commitment to enhance positive transformation in the industrial landscape creates an environment where our dedicated team can thrive. This enables us to better serve our clients and contribute to a brighter, more sustainable future.",
      image: "/images/hero/values/values.webp"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$n, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, {
        sectiontitle: "Mission and Vision",
        item: missionandvission
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, {
        sectiontitle: "Values and Commitments",
        item: valuesandcommitments,
        reverse: ""
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$m, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/HomeView.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const banner$4 = "/images/banners/contact.webp";
const _imports_0$1 = "/images/banners/elements/topleft.webp";
const _imports_1$1 = "/images/banners/elements/topright.webp";
const _imports_2$1 = "/images/banners/elements/bottomright.webp";
const logo = "/AITSLogoWithSlogan.webp";
const _sfc_main$j = {
  __name: "InnerHero",
  __ssrInlineRender: true,
  props: {
    pagebanner: Image,
    pagetitle: String,
    pagedescription: String,
    sectionid: String,
    isAbout: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col justify-center items-center -mt-[40px] md:h-[90vh] min-h-[70vh]" }, _attrs))}><img${ssrRenderAttr("src", __props.pagebanner)}${ssrRenderAttr("alt", "AITS" + __props.pagetitle)} width="1140" height="718" center cover responsive loading="eager" class="absolute inset-0 z-[-1] w-full h-full aspect-[1.59/1]"><div class="absolute w-11/12 mx-auto md:transform md:-translate-y-1/2 md:top-1/2 z-[1] 2xl:w-8/12 lg:w-10/12 top-2/3 -translate-y-2/3"><div class="md:h-[85%] min-h-[40vh] space-y-6 rounded-[16px] flex flex-col justify-center p-6 items-center mx-auto bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px]">`);
      if (__props.isAbout) {
        _push(`<img${ssrRenderAttr("src", unref(logo))} alt="AITS logo" width="443" height="148" cover center responsive loading="eager">`);
      } else {
        _push(`<h1 class="font-[400] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] text-center uppercase">${ssrInterpolate(__props.pagetitle)}</h1>`);
      }
      _push(`<p class="text-accent2 font-[200] max-sm:text-[14px] text-justify mx-auto md:w-8/12" style="${ssrRenderStyle({ "text-align-last": "center" })}">${ssrInterpolate(__props.pagedescription)}</p></div></div><img${ssrRenderAttr("src", _imports_0$1)} alt="AITS" width="909" height="683" center cover responsive loading="lazy" class="absolute inset-0 z-1"><img${ssrRenderAttr("src", _imports_1$1)} alt="AITS" width="1232" height="792" center cover responsive loading="lazy" class="absolute top-0 right-0 z-1"><img${ssrRenderAttr("src", _imports_2$1)} alt="AITS" width="728" height="1074" center cover responsive loading="lazy" class="absolute bottom-0 right-0 z-1"></section>`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/InnerHero.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _imports_0 = "/images/insidepages/elements/centertop.webp";
const _imports_1 = "/images/insidepages/elements/centermiddle.webp";
const _imports_2 = "/images/insidepages/elements/righttop.webp";
const _imports_3 = "/images/insidepages/elements/rightmiddle.webp";
const _imports_4 = "/images/insidepages/elements/rightbottom.webp";
const _imports_5 = "/images/insidepages/elements/leftmiddle.webp";
const _sfc_main$i = {
  __name: "InsideBody",
  __ssrInlineRender: true,
  props: {
    smallhieght: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="sm:hidden block absolute inset-0 w-full h-11/12 transform bg-center bg-cover z-[-1] bg-mobilecolors"></div><img${ssrRenderAttr("src", _imports_0)} alt="AITS" width="1440" height="1444" center cover responsive loading="lazy" class="sm:block absolute hidden top-1/3 transform -translate-y-1/3 right-0 z-[-1]"><img${ssrRenderAttr("src", _imports_1)} alt="AITS" width="1116" height="1239" center cover responsive loading="lazy" class="sm:block absolute hidden transform -translate-y-2/3 right-0 z-[-1] top-2/3"><img${ssrRenderAttr("src", _imports_2)} alt="AITS" width="1024" height="1431" center cover responsive loading="lazy" class="sm:block absolute hidden top-1/2 transform -translate-y-1/2 right-0 z-[-1]"><img${ssrRenderAttr("src", _imports_3)} alt="AITS" width="851" height="1563" center cover responsive loading="lazy" class="sm:block absolute hidden right-0 transform -translate-y-2/3 top-2/3 z-[-1]"><img${ssrRenderAttr("src", _imports_4)} alt="AITS" width="734" height="1553" center cover responsive loading="lazy" class="sm:block absolute hidden bottom-0 right-0 z-[-1]"><img${ssrRenderAttr("src", _imports_5)} alt="AITS" width="952" height="1635" center cover responsive loading="lazy" class="sm:block absolute hidden left-0 transform -translate-y-1/2 top-1/2 z-[-1]"><!--]-->`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/InsideBody.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
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
      }, _attrs))}><div class="w-full lg:w-6/12"><h1 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">Contact Us</h1><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">Have questions or inquiries? Contact us today to learn more about our software solutions, services, and how we can help your business succeed. Our team is here to assist you every step of the way.</p></div><form class="grid w-full h-full grid-cols-2 gap-3 lg:w-5/12"><div class="w-full col-span-2 sm:col-span-1"><input type="text" id="Name" name="Name" placeholder="Your Name" aria-label="Enter your name"${ssrRenderAttr("value", formData.data.Name.value)}${ssrIncludeBooleanAttr(formData.data.Name.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Name.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2"])}"><p style="${ssrRenderStyle(!formData.data.Name.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Name.validationMessage)}</p></div><div class="w-full col-span-2 sm:col-span-1"><input type="text" id="Email" name="Email" aria-label="Enter your email" placeholder="example@gmail.com"${ssrRenderAttr("value", formData.data.Email.value)}${ssrIncludeBooleanAttr(formData.data.Email.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Email.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><p style="${ssrRenderStyle(!formData.data.Email.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Email.validationMessage)}</p></div><div class="w-full col-span-2 sm:col-span-1"><input type="text" id="Phone" name="Phone" aria-label="Enter your phone" placeholder="00961 71 654 231"${ssrRenderAttr("value", formData.data.Phone.value)}${ssrIncludeBooleanAttr(formData.data.Phone.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Phone.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><p style="${ssrRenderStyle(!formData.data.Phone.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Phone.validationMessage)}</p></div><div class="w-full col-span-2 sm:col-span-1"><input type="text" id="CompanyName" name="CompanyName" aria-label="Enter your company&#39;s name" placeholder="Your Company&#39;s Name"${ssrRenderAttr("value", formData.data.CompanyName.value)}${ssrIncludeBooleanAttr(formData.data.CompanyName.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.CompanyName.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><p style="${ssrRenderStyle(!formData.data.CompanyName.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.CompanyName.validationMessage)}</p></div><div class="w-full col-span-2 mb-3"><select id="Subject" name="Subject" aria-label="select a subject for your message"${ssrIncludeBooleanAttr(formData.data.Subject.required) ? " required" : ""} class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Subject.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1/50 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"><option class="text-black" selected>General Inquiries</option><option class="text-black"${ssrIncludeBooleanAttr(Array.isArray(formData.data.Subject.value) ? ssrLooseContain(formData.data.Subject.value, null) : ssrLooseEqual(formData.data.Subject.value, null)) ? " selected" : ""}>Sales and Support</option></select><p style="${ssrRenderStyle(!formData.data.Subject.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Subject.validationMessage)}</p></div><div class="w-full col-span-2"><textarea id="Message" name="Message" rows="5" aria-label="Type out your message" placeholder="Briefly tell us about your project and your current goals. How can we help you?"${ssrIncludeBooleanAttr(formData.data.Message.required) ? " required" : ""} style="${ssrRenderStyle({ "min-height": "60px" })}" class="${ssrRenderClass([{ "border-red-500 focus:border-red-500": formData.data.Message.isValid === false }, "block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] w-full rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"])}">${ssrInterpolate(formData.data.Message.value)}</textarea><p style="${ssrRenderStyle(!formData.data.Message.isValid ? null : { display: "none" })}" className="ms-2 mb-2 font-[700] text-[12px] text-red-500">${ssrInterpolate(formData.data.Message.validationMessage)}</p></div><div class="w-full col-span-2">`);
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
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ContactForm.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "TextGrid",
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
      }, _attrs))}><h1 class="font-[200] text-accent1 text-justify 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">${ssrInterpolate(__props.sectiontitle)}</h1><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">${ssrInterpolate(__props.sectiondescription)}</p><ul role="list" class="grid items-center w-full grid-cols-1 gap-6 mt-10 lg:grid-cols-3 sm:grid-cols-2 p-10 bg-gradient-to-r from-accent1/10 to-accent1/20 rounded-[16px] list-style-none"><!--[-->`);
      ssrRenderList(__props.data, (item, key) => {
        _push(`<li class="${ssrRenderClass([{ "lg:border-r lg:border-accent1": key === 0 || key === 1, "sm:border-r sm:border-accent1": key === 0 }, "relative flex flex-col w-full h-full gap-3 p-6"])}"><h2 class="max-sm:text-[14px] text-accent1 text-justify font-[200]"><svg width="17" height="21" viewBox="0 0 17 21" fill="none" class="inline" xmlns="http://www.w3.org/2000/svg"><path d="M8.25001 0C6.06276 0.00258035 3.96584 0.872603 2.41923 2.41922C0.872612 3.96584 0.00258913 6.06276 8.77716e-06 8.25C-0.00261089 10.0374 0.581244 11.7763 1.66201 13.2C1.66201 13.2 1.88701 13.4962 1.92376 13.539L8.25001 21L14.5793 13.5353C14.6123 13.4955 14.838 13.2 14.838 13.2L14.8388 13.1978C15.919 11.7747 16.5026 10.0366 16.5 8.25C16.4974 6.06276 15.6274 3.96584 14.0808 2.41922C12.5342 0.872603 10.4373 0.00258035 8.25001 0ZM8.25001 11.25C7.65666 11.25 7.07665 11.0741 6.5833 10.7444C6.08995 10.4148 5.70543 9.94623 5.47837 9.39805C5.25131 8.84987 5.1919 8.24667 5.30765 7.66473C5.42341 7.08279 5.70913 6.54824 6.12869 6.12868C6.54825 5.70912 7.08279 5.4234 7.66474 5.30764C8.24668 5.19189 8.84988 5.2513 9.39806 5.47836C9.94624 5.70542 10.4148 6.08994 10.7444 6.58329C11.0741 7.07664 11.25 7.65666 11.25 8.25C11.249 9.04534 10.9326 9.80783 10.3702 10.3702C9.80784 10.9326 9.04535 11.249 8.25001 11.25Z" fill="white"></path></svg><span class="inline ps-2">${ssrInterpolate(item.title)}</span><span class="inline ps-2">${ssrInterpolate(item.address)}</span></h2><a prefetch="false" style="${ssrRenderStyle(item.phone ? null : { display: "none" })}"${ssrRenderAttr("id", "call-" + item.title + "location")}${ssrRenderAttr("aria-label", "Call" + item.title + "Location")}${ssrRenderAttr("href", "tel:" + item.phone)} class="cursor-pointer max-sm:text-[14px] font-[200] text-accent1 text-justify hover:brightness-75"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" class="inline" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_863_319" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_863_319)"><path d="M16.2002 17.0833C14.6298 17.0833 13.0521 16.7182 11.4671 15.9879C9.88222 15.2576 8.42604 14.2275 7.09854 12.8975C5.77118 11.5674 4.74236 10.1111 4.01208 8.52875C3.2818 6.94653 2.91666 5.37021 2.91666 3.79979C2.91666 3.54743 3 3.33715 3.16666 3.16896C3.33333 3.00076 3.54166 2.91667 3.79166 2.91667H6.50958C6.72 2.91667 6.90562 2.98535 7.06646 3.12271C7.22729 3.25993 7.32958 3.42952 7.37333 3.63146L7.85104 6.08333C7.8841 6.31083 7.87715 6.50632 7.83021 6.66979C7.78312 6.83327 7.69868 6.97056 7.57687 7.08167L5.65229 8.95521C5.96201 9.52243 6.3159 10.059 6.71396 10.565C7.11187 11.0708 7.54271 11.554 8.00646 12.0144C8.46368 12.4717 8.94979 12.8965 9.46479 13.2885C9.97979 13.6806 10.5359 14.0455 11.1331 14.3831L13.0031 12.4969C13.1335 12.3612 13.2915 12.266 13.4769 12.2115C13.6622 12.157 13.8547 12.1437 14.0546 12.1715L16.3685 12.6427C16.579 12.6983 16.7507 12.8056 16.8837 12.9648C17.0168 13.124 17.0833 13.3045 17.0833 13.5065V16.2083C17.0833 16.4583 16.9992 16.6667 16.831 16.8333C16.6628 17 16.4526 17.0833 16.2002 17.0833ZM5.06083 7.7725L6.54812 6.34938C6.57479 6.32799 6.59215 6.29861 6.60021 6.26125C6.60826 6.22389 6.60694 6.18917 6.59625 6.15708L6.23396 4.29479C6.22326 4.25215 6.20458 4.22014 6.17791 4.19875C6.15125 4.17736 6.11653 4.16667 6.07375 4.16667H4.29166C4.25958 4.16667 4.23284 4.17736 4.21146 4.19875C4.19021 4.22014 4.17958 4.24688 4.17958 4.27896C4.22222 4.8484 4.31541 5.42688 4.45916 6.01438C4.60278 6.60202 4.80333 7.18806 5.06083 7.7725ZM12.3108 14.9744C12.8632 15.2319 13.4393 15.4288 14.0392 15.565C14.6392 15.7011 15.1998 15.782 15.721 15.8077C15.7531 15.8077 15.7799 15.797 15.8012 15.7756C15.8226 15.7542 15.8333 15.7275 15.8333 15.6954V13.9423C15.8333 13.8995 15.8226 13.8648 15.8012 13.8381C15.7799 13.8115 15.7478 13.7928 15.7052 13.7821L13.9552 13.4263C13.9231 13.4156 13.8951 13.4142 13.871 13.4223C13.847 13.4303 13.8216 13.4477 13.7948 13.4744L12.3108 14.9744Z" fill="#1C1B1F"></path></g></svg><span class="inline ps-2">${ssrInterpolate(item.phone)}</span></a><h2 style="${ssrRenderStyle(item.fax ? null : { display: "none" })}" class="max-sm:text-[14px] font-[200] text-accent1 text-justify hover:brightness-75"><svg width="25" height="20" viewBox="0 0 25 20" fill="none" stroke="white" class="inline" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_857_567" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="20"><rect width="24.4444" height="20" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_857_567)"><path d="M16.2962 6.92312V4.42312H8.1481V6.92312H6.62032V3.17312H17.824V6.92312H16.2962ZM18.1375 10.2565C18.4261 10.2565 18.668 10.1766 18.8632 10.0169C19.0584 9.85715 19.156 9.65923 19.156 9.42312C19.156 9.18701 19.0584 8.9891 18.8632 8.82937C18.668 8.66965 18.4261 8.58979 18.1375 8.58979C17.8489 8.58979 17.607 8.66965 17.4118 8.82937C17.2166 8.9891 17.119 9.18701 17.119 9.42312C17.119 9.65923 17.2166 9.85715 17.4118 10.0169C17.607 10.1766 17.8489 10.2565 18.1375 10.2565ZM16.2962 15.8333V12.2756H8.1481V15.8333H16.2962ZM17.824 17.0833H6.62032V13.75H2.84009V9.00646C2.84009 8.41618 3.08657 7.92139 3.57953 7.52208C4.0725 7.12278 4.67478 6.92312 5.38638 6.92312H19.058C19.7794 6.92312 20.3842 7.12278 20.8722 7.52208C21.3602 7.92139 21.6043 8.41618 21.6043 9.00646V13.75H17.824V17.0833ZM20.0765 12.5V9.00646C20.0765 8.77035 19.9789 8.57243 19.7837 8.41271C19.5884 8.25298 19.3465 8.17312 19.058 8.17312H5.38638C5.0978 8.17312 4.85591 8.25298 4.66069 8.41271C4.46547 8.57243 4.36787 8.77035 4.36787 9.00646V12.5H6.62032V11.0256H17.824V12.5H20.0765Z" fill="#1C1B1F"></path></g></svg><span class="inline ps-2">${ssrInterpolate(item.fax)}</span></h2><h2 style="${ssrRenderStyle(item.poBOX ? null : { display: "none" })}" class="max-sm:text-[14px] text-accent1 text-justify font-[400]"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" class="inline" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_863_301" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_863_301)"><path d="M4.30775 19.5C3.80258 19.5 3.375 19.325 3.025 18.975C2.675 18.625 2.5 18.1974 2.5 17.6923V6.30775C2.5 5.80258 2.675 5.375 3.025 5.025C3.375 4.675 3.80258 4.5 4.30775 4.5H19.6923C20.1974 4.5 20.625 4.675 20.975 5.025C21.325 5.375 21.5 5.80258 21.5 6.30775V17.6923C21.5 18.1974 21.325 18.625 20.975 18.975C20.625 19.325 20.1974 19.5 19.6923 19.5H4.30775ZM12 12.5577L4 7.44225V17.6923C4 17.7821 4.02883 17.8558 4.0865 17.9135C4.14417 17.9712 4.21792 18 4.30775 18H19.6923C19.7821 18 19.8558 17.9712 19.9135 17.9135C19.9712 17.8558 20 17.7821 20 17.6923V7.44225L12 12.5577ZM12 11L19.8463 6H4.15375L12 11ZM4 7.44225V6V17.6923C4 17.7821 4.02883 17.8558 4.0865 17.9135C4.14417 17.9712 4.21792 18 4.30775 18H4V7.44225Z" fill="#1C1B1F"></path></g></svg><span class="inline ps-2">${ssrInterpolate(item.poBOX)}</span></h2><a prefetch="false" style="${ssrRenderStyle(item.email ? null : { display: "none" })}"${ssrRenderAttr("id", "email-" + item.title + "location")}${ssrRenderAttr("aria-label", "Email" + item.title + "Location")}${ssrRenderAttr("href", "mailto:" + item.email)} class="cursor-pointer max-sm:text-[14px] font-[200] text-accent1 text-justify hover:brightness-75"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" class="inline" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_863_301" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_863_301)"><path d="M4.30775 19.5C3.80258 19.5 3.375 19.325 3.025 18.975C2.675 18.625 2.5 18.1974 2.5 17.6923V6.30775C2.5 5.80258 2.675 5.375 3.025 5.025C3.375 4.675 3.80258 4.5 4.30775 4.5H19.6923C20.1974 4.5 20.625 4.675 20.975 5.025C21.325 5.375 21.5 5.80258 21.5 6.30775V17.6923C21.5 18.1974 21.325 18.625 20.975 18.975C20.625 19.325 20.1974 19.5 19.6923 19.5H4.30775ZM12 12.5577L4 7.44225V17.6923C4 17.7821 4.02883 17.8558 4.0865 17.9135C4.14417 17.9712 4.21792 18 4.30775 18H19.6923C19.7821 18 19.8558 17.9712 19.9135 17.9135C19.9712 17.8558 20 17.7821 20 17.6923V7.44225L12 12.5577ZM12 11L19.8463 6H4.15375L12 11ZM4 7.44225V6V17.6923C4 17.7821 4.02883 17.8558 4.0865 17.9135C4.14417 17.9712 4.21792 18 4.30775 18H4V7.44225Z" fill="#1C1B1F"></path></g></svg><span class="inline ps-2">${ssrInterpolate(item.email)}</span></a><a prefetch="false" style="${ssrRenderStyle(item.website ? null : { display: "none" })}" id="go-href-aits-website" aria-label="go href AITS website"${ssrRenderAttr("href", item.website)} class="cursor-pointer max-sm:text-[14px] font-[200] text-accent1 text-justify hover:brightness-75"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" class="inline" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_863_295" style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_863_295)"><path d="M9.99999 17.9167C8.91458 17.9167 7.89027 17.7086 6.92708 17.2925C5.96388 16.8764 5.12388 16.3099 4.40708 15.5929C3.69013 14.8761 3.12361 14.0361 2.7075 13.0729C2.29138 12.1097 2.08333 11.0854 2.08333 10C2.08333 8.90597 2.29138 7.87951 2.7075 6.92062C3.12361 5.96173 3.69013 5.12389 4.40708 4.40708C5.12388 3.69014 5.96388 3.12361 6.92708 2.7075C7.89027 2.29139 8.91458 2.08333 9.99999 2.08333C11.094 2.08333 12.1205 2.29139 13.0794 2.7075C14.0383 3.12361 14.8761 3.69014 15.5929 4.40708C16.3099 5.12389 16.8764 5.96173 17.2925 6.92062C17.7086 7.87951 17.9167 8.90597 17.9167 10C17.9167 11.0854 17.7086 12.1097 17.2925 13.0729C16.8764 14.0361 16.3099 14.8761 15.5929 15.5929C14.8761 16.3099 14.0383 16.8764 13.0794 17.2925C12.1205 17.7086 11.094 17.9167 9.99999 17.9167ZM9.99999 16.649C10.4253 16.0849 10.7832 15.516 11.0737 14.9423C11.3643 14.3685 11.601 13.7414 11.7837 13.0608H8.21625C8.40972 13.7628 8.64909 14.4006 8.93437 14.9744C9.21951 15.5481 9.57472 16.1063 9.99999 16.649ZM8.38625 16.4198C8.0668 15.9615 7.77993 15.4404 7.52562 14.8567C7.27131 14.2728 7.07368 13.6742 6.9327 13.0608H4.10583C4.54597 13.9262 5.13624 14.6533 5.87666 15.2421C6.61708 15.8307 7.45361 16.2233 8.38625 16.4198ZM11.6137 16.4198C12.5464 16.2233 13.3829 15.8307 14.1233 15.2421C14.8637 14.6533 15.454 13.9262 15.8942 13.0608H13.0673C12.8995 13.6794 12.6885 14.2807 12.4342 14.8646C12.18 15.4485 11.9065 15.9669 11.6137 16.4198ZM3.58166 11.8108H6.67958C6.62722 11.5011 6.58923 11.1974 6.56562 10.8998C6.54215 10.6023 6.53041 10.3024 6.53041 10C6.53041 9.69764 6.54215 9.39771 6.56562 9.10021C6.58923 8.80257 6.62722 8.49889 6.67958 8.18917H3.58166C3.50152 8.47222 3.44013 8.76653 3.39749 9.07208C3.35472 9.37764 3.33333 9.68694 3.33333 10C3.33333 10.3131 3.35472 10.6224 3.39749 10.9279C3.44013 11.2335 3.50152 11.5278 3.58166 11.8108ZM7.92937 11.8108H12.0706C12.1228 11.5011 12.1608 11.2001 12.1844 10.9079C12.2078 10.6157 12.2196 10.3131 12.2196 10C12.2196 9.68694 12.2078 9.3843 12.1844 9.09208C12.1608 8.79986 12.1228 8.49889 12.0706 8.18917H7.92937C7.87715 8.49889 7.83923 8.79986 7.81562 9.09208C7.79215 9.3843 7.78041 9.68694 7.78041 10C7.78041 10.3131 7.79215 10.6157 7.81562 10.9079C7.83923 11.2001 7.87715 11.5011 7.92937 11.8108ZM13.3204 11.8108H16.4183C16.4985 11.5278 16.5599 11.2335 16.6025 10.9279C16.6453 10.6224 16.6667 10.3131 16.6667 10C16.6667 9.68694 16.6453 9.37764 16.6025 9.07208C16.5599 8.76653 16.4985 8.47222 16.4183 8.18917H13.3204C13.3728 8.49889 13.4108 8.80257 13.4344 9.10021C13.4578 9.39771 13.4696 9.69764 13.4696 10C13.4696 10.3024 13.4578 10.6023 13.4344 10.8998C13.4108 11.1974 13.3728 11.5011 13.3204 11.8108ZM13.0673 6.93917H15.8942C15.4487 6.06305 14.8625 5.33597 14.1354 4.75792C13.4083 4.18 12.5678 3.78472 11.6137 3.57208C11.9332 4.05708 12.2174 4.58757 12.4662 5.16354C12.7153 5.73937 12.9156 6.33125 13.0673 6.93917ZM8.21625 6.93917H11.7837C11.5903 6.2425 11.3469 5.60062 11.0537 5.01354C10.7604 4.42646 10.4092 3.87229 9.99999 3.35104C9.59083 3.87229 9.23958 4.42646 8.94625 5.01354C8.65305 5.60062 8.40972 6.2425 8.21625 6.93917ZM4.10583 6.93917H6.9327C7.08437 6.33125 7.28472 5.73937 7.53374 5.16354C7.78263 4.58757 8.0668 4.05708 8.38625 3.57208C7.4268 3.78472 6.58493 4.18139 5.86062 4.76208C5.13618 5.34264 4.55124 6.06833 4.10583 6.93917Z" fill="#1C1B1F"></path></g></svg><span class="inline ps-2">www.aitsmena.com</span></a></li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/TextGrid.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "ContactView",
  __ssrInlineRender: true,
  setup(__props) {
    const locations = [
      {
        id: 1,
        title: "Al Reem Island, Abu Dhabi, UAE",
        address: "3003 Addax Tower",
        phone: "+971 (2) 222 2130",
        poBox: "PO Box 3628",
        email: "info@aitsmena.com",
        website: "https://aitsmena.com/"
      },
      {
        id: 2,
        title: "Dubai Digital Park",
        address: "A6 building, 401 Office Silicon Oasis, Dubai, UAE",
        phone: "+971 4 344 4901",
        fax: "+971 4 344 4902",
        poBox: "PO Box: 342112",
        email: "info@aitsmena.com",
        website: "https://aitsmena.com/"
      },
      {
        id: 3,
        title: "dba AVEVA Select Gulf",
        address: "Office no. 214, Sulimaniya Office Building, 3135 Prince sultan Bin Abdulaziz Road As Sulimaniyah, Riyad, Kingdom of Saudi Arabia"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><title>AITS - Contact Us Today</title><meta name="description" content="Would you like to get in touch? Fill out the contact form with any inquiries you have and one of our AITS experts will respond as soon as possible."></head>`);
      _push(ssrRenderComponent(_sfc_main$j, {
        pagebanner: unref(banner$4),
        pagetitle: "Contact",
        pagedescription: "Get in touch to learn more about our industry software solutions and how you can take your business a step further!"
      }, null, _parent));
      _push(`<div class="relative">`);
      _push(ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$g, {
        sectionid: "office-locations",
        sectiontitle: "Office Locations",
        sectiondescription: "Need assistance with sales or support? Get in touch with our dedicated sales and support team for personalized assistance and expert guidance. Find the nearest AITS office and get in touch with us to schedule a consultation or learn more about our solutions and services. We have offices located across the Gulf region to serve you better.",
        data: locations
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ContactView.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const banner$3 = "/images/banners/about.webp";
const _sfc_main$e = {
  __name: "Partners",
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
        class: "w-11/12 mx-auto 2xl:w-8/12 lg:w-10/12"
      }, _attrs))}><div class="flex flex-wrap justify-between gap-6 lg:gap-3"><div class="lg:w-6/12"><h1 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">${ssrInterpolate(__props.sectiontitle)}</h1><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">${ssrInterpolate(__props.sectiondescription)}</p></div><div class="relative flex justify-center gap-5 mx-auto lg:ms-auto lg:me-0 lg:justify-end lg:w-5/12"><!--[-->`);
      ssrRenderList(__props.data, (item) => {
        _push(`<div><img${ssrRenderAttr("src", item.logo)} width="168" height="168"${ssrRenderAttr("alt", item.title)} cover center responsive loading="lazy" class="aspect-square border-2 border-accent1 transform duration-600 shadow-md shadow-accent1 rounded-[16px] bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px]"></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Partners.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "ImageTextFlexFilters",
  __ssrInlineRender: true,
  props: {
    sectionid: String,
    sectiontitle: String,
    sectiondescription: String,
    data: Array
  },
  setup(__props) {
    const props = __props;
    const clicked = ref(0);
    const filterdata = ref(props.data[0]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: __props.sectionid,
        class: "w-11/12 pt-40 mx-auto 2xl:w-8/12 lg:w-10/12"
      }, _attrs))}><h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">${ssrInterpolate(__props.sectiontitle)}</h1><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">${ssrInterpolate(__props.sectiondescription)}</p><div class="flex flex-wrap justify-center gap-3 mt-10 lg:justify-end"><button class="${ssrRenderClass([{ "border border-bg2": clicked.value === 0 }, "px-4 border border-accent2 py-3 w-fit h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent hover:border-bg2 focus:outline-none focus:ring-0 focus:border-bg2 peer"])}"> Diversity &amp; Inclusion</button><button class="px-4 py-3 w-fit h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border hover:border-bg2 border-accent2 focus:outline-none focus:ring-0 focus:border-bg2 peer"> Our People First</button><button class="px-4 py-3 w-fit h-fit bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border hover:border-bg2 border-accent2 focus:outline-none focus:ring-0 focus:border-bg2 peer"> Continuous Improvement</button></div><div class="flex flex-wrap items-center justify-center w-full gap-6 mt-10 lg:gap-3 lg:justify-between max-lg:flex-col-reverse"><img${ssrRenderAttr("src", filterdata.value.image)}${ssrRenderAttr("alt", filterdata.value.title)} width="391" height="290" center cover responsive loading="lazy"><div class="w-full lg:w-6/12"><h2 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">${ssrInterpolate(filterdata.value.title)}</h2><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">${ssrInterpolate(filterdata.value.description)}</p></div></div></section>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ImageTextFlexFilters.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const ic2 = "/images/testimonies/partners/ic2.webp";
const aveva = "/images/testimonies/partners/aveva.webp";
const improvement = "/images/insidepages/about/csr/improvement.webp";
const gender = "/images/insidepages/about/csr/gender.webp";
const employee = "/images/insidepages/about/csr/employee.webp";
const _sfc_main$c = {
  __name: "AboutView",
  __ssrInlineRender: true,
  setup(__props) {
    const csr = [
      {
        id: 1,
        image: gender,
        title: "Diversity & Inclusion",
        description: "At AITS, we’re committed to creating an environment where employees thrive both personally and professionally. Our inclusive culture celebrates diversity and collaboration, valuing every employee. We’re committed to aligning our mission and values with the work we do. Inclusivity within our workplace culture is crucial, where everyone, regardless of gender, age, or race has equal opportunities for growth and success. Equality is promoted through a diverse workforce, equal opportunities, and supportive policies."
      },
      {
        id: 2,
        image: employee,
        title: "Our People First",
        description: "Our purpose-driven approach ensures that every employee understands their impact and contributes meaningfully to our shared goals. Whether it’s serving our customers, driving innovation, or making a positive impact in the world, purpose guides our actions and inspires excellence. Our attractive salary packages include performance-based annual increases and bonuses. Enjoy comprehensive benefits like health insurance, annual air tickets, and various paid leaves. Access training, professional development opportunities, and leadership programs for career growth, and enjoy flexible hours and remote work options to support work-life balance."
      },
      {
        id: 3,
        image: improvement,
        title: "Continuous Improvement",
        description: "We strive to promote an environment where everyone plays an active role in identifying and solving problems and proposing improvements. Our common mindsets and attitudes are detected throughout the organization by putting values and principles into practice."
      }
    ];
    const partners = [
      { id: 1, title: "AVEVA Select Gulf", logo: aveva },
      { id: 2, title: "IC2", logo: ic2 }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><title>AITS - About Us</title><meta name="description" content="Powered by IBI, AITS plays a pivotal role in driving positive transformation across various industrial sectors. Explore our added value to diverse industries."></head>`);
      _push(ssrRenderComponent(_sfc_main$j, {
        pagebanner: unref(banner$3),
        isAbout: "true",
        pagedescription: "Do you need a trusted software company and strategic ally in navigating the complex landscape of industrial automation? You’re in the right place. Powered by IBI, AITS plays a pivotal role in driving positive transformation across various industrial sectors. Explore our added value to diverse industries, compelling employee propositions, and available job vacancies."
      }, null, _parent));
      _push(`<section class="relative">`);
      _push(ssrRenderComponent(_sfc_main$e, {
        sectionid: "sub-companies",
        sectiontitle: "Mother Company of Two",
        sectiondescription: "Our portfolio holds two distinguished business lines: AVEVA Select Gulf and IC2. Together, we offer a comprehensive suite of solutions designed to address the diverse challenges faced by today's industries.",
        data: partners
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, {
        sectiontitle: "Our Culture",
        data: csr,
        sectiondescription: "This planet has already been through enough. We are committed to making a positive impact on society and the environment. Our commitment to sustainability is guided by three core values:"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/AboutView.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const banner$2 = "/images/banners/industries.webp";
const industriesiconF = "/images/industries/F&B.svg";
const industriesiconM = "/images/industries/manufactoring.svg";
const industriesiconC = "/images/industries/City.svg";
const industriesiconG = "/images/industries/Gas.svg";
const industriesiconU = "/images/industries/utilities.svg";
const industriesiconE = "/images/industries/energy.svg";
const industriesiconMi = "/images/industries/Mining.svg";
const _sfc_main$b = {
  __name: "IndustriesGrid",
  __ssrInlineRender: true,
  props: {
    data: Array
  },
  setup(__props) {
    const openDetails = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-11/12 h-full mx-auto 2xl:w-8/12 lg:w-10/12" }, _attrs))}><h1 class="text-accent1 font-[200] text-lg uppercase"> • Industries we serve</h1><hr class="w-full h-4 mt-3 text-accent2"><div class="grid relative w-full justify-center items-center grid-cols-2 md:grid-cols-4 2xl:grid-cols-7 gap-6 md:mb-[194px] mt-10 max-md:pb-10"><!--[-->`);
      ssrRenderList(__props.data, (item, key) => {
        _push(`<div class="${ssrRenderClass([{ "border-bg2/30": openDetails.value === key, "border-bg2": openDetails.value !== key }, "relative p-6 cursor-pointer flex flex-col gap-3 justify-center items-center col-span-1 text-center aspect-square rounded-[16px] border-2 bg-noise bg-opacity-50 bg-cover bg-center"])}"><div class="${ssrRenderClass([{ "from-bg2/50 to-bg2 bg-opacity-75": openDetails.value === key, "from-accent1/10 to-accent1/30 bg-opacity-50": openDetails.value != key }, "absolute inset-0 w-full h-full rounded-[16px] bg-gradient-to-br transform duration-300 z-[-1]"])}"></div><img${ssrRenderAttr("src", item.icon)}${ssrRenderAttr("alt", item.title)} width="94" height="94" center cover responsive loading="lazy" class="max-sm:w-[54px] aspect-square mx-auto"><h2 class="max-sm:text-[14px] text-accent1 font-[400] h-[48px]">${ssrInterpolate(item.title)}</h2></div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(__props.data, (item, key) => {
        _push(`<p style="${ssrRenderStyle([
          openDetails.value === key ? null : { display: "none" },
          { "text-align-last": "center" }
        ])}" class="md:block absolute hidden 2xl:left-1/2 2xl:transform 2xl:-translate-x-1/2 2xl:w-8/12 top-[100%] my-10 md:h-[194px] font-[200] max-sm:text-[14px] text-justify text-accent2">${ssrInterpolate(item.description)}</p>`);
      });
      _push(`<!--]--></div><!--[-->`);
      ssrRenderList(__props.data, (item, key) => {
        _push(`<p style="${ssrRenderStyle([
          openDetails.value === key ? null : { display: "none" },
          { "text-align-last": "center" }
        ])}" class="font-[200] max-sm:text-[14px] text-justify text-accent2 pb-10 mt-10 md:hidden">${ssrInterpolate(item.description)}</p>`);
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/IndustriesGrid.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
function getSuccessStories() {
  return [
    // Food & Beverage
    {
      id: 1,
      industry: "Food & Beverages",
      title: "Reducing Waste and Increasing Efficiency in Food Processing",
      slug: "slug1",
      logo: "/images/insidepages/industries/successstories/customerlogo.webp",
      summary: "Learn how a food processing company implemented digital solutions to optimize their production processes, resulting in significant waste reduction and improved efficiency.",
      date: "2024-05-08",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis."
    },
    // Water & Wastewater
    {
      id: 2,
      industry: "Water & Wastewater",
      title: "Improving Water Treatment Efficiency with IoT Sensors",
      slug: "slug2",
      logo: "/images/insidepages/industries/successstories/customerlogo.webp",
      summary: "Discover how a wastewater treatment plant utilized IoT sensors to monitor water quality in real-time, leading to more efficient treatment processes and reduced environmental impact.",
      date: "2024-05-08",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis."
    },
    // Smart Cities
    {
      id: 3,
      industry: "Smart Cities",
      title: "Transforming Urban Mobility with Smart Transportation Systems",
      slug: "slug3",
      logo: "/images/insidepages/industries/successstories/customerlogo.webp",
      summary: "Explore how a city implemented smart transportation systems, including traffic monitoring and dynamic routing, to alleviate congestion and improve overall mobility for residents.",
      date: "2024-05-08",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis."
    },
    // Oil & Gas
    {
      id: 4,
      industry: "Oil & Gas",
      title: "Enhancing Safety and Efficiency in Offshore Drilling Operations",
      slug: "slug4",
      logo: "/images/insidepages/industries/successstories/customerlogo.webp",
      summary: "Learn how an oil and gas company utilized advanced technology and automation to improve safety standards and increase efficiency in offshore drilling operations.",
      date: "2024-05-08",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis."
    }
    // Chemicals
    // {
    //   id: 5,
    //   industry: "Chemicals",
    //   title: "Optimizing Chemical Manufacturing Processes with Data Analytics",
    //   logo: customerlogo,
    //   summary: "Discover how a chemical manufacturing plant implemented data analytics tools to optimize production processes, resulting in reduced costs and improved product quality.",
    //   date: "2024-05-08",
    //   body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis."
    // },
    // Power & Utilities
    // {
    //   id: 6,
    //   industry: "Power & Utilities",
    //   title: "Transitioning to Renewable Energy Sources for Sustainable Power Generation",
    //   logo: customerlogo,
    //   summary: "Explore how a utility company transitioned from traditional fossil fuels to renewable energy sources, such as solar and wind, to reduce carbon emissions and promote sustainability.",
    //   date: "2024-05-08",
    //   body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis."
    // },
    // Life Science
    // {
    //   id: 7,
    //   industry: "Life Science",
    //   title: "Accelerating Drug Discovery with AI and Machine Learning",
    //   summary: "Learn how a pharmaceutical company utilized AI and machine learning algorithms to analyze vast amounts of data and accelerate the drug discovery process, leading to the development of life-saving medications.",
    //   date: "2024-05-08",
    //   body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis."
    // },
    // Metals, Mining, & Minerals
    // {
    //   id: 8,
    //   industry: "Metals, Mining, & Minerals",
    //   title: "Increasing Efficiency and Safety in Mining Operations",
    //   summary: "Discover how a mining company implemented autonomous vehicles and remote monitoring systems to increase operational efficiency and ensure the safety of workers in mining operations.",
    //   date: "2024-05-08",
    //   body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis."
    // }
  ];
}
function getSuccessStoryById(id) {
  let stories = getSuccessStories();
  return stories.find((story) => story.id === parseInt(id));
}
function getBlogPosts() {
  return [
    { id: 1, title: "The Impact of Industrial Digitization on Manufacturing Efficiency", slug: "slug1", summary: "Explore how industrial digitization is revolutionizing manufacturing processes and improving efficiency.", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis.", published_at: "2024-04-26", is_featured: true, is_arabic: false },
    { id: 2, title: "Challenges and Opportunities in Industrial Digitization", slug: "slug2", summary: "Discover the key challenges faced and opportunities unlocked by the adoption of industrial digitization technologies.", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis.", published_at: "2024-04-25", is_featured: true, is_arabic: false },
    { id: 3, title: "Implementing Industrial IoT for Smart Factories", slug: "slug3", summary: "Learn how Industrial Internet of Things (IIoT) is transforming traditional factories into smart, connected environments.", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis.", published_at: "2024-04-24", is_featured: true, is_arabic: false },
    { id: 4, title: "Data Analytics in Industrial Digitization", slug: "slug4", summary: "Discover how data analytics is driving insights and optimizations in industrial processes through digitization initiatives.", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis.", published_at: "2024-04-23", is_featured: true, is_arabic: false },
    { id: 5, title: "Cybersecurity Considerations for Industrial Digitization", slug: "slug5", summary: "Explore the importance of cybersecurity measures in safeguarding industrial digitization systems and infrastructure.", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis.", published_at: "2024-04-22", is_featured: true, is_arabic: false },
    { id: 6, title: "The Role of Artificial Intelligence in Industrial Automation", slug: "slug6", summary: "Learn how artificial intelligence technologies are powering automation and optimization in industrial processes.", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis.", published_at: "2024-04-21", is_featured: false, is_arabic: false },
    { id: 7, title: "Digital Twin Technology in Industrial Applications", slug: "slug7", summary: "Discover how digital twin technology is enabling predictive maintenance and virtual simulations in industrial settings.", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis.", published_at: "2024-04-20", is_featured: false, is_arabic: false },
    { id: 8, title: "Scaling Up: Strategies for Successful Industrial Digitization Implementation", slug: "slug8", summary: "Explore strategies for effectively scaling up industrial digitization initiatives and achieving sustainable growth.", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu justo id libero tincidunt accumsan eget sed purus. Nullam nec sodales tellus, vitae mattis lorem. Integer nec lacus nisl. Aenean pharetra suscipit nisi nec gravida. Nulla facilisi. Nullam vel sapien ut enim efficitur sollicitudin a id tortor. Sed in magna nisl. Nulla lobortis ligula sit amet commodo congue. Maecenas fringilla consectetur purus, eget pharetra odio. Vivamus vestibulum risus vitae eros laoreet vulputate. Nulla facilisi. Aenean consequat auctor dui, sit amet volutpat urna varius vitae. Sed ullamcorper, magna a ultrices ultrices, velit dui placerat urna, a ullamcorper lectus dolor quis nunc. Cras convallis ante eget velit malesuada lobortis.", published_at: "2024-04-19", is_featured: false, is_arabic: false }
  ];
}
function getBlogPostById(slug) {
  let blogs = getBlogPosts();
  return blogs.find((blog) => blog.slug === slug);
}
function getFeaturedBlogPosts() {
  let blogs = getBlogPosts();
  return blogs.filter((blog) => blog.is_featured === true);
}
const _sfc_main$a = {
  __name: "IndustriesView",
  __ssrInlineRender: true,
  setup(__props) {
    const industries = [
      { id: 1, title: "Smart Cities", description: "Smart Cities are at the forefront of innovation to enhance the quality of life for residents and optimize city operations. AITS is pioneering the transformation of urban landscapes by providing advanced software solutions and digital services that integrate information and communication technology (ICT) to drive efficiency, sustainability, and citizen-centric services. From smart infrastructure management to intelligent transportation systems and data-driven decision-making, our solutions empower cities to harness the power of real-time data for better resource allocation and enhanced service delivery.", icon: industriesiconC },
      { id: 2, title: "Food & Beverage", description: "It is crucial for the F&B industry to ensure product quality, safety, and compliance while meeting consumer demands and regulatory requirements. With our innovative software solutions, companies can better streamline production processes, enhance quality control, and ensure regulatory compliance. Manufacturing Execution Systems (MES) that track the transformation of raw materials to finished goods provide end-to-end visibility and traceability. Similar solutions also optimize supply chain management, minimize waste, and deliver safe products to consumers.", icon: industriesiconF },
      { id: 3, title: "Manufacturing", description: "Manufacturers today face increasing pressure to improve efficiency, reduce costs, and maintain quality standards. The solution? Systems such as Manufacturing Operations Management (MOM) optimize production processes, minimize downtime, and enhance overall productivity. By leveraging real-time data analytics and automation technologies, manufacturers can streamline operations, increase output, and stay ahead of market demands. This ultimately drives profitability and competitiveness in the industry.", icon: industriesiconM },
      { id: 4, title: "Oil & Gas", description: "The oil and gas industry operates in a complex environment characterized by volatile market conditions, stringent regulatory requirements, and evolving technological challenges. Get tailored software solutions and digital services designed to address unique needs, from upstream exploration and production to downstream refining and distribution. Do you want to enhance operational efficiency, mitigate risks, and maximize profitability in a rapidly changing industry landscape? AITS helps enable data-driven decision-making, asset optimization, and predictive maintenance.", icon: industriesiconG },
      { id: 5, title: "Energy", description: "As the demand for energy continues to rise, energy companies are under pressure to improve sustainability, reliability, and cost-effectiveness in their operations. With Supervisory Control and Data Acquisition (SCADA) systems, energy providers can now control and optimize energy generation, distribution, and management processes. AITS helps energy companies enhance grid stability, reduce energy losses, and integrate renewable energy sources. How? By leveraging advanced analytics, predictive modeling, and IoT technologies. This ultimately attains a more sustainable and resilient energy future.", icon: industriesiconE },
      { id: 6, title: "Utilities", description: "Utilities companies face challenges such as aging infrastructure, increasing demand for services, and regulatory compliance requirements. Our software solutions for utilities enable companies to optimize asset management, improve resource allocation, and enhance grid reliability. IoT sensors, predictive analytics, and machine learning algorithms will aid utilities companies detect and prevent equipment failures, optimize energy distribution, and enhance customer satisfaction in an evolving energy landscape.", icon: industriesiconU },
      { id: 7, title: "Metal, Mining, & Minerals", description: "The mining and metal industry is a challenging one, especially in today’s decade where companies are experiencing potential for increased geopolitical risks, years of underinvestment, acute labor shortages, and much more.Our advanced digital threads and connected workers help in bettering waste management, optimize mineral recovery, reduce costs, and increase revenue.", icon: industriesiconMi }
    ];
    const successStories = getSuccessStories();
    console.log(successStories);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><title>AITS - The Various Industries We Serve</title><meta name="description" content="We provide solutions to Smart Cities, F&amp;B, Manufacturing, Oil&amp;Gas, Energy, and Utilities. Interested? Let&#39;s get started!"></head>`);
      _push(ssrRenderComponent(_sfc_main$j, {
        pagebanner: unref(banner$2),
        pagetitle: "Industries",
        pagedescription: "From Smart Cities to Food and Beverage, Energy, Transportation, and much more, AITS offers tailored industrial software solutions and digital services to meet your unique needs in various industries. Discover how our industry-specific solutions and services can drive success for your business."
      }, null, _parent));
      _push(`<section class="relative">`);
      _push(ssrRenderComponent(_sfc_main$b, { data: industries }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Industries/IndustriesView.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const banner$1 = "/images/banners/careers.webp";
const _sfc_main$9 = {
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
      }, _attrs))}><h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">${ssrInterpolate(__props.sectiontitle)}</h1><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">${ssrInterpolate(__props.sectiondescription)}</p>`);
      if (__props.data) {
        _push(`<ul role="list" class="flex flex-wrap justify-center lg;justify-between mt-10 gap-6 lg:gap-3 list-style-none"><!--[-->`);
        ssrRenderList(__props.data, (item, key) => {
          _push(`<li class="flex-grow lg:w-5/12 w-full relative group sm:min-h-[135px] bg-extended-noise bg-cover bg-center rounded-[16px]"><div class="p-6 w-full h-full relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2"><div class="w-8/12"><h3 class="font-[200] max-sm:text-[14px] text-accent1 underline mb-3">${ssrInterpolate(item.type)}</h3><h2 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500] mb-3">${ssrInterpolate(item.title)}</h2><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">${ssrInterpolate(item.location)}</p></div>`);
          _push(ssrRenderComponent(unref(RouterLink), {
            id: "go-to-" + item.title + "-page",
            "aria-label": "apply for" + item.title,
            to: item.to,
            target: item.target,
            class: "cursor-pointer px-4 py-3 mt-auto mb-0 w-fit block max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125"
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
        _push(`<div class="lg:w-full relative group bg-extended-noise bg-cover bg-center rounded-[16px] mt-10 mx-auto"><div class="p-6 w-full h-full relative flex justify-between items-center gap-3 rounded-[16px] bg-gradient-to-br from-accent1/10 to-accent1/30 border-2 border-bg2"><h3 class="2xl:text-2xl lg:text-xl sm:text-lg text-accent1 font-[500]">No posted ${ssrInterpolate(__props.sectionid)}.</h3></div></div>`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/JobsList.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
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
      }, _attrs))}><h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">${ssrInterpolate(__props.sectiontitle)}</h1><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">${ssrInterpolate(__props.sectiondescription)}</p><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify mt-10">At AITS, we’re committed to creating an environment where employees thrive both personally and professionally. Our inclusive culture celebrates diversity and collaboration, valuing every employee. We’re committed to aligning our mission and values with the work we do. Our purpose-driven approach ensures that every employee understands their impact and contributes meaningfully to our shared goals. Whether it’s serving our customers, driving innovation, or making a positive impact in the world, purpose guides our actions and inspires excellence.</p><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">Our attractive salary packages include performance-based annual increases and bonuses. Enjoy comprehensive benefits like health insurance, annual air tickets, and various paid leaves. Get access to training, professional development opportunities, and leadership programs for career growth, and enjoy flexible hours and remote work options to support work-life balance.</p></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BenefitsFlexWithBlur.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "CareersView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><title>AITS - Join the AITS Team</title><meta name="description" content="Browse through our available job openings to join the team and make an impact at AITS! We welcome diverse experts from all parts of the world."></head>`);
      _push(ssrRenderComponent(_sfc_main$j, {
        pagebanner: unref(banner$1),
        pagetitle: "Careers",
        pagedescription: "You might just be the employee we’ve been looking for! Browse through our selection of job vacancies and apply to be part of the family."
      }, null, _parent));
      _push(`<section class="relative -mt-40">`);
      _push(ssrRenderComponent(_sfc_main$9, {
        sectionid: "jobs-openings",
        sectiontitle: "Job Openings",
        sectiondescription: "Stay informed with the latest insights, trends, and developments in industrial automation.\r\n      Explore our blog for thought-provoking articles, expert opinions, and practical tips to help\r\n      your business stay ahead of the curve."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$9, {
        sectionid: "internship-opportunities",
        sectiontitle: "Internship Opportunities",
        sectiondescription: "Got a knack for learning? Join our team as an intern and develop your skills while exploring the mystical world of software solutions."
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$8, {
        sectiontitle: "Employees Benefits",
        sectiondescription: "AITS, where talent thrives and ambitions are realized. We value our employees and are committed to their growth and well-being. Explore the unique advantages of being part of our team, encompassing:"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/CareersView.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const banner = "/images/banners/resources.webp";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$6 = {
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
        class: "relative flex flex-wrap items-center w-full h-full gap-6 pt-40 lg:gap-3 lg:justify-between"
      }, _attrs))} data-v-a4ae7fb6><div class="lg:w-6/12 w-11/12 2xl:ps-[15.666667%] lg:ps-[8.333333%] lg:pe-8 mx-auto h-full" data-v-a4ae7fb6><h1 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6" data-v-a4ae7fb6>${ssrInterpolate(__props.sectiontitle)}</h1><p class="text-accent2 font-[200] max-sm:text-[14px] sm:text-justify mb-6" data-v-a4ae7fb6>${ssrInterpolate(__props.sectiondescription)}</p></div><div class="relative w-full h-full mx-auto lg:w-5/12" data-v-a4ae7fb6>`);
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
                    _push3(`<div class="w-full h-40 bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]" data-v-a4ae7fb6${_scopeId2}></div><div class="flex flex-col gap-3 p-6 lg:gap-6" data-v-a4ae7fb6${_scopeId2}><h3 class="text-accent2 font-[200] max-sm:text-[14px]" data-v-a4ae7fb6${_scopeId2}>${ssrInterpolate(item.date)}</h3><h2 class="text-accent1 font-[400] sm:text-lg sm:min-h-[56px] min-h-[56px]" data-v-a4ae7fb6${_scopeId2}>${ssrInterpolate(item.title)}</h2><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify sm:min-h-[72px] min-h-[63px]" data-v-a4ae7fb6${_scopeId2}>${ssrInterpolate(item.summary)}</p></div>`);
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PostsCarousel.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const PostsCarousel = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-a4ae7fb6"]]);
const _sfc_main$5 = {
  __name: "ResourcesView",
  __ssrInlineRender: true,
  setup(__props) {
    const blogposts = getFeaturedBlogPosts();
    const whitepaper = {
      id: 1,
      title: "Explore Our Whitepapers",
      description: "Dive deeper into key industry topics with our whitepapers. Gain valuable insights and actionable strategies to address complex challenges and drive business growth.",
      image: "/images/insidepages/resources/whitepapers.webp"
    };
    const industryInsights = [
      {
        id: 1,
        title: "Increasing Efficiency in Food Production with IoT",
        summary: "Explore how IoT technology is optimizing food production processes and ensuring quality and safety standards.",
        to: "https://example.com/food-iot-insights",
        target: "_blank",
        date: "2024-04-26",
        category: "Food & Beverage"
      },
      {
        id: 2,
        title: "Smart Solutions for Water Management",
        summary: "Discover innovative technologies and strategies for efficient water management and wastewater treatment.",
        to: "https://example.com/water-management-insights",
        target: "_blank",
        date: "2024-04-25",
        category: "Water & Wastewater"
      },
      {
        id: 3,
        title: "Building Sustainable Infrastructure for Smart Cities",
        summary: "Learn about the integration of IoT and data analytics in urban planning to create smarter and more sustainable cities.",
        to: "https://example.com/smart-cities-insights",
        target: "_blank",
        date: "2024-04-24",
        category: "Smart Cities"
      },
      {
        id: 4,
        title: "Digital Transformation in the Oil & Gas Industry",
        summary: "Explore how digital technologies such as AI and automation are revolutionizing operations and improving safety in the oil and gas sector.",
        to: "https://example.com/oil-gas-insights",
        target: "_blank",
        date: "2024-04-23",
        category: "Oil & Gas"
      },
      {
        id: 5,
        title: "Innovations in Chemical Manufacturing",
        summary: "Discover the latest advancements in chemical manufacturing processes and how they are driving efficiency and sustainability.",
        to: "https://example.com/chemicals-insights",
        target: "_blank",
        date: "2024-04-22",
        category: "Chemicals"
      }
      // { 
      //   id: 6, 
      //   title: 'Transforming Power Grids with Smart Technology', 
      //   summary: 'Learn about the integration of smart meters and grid automation in modernizing power distribution networks and enhancing reliability.', 
      //   to: 'https://example.com/power-utilities-insights', 
      //   target: '_blank', 
      //   date: '2024-04-21',
      //   category: "Power & Utilities"
      // },
      // { 
      //   id: 7, 
      //   title: 'Advancements in Pharmaceutical Manufacturing', 
      //   summary: 'Explore how advancements in automation and data analytics are driving efficiency and compliance in pharmaceutical manufacturing.', 
      //   to: 'https://example.com/life-science-insights', 
      //   target: '_blank', 
      //   date: '2024-04-20',
      //   category: "Life Science"
      // },
      // { 
      //   id: 8, 
      //   title: 'Digitization Trends in Mining Operations', 
      //   summary: 'Discover how digital technologies are optimizing mining operations, from exploration to extraction, and improving safety and productivity.', 
      //   to: 'https://example.com/mining-digitization-insights', 
      //   target: '_blank', 
      //   date: '2024-04-19',
      //   category: "Metals, Mining, & Minerals"
      // },
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><head><title>AITS - Resources</title><meta name="description" content="Got a knack for reading? Gain access to free resources including whitepapers, industry insights, educational blogs, and specialized webinars."></head>`);
      _push(ssrRenderComponent(_sfc_main$j, {
        pagebanner: unref(banner),
        pagetitle: "Resources",
        pagedescription: "Need some resources to explore the complex world of software solutions and digital services? Welcome to the home of the latest industry news, insights, trends, and much more."
      }, null, _parent));
      _push(`<section class="relative -mt-40">`);
      _push(ssrRenderComponent(PostsCarousel, {
        sectionid: "blog",
        sectiontitle: "Blog",
        sectiondescription: "Stay informed with the latest trends and developments in industrial automation. Explore our blog for thought-provoking articles, expert opinions, and practical tips to help your business stay ahead of the curve.",
        data: unref(blogposts)
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$l, {
        sectionid: "whitepapers",
        sectiontitle: "Whitepapers",
        item: whitepaper
      }, null, _parent));
      _push(ssrRenderComponent(PostsCarousel, {
        sectionid: "industry-insights",
        sectiontitle: "Industry Insights",
        sectiondescription: "Access exclusive industry insights and reports to stay informed about the latest news, developments, and opportunities in your sector. Stay ahead of the competition with actionable intelligence from AITS.",
        data: industryInsights
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Resources/ResourcesView.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "PostDetails",
  __ssrInlineRender: true,
  props: {
    sectiontitle: String,
    item: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-11/12 py-40 mx-auto 2xl:w-8/12 lg:w-10/12" }, _attrs))}><h1 class="text-accent1 font-[200] text-lg uppercase"> • ${ssrInterpolate(__props.sectiontitle)}</h1><hr class="w-full h-4 mt-3 text-accent2"><div class="flex flex-col gap-3 mt-10"><div class="w-full h-40 bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]"></div><h1 class="font-[200] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px]">${ssrInterpolate(__props.item.title)}</h1><h3 class="text-accent2 font-[200] max-sm:text-[14px]">${ssrInterpolate(__props.item.date)}</h3><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify mb-6">${ssrInterpolate(__props.item.body)}</p></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PostDetails.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "StoriesPostDetailsView",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const successStory = getSuccessStoryById(route.params.id);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        sectiontitle: "Success Stories Details",
        item: unref(successStory)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Industries/StoriesPostDetailsView.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "PostsList",
  __ssrInlineRender: true,
  props: {
    category: String,
    sectiontitle: String,
    sectiondescription: String,
    data: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-11/12 py-40 mx-auto 2xl:w-8/12 lg:w-10/12" }, _attrs))}><h1 class="font-[500] text-accent1 2xl:text-6xl lg:text-5xl md:text-4xl text-[30px] uppercase mb-6">${ssrInterpolate(__props.sectiontitle)}</h1><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">${ssrInterpolate(__props.sectiondescription)}</p><ul role="list" class="grid grid-cols-3 gap-6 mt-10 lg:gap-3 list-style-none"><!--[-->`);
      ssrRenderList(__props.data, (item, key) => {
        _push(`<li class="flex-grow lg:col-span-1 ms:col-span-2 col-span-3 w-full relative group sm:min-h-[135px] rounded-[16px] border-2 border-bg2"><div class="w-full h-40 bg-gradient-to-t from-[#1E364D] to-[#1E364D]/10 rounded-t-[16px]"></div><div class="flex flex-col gap-3 p-6 lg:gap-6"><h3 class="text-accent2 font-[200] max-sm:text-[14px]">${ssrInterpolate(item.date)}</h3><h2 class="text-accent1 font-[400] sm:text-lg">${ssrInterpolate(item.title)}</h2><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">${ssrInterpolate(item.summary)}</p></div></li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/PostsList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "BlogView",
  __ssrInlineRender: true,
  setup(__props) {
    const blogposts = getBlogPosts();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        sectiontitle: "All Blogs",
        category: "blog",
        sectiondescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        data: unref(blogposts)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Resources/Blog/BlogView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "BlogPostDetailsView",
  __ssrInlineRender: true,
  props: {
    slug: String
  },
  setup(__props) {
    const route = useRoute();
    const blogpost = getBlogPostById(route.params.slug);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        sectiontitle: "Blog Post Details",
        item: unref(blogpost)
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Resources/Blog/BlogPostDetailsView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const routes = [
  { path: "/", component: _sfc_main$k },
  { path: "/about", component: _sfc_main$c },
  { path: "/contact", component: _sfc_main$f },
  { path: "/industries", component: _sfc_main$a },
  { path: "/careers", component: _sfc_main$7 },
  { path: "/resources", component: _sfc_main$5 },
  { path: "/resources/blog", component: _sfc_main$1 },
  { path: "/resources/blog/:slug", component: _sfc_main, props: true },
  { path: "/industries/success-stories/:slug", component: _sfc_main$3 }
];
createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth"
      };
    }
    return { top: 0, behavior: "smooth" };
  }
});
const createApp = ViteSSG(
  // the root component
  _sfc_main$o,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes: routes2, isClient, initialState }) => {
    app.use(router);
    const head = createHead();
    head.use(InferSeoMetaPlugin());
    app.use(head);
    if (isClient) {
      app.use(MotionPlugin);
      app.use(VueRecaptchaPlugin, {
        v2SiteKey: "6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl"
      });
    }
  }
);
export {
  createApp
};
