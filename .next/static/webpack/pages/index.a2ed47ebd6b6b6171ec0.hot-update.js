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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      filteredPokemons = _useState2[0],
      setFilterPokemons = _useState2[1]; //Handlers


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
    setFilterPokemons(searchResult);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        children: "Pok\xE9dex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.search,
          type: "text",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [allPokemons.length === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "No pokemons were found :("
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 47
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

_s(Home, "fbn/ACh845PvgKjBGJpREynMV30=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBva2Vtb25zIiwidXNlU3RhdGUiLCJhbGxQb2tlbW9ucyIsInNldEFsbFBva2Vtb25zIiwiZmlsdGVyZWRQb2tlbW9ucyIsInNldEZpbHRlclBva2Vtb25zIiwic2VhcmNoRm4iLCJpbnB1dCIsInNlYXJjaCIsInBva2Vtb24iLCJuYW1lIiwiaW5jbHVkZXMiLCJ0b0xvd2VyQ2FzZSIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2VhcmNoUmVzdWx0IiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZXMiLCJoZWFkZXIiLCJ0aXRsZSIsImxlbmd0aCIsInBva2Vtb25MaXN0IiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUE7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFHZSxTQUFTQSxJQUFULE9BQTZCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUVGQyxzREFBUSxDQUFDRCxRQUFELENBRk47QUFBQSxNQUVqQ0UsV0FGaUM7QUFBQSxNQUVwQkMsY0FGb0I7O0FBQUEsbUJBR01GLHNEQUFRLENBQUMsRUFBRCxDQUhkO0FBQUEsTUFHakNHLGdCQUhpQztBQUFBLE1BR2ZDLGlCQUhlLGtCQU14Qzs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLFFBQUlDLE1BQU0sR0FBR0QsS0FBYjtBQUNBLFFBQU1ILGdCQUFnQixHQUFHLEVBQXpCOztBQUVBLFFBQUdJLE1BQU0sS0FBSyxFQUFkLEVBQWtCO0FBQ2QsYUFBT1IsUUFBUDtBQUNIOztBQU51QiwrQ0FRSkUsV0FSSTtBQUFBOztBQUFBO0FBUXhCLDBEQUFpQztBQUFBLFlBQXhCTyxPQUF3Qjs7QUFDN0IsWUFBSUEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLFFBQWIsQ0FBc0JILE1BQU0sQ0FBQ0ksV0FBUCxFQUF0QixDQUFKLEVBQWlEO0FBQzdDUiwwQkFBZ0IsQ0FBQ1MsSUFBakIsQ0FBc0JKLE9BQXRCO0FBQ0g7QUFDSjtBQVp1QjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWN4QixXQUFPTCxnQkFBUDtBQUVILEdBaEJEOztBQWtCQSxNQUFNVSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxDQUFDLEVBQUk7QUFFdEIsUUFBSUMsWUFBWSxHQUFHVixRQUFRLENBQUNTLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQTNCO0FBQ0FiLHFCQUFpQixDQUFDVyxZQUFELENBQWpCO0FBRUgsR0FMRDs7QUFPQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFJRyw4REFBTSxDQUFDQyxNQUF6QjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBS0QsOERBQU0sQ0FBQ0UsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsK0JBQ0k7QUFDSSxtQkFBUyxFQUFJRiw4REFBTSxDQUFDWCxNQUR4QjtBQUVJLGNBQUksRUFBRyxNQUZYO0FBR0ksa0JBQVEsRUFBS007QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVdJLHFFQUFDLDBEQUFEO0FBQUEsaUJBRU1aLFdBQVcsQ0FBQ29CLE1BQVosS0FBdUIsQ0FBdkIsaUJBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRmxDLGVBR0k7QUFBSSxpQkFBUyxFQUFJSCw4REFBTSxDQUFDSSxXQUF4QjtBQUFBLGtCQUVRbkIsZ0JBQWdCLENBQUNvQixHQUFqQixDQUFzQixVQUFDZixPQUFELEVBQVVnQixLQUFWO0FBQUEsOEJBQ2xCLHFFQUFDLDJEQUFEO0FBRUEsbUJBQU8sRUFBSWhCLE9BRlg7QUFHQSxzQkFBVSxzQkFBaUJBLE9BQU8sQ0FBQ2dCLEtBQXpCO0FBSFYsYUFDT0EsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURrQjtBQUFBLFNBQXRCO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUEsa0JBREo7QUE2Qkg7O0dBN0R1QjFCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTJlZDQ3ZWJkNmI2YjYxNzFlYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vTGlicmFyaWVzXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLy9TdHlsZXNcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2hvbWUubW9kdWxlLmNzcyc7XHJcblxyXG4vL0NvbXBvbmVudHNcclxuaW1wb3J0IFBva2Vtb24gZnJvbSAnLi4vY29tcG9uZW50cy9Qb2tlbW9uJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICh7IHBva2Vtb25zIH0pIHtcclxuXHJcbiAgICBjb25zdCBbYWxsUG9rZW1vbnMsIHNldEFsbFBva2Vtb25zXSA9IHVzZVN0YXRlKHBva2Vtb25zKTtcclxuICAgIGNvbnN0IFtmaWx0ZXJlZFBva2Vtb25zLCBzZXRGaWx0ZXJQb2tlbW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICAgIC8vSGFuZGxlcnNcclxuICAgIGNvbnN0IHNlYXJjaEZuID0gKGlucHV0KSA9PiB7XHJcbiAgICAgICAgbGV0IHNlYXJjaCA9IGlucHV0O1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUG9rZW1vbnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYoc2VhcmNoID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb2tlbW9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHBva2Vtb24gb2YgYWxsUG9rZW1vbnMpIHtcclxuICAgICAgICAgICAgaWYgKHBva2Vtb24ubmFtZS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkUG9rZW1vbnMucHVzaChwb2tlbW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmlsdGVyZWRQb2tlbW9ucztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiBcclxuICAgICAgICBsZXQgc2VhcmNoUmVzdWx0ID0gc2VhcmNoRm4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldEZpbHRlclBva2Vtb25zKHNlYXJjaFJlc3VsdClcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9IHsgc3R5bGVzLnRpdGxlIH0+UG9rw6lkZXg8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtzdHlsZXMuc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IGhhbmRsZUNoYW5nZSB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7IGFsbFBva2Vtb25zLmxlbmd0aCA9PT0gMCAmJiA8aDM+Tm8gcG9rZW1vbnMgd2VyZSBmb3VuZCA6KDwvaDM+fVxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZSA9IHtzdHlsZXMucG9rZW1vbkxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRQb2tlbW9ucy5tYXAoIChwb2tlbW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBva2Vtb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBva2Vtb24gPSB7cG9rZW1vbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBva2Vtb25VcmwgPSB7YC9wb2tlbW9ucy8ke3Bva2Vtb24uaW5kZXh9YH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyAoKSB7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyhcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD0zMDAmb2Zmc2V0PTBcIik7XHJcbiAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgcmVzcG9uc2UuZGF0YS5yZXN1bHRzO1xyXG4gICAgXHJcbiAgICBjb25zdCBwb2tlbW9ucyA9IHJlc3VsdHMubWFwKCAocG9rZW1vbiwgaW5kZXgpID0+IHtcclxuICAgICAgICBsZXQgcGFkZGVkSW5kZXggPSBpbmRleCA8IDkgPyBcIjAwXCI6IGluZGV4ID49IDkgJiYgaW5kZXggPCA5OSA/IFwiMFwiOiBcIlwiO1xyXG4gICAgICAgIHBhZGRlZEluZGV4ICs9IChpbmRleCArIDEpXHJcblxyXG4gICAgICAgIGxldCBpbWFnZSA9IGBodHRwczovL2Fzc2V0cy5wb2tlbW9uLmNvbS9hc3NldHMvY21zMi9pbWcvcG9rZWRleC9mdWxsLyR7cGFkZGVkSW5kZXh9LnBuZ2A7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnBva2Vtb24sXHJcbiAgICAgICAgICAgIGltYWdlLFxyXG4gICAgICAgICAgICBpbmRleDogKGluZGV4ICsgMSlcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4geyBwcm9wczogeyBwb2tlbW9ucyB9IH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=