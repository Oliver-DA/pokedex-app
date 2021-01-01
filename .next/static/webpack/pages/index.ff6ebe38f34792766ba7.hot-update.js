webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/home.module.css */ "./styles/home.module.css");
/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Pokemon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Pokemon */ "./components/Pokemon.js");



var _jsxFileName = "C:\\Users\\Oliver\\Desktop\\pokemon-show-app\\pages\\index.js",
    _s = $RefreshSig$();

//Libraries
 //Styles


 //Components


var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var pokemons = _ref.pokemons;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(pokemons),
      allPokemons = _useState[0],
      setAllPokemons = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      pokemonSearch = _useState2[0],
      setPokemonSearch = _useState2[1]; //Handlers


  var handleChange = function handleChange(e) {
    console.log(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        children: "Pok\xE9dex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.search,
          type: "text",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pokemonList,
        children: pokemons.map(function (pokemon, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Pokemon__WEBPACK_IMPORTED_MODULE_4__["default"], {
            pokemon: pokemon,
            pokemonUrl: "/pokemons/".concat(index + 1)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Home, "f2k5NhE3BoUF1j70pGDPmd2K9uQ=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBva2Vtb25zIiwidXNlU3RhdGUiLCJhbGxQb2tlbW9ucyIsInNldEFsbFBva2Vtb25zIiwicG9rZW1vblNlYXJjaCIsInNldFBva2Vtb25TZWFyY2giLCJoYW5kbGVDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic3R5bGVzIiwiaGVhZGVyIiwidGl0bGUiLCJzZWFyY2giLCJwb2tlbW9uTGlzdCIsIm1hcCIsInBva2Vtb24iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FJQTs7QUFDQTtDQUdBOztBQUNBOztBQUdlLFNBQVNBLElBQVQsT0FBNkI7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBRUZDLHNEQUFRLENBQUNELFFBQUQsQ0FGTjtBQUFBLE1BRWpDRSxXQUZpQztBQUFBLE1BRXBCQyxjQUZvQjs7QUFBQSxtQkFHRUYsc0RBQVEsQ0FBQyxFQUFELENBSFY7QUFBQSxNQUdqQ0csYUFIaUM7QUFBQSxNQUdsQkMsZ0JBSGtCLGtCQUt4Qzs7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3RCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQXJCO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFJQyw4REFBTSxDQUFDQyxNQUF6QjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBS0QsOERBQU0sQ0FBQ0UsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsK0JBQ0k7QUFDSSxtQkFBUyxFQUFJRiw4REFBTSxDQUFDRyxNQUR4QjtBQUVJLGNBQUksRUFBRyxNQUZYO0FBR0ksa0JBQVEsRUFBS1Q7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVdJLHFFQUFDLDBEQUFEO0FBQUEsNkJBR0k7QUFBSSxpQkFBUyxFQUFJTSw4REFBTSxDQUFDSSxXQUF4QjtBQUFBLGtCQUVRaEIsUUFBUSxDQUFDaUIsR0FBVCxDQUFjLFVBQUNDLE9BQUQsRUFBVUMsS0FBVjtBQUFBLDhCQUNWLHFFQUFDLDJEQUFEO0FBRUEsbUJBQU8sRUFBSUQsT0FGWDtBQUdBLHNCQUFVLHNCQUFpQkMsS0FBSyxHQUFHLENBQXpCO0FBSFYsYUFDT0EsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURVO0FBQUEsU0FBZDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQSxrQkFESjtBQTZCSDs7R0F2Q3VCcEIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZjZlYmUzOGYzNDc5Mjc2NmJhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9MaWJyYXJpZXNcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1N0eWxlc1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzJztcclxuXHJcbi8vQ29tcG9uZW50c1xyXG5pbXBvcnQgUG9rZW1vbiBmcm9tICcuLi9jb21wb25lbnRzL1Bva2Vtb24nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKHsgcG9rZW1vbnMgfSkge1xyXG5cclxuICAgIGNvbnN0IFthbGxQb2tlbW9ucywgc2V0QWxsUG9rZW1vbnNdID0gdXNlU3RhdGUocG9rZW1vbnMpO1xyXG4gICAgY29uc3QgW3Bva2Vtb25TZWFyY2gsIHNldFBva2Vtb25TZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgLy9IYW5kbGVyc1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSB7IHN0eWxlcy50aXRsZSB9PlBva8OpZGV4PC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7c3R5bGVzLnNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyBoYW5kbGVDaGFuZ2UgfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWUgPSB7c3R5bGVzLnBva2Vtb25MaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBva2Vtb25zLm1hcCggKHBva2Vtb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9rZW1vblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9rZW1vbiA9IHtwb2tlbW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9rZW1vblVybCA9IHtgL3Bva2Vtb25zLyR7aW5kZXggKyAxfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgKCkge1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9MzAwJm9mZnNldD0wXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmRhdGEucmVzdWx0cztcclxuICAgIFxyXG4gICAgY29uc3QgcG9rZW1vbnMgPSByZXN1bHRzLm1hcCggKHBva2Vtb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgbGV0IHBhZGRlZEluZGV4ID0gaW5kZXggPCA5ID8gXCIwMFwiOiBpbmRleCA+PSA5ICYmIGluZGV4IDwgOTkgPyBcIjBcIjogXCJcIjtcclxuICAgICAgICBwYWRkZWRJbmRleCArPSAoaW5kZXggKyAxKVxyXG5cclxuICAgICAgICBsZXQgaW1hZ2UgPSBgaHR0cHM6Ly9hc3NldHMucG9rZW1vbi5jb20vYXNzZXRzL2NtczIvaW1nL3Bva2VkZXgvZnVsbC8ke3BhZGRlZEluZGV4fS5wbmdgO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5wb2tlbW9uLFxyXG4gICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHBva2Vtb25zIH0gfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==