webpackHotUpdate_N_E("pages/_error",{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Ftimiking%2FApps%2Fpractx%2Fpractxweb%2Fsrc%2Fpages%2F_error.js!./":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Ftimiking%2FApps%2Fpractx%2Fpractxweb%2Fsrc%2Fpages%2F_error.js ***!
  \*******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/_error\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/_error.js */ \"./src/pages/_error.js\");\n      }\n    ]);\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzPzc0YjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyxvREFBMEQ7QUFDakY7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcz9wYWdlPSUyRl9lcnJvciZhYnNvbHV0ZVBhZ2VQYXRoPSUyRmhvbWUlMkZ0aW1pa2luZyUyRkFwcHMlMkZwcmFjdHglMkZwcmFjdHh3ZWIlMkZzcmMlMkZwYWdlcyUyRl9lcnJvci5qcyEuLy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiL2hvbWUvdGltaWtpbmcvQXBwcy9wcmFjdHgvcHJhY3R4d2ViL3NyYy9wYWdlcy9fZXJyb3IuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Ftimiking%2FApps%2Fpractx%2Fpractxweb%2Fsrc%2Fpages%2F_error.js!./\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/webpack/buildin/module.js":
false,

/***/ "./src/pages/_error.js":
/*!*****************************!*\
  !*** ./src/pages/_error.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/timiking/Apps/practx/practxweb/src/pages/_error.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Error({\n  statusCode\n}) {\n  return __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 3,\n      columnNumber: 9\n    }\n  }, statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client');\n}\n\n_c = Error;\n\nError.getInitialProps = ({\n  res,\n  err\n}) => {\n  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;\n  return {\n    statusCode\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Error);\n\nvar _c;\n\n$RefreshReg$(_c, \"Error\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19lcnJvci5qcz81MTEzIl0sIm5hbWVzIjpbIkVycm9yIiwic3RhdHVzQ29kZSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQztBQUFGLENBQWYsRUFBK0I7QUFDM0IsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLFVBQVUsR0FDSixZQUFXQSxVQUFXLHFCQURsQixHQUVMLDZCQUhWLENBREo7QUFPSDs7S0FSUUQsSzs7QUFVVEEsS0FBSyxDQUFDRSxlQUFOLEdBQXdCLENBQUM7QUFBRUMsS0FBRjtBQUFPQztBQUFQLENBQUQsS0FBa0I7QUFDdEMsUUFBTUgsVUFBVSxHQUFHRSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0YsVUFBUCxHQUFvQkcsR0FBRyxHQUFHQSxHQUFHLENBQUNILFVBQVAsR0FBb0IsR0FBakU7QUFDQSxTQUFPO0FBQUVBO0FBQUYsR0FBUDtBQUNILENBSEQ7O0FBS2VELG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19lcnJvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEVycm9yKHsgc3RhdHVzQ29kZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHA+XG4gICAgICAgICAgICB7c3RhdHVzQ29kZVxuICAgICAgICAgICAgICAgID8gYEFuIGVycm9yICR7c3RhdHVzQ29kZX0gb2NjdXJyZWQgb24gc2VydmVyYFxuICAgICAgICAgICAgICAgIDogJ0FuIGVycm9yIG9jY3VycmVkIG9uIGNsaWVudCd9XG4gICAgICAgIDwvcD5cbiAgICApXG59XG5cbkVycm9yLmdldEluaXRpYWxQcm9wcyA9ICh7IHJlcywgZXJyIH0pID0+IHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzID8gcmVzLnN0YXR1c0NvZGUgOiBlcnIgPyBlcnIuc3RhdHVzQ29kZSA6IDQwNFxuICAgIHJldHVybiB7IHN0YXR1c0NvZGUgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_error.js\n");

/***/ })

})