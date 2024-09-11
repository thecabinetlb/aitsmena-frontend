import { ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { k as _export_sfc } from "../main.mjs";
const _imports_0 = "/images/insidepages/elements/centertop.webp";
const _imports_1 = "/images/insidepages/elements/centermiddle.webp";
const _imports_2 = "/images/insidepages/elements/righttop.webp";
const _imports_3 = "/images/insidepages/elements/rightmiddle.webp";
const _imports_4 = "/images/insidepages/elements/rightbottom.webp";
const _imports_5 = "/images/insidepages/elements/leftmiddle.webp";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="sm:hidden block absolute inset-0 w-full transform bg-center bg-cover z-[-1] bg-mobilecolors"></div><img${ssrRenderAttr("src", _imports_0)} alt="AITS" width="1440" height="1444" center cover responsive loading="lazy" class="sm:block absolute hidden top-1/3 transform -translate-y-1/3 right-0 z-[-1]"><img${ssrRenderAttr("src", _imports_1)} alt="AITS" width="1116" height="1239" center cover responsive loading="lazy" class="sm:block absolute hidden transform -translate-y-2/3 right-0 z-[-1] top-2/3"><img${ssrRenderAttr("src", _imports_2)} alt="AITS" width="1024" height="1431" center cover responsive loading="lazy" class="sm:block absolute hidden top-1/2 transform -translate-y-1/2 right-0 z-[-1]"><img${ssrRenderAttr("src", _imports_3)} alt="AITS" width="851" height="1563" center cover responsive loading="lazy" class="sm:block absolute hidden right-0 transform -translate-y-2/3 top-2/3 z-[-1]"><img${ssrRenderAttr("src", _imports_4)} alt="AITS" width="734" height="1553" center cover responsive loading="lazy" class="sm:block absolute hidden bottom-0 right-0 z-[-1]"><img${ssrRenderAttr("src", _imports_5)} alt="AITS" width="952" height="1635" center cover responsive loading="lazy" class="sm:block absolute hidden left-0 transform -translate-y-1/2 top-1/2 z-[-1]"><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/InsideBody.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const InsideBody = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  InsideBody as I
};
