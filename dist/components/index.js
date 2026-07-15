import { createRequire } from 'module';

createRequire(import.meta.url);
var l;
l = { __e: function(n2, l2, u3, t2) {
  for (var i2, o2, r2; l2 = l2.__; ) if ((i2 = l2.__c) && !i2.__) try {
    if ((o2 = i2.constructor) && null != o2.getDerivedStateFromError && (i2.setState(o2.getDerivedStateFromError(n2)), r2 = i2.__d), null != i2.componentDidCatch && (i2.componentDidCatch(n2, t2 || {}), r2 = i2.__d), r2) return i2.__E = i2;
  } catch (l3) {
    n2 = l3;
  }
  throw n2;
} }, "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

// node_modules/preact/jsx-runtime/dist/jsxRuntime.mjs
var f2 = 0;
function u2(e2, t2, n2, o2, i2, u3) {
  t2 || (t2 = {});
  var a2, c2, p2 = t2;
  if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
  var l2 = { type: e2, props: p2, key: n2, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f2, __i: -1, __u: 0, __source: i2, __self: u3 };
  if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
  return l.vnode && l.vnode(l2), l2;
}

// src/components/NoteHeader.tsx
var NoteHeader_default = (() => {
  const NoteHeader = ({ fileData }) => {
    if (!fileData.frontmatter?.type) return null;
    const type = String(fileData.frontmatter?.type ?? "");
    const kind = String(fileData.frontmatter?.kind ?? "");
    const title = String(fileData.frontmatter?.title ?? fileData.slug ?? "");
    const sectionMap = {
      source: ["Sources", "./sources"],
      idea: ["Ideas", "./ideas"],
      publication: ["Publications", "./publications"]
    };
    const [sectionLabel, sectionHref] = sectionMap[type] ?? ["Home", "./"];
    return /* @__PURE__ */ u2("div", { class: "page-header-mini", children: [
      /* @__PURE__ */ u2("svg", { width: "0", height: "0", style: "position:absolute", children: /* @__PURE__ */ u2("defs", { children: /* @__PURE__ */ u2("filter", { id: "roughen-soft-mini", x: "-50%", y: "-50%", width: "200%", height: "200%", children: [
        /* @__PURE__ */ u2("feTurbulence", { type: "fractalNoise", baseFrequency: "0.02 0.06", numOctaves: "3", seed: "7", result: "noise" }),
        /* @__PURE__ */ u2("feDisplacementMap", { in: "SourceGraphic", in2: "noise", scale: "18", xChannelSelector: "R", yChannelSelector: "G", result: "displaced" }),
        /* @__PURE__ */ u2("feGaussianBlur", { in: "displaced", stdDeviation: "0.8" })
      ] }) }) }),
      /* @__PURE__ */ u2("svg", { class: "masthead-smear-mini", viewBox: "0 0 340 170", preserveAspectRatio: "none", children: [
        /* @__PURE__ */ u2("g", { style: "mix-blend-mode:multiply", children: [
          /* @__PURE__ */ u2(
            "path",
            {
              d: "M336 106 Q300 116 260 104 Q220 108 200 114 Q180 114 155 82 Q125 55 88 62 Q55 68 28 58\n                 Q55 78 88 94 Q125 112 160 102 Q188 94 216 116 Q244 138 280 146 Q312 154 336 106 Z",
              fill: "#c99a2e",
              opacity: "0.4",
              filter: "url(#roughen-soft-mini)"
            }
          ),
          /* @__PURE__ */ u2(
            "path",
            {
              d: "M336 106 Q270 98 224 102 Q180 108 150 80 Q120 54 84 60",
              fill: "none",
              stroke: "#c99a2e",
              "stroke-width": "14",
              "stroke-linecap": "round",
              opacity: "0.3",
              filter: "url(#roughen-soft-mini)"
            }
          )
        ] }),
        /* @__PURE__ */ u2("circle", { cx: "330", cy: "98", r: "2.6", fill: "#c99a2e", opacity: "0.38", filter: "url(#roughen-soft-mini)" }),
        /* @__PURE__ */ u2("circle", { cx: "334", cy: "118", r: "2", fill: "#c99a2e", opacity: "0.32", filter: "url(#roughen-soft-mini)" })
      ] }),
      /* @__PURE__ */ u2("p", { class: "eyebrow", children: "an interdisciplinary research archive" }),
      /* @__PURE__ */ u2("a", { href: "./", class: "masthead-mini", style: "font-family:'MyHand','Fraunces',serif;font-weight:normal;", children: "Annotated" }),
      /* @__PURE__ */ u2("svg", { class: "rule-double", viewBox: "0 0 880 12", preserveAspectRatio: "none", style: "height:8px;", children: [
        /* @__PURE__ */ u2("path", { d: "M2 6 Q40 2 90 7 T190 5 T290 8 T390 4 T490 7 T590 5 T690 8 T790 4 T878 6", fill: "none", stroke: "#23555f", "stroke-width": "1.3", "stroke-linecap": "round", opacity: "0.35", transform: "translate(1.6,-1)" }),
        /* @__PURE__ */ u2("path", { d: "M2 6 Q40 2 90 7 T190 5 T290 8 T390 4 T490 7 T590 5 T690 8 T790 4 T878 6", fill: "none", stroke: "#8c2f22", "stroke-width": "1.3", "stroke-linecap": "round", opacity: "0.8" })
      ] }),
      /* @__PURE__ */ u2("p", { class: "crumb-trail", children: [
        /* @__PURE__ */ u2("a", { href: "./", children: "Home" }),
        /* @__PURE__ */ u2("span", { children: "/" }),
        /* @__PURE__ */ u2("a", { href: sectionHref, children: sectionLabel }),
        /* @__PURE__ */ u2("span", { children: "/" }),
        title
      ] }),
      kind ? /* @__PURE__ */ u2("p", { class: "section-label", style: "justify-content:center; border:none;", children: kind }) : null
    ] });
  };
  return NoteHeader;
});

export { NoteHeader_default as NoteHeader };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map