import { e as createElementBlock, f as createBaseVNode, t as toDisplayString, g as createVNode, j as withCtx, k as normalizeClass, l as resolveComponent, o as openBlock, m as createBlock, T as Transition, q as renderSlot, v as createTextVNode, x as withDirectives, y as vShow, F as Fragment, z as renderList, A as vModelText, B as normalizeStyle, C as createApp } from "./@vue-chunk.js";
import { c as createRouter, a as createWebHashHistory } from "./vue-router-chunk.js";
import notesData from "https://htakm.github.io/latex-notes/js/notesData.js";
import latexClasses from "https://htakm.github.io/latex-notes/js/latexTemplateClass.js";
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
const _sfc_main$7 = {
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
const _hoisted_1$7 = { class: "logo" };
const _hoisted_2$6 = { href: "#" };
const _hoisted_3$4 = { class: "menu-toggle-wrap" };
const _hoisted_4$3 = { class: "menu" };
const _hoisted_5$2 = { class: "menu" };
function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("aside", {
    class: normalizeClass(`${_ctx.expanded ? "expanded" : ""}`)
  }, [
    createBaseVNode("div", _hoisted_1$7, [
      createBaseVNode("a", _hoisted_2$6, toDisplayString(_ctx.head), 1)
    ]),
    createBaseVNode("div", _hoisted_3$4, [
      createBaseVNode("button", {
        class: "menu-toggle",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.toggleExpanded && _ctx.toggleExpanded(...args))
      }, [..._cache[3] || (_cache[3] = [
        createBaseVNode("span", { class: "material-symbols-outlined" }, "keyboard_double_arrow_right", -1)
      ])])
    ]),
    _cache[10] || (_cache[10] = createBaseVNode("h3", null, "Menu", -1)),
    createBaseVNode("div", _hoisted_4$3, [
      createVNode(_component_router_link, {
        class: "button",
        to: "/"
      }, {
        default: withCtx(() => [..._cache[4] || (_cache[4] = [
          createBaseVNode("span", { class: "material-symbols-outlined" }, "home", -1),
          createBaseVNode("span", { class: "text" }, "Home", -1)
        ])]),
        _: 1
      }),
      createVNode(_component_router_link, {
        class: "button",
        to: "/about"
      }, {
        default: withCtx(() => [..._cache[5] || (_cache[5] = [
          createBaseVNode("span", { class: "material-symbols-outlined" }, "info", -1),
          createBaseVNode("span", { class: "text" }, "About me", -1)
        ])]),
        _: 1
      }),
      createVNode(_component_router_link, {
        class: "button",
        to: "/experience"
      }, {
        default: withCtx(() => [..._cache[6] || (_cache[6] = [
          createBaseVNode("span", { class: "material-symbols-outlined" }, "work_history", -1),
          createBaseVNode("span", { class: "text" }, "Experience", -1)
        ])]),
        _: 1
      }),
      createVNode(_component_router_link, {
        class: "button",
        to: "/project"
      }, {
        default: withCtx(() => [..._cache[7] || (_cache[7] = [
          createBaseVNode("span", { class: "material-symbols-outlined" }, "assignment", -1),
          createBaseVNode("span", { class: "text" }, "Projects", -1)
        ])]),
        _: 1
      })
    ]),
    _cache[11] || (_cache[11] = createBaseVNode("div", { class: "flex" }, null, -1)),
    createBaseVNode("div", _hoisted_5$2, [
      _ctx.isDark ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: "button",
        onClick: _cache[1] || (_cache[1] = ($event) => this.$emit("toggleDark", false))
      }, [..._cache[8] || (_cache[8] = [
        createBaseVNode("span", { class: "material-symbols-outlined" }, "brightness_3", -1),
        createBaseVNode("span", { class: "text" }, "Dark mode", -1)
      ])])) : (openBlock(), createElementBlock("button", {
        key: 1,
        class: "button",
        onClick: _cache[2] || (_cache[2] = ($event) => this.$emit("toggleDark", true))
      }, [..._cache[9] || (_cache[9] = [
        createBaseVNode("span", { class: "material-symbols-outlined" }, "brightness_5", -1),
        createBaseVNode("span", { class: "text" }, "Light mode", -1)
      ])]))
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
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", render$7], ["__scopeId", "data-v-afea40ea"]]);
const _sfc_main$6 = {
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
const _hoisted_1$6 = { id: "app" };
const _hoisted_2$5 = { class: "main" };
function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_RouterView = resolveComponent("RouterView");
  return openBlock(), createElementBlock("div", _hoisted_1$6, [
    createVNode(_component_Sidebar, {
      head: "HU",
      class: normalizeClass({ dark: _ctx.isDarkMode }),
      isDark: _ctx.isDarkMode,
      onToggleDark: _ctx.toggleDark
    }, null, 8, ["class", "isDark", "onToggleDark"]),
    createBaseVNode("div", _hoisted_2$5, [
      createVNode(_component_RouterView, { isDark: _ctx.isDarkMode }, null, 8, ["isDark"])
    ])
  ]);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", render$6]]);
const _sfc_main$5 = {
  props: {
    title: String,
    isDark: Boolean
  }
};
const _hoisted_1$5 = { class: "main-body" };
const _hoisted_2$4 = { class: "heading" };
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { appear: "" }, {
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass(["segment", { dark: _ctx.isDark }])
      }, [
        createBaseVNode("div", _hoisted_1$5, [
          createBaseVNode("div", _hoisted_2$4, [
            createBaseVNode("h1", null, toDisplayString(_ctx.title), 1)
          ]),
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2)
    ]),
    _: 3
  });
}
const Segment = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", render$5]]);
const _sfc_main$4 = {
  name: "Home",
  components: {
    Segment
  },
  props: {
    isDark: Boolean
  }
};
const _hoisted_1$4 = { class: "home-page" };
const _hoisted_2$3 = { class: "row-item" };
const _hoisted_3$3 = { class: "description" };
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_segment = resolveComponent("segment");
  return openBlock(), createElementBlock("main", _hoisted_1$4, [
    createVNode(_component_segment, {
      title: "Welcome!",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("div", _hoisted_3$3, [
            _cache[2] || (_cache[2] = createBaseVNode("p", null, " I am HU. You can also call me Henry or HTAKM. I an currently working as a software engineer in Winley. I was a former undergraduate student at the Hong Kong University of Science and Technology, majoring in Computer Science (with Extended Major in Artificial Intelligence) and minoring in Data Science and Technology. ", -1)),
            _cache[3] || (_cache[3] = createBaseVNode("p", null, " In this website, you can find some information about me, as well as the notes I made throughout my academic journey and some related links. You can click on the following links to find what you want. ", -1)),
            createBaseVNode("ul", null, [
              createBaseVNode("li", null, [
                createVNode(_component_router_link, { to: "/project#notes" }, {
                  default: withCtx(() => [..._cache[0] || (_cache[0] = [
                    createTextVNode("My Notes", -1)
                  ])]),
                  _: 1
                })
              ]),
              _cache[1] || (_cache[1] = createBaseVNode("li", null, [
                createBaseVNode("a", {
                  href: "https://htakm.github.io/htakm_test/",
                  target: "_blank",
                  rel: "noopener"
                }, "My Old Website")
              ], -1))
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["isDark"])
  ]);
}
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", render$4]]);
const gradeFile = [
  {
    Year: "2022/23",
    Term: "Fall",
    Prefix: "COMP",
    Code: "1021",
    Name: "Introduction to Computer Science",
    Credit: "3",
    Grade: "A+"
  },
  {
    Year: "2022/23",
    Term: "Fall",
    Prefix: "CORE",
    Code: "1402",
    Name: "English Language for University Studies",
    Credit: "3",
    Grade: "T"
  },
  {
    Year: "2022/23",
    Term: "Fall",
    Prefix: "LIFS",
    Code: "1901",
    Name: "General Biology I",
    Credit: "3",
    Grade: "B-"
  },
  {
    Year: "2022/23",
    Term: "Fall",
    Prefix: "MATH",
    Code: "1013",
    Name: "Calculus IB",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "2022/23",
    Term: "Fall",
    Prefix: "MECH",
    Code: "1906",
    Name: "Mechanical Engineering for Modern Life",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "2022/23",
    Term: "Fall",
    Prefix: "PHYS",
    Code: "1112",
    Name: "General Physics I with Calculus",
    Credit: "3",
    Grade: "A-"
  },
  {
    Year: "2022/23",
    Term: "Spring",
    Prefix: "CENG",
    Code: "1500",
    Name: "A First Course on Materials Science and Applications",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "2022/23",
    Term: "Spring",
    Prefix: "CORE",
    Code: "1403A",
    Name: "Academc English for University Studies",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "2022/23",
    Term: "Spring",
    Prefix: "CORE",
    Code: "1631",
    Name: "Music of the World",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "2022/23",
    Term: "Spring",
    Prefix: "CORE",
    Code: "1901",
    Name: "Cognitive Foundations of University Education: Critical Thinking and Data Literacy",
    Credit: "3",
    Grade: "B"
  },
  {
    Year: "2022/23",
    Term: "Spring",
    Prefix: "MATH",
    Code: "1014",
    Name: "Calculus II",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "2022/23",
    Term: "Summer",
    Prefix: "PHYS",
    Code: "1114",
    Name: "General Physics II",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "2023/24",
    Term: "Fall",
    Prefix: "COMP",
    Code: "2011",
    Name: "Programming with C++",
    Credit: "4",
    Grade: "A"
  },
  {
    Year: "2023/24",
    Term: "Fall",
    Prefix: "COMP",
    Code: "2711H",
    Name: "Honors Discrete Mathematical Tools for Computer Science",
    Credit: "4",
    Grade: "A-"
  },
  {
    Year: "2023/24",
    Term: "Fall",
    Prefix: "MATH",
    Code: "2131",
    Name: "Honors in Linear and Abstract Algebra",
    Credit: "4",
    Grade: "B+"
  },
  {
    Year: "2023/24",
    Term: "Fall",
    Prefix: "MATH",
    Code: "2411",
    Name: "Applied Statistics",
    Credit: "4",
    Grade: "A+"
  },
  {
    Year: "2023/24",
    Term: "Fall",
    Prefix: "PHYS",
    Code: "1002",
    Name: "Introduction to Astrophysics and Astronomy",
    Credit: "3",
    Grade: "A+"
  },
  {
    Year: "2023/24",
    Term: "Winter",
    Prefix: "ISOM",
    Code: "1700",
    Name: "Critical Issues in Business Operations",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "2023/24",
    Term: "Spring",
    Prefix: "COMP",
    Code: "2012",
    Name: "Object-Oriented Programming and Data Structures",
    Credit: "4",
    Grade: "A"
  },
  {
    Year: "2023/24",
    Term: "Spring",
    Prefix: "COMP",
    Code: "2211",
    Name: "Exploring Artificial Intelligence",
    Credit: "3",
    Grade: "A+"
  },
  {
    Year: "2023/24",
    Term: "Spring",
    Prefix: "COMP",
    Code: "2611",
    Name: "Computer Organization",
    Credit: "4",
    Grade: "A"
  },
  {
    Year: "2023/24",
    Term: "Spring",
    Prefix: "COMP",
    Code: "3711H",
    Name: "Honors Design and Analysis of Algorithms",
    Credit: "0",
    Grade: "AU"
  },
  {
    Year: "2023/24",
    Term: "Spring",
    Prefix: "LANG",
    Code: "2030",
    Name: "Technical Communication I",
    Credit: "3",
    Grade: "B"
  },
  {
    Year: "2023/24",
    Term: "Spring",
    Prefix: "MATH",
    Code: "2023",
    Name: "Multivariable Calculus",
    Credit: "4",
    Grade: "B+"
  },
  {
    Year: "2023/24",
    Term: "Spring",
    Prefix: "MATH",
    Code: "2431",
    Name: "Honors Probability",
    Credit: "4",
    Grade: "A"
  },
  {
    Year: "2024/25",
    Term: "Fall",
    Prefix: "COMP",
    Code: "3111H",
    Name: "Honors Software Engineering",
    Credit: "4",
    Grade: "A"
  },
  {
    Year: "2024/25",
    Term: "Fall",
    Prefix: "COMP",
    Code: "3211",
    Name: "Fundamentals of Artificial Intelligence",
    Credit: "3",
    Grade: "A+"
  },
  {
    Year: "2024/25",
    Term: "Fall",
    Prefix: "COMP",
    Code: "3711",
    Name: "Design and Analysis of Algorithms",
    Credit: "3",
    Grade: "A+"
  },
  {
    Year: "2024/25",
    Term: "Fall",
    Prefix: "MATH",
    Code: "2033",
    Name: "Mathematical Analysis",
    Credit: "4",
    Grade: "A"
  },
  {
    Year: "2024/25",
    Term: "Fall",
    Prefix: "MATH",
    Code: "3423",
    Name: "Statistical Inference",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "2024/25",
    Term: "Spring",
    Prefix: "COMP",
    Code: "3511",
    Name: "Operating Systems",
    Credit: "3",
    Grade: "A-"
  },
  {
    Year: "2024/25",
    Term: "Spring",
    Prefix: "COMP",
    Code: "4211",
    Name: "Machine Learning",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "2024/25",
    Term: "Spring",
    Prefix: "COMP",
    Code: "4431",
    Name: "Multimedia Computing",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "2024/25",
    Term: "Spring",
    Prefix: "COMP",
    Code: "4901Y",
    Name: "Large-Scale Machine Learning for Foundation Models",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "2024/25",
    Term: "Spring",
    Prefix: "EMIA",
    Code: "2020",
    Name: "Cross-disciplinary Design Thinking",
    Credit: "3",
    Grade: "T"
  },
  {
    Year: "2024/25",
    Term: "Spring",
    Prefix: "HUMA",
    Code: "1622",
    Name: "Science, Technology and Society: Historical and Cultural Approaches",
    Credit: "3",
    Grade: "T"
  },
  {
    Year: "2024/25",
    Term: "Spring",
    Prefix: "LANG",
    Code: "1000BROAD",
    Name: "1000-level Course in Language",
    Credit: "3",
    Grade: "T"
  },
  {
    Year: "2024/25",
    Term: "Spring",
    Prefix: "MATH",
    Code: "3322",
    Name: "Matrix Computation",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "2024/25",
    Term: "Spring",
    Prefix: "MATH",
    Code: "3424",
    Name: "Regression Analysis",
    Credit: "3",
    Grade: "A-"
  },
  {
    Year: "2025/26",
    Term: "Fall",
    Prefix: "COMP",
    Code: "4421",
    Name: "Image Processing",
    Credit: "3",
    Grade: "A+"
  },
  {
    Year: "2025/26",
    Term: "Fall",
    Prefix: "COMP",
    Code: "4901B",
    Name: "Large Language Models",
    Credit: "3",
    Grade: "B"
  },
  {
    Year: "2025/26",
    Term: "Fall",
    Prefix: "LANG",
    Code: "1416C",
    Name: "Effective Chinese Communication",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "2025/26",
    Term: "Fall",
    Prefix: "MATH",
    Code: "3332",
    Name: "Data Analytic Tools",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "2025/26",
    Term: "Spring",
    Prefix: "COMP",
    Code: "1942",
    Name: "Exploring and Visualizing Data",
    Credit: "3",
    Grade: "A"
  },
  {
    Year: "2025/26",
    Term: "Spring",
    Prefix: "COMP",
    Code: "4321",
    Name: "Search Engines for Web and Enterprise Data",
    Credit: "3",
    Grade: "B+"
  },
  {
    Year: "2025/26",
    Term: "Spring",
    Prefix: "COMP",
    Code: "4981",
    Name: "Final Year Project",
    Credit: "6",
    Grade: "A"
  },
  {
    Year: "2025/26",
    Term: "Spring",
    Prefix: "ISOM",
    Code: "3320",
    Name: "Business Applications Development in Java",
    Credit: "3",
    Grade: "A+"
  }
];
const _sfc_main$3 = {
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
const _hoisted_1$3 = { class: "about-page" };
const _hoisted_2$2 = { class: "button-inline" };
const _hoisted_3$2 = { class: "row-item" };
const _hoisted_4$2 = { class: "table table-bordered" };
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_segment = resolveComponent("segment");
  return openBlock(), createElementBlock("main", _hoisted_1$3, [
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
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.changeShowing("Games"))
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
      default: withCtx(() => [..._cache[3] || (_cache[3] = [
        createBaseVNode("div", { class: "row-item" }, [
          createBaseVNode("div", { class: "description" }, [
            createBaseVNode("p", null, [
              createTextVNode("Email: "),
              createBaseVNode("a", { href: "mailto:yhkwokae@connect.ust.hk" }, "yhkwokae@connect.ust.hk")
            ])
          ])
        ], -1)
      ])]),
      _: 1
    }, 8, ["isDark"]), [
      [vShow, _ctx.isShowing === "Contact"]
    ]),
    withDirectives(createVNode(_component_segment, {
      title: "Academic Info",
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [..._cache[4] || (_cache[4] = [
        createBaseVNode("div", { class: "row-item" }, [
          createBaseVNode("div", { class: "title" }, [
            createBaseVNode("h3", null, "The Hong Kong University of Science and Technology")
          ]),
          createBaseVNode("div", { class: "date text-right" }, [
            createBaseVNode("small", null, "SEP 2022 - JUL 2026")
          ]),
          createBaseVNode("div", { class: "subtitle" }, [
            createBaseVNode("h4", null, "Bachelor of Science")
          ]),
          createBaseVNode("div", { class: "description" }, [
            createBaseVNode("p", null, "Main major: Computer Science (with Extended Major in Artificial Intelligence)"),
            createBaseVNode("p", null, "Additional major: Data Science and Technology"),
            createBaseVNode("p", null, "Classification: First Class Honors")
          ])
        ], -1)
      ])]),
      _: 1
    }, 8, ["isDark"]), [
      [vShow, _ctx.isShowing === "Academic"]
    ]),
    withDirectives(createVNode(_component_segment, {
      title: "Grades",
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_3$2, [
          _cache[5] || (_cache[5] = createBaseVNode("div", { class: "description" }, [
            createBaseVNode("p", null, "GPA: 3.772 / 4.300"),
            createBaseVNode("p", null, "Major CGA: 3.874 / 4.300"),
            createBaseVNode("p", null, "The following is my grade:")
          ], -1)),
          createBaseVNode("table", _hoisted_4$2, [
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
                  createBaseVNode("td", null, toDisplayString(row.Year) + " " + toDisplayString(row.Term), 1),
                  createBaseVNode("td", null, toDisplayString(row.Prefix) + " " + toDisplayString(row.Code), 1),
                  createBaseVNode("td", null, toDisplayString(row.Name), 1),
                  createBaseVNode("td", null, toDisplayString(row.Credit), 1),
                  createBaseVNode("td", null, toDisplayString(row.Grade), 1)
                ]);
              }), 128))
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["isDark"]), [
      [vShow, _ctx.isShowing === "Academic"]
    ]),
    withDirectives(createVNode(_component_segment, {
      title: "Games Playing",
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [..._cache[6] || (_cache[6] = [
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
      ])]),
      _: 1
    }, 8, ["isDark"]), [
      [vShow, _ctx.isShowing === "Games"]
    ]),
    withDirectives(createVNode(_component_segment, {
      title: "Games Played",
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [..._cache[7] || (_cache[7] = [
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
      ])]),
      _: 1
    }, 8, ["isDark"]), [
      [vShow, _ctx.isShowing === "Games"]
    ])
  ]);
}
const About = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", render$3]]);
const _sfc_main$2 = {
  name: "Experience",
  components: {
    Segment
  },
  props: {
    isDark: Boolean
  }
};
const _hoisted_1$2 = { class: "experience-page" };
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_segment = resolveComponent("segment");
  return openBlock(), createElementBlock("main", _hoisted_1$2, [
    createVNode(_component_segment, {
      title: "Experience",
      id: "experience",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("div", { class: "row-item" }, [
          createBaseVNode("div", { class: "title" }, [
            createBaseVNode("h2", null, "Software Engineer")
          ]),
          createBaseVNode("div", { class: "date text-right" }, [
            createBaseVNode("small", null, "JUL 2026 - PRESENT")
          ]),
          createBaseVNode("div", { class: "subtitle" }, [
            createBaseVNode("h4", null, "Winley Technology Limited")
          ])
        ], -1),
        createBaseVNode("div", { class: "row-item" }, [
          createBaseVNode("div", { class: "title" }, [
            createBaseVNode("h2", null, "Undergraduate Teaching Assistant (COMP 1021)")
          ]),
          createBaseVNode("div", { class: "date text-right" }, [
            createBaseVNode("small", null, "FEB 2026 - MAY 2026")
          ]),
          createBaseVNode("div", { class: "subtitle" }, [
            createBaseVNode("h4", null, "Department of Computer Science and Engineering, HKUST")
          ]),
          createBaseVNode("div", { class: "description" }, [
            createBaseVNode("p", null, " This time, I chose to be a UGTA in an already well-established course, COMP 1021 (Introduction to Computer Science), which is a course for non-engineering students even since COMP 1023 is offered. "),
            createBaseVNode("p", null, " I was responsible for hosting some of the weekly lab sessions, where I answered students' questions regarding the course content and assignments. ")
          ])
        ], -1),
        createBaseVNode("div", { class: "row-item" }, [
          createBaseVNode("div", { class: "title" }, [
            createBaseVNode("h2", null, "Programmer / Researcher Intern")
          ]),
          createBaseVNode("div", { class: "date text-right" }, [
            createBaseVNode("small", null, "JUL 2025 - AUG 2025")
          ]),
          createBaseVNode("div", { class: "subtitle" }, [
            createBaseVNode("h4", null, "AI Future Education Limited")
          ]),
          createBaseVNode("div", { class: "description" }, [
            createBaseVNode("p", null, " This was my first internship, where I worked as a programmer intern at AI Future Education Limited, a startup focusing on AI education. My role was more akin to a full-stack developer, as I contributed to both frontend and backend development, including AI chatbot development. "),
            createBaseVNode("p", null, " I was primarily responsible for backend development using Flask as the web application framework, while the frontend UI was built with Vue.js. In addition, I researched the performance of state-of-the-art small Chinese-language models and used llama-cpp-python for model inference. The AI chatbot was developed sequentially, employing rule-based methods for knowledge-based questions and RAG-based methods for scenario-based questions, with prompt engineering at every step. "),
            createBaseVNode("p", null, " Towards the end of the internship, we explored AWS services, including EC2, Lambda, and SageMaker. This internship provided invaluable experience in AI and web development in a real-world setting. ")
          ])
        ], -1),
        createBaseVNode("div", { class: "row-item" }, [
          createBaseVNode("div", { class: "title" }, [
            createBaseVNode("h2", null, "Undergraduate Teaching Assistant (COMP 1023)")
          ]),
          createBaseVNode("div", { class: "date text-right" }, [
            createBaseVNode("small", null, "FEB 2025 - JUN 2025")
          ]),
          createBaseVNode("div", { class: "subtitle" }, [
            createBaseVNode("h4", null, "Department of Computer Science and Engineering, HKUST")
          ]),
          createBaseVNode("div", { class: "description" }, [
            createBaseVNode("p", null, " I successfully reapplied as a UGTA for COMP 1023 due to outstanding academic performance. My responsibilities included polishing assignments developed by previous UGTAs, adding necessary testing components, and improving visualizations. "),
            createBaseVNode("p", null, " I am happy to have been given the opportunity to witness the development of a new course, both at the very start and the intermediate stages. This experience has been invaluable in understanding the intricacies of course design and development. ")
          ])
        ], -1),
        createBaseVNode("div", { class: "row-item" }, [
          createBaseVNode("div", { class: "title" }, [
            createBaseVNode("h2", null, "Undergraduate Teaching Assistant (COMP 1023)")
          ]),
          createBaseVNode("div", { class: "date text-right" }, [
            createBaseVNode("small", null, "JUL 2024 - AUG 2024")
          ]),
          createBaseVNode("div", { class: "subtitle" }, [
            createBaseVNode("h4", null, "Department of Computer Science and Engineering, HKUST")
          ]),
          createBaseVNode("div", { class: "description" }, [
            createBaseVNode("p", null, " After failed applications for summer TA positions in other courses, Dr. Desmond Tsoi invited me to assist in the early development of his new course, COMP 1023 (Introduction to Python Programming), due to my excellent results in COMP 2211 (Exploring Artificial Intelligence). I contributed to developing lab assignments from scratch, which serves as a valuable experience in curriculum design and teaching assistance. ")
          ])
        ], -1)
      ])]),
      _: 1
    }, 8, ["isDark"])
  ]);
}
const Experience = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", render$2]]);
const otherProjects = [
  {
    name: "VLLM KV Cache Visualization Tool",
    link: "https://github.com/Jack-1-1-1-1-0/KAI-2_KV_Cache"
  },
  {
    name: "Simple LLM agent",
    link: "https://github.com/HTAKM/COMP4901B_agent"
  }
];
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
      latexClasses,
      otherProjects
    };
  }
};
const _hoisted_1$1 = { class: "project-page" };
const _hoisted_2$1 = { class: "row-item" };
const _hoisted_3$1 = { class: "description" };
const _hoisted_4$1 = { class: "table table-bordered" };
const _hoisted_5$1 = ["href"];
const _hoisted_6$1 = ["href"];
const _hoisted_7$1 = ["href"];
const _hoisted_8$1 = { class: "row-item" };
const _hoisted_9$1 = { class: "description" };
const _hoisted_10$1 = ["href"];
const _hoisted_11$1 = { class: "row-item" };
const _hoisted_12$1 = { class: "description" };
const _hoisted_13$1 = ["href"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_segment = resolveComponent("segment");
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("main", _hoisted_1$1, [
    createVNode(_component_segment, {
      title: "Notes",
      id: "notes",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            _cache[0] || (_cache[0] = createBaseVNode("p", null, "Here are some of the notes I have made (ordered by start date).", -1)),
            createBaseVNode("table", _hoisted_4$1, [
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
                      }, toDisplayString(note.pdfLink ? "PDF" : ""), 9, _hoisted_5$1)
                    ]),
                    createBaseVNode("td", null, [
                      createBaseVNode("a", {
                        href: note.texLink ? note.texLink : "",
                        target: "_blank"
                      }, toDisplayString(note.texLink ? "TEX" : ""), 9, _hoisted_6$1)
                    ]),
                    createBaseVNode("td", null, [
                      createBaseVNode("a", {
                        href: note.others ? note.others.link : "",
                        target: "_blank"
                      }, toDisplayString(note.others ? note.others.name : ""), 9, _hoisted_7$1)
                    ])
                  ]);
                }), 256))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_8$1, [
          createBaseVNode("div", _hoisted_9$1, [
            _cache[1] || (_cache[1] = createBaseVNode("p", null, "I have made some customized LaTeX class to make my notes. You can find them below:", -1)),
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.latexClasses, (latexClass) => {
                return openBlock(), createElementBlock("li", null, [
                  createBaseVNode("a", {
                    href: latexClass.link
                  }, toDisplayString(latexClass.name), 9, _hoisted_10$1)
                ]);
              }), 256))
            ])
          ])
        ]),
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "row-item" }, [
          createBaseVNode("div", { class: "description" }, [
            createBaseVNode("p", null, [
              createTextVNode("If there are typos in my notes (excluding cheat sheets), please let me know via "),
              createBaseVNode("a", {
                href: "https://github.com/htakm/latex-notes/issues",
                "aria-label": "Report an issue on GitHub"
              }, "GitHub Issues"),
              createTextVNode(".")
            ])
          ])
        ], -1))
      ]),
      _: 1
    }, 8, ["isDark"]),
    createVNode(_component_segment, {
      title: "Other projects",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_11$1, [
          createBaseVNode("div", _hoisted_12$1, [
            _cache[4] || (_cache[4] = createBaseVNode("p", null, "Here are some of the other projects I have participated in:", -1)),
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.otherProjects, (project) => {
                return openBlock(), createElementBlock("li", null, [
                  createBaseVNode("a", {
                    href: project.link,
                    target: "_blank"
                  }, toDisplayString(project.name), 9, _hoisted_13$1)
                ]);
              }), 256)),
              createBaseVNode("li", null, [
                createVNode(_component_router_link, {
                  class: "button",
                  to: "/project/color",
                  "aria-label": "Color Conversion Tool"
                }, {
                  default: withCtx(() => [..._cache[3] || (_cache[3] = [
                    createTextVNode(" Color Conversion Tool ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["isDark"])
  ]);
}
const Project = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1]]);
const _sfc_main = {
  name: "Color",
  components: {
    Segment
  },
  props: {
    isDark: Boolean
  },
  data() {
    return {
      rgb: {
        r: "0",
        g: "0",
        b: "0"
      },
      hex: "#000000",
      hexFull: "#000000",
      hsv: {
        h: "0",
        s: "0",
        v: "0"
      },
      hsl: {
        // h is same as hsv.h
        s: "0",
        l: "0"
      }
    };
  },
  computed: {
    onUpdateRgb() {
      this.rgb.r = this.filterInvalidChars(this.rgb.r, "int");
      this.rgb.g = this.filterInvalidChars(this.rgb.g, "int");
      this.rgb.b = this.filterInvalidChars(this.rgb.b, "int");
      if (this.rgb.r == "") this.rgb.r = "0";
      if (this.rgb.g == "") this.rgb.g = "0";
      if (this.rgb.b == "") this.rgb.b = "0";
      const r = Math.max(0, Math.min(255, parseInt(this.rgb.r)));
      const g = Math.max(0, Math.min(255, parseInt(this.rgb.g)));
      const b = Math.max(0, Math.min(255, parseInt(this.rgb.b)));
      this.rgb.r = r.toString();
      this.rgb.g = g.toString();
      this.rgb.b = b.toString();
      this.hex = this.rgbToHex(r, g, b);
      this.hexFull = this.hex + "0".repeat(7 - this.hex.length);
      const hsv = this.rgbToHsv(r, g, b);
      this.hsv.h = (hsv.h * 360).toFixed(0);
      this.hsv.s = (hsv.s * 100).toFixed(0);
      this.hsv.v = (hsv.v * 100).toFixed(0);
      const hsl = this.hsvToHsl(hsv.h, hsv.s, hsv.v);
      this.hsl.s = (hsl.s * 100).toFixed(0);
      this.hsl.l = (hsl.l * 100).toFixed(0);
    },
    onUpdateHex() {
      this.hex = this.filterInvalidChars(this.hex, "hex");
      if (this.hex.length > 6) {
        this.hex = this.hex.substring(0, 6);
        this.hex = "#" + this.hex;
        return;
      }
      this.hex = "#" + this.hex;
      this.hexFull = this.hex + "0".repeat(7 - this.hex.length);
      const rgb = this.hexToRgb(this.hexFull);
      this.rgb.r = rgb.r.toString();
      this.rgb.g = rgb.g.toString();
      this.rgb.b = rgb.b.toString();
      this.hex = "#" + this.hex.substring(1);
      const hsv = this.rgbToHsv(rgb.r, rgb.g, rgb.b);
      this.hsv.h = (hsv.h * 360).toFixed(0);
      this.hsv.s = (hsv.s * 100).toFixed(0);
      this.hsv.v = (hsv.v * 100).toFixed(0);
    },
    onUpdateHsv() {
      if (this.hsv.h == "") this.hsv.h = "0";
      if (this.hsv.s == "") this.hsv.s = "0";
      if (this.hsv.v == "") this.hsv.v = "0";
      this.hsv.h = this.filterInvalidChars(this.hsv.h, "int");
      this.hsv.s = this.filterInvalidChars(this.hsv.s, "int");
      this.hsv.v = this.filterInvalidChars(this.hsv.v, "int");
      const h = Math.max(0, Math.min(360, parseInt(this.hsv.h)));
      const s = Math.max(0, Math.min(100, parseInt(this.hsv.s))) / 100;
      const v = Math.max(0, Math.min(100, parseInt(this.hsv.v))) / 100;
      this.hsv.h = h.toString();
      this.hsv.s = (s * 100).toFixed(0).toString();
      this.hsv.v = (v * 100).toFixed(0).toString();
      const hsl = this.hsvToHsl(h, s, v);
      this.hsl.s = (hsl.s * 100).toFixed(0).toString();
      this.hsl.l = (hsl.l * 100).toFixed(0).toString();
      const rgb = this.hsvToRgb(h, s, v);
      this.rgb.r = rgb.r.toString();
      this.rgb.g = rgb.g.toString();
      this.rgb.b = rgb.b.toString();
      this.hex = this.rgbToHex(rgb.r, rgb.g, rgb.b);
      this.hexFull = this.hex + "0".repeat(7 - this.hex.length);
    },
    onUpdateHsl() {
      if (this.hsv.h == "") this.hsv.h = "0";
      if (this.hsl.s == "") this.hsl.s = "0";
      if (this.hsl.l == "") this.hsl.l = "0";
      this.hsv.h = this.filterInvalidChars(this.hsv.h, "int");
      this.hsl.s = this.filterInvalidChars(this.hsl.s, "int");
      this.hsl.l = this.filterInvalidChars(this.hsl.l, "int");
      const h = Math.max(0, Math.min(360, parseInt(this.hsv.h)));
      const s = Math.max(0, Math.min(100, parseInt(this.hsl.s))) / 100;
      const l = Math.max(0, Math.min(100, parseInt(this.hsl.l))) / 100;
      this.hsv.h = h.toString();
      this.hsl.s = (s * 100).toFixed(0).toString();
      this.hsl.l = (l * 100).toFixed(0).toString();
      const hsv = this.hslToHsv(h, s, l);
      this.hsv.s = (hsv.s * 100).toFixed(0).toString();
      this.hsv.v = (hsv.v * 100).toFixed(0).toString();
      const rgb = this.hsvToRgb(h, hsv.s, hsv.v);
      this.rgb.r = rgb.r.toString();
      this.rgb.g = rgb.g.toString();
      this.rgb.b = rgb.b.toString();
      this.hex = this.rgbToHex(rgb.r, rgb.g, rgb.b);
      this.hexFull = this.hex + "0".repeat(7 - this.hex.length);
    }
  },
  methods: {
    onColorPicked(r, g, b) {
      this.rgb.r = r.toString();
      this.rgb.g = g.toString();
      this.rgb.b = b.toString();
      this.onUpdateRgb();
    },
    isHex(c) {
      return c >= "0" && c <= "9" || c >= "a" && c <= "f" || c >= "A" && c <= "F";
    },
    isInt(c) {
      return c >= "0" && c <= "9";
    },
    isFloat(c) {
      return c >= "0" && c <= "9" || c == ".";
    },
    removeCharAt(str, index) {
      return str.substring(0, index) + str.substring(index + 1);
    },
    filterInvalidChars(str, method) {
      let filtered = "";
      let hasDecimal = false;
      for (let i = 0; i < str.length; i++) {
        if (method === "hex" && this.isHex(str[i])) {
          filtered += str[i];
        } else if (method === "int" && this.isInt(str[i])) {
          filtered += str[i];
        } else if (method === "float") {
          if (str[i] === "." && !hasDecimal) {
            filtered += str[i];
            hasDecimal = true;
          } else if (this.isInt(str[i])) {
            filtered += str[i];
          }
        }
      }
      return filtered;
    },
    rgbToHex(r, g, b) {
      return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    hexToRgb(hex) {
      let r = parseInt(hex.substring(1, 3), 16);
      let g = parseInt(hex.substring(3, 5), 16);
      let b = parseInt(hex.substring(5, 7), 16);
      return { r, g, b };
    },
    rgbToHsv(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;
      let max = Math.max(r, g, b);
      let min = Math.min(r, g, b);
      let d = max - min;
      let s = max == 0 ? 0 : d / max;
      let v = max;
      let h;
      if (max == min) {
        h = 0;
      } else {
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return { h, s, v };
    },
    hsvToRgb(h, s, v) {
      let c = v * s;
      let x = c * (1 - Math.abs(h / 60 % 2 - 1));
      let m = v - c;
      let r, g, b;
      if (h >= 0 && h < 60) {
        r = c;
        g = x;
        b = 0;
      } else if (h >= 60 && h < 120) {
        r = x;
        g = c;
        b = 0;
      } else if (h >= 120 && h < 180) {
        r = 0;
        g = c;
        b = x;
      } else if (h >= 180 && h < 240) {
        r = 0;
        g = x;
        b = c;
      } else if (h >= 240 && h < 300) {
        r = x;
        g = 0;
        b = c;
      } else {
        r = c;
        g = 0;
        b = x;
      }
      r = Math.round((r + m) * 255);
      g = Math.round((g + m) * 255);
      b = Math.round((b + m) * 255);
      return { r, g, b };
    },
    hslToHsv(h, s, l) {
      let v = l + s * Math.min(l, 1 - l);
      let newS = v === 0 ? 0 : 2 * (1 - l / v);
      return { h, s: newS, v };
    },
    hsvToHsl(h, s, v) {
      let l = v * (1 - s / 2);
      let newS = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
      return { h, s: newS, l };
    }
  }
};
const _hoisted_1 = { class: "home-page" };
const _hoisted_2 = { class: "row-item" };
const _hoisted_3 = { class: "input-column" };
const _hoisted_4 = { class: "input-column flex-to-center" };
const _hoisted_5 = { ref: "colorCanvas" };
const _hoisted_6 = { class: "input-column" };
const _hoisted_7 = { class: "input-column" };
const _hoisted_8 = { class: "input-column" };
const _hoisted_9 = { class: "input-column" };
const _hoisted_10 = { class: "input-column" };
const _hoisted_11 = { class: "input-column" };
const _hoisted_12 = { class: "input-column" };
const _hoisted_13 = { class: "input-column" };
const _hoisted_14 = { class: "row-item" };
const _hoisted_15 = { class: "input-column" };
const _hoisted_16 = { class: "input-column" };
const _hoisted_17 = { class: "input-column" };
const _hoisted_18 = { class: "input-column" };
const _hoisted_19 = { class: "input-column" };
const _hoisted_20 = { class: "input-column" };
const _hoisted_21 = { class: "input-column" };
const _hoisted_22 = { class: "input-column" };
const _hoisted_23 = { class: "input-column" };
const _hoisted_24 = { class: "input-column" };
const _hoisted_25 = { class: "input-column" };
const _hoisted_26 = { class: "input-column" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_segment = resolveComponent("segment");
  return openBlock(), createElementBlock("main", _hoisted_1, [
    createVNode(_component_segment, {
      title: "Color Conversion Tool",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        _cache[50] || (_cache[50] = createBaseVNode("div", { class: "row-item" }, [
          createBaseVNode("div", { class: "description" }, [
            createBaseVNode("p", null, " This is a simple color conversion tool that can convert between different color formats, including RGB, HEX, HSV and HSL. You can input a color in any of these formats and get the equivalent values in the other formats. ")
          ])
        ], -1)),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", {
            class: normalizeClass(["input-row", { dark: _ctx.isDark }])
          }, [
            createBaseVNode("div", _hoisted_3, [
              _cache[30] || (_cache[30] = createBaseVNode("span", { class: "input-label" }, "HEX:", -1)),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.hex = $event),
                onInput: _cache[1] || (_cache[1] = (...args) => _ctx.onUpdateHex && _ctx.onUpdateHex(...args))
              }, null, 544), [
                [vModelText, _ctx.hex]
              ]),
              _cache[31] || (_cache[31] = createBaseVNode("span", { class: "input-suffix" }, null, -1))
            ]),
            _cache[48] || (_cache[48] = createBaseVNode("div", { class: "input-column" }, null, -1)),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", {
                class: "color-preview",
                style: normalizeStyle({ backgroundColor: _ctx.hexFull })
              }, [
                createBaseVNode("canvas", _hoisted_5, null, 512)
              ], 4)
            ]),
            createBaseVNode("div", _hoisted_6, [
              _cache[32] || (_cache[32] = createBaseVNode("span", { class: "input-label" }, "R:", -1)),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.rgb.r = $event),
                onInput: _cache[3] || (_cache[3] = (...args) => _ctx.onUpdateRgb && _ctx.onUpdateRgb(...args))
              }, null, 544), [
                [vModelText, _ctx.rgb.r]
              ]),
              _cache[33] || (_cache[33] = createBaseVNode("span", { class: "input-suffix" }, null, -1))
            ]),
            createBaseVNode("div", _hoisted_7, [
              _cache[34] || (_cache[34] = createBaseVNode("span", { class: "input-label" }, "G:", -1)),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.rgb.g = $event),
                onInput: _cache[5] || (_cache[5] = (...args) => _ctx.onUpdateRgb && _ctx.onUpdateRgb(...args))
              }, null, 544), [
                [vModelText, _ctx.rgb.g]
              ]),
              _cache[35] || (_cache[35] = createBaseVNode("span", { class: "input-suffix" }, null, -1))
            ]),
            createBaseVNode("div", _hoisted_8, [
              _cache[36] || (_cache[36] = createBaseVNode("span", { class: "input-label" }, "B:", -1)),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.rgb.b = $event),
                onInput: _cache[7] || (_cache[7] = (...args) => _ctx.onUpdateRgb && _ctx.onUpdateRgb(...args))
              }, null, 544), [
                [vModelText, _ctx.rgb.b]
              ]),
              _cache[37] || (_cache[37] = createBaseVNode("span", { class: "input-suffix" }, null, -1))
            ]),
            createBaseVNode("div", _hoisted_9, [
              _cache[38] || (_cache[38] = createBaseVNode("span", { class: "input-label" }, "H:", -1)),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.hsv.h = $event),
                onInput: _cache[9] || (_cache[9] = (...args) => _ctx.onUpdateHsv && _ctx.onUpdateHsv(...args))
              }, null, 544), [
                [vModelText, _ctx.hsv.h]
              ]),
              _cache[39] || (_cache[39] = createBaseVNode("span", { class: "input-suffix" }, "°", -1))
            ]),
            createBaseVNode("div", _hoisted_10, [
              _cache[40] || (_cache[40] = createBaseVNode("span", { class: "input-label" }, "S:", -1)),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.hsv.s = $event),
                onInput: _cache[11] || (_cache[11] = (...args) => _ctx.onUpdateHsv && _ctx.onUpdateHsv(...args))
              }, null, 544), [
                [vModelText, _ctx.hsv.s]
              ]),
              _cache[41] || (_cache[41] = createBaseVNode("span", { class: "input-suffix" }, "%", -1))
            ]),
            createBaseVNode("div", _hoisted_11, [
              _cache[42] || (_cache[42] = createBaseVNode("span", { class: "input-label" }, "V:", -1)),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => _ctx.hsv.v = $event),
                onInput: _cache[13] || (_cache[13] = (...args) => _ctx.onUpdateHsv && _ctx.onUpdateHsv(...args))
              }, null, 544), [
                [vModelText, _ctx.hsv.v]
              ]),
              _cache[43] || (_cache[43] = createBaseVNode("span", { class: "input-suffix" }, "%", -1))
            ]),
            _cache[49] || (_cache[49] = createBaseVNode("div", { class: "input-column" }, null, -1)),
            createBaseVNode("div", _hoisted_12, [
              _cache[44] || (_cache[44] = createBaseVNode("span", { class: "input-label" }, "S:", -1)),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => _ctx.hsl.s = $event),
                onInput: _cache[15] || (_cache[15] = (...args) => _ctx.onUpdateHsl && _ctx.onUpdateHsl(...args))
              }, null, 544), [
                [vModelText, _ctx.hsl.s]
              ]),
              _cache[45] || (_cache[45] = createBaseVNode("span", { class: "input-suffix" }, "%", -1))
            ]),
            createBaseVNode("div", _hoisted_13, [
              _cache[46] || (_cache[46] = createBaseVNode("span", { class: "input-label" }, "L:", -1)),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.hsl.l = $event),
                onInput: _cache[17] || (_cache[17] = (...args) => _ctx.onUpdateHsl && _ctx.onUpdateHsl(...args))
              }, null, 544), [
                [vModelText, _ctx.hsl.l]
              ]),
              _cache[47] || (_cache[47] = createBaseVNode("span", { class: "input-suffix" }, "%", -1))
            ])
          ], 2)
        ])
      ]),
      _: 1
    }, 8, ["isDark"]),
    createVNode(_component_segment, {
      title: "Color Picker",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        _cache[63] || (_cache[63] = createBaseVNode("div", { class: "row-item" }, [
          createBaseVNode("div", { class: "description" }, [
            createBaseVNode("p", null, " You may pick some colors below. The color will be converted to RGB, HEX, HSV and HSL automatically. ")
          ])
        ], -1)),
        createBaseVNode("div", _hoisted_14, [
          createBaseVNode("div", {
            class: normalizeClass(["input-row", { dark: _ctx.isDark }])
          }, [
            createBaseVNode("div", _hoisted_15, [
              createBaseVNode("button", {
                style: { backgroundColor: "rgb(255, 255, 255)" },
                onClick: _cache[18] || (_cache[18] = ($event) => _ctx.onColorPicked(255, 255, 255))
              }, [..._cache[51] || (_cache[51] = [
                createBaseVNode("p", { class: "force-text-color-light" }, "White", -1)
              ])])
            ]),
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("button", {
                style: { backgroundColor: "rgb(128, 128, 128)" },
                onClick: _cache[19] || (_cache[19] = ($event) => _ctx.onColorPicked(128, 128, 128))
              }, [..._cache[52] || (_cache[52] = [
                createBaseVNode("p", { class: "force-text-color-light" }, "Gray", -1)
              ])])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("button", {
                style: { backgroundColor: "rgb(0, 0, 0)" },
                onClick: _cache[20] || (_cache[20] = ($event) => _ctx.onColorPicked(0, 0, 0))
              }, [..._cache[53] || (_cache[53] = [
                createBaseVNode("p", { class: "force-text-color-dark" }, "Black", -1)
              ])])
            ]),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("button", {
                style: { backgroundColor: "rgb(255, 0, 0)" },
                onClick: _cache[21] || (_cache[21] = ($event) => _ctx.onColorPicked(255, 0, 0))
              }, [..._cache[54] || (_cache[54] = [
                createBaseVNode("p", { class: "force-text-color-light" }, "Red", -1)
              ])])
            ]),
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("button", {
                style: { backgroundColor: "rgb(0, 255, 0)" },
                onClick: _cache[22] || (_cache[22] = ($event) => _ctx.onColorPicked(0, 255, 0))
              }, [..._cache[55] || (_cache[55] = [
                createBaseVNode("p", { class: "force-text-color-light" }, "Green", -1)
              ])])
            ]),
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("button", {
                style: { backgroundColor: "rgb(0, 0, 255)" },
                onClick: _cache[23] || (_cache[23] = ($event) => _ctx.onColorPicked(0, 0, 255))
              }, [..._cache[56] || (_cache[56] = [
                createBaseVNode("p", { class: "force-text-color-dark" }, "Blue", -1)
              ])])
            ]),
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("button", {
                style: { backgroundColor: "rgb(255, 255, 0)" },
                onClick: _cache[24] || (_cache[24] = ($event) => _ctx.onColorPicked(255, 255, 0))
              }, [..._cache[57] || (_cache[57] = [
                createBaseVNode("p", { class: "force-text-color-light" }, "Yellow", -1)
              ])])
            ]),
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("button", {
                style: { backgroundColor: "rgb(255, 0, 255)" },
                onClick: _cache[25] || (_cache[25] = ($event) => _ctx.onColorPicked(255, 0, 255))
              }, [..._cache[58] || (_cache[58] = [
                createBaseVNode("p", { class: "force-text-color-light" }, "Magenta", -1)
              ])])
            ]),
            createBaseVNode("div", _hoisted_23, [
              createBaseVNode("button", {
                style: { backgroundColor: "rgb(0, 255, 255)" },
                onClick: _cache[26] || (_cache[26] = ($event) => _ctx.onColorPicked(0, 255, 255))
              }, [..._cache[59] || (_cache[59] = [
                createBaseVNode("p", { class: "force-text-color-light" }, "Cyan", -1)
              ])])
            ]),
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("button", {
                style: { backgroundColor: "rgb(255, 165, 0)" },
                onClick: _cache[27] || (_cache[27] = ($event) => _ctx.onColorPicked(255, 165, 0))
              }, [..._cache[60] || (_cache[60] = [
                createBaseVNode("p", { class: "force-text-color-light" }, "Orange", -1)
              ])])
            ]),
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("button", {
                style: { backgroundColor: "rgb(128, 0, 128)" },
                onClick: _cache[28] || (_cache[28] = ($event) => _ctx.onColorPicked(128, 0, 128))
              }, [..._cache[61] || (_cache[61] = [
                createBaseVNode("p", { class: "force-text-color-light" }, "Purple", -1)
              ])])
            ]),
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("button", {
                style: { backgroundColor: "rgb(165, 42, 42)" },
                onClick: _cache[29] || (_cache[29] = ($event) => _ctx.onColorPicked(165, 42, 42))
              }, [..._cache[62] || (_cache[62] = [
                createBaseVNode("p", { class: "force-text-color-light" }, "Brown", -1)
              ])])
            ])
          ], 2)
        ])
      ]),
      _: 1
    }, 8, ["isDark"])
  ]);
}
const Color = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__scopeId", "data-v-c4a4ff8d"]]);
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
      path: "/experience",
      name: "Experience",
      component: Experience
    },
    {
      path: "/project",
      name: "Project",
      component: Project
    },
    {
      path: "/project/color",
      name: "Color",
      component: Color
    }
  ]
});
app.use(router);
app.mount("body");
