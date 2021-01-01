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

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
    var search = e.target.value;
    var filteredPokemons = [];

    var _iterator = _createForOfIteratorHelper(allPokemons),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pokemon = _step.value;

        if (pokemon.name.includes(search)) {
          filteredPokemons.push(pokemon);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    setAllPokemons(filteredPokemons);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        children: "Pok\xE9dex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.search,
          type: "text",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
            lineNumber: 50,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBva2Vtb25zIiwidXNlU3RhdGUiLCJhbGxQb2tlbW9ucyIsInNldEFsbFBva2Vtb25zIiwicG9rZW1vblNlYXJjaCIsInNldFBva2Vtb25TZWFyY2giLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJlZFBva2Vtb25zIiwicG9rZW1vbiIsIm5hbWUiLCJpbmNsdWRlcyIsInB1c2giLCJzdHlsZXMiLCJoZWFkZXIiLCJ0aXRsZSIsInBva2Vtb25MaXN0IiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUE7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFHZSxTQUFTQSxJQUFULE9BQTZCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUVGQyxzREFBUSxDQUFDRCxRQUFELENBRk47QUFBQSxNQUVqQ0UsV0FGaUM7QUFBQSxNQUVwQkMsY0FGb0I7O0FBQUEsbUJBR0VGLHNEQUFRLENBQUMsRUFBRCxDQUhWO0FBQUEsTUFHakNHLGFBSGlDO0FBQUEsTUFHbEJDLGdCQUhrQixrQkFLeEM7OztBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLENBQUMsRUFBSTtBQUN0QixRQUFJQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUF0QjtBQUNBLFFBQU1DLGdCQUFnQixHQUFHLEVBQXpCOztBQUZzQiwrQ0FJRlQsV0FKRTtBQUFBOztBQUFBO0FBSXRCLDBEQUFpQztBQUFBLFlBQXhCVSxPQUF3Qjs7QUFDN0IsWUFBSUEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLFFBQWIsQ0FBc0JOLE1BQXRCLENBQUosRUFBbUM7QUFDL0JHLDBCQUFnQixDQUFDSSxJQUFqQixDQUFzQkgsT0FBdEI7QUFDSDtBQUNKO0FBUnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVXRCVCxrQkFBYyxDQUFDUSxnQkFBRCxDQUFkO0FBQ0gsR0FYRDs7QUFhQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFJSyw4REFBTSxDQUFDQyxNQUF6QjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBS0QsOERBQU0sQ0FBQ0UsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsK0JBQ0k7QUFDSSxtQkFBUyxFQUFJRiw4REFBTSxDQUFDUixNQUR4QjtBQUVJLGNBQUksRUFBRyxNQUZYO0FBR0ksa0JBQVEsRUFBS0Y7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVdJLHFFQUFDLDBEQUFEO0FBQUEsNkJBR0k7QUFBSSxpQkFBUyxFQUFJVSw4REFBTSxDQUFDRyxXQUF4QjtBQUFBLGtCQUVRbkIsUUFBUSxDQUFDb0IsR0FBVCxDQUFjLFVBQUNSLE9BQUQsRUFBVVMsS0FBVjtBQUFBLDhCQUNWLHFFQUFDLDJEQUFEO0FBRUEsbUJBQU8sRUFBSVQsT0FGWDtBQUdBLHNCQUFVLHNCQUFpQlMsS0FBSyxHQUFHLENBQXpCO0FBSFYsYUFDT0EsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURVO0FBQUEsU0FBZDtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQSxrQkFESjtBQTZCSDs7R0FoRHVCdEIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZGY3NmQzNjBmMjUwYmI5Mjk5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9MaWJyYXJpZXNcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1N0eWxlc1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzJztcclxuXHJcbi8vQ29tcG9uZW50c1xyXG5pbXBvcnQgUG9rZW1vbiBmcm9tICcuLi9jb21wb25lbnRzL1Bva2Vtb24nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKHsgcG9rZW1vbnMgfSkge1xyXG5cclxuICAgIGNvbnN0IFthbGxQb2tlbW9ucywgc2V0QWxsUG9rZW1vbnNdID0gdXNlU3RhdGUocG9rZW1vbnMpO1xyXG4gICAgY29uc3QgW3Bva2Vtb25TZWFyY2gsIHNldFBva2Vtb25TZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgLy9IYW5kbGVyc1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgbGV0IHNlYXJjaCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUG9rZW1vbnMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcG9rZW1vbiBvZiBhbGxQb2tlbW9ucykge1xyXG4gICAgICAgICAgICBpZiAocG9rZW1vbi5uYW1lLmluY2x1ZGVzKHNlYXJjaCkpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkUG9rZW1vbnMucHVzaChwb2tlbW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRBbGxQb2tlbW9ucyhmaWx0ZXJlZFBva2Vtb25zKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0geyBzdHlsZXMudGl0bGUgfT5Qb2vDqWRleDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge3N0eWxlcy5zZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsgaGFuZGxlQ2hhbmdlIH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT4gIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lID0ge3N0eWxlcy5wb2tlbW9uTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2tlbW9ucy5tYXAoIChwb2tlbW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBva2Vtb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBva2Vtb24gPSB7cG9rZW1vbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBva2Vtb25VcmwgPSB7YC9wb2tlbW9ucy8ke2luZGV4ICsgMX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzICgpIHtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTMwMCZvZmZzZXQ9MFwiKTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5kYXRhLnJlc3VsdHM7XHJcbiAgICBcclxuICAgIGNvbnN0IHBva2Vtb25zID0gcmVzdWx0cy5tYXAoIChwb2tlbW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBwYWRkZWRJbmRleCA9IGluZGV4IDwgOSA/IFwiMDBcIjogaW5kZXggPj0gOSAmJiBpbmRleCA8IDk5ID8gXCIwXCI6IFwiXCI7XHJcbiAgICAgICAgcGFkZGVkSW5kZXggKz0gKGluZGV4ICsgMSlcclxuXHJcbiAgICAgICAgbGV0IGltYWdlID0gYGh0dHBzOi8vYXNzZXRzLnBva2Vtb24uY29tL2Fzc2V0cy9jbXMyL2ltZy9wb2tlZGV4L2Z1bGwvJHtwYWRkZWRJbmRleH0ucG5nYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ucG9rZW1vbixcclxuICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBwb2tlbW9ucyB9IH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=