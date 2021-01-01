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
      setAllPokemons = _useState[1]; //Handlers


  var searchFn = function searchFn(input) {
    var search = input;
    var filteredPokemons = [];

    if (search === "") {
      return pokemons;
    }

    var _iterator = _createForOfIteratorHelper(allPokemons),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var pokemon = _step.value;

        if (pokemon.name.includes(search.toLowerCase())) {
          filteredPokemons.push(pokemon);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return filteredPokemons;
  };

  var handleChange = function handleChange(e) {
    var searchResult = searchFn(e.target.value);
    setAllPokemons(searchResult);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        children: "Pok\xE9dex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
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
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pokemonList,
        children: allPokemons.map(function (pokemon, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Pokemon__WEBPACK_IMPORTED_MODULE_4__["default"], {
            pokemon: pokemon,
            pokemonUrl: "/pokemons/".concat(pokemon.index)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Home, "Vj/4dQL5TyHHuEJpgrh7SEtInS4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBva2Vtb25zIiwidXNlU3RhdGUiLCJhbGxQb2tlbW9ucyIsInNldEFsbFBva2Vtb25zIiwic2VhcmNoRm4iLCJpbnB1dCIsInNlYXJjaCIsImZpbHRlcmVkUG9rZW1vbnMiLCJwb2tlbW9uIiwibmFtZSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNlYXJjaFJlc3VsdCIsInRhcmdldCIsInZhbHVlIiwic3R5bGVzIiwiaGVhZGVyIiwidGl0bGUiLCJwb2tlbW9uTGlzdCIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUlBOztBQUNBO0NBR0E7O0FBQ0E7O0FBR2UsU0FBU0EsSUFBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFFRkMsc0RBQVEsQ0FBQ0QsUUFBRCxDQUZOO0FBQUEsTUFFakNFLFdBRmlDO0FBQUEsTUFFcEJDLGNBRm9CLGlCQUl4Qzs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLFFBQUlDLE1BQU0sR0FBR0QsS0FBYjtBQUNBLFFBQU1FLGdCQUFnQixHQUFHLEVBQXpCOztBQUVBLFFBQUdELE1BQU0sS0FBSyxFQUFkLEVBQWtCO0FBQ2QsYUFBT04sUUFBUDtBQUNIOztBQU51QiwrQ0FRSkUsV0FSSTtBQUFBOztBQUFBO0FBUXhCLDBEQUFpQztBQUFBLFlBQXhCTSxPQUF3Qjs7QUFDN0IsWUFBSUEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLFFBQWIsQ0FBc0JKLE1BQU0sQ0FBQ0ssV0FBUCxFQUF0QixDQUFKLEVBQWlEO0FBQzdDSiwwQkFBZ0IsQ0FBQ0ssSUFBakIsQ0FBc0JKLE9BQXRCO0FBQ0g7QUFDSjtBQVp1QjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWN4QixXQUFPRCxnQkFBUDtBQUVILEdBaEJEOztBQWtCQSxNQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxDQUFDLEVBQUk7QUFFdEIsUUFBSUMsWUFBWSxHQUFHWCxRQUFRLENBQUNVLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQTNCO0FBQ0FkLGtCQUFjLENBQUNZLFlBQUQsQ0FBZDtBQUVILEdBTEQ7O0FBT0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBSUcsOERBQU0sQ0FBQ0MsTUFBekI7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUtELDhEQUFNLENBQUNFLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLCtCQUNJO0FBQ0ksbUJBQVMsRUFBSUYsOERBQU0sQ0FBQ1osTUFEeEI7QUFFSSxjQUFJLEVBQUcsTUFGWDtBQUdJLGtCQUFRLEVBQUtPO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFXSSxxRUFBQywwREFBRDtBQUFBLDZCQUdJO0FBQUksaUJBQVMsRUFBSUssOERBQU0sQ0FBQ0csV0FBeEI7QUFBQSxrQkFFUW5CLFdBQVcsQ0FBQ29CLEdBQVosQ0FBaUIsVUFBQ2QsT0FBRCxFQUFVZSxLQUFWO0FBQUEsOEJBQ2IscUVBQUMsMkRBQUQ7QUFFQSxtQkFBTyxFQUFJZixPQUZYO0FBR0Esc0JBQVUsc0JBQWlCQSxPQUFPLENBQUNlLEtBQXpCO0FBSFYsYUFDT0EsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURhO0FBQUEsU0FBakI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUEsa0JBREo7QUE2Qkg7O0dBM0R1QnhCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWIyYmU5N2I0ZGJiZGZmMmQ2OTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vTGlicmFyaWVzXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9TdHlsZXNcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG4vL0NvbXBvbmVudHNcclxuaW1wb3J0IFBva2Vtb24gZnJvbSAnLi4vY29tcG9uZW50cy9Qb2tlbW9uJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICh7IHBva2Vtb25zIH0pIHtcclxuXHJcbiAgICBjb25zdCBbYWxsUG9rZW1vbnMsIHNldEFsbFBva2Vtb25zXSA9IHVzZVN0YXRlKHBva2Vtb25zKTtcclxuXHJcbiAgICAvL0hhbmRsZXJzXHJcbiAgICBjb25zdCBzZWFyY2hGbiA9IChpbnB1dCkgPT4ge1xyXG4gICAgICAgIGxldCBzZWFyY2ggPSBpbnB1dDtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZFBva2Vtb25zID0gW107XHJcblxyXG4gICAgICAgIGlmKHNlYXJjaCA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gcG9rZW1vbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBwb2tlbW9uIG9mIGFsbFBva2Vtb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChwb2tlbW9uLm5hbWUuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZFBva2Vtb25zLnB1c2gocG9rZW1vbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkUG9rZW1vbnM7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGUgPT4ge1xyXG4gXHJcbiAgICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IHNlYXJjaEZuKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBzZXRBbGxQb2tlbW9ucyhzZWFyY2hSZXN1bHQpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSB7IHN0eWxlcy50aXRsZSB9PlBva8OpZGV4PC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7c3R5bGVzLnNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyBoYW5kbGVDaGFuZ2UgfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWUgPSB7c3R5bGVzLnBva2Vtb25MaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBva2Vtb25zLm1hcCggKHBva2Vtb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9rZW1vblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9rZW1vbiA9IHtwb2tlbW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9rZW1vblVybCA9IHtgL3Bva2Vtb25zLyR7cG9rZW1vbi5pbmRleH1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzICgpIHtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uP2xpbWl0PTMwMCZvZmZzZXQ9MFwiKTtcclxuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5kYXRhLnJlc3VsdHM7XHJcbiAgICBcclxuICAgIGNvbnN0IHBva2Vtb25zID0gcmVzdWx0cy5tYXAoIChwb2tlbW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGxldCBwYWRkZWRJbmRleCA9IGluZGV4IDwgOSA/IFwiMDBcIjogaW5kZXggPj0gOSAmJiBpbmRleCA8IDk5ID8gXCIwXCI6IFwiXCI7XHJcbiAgICAgICAgcGFkZGVkSW5kZXggKz0gKGluZGV4ICsgMSlcclxuXHJcbiAgICAgICAgbGV0IGltYWdlID0gYGh0dHBzOi8vYXNzZXRzLnBva2Vtb24uY29tL2Fzc2V0cy9jbXMyL2ltZy9wb2tlZGV4L2Z1bGwvJHtwYWRkZWRJbmRleH0ucG5nYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ucG9rZW1vbixcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICAgIGluZGV4OiAoaW5kZXggKyAxKVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHBva2Vtb25zIH0gfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==