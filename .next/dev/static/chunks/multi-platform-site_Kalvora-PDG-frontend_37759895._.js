(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/multi-platform-site/Kalvora-PDG-frontend/components/animated-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedText",
    ()=>AnimatedText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const defaultColors = [
    "text-cyan-400",
    "text-primary dark:text-foreground",
    "text-cyan-400",
    "text-primary dark:text-foreground",
    "text-cyan-400",
    "text-primary dark:text-foreground"
];
function AnimatedText({ text, className = "", colors = defaultColors, intervalMs = 600 }) {
    _s();
    const [displayedText, setDisplayedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedText.useEffect": ()=>{
            if (currentIndex < text.length) {
                const timer = setTimeout({
                    "AnimatedText.useEffect.timer": ()=>{
                        setDisplayedText({
                            "AnimatedText.useEffect.timer": (prev)=>prev + text[currentIndex]
                        }["AnimatedText.useEffect.timer"]);
                        setCurrentIndex({
                            "AnimatedText.useEffect.timer": (prev)=>prev + 1
                        }["AnimatedText.useEffect.timer"]);
                    }
                }["AnimatedText.useEffect.timer"], intervalMs);
                return ({
                    "AnimatedText.useEffect": ()=>clearTimeout(timer)
                })["AnimatedText.useEffect"];
            }
        // Une fois terminé, on laisse le texte affiché (pas de boucle)
        }
    }["AnimatedText.useEffect"], [
        currentIndex,
        intervalMs,
        text
    ]);
    // Detect theme (dark / light) to adapt text shadow for readability
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedText.useEffect": ()=>{
            const doc = document.documentElement;
            rootRef.current = doc;
            const check = {
                "AnimatedText.useEffect.check": ()=>setIsDark(doc.classList.contains("dark") || window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)
            }["AnimatedText.useEffect.check"];
            check();
            // Watch for class changes on <html> (theme toggle may flip class)
            const obs = new MutationObserver({
                "AnimatedText.useEffect": ()=>check()
            }["AnimatedText.useEffect"]);
            obs.observe(doc, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            // Also listen to media changes
            const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
            const mqHandler = {
                "AnimatedText.useEffect.mqHandler": ()=>check()
            }["AnimatedText.useEffect.mqHandler"];
            if (mq && mq.addEventListener) mq.addEventListener("change", mqHandler);
            return ({
                "AnimatedText.useEffect": ()=>{
                    obs.disconnect();
                    if (mq && mq.removeEventListener) mq.removeEventListener("change", mqHandler);
                }
            })["AnimatedText.useEffect"];
        }
    }["AnimatedText.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        children: displayedText.split("").map((char, index)=>{
            const colorClass = colors[index % colors.length];
            // adaptive shadow for contrast
            const textShadow = isDark ? "0 1px 0 rgba(255,255,255,0.06), 0 4px 18px rgba(0,0,0,0.6)" : "0 1px 0 rgba(0,0,0,0.6), 0 6px 24px rgba(0,0,0,0.12)";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `${colorClass} transition-all duration-500 inline-block`,
                style: {
                    textShadow
                },
                children: char
            }, index, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/animated-text.tsx",
                lineNumber: 71,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/animated-text.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(AnimatedText, "QK7VP79c3JGUDqhTTgonFscCIa4=");
_c = AnimatedText;
var _c;
__turbopack_context__.k.register(_c, "AnimatedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/components/language-switcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const languages = [
    {
        code: "fr",
        name: "Français",
        image: "/flags/france.svg"
    },
    {
        code: "en",
        name: "English",
        image: "/flags/uk.svg"
    },
    {
        code: "es",
        name: "Español",
        image: "/flags/spain.svg"
    }
];
function LanguageSwitcher() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const currentLang = pathname.split("/")[1] || "fr";
    const currentLanguage = languages.find((lang)=>lang.code === currentLang) || languages[0];
    const changeLanguage = (langCode)=>{
        const segments = pathname.split("/").filter(Boolean);
        if (segments.length > 0 && [
            "fr",
            "en",
            "es"
        ].includes(segments[0])) {
            segments[0] = langCode;
        } else {
            segments.unshift(langCode);
        }
        router.push("/" + segments.join("/"));
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen((v)=>!v),
                className: "p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 flex items-center gap-2",
                "aria-label": "Changer de langue",
                title: "Sélectionner la langue",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: currentLanguage.image,
                    alt: currentLanguage.name,
                    width: 28,
                    height: 20,
                    className: "w-7 h-5 rounded object-cover",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/language-switcher.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/language-switcher.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200",
                children: languages.map((lang)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>changeLanguage(lang.code),
                        className: `w-full px-4 py-3 flex items-center gap-3 hover:bg-muted transition-all duration-200 ${currentLanguage.code === lang.code ? "bg-primary/10 text-primary" : "text-foreground"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: lang.image,
                                alt: lang.name,
                                width: 32,
                                height: 20,
                                className: "w-8 h-5 rounded object-cover"
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/language-switcher.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex-1 text-left",
                                children: lang.name
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/language-switcher.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            currentLanguage.code === lang.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-primary",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/language-switcher.tsx",
                                lineNumber: 66,
                                columnNumber: 54
                            }, this)
                        ]
                    }, lang.code, true, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/language-switcher.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/language-switcher.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/language-switcher.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(LanguageSwitcher, "I7Jcd2Zhqod7bJ/DqwqtnvIgjsg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/components/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ThemeToggle() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
        }
    }["ThemeToggle.useEffect"], []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "p-2 rounded-lg bg-muted",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/theme-toggle.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/theme-toggle.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
        className: "p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors",
        "aria-label": "Toggle theme",
        children: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
            className: "h-5 w-5 text-foreground"
        }, void 0, false, {
            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/theme-toggle.tsx",
            lineNumber: 30,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
            className: "h-5 w-5 text-foreground"
        }, void 0, false, {
            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/theme-toggle.tsx",
            lineNumber: 32,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/theme-toggle.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "CybB+IJKIQO7hXpeRHYgsUfxw+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function UserProfile() {
    _s();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLogoutConfirm, setShowLogoutConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [avatarUrl, setAvatarUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Load avatar from user data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserProfile.useEffect": ()=>{
            if (user?.avatar) {
                // If avatar path starts with /, it's a relative path to backend
                if (user.avatar.startsWith('/')) {
                    setAvatarUrl(`http://localhost:4000${user.avatar}`);
                } else {
                    setAvatarUrl(user.avatar);
                }
            } else {
                setAvatarUrl(null);
            }
        }
    }["UserProfile.useEffect"], [
        user
    ]);
    // Don't render until user data is loaded
    if (!user || !user.name) return null;
    const handleLogoutClick = ()=>{
        setShowLogoutConfirm(true);
    };
    const confirmLogout = ()=>{
        logout();
        setIsOpen(false);
        setShowLogoutConfirm(false);
        router.push('/');
    };
    const cancelLogout = ()=>{
        setShowLogoutConfirm(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-muted transition",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold overflow-hidden",
                        children: avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: avatarUrl,
                            alt: user.name || 'Avatar',
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this) : user.name ? user.name.charAt(0).toUpperCase() : '?'
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-foreground text-sm font-medium hidden sm:inline",
                        children: user.name || 'Utilisateur'
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `w-4 h-4 transition ${isOpen ? 'rotate-180' : ''}`,
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                        }, void 0, false, {
                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-4 top-16 md:right-8 md:top-20 w-80 bg-card border border-border rounded-lg shadow-lg z-50 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 pb-4 border-b border-border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-foreground mb-2",
                                children: "Mon Compte"
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 text-sm text-foreground/70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground/50",
                                                children: "Nom:"
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            user.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground/50",
                                                children: "Email:"
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            user.email
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground/50",
                                                children: "Rôle:"
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this),
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "capitalize text-primary font-medium",
                                                children: user.role
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-foreground/50",
                                                children: "Inscrit:"
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, this),
                                            ' ',
                                            new Date(user.createdAt).toLocaleDateString('fr-FR')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/profile",
                                className: "block px-4 py-2 rounded-lg hover:bg-muted transition text-foreground text-center",
                                onClick: ()=>setIsOpen(false),
                                children: "Voir Mon Profil"
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/settings",
                                className: "block px-4 py-2 rounded-lg hover:bg-muted transition text-foreground text-center",
                                onClick: ()=>setIsOpen(false),
                                children: "Paramètres"
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            user.role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/admin",
                                className: "block px-4 py-2 rounded-lg hover:bg-primary/10 transition text-primary text-center font-medium",
                                onClick: ()=>setIsOpen(false),
                                children: "🔧 Tableau de Bord Admin"
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLogoutClick,
                                className: "w-full px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition text-red-500 text-center font-medium",
                                children: "Se Déconnecter"
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            showLogoutConfirm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 flex items-center justify-center z-[100]",
                onClick: cancelLogout,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-card border border-border rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-foreground mb-3",
                            children: "Confirmer la déconnexion"
                        }, void 0, false, {
                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground mb-6",
                            children: "Êtes-vous sûr de vouloir vous déconnecter ? Vous devrez vous reconnecter pour accéder à votre compte."
                        }, void 0, false, {
                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: cancelLogout,
                                    className: "flex-1 px-4 py-2 rounded-lg border border-border hover:bg-muted transition text-foreground font-medium",
                                    children: "Annuler"
                                }, void 0, false, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: confirmLogout,
                                    className: "flex-1 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition text-white font-medium",
                                    children: "Se Déconnecter"
                                }, void 0, false, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(UserProfile, "Xq5GW0ARVEGhVItZ795e/qYnBOw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UserProfile;
var _c;
__turbopack_context__.k.register(_c, "UserProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-client] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript) <export default as Wand2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$animated$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/components/animated-text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/components/language-switcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/components/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$user$2d$profile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/components/user-profile.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/lib/auth-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Navigation() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [divisionsOpen, setDivisionsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const divisionsCloseTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { user, loading, token } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const handleDivisionsEnter = ()=>{
        if (divisionsCloseTimer.current) {
            clearTimeout(divisionsCloseTimer.current);
            divisionsCloseTimer.current = null;
        }
        setDivisionsOpen(true);
    };
    const handleDivisionsLeave = ()=>{
        if (divisionsCloseTimer.current) {
            clearTimeout(divisionsCloseTimer.current);
        }
        divisionsCloseTimer.current = setTimeout(()=>setDivisionsOpen(false), 220);
    };
    const navLinks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Navigation.useMemo[navLinks]": ()=>[
                {
                    href: "/services",
                    label: "Services",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
                    desktopClasses: "text-blue-600 dark:text-blue-300 hover:text-blue-500",
                    mobileClasses: "text-foreground hover:bg-primary/5"
                },
                {
                    href: "/about",
                    label: "À propos",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"],
                    desktopClasses: "text-emerald-600 dark:text-emerald-300 hover:text-emerald-500",
                    mobileClasses: "text-foreground hover:bg-primary/5"
                },
                {
                    href: "/ai",
                    label: "Assistant IA",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__["Wand2"],
                    desktopClasses: "text-cyan-600 dark:text-cyan-300 hover:text-cyan-500",
                    mobileClasses: "text-foreground hover:bg-primary/5"
                },
                {
                    href: "/contact",
                    label: "Contact",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                    desktopClasses: "text-amber-600 dark:text-amber-300 hover:text-amber-500",
                    mobileClasses: "text-foreground hover:bg-primary/5"
                }
            ]
    }["Navigation.useMemo[navLinks]"], []);
    const divisions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Navigation.useMemo[divisions]": ()=>[
                {
                    href: "/tech",
                    label: "Tech",
                    badge: "Nouveau",
                    tone: "from-cyan-500/30 to-sky-500/10",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"]
                },
                {
                    href: "/design",
                    label: "Design",
                    badge: "UI/UX",
                    tone: "from-fuchsia-500/30 to-purple-500/10",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"]
                },
                {
                    href: "/market",
                    label: "Market",
                    badge: "Live",
                    tone: "from-amber-500/30 to-orange-500/10",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"]
                },
                {
                    href: "/ai",
                    label: "Assistant IA",
                    badge: "Beta",
                    tone: "from-emerald-500/30 to-green-500/10",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
                }
            ]
    }["Navigation.useMemo[divisions]"], []);
    const isAuthenticated = !!user;
    const Logo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        className: "flex items-center gap-3 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30 ring-1 ring-primary/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/kalvora-logo.png",
                        alt: "Kalvora",
                        fill: true,
                        className: "object-cover",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col leading-tight",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$animated$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedText"], {
                        text: "Kalvora",
                        className: "text-lg font-bold tracking-tight"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 14,
                                className: "text-primary"
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            "Build. Design. Ship."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "sticky top-0 z-50 backdrop-blur border-b border-border bg-gradient-to-r from-background/92 via-background/88 to-background/84",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16",
                    children: [
                        Logo,
                        token && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-pulse flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-10 w-24 rounded-full bg-muted"
                                }, void 0, false, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                    lineNumber: 104,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-10 w-10 rounded-full bg-muted"
                                }, void 0, false, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                            lineNumber: 103,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                    lineNumber: 100,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
            lineNumber: 98,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "sticky top-0 z-50 backdrop-blur border-b border-border bg-gradient-to-r from-background/92 via-background/88 to-background/84",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-16 gap-4",
                    children: [
                        Logo,
                        isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    onMouseEnter: handleDivisionsEnter,
                                    onMouseLeave: handleDivisionsLeave,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-sm font-medium text-foreground hover:text-primary transition flex items-center gap-2",
                                            onClick: ()=>setDivisionsOpen((v)=>!v),
                                            "aria-expanded": divisionsOpen,
                                            children: [
                                                "Divisions",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary text-xs",
                                                    children: divisions.length
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        divisionsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute left-0 top-full mt-2 w-64 rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-xl transition-all duration-200",
                                            onMouseEnter: handleDivisionsEnter,
                                            onMouseLeave: handleDivisionsLeave,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 grid grid-cols-1 gap-2",
                                                children: divisions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: `flex items-center justify-between rounded-xl border border-border/70 bg-gradient-to-r px-3 py-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/15 transition ${item.tone}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                                        className: "h-4 w-4 text-primary"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                                        lineNumber: 152,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex flex-col",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm font-semibold text-foreground",
                                                                                children: item.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                                                lineNumber: 154,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-xs text-muted-foreground",
                                                                                children: [
                                                                                    "Solutions ",
                                                                                    item.label
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                                                lineNumber: 155,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] rounded-full px-2 py-1 font-semibold bg-white/5 text-primary",
                                                                children: item.badge
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, item.href, true, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                lineNumber: 144,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: `text-sm font-medium transition inline-flex items-center gap-2 ${link.desktopClasses} px-2 py-1 rounded-md`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                lineNumber: 174,
                                                columnNumber: 19
                                            }, this),
                                            link.label
                                        ]
                                    }, link.href, true, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                        lineNumber: 169,
                                        columnNumber: 17
                                    }, this)),
                                user?.vendorStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: user.vendorStatus === "approved" ? "/market/publication-space" : "/profile/vendor-status",
                                    className: "text-sm font-semibold text-accent hover:text-primary transition inline-flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this),
                                        user.vendorStatus === "approved" ? "Espace de Publication" : "État du Compte"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                    lineNumber: 180,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$user$2d$profile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 197,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "px-4 py-2 rounded-xl border border-border bg-card text-foreground hover:border-primary/50 hover:text-primary transition",
                                            children: "Connexion"
                                        }, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/signup",
                                            className: "px-4 py-2 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90 transition",
                                            children: "S'inscrire"
                                        }, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex md:hidden items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$user$2d$profile$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsOpen((v)=>!v),
                                            className: "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60",
                                            "aria-label": "Ouvrir le menu",
                                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                lineNumber: 229,
                                                columnNumber: 29
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                lineNumber: 229,
                                                columnNumber: 47
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "px-3 py-2 text-sm text-foreground hover:bg-muted rounded-lg",
                                            children: "Connexion"
                                        }, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 234,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/signup",
                                            className: "px-3 py-2 text-sm bg-primary text-primary-foreground rounded-lg",
                                            children: "S'inscrire"
                                        }, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                isOpen && isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden mt-2 rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-4 space-y-4 shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-2 pb-2 border-b border-border flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$language$2d$switcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                lineNumber: 250,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-3",
                            children: divisions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "rounded-xl border border-border/70 bg-card px-3 py-3 hover:border-primary/50 hover:text-primary transition flex flex-col gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                            className: "h-5 w-5 md:h-4 md:w-4 md:text-primary text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] rounded-full px-2 py-1 bg-primary/10 text-primary font-semibold",
                                                    children: item.badge
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                "Solutions ",
                                                item.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, item.href, true, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                    lineNumber: 254,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2",
                            children: [
                                navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: `rounded-xl px-4 py-3 text-sm font-medium transition ${link.mobileClasses} hover:bg-primary/5`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(link.icon, {
                                                    className: "h-5 w-5 md:h-4 md:w-4 md:text-primary text-muted-foreground"
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base md:text-sm",
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 280,
                                            columnNumber: 19
                                        }, this)
                                    }, link.href, false, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                        lineNumber: 275,
                                        columnNumber: 17
                                    }, this)),
                                user?.vendorStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: user.vendorStatus === "approved" ? "/market/publication-space" : "/profile/vendor-status",
                                    className: "rounded-xl px-3 py-2 text-sm font-semibold text-accent hover:text-primary transition inline-flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                            lineNumber: 291,
                                            columnNumber: 19
                                        }, this),
                                        user.vendorStatus === "approved" ? "Espace de Publication" : "État du Compte"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                    lineNumber: 287,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/profile",
                                    className: "rounded-xl px-3 py-2 text-sm text-foreground hover:bg-primary/10 transition",
                                    children: "Profil"
                                }, void 0, false, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                                    lineNumber: 295,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
                    lineNumber: 247,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_s(Navigation, "iiw4IPV80VAGnq0YwzC+b0HtUOg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Navigation;
var _c;
__turbopack_context__.k.register(_c, "Navigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/tabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Tabs;
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c1 = TabsList;
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = TabsTrigger;
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex-1 outline-none', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c3 = TabsContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Tabs");
__turbopack_context__.k.register(_c1, "TabsList");
__turbopack_context__.k.register(_c2, "TabsTrigger");
__turbopack_context__.k.register(_c3, "TabsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/components/navigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/tabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/panels-top-left.js [app-client] (ecmascript) <export default as Layout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/recharts/es6/chart/ComposedChart.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function AdminPage() {
    _s();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pendingVendors, setPendingVendors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [vendorApplications, setVendorApplications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedApplication, setSelectedApplication] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [documentPreviewUrl, setDocumentPreviewUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [blogPosts, setBlogPosts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [requests, setRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [templates, setTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [designs, setDesigns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dashboard");
    const [showTemplateForm, setShowTemplateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDesignForm, setShowDesignForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingTemplate, setEditingTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingDesign, setEditingDesign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            if (!loading && !user) {
                router.push("/login");
            } else if (!loading && user && user.role !== "admin") {
                router.push("/");
            }
        }
    }["AdminPage.useEffect"], [
        user,
        loading,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            if (user?.role === "admin") {
                fetchData();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["AdminPage.useEffect"], [
        user?.role,
        activeTab
    ]);
    const fetchData = async ()=>{
        try {
            setIsLoading(true);
            const token = localStorage.getItem("token");
            if (!token) {
                setIsLoading(false);
                return;
            }
            // Fetch stats for dashboard
            if (activeTab === "dashboard") {
                const statsRes = await fetch("http://localhost:4000/api/v1/admin/stats", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (statsRes.ok) {
                    const statsData = await statsRes.json();
                    setStats(statsData);
                }
            }
            // Fetch users
            if (activeTab === "users") {
                const usersRes = await fetch("http://localhost:4000/api/v1/admin/users", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (usersRes.ok) {
                    const usersData = await usersRes.json();
                    setUsers(usersData);
                }
            }
            // Fetch pending vendors and vendor applications
            if (activeTab === "vendors") {
                console.log('Fetching vendors data...');
                const [vendorsRes, applicationsRes] = await Promise.all([
                    fetch("http://localhost:4000/api/v1/admin/vendors/pending", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }),
                    // Charger TOUTES les demandes (pas seulement pending) pour afficher leur statut
                    fetch("http://localhost:4000/api/v1/vendor/admin/all", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                ]);
                if (vendorsRes.ok) {
                    const vendorsData = await vendorsRes.json();
                    console.log('Pending vendors received:', vendorsData);
                    setPendingVendors(vendorsData);
                } else {
                    console.error('Vendors fetch failed:', vendorsRes.status, vendorsRes.statusText);
                }
                if (applicationsRes.ok) {
                    const applicationsData = await applicationsRes.json();
                    console.log('Vendor applications received:', applicationsData);
                    setVendorApplications(applicationsData);
                } else {
                    console.error('Applications fetch failed:', applicationsRes.status, applicationsRes.statusText);
                }
            }
            // Fetch content
            if (activeTab === "content") {
                const [productsRes, postsRes, requestsRes] = await Promise.all([
                    fetch("http://localhost:4000/api/v1/admin/products", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }),
                    fetch("http://localhost:4000/api/v1/admin/blog-posts", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }),
                    fetch("http://localhost:4000/api/v1/admin/requests", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                ]);
                if (productsRes.ok) setProducts(await productsRes.json());
                if (postsRes.ok) setBlogPosts(await postsRes.json());
                if (requestsRes.ok) setRequests(await requestsRes.json());
            }
            // Fetch templates & designs
            if (activeTab === "templates") {
                const [templatesRes, designsRes] = await Promise.all([
                    fetch("http://localhost:4000/api/v1/admin/templates", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }),
                    fetch("http://localhost:4000/api/v1/admin/designs", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                ]);
                if (templatesRes.ok) setTemplates(await templatesRes.json());
                if (designsRes.ok) setDesigns(await designsRes.json());
            }
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching admin data:", error);
            setIsLoading(false);
        }
    };
    const handleApproveVendor = async (userId)=>{
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:4000/api/v1/admin/vendors/${userId}/approve`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.ok) {
                setPendingVendors(pendingVendors.filter((v)=>v.id !== userId));
            }
        } catch (error) {
            console.error("Error approving vendor:", error);
        }
    };
    const handleRejectVendor = async (userId)=>{
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:4000/api/v1/admin/vendors/${userId}/reject`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.ok) {
                setPendingVendors(pendingVendors.filter((v)=>v.id !== userId));
            }
        } catch (error) {
            console.error("Error rejecting vendor:", error);
        }
    };
    const handleApproveApplication = async (applicationId)=>{
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:4000/api/v1/vendor/admin/${applicationId}/approve`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.ok) {
                const data = await res.json();
                alert(`✅ Demande approuvée avec succès!\n\nUn code d'activation a été envoyé par email au vendeur.`);
                // Mettre à jour le statut localement au lieu de filtrer
                setVendorApplications(vendorApplications.map((a)=>a.id === applicationId ? {
                        ...a,
                        status: 'approved'
                    } : a));
                // Recharger les données
                fetchData();
            } else {
                const error = await res.json();
                alert(`❌ Erreur: ${error.error || 'Erreur lors de l\'approbation'}`);
            }
        } catch (error) {
            console.error("Error approving application:", error);
            alert("❌ Erreur de connexion au serveur");
        }
    };
    const handleRejectApplication = async (applicationId)=>{
        const reason = prompt("Raison du rejet (optionnel):");
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:4000/api/v1/vendor/admin/${applicationId}/reject`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    reason: reason || "Non spécifié"
                })
            });
            if (res.ok) {
                alert("✅ Demande rejetée. Un email a été envoyé au demandeur.");
                // Mettre à jour le statut localement
                setVendorApplications(vendorApplications.map((a)=>a.id === applicationId ? {
                        ...a,
                        status: 'rejected',
                        rejectionReason: reason || "Non spécifié"
                    } : a));
                // Recharger les données
                fetchData();
            } else {
                const error = await res.json();
                alert(`❌ Erreur: ${error.error || 'Erreur lors du rejet'}`);
            }
        } catch (error) {
            console.error("Error rejecting application:", error);
            alert("❌ Erreur de connexion au serveur");
        }
    };
    const handleDeleteUser = async (userId)=>{
        if (!confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) return;
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:4000/api/v1/admin/users/${userId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.ok) {
                setUsers(users.filter((u)=>u.id !== userId));
            }
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };
    const handleUpdateUserRole = async (userId, newRole)=>{
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:4000/api/v1/admin/users/${userId}/role`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    role: newRole
                })
            });
            if (res.ok) {
                const updatedUser = await res.json();
                setUsers(users.map((u)=>u.id === userId ? {
                        ...u,
                        role: updatedUser.role
                    } : u));
            }
        } catch (error) {
            console.error("Error updating user role:", error);
        }
    };
    const handleCreateTemplate = async (data)=>{
        try {
            const token = localStorage.getItem("token");
            const res = await fetch("http://localhost:4000/api/v1/admin/templates", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                const newTemplate = await res.json();
                setTemplates([
                    newTemplate,
                    ...templates
                ]);
                setShowTemplateForm(false);
            }
        } catch (error) {
            console.error("Error creating template:", error);
        }
    };
    const handleUpdateTemplate = async (id, data)=>{
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:4000/api/v1/admin/templates/${id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                const updatedTemplate = await res.json();
                setTemplates(templates.map((t)=>t.id === id ? updatedTemplate : t));
                setEditingTemplate(null);
            }
        } catch (error) {
            console.error("Error updating template:", error);
        }
    };
    const handleDeleteTemplate = async (id)=>{
        if (!confirm("Êtes-vous sûr de vouloir supprimer ce template ?")) return;
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:4000/api/v1/admin/templates/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.ok) {
                setTemplates(templates.filter((t)=>t.id !== id));
            }
        } catch (error) {
            console.error("Error deleting template:", error);
        }
    };
    const handleCreateDesign = async (data)=>{
        try {
            const token = localStorage.getItem("token");
            const res = await fetch("http://localhost:4000/api/v1/admin/designs", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                const newDesign = await res.json();
                setDesigns([
                    newDesign,
                    ...designs
                ]);
                setShowDesignForm(false);
            }
        } catch (error) {
            console.error("Error creating design:", error);
        }
    };
    const handleUpdateDesign = async (id, data)=>{
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:4000/api/v1/admin/designs/${id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (res.ok) {
                const updatedDesign = await res.json();
                setDesigns(designs.map((d)=>d.id === id ? updatedDesign : d));
                setEditingDesign(null);
            }
        } catch (error) {
            console.error("Error updating design:", error);
        }
    };
    const handleDeleteDesign = async (id)=>{
        if (!confirm("Êtes-vous sûr de vouloir supprimer ce design ?")) return;
        try {
            const token = localStorage.getItem("token");
            const res = await fetch(`http://localhost:4000/api/v1/admin/designs/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (res.ok) {
                setDesigns(designs.filter((d)=>d.id !== id));
            }
        } catch (error) {
            console.error("Error deleting design:", error);
        }
    };
    if (loading || isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 595,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "Chargement..."
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 596,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 594,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
            lineNumber: 593,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return null;
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                    lineNumber: 609,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center h-96",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                    lineNumber: 613,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Chargement du tableau de bord..."
                                }, void 0, false, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                    lineNumber: 614,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                            lineNumber: 612,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 611,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                    lineNumber: 610,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
            lineNumber: 608,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$navigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 628,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold mb-2",
                                children: "Tableau de bord Admin"
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                lineNumber: 632,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Gérer votre plateforme LUMYNIS"
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                lineNumber: 633,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 631,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                        value: activeTab,
                        onValueChange: setActiveTab,
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                className: "grid w-full grid-cols-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "dashboard",
                                        children: "Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                        lineNumber: 638,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "users",
                                        children: "Utilisateurs"
                                    }, void 0, false, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                        lineNumber: 639,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "vendors",
                                        children: "Vendeurs"
                                    }, void 0, false, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                        lineNumber: 640,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "content",
                                        children: "Contenu"
                                    }, void 0, false, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                        lineNumber: 641,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                        value: "templates",
                                        children: "Templates & Designs"
                                    }, void 0, false, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                        lineNumber: 642,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                lineNumber: 637,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "dashboard",
                                className: "space-y-6",
                                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center h-96",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                lineNumber: 650,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "Chargement des statistiques..."
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                lineNumber: 651,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                        lineNumber: 649,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                    lineNumber: 648,
                                    columnNumber: 15
                                }, this) : stats ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    className: "text-sm font-medium",
                                                                    children: "Total Utilisateurs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 659,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                    className: "h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 660,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold",
                                                                children: stats.totalUsers
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 663,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 662,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    className: "text-sm font-medium",
                                                                    children: "Produits"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 669,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                                    className: "h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 670,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 668,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold",
                                                                children: stats.totalProducts
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 673,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 672,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    className: "text-sm font-medium",
                                                                    children: "Articles Blog"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 679,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                    className: "h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 680,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 678,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold",
                                                                children: stats.totalBlogPosts
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 683,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 682,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 677,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    className: "text-sm font-medium",
                                                                    children: "Demandes"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 689,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                                    className: "h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 690,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 688,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold",
                                                                children: stats.totalRequests
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 693,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 692,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 687,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 656,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    className: "text-sm font-medium",
                                                                    children: "Templates"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 701,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                                                                    className: "h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 702,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold",
                                                                children: stats.totalTemplates
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 705,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 704,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    className: "text-sm font-medium",
                                                                    children: "Designs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 711,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                                                    className: "h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 712,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 710,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold",
                                                                children: stats.totalDesigns
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 715,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 714,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    className: "text-sm font-medium",
                                                                    children: "Téléchargements"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 721,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    className: "h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 722,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 720,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold",
                                                                children: stats.totalDownloads
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 725,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 724,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 719,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    className: "text-sm font-medium",
                                                                    children: "Achats"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 731,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                    className: "h-4 w-4 text-muted-foreground"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 732,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 730,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-2xl font-bold",
                                                                children: stats.totalPurchases
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 735,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 734,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 729,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 698,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 md:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    children: "Tous les utilisateurs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 743,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                    children: "Liste complète des utilisateurs de la base de données"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 744,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 742,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-4 max-h-64 overflow-y-auto",
                                                                children: stats.allUsers.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium",
                                                                                        children: user.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 751,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-gray-500",
                                                                                        children: user.email
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 752,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-gray-400",
                                                                                        children: [
                                                                                            "Inscrit le ",
                                                                                            new Date(user.createdAt).toLocaleDateString('fr-FR')
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 753,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 750,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                children: user.role
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 757,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, user.id, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 749,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 747,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 746,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 741,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    children: "Répartition par rôle"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 766,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                    children: "Distribution des utilisateurs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 767,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 765,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-4",
                                                                children: stats.usersByRole.map((roleData)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "capitalize",
                                                                                children: roleData.role
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 773,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                variant: "outline",
                                                                                children: roleData._count
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 774,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, roleData.role, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 772,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 770,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 769,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 764,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 740,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 785,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Croissance utilisateurs (7 derniers jours)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 784,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 783,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                        width: "100%",
                                                        height: 300,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                                            data: stats.userGrowth,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                    strokeDasharray: "3 3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 792,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                    dataKey: "date",
                                                                    tickFormatter: (dateStr)=>new Date(dateStr).toLocaleDateString('fr-FR', {
                                                                            month: 'short',
                                                                            day: 'numeric'
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 793,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 797,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    formatter: (value)=>value,
                                                                    labelFormatter: (dateStr)=>new Date(dateStr).toLocaleDateString('fr-FR'),
                                                                    contentStyle: {
                                                                        backgroundColor: '#f3f4f6',
                                                                        border: '1px solid #d1d5db'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 798,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 803,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                                    type: "monotone",
                                                                    dataKey: "count",
                                                                    stroke: "#3b82f6",
                                                                    strokeWidth: 2,
                                                                    dot: {
                                                                        fill: '#3b82f6',
                                                                        r: 4
                                                                    },
                                                                    activeDot: {
                                                                        r: 6
                                                                    },
                                                                    name: "Nouveaux utilisateurs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 804,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 791,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 789,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 782,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 822,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Téléchargements (7 jours)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 821,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            children: "Templates & Designs téléchargés par jour"
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 825,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 820,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                        width: "100%",
                                                        height: 300,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                                            data: stats.downloadStats,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                    strokeDasharray: "3 3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 830,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                    dataKey: "date",
                                                                    tickFormatter: (dateStr)=>new Date(dateStr).toLocaleDateString('fr-FR', {
                                                                            month: 'short',
                                                                            day: 'numeric'
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 831,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {}, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 835,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    formatter: (value)=>value,
                                                                    labelFormatter: (dateStr)=>new Date(dateStr).toLocaleDateString('fr-FR'),
                                                                    contentStyle: {
                                                                        backgroundColor: '#f3f4f6',
                                                                        border: '1px solid #d1d5db'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 836,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 841,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                    dataKey: "template",
                                                                    fill: "#3b82f6",
                                                                    name: "Templates"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 842,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                    dataKey: "design",
                                                                    fill: "#a855f7",
                                                                    name: "Designs"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 843,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                                    type: "monotone",
                                                                    dataKey: "total",
                                                                    stroke: "#10b981",
                                                                    strokeWidth: 2,
                                                                    name: "Total"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 844,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 829,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 828,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 827,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 819,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 854,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Achats & Revenus (7 jours)"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 853,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            children: "Ventes et revenus générés par jour"
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 857,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 852,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                                        width: "100%",
                                                        height: 300,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$ComposedChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposedChart"], {
                                                            data: stats.purchaseStats.map((purchase, idx)=>({
                                                                    ...purchase,
                                                                    revenue: stats.revenueStats[idx]?.revenue || 0
                                                                })),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                                                    strokeDasharray: "3 3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 865,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                                    dataKey: "date",
                                                                    tickFormatter: (dateStr)=>new Date(dateStr).toLocaleDateString('fr-FR', {
                                                                            month: 'short',
                                                                            day: 'numeric'
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 866,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                                    yAxisId: "left"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 870,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                                    yAxisId: "right",
                                                                    orientation: "right"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 871,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                                    formatter: (value)=>typeof value === 'number' ? value.toFixed(2) : value,
                                                                    labelFormatter: (dateStr)=>new Date(dateStr).toLocaleDateString('fr-FR'),
                                                                    contentStyle: {
                                                                        backgroundColor: '#f3f4f6',
                                                                        border: '1px solid #d1d5db'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 872,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {}, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 877,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                                                    yAxisId: "left",
                                                                    dataKey: "total",
                                                                    fill: "#ef4444",
                                                                    name: "Nombre d'achats"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 878,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                                    yAxisId: "right",
                                                                    type: "monotone",
                                                                    dataKey: "revenue",
                                                                    stroke: "#10b981",
                                                                    strokeWidth: 2,
                                                                    name: "Revenus (€)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 879,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 861,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 860,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 859,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 851,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-4 md:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                            className: "h-5 w-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                            lineNumber: 890,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Top Téléchargements"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 889,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                    children: "Les plus téléchargés"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 893,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 888,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: stats.topDownloads.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium text-sm",
                                                                                        children: item.itemName
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 900,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        variant: "outline",
                                                                                        className: "text-xs",
                                                                                        children: item.itemType
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 901,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 899,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                children: [
                                                                                    item._count,
                                                                                    " DL"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 903,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 898,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 896,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 895,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 887,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                                            className: "h-5 w-5"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                            lineNumber: 913,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Top Ventes"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 912,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                    children: "Les plus vendus"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 916,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 911,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "space-y-3",
                                                                children: stats.topPurchases.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium text-sm",
                                                                                        children: item.itemName
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 923,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex gap-2 items-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                variant: "outline",
                                                                                                className: "text-xs",
                                                                                                children: item.itemType
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                lineNumber: 925,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                className: "text-xs text-green-600 font-semibold",
                                                                                                children: [
                                                                                                    item._sum.amount.toFixed(2),
                                                                                                    "€"
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                lineNumber: 926,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 924,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 922,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                children: [
                                                                                    item._count,
                                                                                    " ventes"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 931,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, index, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 921,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 919,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 918,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 910,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 886,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-12",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "Aucune donnée disponible"
                                    }, void 0, false, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                        lineNumber: 941,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                    lineNumber: 940,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                lineNumber: 646,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "users",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "Gestion des utilisateurs"
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 950,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: [
                                                        "Total: ",
                                                        users.length,
                                                        " utilisateurs"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 951,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 949,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: users.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between p-4 border rounded-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium",
                                                                        children: user.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 958,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: user.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 959,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-400",
                                                                        children: [
                                                                            "Inscrit le ",
                                                                            new Date(user.createdAt).toLocaleDateString('fr-FR')
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 960,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 957,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        value: user.role,
                                                                        onChange: (e)=>handleUpdateUserRole(user.id, e.target.value),
                                                                        className: "px-3 py-1 border rounded",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "user",
                                                                                children: "User"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 970,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "developer",
                                                                                children: "Developer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 971,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "designer",
                                                                                children: "Designer"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 972,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "vendor",
                                                                                children: "Vendor"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 973,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: "admin",
                                                                                children: "Admin"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 974,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 965,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "destructive",
                                                                        size: "sm",
                                                                        onClick: ()=>handleDeleteUser(user.id),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                            lineNumber: 981,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 976,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 964,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, user.id, true, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 956,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                lineNumber: 954,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 953,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                    lineNumber: 948,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                lineNumber: 947,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "vendors",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        children: "Toutes les demandes vendeurs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 995,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                        children: [
                                                            vendorApplications.length,
                                                            " demande",
                                                            vendorApplications.length > 1 ? 's' : '',
                                                            " au total",
                                                            vendorApplications.filter((a)=>a.status === 'pending').length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-2 text-yellow-500",
                                                                children: [
                                                                    "(",
                                                                    vendorApplications.filter((a)=>a.status === 'pending').length,
                                                                    " en attente)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 999,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 996,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                lineNumber: 994,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: vendorApplications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center py-12",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            className: "h-16 w-16 mx-auto text-gray-300 mb-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1008,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-500 text-lg font-medium",
                                                            children: "Aucune demande"
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1009,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-sm mt-2",
                                                            children: "Les nouvelles demandes apparaîtront ici"
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1010,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1007,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-4",
                                                    children: vendorApplications.map((application)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-4 border-2 rounded-lg hover:shadow-md transition-all cursor-pointer ${application.status === 'approved' ? 'border-green-700 bg-green-950' : application.status === 'rejected' ? 'border-red-700 bg-red-950' : 'border-blue-700 bg-blue-950'}`,
                                                            onClick: ()=>{
                                                                setSelectedApplication(application);
                                                                setIsModalOpen(true);
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-3 mb-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                                        className: "h-5 w-5 text-blue-300"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1032,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                        className: "font-semibold text-lg text-white",
                                                                                        children: [
                                                                                            application.firstName,
                                                                                            " ",
                                                                                            application.lastName
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1033,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        variant: "secondary",
                                                                                        className: "bg-blue-700 text-blue-100",
                                                                                        children: application.storeType
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1036,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    application.status === 'approved' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        className: "bg-green-600 text-white",
                                                                                        children: "✓ Approuvé"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1039,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    application.status === 'rejected' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        className: "bg-red-600 text-white",
                                                                                        children: "✗ Rejeté"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1042,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    application.status === 'pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        className: "bg-yellow-600 text-white",
                                                                                        children: "⏳ En attente"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1045,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1031,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "grid md:grid-cols-3 gap-4 text-sm text-blue-200",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-blue-100",
                                                                                                children: "Email:"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                lineNumber: 1050,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                children: application.email
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                lineNumber: 1051,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1049,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-blue-100",
                                                                                                children: "Boutique:"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                lineNumber: 1054,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                children: application.storeName
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                lineNumber: 1055,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1053,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "font-medium text-blue-100",
                                                                                                children: "Date:"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                lineNumber: 1058,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                children: new Date(application.createdAt).toLocaleDateString('fr-FR')
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                lineNumber: 1059,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1057,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1048,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1030,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "ghost",
                                                                        size: "sm",
                                                                        className: "text-blue-300 hover:text-blue-100 hover:bg-blue-900",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                            className: "h-4 w-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                            lineNumber: 1064,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1063,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1029,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, application.id, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1015,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1013,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                lineNumber: 1005,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                        lineNumber: 993,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                                        open: isModalOpen,
                                        onOpenChange: setIsModalOpen,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                            className: "max-w-3xl max-h-[90vh] overflow-y-auto",
                                            children: selectedApplication && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                                className: "text-2xl",
                                                                children: [
                                                                    "Demande de ",
                                                                    selectedApplication.firstName,
                                                                    " ",
                                                                    selectedApplication.lastName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1080,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                                                children: [
                                                                    "Soumise le ",
                                                                    new Date(selectedApplication.createdAt).toLocaleDateString('fr-FR'),
                                                                    " à",
                                                                    ' ',
                                                                    new Date(selectedApplication.createdAt).toLocaleTimeString('fr-FR')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1083,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 1079,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-6 py-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 bg-blue-900 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-lg mb-3 flex items-center gap-2 text-white",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                                className: "h-5 w-5 text-blue-300"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1093,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Informations personnelles"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1092,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid md:grid-cols-2 gap-3 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-blue-200",
                                                                                        children: "Prénom"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1098,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium text-white",
                                                                                        children: selectedApplication.firstName
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1099,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1097,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-blue-200",
                                                                                        children: "Nom"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1102,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium text-white",
                                                                                        children: selectedApplication.lastName
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1103,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1101,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-blue-200",
                                                                                        children: "Email"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1106,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium text-white",
                                                                                        children: selectedApplication.email
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1107,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1105,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-blue-200",
                                                                                        children: "Téléphone"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1110,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium text-white",
                                                                                        children: selectedApplication.phone
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1111,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1109,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1096,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1091,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 bg-green-900 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-lg mb-3 flex items-center gap-2 text-white",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                                className: "h-5 w-5 text-green-300"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1119,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Documents d'identité"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1118,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "grid md:grid-cols-2 gap-3 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-green-200",
                                                                                        children: "Type de document"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1124,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium text-white",
                                                                                        children: selectedApplication.documentType
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1125,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1123,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-green-200",
                                                                                        children: "Numéro de document"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1128,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium text-white",
                                                                                        children: selectedApplication.documentNumber
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1129,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1127,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1122,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    selectedApplication.documentFilePath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-3 p-3 bg-green-800 rounded border border-green-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-green-200 mb-2",
                                                                                children: "Fichier téléversé:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1134,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        variant: "outline",
                                                                                        className: "flex items-center gap-2 bg-green-700 text-green-100 border-green-600",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                                                                className: "h-3 w-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                lineNumber: 1137,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            "Document scanné"
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1136,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                        size: "sm",
                                                                                        variant: "ghost",
                                                                                        className: "text-green-300 hover:text-green-200 hover:bg-green-800",
                                                                                        onClick: ()=>{
                                                                                            let filePath = selectedApplication.documentFilePath;
                                                                                            console.log('Document path from DB:', filePath);
                                                                                            // Le chemin vient déjà au bon format depuis la DB: /uploads/vendor-documents/doc-xxx.jpeg
                                                                                            // Pas besoin de transformation
                                                                                            const fullUrl = `http://localhost:4000${filePath}`;
                                                                                            console.log('Full preview URL:', fullUrl);
                                                                                            setDocumentPreviewUrl(fullUrl);
                                                                                        },
                                                                                        children: "Voir le document"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1140,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1135,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1133,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1117,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-4 bg-purple-900 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-lg mb-3 flex items-center gap-2 text-white",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                                                className: "h-5 w-5 text-purple-300"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1165,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            "Informations sur la boutique"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1164,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-3 text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-purple-200",
                                                                                        children: "Nom de la boutique"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1170,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium text-lg text-white",
                                                                                        children: selectedApplication.storeName
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1171,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1169,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-purple-200",
                                                                                        children: "Type de boutique"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1174,
                                                                                        columnNumber: 29
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        variant: "secondary",
                                                                                        className: "mt-1 bg-purple-700 text-purple-100 border-purple-600",
                                                                                        children: selectedApplication.storeType
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1175,
                                                                                        columnNumber: 29
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1173,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            selectedApplication.storeDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-purple-200",
                                                                                        children: "Description"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1181,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "font-medium mt-1 text-white",
                                                                                        children: selectedApplication.storeDescription
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                        lineNumber: 1182,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1180,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1168,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1163,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 1089,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                                        className: "flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                variant: "outline",
                                                                onClick: ()=>setIsModalOpen(false),
                                                                children: "Fermer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1190,
                                                                columnNumber: 23
                                                            }, this),
                                                            selectedApplication.status === 'approved' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 px-4 py-2 bg-green-900 text-green-100 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1200,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Demande approuvée"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1201,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1199,
                                                                columnNumber: 25
                                                            }, this),
                                                            selectedApplication.status === 'rejected' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 px-4 py-2 bg-red-900 text-red-100 rounded-lg",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1206,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Demande rejetée"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1207,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1205,
                                                                columnNumber: 25
                                                            }, this),
                                                            selectedApplication.status === 'pending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "destructive",
                                                                        onClick: ()=>{
                                                                            handleRejectApplication(selectedApplication.id);
                                                                            setIsModalOpen(false);
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                                className: "h-4 w-4 mr-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1221,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            "Rejeter"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1214,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                        variant: "default",
                                                                        onClick: ()=>{
                                                                            handleApproveApplication(selectedApplication.id);
                                                                            setIsModalOpen(false);
                                                                        },
                                                                        className: "bg-green-600 hover:bg-green-700",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                className: "h-4 w-4 mr-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1232,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            "Approuver"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1224,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 1189,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 1076,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                        lineNumber: 1075,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                                        open: !!documentPreviewUrl,
                                        onOpenChange: (open)=>{
                                            if (!open) setDocumentPreviewUrl(null);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                                            className: "max-w-4xl max-h-[90vh] overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                            children: "Aperçu du document"
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1249,
                                                            columnNumber: 19
                                                        }, this),
                                                        documentPreviewUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500 mt-2",
                                                            children: documentPreviewUrl
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1251,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1248,
                                                    columnNumber: 17
                                                }, this),
                                                documentPreviewUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-full bg-gray-100 rounded-lg overflow-auto flex items-center justify-center",
                                                    style: {
                                                        maxHeight: 'calc(90vh - 200px)',
                                                        minHeight: '400px'
                                                    },
                                                    children: documentPreviewUrl.toLowerCase().endsWith('.pdf') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                        src: documentPreviewUrl,
                                                        className: "w-full",
                                                        style: {
                                                            height: '100%',
                                                            minHeight: '400px'
                                                        },
                                                        title: "Document PDF"
                                                    }, void 0, false, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 1257,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: documentPreviewUrl,
                                                        alt: "Document",
                                                        className: "max-w-full max-h-full object-contain",
                                                        crossOrigin: "anonymous",
                                                        onLoad: ()=>console.log('Image loaded successfully'),
                                                        onError: (e)=>{
                                                            console.error('Image failed to load:', documentPreviewUrl, e);
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 1264,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1255,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                                                    className: "flex gap-3 mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            onClick: ()=>setDocumentPreviewUrl(null),
                                                            children: "← Retour"
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1278,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "default",
                                                            onClick: ()=>{
                                                                if (documentPreviewUrl) {
                                                                    window.open(documentPreviewUrl, '_blank');
                                                                }
                                                            },
                                                            children: "Ouvrir dans nouvel onglet"
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1284,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1277,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 1247,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                        lineNumber: 1244,
                                        columnNumber: 13
                                    }, this),
                                    pendingVendors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        children: "Vendeurs en attente (ancien système)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 1302,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                        children: [
                                                            pendingVendors.length,
                                                            " vendeur",
                                                            pendingVendors.length > 1 ? 's' : '',
                                                            " sans documentation complète"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 1303,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                lineNumber: 1301,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-4",
                                                    children: pendingVendors.map((vendor)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between p-4 border rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "font-medium",
                                                                                    children: vendor.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                    lineNumber: 1313,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "outline",
                                                                                    className: "flex items-center gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                                            className: "h-3 w-3"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                            lineNumber: 1315,
                                                                                            columnNumber: 31
                                                                                        }, this),
                                                                                        "En attente"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                    lineNumber: 1314,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                            lineNumber: 1312,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-500",
                                                                            children: vendor.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                            lineNumber: 1319,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-400",
                                                                            children: [
                                                                                "Inscrit le ",
                                                                                new Date(vendor.createdAt).toLocaleDateString('fr-FR')
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                            lineNumber: 1320,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 1311,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "default",
                                                                            size: "sm",
                                                                            onClick: ()=>handleApproveVendor(vendor.id),
                                                                            className: "bg-green-600 hover:bg-green-700",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                                    className: "h-4 w-4 mr-1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                    lineNumber: 1331,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                "Approuver"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                            lineNumber: 1325,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                            variant: "destructive",
                                                                            size: "sm",
                                                                            onClick: ()=>handleRejectVendor(vendor.id),
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                                                    className: "h-4 w-4 mr-1"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                    lineNumber: 1339,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                "Rejeter"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                            lineNumber: 1334,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 1324,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, vendor.id, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1310,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1308,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                lineNumber: 1307,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                        lineNumber: 1300,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                lineNumber: 992,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "content",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 md:grid-cols-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            children: "Produits"
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1356,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            children: [
                                                                products.length,
                                                                " produits"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1357,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1355,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 max-h-96 overflow-y-auto",
                                                        children: products.slice(0, 10).map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2 border rounded text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium",
                                                                        children: product.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1363,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-500",
                                                                        children: [
                                                                            product.price,
                                                                            "€ - ",
                                                                            product.category
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1364,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, product.id, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1362,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 1360,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1359,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 1354,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            children: "Articles Blog"
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1373,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            children: [
                                                                blogPosts.length,
                                                                " articles"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1374,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1372,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 max-h-96 overflow-y-auto",
                                                        children: blogPosts.slice(0, 10).map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2 border rounded text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium",
                                                                        children: post.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1380,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-500 text-xs",
                                                                        children: [
                                                                            post.excerpt.substring(0, 50),
                                                                            "..."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1381,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, post.id, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1379,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 1377,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1376,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 1371,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                            children: "Demandes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1390,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                            children: [
                                                                requests.length,
                                                                " demandes"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1391,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1389,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 max-h-96 overflow-y-auto",
                                                        children: requests.slice(0, 10).map((request)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2 border rounded text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-medium",
                                                                        children: request.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1397,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-500 text-xs",
                                                                        children: [
                                                                            request.user?.name || 'Anonyme',
                                                                            " - ",
                                                                            request.status
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1398,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, request.id, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1396,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 1394,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1393,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 1388,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                    lineNumber: 1353,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                lineNumber: 1352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                                value: "templates",
                                className: "space-y-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panels$2d$top$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layout$3e$__["Layout"], {
                                                                                className: "h-5 w-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1418,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "Templates"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1417,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                        children: [
                                                                            templates.length,
                                                                            " templates (Web & Mobile)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1421,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1416,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: ()=>setShowTemplateForm(true),
                                                                size: "sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "h-4 w-4 mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1424,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Ajouter"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1423,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 1415,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1414,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: [
                                                        showTemplateForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateForm, {
                                                            onSubmit: handleCreateTemplate,
                                                            onCancel: ()=>setShowTemplateForm(false)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1431,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3 max-h-96 overflow-y-auto",
                                                            children: templates.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 border rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "font-medium",
                                                                                                    children: template.name
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                    lineNumber: 1442,
                                                                                                    columnNumber: 31
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                    variant: "outline",
                                                                                                    children: template.category
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                    lineNumber: 1443,
                                                                                                    columnNumber: 31
                                                                                                }, this),
                                                                                                template.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                    variant: "default",
                                                                                                    children: "Featured"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                    lineNumber: 1444,
                                                                                                    columnNumber: 53
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                            lineNumber: 1441,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm text-gray-600 mt-1",
                                                                                            children: [
                                                                                                template.description.substring(0, 80),
                                                                                                "..."
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                            lineNumber: 1446,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-semibold text-blue-600 mt-1",
                                                                                            children: [
                                                                                                template.price,
                                                                                                "€"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                            lineNumber: 1447,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                    lineNumber: 1440,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                            variant: "outline",
                                                                                            size: "sm",
                                                                                            onClick: ()=>setEditingTemplate(template),
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                                                className: "h-3 w-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                lineNumber: 1455,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                            lineNumber: 1450,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                            variant: "destructive",
                                                                                            size: "sm",
                                                                                            onClick: ()=>handleDeleteTemplate(template.id),
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                                className: "h-3 w-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                lineNumber: 1462,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                            lineNumber: 1457,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                    lineNumber: 1449,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                            lineNumber: 1439,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        editingTemplate?.id === template.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-3 pt-3 border-t",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TemplateForm, {
                                                                                template: editingTemplate,
                                                                                onSubmit: (data)=>handleUpdateTemplate(template.id, data),
                                                                                onCancel: ()=>setEditingTemplate(null)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1468,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                            lineNumber: 1467,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, template.id, true, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 1438,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1436,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1429,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 1413,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                        className: "flex items-center gap-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
                                                                                className: "h-5 w-5"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1487,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            "Designs"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1486,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                        children: [
                                                                            designs.length,
                                                                            " designs (Logo, UI, Graphics)"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1490,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1485,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                onClick: ()=>setShowDesignForm(true),
                                                                size: "sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                        className: "h-4 w-4 mr-1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                        lineNumber: 1493,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    "Ajouter"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                lineNumber: 1492,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                        lineNumber: 1484,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1483,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    children: [
                                                        showDesignForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignForm, {
                                                            onSubmit: handleCreateDesign,
                                                            onCancel: ()=>setShowDesignForm(false)
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1500,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3 max-h-96 overflow-y-auto",
                                                            children: designs.map((design)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 border rounded-lg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-start justify-between",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "flex items-center gap-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "font-medium",
                                                                                                    children: design.title
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                    lineNumber: 1511,
                                                                                                    columnNumber: 31
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                    variant: "outline",
                                                                                                    children: design.category
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                    lineNumber: 1512,
                                                                                                    columnNumber: 31
                                                                                                }, this),
                                                                                                design.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                                    variant: "default",
                                                                                                    children: "Featured"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                    lineNumber: 1513,
                                                                                                    columnNumber: 51
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                            lineNumber: 1510,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm text-gray-600 mt-1",
                                                                                            children: [
                                                                                                design.description.substring(0, 80),
                                                                                                "..."
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                            lineNumber: 1515,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                            className: "text-sm font-semibold text-blue-600 mt-1",
                                                                                            children: [
                                                                                                design.price,
                                                                                                "€"
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                            lineNumber: 1516,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                    lineNumber: 1509,
                                                                                    columnNumber: 27
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "flex gap-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                            variant: "outline",
                                                                                            size: "sm",
                                                                                            onClick: ()=>setEditingDesign(design),
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                                                className: "h-3 w-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                lineNumber: 1524,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                            lineNumber: 1519,
                                                                                            columnNumber: 29
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                                            variant: "destructive",
                                                                                            size: "sm",
                                                                                            onClick: ()=>handleDeleteDesign(design.id),
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                                                className: "h-3 w-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                                lineNumber: 1531,
                                                                                                columnNumber: 31
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                            lineNumber: 1526,
                                                                                            columnNumber: 29
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                    lineNumber: 1518,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                            lineNumber: 1508,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        editingDesign?.id === design.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "mt-3 pt-3 border-t",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DesignForm, {
                                                                                design: editingDesign,
                                                                                onSubmit: (data)=>handleUpdateDesign(design.id, data),
                                                                                onCancel: ()=>setEditingDesign(null)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                                lineNumber: 1537,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                            lineNumber: 1536,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, design.id, true, {
                                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                                    lineNumber: 1507,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                            lineNumber: 1505,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                                    lineNumber: 1498,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                            lineNumber: 1482,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                    lineNumber: 1411,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                                lineNumber: 1410,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 636,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 630,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
        lineNumber: 627,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "C2h81RLM9Pfv/pLYsR3GLvKlKRQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminPage;
// Template Form Component
function TemplateForm({ template, onSubmit, onCancel }) {
    _s1();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: template?.name || '',
        description: template?.description || '',
        category: template?.category || 'web',
        price: template?.price || 0,
        imageUrl: template?.imageUrl || '',
        demoUrl: template?.demoUrl || '',
        downloadUrl: template?.downloadUrl || '',
        featured: template?.featured || false
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(formData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-3 p-3 bg-gray-50 rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Nom du template",
                value: formData.name,
                onChange: (e)=>setFormData({
                        ...formData,
                        name: e.target.value
                    }),
                className: "w-full px-3 py-2 border rounded",
                required: true
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1581,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                placeholder: "Description",
                value: formData.description,
                onChange: (e)=>setFormData({
                        ...formData,
                        description: e.target.value
                    }),
                className: "w-full px-3 py-2 border rounded",
                rows: 3,
                required: true
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1589,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: formData.category,
                onChange: (e)=>setFormData({
                        ...formData,
                        category: e.target.value
                    }),
                className: "w-full px-3 py-2 border rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "web",
                        children: "Web"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1602,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "mobile",
                        children: "Mobile"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1603,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "design",
                        children: "Design"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1604,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1597,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                placeholder: "Prix",
                value: formData.price,
                onChange: (e)=>setFormData({
                        ...formData,
                        price: parseFloat(e.target.value)
                    }),
                className: "w-full px-3 py-2 border rounded",
                step: "0.01",
                required: true
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1606,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "url",
                placeholder: "URL de l'image (optionnel)",
                value: formData.imageUrl,
                onChange: (e)=>setFormData({
                        ...formData,
                        imageUrl: e.target.value
                    }),
                className: "w-full px-3 py-2 border rounded"
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "url",
                placeholder: "URL de démo (optionnel)",
                value: formData.demoUrl,
                onChange: (e)=>setFormData({
                        ...formData,
                        demoUrl: e.target.value
                    }),
                className: "w-full px-3 py-2 border rounded"
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1622,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "url",
                placeholder: "URL de téléchargement (optionnel)",
                value: formData.downloadUrl,
                onChange: (e)=>setFormData({
                        ...formData,
                        downloadUrl: e.target.value
                    }),
                className: "w-full px-3 py-2 border rounded"
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1629,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: formData.featured,
                        onChange: (e)=>setFormData({
                                ...formData,
                                featured: e.target.checked
                            })
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1637,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: "Featured"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1642,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1636,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        size: "sm",
                        children: template ? 'Modifier' : 'Créer'
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1645,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        size: "sm",
                        onClick: onCancel,
                        children: "Annuler"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1648,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1644,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
        lineNumber: 1580,
        columnNumber: 5
    }, this);
}
_s1(TemplateForm, "WIk/g4MVndH0AJANygU/XbT/5VI=");
_c1 = TemplateForm;
// Design Form Component
function DesignForm({ design, onSubmit, onCancel }) {
    _s2();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: design?.title || '',
        description: design?.description || '',
        category: design?.category || 'logo',
        imageUrl: design?.imageUrl || '',
        price: design?.price || 0,
        featured: design?.featured || false
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(formData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-3 p-3 bg-gray-50 rounded",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Titre du design",
                value: formData.title,
                onChange: (e)=>setFormData({
                        ...formData,
                        title: e.target.value
                    }),
                className: "w-full px-3 py-2 border rounded",
                required: true
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1678,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                placeholder: "Description",
                value: formData.description,
                onChange: (e)=>setFormData({
                        ...formData,
                        description: e.target.value
                    }),
                className: "w-full px-3 py-2 border rounded",
                rows: 3,
                required: true
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1686,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: formData.category,
                onChange: (e)=>setFormData({
                        ...formData,
                        category: e.target.value
                    }),
                className: "w-full px-3 py-2 border rounded",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "logo",
                        children: "Logo"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1699,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "ui",
                        children: "UI"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1700,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "graphic",
                        children: "Graphic"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1701,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "illustration",
                        children: "Illustration"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1702,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1694,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "url",
                placeholder: "URL de l'image",
                value: formData.imageUrl,
                onChange: (e)=>setFormData({
                        ...formData,
                        imageUrl: e.target.value
                    }),
                className: "w-full px-3 py-2 border rounded",
                required: true
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1704,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "number",
                placeholder: "Prix",
                value: formData.price,
                onChange: (e)=>setFormData({
                        ...formData,
                        price: parseFloat(e.target.value)
                    }),
                className: "w-full px-3 py-2 border rounded",
                step: "0.01",
                required: true
            }, void 0, false, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1712,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: formData.featured,
                        onChange: (e)=>setFormData({
                                ...formData,
                                featured: e.target.checked
                            })
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1722,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: "Featured"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1727,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1721,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        size: "sm",
                        children: design ? 'Modifier' : 'Créer'
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1730,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        size: "sm",
                        onClick: onCancel,
                        children: "Annuler"
                    }, void 0, false, {
                        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                        lineNumber: 1733,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
                lineNumber: 1729,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/app/admin/page.tsx",
        lineNumber: 1677,
        columnNumber: 5
    }, this);
}
_s2(DesignForm, "a+/Apfh0htJWvPgSTlVz9v1f0uc=");
_c2 = DesignForm;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AdminPage");
__turbopack_context__.k.register(_c1, "TemplateForm");
__turbopack_context__.k.register(_c2, "DesignForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=multi-platform-site_Kalvora-PDG-frontend_37759895._.js.map