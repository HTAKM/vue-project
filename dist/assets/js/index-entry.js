import { f as createElementBlock, j as createBaseVNode, t as toDisplayString, k as createVNode, l as withCtx, m as normalizeClass, q as resolveComponent, v as openBlock, x as createBlock, T as Transition, y as renderSlot, z as createTextVNode, A as withDirectives, B as vShow, F as Fragment, C as renderList, D as createApp } from "./@vue-chunk.js";
import { c as createRouter, a as createWebHashHistory } from "./vue-router-chunk.js";
import { Q as Qr } from "./@primeuix-chunk.js";
import notesData from "https://htakm.github.io/latex-notes/js/notesData.js";
import latexClasses from "https://htakm.github.io/latex-notes/js/latexTemplateClass.js";
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
const _sfc_main$6 = {
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
const _hoisted_1$6 = { class: "logo" };
const _hoisted_2$4 = { href: "#" };
const _hoisted_3$3 = { class: "menu-toggle-wrap" };
const _hoisted_4$2 = { class: "menu" };
const _hoisted_5$2 = { class: "menu" };
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("aside", {
    class: normalizeClass(`${_ctx.expanded ? "expanded" : ""}`)
  }, [
    createBaseVNode("div", _hoisted_1$6, [
      createBaseVNode("a", _hoisted_2$4, toDisplayString(_ctx.head), 1)
    ]),
    createBaseVNode("div", _hoisted_3$3, [
      createBaseVNode("button", {
        class: "menu-toggle",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.toggleExpanded && _ctx.toggleExpanded(...args))
      }, _cache[3] || (_cache[3] = [
        createBaseVNode("span", { class: "material-symbols-outlined" }, "keyboard_double_arrow_right", -1)
      ]))
    ]),
    _cache[10] || (_cache[10] = createBaseVNode("h3", null, "Menu", -1)),
    createBaseVNode("div", _hoisted_4$2, [
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
    createBaseVNode("div", _hoisted_5$2, [
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
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", render$6], ["__scopeId", "data-v-afea40ea"]]);
const _sfc_main$5 = {
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
const _hoisted_1$5 = { id: "app" };
const _hoisted_2$3 = { class: "main" };
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_RouterView = resolveComponent("RouterView");
  return openBlock(), createElementBlock("div", _hoisted_1$5, [
    createVNode(_component_Sidebar, {
      head: "HU",
      class: normalizeClass({ dark: _ctx.isDarkMode }),
      isDark: _ctx.isDarkMode,
      onToggleDark: _ctx.toggleDark
    }, null, 8, ["class", "isDark", "onToggleDark"]),
    createBaseVNode("div", _hoisted_2$3, [
      createVNode(_component_RouterView, { isDark: _ctx.isDarkMode }, null, 8, ["isDark"])
    ])
  ]);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", render$5]]);
const _sfc_main$4 = {
  props: {
    title: String,
    isDark: Boolean
  }
};
const _hoisted_1$4 = { class: "col" };
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { appear: "" }, {
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass(["segment mt-3", { dark: _ctx.isDark }])
      }, [
        createBaseVNode("div", _hoisted_1$4, [
          createBaseVNode("h1", null, toDisplayString(_ctx.title), 1),
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2)
    ]),
    _: 3
  });
}
const Segment = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", render$4]]);
const _sfc_main$3 = {
  name: "Home",
  components: {
    Segment
  },
  props: {
    isDark: Boolean
  }
};
const _hoisted_1$3 = { class: "home-page" };
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_segment = resolveComponent("segment");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("main", _hoisted_1$3, [
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
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", render$3]]);
const gradeFile = [
  {
    Year: "1",
    Term: "Fall",
    Prefix: "COMP",
    Code: "1021",
    Name: "Introduction to Computer Science",
    Credit: "3",
    Grade: "A+"
  },
  {
    Year: "1",
    Term: "Fall",
    Prefix: "CORE",
    Code: "1402",
    Name: "English Language for University Studies",
    Credit: "3",
    Grade: "T"
  },
  {
    Year: "1",
    Term: "Fall",
    Prefix: "LIFS",
    Code: "1901",
    Name: "General Biology I",
    Credit: "3",
    Grade: "B-"
  },
  {
    Year: "1",
    Term: "Fall",
    Prefix: "MATH",
    Code: "1013",
    Name: "Calculus IB",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "1",
    Term: "Fall",
    Prefix: "MECH",
    Code: "1906",
    Name: "Mechanical Engineering for Modern Life",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "1",
    Term: "Fall",
    Prefix: "PHYS",
    Code: "1112",
    Name: "General Physics I with Calculus",
    Credit: "3",
    Grade: "A-"
  },
  {
    Year: "1",
    Term: "Spring",
    Prefix: "CENG",
    Code: "1500",
    Name: "A First Course on Materials Science and Applications",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "1",
    Term: "Spring",
    Prefix: "CORE",
    Code: "1403A",
    Name: "Academc English for University Studies",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "1",
    Term: "Spring",
    Prefix: "CORE",
    Code: "1631",
    Name: "Music of the World",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "1",
    Term: "Spring",
    Prefix: "CORE",
    Code: "1901",
    Name: "Cognitive Foundations of University Education: Critical Thinking and Data Literacy",
    Credit: "3",
    Grade: "B"
  },
  {
    Year: "1",
    Term: "Spring",
    Prefix: "CORE",
    Code: "1905B",
    Name: "Behavioral Foundations of University Education: Habits, Mindsets, and Wellness",
    Credit: "3",
    Grade: "P"
  },
  {
    Year: "1",
    Term: "Spring",
    Prefix: "LEGL",
    Code: "1000",
    Name: "Legal Education (PRC Constitution, Basic Law, National Security Law and Legal System of HKSAR)",
    Credit: "0",
    Grade: "P"
  },
  {
    Year: "1",
    Term: "Spring",
    Prefix: "MATH",
    Code: "1014",
    Name: "Calculus II",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "1",
    Term: "Summer",
    Prefix: "PHYS",
    Code: "1114",
    Name: "General Physics II",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "2",
    Term: "Fall",
    Prefix: "COMP",
    Code: "2011",
    Name: "Programming with C++",
    Credit: "4",
    Grade: "A"
  },
  {
    Year: "2",
    Term: "Fall",
    Prefix: "COMP",
    Code: "2711H",
    Name: "Honors Discrete Mathematical Tools for Computer Science",
    Credit: "4",
    Grade: "A-"
  },
  {
    Year: "2",
    Term: "Fall",
    Prefix: "EMIA",
    Code: "2010A",
    Name: "Cross-disciplinary Seminar: Artificial Intelligence",
    Credit: "0",
    Grade: "P"
  },
  {
    Year: "2",
    Term: "Fall",
    Prefix: "MATH",
    Code: "2131",
    Name: "Honors in Linear and Abstract Algebra",
    Credit: "4",
    Grade: "B+"
  },
  {
    Year: "2",
    Term: "Fall",
    Prefix: "MATH",
    Code: "2411",
    Name: "Applied Statistics",
    Credit: "4",
    Grade: "A+"
  },
  {
    Year: "2",
    Term: "Fall",
    Prefix: "PHYS",
    Code: "1002",
    Name: "Introduction to Astrophysics and Astronomy",
    Credit: "3",
    Grade: "A+"
  },
  {
    Year: "2",
    Term: "Winter",
    Prefix: "COMP",
    Code: "1029V",
    Name: "Excel VBA Programming Bridging Course",
    Credit: "1",
    Grade: "P"
  },
  {
    Year: "2",
    Term: "Winter",
    Prefix: "ISOM",
    Code: "1700",
    Name: "Critical Issues in Business Operations",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "2",
    Term: "Spring",
    Prefix: "COMP",
    Code: "2012",
    Name: "Object-Oriented Programming and Data Structures",
    Credit: "4",
    Grade: "A"
  },
  {
    Year: "2",
    Term: "Spring",
    Prefix: "COMP",
    Code: "2211",
    Name: "Exploring Artificial Intelligence",
    Credit: "3",
    Grade: "A+"
  },
  {
    Year: "2",
    Term: "Spring",
    Prefix: "COMP",
    Code: "2611",
    Name: "Computer Organization",
    Credit: "4",
    Grade: "A"
  },
  {
    Year: "2",
    Term: "Spring",
    Prefix: "COMP",
    Code: "3711H",
    Name: "Honors Design and Analysis of Algorithms",
    Credit: "0",
    Grade: "AU"
  },
  {
    Year: "2",
    Term: "Spring",
    Prefix: "LANG",
    Code: "2030",
    Name: "Technical Communication I",
    Credit: "3",
    Grade: "B"
  },
  {
    Year: "2",
    Term: "Spring",
    Prefix: "MATH",
    Code: "2023",
    Name: "Multivariable Calculus",
    Credit: "4",
    Grade: "B+"
  },
  {
    Year: "2",
    Term: "Spring",
    Prefix: "MATH",
    Code: "2431",
    Name: "Honors Probability",
    Credit: "4",
    Grade: "A"
  },
  {
    Year: "3",
    Term: "Fall",
    Prefix: "COMP",
    Code: "3111H",
    Name: "Honors Software Engineering",
    Credit: "4",
    Grade: "A"
  },
  {
    Year: "3",
    Term: "Fall",
    Prefix: "COMP",
    Code: "3211",
    Name: "Fundamentals of Artificial Intelligence",
    Credit: "3",
    Grade: "A+"
  },
  {
    Year: "3",
    Term: "Fall",
    Prefix: "COMP",
    Code: "3711",
    Name: "Design and Analysis of Algorithms",
    Credit: "3",
    Grade: "A+"
  },
  {
    Year: "3",
    Term: "Fall",
    Prefix: "ENGG",
    Code: "2010",
    Name: "Engineering Seminar Series",
    Credit: "0",
    Grade: "P"
  },
  {
    Year: "3",
    Term: "Fall",
    Prefix: "MATH",
    Code: "2033",
    Name: "Mathematical Analysis",
    Credit: "4",
    Grade: "A"
  },
  {
    Year: "3",
    Term: "Fall",
    Prefix: "MATH",
    Code: "3423",
    Name: "Statistical Inference",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "3",
    Term: "Fall",
    Prefix: "UROP",
    Code: "1100N",
    Name: "Undergraduate Research Opportunities Series 1",
    Credit: "1",
    Grade: "P"
  },
  {
    Year: "3",
    Term: "Winter",
    Prefix: "COMP",
    Code: "1029J",
    Name: "Java Programming Bridging Course",
    Credit: "1",
    Grade: "P"
  },
  {
    Year: "3",
    Term: "Spring",
    Prefix: "COMP",
    Code: "3511",
    Name: "Operating Systems",
    Credit: "3",
    Grade: "A-"
  },
  {
    Year: "3",
    Term: "Spring",
    Prefix: "COMP",
    Code: "4211",
    Name: "Machine Learning",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "3",
    Term: "Spring",
    Prefix: "COMP",
    Code: "4431",
    Name: "Multimedia Computing",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "3",
    Term: "Spring",
    Prefix: "COMP",
    Code: "4901Y",
    Name: "Large-Scale Machine Learning for Foundation Models",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "3",
    Term: "Spring",
    Prefix: "EMIA",
    Code: "2020",
    Name: "Cross-disciplinary Design Thinking",
    Credit: "3",
    Grade: "T"
  },
  {
    Year: "3",
    Term: "Spring",
    Prefix: "HUMA",
    Code: "1622",
    Name: "Science, Technology and Society: Historical and Cultural Approaches",
    Credit: "3",
    Grade: "T"
  },
  {
    Year: "3",
    Term: "Spring",
    Prefix: "LANG",
    Code: "1000BROAD",
    Name: "1000-level Course in Language",
    Credit: "3",
    Grade: "T"
  },
  {
    Year: "3",
    Term: "Spring",
    Prefix: "MATH",
    Code: "3322",
    Name: "Matrix Computation",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "3",
    Term: "Spring",
    Prefix: "MATH",
    Code: "3424",
    Name: "Regression Analysis",
    Credit: "3",
    Grade: "A-"
  },
  {
    Year: "4",
    Term: "Fall",
    Prefix: "COMP",
    Code: "4421",
    Name: "Image Processing",
    Credit: "3",
    Grade: ""
  },
  {
    Year: "4",
    Term: "Fall",
    Prefix: "COMP",
    Code: "4901B",
    Name: "Large Language Models",
    Credit: "3",
    Grade: ""
  },
  {
    Year: "4",
    Term: "Fall",
    Prefix: "LANG",
    Code: "1416C",
    Name: "Effective Chinese Communication",
    Credit: "3",
    Grade: ""
  },
  {
    Year: "4",
    Term: "Fall",
    Prefix: "MATH",
    Code: "3332",
    Name: "Data Analytic Tools",
    Credit: "3",
    Grade: ""
  }
];
const _sfc_main$2 = {
  name: "About",
  components: {
    Segment
  },
  props: {
    isDark: Boolean
  },
  data() {
    return {
      isShowing: "Contact",
      GPAValidGrade: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D", "F"]
    };
  },
  computed: {
    showGrades() {
      return gradeFile.filter((row) => row.Grade && this.GPAValidGrade.includes(row.Grade));
    }
  },
  methods: {
    changeShowing(tab) {
      this.isShowing = tab;
    }
  }
};
const _hoisted_1$2 = { class: "about-page" };
const _hoisted_2$2 = { class: "button-inline" };
const _hoisted_3$2 = { class: "table table-bordered" };
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_segment = resolveComponent("segment");
  return openBlock(), createElementBlock("main", _hoisted_1$2, [
    createVNode(_component_segment, {
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("button", {
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.changeShowing("Contact"))
          }, "Contact"),
          createBaseVNode("button", {
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.changeShowing("Academic"))
          }, "Academic"),
          createBaseVNode("button", {
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.changeShowing("Experience"))
          }, "Experience"),
          createBaseVNode("button", {
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.changeShowing("Games"))
          }, "Games")
        ])
      ]),
      _: 1
    }, 8, ["isDark"]),
    withDirectives(createVNode(_component_segment, {
      title: "Contact",
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => _cache[4] || (_cache[4] = [
        createBaseVNode("p", { class: "mb-0" }, [
          createTextVNode("Email: "),
          createBaseVNode("a", { href: "mailto:yhkwokae@connect.ust.hk" }, "yhkwokae@connect.ust.hk")
        ], -1)
      ])),
      _: 1,
      __: [4]
    }, 8, ["isDark"]), [
      [vShow, _ctx.isShowing === "Contact"]
    ]),
    withDirectives(createVNode(_component_segment, {
      title: "Academic Info",
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => _cache[5] || (_cache[5] = [
        createBaseVNode("p", { class: "mb-0" }, "Current University: The Hong Kong University of Science and Technology", -1),
        createBaseVNode("p", { class: "mb-0" }, "Year of Study: Year 4", -1),
        createBaseVNode("p", { class: "mb-0" }, "Current Major: (COSC + AI) + DSCT", -1),
        createBaseVNode("p", { class: "mb-0" }, "Target: Graduate in First Class Honors", -1)
      ])),
      _: 1,
      __: [5]
    }, 8, ["isDark"]), [
      [vShow, _ctx.isShowing === "Academic"]
    ]),
    withDirectives(createVNode(_component_segment, {
      title: "Grades",
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        _cache[6] || (_cache[6] = createBaseVNode("p", { class: "mb-0" }, "The following is my grade:", -1)),
        createBaseVNode("table", _hoisted_3$2, [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              (openBlock(), createElementBlock(Fragment, null, renderList(["Term", "Course Code", "Course Name", "Credits", "Grade"], (header) => {
                return createBaseVNode("th", { key: header }, toDisplayString(header), 1);
              }), 64))
            ])
          ]),
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.showGrades, (row) => {
              return openBlock(), createElementBlock("tr", {
                key: `${row.Prefix} + ${row.Code}`
              }, [
                createBaseVNode("td", null, "Year " + toDisplayString(row.Year) + " " + toDisplayString(row.Term), 1),
                createBaseVNode("td", null, toDisplayString(row.Prefix) + " " + toDisplayString(row.Code), 1),
                createBaseVNode("td", null, toDisplayString(row.Name), 1),
                createBaseVNode("td", null, toDisplayString(row.Credit), 1),
                createBaseVNode("td", null, toDisplayString(row.Grade), 1)
              ]);
            }), 128))
          ])
        ])
      ]),
      _: 1,
      __: [6]
    }, 8, ["isDark"]), [
      [vShow, _ctx.isShowing === "Academic"]
    ]),
    withDirectives(createVNode(_component_segment, {
      title: "Experience",
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => _cache[7] || (_cache[7] = [
        createBaseVNode("div", { class: "experience-item" }, [
          createBaseVNode("div", { class: "experience-title" }, [
            createBaseVNode("h2", null, "Programmer / Researcher Intern"),
            createBaseVNode("h4", null, "AI Future Education Limited")
          ]),
          createBaseVNode("div", { class: "experience-date text-right" }, [
            createBaseVNode("small", null, "July - August 2025")
          ]),
          createBaseVNode("div", { class: "col-12" }, [
            createBaseVNode("p", null, " This was my first internship, where I worked as a programmer/researcher intern at AI Future Education Limited, a startup focusing on value education. My role was more akin to a full-stack developer, as I contributed to both frontend and backend development, including AI chatbot development. "),
            createBaseVNode("p", null, " I was primarily responsible for backend development, using Flask, while the frontend was built with Vue.js. Additionally, I researched the performance of state-of-the-art small Chinese-language models and used llama-cpp-python for model inference. The AI chatbot was developed sequentially, employing rule-based methods for knowledge-based questions and RAG-based methods for scenario-based questions, with prompt engineering at every step. "),
            createBaseVNode("p", null, " Towards the end of the internship, we explored AWS services, including EC2, Lambda, and SageMaker. This internship provided invaluable experience in AI and web development in a real-world setting. ")
          ])
        ], -1),
        createBaseVNode("div", { class: "experience-item" }, [
          createBaseVNode("div", { class: "experience-title" }, [
            createBaseVNode("h2", null, "Undergraduate Teaching Assistant (COMP 1023)"),
            createBaseVNode("h4", null, "Department of Computer Science and Engineering, HKUST")
          ]),
          createBaseVNode("div", { class: "experience-date text-right" }, [
            createBaseVNode("small", null, "February - June 2025")
          ]),
          createBaseVNode("div", { class: "col-12" }, [
            createBaseVNode("p", null, " I successfully reapplied as a UGTA for COMP 1023 due to my outstanding academic performance. My responsibilities included polishing assignments developed by previous UGTAs, adding necessary testing components, and improving visualizations. ")
          ])
        ], -1),
        createBaseVNode("div", { class: "experience-item" }, [
          createBaseVNode("div", { class: "experience-title" }, [
            createBaseVNode("h2", null, "Undergraduate Teaching Assistant (COMP 1023)"),
            createBaseVNode("h4", null, "Department of Computer Science and Engineering, HKUST")
          ]),
          createBaseVNode("div", { class: "experience-date text-right" }, [
            createBaseVNode("small", null, "July - August 2024")
          ]),
          createBaseVNode("div", { class: "col-12" }, [
            createBaseVNode("p", null, " After failed applications for summer TA positions in other courses, Dr. Desmond Tsoi invited me to assist in the early development of his new course, COMP 1023 (Introduction to Python Programming), due to my excellent results in COMP 2211 (Exploring Artificial Intelligence). I contributed to developing lab assignments from scratch. ")
          ])
        ], -1)
      ])),
      _: 1,
      __: [7]
    }, 8, ["isDark"]), [
      [vShow, _ctx.isShowing === "Experience"]
    ]),
    withDirectives(createVNode(_component_segment, {
      title: "Games Playing",
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => _cache[8] || (_cache[8] = [
        createBaseVNode("p", null, "Below are games I am currently playing (likely paused but will resume):", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, "Infinite Galaxy (DO NOT PLAY! This is a pay-to-win game, and I am a masochist playing as free-to-play.)"),
          createBaseVNode("li", null, [
            createBaseVNode("a", {
              href: "https://store.steampowered.com/app/1399720/Antimatter_Dimensions/",
              target: "_blank"
            }, "Antimatter Dimensions")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", {
              href: "https://keyemilco.wixsite.com/econline",
              target: "_blank"
            }, "EcoKey2")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", {
              href: "https://store.steampowered.com/app/1546320/Your_Chronicle/",
              target: "_blank"
            }, "Your Chronicle")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", {
              href: "https://store.steampowered.com/app/280220/Creeper_World_3_Arc_Eternal/",
              target: "_blank"
            }, "Creeper World 3: Arc Eternal")
          ])
        ], -1)
      ])),
      _: 1,
      __: [8]
    }, 8, ["isDark"]), [
      [vShow, _ctx.isShowing === "Games"]
    ]),
    withDirectives(createVNode(_component_segment, {
      title: "Games Played",
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => _cache[9] || (_cache[9] = [
        createBaseVNode("p", null, "Below are games I have played and enjoyed:", -1),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", {
              href: "https://eco.nekogame.com/",
              target: "_blank"
            }, "Nekogame Emil Chronicle Online")
          ]),
          createBaseVNode("li", null, "ECO-Re (Server closed)"),
          createBaseVNode("li", null, "Lemon Team ECO (Server closed)"),
          createBaseVNode("li", null, [
            createBaseVNode("a", {
              href: "https://synergism.cc/",
              target: "_blank"
            }, "Synergism")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", {
              href: "https://www.talesrunner.com.hk/",
              target: "_blank"
            }, "跑 Online")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", {
              href: "https://pixelplace.io/",
              target: "_blank"
            }, "pixelplace.io")
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", {
              href: "https://www.chiark.greenend.org.uk/~sgtatham/puzzles/",
              target: "_blank"
            }, "Portable Puzzle Collection")
          ]),
          createBaseVNode("li", null, "Geometry Dash")
        ], -1)
      ])),
      _: 1,
      __: [9]
    }, 8, ["isDark"]), [
      [vShow, _ctx.isShowing === "Games"]
    ])
  ]);
}
const About = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", render$2], ["__scopeId", "data-v-d68b0996"]]);
const _sfc_main$1 = {
  name: "Project",
  components: {
    Segment
  },
  props: {
    isDark: Boolean
  },
  data() {
    return {
      notesData,
      latexClasses
    };
  }
};
const _hoisted_1$1 = { class: "project-page" };
const _hoisted_2$1 = { class: "table table-bordered" };
const _hoisted_3$1 = ["href"];
const _hoisted_4$1 = ["href"];
const _hoisted_5$1 = ["href"];
const _hoisted_6 = ["href"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_segment = resolveComponent("segment");
  return openBlock(), createElementBlock("main", _hoisted_1$1, [
    createVNode(_component_segment, {
      title: "Notes",
      id: "notes",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        _cache[0] || (_cache[0] = createBaseVNode("p", null, "Here are some of the notes I have made. (In start date chronological order)", -1)),
        createBaseVNode("table", _hoisted_2$1, [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              (openBlock(), createElementBlock(Fragment, null, renderList(["Title", "LaTeX Class used", "PDF file", "TEX file", "Other files"], (head) => {
                return createBaseVNode("th", null, toDisplayString(head), 1);
              }), 64))
            ])
          ]),
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.notesData, (note) => {
              return openBlock(), createElementBlock("tr", null, [
                createBaseVNode("th", null, toDisplayString(note.title), 1),
                createBaseVNode("td", null, toDisplayString(note.class), 1),
                createBaseVNode("td", null, [
                  createBaseVNode("a", {
                    href: note.pdfLink ? note.pdfLink : "",
                    target: "_blank"
                  }, toDisplayString(note.pdfLink ? "PDF" : ""), 9, _hoisted_3$1)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("a", {
                    href: note.texLink ? note.texLink : "",
                    target: "_blank"
                  }, toDisplayString(note.texLink ? "TEX" : ""), 9, _hoisted_4$1)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("a", {
                    href: note.others ? note.others.link : "",
                    target: "_blank"
                  }, toDisplayString(note.others ? note.others.name : ""), 9, _hoisted_5$1)
                ])
              ]);
            }), 256))
          ])
        ])
      ]),
      _: 1,
      __: [0]
    }, 8, ["isDark"]),
    createVNode(_component_segment, {
      title: "LaTeX Class",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        _cache[1] || (_cache[1] = createBaseVNode("p", null, "I have made some customized LaTeX class to make my notes. You can find them below:", -1)),
        createBaseVNode("ul", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.latexClasses, (latexClass) => {
            return openBlock(), createElementBlock("li", null, [
              createBaseVNode("a", {
                href: latexClass.link
              }, toDisplayString(latexClass.name), 9, _hoisted_6)
            ]);
          }), 256))
        ])
      ]),
      _: 1,
      __: [1]
    }, 8, ["isDark"]),
    createVNode(_component_segment, {
      title: "Report Typos",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => _cache[2] || (_cache[2] = [
        createBaseVNode("p", null, [
          createTextVNode("If there are typos in my notes (excluding cheat sheets), please let me know via "),
          createBaseVNode("a", {
            href: "https://github.com/htakm/latex-notes/issues",
            "aria-label": "Report an issue on GitHub"
          }, "GitHub Issues"),
          createTextVNode(".")
        ], -1)
      ])),
      _: 1,
      __: [2]
    }, 8, ["isDark"])
  ]);
}
const Project = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1]]);
const lectureMaterialLinks = [
  {
    courseCode: "CENG 1500",
    link: "https://drive.google.com/drive/folders/1ijbNmaFzQd3F1pa6TIR8TxmR3tK0ApWn?usp=sharing"
  },
  {
    courseCode: "COMP 1021",
    link: "https://drive.google.com/drive/folders/1z0uWnQaWOvHfZEx9hwvcN4wPj2Ou4Rel?usp=sharing"
  },
  {
    courseCode: "COMP 2711",
    link: "https://drive.google.com/drive/folders/11ldreUrcDlhjKA10MJlp4Pzaxbqr_574?usp=sharing"
  },
  {
    courseCode: "COMP 3211",
    link: "https://drive.google.com/drive/folders/1zmdB_XDE2sb72bA46uR-KBzHCH3DM0kb?usp=sharing"
  },
  {
    courseCode: "COMP 3711H",
    link: "https://drive.google.com/drive/folders/18OwsVPgsgESg8f7ssCtSmMXjrxt3cnkC?usp=sharing"
  },
  {
    courseCode: "LIFS 1901",
    link: "https://drive.google.com/drive/folders/1kY7AjRq_-zpi-CQOd0RMjDlVQBKnG8_l?usp=sharing"
  },
  {
    courseCode: "MATH 1013",
    link: "https://drive.google.com/drive/folders/1xtU-7Vx4OWpKw8-oNtRCsCXmi834Y3gO?usp=sharing"
  },
  {
    courseCode: "MATH 1014",
    link: "https://drive.google.com/drive/folders/1fC63vtpyjbYoMMQdvHWbi6_POOpC7_Dt?usp=sharing"
  },
  {
    courseCode: "MATH 2023",
    pdf: "./notes/MATH 2023 (Simplified).pdf",
    tex: "./notes/MATH 2023 (Simplified).tex"
  },
  {
    courseCode: "MATH 2131",
    link: "https://drive.google.com/drive/folders/1ztVzv3wGW2c0PfqgqA5UnuDQ4qlvneMF?usp=sharing"
  },
  {
    courseCode: "MATH 2411",
    link: "https://drive.google.com/drive/folders/15l0KhoWH0SV4n_hLUSPMnzGmvSlLLA3i?usp=sharing"
  },
  {
    courseCode: "MATH 2431",
    link: "https://drive.google.com/drive/folders/1CfPBLoq3zDYS159xUcdnbljfJb711iEO?usp=sharing",
    pdf: "./notes/MATH 2431.pdf",
    tex: "./notes/MATH 2431.tex"
  },
  {
    courseCode: "MECH 1906",
    link: "https://drive.google.com/drive/folders/1XdUnH9m7P4-7ljGgBbfl5sq02vcNQWKq?usp=sharing"
  },
  {
    courseCode: "HMAW 1905B / CORE 1905B",
    link: "https://drive.google.com/drive/folders/12jsDzgy3qsN1ByzD08pZRwwE8oqUK688?usp=sharing"
  },
  {
    courseCode: "HUMA 1100 / CORE 1631",
    link: "https://drive.google.com/drive/folders/1eZEgZulNemZoG3utcjrS0NfkCdxTNb5M?usp=sharing"
  },
  {
    courseCode: "ISOM 1700",
    link: "https://drive.google.com/drive/folders/1jEhH-stGolnLz5hRMrZsvj-13aMEZby6?usp=sharing"
  },
  {
    courseCode: "PHYS 1112",
    link: "https://drive.google.com/drive/folders/19MsDwEwzGaXgnWNyTSKasCtK9Ye9sKmW?usp=sharing"
  },
  {
    courseCode: "PHYS 1114",
    link: "https://drive.google.com/drive/folders/1Ou4Z5RBhXSB2ezXifbiF7qb6ylbZ-X9T?usp=sharing"
  }
];
const _sfc_main = {
  name: "Website",
  components: {
    Segment
  },
  props: {
    isDark: Boolean
  },
  data() {
    return {
      lectureMaterialLinks
    };
  }
};
const _hoisted_1 = { class: "website-page" };
const _hoisted_2 = { class: "table table-bordered" };
const _hoisted_3 = ["href"];
const _hoisted_4 = ["href"];
const _hoisted_5 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_segment = resolveComponent("segment");
  return openBlock(), createElementBlock("main", _hoisted_1, [
    createVNode(_component_segment, {
      title: "Links to some BGM that I listen to:",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => _cache[0] || (_cache[0] = [
        createBaseVNode("table", { class: "table" }, [
          createBaseVNode("tbody", null, [
            createBaseVNode("tr", null, [
              createBaseVNode("th", null, "Emil Chronicle Online"),
              createBaseVNode("td", null, [
                createBaseVNode("a", { href: "https://www.youtube.com/playlist?list=PLDooSxhH10QvG9iVwQoTt5IiGi1_wpn9p" }, "BGM"),
                createTextVNode(" (Not complete list)")
              ])
            ])
          ])
        ], -1)
      ])),
      _: 1,
      __: [0]
    }, 8, ["isDark"]),
    createVNode(_component_segment, {
      title: "Links of lecture materials",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        createBaseVNode("table", _hoisted_2, [
          createBaseVNode("thead", null, [
            createBaseVNode("tr", null, [
              (openBlock(), createElementBlock(Fragment, null, renderList(["Course Code", "Link", "Notes", "LaTeX"], (head) => {
                return createBaseVNode("th", null, toDisplayString(head), 1);
              }), 64))
            ])
          ]),
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.lectureMaterialLinks, (row) => {
              return openBlock(), createElementBlock("tr", null, [
                createBaseVNode("th", null, toDisplayString(row.courseCode), 1),
                createBaseVNode("td", null, [
                  createBaseVNode("a", {
                    href: row.link ? row.link : ""
                  }, toDisplayString(row.link ? "Google Drive" : ""), 9, _hoisted_3)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("a", {
                    href: row.pdf ? row.pdf : ""
                  }, toDisplayString(row.pdf ? "pdf" : ""), 9, _hoisted_4)
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("a", {
                    href: row.tex ? row.tex : ""
                  }, toDisplayString(row.tex ? "LaTeX" : ""), 9, _hoisted_5)
                ])
              ]);
            }), 256))
          ])
        ])
      ]),
      _: 1
    }, 8, ["isDark"])
  ]);
}
const Website = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render]]);
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
      component: About
    },
    {
      path: "/project",
      name: "Project",
      component: Project
    },
    {
      path: "/link",
      name: "Related Websites",
      component: Website
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
