"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NewNote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NewNote */ \"./components/NewNote.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\n// export async function getStaticProps(){\n//   try {\n//     const response = await axios.get('/api/get-posts');\n//     const {status, data} = response;\n//     console.log(\"Data fetched from the backend\");\n//     return {\n//       props : {\n//         data,\n//       }\n//     }\n//   } catch (error) {\n//     console.log(`could not fetch data -> ${error.message}`);\n//     let data = error.message;\n//     return {\n//       props : {\n//         data\n//       }\n//     }\n//   }\n// }\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var _$data = axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/get-posts\");\n        console.log(_$data);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewNote__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            console.log(data)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTRDO0FBQ2xCO0FBQ1E7O0FBRWxDLDBDQUEwQztBQUMxQyxVQUFVO0FBQ1YsMERBQTBEO0FBQzFELHVDQUF1QztBQUN2QyxvREFBb0Q7QUFDcEQsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsVUFBVTtBQUNWLFFBQVE7QUFDUixzQkFBc0I7QUFDdEIsK0RBQStEO0FBQy9ELGdDQUFnQztBQUNoQyxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixVQUFVO0FBQ1YsUUFBUTtBQUNSLE1BQU07QUFDTixJQUFJO0FBRUosU0FBU0csSUFBSSxHQUFFOztJQUViRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNRSxNQUFJLEdBQUdILGdEQUFTLENBQUMsZ0JBQWdCLENBQUM7UUFDeENLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFJLENBQUMsQ0FBQztLQUNuQixDQUFDO0lBRUYscUJBQ0U7OzBCQUNFLDhEQUFDSiwyREFBTzs7OztvQkFBRztZQUNWTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDOztvQkFDakIsQ0FDSjtDQUNGO0dBYlFELElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQWViLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3Tm90ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9OZXdOb3RlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZ2V0LXBvc3RzJyk7XG4vLyAgICAgY29uc3Qge3N0YXR1cywgZGF0YX0gPSByZXNwb25zZTtcbi8vICAgICBjb25zb2xlLmxvZyhcIkRhdGEgZmV0Y2hlZCBmcm9tIHRoZSBiYWNrZW5kXCIpO1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wcyA6IHtcbi8vICAgICAgICAgZGF0YSxcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5sb2coYGNvdWxkIG5vdCBmZXRjaCBkYXRhIC0+ICR7ZXJyb3IubWVzc2FnZX1gKTtcbi8vICAgICBsZXQgZGF0YSA9IGVycm9yLm1lc3NhZ2U7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzIDoge1xuLy8gICAgICAgICBkYXRhXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbmZ1bmN0aW9uIEhvbWUoKXtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBheGlvcy5nZXQoJy9hcGkvZ2V0LXBvc3RzJyk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH0pXG5cbiAgcmV0dXJuKFxuICAgIDw+XG4gICAgICA8TmV3Tm90ZSAvPlxuICAgICAge2NvbnNvbGUubG9nKGRhdGEpfVxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJOZXdOb3RlIiwiYXhpb3MiLCJ1c2VFZmZlY3QiLCJIb21lIiwiZGF0YSIsImdldCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});