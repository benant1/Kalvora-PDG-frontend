module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiCall",
    ()=>apiCall,
    "authApi",
    ()=>authApi,
    "blogApi",
    ()=>blogApi,
    "marketApi",
    ()=>marketApi,
    "requestsApi",
    ()=>requestsApi,
    "userApi",
    ()=>userApi
]);
const API_URL = ("TURBOPACK compile-time value", "http://localhost:4000") || 'http://localhost:4000';
async function apiCall(endpoint, options = {}) {
    const url = `${API_URL}${endpoint}`;
    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    // Merge existing headers
    if (options.headers) {
        const existingHeaders = new Headers(options.headers);
        existingHeaders.forEach((value, key)=>{
            headers.set(key, value);
        });
    }
    // Add token if available
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const response = await fetch(url, {
            ...options,
            headers
        });
        if (!response.ok) {
            const error = await response.json().catch(()=>({
                    error: 'Unknown error'
                }));
            const customError = new Error(error.error || 'API request failed');
            Object.assign(customError, {
                status: response.status,
                statusText: response.statusText,
                response: error
            });
            throw customError;
        }
        return response.json();
    } catch (error) {
        if (error instanceof Error) {
            throw error;
        }
        const customError = new Error('Network or unknown error');
        Object.assign(customError, {
            originalError: error
        });
        throw customError;
    }
}
const authApi = {
    signup: (data)=>apiCall('/api/v1/auth/signup', {
            method: 'POST',
            body: JSON.stringify(data)
        }),
    login: (data)=>apiCall('/api/v1/auth/login', {
            method: 'POST',
            body: JSON.stringify(data)
        }),
    me: ()=>apiCall('/api/v1/auth/me'),
    logout: ()=>apiCall('/api/v1/auth/logout', {
            method: 'POST'
        })
};
const blogApi = {
    getPosts: (query = '')=>apiCall(`/api/v1/blog${query ? `?q=${query}` : ''}`),
    getPost: (slug)=>apiCall(`/api/v1/blog/${slug}`)
};
const marketApi = {
    getProducts: (params = {})=>{
        const query = new URLSearchParams(params).toString();
        return apiCall(`/api/v1/market${query ? `?${query}` : ''}`);
    },
    getProduct: (id)=>apiCall(`/api/v1/market/${id}`)
};
const requestsApi = {
    getRequests: ()=>apiCall('/api/v1/requests'),
    createRequest: (data)=>apiCall('/api/v1/requests', {
            method: 'POST',
            body: JSON.stringify(data)
        }),
    closeRequest: (id)=>apiCall(`/api/v1/requests/${id}/close`, {
            method: 'PATCH'
        })
};
const userApi = {
    updateProfile: (data)=>apiCall('/api/v1/user/profile', {
            method: 'PUT',
            body: JSON.stringify(data)
        }),
    updatePassword: (data)=>apiCall('/api/v1/user/password', {
            method: 'PUT',
            body: JSON.stringify(data)
        }),
    updateAvatar: (avatar)=>apiCall('/api/v1/user/avatar', {
            method: 'PUT',
            body: JSON.stringify({
                avatar
            })
        }),
    deleteAccount: ()=>apiCall('/api/v1/user/account', {
            method: 'DELETE'
        })
};
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/lib/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Load token from localStorage and fetch user on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initAuth = async ()=>{
            try {
                const savedToken = localStorage.getItem('token');
                console.log('Auth init - Checking for saved token:', !!savedToken);
                if (savedToken) {
                    setToken(savedToken);
                    // Fetch user info using the saved token
                    try {
                        console.log('Attempting to fetch user data with token:', savedToken.substring(0, 20) + '...');
                        const userData = await __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].me();
                        console.log('✓ User data fetched successfully:', userData);
                        setUser(userData);
                    } catch (error) {
                        console.error('✗ Failed to fetch user info:', {
                            message: error instanceof Error ? error.message : String(error),
                            status: error?.status,
                            statusText: error?.statusText,
                            response: error?.response
                        });
                        // Clear token if it's invalid
                        console.log('Clearing invalid token from localStorage');
                        localStorage.removeItem('token');
                        setToken(null);
                        setUser(null);
                    }
                } else {
                    console.log('No saved token found - user is not authenticated');
                }
            } finally{
                setLoading(false);
            }
        };
        initAuth();
    }, []);
    const signup = async (data)=>{
        setLoading(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].signup(data);
            localStorage.setItem('token', response.token);
            setToken(response.token);
            setUser(response.user);
        } catch (error) {
            console.error('Signup error:', error);
            throw error;
        } finally{
            setLoading(false);
        }
    };
    const login = async (data)=>{
        setLoading(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authApi"].login(data);
            localStorage.setItem('token', response.token);
            setToken(response.token);
            setUser(response.user);
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        } finally{
            setLoading(false);
        }
    };
    const logout = ()=>{
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };
    const updateUser = (userData)=>{
        if (user) {
            setUser({
                ...user,
                ...userData
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            token,
            loading,
            signup,
            login,
            logout,
            isAuthenticated: !!token,
            updateUser
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/lib/auth-context.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
}),
"[project]/multi-platform-site/Kalvora-PDG-frontend/components/theme-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/multi-platform-site/Kalvora-PDG-frontend/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$multi$2d$platform$2d$site$2f$Kalvora$2d$PDG$2d$frontend$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/multi-platform-site/Kalvora-PDG-frontend/components/theme-provider.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4aa5090f._.js.map