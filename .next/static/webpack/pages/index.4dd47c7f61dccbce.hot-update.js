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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NewNote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NewNote */ \"./components/NewNote.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar _s = $RefreshSig$();\n// export async function getStaticProps(){\n//   try {\n//     const response = await axios.get('/api/get-posts');\n//     const {status, data} = response;\n//     console.log(\"Data fetched from the backend\");\n//     return {\n//       props : {\n//         data,\n//       }\n//     }\n//   } catch (error) {\n//     console.log(`could not fetch data -> ${error.message}`);\n//     let data = error.message;\n//     return {\n//       props : {\n//         data\n//       }\n//     }\n//   }\n// }\nfunction GetNotes() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), notes = ref[0], setNotes = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setLoading(true);\n        fetch(\"/api/get-posts\").then(function(res) {\n            return res.json();\n        }).then(function(note) {\n            setNotes(note);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n        lineNumber: 41,\n        columnNumber: 24\n    }, this);\n    if (notes.length === 0) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Notes Found\"\n    }, void 0, false, {\n        fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n        lineNumber: 42,\n        columnNumber: 33\n    }, this);\n    var data = notes.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map(function(note) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: note.title\n                    }, void 0, false, {\n                        fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: note.data\n                    }, void 0, false, {\n                        fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 11\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(GetNotes, \"e+Qj8lEadTQIYcROuVnJ4J/+oDY=\");\n_c = GetNotes;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewNote__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GetNotes, {}, void 0, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"GetNotes\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTRDO0FBQ2xCO0FBQ2tCOztBQUU1QywwQ0FBMEM7QUFDMUMsVUFBVTtBQUNWLDBEQUEwRDtBQUMxRCx1Q0FBdUM7QUFDdkMsb0RBQW9EO0FBQ3BELGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLFVBQVU7QUFDVixRQUFRO0FBQ1Isc0JBQXNCO0FBQ3RCLCtEQUErRDtBQUMvRCxnQ0FBZ0M7QUFDaEMsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixlQUFlO0FBQ2YsVUFBVTtBQUNWLFFBQVE7QUFDUixNQUFNO0FBQ04sSUFBSTtBQUVKLFNBQVNJLFFBQVEsR0FBRTs7O0lBRWpCLElBQTBCRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CRSxLQUFLLEdBQWNGLEdBQVksR0FBMUIsRUFBRUcsUUFBUSxHQUFJSCxHQUFZLEdBQWhCO0lBQ3RCLElBQWlDQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXpDSSxTQUFTLEdBQWlCSixJQUFlLEdBQWhDLEVBQUVLLFVBQVUsR0FBS0wsSUFBZSxHQUFwQjtJQUU1QkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RNLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQkMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQ3RCQyxJQUFJLENBQUMsU0FBQ0MsR0FBRzttQkFBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUU7U0FBQSxDQUFDLENBQ3pCRixJQUFJLENBQUMsU0FBQ0csSUFBSSxFQUFLO1lBQ2RQLFFBQVEsQ0FBQ08sSUFBSSxDQUFDO1lBQ2RMLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNuQixDQUFDO0tBQ0gsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQUdELFNBQVMsRUFBRSxxQkFBTyw4REFBQ08sR0FBQztrQkFBQyxZQUFVOzs7OztZQUFJO0lBQ3RDLElBQUdULEtBQUssQ0FBQ1UsTUFBTSxLQUFLLENBQUMsRUFBRSxxQkFBTyw4REFBQ0QsR0FBQztrQkFBQyxnQkFBYzs7Ozs7WUFBSTtJQUNuRCxJQUFNLElBQUssR0FBSVQsS0FBSyxDQUFiVyxJQUFJO0lBRVgscUJBQ0UsOERBQUNDLEtBQUc7a0JBQ0RELElBQUksQ0FBQ0UsR0FBRyxDQUFDLFNBQUNMLElBQUksRUFBSztZQUNsQixxQkFDRSw4REFBQ0ksS0FBRzs7a0NBQ0YsOERBQUNFLElBQUU7a0NBQUVOLElBQUksQ0FBQ08sS0FBSzs7Ozs7NkJBQU07a0NBQ3JCLDhEQUFDTixHQUFDO2tDQUFFRCxJQUFJLENBQUNHLElBQUk7Ozs7OzZCQUFLOzs7Ozs7cUJBQ2QsQ0FFUDtTQUNGLENBQUM7Ozs7O1lBQ0UsQ0FDUDtDQUNGO0dBaENRWixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUFtQ2pCLFNBQVNpQixJQUFJLEdBQUU7SUFJYixxQkFDRTs7MEJBQ0UsOERBQUNyQiwyREFBTzs7OztvQkFBRzswQkFDWCw4REFBQ0ksUUFBUTs7OztvQkFBRzs7b0JBQ1gsQ0FDSjtDQUNGO0FBVlFpQixNQUFBQSxJQUFJO0FBWWIsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXdOb3RlIGZyb20gXCIuLi9jb21wb25lbnRzL05ld05vdGVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZ2V0LXBvc3RzJyk7XG4vLyAgICAgY29uc3Qge3N0YXR1cywgZGF0YX0gPSByZXNwb25zZTtcbi8vICAgICBjb25zb2xlLmxvZyhcIkRhdGEgZmV0Y2hlZCBmcm9tIHRoZSBiYWNrZW5kXCIpO1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wcyA6IHtcbi8vICAgICAgICAgZGF0YSxcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5sb2coYGNvdWxkIG5vdCBmZXRjaCBkYXRhIC0+ICR7ZXJyb3IubWVzc2FnZX1gKTtcbi8vICAgICBsZXQgZGF0YSA9IGVycm9yLm1lc3NhZ2U7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzIDoge1xuLy8gICAgICAgICBkYXRhXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbmZ1bmN0aW9uIEdldE5vdGVzKCl7XG5cbiAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddICA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgZmV0Y2goJy9hcGkvZ2V0LXBvc3RzJylcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChub3RlKSA9PiB7XG4gICAgICBzZXROb3Rlcyhub3RlKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSlcbiAgfSwgW10pO1xuXG4gIGlmKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG4gIGlmKG5vdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDxwPk5vIE5vdGVzIEZvdW5kPC9wPlxuICBjb25zdCB7ZGF0YX0gPSBub3RlcztcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZGF0YS5tYXAoKG5vdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzPntub3RlLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICA8cD57bm90ZS5kYXRhfTwvcD4gIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmZ1bmN0aW9uIEhvbWUoKXtcblxuICBcblxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxOZXdOb3RlIC8+XG4gICAgICA8R2V0Tm90ZXMgLz5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiTmV3Tm90ZSIsImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJHZXROb3RlcyIsIm5vdGVzIiwic2V0Tm90ZXMiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIm5vdGUiLCJwIiwibGVuZ3RoIiwiZGF0YSIsImRpdiIsIm1hcCIsImgzIiwidGl0bGUiLCJIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});