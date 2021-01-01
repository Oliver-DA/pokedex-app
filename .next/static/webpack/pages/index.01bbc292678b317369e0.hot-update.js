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

  //UseState
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(pokemons),
      filteredPokemons = _useState[0],
      setFilterPokemons = _useState[1]; //SearchPokemon function


  var searchFn = function searchFn(input) {
    var search = input;
    var filteredPokemons = [];

    if (search === "") {
      return pokemons;
    }

    var _iterator = _createForOfIteratorHelper(pokemons),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pokemon = _step.value;

        if (pokemon.name.includes(search.toLowerCase().trim(""))) {
          filteredPokemons.push(pokemon);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return filteredPokemons;
  }; //Handlers


  var handleChange = function handleChange(e) {
    setFilterPokemons(searchFn(e.target.value));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        children: ["Pok\xE9dex", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.search,
            type: "text",
            onChange: handleChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [filteredPokemons.length === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "No pokemons were found :("
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 52
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pokemonList,
        children: filteredPokemons.map(function (pokemon, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Pokemon__WEBPACK_IMPORTED_MODULE_4__["default"], {
            pokemon: pokemon,
            pokemonUrl: "/pokemons/".concat(pokemon.index)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Home, "LZqCFeLqzZE2DfktuM+0QjShgL0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBva2Vtb25zIiwidXNlU3RhdGUiLCJmaWx0ZXJlZFBva2Vtb25zIiwic2V0RmlsdGVyUG9rZW1vbnMiLCJzZWFyY2hGbiIsImlucHV0Iiwic2VhcmNoIiwicG9rZW1vbiIsIm5hbWUiLCJpbmNsdWRlcyIsInRvTG93ZXJDYXNlIiwidHJpbSIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZXMiLCJoZWFkZXIiLCJ0aXRsZSIsImxlbmd0aCIsInBva2Vtb25MaXN0IiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUE7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFHZSxTQUFTQSxJQUFULE9BQTZCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUV4QztBQUZ3QyxrQkFHTUMsc0RBQVEsQ0FBQ0QsUUFBRCxDQUhkO0FBQUEsTUFHakNFLGdCQUhpQztBQUFBLE1BR2ZDLGlCQUhlLGlCQUt4Qzs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLFFBQUlDLE1BQU0sR0FBR0QsS0FBYjtBQUNBLFFBQU1ILGdCQUFnQixHQUFHLEVBQXpCOztBQUVBLFFBQUdJLE1BQU0sS0FBSyxFQUFkLEVBQWtCO0FBQ2QsYUFBT04sUUFBUDtBQUNIOztBQU51QiwrQ0FRSkEsUUFSSTtBQUFBOztBQUFBO0FBUXhCLDBEQUE4QjtBQUFBLFlBQXJCTyxPQUFxQjs7QUFFMUIsWUFBSUEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLFFBQWIsQ0FBc0JILE1BQU0sQ0FBQ0ksV0FBUCxHQUFxQkMsSUFBckIsQ0FBMEIsRUFBMUIsQ0FBdEIsQ0FBSixFQUEwRDtBQUN0RFQsMEJBQWdCLENBQUNVLElBQWpCLENBQXNCTCxPQUF0QjtBQUNIO0FBQ0o7QUFidUI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFleEIsV0FBT0wsZ0JBQVA7QUFDSCxHQWhCRCxDQU53QyxDQXdCeEM7OztBQUNBLE1BQU1XLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLENBQUMsRUFBSTtBQUN0QlgscUJBQWlCLENBQUNDLFFBQVEsQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVCxDQUFqQjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBSUMsOERBQU0sQ0FBQ0MsTUFBekI7QUFBQSw2QkFDSTtBQUFJLGlCQUFTLEVBQUtELDhEQUFNLENBQUNFLEtBQXpCO0FBQUEsOENBRUE7QUFBQSxpQ0FDSTtBQUNJLHFCQUFTLEVBQUlGLDhEQUFNLENBQUNYLE1BRHhCO0FBRUksZ0JBQUksRUFBRyxNQUZYO0FBR0ksb0JBQVEsRUFBS087QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBY0kscUVBQUMsMERBQUQ7QUFBQSxpQkFFTVgsZ0JBQWdCLENBQUNrQixNQUFqQixLQUE0QixDQUE1QixpQkFBaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGdkMsZUFHSTtBQUFJLGlCQUFTLEVBQUlILDhEQUFNLENBQUNJLFdBQXhCO0FBQUEsa0JBRVFuQixnQkFBZ0IsQ0FBQ29CLEdBQWpCLENBQXNCLFVBQUNmLE9BQUQsRUFBVWdCLEtBQVY7QUFBQSw4QkFDbEIscUVBQUMsMkRBQUQ7QUFFQSxtQkFBTyxFQUFJaEIsT0FGWDtBQUdBLHNCQUFVLHNCQUFpQkEsT0FBTyxDQUFDZ0IsS0FBekI7QUFIVixhQUNPQSxLQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGtCO0FBQUEsU0FBdEI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEo7QUFBQSxrQkFESjtBQWdDSDs7R0E3RHVCeEIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMWJiYzI5MjY3OGIzMTczNjllMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9MaWJyYXJpZXNcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1N0eWxlc1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzJztcclxuXHJcbi8vQ29tcG9uZW50c1xyXG5pbXBvcnQgUG9rZW1vbiBmcm9tICcuLi9jb21wb25lbnRzL1Bva2Vtb24nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKHsgcG9rZW1vbnMgfSkge1xyXG5cclxuICAgIC8vVXNlU3RhdGVcclxuICAgIGNvbnN0IFtmaWx0ZXJlZFBva2Vtb25zLCBzZXRGaWx0ZXJQb2tlbW9uc10gPSB1c2VTdGF0ZShwb2tlbW9ucyk7XHJcblxyXG4gICAgLy9TZWFyY2hQb2tlbW9uIGZ1bmN0aW9uXHJcbiAgICBjb25zdCBzZWFyY2hGbiA9IChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGxldCBzZWFyY2ggPSBpbnB1dDtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZFBva2Vtb25zID0gW107XHJcblxyXG4gICAgICAgIGlmKHNlYXJjaCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9rZW1vbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBwb2tlbW9uIG9mIHBva2Vtb25zKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocG9rZW1vbi5uYW1lLmluY2x1ZGVzKHNlYXJjaC50b0xvd2VyQ2FzZSgpLnRyaW0oXCJcIikpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZFBva2Vtb25zLnB1c2gocG9rZW1vbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUG9rZW1vbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy9IYW5kbGVyc1xyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICAgICAgc2V0RmlsdGVyUG9rZW1vbnMoc2VhcmNoRm4oZS50YXJnZXQudmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9IHsgc3R5bGVzLnRpdGxlIH0+XHJcbiAgICAgICAgICAgICAgICBQb2vDqWRleFxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtzdHlsZXMuc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IGhhbmRsZUNoYW5nZSB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7IGZpbHRlcmVkUG9rZW1vbnMubGVuZ3RoID09PSAwICYmIDxoMz5ObyBwb2tlbW9ucyB3ZXJlIGZvdW5kIDooPC9oMz59XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lID0ge3N0eWxlcy5wb2tlbW9uTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFBva2Vtb25zLm1hcCggKHBva2Vtb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9rZW1vblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9rZW1vbiA9IHtwb2tlbW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9rZW1vblVybCA9IHtgL3Bva2Vtb25zLyR7cG9rZW1vbi5pbmRleH1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzICgpIHtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTE1MSZvZmZzZXQ9MFwiKTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5kYXRhLnJlc3VsdHM7XHJcbiAgICBcclxuICAgIGNvbnN0IHBva2Vtb25zID0gcmVzdWx0cy5tYXAoIChwb2tlbW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBwYWRkZWRJbmRleCA9IGluZGV4IDwgOSA/IFwiMDBcIjogaW5kZXggPj0gOSAmJiBpbmRleCA8IDk5ID8gXCIwXCI6IFwiXCI7XHJcbiAgICAgICAgcGFkZGVkSW5kZXggKz0gKGluZGV4ICsgMSlcclxuXHJcbiAgICAgICAgbGV0IGltYWdlID0gYGh0dHBzOi8vYXNzZXRzLnBva2Vtb24uY29tL2Fzc2V0cy9jbXMyL2ltZy9wb2tlZGV4L2Z1bGwvJHtwYWRkZWRJbmRleH0ucG5nYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ucG9rZW1vbixcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICAgIGluZGV4OiAoaW5kZXggKyAxKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHBva2Vtb25zIH0gfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==