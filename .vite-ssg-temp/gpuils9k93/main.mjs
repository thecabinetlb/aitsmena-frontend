import { ViteSSG } from "vite-ssg";
import { ref, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { RouterLink } from "vue-router";
import { createHead } from "@unhead/vue";
import { MotionPlugin } from "@vueuse/motion";
import { VueRecaptchaPlugin } from "vue-recaptcha/head";
const logo = "/AITSLogoNoSlogan.webp";
const _sfc_main$2 = {
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
            _push2(`<img${ssrRenderAttr("src", unref(logo))} alt="AITS logo" width="80" height="22" cover center responsive loading="eager" class="max-lg:my-[20px]"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(logo),
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layouts/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "/images/patterns/patternfooter.svg";
const x = "/images/socials/x.svg";
const youtube = "/images/socials/youtube.svg";
const facebook = "/images/socials/facebook.svg";
const linkedin = "/images/socials/linkedin.svg";
const _sfc_main$1 = {
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
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "relative flex flex-col items-center justify-center gap-10 pt-40" }, _attrs))}><div class="flex items-center justify-center w-11/12 gap-3 p-6 mx-auto max-sm:flex-wrap 2xl:w-8/12 lg:w-10/12 rounded-[16px] bg-bg"><input type="text" id="email" placeholder="example@gmail.com" class="md:w-6/12 w-full block px-4 py-3 bg-gradient-to-r from-accent1/10 to-accent1/20 backdrop-blur-[16px] rounded-[16px] text-accent1 bg-transparent border border-accent2 appearance-none focus:outline-none focus:ring-0 focus:border-bg2 peer"><div to="/" class="block w-fit cursor-pointer px-4 py-3 max-sm:text-[14px] font-[200] text-center rounded-[8px] text-accent1 bg-bg2 hover:brightness-125">Subscribe</div></div><div class="flex flex-wrap justify-between w-11/12 gap-6 px-6 my-10 lg:gap-0 2xl:w-8/12 lg:w-10/12"><div class="flex flex-col w-full gap-2 mb-10 lg:w-4/12 lg:mb-0"><img${ssrRenderAttr("src", unref(logo))} alt="AITS logo" width="80" height="22" center cover responsive loading="lazy"><p class="text-accent2 font-[200] max-sm:text-[14px] text-justify">Stay connected with AITS on social media for the latest updates, news, and insights. Follow us on LinkedIn, Twitter, Facebook, and Instagram to join the conversation and stay informed.</p><div class="relative z-[2] flex items-center gap-2"><!--[-->`);
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
      _push(`<!--]--></ul></div><img${ssrRenderAttr("src", _imports_0)} alt="AITS" width="446" height="643" center cover responsive loading="lazy" class="absolute left-0 top-[100%] transform -translate-y-[100%] opacity-75"><div class="text-center min-h-[50px] w-full flex flex-col items-center justify-center bg-footer-noise bg-cover bg-center"><p class="text-accent1 max-sm:text-[14px]">Copyright @ AITS All Rights Reserved.</p></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layouts/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const routes = [];
const createApp = ViteSSG(
  // the root component
  _sfc_main,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes: routes2, isClient, initialState }) => {
    app.use(MotionPlugin);
    app.use(router);
    const head = createHead();
    app.use(head);
    app.use(VueRecaptchaPlugin, {
      v2SiteKey: "6LdrDcYpAAAAAAKprMmCkM5ESKdgGcLAwmr016wl"
    });
  }
);
export {
  createApp
};
