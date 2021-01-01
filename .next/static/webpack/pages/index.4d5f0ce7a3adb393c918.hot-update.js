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
      children: [allPokemons.length === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "No pokemons were found :("
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 47
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
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
      }, this)]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBva2Vtb25zIiwidXNlU3RhdGUiLCJhbGxQb2tlbW9ucyIsInNldEFsbFBva2Vtb25zIiwic2VhcmNoRm4iLCJpbnB1dCIsInNlYXJjaCIsImZpbHRlcmVkUG9rZW1vbnMiLCJwb2tlbW9uIiwibmFtZSIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiLCJwdXNoIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNlYXJjaFJlc3VsdCIsInRhcmdldCIsInZhbHVlIiwic3R5bGVzIiwiaGVhZGVyIiwidGl0bGUiLCJsZW5ndGgiLCJwb2tlbW9uTGlzdCIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUlBOztBQUNBO0NBR0E7O0FBQ0E7O0FBR2UsU0FBU0EsSUFBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFFRkMsc0RBQVEsQ0FBQ0QsUUFBRCxDQUZOO0FBQUEsTUFFakNFLFdBRmlDO0FBQUEsTUFFcEJDLGNBRm9CLGlCQUl4Qzs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLFFBQUlDLE1BQU0sR0FBR0QsS0FBYjtBQUNBLFFBQU1FLGdCQUFnQixHQUFHLEVBQXpCOztBQUVBLFFBQUdELE1BQU0sS0FBSyxFQUFkLEVBQWtCO0FBQ2QsYUFBT04sUUFBUDtBQUNIOztBQU51QiwrQ0FRSkUsV0FSSTtBQUFBOztBQUFBO0FBUXhCLDBEQUFpQztBQUFBLFlBQXhCTSxPQUF3Qjs7QUFDN0IsWUFBSUEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLFFBQWIsQ0FBc0JKLE1BQU0sQ0FBQ0ssV0FBUCxFQUF0QixDQUFKLEVBQWlEO0FBQzdDSiwwQkFBZ0IsQ0FBQ0ssSUFBakIsQ0FBc0JKLE9BQXRCO0FBQ0g7QUFDSjtBQVp1QjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWN4QixXQUFPRCxnQkFBUDtBQUVILEdBaEJEOztBQWtCQSxNQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxDQUFDLEVBQUk7QUFFdEIsUUFBSUMsWUFBWSxHQUFHWCxRQUFRLENBQUNVLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQTNCO0FBQ0FkLGtCQUFjLENBQUNZLFlBQUQsQ0FBZDtBQUVILEdBTEQ7O0FBT0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBSUcsOERBQU0sQ0FBQ0MsTUFBekI7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUtELDhEQUFNLENBQUNFLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLCtCQUNJO0FBQ0ksbUJBQVMsRUFBSUYsOERBQU0sQ0FBQ1osTUFEeEI7QUFFSSxjQUFJLEVBQUcsTUFGWDtBQUdJLGtCQUFRLEVBQUtPO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFXSSxxRUFBQywwREFBRDtBQUFBLGlCQUVNWCxXQUFXLENBQUNtQixNQUFaLEtBQXVCLENBQXZCLGlCQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZsQyxlQUdJO0FBQUksaUJBQVMsRUFBSUgsOERBQU0sQ0FBQ0ksV0FBeEI7QUFBQSxrQkFFUXBCLFdBQVcsQ0FBQ3FCLEdBQVosQ0FBaUIsVUFBQ2YsT0FBRCxFQUFVZ0IsS0FBVjtBQUFBLDhCQUNiLHFFQUFDLDJEQUFEO0FBRUEsbUJBQU8sRUFBSWhCLE9BRlg7QUFHQSxzQkFBVSxzQkFBaUJBLE9BQU8sQ0FBQ2dCLEtBQXpCO0FBSFYsYUFDT0EsS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURhO0FBQUEsU0FBakI7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQSxrQkFESjtBQTZCSDs7R0EzRHVCekIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZDVmMGNlN2EzYWRiMzkzYzkxOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9MaWJyYXJpZXNcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vL1N0eWxlc1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzJztcclxuXHJcbi8vQ29tcG9uZW50c1xyXG5pbXBvcnQgUG9rZW1vbiBmcm9tICcuLi9jb21wb25lbnRzL1Bva2Vtb24nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKHsgcG9rZW1vbnMgfSkge1xyXG5cclxuICAgIGNvbnN0IFthbGxQb2tlbW9ucywgc2V0QWxsUG9rZW1vbnNdID0gdXNlU3RhdGUocG9rZW1vbnMpO1xyXG5cclxuICAgIC8vSGFuZGxlcnNcclxuICAgIGNvbnN0IHNlYXJjaEZuID0gKGlucHV0KSA9PiB7XHJcbiAgICAgICAgbGV0IHNlYXJjaCA9IGlucHV0O1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUG9rZW1vbnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYoc2VhcmNoID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb2tlbW9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHBva2Vtb24gb2YgYWxsUG9rZW1vbnMpIHtcclxuICAgICAgICAgICAgaWYgKHBva2Vtb24ubmFtZS5pbmNsdWRlcyhzZWFyY2gudG9Mb3dlckNhc2UoKSkpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkUG9rZW1vbnMucHVzaChwb2tlbW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmlsdGVyZWRQb2tlbW9ucztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiBcclxuICAgICAgICBsZXQgc2VhcmNoUmVzdWx0ID0gc2VhcmNoRm4oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldEFsbFBva2Vtb25zKHNlYXJjaFJlc3VsdClcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZSA9IHsgc3R5bGVzLnRpdGxlIH0+UG9rw6lkZXg8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtzdHlsZXMuc2VhcmNofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7IGhhbmRsZUNoYW5nZSB9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7IGFsbFBva2Vtb25zLmxlbmd0aCA9PT0gMCAmJiA8aDE+Tm8gcG9rZW1vbnMgd2VyZSBmb3VuZCA6KDwvaDE+fVxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZSA9IHtzdHlsZXMucG9rZW1vbkxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUG9rZW1vbnMubWFwKCAocG9rZW1vbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb2tlbW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2tlbW9uID0ge3Bva2Vtb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2tlbW9uVXJsID0ge2AvcG9rZW1vbnMvJHtwb2tlbW9uLmluZGV4fWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgKCkge1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9MzAwJm9mZnNldD0wXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmRhdGEucmVzdWx0cztcclxuICAgIFxyXG4gICAgY29uc3QgcG9rZW1vbnMgPSByZXN1bHRzLm1hcCggKHBva2Vtb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgbGV0IHBhZGRlZEluZGV4ID0gaW5kZXggPCA5ID8gXCIwMFwiOiBpbmRleCA+PSA5ICYmIGluZGV4IDwgOTkgPyBcIjBcIjogXCJcIjtcclxuICAgICAgICBwYWRkZWRJbmRleCArPSAoaW5kZXggKyAxKVxyXG5cclxuICAgICAgICBsZXQgaW1hZ2UgPSBgaHR0cHM6Ly9hc3NldHMucG9rZW1vbi5jb20vYXNzZXRzL2NtczIvaW1nL3Bva2VkZXgvZnVsbC8ke3BhZGRlZEluZGV4fS5wbmdgO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5wb2tlbW9uLFxyXG4gICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgaW5kZXg6IChpbmRleCArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcG9rZW1vbnMgfSB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9