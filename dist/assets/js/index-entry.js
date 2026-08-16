import { e as createElementBlock, f as createBaseVNode, t as toDisplayString, g as createVNode, j as withCtx, k as normalizeClass, l as resolveComponent, o as openBlock, m as createBlock, T as Transition, q as renderSlot, v as createTextVNode, x as withDirectives, y as vShow, F as Fragment, z as renderList, A as createApp } from "./@vue-chunk.js";
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
const _sfc_main$5 = {
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
const _hoisted_1$5 = { class: "logo" };
const _hoisted_2$5 = { href: "#" };
const _hoisted_3$3 = { class: "menu-toggle-wrap" };
const _hoisted_4$2 = { class: "menu" };
const _hoisted_5$1 = { class: "menu" };
function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  return openBlock(), createElementBlock("aside", {
    class: normalizeClass(`${_ctx.expanded ? "expanded" : ""}`)
  }, [
    createBaseVNode("div", _hoisted_1$5, [
      createBaseVNode("a", _hoisted_2$5, toDisplayString(_ctx.head), 1)
    ]),
    createBaseVNode("div", _hoisted_3$3, [
      createBaseVNode("button", {
        class: "menu-toggle",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.toggleExpanded && _ctx.toggleExpanded(...args))
      }, [..._cache[3] || (_cache[3] = [
        createBaseVNode("span", { class: "material-symbols-outlined" }, "keyboard_double_arrow_right", -1)
      ])])
    ]),
    _cache[9] || (_cache[9] = createBaseVNode("h3", null, "Menu", -1)),
    createBaseVNode("div", _hoisted_4$2, [
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
        to: "/project"
      }, {
        default: withCtx(() => [..._cache[6] || (_cache[6] = [
          createBaseVNode("span", { class: "material-symbols-outlined" }, "work", -1),
          createBaseVNode("span", { class: "text" }, "Projects", -1)
        ])]),
        _: 1
      })
    ]),
    _cache[10] || (_cache[10] = createBaseVNode("div", { class: "flex" }, null, -1)),
    createBaseVNode("div", _hoisted_5$1, [
      _ctx.isDark ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: "button",
        onClick: _cache[1] || (_cache[1] = ($event) => this.$emit("toggleDark", false))
      }, [..._cache[7] || (_cache[7] = [
        createBaseVNode("span", { class: "material-symbols-outlined" }, "brightness_3", -1),
        createBaseVNode("span", { class: "text" }, "Dark mode", -1)
      ])])) : (openBlock(), createElementBlock("button", {
        key: 1,
        class: "button",
        onClick: _cache[2] || (_cache[2] = ($event) => this.$emit("toggleDark", true))
      }, [..._cache[8] || (_cache[8] = [
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
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", render$5], ["__scopeId", "data-v-afea40ea"]]);
const _sfc_main$4 = {
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
const _hoisted_1$4 = { id: "app" };
const _hoisted_2$4 = { class: "main" };
function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_RouterView = resolveComponent("RouterView");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createVNode(_component_Sidebar, {
      head: "HU",
      class: normalizeClass({ dark: _ctx.isDarkMode }),
      isDark: _ctx.isDarkMode,
      onToggleDark: _ctx.toggleDark
    }, null, 8, ["class", "isDark", "onToggleDark"]),
    createBaseVNode("div", _hoisted_2$4, [
      createVNode(_component_RouterView, { isDark: _ctx.isDarkMode }, null, 8, ["isDark"])
    ])
  ]);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", render$4]]);
const _sfc_main$3 = {
  props: {
    title: String,
    isDark: Boolean
  }
};
const _hoisted_1$3 = { class: "main-body" };
const _hoisted_2$3 = { class: "heading" };
function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { appear: "" }, {
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass(["segment mt-3", { dark: _ctx.isDark }])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("div", _hoisted_2$3, [
            createBaseVNode("h1", null, toDisplayString(_ctx.title), 1)
          ]),
          renderSlot(_ctx.$slots, "default")
        ])
      ], 2)
    ]),
    _: 3
  });
}
const Segment = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", render$3]]);
const _sfc_main$2 = {
  name: "Home",
  components: {
    Segment
  },
  props: {
    isDark: Boolean
  }
};
const _hoisted_1$2 = { class: "home-page" };
const _hoisted_2$2 = { class: "row-item" };
const _hoisted_3$2 = { class: "description" };
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_segment = resolveComponent("segment");
  return openBlock(), createElementBlock("main", _hoisted_1$2, [
    createVNode(_component_segment, {
      title: "Welcome!",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
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
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", render$2]]);
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
const _sfc_main$1 = {
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
const _hoisted_1$1 = { class: "about-page" };
const _hoisted_2$1 = { class: "button-inline" };
const _hoisted_3$1 = { class: "row-item" };
const _hoisted_4$1 = { class: "table table-bordered" };
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_segment = resolveComponent("segment");
  return openBlock(), createElementBlock("main", _hoisted_1$1, [
    createVNode(_component_segment, {
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2$1, [
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
      default: withCtx(() => [..._cache[4] || (_cache[4] = [
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
      default: withCtx(() => [..._cache[5] || (_cache[5] = [
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
        createBaseVNode("div", _hoisted_3$1, [
          _cache[6] || (_cache[6] = createBaseVNode("div", { class: "description" }, [
            createBaseVNode("p", null, "GPA: 3.772 / 4.300"),
            createBaseVNode("p", null, "Major CGA: 3.874 / 4.300"),
            createBaseVNode("p", null, "The following is my grade:")
          ], -1)),
          createBaseVNode("table", _hoisted_4$1, [
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
      title: "Experience",
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [..._cache[7] || (_cache[7] = [
        createBaseVNode("div", { class: "row-item" }, [
          createBaseVNode("div", { class: "title" }, [
            createBaseVNode("h5", null, "Software Engineer")
          ]),
          createBaseVNode("div", { class: "date text-right" }, [
            createBaseVNode("h6", null, "JUL 2026 - PRESENT")
          ]),
          createBaseVNode("div", { class: "subtitle" }, [
            createBaseVNode("h6", null, "Winley Technology Limited")
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
    }, 8, ["isDark"]), [
      [vShow, _ctx.isShowing === "Experience"]
    ]),
    withDirectives(createVNode(_component_segment, {
      title: "Games Playing",
      class: "session",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [..._cache[8] || (_cache[8] = [
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
      default: withCtx(() => [..._cache[9] || (_cache[9] = [
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
const About = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1]]);
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
const _sfc_main = {
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
const _hoisted_1 = { class: "project-page" };
const _hoisted_2 = { class: "row-item" };
const _hoisted_3 = { class: "description" };
const _hoisted_4 = { class: "table table-bordered" };
const _hoisted_5 = ["href"];
const _hoisted_6 = ["href"];
const _hoisted_7 = ["href"];
const _hoisted_8 = { class: "row-item" };
const _hoisted_9 = { class: "description" };
const _hoisted_10 = ["href"];
const _hoisted_11 = { class: "row-item" };
const _hoisted_12 = { class: "description" };
const _hoisted_13 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_segment = resolveComponent("segment");
  return openBlock(), createElementBlock("main", _hoisted_1, [
    createVNode(_component_segment, {
      title: "Notes",
      id: "notes",
      isDark: _ctx.isDark
    }, {
      default: withCtx(() => [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            _cache[0] || (_cache[0] = createBaseVNode("p", null, "Here are some of the notes I have made (ordered by start date).", -1)),
            createBaseVNode("table", _hoisted_4, [
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
                      }, toDisplayString(note.pdfLink ? "PDF" : ""), 9, _hoisted_5)
                    ]),
                    createBaseVNode("td", null, [
                      createBaseVNode("a", {
                        href: note.texLink ? note.texLink : "",
                        target: "_blank"
                      }, toDisplayString(note.texLink ? "TEX" : ""), 9, _hoisted_6)
                    ]),
                    createBaseVNode("td", null, [
                      createBaseVNode("a", {
                        href: note.others ? note.others.link : "",
                        target: "_blank"
                      }, toDisplayString(note.others ? note.others.name : ""), 9, _hoisted_7)
                    ])
                  ]);
                }), 256))
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_8, [
          createBaseVNode("div", _hoisted_9, [
            _cache[1] || (_cache[1] = createBaseVNode("p", null, "I have made some customized LaTeX class to make my notes. You can find them below:", -1)),
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.latexClasses, (latexClass) => {
                return openBlock(), createElementBlock("li", null, [
                  createBaseVNode("a", {
                    href: latexClass.link
                  }, toDisplayString(latexClass.name), 9, _hoisted_10)
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
        createBaseVNode("div", _hoisted_11, [
          createBaseVNode("div", _hoisted_12, [
            _cache[3] || (_cache[3] = createBaseVNode("p", null, "Here are some of the other projects I have participated in:", -1)),
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.otherProjects, (project) => {
                return openBlock(), createElementBlock("li", null, [
                  createBaseVNode("a", {
                    href: project.link,
                    target: "_blank"
                  }, toDisplayString(project.name), 9, _hoisted_13)
                ]);
              }), 256))
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["isDark"])
  ]);
}
const Project = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render]]);
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
    }
  ]
});
app.use(router);
app.mount("body");
