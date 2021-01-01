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
        children: allPokemons.map(function (pokemon, index) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBva2Vtb25zIiwidXNlU3RhdGUiLCJhbGxQb2tlbW9ucyIsInNldEFsbFBva2Vtb25zIiwicG9rZW1vblNlYXJjaCIsInNldFBva2Vtb25TZWFyY2giLCJoYW5kbGVDaGFuZ2UiLCJlIiwic2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJlZFBva2Vtb25zIiwicG9rZW1vbiIsIm5hbWUiLCJpbmNsdWRlcyIsInB1c2giLCJzdHlsZXMiLCJoZWFkZXIiLCJ0aXRsZSIsInBva2Vtb25MaXN0IiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUE7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFHZSxTQUFTQSxJQUFULE9BQTZCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUVGQyxzREFBUSxDQUFDRCxRQUFELENBRk47QUFBQSxNQUVqQ0UsV0FGaUM7QUFBQSxNQUVwQkMsY0FGb0I7O0FBQUEsbUJBR0VGLHNEQUFRLENBQUMsRUFBRCxDQUhWO0FBQUEsTUFHakNHLGFBSGlDO0FBQUEsTUFHbEJDLGdCQUhrQixrQkFLeEM7OztBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLENBQUMsRUFBSTtBQUN0QixRQUFJQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUF0QjtBQUNBLFFBQU1DLGdCQUFnQixHQUFHLEVBQXpCOztBQUZzQiwrQ0FJRlQsV0FKRTtBQUFBOztBQUFBO0FBSXRCLDBEQUFpQztBQUFBLFlBQXhCVSxPQUF3Qjs7QUFDN0IsWUFBSUEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLFFBQWIsQ0FBc0JOLE1BQXRCLENBQUosRUFBbUM7QUFDL0JHLDBCQUFnQixDQUFDSSxJQUFqQixDQUFzQkgsT0FBdEI7QUFDSDtBQUNKO0FBUnFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVXRCVCxrQkFBYyxDQUFDUSxnQkFBRCxDQUFkO0FBQ0gsR0FYRDs7QUFhQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFJSyw4REFBTSxDQUFDQyxNQUF6QjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBS0QsOERBQU0sQ0FBQ0UsS0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUEsK0JBQ0k7QUFDSSxtQkFBUyxFQUFJRiw4REFBTSxDQUFDUixNQUR4QjtBQUVJLGNBQUksRUFBRyxNQUZYO0FBR0ksa0JBQVEsRUFBS0Y7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQVdJLHFFQUFDLDBEQUFEO0FBQUEsNkJBR0k7QUFBSSxpQkFBUyxFQUFJVSw4REFBTSxDQUFDRyxXQUF4QjtBQUFBLGtCQUVRakIsV0FBVyxDQUFDa0IsR0FBWixDQUFpQixVQUFDUixPQUFELEVBQVVTLEtBQVY7QUFBQSw4QkFDYixxRUFBQywyREFBRDtBQUVBLG1CQUFPLEVBQUlULE9BRlg7QUFHQSxzQkFBVSxzQkFBaUJTLEtBQUssR0FBRyxDQUF6QjtBQUhWLGFBQ09BLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYTtBQUFBLFNBQWpCO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBLGtCQURKO0FBNkJIOztHQWhEdUJ0QixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU1ZjVmODMzNDg4MzA3MmExY2Q0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0xpYnJhcmllc1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vU3R5bGVzXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnO1xyXG5cclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBQb2tlbW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUG9rZW1vbic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoeyBwb2tlbW9ucyB9KSB7XHJcblxyXG4gICAgY29uc3QgW2FsbFBva2Vtb25zLCBzZXRBbGxQb2tlbW9uc10gPSB1c2VTdGF0ZShwb2tlbW9ucyk7XHJcbiAgICBjb25zdCBbcG9rZW1vblNlYXJjaCwgc2V0UG9rZW1vblNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICAvL0hhbmRsZXJzXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBsZXQgc2VhcmNoID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRQb2tlbW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwb2tlbW9uIG9mIGFsbFBva2Vtb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChwb2tlbW9uLm5hbWUuaW5jbHVkZXMoc2VhcmNoKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRQb2tlbW9ucy5wdXNoKHBva2Vtb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldEFsbFBva2Vtb25zKGZpbHRlcmVkUG9rZW1vbnMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSB7IHN0eWxlcy50aXRsZSB9PlBva8OpZGV4PC9oMT5cclxuICAgICAgICAgICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7c3R5bGVzLnNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0geyBoYW5kbGVDaGFuZ2UgfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWUgPSB7c3R5bGVzLnBva2Vtb25MaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFBva2Vtb25zLm1hcCggKHBva2Vtb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9rZW1vblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9rZW1vbiA9IHtwb2tlbW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9rZW1vblVybCA9IHtgL3Bva2Vtb25zLyR7aW5kZXggKyAxfWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgKCkge1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9MzAwJm9mZnNldD0wXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmRhdGEucmVzdWx0cztcclxuICAgIFxyXG4gICAgY29uc3QgcG9rZW1vbnMgPSByZXN1bHRzLm1hcCggKHBva2Vtb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgbGV0IHBhZGRlZEluZGV4ID0gaW5kZXggPCA5ID8gXCIwMFwiOiBpbmRleCA+PSA5ICYmIGluZGV4IDwgOTkgPyBcIjBcIjogXCJcIjtcclxuICAgICAgICBwYWRkZWRJbmRleCArPSAoaW5kZXggKyAxKVxyXG5cclxuICAgICAgICBsZXQgaW1hZ2UgPSBgaHR0cHM6Ly9hc3NldHMucG9rZW1vbi5jb20vYXNzZXRzL2NtczIvaW1nL3Bva2VkZXgvZnVsbC8ke3BhZGRlZEluZGV4fS5wbmdgO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5wb2tlbW9uLFxyXG4gICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IHBva2Vtb25zIH0gfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==