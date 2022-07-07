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

/***/ "./components/NoteCard.jsx":
/*!*********************************!*\
  !*** ./components/NoteCard.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction NoteCard({ id , title , data  }) {\n    function deletePost() {\n        axios__WEBPACK_IMPORTED_MODULE_1___default()[\"delete\"](\"/api/delete-post\", {\n            headers: {},\n            data: {\n                id\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/components/NoteCard.jsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: data\n            }, void 0, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/components/NoteCard.jsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"options\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: deletePost,\n                    children: \"Delete Post\"\n                }, void 0, false, {\n                    fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/components/NoteCard.jsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/components/NoteCard.jsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/components/NoteCard.jsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoteCard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05vdGVDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDa0I7QUFFNUMsU0FBU0csUUFBUSxDQUFDLEVBQUNDLEVBQUUsR0FBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUMsRUFBQztJQUVoQyxTQUFTQyxVQUFVLEdBQUU7UUFDakJQLHNEQUFZLENBQUMsa0JBQWtCLEVBQUU7WUFDN0JTLE9BQU8sRUFBRyxFQUFFO1lBQ1pILElBQUksRUFBRztnQkFDSEYsRUFBRTthQUNMO1NBQ0osQ0FBQztLQUNMO0lBRUQscUJBQ0ksOERBQUNNLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOzBCQUFFTixLQUFLOzs7OztvQkFBTTswQkFDaEIsOERBQUNPLEdBQUM7MEJBQUVOLElBQUk7Ozs7O29CQUFLOzBCQUNiLDhEQUFDSSxLQUFHO2dCQUFDRyxTQUFTLEVBQUMsU0FBUzswQkFDcEIsNEVBQUNDLFFBQU07b0JBQUNDLE9BQU8sRUFBRVIsVUFBVTs4QkFBRSxhQUFXOzs7Ozt3QkFBUzs7Ozs7b0JBQy9DOzs7Ozs7WUFDSixDQUNUO0NBQ0o7O0FBRUQsaUVBQWVKLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jcnVkLy4vY29tcG9uZW50cy9Ob3RlQ2FyZC5qc3g/NzZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIE5vdGVDYXJkKHtpZCwgdGl0bGUsIGRhdGF9KXtcblxuICAgIGZ1bmN0aW9uIGRlbGV0ZVBvc3QoKXtcbiAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL2RlbGV0ZS1wb3N0Jywge1xuICAgICAgICAgICAgaGVhZGVycyA6IHt9LFxuICAgICAgICAgICAgZGF0YSA6IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgICA8cD57ZGF0YX08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0ZVBvc3R9PkRlbGV0ZSBQb3N0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90ZUNhcmQ7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOb3RlQ2FyZCIsImlkIiwidGl0bGUiLCJkYXRhIiwiZGVsZXRlUG9zdCIsImRlbGV0ZSIsImhlYWRlcnMiLCJkaXYiLCJoMyIsInAiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NoteCard.jsx\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NewNote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NewNote */ \"./components/NewNote.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_NoteCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NoteCard */ \"./components/NoteCard.jsx\");\n\n\n\n\n\n// export async function getStaticProps(){\n//   try {\n//     const response = await axios.get('/api/get-posts');\n//     const {status, data} = response;\n//     console.log(\"Data fetched from the backend\");\n//     return {\n//       props : {\n//         data,\n//       }\n//     }\n//   } catch (error) {\n//     console.log(`could not fetch data -> ${error.message}`);\n//     let data = error.message;\n//     return {\n//       props : {\n//         data\n//       }\n//     }\n//   }\n// }\nfunction GetNotes() {\n    const { 0: notes , 1: setNotes  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const { 0: isLoading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setLoading(true);\n        fetch(\"/api/get-posts\").then((res)=>res.json()).then((note)=>{\n            setNotes(note);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n        lineNumber: 42,\n        columnNumber: 24\n    }, this);\n    if (notes.length === 0) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No Notes Found\"\n    }, void 0, false, {\n        fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n        lineNumber: 43,\n        columnNumber: 33\n    }, this);\n    const { data  } = notes;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map((note)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NoteCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: note.title,\n                data: note.data,\n                id: note._id\n            }, note._id, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 11\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_NewNote__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GetNotes, {}, void 0, false, {\n                fileName: \"/Users/pushkarsingh/Documents/03 Development/learning/nextjs-crud/pages/index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QztBQUNsQjtBQUNrQjtBQUNFO0FBRTlDLDBDQUEwQztBQUMxQyxVQUFVO0FBQ1YsMERBQTBEO0FBQzFELHVDQUF1QztBQUN2QyxvREFBb0Q7QUFDcEQsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsVUFBVTtBQUNWLFFBQVE7QUFDUixzQkFBc0I7QUFDdEIsK0RBQStEO0FBQy9ELGdDQUFnQztBQUNoQyxlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixVQUFVO0FBQ1YsUUFBUTtBQUNSLE1BQU07QUFDTixJQUFJO0FBRUosU0FBU0ssUUFBUSxHQUFFO0lBRWpCLE1BQU0sS0FBQ0MsS0FBSyxNQUFFQyxRQUFRLE1BQUlKLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU0sS0FBQ0ssU0FBUyxNQUFFQyxVQUFVLE1BQUtOLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBRWhERCxnREFBUyxDQUFDLElBQU07UUFDZE8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FDdEJDLElBQUksQ0FBQyxDQUFDQyxHQUFHLEdBQUtBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUMsQ0FDekJGLElBQUksQ0FBQyxDQUFDRyxJQUFJLEdBQUs7WUFDZFAsUUFBUSxDQUFDTyxJQUFJLENBQUM7WUFDZEwsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ25CLENBQUM7S0FDSCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAsSUFBR0QsU0FBUyxFQUFFLHFCQUFPLDhEQUFDTyxHQUFDO2tCQUFDLFlBQVU7Ozs7O1lBQUk7SUFDdEMsSUFBR1QsS0FBSyxDQUFDVSxNQUFNLEtBQUssQ0FBQyxFQUFFLHFCQUFPLDhEQUFDRCxHQUFDO2tCQUFDLGdCQUFjOzs7OztZQUFJO0lBQ25ELE1BQU0sRUFBQ0UsSUFBSSxHQUFDLEdBQUdYLEtBQUs7SUFFcEIscUJBQ0UsOERBQUNZLEtBQUc7a0JBQ0RELElBQUksQ0FBQ0UsR0FBRyxDQUFDLENBQUNMLElBQUksR0FBSztZQUNsQixxQkFDRSw4REFBQ1YsNERBQVE7Z0JBQWdCZ0IsS0FBSyxFQUFFTixJQUFJLENBQUNNLEtBQUs7Z0JBQUVILElBQUksRUFBRUgsSUFBSSxDQUFDRyxJQUFJO2dCQUFFSSxFQUFFLEVBQUVQLElBQUksQ0FBQ1EsR0FBRztlQUExRFIsSUFBSSxDQUFDUSxHQUFHOzs7O29CQUFzRCxDQUM5RTtTQUNGLENBQUM7Ozs7O1lBQ0UsQ0FDUDtDQUNGO0FBR0QsU0FBU0MsSUFBSSxHQUFFO0lBSWIscUJBQ0U7OzBCQUNFLDhEQUFDdkIsMkRBQU87Ozs7b0JBQUc7MEJBQ1gsOERBQUNLLFFBQVE7Ozs7b0JBQUc7O29CQUNYLENBQ0o7Q0FDRjs7QUFFRCxpRUFBZWtCLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jcnVkLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV3Tm90ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9OZXdOb3RlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTm90ZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTm90ZUNhcmRcIjtcblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4vLyAgIHRyeSB7XG4vLyAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZ2V0LXBvc3RzJyk7XG4vLyAgICAgY29uc3Qge3N0YXR1cywgZGF0YX0gPSByZXNwb25zZTtcbi8vICAgICBjb25zb2xlLmxvZyhcIkRhdGEgZmV0Y2hlZCBmcm9tIHRoZSBiYWNrZW5kXCIpO1xuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBwcm9wcyA6IHtcbi8vICAgICAgICAgZGF0YSxcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgY29uc29sZS5sb2coYGNvdWxkIG5vdCBmZXRjaCBkYXRhIC0+ICR7ZXJyb3IubWVzc2FnZX1gKTtcbi8vICAgICBsZXQgZGF0YSA9IGVycm9yLm1lc3NhZ2U7XG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgIHByb3BzIDoge1xuLy8gICAgICAgICBkYXRhXG4vLyAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbmZ1bmN0aW9uIEdldE5vdGVzKCl7XG5cbiAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddICA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgZmV0Y2goJy9hcGkvZ2V0LXBvc3RzJylcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChub3RlKSA9PiB7XG4gICAgICBzZXROb3Rlcyhub3RlKVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSlcbiAgfSwgW10pO1xuXG4gIGlmKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+XG4gIGlmKG5vdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDxwPk5vIE5vdGVzIEZvdW5kPC9wPlxuICBjb25zdCB7ZGF0YX0gPSBub3RlcztcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7ZGF0YS5tYXAoKG5vdGUpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Tm90ZUNhcmQga2V5PXtub3RlLl9pZH0gdGl0bGU9e25vdGUudGl0bGV9IGRhdGE9e25vdGUuZGF0YX0gaWQ9e25vdGUuX2lkfSAvPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmZ1bmN0aW9uIEhvbWUoKXtcblxuICBcblxuICByZXR1cm4oXG4gICAgPD5cbiAgICAgIDxOZXdOb3RlIC8+XG4gICAgICA8R2V0Tm90ZXMgLz5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsiTmV3Tm90ZSIsImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJOb3RlQ2FyZCIsIkdldE5vdGVzIiwibm90ZXMiLCJzZXROb3RlcyIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwibm90ZSIsInAiLCJsZW5ndGgiLCJkYXRhIiwiZGl2IiwibWFwIiwidGl0bGUiLCJpZCIsIl9pZCIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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