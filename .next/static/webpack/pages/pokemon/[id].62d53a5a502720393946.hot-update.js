webpackHotUpdate_N_E("pages/pokemon/[id]",{

/***/ "./pages/pokemon/[id].js":
/*!*******************************!*\
  !*** ./pages/pokemon/[id].js ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return singlePokemon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Oliver\\Desktop\\pokemon-show-app\\pages\\pokemon\\[id].js";
//Libraries
//Styles
 //Components



var __N_SSG = true;
function singlePokemon(_ref) {
  var _this = this;

  var pokemon = _ref.pokemon;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: pokemon.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: pokemon.image,
      alt: "Pokemon Image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.types,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        children: "Type"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), pokemon.types.map(function (type, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: type.type.name,
          children: type.type.name
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.homeButton,
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
; //Generation 151 id with a for loop intead of fetchin a pokemon id from an API

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9rZW1vbi8uanMiXSwibmFtZXMiOlsic2luZ2xlUG9rZW1vbiIsInBva2Vtb24iLCJuYW1lIiwiaW1hZ2UiLCJzdHlsZXMiLCJ0eXBlcyIsIm1hcCIsInR5cGUiLCJpbmRleCIsImhvbWVCdXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0NBR0E7O0FBQ0E7QUFDQTs7QUFHZSxTQUFTQSxhQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBRWxELHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsNEJBRUU7QUFBQSxnQkFBS0EsT0FBTyxDQUFDQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUssU0FBRyxFQUFJRCxPQUFPLENBQUNFLEtBQXBCO0FBQTJCLFNBQUcsRUFBRztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFLRTtBQUFLLGVBQVMsRUFBSUMsOERBQU0sQ0FBQ0MsS0FBekI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBR01KLE9BQU8sQ0FBQ0ksS0FBUixDQUFjQyxHQUFkLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNqQjtBQUFHLG1CQUFTLEVBQUlELElBQUksQ0FBQ0EsSUFBTCxDQUFVTCxJQUExQjtBQUFBLG9CQUFnREssSUFBSSxDQUFDQSxJQUFMLENBQVVMO0FBQTFELFdBQXdDTSxLQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQW5CLENBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFjRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRyxHQUFiO0FBQUEsNkJBQ0k7QUFBRyxpQkFBUyxFQUFJSiw4REFBTSxDQUFDSyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFCRDtBQUFBLEMsQ0FFRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb2tlbW9uL1tpZF0uNjJkNTNhNWE1MDI3MjAzOTM5NDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vTGlicmFyaWVzXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4vL1N0eWxlc1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnO1xyXG5cclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpbmdsZVBva2Vtb24gKHsgcG9rZW1vbiB9KSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG5cclxuICAgICAgPGgxPntwb2tlbW9uLm5hbWV9PC9oMT5cclxuICAgICAgPGltZyBzcmMgPSB7cG9rZW1vbi5pbWFnZX0gYWx0ID0gXCJQb2tlbW9uIEltYWdlXCIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy50eXBlc30+XHJcbiAgICAgICAgPGgyPlR5cGU8L2gyPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwb2tlbW9uLnR5cGVzLm1hcCggKHR5cGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0ge3R5cGUudHlwZS5uYW1lfSAga2V5ID0ge2luZGV4fT57dHlwZS50eXBlLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxMaW5rIGhyZWYgPSBcIi9cIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZSA9IHtzdHlsZXMuaG9tZUJ1dHRvbn0+SG9tZTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG5cclxuICAgIDwvTGF5b3V0PlxyXG4gIClcclxufTtcclxuXHJcbi8vR2VuZXJhdGlvbiAxNTEgaWQgd2l0aCBhIGZvciBsb29wIGludGVhZCBvZiBmZXRjaGluIGEgcG9rZW1vbiBpZCBmcm9tIGFuIEFQSVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgMTUxOyBpKyspIHtcclxuXHJcbiAgICBwYXRocy5wdXNoKHtcclxuICAgICAgcGFyYW1zOiB7aWQ6IGkudG9TdHJpbmcoKX1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzICh7IHBhcmFtcyB9KSB7XHJcblxyXG4gIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7aWR9YCk7XHJcbiAgY29uc3QgcG9rZW1vbiA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gIGxldCBwYWRkZWRJbmRleCA9IGlkIDwgMTAgPyBcIjAwXCI6IGlkID49IDEwICYmIGlkIDwgMTAwID8gXCIwXCI6IFwiXCI7XHJcbiAgcGFkZGVkSW5kZXggKz0gKGlkKTtcclxuXHJcbiAgbGV0IGltYWdlID0gYGh0dHBzOi8vYXNzZXRzLnBva2Vtb24uY29tL2Fzc2V0cy9jbXMyL2ltZy9wb2tlZGV4L2Z1bGwvJHtwYWRkZWRJbmRleH0ucG5nYDtcclxuXHJcbiAgcG9rZW1vbi5pbWFnZSA9IGltYWdlXHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IHBva2Vtb24gfSB9XHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9