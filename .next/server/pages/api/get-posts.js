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
exports.id = "pages/api/get-posts";
exports.ids = ["pages/api/get-posts"];
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URL = \"mongodb+srv://pushkarsingh019:Mf0tOLDoDLORWVk5@cluster0.sd4ew.mongodb.net/Notes\";\n// const connectDB = async () => {\n//     try {\n//         const connectDatabase = await mongoose.connect(MONGO_URL);\n//         console.log(`Database connected ${connectDatabase.connection.host}`);\n//     } catch (error) {\n//         console.log(`Database connection failed ${error.message}`);\n//         process.exit(1);\n//     }\n// }\nconst connectDB = function() {\n    const connectDatabase = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URL).then(()=>{\n        console.log(`Database connected`);\n    }).catch((error)=>{\n        console.log(`Database connection failed -> ${error.message}`);\n        process.exit(1);\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvZGF0YWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFNBQVMsR0FBRyxpRkFBaUY7QUFFbkcsa0NBQWtDO0FBQ2xDLFlBQVk7QUFDWixxRUFBcUU7QUFFckUsZ0ZBQWdGO0FBQ2hGLHdCQUF3QjtBQUN4QixzRUFBc0U7QUFDdEUsMkJBQTJCO0FBQzNCLFFBQVE7QUFDUixJQUFJO0FBRUosTUFBTUMsU0FBUyxHQUFHLFdBQVU7SUFDeEIsTUFBTUMsZUFBZSxHQUFHSCx1REFBZ0IsQ0FBQ0MsU0FBUyxDQUFDLENBQUNJLElBQUksQ0FBQyxJQUFNO1FBQzNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztLQUNyQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDQyxLQUFLLEdBQUs7UUFDaEJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsOEJBQThCLEVBQUVFLEtBQUssQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlEQyxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNuQixDQUFDO0NBQ0w7QUFFRCxpRUFBZVYsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNydWQvLi9jb25maWcvZGF0YWJhc2UuanM/NjkyYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE1PTkdPX1VSTCA9IFwibW9uZ29kYitzcnY6Ly9wdXNoa2Fyc2luZ2gwMTk6TWYwdE9MRG9ETE9SV1ZrNUBjbHVzdGVyMC5zZDRldy5tb25nb2RiLm5ldC9Ob3Rlc1wiO1xuXG4vLyBjb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3QgY29ubmVjdERhdGFiYXNlID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkwpO1xuXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGBEYXRhYmFzZSBjb25uZWN0ZWQgJHtjb25uZWN0RGF0YWJhc2UuY29ubmVjdGlvbi5ob3N0fWApO1xuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGBEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZCAke2Vycm9yLm1lc3NhZ2V9YCk7XG4vLyAgICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbi8vICAgICB9XG4vLyB9XG5cbmNvbnN0IGNvbm5lY3REQiA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgY29ubmVjdERhdGFiYXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkwpLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgRGF0YWJhc2UgY29ubmVjdGVkYCk7XG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGBEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZCAtPiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09fVVJMIiwiY29ubmVjdERCIiwiY29ubmVjdERhdGFiYXNlIiwiY29ubmVjdCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsIm1lc3NhZ2UiLCJwcm9jZXNzIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/database.js\n");

/***/ }),

/***/ "(api)/./models/postModel.js":
/*!*****************************!*\
  !*** ./models/postModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst noteSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: String,\n    data: String\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.note) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"note\", noteSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvcG9zdE1vZGVsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxVQUFVLEdBQUcsSUFBSUQsd0RBQWUsQ0FBQztJQUNuQ0csS0FBSyxFQUFHQyxNQUFNO0lBQ2RDLElBQUksRUFBR0QsTUFBTTtDQUNoQixFQUFFO0lBQ0NFLFVBQVUsRUFBRyxJQUFJO0NBQ3BCLENBQUM7QUFFRixpRUFBZU4sNkRBQW9CLElBQUlBLHFEQUFjLENBQUMsTUFBTSxFQUFFQyxVQUFVLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jcnVkLy4vbW9kZWxzL3Bvc3RNb2RlbC5qcz8wNzI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3Qgbm90ZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHRpdGxlIDogU3RyaW5nLFxuICAgIGRhdGEgOiBTdHJpbmcsXG59LCB7XG4gICAgdGltZXN0YW1wcyA6IHRydWVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMubm90ZSB8fCBtb25nb29zZS5tb2RlbCgnbm90ZScsIG5vdGVTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIm5vdGVTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsIlN0cmluZyIsImRhdGEiLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwibm90ZSIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/postModel.js\n");

/***/ }),

/***/ "(api)/./pages/api/get-posts.js":
/*!********************************!*\
  !*** ./pages/api/get-posts.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_postModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/postModel */ \"(api)/./models/postModel.js\");\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/database */ \"(api)/./config/database.js\");\n\n\n(0,_config_database__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nasync function getPosts(req, res) {\n    try {\n        const data = await _models_postModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\n        res.status(201).json({\n            status: \"success\",\n            data: data\n        });\n    } catch (error) {\n        res.status(500).json({\n            status: \"failure\",\n            data: error.message\n        });\n    }\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPosts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0LXBvc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQztBQUNJO0FBRTlDQyw0REFBUyxFQUFFLENBQUM7QUFFWixlQUFlQyxRQUFRLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFDO0lBQzdCLElBQUk7UUFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBTUwsOERBQVMsQ0FBQyxFQUFFLENBQUM7UUFDaENJLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0QsTUFBTSxFQUFHLFNBQVM7WUFBRUYsSUFBSSxFQUFHQSxJQUFJO1NBQUMsQ0FBQyxDQUFDO0tBQzNELENBQUMsT0FBT0ksS0FBSyxFQUFFO1FBQ1pMLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBQ0QsTUFBTSxFQUFHLFNBQVM7WUFBRUYsSUFBSSxFQUFHSSxLQUFLLENBQUNDLE9BQU87U0FBQyxDQUFDLENBQUM7S0FDcEU7Q0FDSjs7QUFFRCxpRUFBZVIsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNydWQvLi9wYWdlcy9hcGkvZ2V0LXBvc3RzLmpzPzZkZGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3QgZnJvbSBcIi4uLy4uL21vZGVscy9wb3N0TW9kZWxcIjtcbmltcG9ydCBDb25uZWN0REIgZnJvbSBcIi4uLy4uL2NvbmZpZy9kYXRhYmFzZVwiO1xuXG5Db25uZWN0REIoKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHMocmVxLCByZXMpe1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQb3N0LmZpbmQoe30pO1xuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7c3RhdHVzIDogXCJzdWNjZXNzXCIsIGRhdGEgOiBkYXRhfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgICBcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe3N0YXR1cyA6IFwiZmFpbHVyZVwiLCBkYXRhIDogZXJyb3IubWVzc2FnZX0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFBvc3RzOyJdLCJuYW1lcyI6WyJQb3N0IiwiQ29ubmVjdERCIiwiZ2V0UG9zdHMiLCJyZXEiLCJyZXMiLCJkYXRhIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/get-posts.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/get-posts.js"));
module.exports = __webpack_exports__;

})();