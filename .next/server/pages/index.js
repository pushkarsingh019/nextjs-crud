"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/NewNote.jsx":
/*!********************************!*\
  !*** ./components/NewNote.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction NewNote() {\n    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: note , 1: setNote  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    function createNote(event) {\n        event.preventDefault();\n        let noteData = {\n            title: title,\n            data: note\n        };\n        axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"/api/create-note\", noteData);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: createNote,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"title\",\n                value: title,\n                onChange: (event)=>setTitle(event.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/components/NewNote.jsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/components/NewNote.jsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                type: \"text\",\n                value: note,\n                onChange: (event)=>setNote(event.target.value),\n                placeholder: \"Start typing your note\"\n            }, void 0, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/components/NewNote.jsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/components/NewNote.jsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Create Note\"\n            }, void 0, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/components/NewNote.jsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/components/NewNote.jsx\",\n        lineNumber: 18,\n        columnNumber: 7\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewNote);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld05vdGUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNPO0FBRWpDLFNBQVNFLE9BQU8sR0FBRztJQUNqQixNQUFNLEtBQUNDLEtBQUssTUFBRUMsUUFBUSxNQUFJSCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUN0QyxNQUFNLEtBQUNJLElBQUksTUFBRUMsT0FBTyxNQUFJTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUVwQyxTQUFTTSxVQUFVLENBQUNDLEtBQUssRUFBRTtRQUN6QkEsS0FBSyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJQyxRQUFRLEdBQUc7WUFDWFAsS0FBSyxFQUFHQSxLQUFLO1lBQ2JRLElBQUksRUFBR04sSUFBSTtTQUNkO1FBQ0RMLGlEQUFVLENBQUMsa0JBQWtCLEVBQUVVLFFBQVEsQ0FBQyxDQUFDO0tBQzFDO0lBRUQscUJBQ0ksOERBQUNHLE1BQUk7UUFBQ0MsUUFBUSxFQUFFUCxVQUFVOzswQkFDeEIsOERBQUNRLE9BQUs7Z0JBQ0pDLElBQUksRUFBQyxNQUFNO2dCQUNYQyxXQUFXLEVBQUMsT0FBTztnQkFDbkJDLEtBQUssRUFBRWYsS0FBSztnQkFDWmdCLFFBQVEsRUFBRSxDQUFDWCxLQUFLLEdBQUtKLFFBQVEsQ0FBQ0ksS0FBSyxDQUFDWSxNQUFNLENBQUNGLEtBQUssQ0FBQzs7Ozs7b0JBQ2pEOzBCQUNGLDhEQUFDRyxJQUFFOzs7O29CQUFHOzBCQUNOLDhEQUFDQyxVQUFRO2dCQUNQTixJQUFJLEVBQUMsTUFBTTtnQkFDWEUsS0FBSyxFQUFFYixJQUFJO2dCQUNYYyxRQUFRLEVBQUUsQ0FBQ1gsS0FBSyxHQUFLRixPQUFPLENBQUNFLEtBQUssQ0FBQ1ksTUFBTSxDQUFDRixLQUFLLENBQUM7Z0JBQ2hERCxXQUFXLEVBQUMsd0JBQXdCOzs7OztvQkFDcEM7MEJBQ0YsOERBQUNJLElBQUU7Ozs7b0JBQUc7MEJBQ04sOERBQUNFLFFBQU07Z0JBQUNQLElBQUksRUFBQyxRQUFROzBCQUFDLGFBQVc7Ozs7O29CQUFTOzs7Ozs7WUFDckMsQ0FDVDtDQUNIO0FBRUQsaUVBQWVkLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jcnVkLy4vY29tcG9uZW50cy9OZXdOb3RlLmpzeD9mZWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE5ld05vdGUoKSB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vdGUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBub3RlRGF0YSA9IHtcbiAgICAgICAgdGl0bGUgOiB0aXRsZSxcbiAgICAgICAgZGF0YSA6IG5vdGVcbiAgICB9XG4gICAgYXhpb3MucG9zdCgnL2FwaS9jcmVhdGUtbm90ZScsIG5vdGVEYXRhKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17Y3JlYXRlTm90ZX0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInRpdGxlXCJcbiAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VGl0bGUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17bm90ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROb3RlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGFydCB0eXBpbmcgeW91ciBub3RlXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNyZWF0ZSBOb3RlPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld05vdGU7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsIk5ld05vdGUiLCJ0aXRsZSIsInNldFRpdGxlIiwibm90ZSIsInNldE5vdGUiLCJjcmVhdGVOb3RlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5vdGVEYXRhIiwiZGF0YSIsInBvc3QiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJiciIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NewNote.jsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NewNote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NewNote */ \"./components/NewNote.jsx\");\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewNote__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBNEM7QUFFNUMsU0FBU0MsSUFBSSxHQUFFO0lBQ2IscUJBQ0UsOERBQUNELDJEQUFPOzs7O1lBQUcsQ0FDWjtDQUNGOztBQUVELGlFQUFlQyxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY3J1ZC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5ld05vdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmV3Tm90ZVwiO1xuXG5mdW5jdGlvbiBIb21lKCl7XG4gIHJldHVybihcbiAgICA8TmV3Tm90ZSAvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJOZXdOb3RlIiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();