import { defineComponent as a, computed as l, createElementBlock as c, openBlock as i, normalizeClass as p, renderSlot as u, createTextVNode as d, toDisplayString as g } from "vue";
const m = ["disabled"], v = /* @__PURE__ */ a({
  __name: "ProButton",
  props: {
    text: { type: String, required: !1 },
    disabled: { type: Boolean, default: !1 },
    size: {
      type: String,
      default: "md"
    },
    theme: {
      type: String,
      default: "default"
    }
  },
  emits: ["click"],
  setup(e) {
    a({
      name: "ProButton"
    });
    const t = e, r = l(() => {
      switch (t.size) {
        case "sm":
          return "px-3 py-1 text-sm";
        case "lg":
          return "px-6 py-3 text-lg";
        case "md":
        default:
          return "px-4 py-2 text-base";
      }
    }), n = l(() => {
      switch (t.theme) {
        case "primary":
          return "bg-blue-600 text-white hover:bg-blue-700";
        case "secondary":
          return "bg-gray-300 text-gray-800 hover:bg-gray-400";
        case "success":
          return "bg-green-500 text-white hover:bg-green-600";
        case "warning":
          return "bg-orange-600 text-white hover:bg-orange-700";
        case "danger":
          return "bg-red-600 text-white hover:bg-red-700";
        case "default":
        default:
          return "bg-gray-100 text-gray-800 hover:bg-gray-200";
      }
    });
    return (s, o) => (i(), c("button", {
      onClick: o[0] || (o[0] = (y) => s.$emit("click")),
      disabled: e.disabled,
      class: p([
        "inline-flex rounded border-none outline-none shadow-none",
        r.value,
        n.value,
        e.disabled && "opacity-50 cursor-not-allowed"
      ])
    }, [
      u(s.$slots, "default", {}, () => [
        d(g(e.text), 1)
      ])
    ], 10, m));
  }
}), b = { class: "template" }, x = /* @__PURE__ */ a({
  __name: "Template",
  props: {
    text: { type: String, required: !1 }
  },
  emits: ["click"],
  setup(e) {
    return a({
      name: "Template"
    }), (t, r) => (i(), c("div", b, [
      u(t.$slots, "default", {}, () => [
        d(g(e.text || "No results xxxx"), 1)
      ], !0)
    ]));
  }
}), f = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [n, s] of t)
    r[n] = s;
  return r;
}, _ = /* @__PURE__ */ f(x, [["__scopeId", "data-v-bc3be847"]]);
export {
  v as ProButton,
  _ as Template
};
