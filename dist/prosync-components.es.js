import { defineComponent as o, createElementBlock as a, openBlock as r, normalizeClass as m, renderSlot as l, createTextVNode as c, toDisplayString as i } from "vue";
const p = ["disabled"], f = /* @__PURE__ */ o({
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
    return o({
      name: "ProButton"
    }), (t, n) => (r(), a("button", {
      onClick: n[0] || (n[0] = (s) => t.$emit("click")),
      disabled: e.disabled,
      class: m(["jet-btn", `jet-btn-${e.theme}`])
    }, [
      l(t.$slots, "default", {}, () => [
        c(i(e.text), 1)
      ], !0)
    ], 10, p));
  }
}), d = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, u] of t)
    n[s] = u;
  return n;
}, k = /* @__PURE__ */ d(f, [["__scopeId", "data-v-66045a0a"]]), _ = { class: "template" }, x = /* @__PURE__ */ o({
  __name: "Template",
  props: {
    text: { type: String, required: !1 }
  },
  emits: ["click"],
  setup(e) {
    return o({
      name: "Template"
    }), (t, n) => (r(), a("div", _, [
      l(t.$slots, "default", {}, () => [
        c(i(e.text || "No results xxxx"), 1)
      ], !0)
    ]));
  }
}), y = /* @__PURE__ */ d(x, [["__scopeId", "data-v-bc3be847"]]);
export {
  k as ProButton,
  y as Template
};
