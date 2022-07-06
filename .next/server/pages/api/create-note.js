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
exports.id = "pages/api/create-note";
exports.ids = ["pages/api/create-note"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./config/database.js":
/*!****************************!*\
  !*** ./config/database.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URL = \"mongodb+srv://pushkarsingh019:Mf0tOLDoDLORWVk5@cluster0.sd4ew.mongodb.net/Notes\";\nconst connectDB = async ()=>{\n    try {\n        const connectDatabase = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URL);\n        console.log(`Database connected ${connectDatabase.connection.host}`);\n    } catch (error) {\n        console.log(`Database connection failed`);\n        process.exit(1);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGF0YWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFNBQVMsR0FBRyxpRkFBaUY7QUFFbkcsTUFBTUMsU0FBUyxHQUFHLFVBQVk7SUFDMUIsSUFBSTtRQUNBLE1BQU1DLGVBQWUsR0FBRyxNQUFNSCx1REFBZ0IsQ0FBQ0MsU0FBUyxDQUFDO1FBRXpESSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixFQUFFSCxlQUFlLENBQUNJLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hFLENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBQ1pKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQzFDSSxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQjtDQUNKO0FBRUQsaUVBQWVULFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jcnVkLy4vY29uZmlnL2RhdGFiYXNlLmpzPzY5MmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBNT05HT19VUkwgPSBcIm1vbmdvZGIrc3J2Oi8vcHVzaGthcnNpbmdoMDE5Ok1mMHRPTERvRExPUldWazVAY2x1c3RlcjAuc2Q0ZXcubW9uZ29kYi5uZXQvTm90ZXNcIjtcblxuY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbm5lY3REYXRhYmFzZSA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09fVVJMKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgRGF0YWJhc2UgY29ubmVjdGVkICR7Y29ubmVjdERhdGFiYXNlLmNvbm5lY3Rpb24uaG9zdH1gKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhgRGF0YWJhc2UgY29ubmVjdGlvbiBmYWlsZWRgKTtcbiAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPX1VSTCIsImNvbm5lY3REQiIsImNvbm5lY3REYXRhYmFzZSIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbiIsImhvc3QiLCJlcnJvciIsInByb2Nlc3MiLCJleGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./config/database.js\n");

/***/ }),

/***/ "(api)/./models/postModel.js":
/*!*****************************!*\
  !*** ./models/postModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst noteSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: String,\n    data: String\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.note) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"note\", noteSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvcG9zdE1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxVQUFVLEdBQUcsSUFBSUQsd0RBQWUsQ0FBQztJQUNuQ0csS0FBSyxFQUFHQyxNQUFNO0lBQ2RDLElBQUksRUFBR0QsTUFBTTtDQUNoQixFQUFFO0lBQ0NFLFVBQVUsRUFBRyxJQUFJO0NBQ3BCLENBQUM7QUFFRixpRUFBZU4sNkRBQW9CLElBQUlBLHFEQUFjLENBQUMsTUFBTSxFQUFFQyxVQUFVLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jcnVkLy4vbW9kZWxzL3Bvc3RNb2RlbC5qcz8wNzI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3Qgbm90ZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHRpdGxlIDogU3RyaW5nLFxuICAgIGRhdGEgOiBTdHJpbmcsXG59LCB7XG4gICAgdGltZXN0YW1wcyA6IHRydWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMubm90ZSB8fCBtb25nb29zZS5tb2RlbCgnbm90ZScsIG5vdGVTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm5vdGVTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsIlN0cmluZyIsImRhdGEiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwibm90ZSIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/postModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/create-note.js":
/*!**********************************!*\
  !*** ./pages/api/create-note.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_postModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/postModel */ \"(api)/./models/postModel.js\");\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/database */ \"(api)/./config/database.js\");\n\n\n(0,_config_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nasync function createNote(req, res) {\n    try {\n        const { title , data  } = req.body;\n        const newNote = await _models_postModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n            title,\n            data\n        });\n        res.status(201).json({\n            success: true,\n            data: newNote\n        });\n    } catch (error) {\n        res.status(500).json({\n            success: false,\n            data: error.message\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNote);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlLW5vdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBQ0k7QUFFOUNDLDREQUFTLEVBQUUsQ0FBQztBQUVaLGVBQWVDLFVBQVUsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDaEMsSUFBSTtRQUNBLE1BQU0sRUFBQ0MsS0FBSyxHQUFFQyxJQUFJLEdBQUMsR0FBR0gsR0FBRyxDQUFDSSxJQUFJO1FBQzlCLE1BQU1DLE9BQU8sR0FBRyxNQUFNUixnRUFBVyxDQUFDO1lBQzlCSyxLQUFLO1lBQ0xDLElBQUk7U0FDUCxDQUFDO1FBQ0ZGLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxFQUFFLElBQUk7WUFBRU4sSUFBSSxFQUFFRSxPQUFPO1NBQUUsQ0FBQyxDQUFDO0tBQzFELENBQUMsT0FBT0ssS0FBSyxFQUFFO1FBQ1pULEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0MsT0FBTyxFQUFHLEtBQUs7WUFBRU4sSUFBSSxFQUFHTyxLQUFLLENBQUNDLE9BQU87U0FBQyxDQUFDO0tBQ2hFO0NBQ0o7QUFFRCxpRUFBZVosVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jcnVkLy4vcGFnZXMvYXBpL2NyZWF0ZS1ub3RlLmpzP2I0OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5PVEUgZnJvbSBcIi4uLy4uL21vZGVscy9wb3N0TW9kZWxcIjtcbmltcG9ydCBDb25uZWN0REIgZnJvbSBcIi4uLy4uL2NvbmZpZy9kYXRhYmFzZVwiO1xuXG5Db25uZWN0REIoKTtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlTm90ZShyZXEsIHJlcykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHt0aXRsZSwgZGF0YX0gPSByZXEuYm9keTtcbiAgICAgICAgY29uc3QgbmV3Tm90ZSA9IGF3YWl0IE5PVEUuY3JlYXRlKHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9KTtcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBuZXdOb3RlIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtzdWNjZXNzIDogZmFsc2UsIGRhdGEgOiBlcnJvci5tZXNzYWdlfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5vdGUiXSwibmFtZXMiOlsiTk9URSIsIkNvbm5lY3REQiIsImNyZWF0ZU5vdGUiLCJyZXEiLCJyZXMiLCJ0aXRsZSIsImRhdGEiLCJib2R5IiwibmV3Tm90ZSIsImNyZWF0ZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/create-note.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/create-note.js"));
module.exports = __webpack_exports__;

})();