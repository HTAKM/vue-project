const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/js/About-chunk.js","assets/js/@vue-chunk.js","assets/js/vue-router-chunk.js","assets/js/@primeuix-chunk.js","assets/js/@primevue-chunk.js","assets/css/About-asset.css","assets/js/Project-chunk.js","assets/js/Website-chunk.js"])))=>i.map(i=>d[i]);
import { f as createElementBlock, j as createBaseVNode, t as toDisplayString, k as createVNode, l as withCtx, m as normalizeClass, q as resolveComponent, v as openBlock, x as createBlock, T as Transition, y as renderSlot, z as createTextVNode, A as createApp } from "./@vue-chunk.js";
import { c as createRouter, a as createWebHashHistory } from "./vue-router-chunk.js";
import { Q as Qr } from "./@primeuix-chunk.js";
import { P as PrimeVue } from "./@primevue-chunk.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/vue-project/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled2 = function(promises) {
      return Promise.all(
        promises.map(
          (p) => Promise.resolve(p).then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason })
          )
        )
      );
    };
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = allSettled2(
      deps.map((dep) => {
        dep = assetsURL(dep);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const _sfc_main$3 = {
  props: {
    head: String,
    isDark: Boolean
  },
  emits: ["toggleDark"],
  data() {
    return {
      expanded: false
    };
  },
  methods: {
    toggleExpanded() {
      this.expanded = !this.expanded;
    }
  }
};
const _hoisted_1$3 = { class: "logo" };
const _hoisted_2$1 = { href: "#" };
const _hoisted_3 = { class: "menu-toggle-wrap" };
const _hoisted_4 = { class: "menu" };
const _hoisted_5 = { class: "menu" };
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("aside", {
    class: normalizeClass(`${_ctx.expanded ? "expanded" : ""}`)
  }, [
    createBaseVNode("div", _hoisted_1$3, [
      createBaseVNode("a", _hoisted_2$1, toDisplayString(_ctx.head), 1)
    ]),
    createBaseVNode("div", _hoisted_3, [
      createBaseVNode("button", {
        class: "menu-toggle",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.toggleExpanded && _ctx.toggleExpanded(...args))
      }, _cache[3] || (_cache[3] = [
        createBaseVNode("span", { class: "material-symbols-outlined" }, "keyboard_double_arrow_right", -1)
      ]))
    ]),
    _cache[10] || (_cache[10] = createBaseVNode("h3", null, "Menu", -1)),
    createBaseVNode("div", _hoisted_4, [
      createVNode(_component_router_link, {
        class: "button",
        to: "/"
      }, {
        default: withCtx(() => _cache[4] || (_cache[4] = [
          createBaseVNode("span", { class: "material-symbols-outlined" }, "home", -1),
          createBaseVNode("span", { class: "text" }, "Home", -1)
        ])),
        _: 1,
        __: [4]
      }),
      createVNode(_component_router_link, {
        class: "button",
        to: "/about"
      }, {
        default: withCtx(() => _cache[5] || (_cache[5] = [
          createBaseVNode("span", { class: "material-symbols-outlined" }, "info", -1),
          createBaseVNode("span", { class: "text" }, "About me", -1)
        ])),
        _: 1,
        __: [5]
      }),
      createVNode(_component_router_link, {
        class: "button",
        to: "/project"
      }, {
        default: withCtx(() => _cache[6] || (_cache[6] = [
          createBaseVNode("span", { class: "material-symbols-outlined" }, "work", -1),
          createBaseVNode("span", { class: "text" }, "Projects", -1)
        ])),
        _: 1,
        __: [6]
      }),
      createVNode(_component_router_link, {
        class: "button",
        to: "/link"
      }, {
        default: withCtx(() => _cache[7] || (_cache[7] = [
          createBaseVNode("span", { class: "material-symbols-outlined" }, "captive_portal", -1),
          createBaseVNode("span", { class: "text" }, "Links", -1)
        ])),
        _: 1,
        __: [7]
      })
    ]),
    _cache[11] || (_cache[11] = createBaseVNode("div", { class: "flex" }, null, -1)),
    createBaseVNode("div", _hoisted_5, [
      _ctx.isDark ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: "button",
        onClick: _cache[1] || (_cache[1] = ($event) => this.$emit("toggleDark", false))
      }, _cache[8] || (_cache[8] = [
        createBaseVNode("span", { class: "material-symbols-outlined" }, "brightness_3", -1),
        createBaseVNode("span", { class: "text" }, "Dark mode", -1)
      ]))) : (openBlock(), createElementBlock("button", {
        key: 1,
        class: "button",
        onClick: _cache[2] || (_cache[2] = ($event) => this.$emit("toggleDark", true))
      }, _cache[9] || (_cache[9] = [
        createBaseVNode("span", { class: "material-symbols-outlined" }, "brightness_5", -1),
        createBaseVNode("span", { class: "text" }, "Light mode", -1)
      ])))
    ])
  ], 2);
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", render$3], ["__scopeId", "data-v-afea40ea"]]);
const _sfc_main$2 = {
  components: {
    Sidebar
  },
  data() {
    return {
      isDarkMode: false
    };
  },
  created() {
    this.$watch(
      () => this.isDarkMode,
      (newValue) => {
        if (newValue) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }
    );
  },
  methods: {
    checkDarkMode(event) {
      this.isDarkMode = event ? event.matches : window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
    toggleDark() {
      this.isDarkMode = !this.isDarkMode;
    }
  },
  mounted() {
    this.checkDarkMode();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", this.checkDarkMode);
    document.body.classList.add("loaded");
  },
  beforeUnmount() {
    window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", this.checkDarkMode);
  }
};
const _hoisted_1$2 = { id: "app" };
const _hoisted_2 = { class: "main" };
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_RouterView = resolveComponent("RouterView");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createVNode(_component_Sidebar, {
      head: "HU",
      class: normalizeClass({ dark: _ctx.isDarkMode }),
      isDark: _ctx.isDarkMode,
      onToggleDark: _ctx.toggleDark
    }, null, 8, ["class", "isDark", "onToggleDark"]),
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_RouterView, { isDark: _ctx.isDarkMode }, null, 8, ["isDark"])
    ])
  ]);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", render$2]]);
const _sfc_main$1 = {
  props: {
    title: String,
    isDark: Boolean
  }
};
const _hoisted_1$1 = { class: "col" };
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { appear: "" }, {
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass(["segment mt-3", { dark: _ctx.isDark }])
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("h1", null, toDisplayString(_ctx.title), 1),
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2)
    ]),
    _: 3
  });
}
const Segment = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1]]);
const _sfc_main = {
  name: "Home",
  components: {
    Segment
  },
  props: {
    isDark: Boolean
  }
};
const _hoisted_1 = { class: "home-page" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_segment = resolveComponent("segment");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("main", _hoisted_1, [
    createVNode(_component_segment, {
      title: "Welcome!",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => _cache[0] || (_cache[0] = [
        createBaseVNode("p", { class: "mb-0" }, "I am HU. You can also call me Henry or HTAKM.", -1),
        createBaseVNode("p", { class: "mb-0" }, "I am an undegraduate student of the Hong Kong University of Science and Technology.", -1)
      ])),
      _: 1,
      __: [0]
    }, 8, ["isDark"]),
    createVNode(_component_segment, {
      title: "My Website",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        _cache[3] || (_cache[3] = createBaseVNode("p", { class: "mb-0" }, " In this website, you can find some information about me, as well as the notes I made and some related links. You can click on the following links to find what you want. ", -1)),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createVNode(_component_router_link, { to: "/project#notes" }, {
              default: withCtx(() => _cache[1] || (_cache[1] = [
                createTextVNode("My Notes")
              ])),
              _: 1,
              __: [1]
            })
          ]),
          _cache[2] || (_cache[2] = createBaseVNode("li", null, [
            createBaseVNode("a", {
              href: "https://htakm.github.io/htakm_test/",
              target: "_blank",
              rel: "noopener"
            }, "My Old Website")
          ], -1))
        ])
      ]),
      _: 1,
      __: [3]
    }, 8, ["isDark"])
  ]);
}
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render]]);
const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  mode: "hash",
  routes: [
    {
      path: "/",
      name: "Index",
      component: Home
    },
    {
      path: "/about",
      name: "About",
      component: () => __vitePreload(() => import("./About-chunk.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0)
    },
    {
      path: "/project",
      name: "Project",
      component: () => __vitePreload(() => import("./Project-chunk.js"), true ? __vite__mapDeps([6,1,2,3,4]) : void 0)
    },
    {
      path: "/link",
      name: "Related Websites",
      component: () => __vitePreload(() => import("./Website-chunk.js"), true ? __vite__mapDeps([7,1,2,3,4]) : void 0)
    }
  ]
});
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Qr
  }
});
app.mount("body");
export {
  Segment as S,
  _export_sfc as _
};
