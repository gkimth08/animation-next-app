(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/training-next-app/app/game/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/training-next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/training-next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Page() {
    _s();
    const [gameOver, setGameOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const arrowsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const targetsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const angleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const characterScaleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            if (score < 0) setGameOver(true);
        }
    }["Page.useEffect"], [
        score
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            const gravity = 0.1;
            setCanvasSize(canvas);
            draw(canvas, ctx, gravity);
            const handleResize = {
                "Page.useEffect.handleResize": ()=>setCanvasSize(canvas)
            }["Page.useEffect.handleResize"];
            const mouseMove = {
                "Page.useEffect.mouseMove": (e)=>handleMouseMove(canvas, e)
            }["Page.useEffect.mouseMove"];
            const mouseDown = {
                "Page.useEffect.mouseDown": (e)=>handleMouseDown(canvas, e)
            }["Page.useEffect.mouseDown"];
            const contextMenu = {
                "Page.useEffect.contextMenu": (e)=>handleContextMenu(e)
            }["Page.useEffect.contextMenu"];
            window.addEventListener('resize', handleResize);
            canvas.addEventListener('mousemove', mouseMove);
            canvas.addEventListener('mousedown', mouseDown);
            canvas.addEventListener('contextmenu', contextMenu);
            return ({
                "Page.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    canvas.removeEventListener('mousemove', mouseMove);
                    canvas.removeEventListener('mousedown', mouseDown);
                    canvas.removeEventListener('contextmenu', contextMenu);
                }
            })["Page.useEffect"];
        }
    }["Page.useEffect"], []);
    /**
	 * 캔버스 사이즈
	 * @param canvas 
	 */ const setCanvasSize = (canvas)=>{
        if (window.matchMedia('(min-width: 1024px)').matches) {
            canvas.width = 1200;
            canvas.height = 600;
            characterScaleRef.current = 1;
        } else if (window.matchMedia('(orientation: portrait)').matches) {
            canvas.width = 400;
            canvas.height = 300;
            characterScaleRef.current = 0.5;
        } else {
            canvas.width = 700;
            canvas.height = 300;
            characterScaleRef.current = 0.7;
        }
    };
    /**
	 * 과녁 생성
	 * @param canvas 
	 */ const spawnTarget = (canvas)=>{
        const width = 30;
        const height = 30;
        const y = Math.random() * (canvas.height - height);
        const vx = -(2 + Math.random() * 3);
        const target = {
            x: canvas.width,
            y,
            width,
            height,
            vx
        };
        targetsRef.current.push(target);
    };
    /**
	 * 화살과 과녁 충돌 확인
	 */ const checkCollision = ()=>{
        arrowsRef.current.forEach((arrow)=>{
            targetsRef.current.forEach((target)=>{
                if (arrow.x < target.x + target.width && arrow.x + 30 * characterScaleRef.current > target.x && arrow.y < target.y + target.height && arrow.y + 2 * characterScaleRef.current > target.y) {
                    arrowsRef.current = arrowsRef.current.filter((value)=>value !== arrow);
                    targetsRef.current = targetsRef.current.filter((value)=>value !== target);
                    setScore((prevScore)=>prevScore + 1);
                }
            });
        });
    };
    /**
	 * 캔버스에 그리기
	 * @param canvas 
	 * @param ctx 
	 * @param gravity 
	 */ const draw = (canvas, ctx, gravity)=>{
        const scale = characterScaleRef.current;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        /* 캐릭터 */ ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(32 * scale, canvas.height - 90 * scale, 20 * scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(30 * scale, canvas.height - 70 * scale, 3 * scale, 40 * scale);
        /* 활 */ ctx.save();
        ctx.translate(50 * scale, canvas.height - 80 * scale);
        ctx.rotate(-angleRef.current);
        ctx.strokeStyle = 'brown';
        ctx.lineWidth = 4 * scale;
        ctx.beginPath();
        ctx.arc(0, 0, 30 * scale, -Math.PI / 2, Math.PI / 2);
        ctx.stroke();
        ctx.restore();
        /* 화살 */ arrowsRef.current.forEach((arrow)=>{
            arrow.x += arrow.vx;
            arrow.y += arrow.vy;
            arrow.vy += gravity;
            ctx.fillStyle = 'gray';
            ctx.fillRect(arrow.x, arrow.y, 30 * scale, 2 * scale);
        });
        arrowsRef.current = arrowsRef.current.filter((arrow)=>arrow.y <= canvas.height && arrow.x <= canvas.width);
        /* 과녁 */ if (Math.random() < 0.01) spawnTarget(canvas);
        targetsRef.current.forEach((target)=>{
            target.x += target.vx;
            ctx.fillStyle = 'blue';
            ctx.beginPath();
            ctx.ellipse(target.x, target.y, target.width / 2 * scale, target.height / 2 * scale, 0, 0, Math.PI * 2);
            ctx.fill();
        });
        const beforeTargetCount = targetsRef.current.length;
        targetsRef.current = targetsRef.current.filter((target)=>target.x + target.width > 0);
        const afterTargetCount = targetsRef.current.length;
        const missTargetCount = beforeTargetCount - afterTargetCount;
        if (missTargetCount > 0) setScore((prevScore)=>prevScore - missTargetCount);
        checkCollision();
        requestAnimationFrame(()=>draw(canvas, ctx, gravity));
    };
    /**
	 * 캔버스 위에서 마우스 움직임
	 * @param canvas 
	 * @param e 
	 */ const handleMouseMove = (canvas, e)=>{
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const bowX = 50;
        const bowY = canvas.height - 80;
        const dx = mouseX - bowX;
        const dy = bowY - mouseY;
        angleRef.current = Math.atan2(dy, dx);
    };
    /**
	 * 활쏘기
	 * @param canvas 
	 */ const shootArrow = (canvas)=>{
        const scale = characterScaleRef.current;
        const bowX = 50 * scale;
        const bowY = canvas.height - 80 * scale;
        const speed = 15 * scale;
        const shoot = {
            x: bowX,
            y: bowY,
            vx: speed * Math.cos(angleRef.current),
            vy: -speed * Math.sin(angleRef.current)
        };
        arrowsRef.current.push(shoot);
    };
    /**
	 * 마우스 왼쪽 클릭
	 * @param canvas 
	 * @param e 
	 */ const handleMouseDown = (canvas, e)=>{
        if (e.button === 0) shootArrow(canvas);
    };
    /**
	 * 마우스 우클릭 방지
	 * @param e 
	 * @returns 
	 */ const handleContextMenu = (e)=>e.preventDefault();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex flex-col items-center min-h-screen bg-gray-100 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-7 left-2 md:top-7 md:left-13 lg:top-7 lg:left-77 font-bold bg-white bg-opacity-70 px-2 py-1 rounded",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm sm:text-base md:text-base lg:text-lg font-bold",
                    children: [
                        "점수 : ",
                        score
                    ]
                }, void 0, true, {
                    fileName: "[project]/training-next-app/app/game/page.tsx",
                    lineNumber: 234,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/training-next-app/app/game/page.tsx",
                lineNumber: 233,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "border bg-white mb-4"
            }, void 0, false, {
                fileName: "[project]/training-next-app/app/game/page.tsx",
                lineNumber: 236,
                columnNumber: 4
            }, this),
            gameOver && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center bg-gray bg-opacity-50 backdrop-blur-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl font-bold text-pink-600 mb-10",
                        children: "게임 오버"
                    }, void 0, false, {
                        fileName: "[project]/training-next-app/app/game/page.tsx",
                        lineNumber: 243,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-6 py-3 bg-pink-600 text-white rounded",
                        onClick: ()=>{
                            setGameOver(false);
                            setScore(0);
                            arrowsRef.current = [];
                            targetsRef.current = [];
                        },
                        children: "다시 시작하기"
                    }, void 0, false, {
                        fileName: "[project]/training-next-app/app/game/page.tsx",
                        lineNumber: 244,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/training-next-app/app/game/page.tsx",
                lineNumber: 242,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/training-next-app/app/game/page.tsx",
        lineNumber: 232,
        columnNumber: 3
    }, this);
}
_s(Page, "dLC1X0wgCx0fmYycDM/zbh70Qc0=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/training-next-app/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/training-next-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/training-next-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/training-next-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$training$2d$next$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/training-next-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/training-next-app/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=training-next-app_33b8785f._.js.map