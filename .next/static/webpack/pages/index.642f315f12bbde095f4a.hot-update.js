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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
      children: "Pok\xE9dex"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
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
            lineNumber: 37,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBva2Vtb25zIiwidXNlU3RhdGUiLCJhbGxQb2tlbW9ucyIsInNldEFsbFBva2Vtb25zIiwicG9rZW1vblNlYXJjaCIsInNldFBva2Vtb25TZWFyY2giLCJoYW5kbGVDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic3R5bGVzIiwidGl0bGUiLCJwb2tlbW9uTGlzdCIsIm1hcCIsInBva2Vtb24iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FJQTs7QUFDQTtDQUdBOztBQUNBOztBQUdlLFNBQVNBLElBQVQsT0FBNkI7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBRUZDLHNEQUFRLENBQUNELFFBQUQsQ0FGTjtBQUFBLE1BRWpDRSxXQUZpQztBQUFBLE1BRXBCQyxjQUZvQjs7QUFBQSxtQkFHRUYsc0RBQVEsQ0FBQyxFQUFELENBSFY7QUFBQSxNQUdqQ0csYUFIaUM7QUFBQSxNQUdsQkMsZ0JBSGtCLGtCQUt4Qzs7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3RCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQXJCO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFLQyw4REFBTSxDQUFDQyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSw2QkFDSTtBQUNJLFlBQUksRUFBRyxNQURYO0FBRUksZ0JBQVEsRUFBS1A7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSixlQU9JLHFFQUFDLDBEQUFEO0FBQUEsNkJBR0k7QUFBSSxpQkFBUyxFQUFJTSw4REFBTSxDQUFDRSxXQUF4QjtBQUFBLGtCQUVRZCxRQUFRLENBQUNlLEdBQVQsQ0FBYyxVQUFDQyxPQUFELEVBQVVDLEtBQVY7QUFBQSw4QkFDVixxRUFBQywyREFBRDtBQUVBLG1CQUFPLEVBQUlELE9BRlg7QUFHQSxzQkFBVSxzQkFBaUJDLEtBQUssR0FBRyxDQUF6QjtBQUhWLGFBQ09BLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVTtBQUFBLFNBQWQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKO0FBQUEsa0JBREo7QUF5Qkg7O0dBbkN1QmxCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjQyZjMxNWYxMmJiZGUwOTVmNGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vTGlicmFyaWVzXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9TdHlsZXNcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG4vL0NvbXBvbmVudHNcclxuaW1wb3J0IFBva2Vtb24gZnJvbSAnLi4vY29tcG9uZW50cy9Qb2tlbW9uJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICh7IHBva2Vtb25zIH0pIHtcclxuXHJcbiAgICBjb25zdCBbYWxsUG9rZW1vbnMsIHNldEFsbFBva2Vtb25zXSA9IHVzZVN0YXRlKHBva2Vtb25zKTtcclxuICAgIGNvbnN0IFtwb2tlbW9uU2VhcmNoLCBzZXRQb2tlbW9uU2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIC8vSGFuZGxlcnNcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9IHsgc3R5bGVzLnRpdGxlIH0+UG9rw6lkZXg8L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyBoYW5kbGVDaGFuZ2UgfSAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lID0ge3N0eWxlcy5wb2tlbW9uTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2tlbW9ucy5tYXAoIChwb2tlbW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBva2Vtb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBva2Vtb24gPSB7cG9rZW1vbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBva2Vtb25VcmwgPSB7YC9wb2tlbW9ucy8ke2luZGV4ICsgMX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzICgpIHtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTMwMCZvZmZzZXQ9MFwiKTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5kYXRhLnJlc3VsdHM7XHJcbiAgICBcclxuICAgIGNvbnN0IHBva2Vtb25zID0gcmVzdWx0cy5tYXAoIChwb2tlbW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBwYWRkZWRJbmRleCA9IGluZGV4IDwgOSA/IFwiMDBcIjogaW5kZXggPj0gOSAmJiBpbmRleCA8IDk5ID8gXCIwXCI6IFwiXCI7XHJcbiAgICAgICAgcGFkZGVkSW5kZXggKz0gKGluZGV4ICsgMSlcclxuXHJcbiAgICAgICAgbGV0IGltYWdlID0gYGh0dHBzOi8vYXNzZXRzLnBva2Vtb24uY29tL2Fzc2V0cy9jbXMyL2ltZy9wb2tlZGV4L2Z1bGwvJHtwYWRkZWRJbmRleH0ucG5nYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ucG9rZW1vbixcclxuICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBwb2tlbW9ucyB9IH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=