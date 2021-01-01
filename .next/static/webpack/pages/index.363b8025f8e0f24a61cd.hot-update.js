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

        if (pokemon.name.includes(search.toLowerCase()).trim("")) {
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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
        children: "Pok\xE9dex"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.search,
          type: "text",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: [filteredPokemons.length === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "No pokemons were found :("
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 52
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: _styles_home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.pokemonList,
        children: filteredPokemons.map(function (pokemon, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Pokemon__WEBPACK_IMPORTED_MODULE_4__["default"], {
            pokemon: pokemon,
            pokemonUrl: "/pokemons/".concat(pokemon.index)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBva2Vtb25zIiwidXNlU3RhdGUiLCJmaWx0ZXJlZFBva2Vtb25zIiwic2V0RmlsdGVyUG9rZW1vbnMiLCJzZWFyY2hGbiIsImlucHV0Iiwic2VhcmNoIiwicG9rZW1vbiIsIm5hbWUiLCJpbmNsdWRlcyIsInRvTG93ZXJDYXNlIiwidHJpbSIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdHlsZXMiLCJoZWFkZXIiLCJ0aXRsZSIsImxlbmd0aCIsInBva2Vtb25MaXN0IiwibWFwIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBSUE7O0FBQ0E7Q0FHQTs7QUFDQTs7QUFHZSxTQUFTQSxJQUFULE9BQTZCO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUV4QztBQUZ3QyxrQkFHTUMsc0RBQVEsQ0FBQ0QsUUFBRCxDQUhkO0FBQUEsTUFHakNFLGdCQUhpQztBQUFBLE1BR2ZDLGlCQUhlLGlCQUt4Qzs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3hCLFFBQUlDLE1BQU0sR0FBR0QsS0FBYjtBQUNBLFFBQU1ILGdCQUFnQixHQUFHLEVBQXpCOztBQUVBLFFBQUdJLE1BQU0sS0FBSyxFQUFkLEVBQWtCO0FBQ2QsYUFBT04sUUFBUDtBQUNIOztBQU51QiwrQ0FRSkEsUUFSSTtBQUFBOztBQUFBO0FBUXhCLDBEQUE4QjtBQUFBLFlBQXJCTyxPQUFxQjs7QUFFMUIsWUFBSUEsT0FBTyxDQUFDQyxJQUFSLENBQWFDLFFBQWIsQ0FBc0JILE1BQU0sQ0FBQ0ksV0FBUCxFQUF0QixFQUE0Q0MsSUFBNUMsQ0FBaUQsRUFBakQsQ0FBSixFQUEwRDtBQUN0RFQsMEJBQWdCLENBQUNVLElBQWpCLENBQXNCTCxPQUF0QjtBQUNIO0FBQ0o7QUFidUI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFleEIsV0FBT0wsZ0JBQVA7QUFDSCxHQWhCRCxDQU53QyxDQXdCeEM7OztBQUNBLE1BQU1XLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLENBQUMsRUFBSTtBQUN0QlgscUJBQWlCLENBQUNDLFFBQVEsQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVCxDQUFqQjtBQUNILEdBRkQ7O0FBSUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBSUMsOERBQU0sQ0FBQ0MsTUFBekI7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUtELDhEQUFNLENBQUNFLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLCtCQUNJO0FBQ0ksbUJBQVMsRUFBSUYsOERBQU0sQ0FBQ1gsTUFEeEI7QUFFSSxjQUFJLEVBQUcsTUFGWDtBQUdJLGtCQUFRLEVBQUtPO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFXSSxxRUFBQywwREFBRDtBQUFBLGlCQUVNWCxnQkFBZ0IsQ0FBQ2tCLE1BQWpCLEtBQTRCLENBQTVCLGlCQUFpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZ2QyxlQUdJO0FBQUksaUJBQVMsRUFBSUgsOERBQU0sQ0FBQ0ksV0FBeEI7QUFBQSxrQkFFUW5CLGdCQUFnQixDQUFDb0IsR0FBakIsQ0FBc0IsVUFBQ2YsT0FBRCxFQUFVZ0IsS0FBVjtBQUFBLDhCQUNsQixxRUFBQywyREFBRDtBQUVBLG1CQUFPLEVBQUloQixPQUZYO0FBR0Esc0JBQVUsc0JBQWlCQSxPQUFPLENBQUNnQixLQUF6QjtBQUhWLGFBQ09BLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEa0I7QUFBQSxTQUF0QjtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBLGtCQURKO0FBNkJIOztHQTFEdUJ4QixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM2M2I4MDI1ZjhlMGYyNGE2MWNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0xpYnJhcmllc1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vU3R5bGVzXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9ob21lLm1vZHVsZS5jc3MnO1xyXG5cclxuLy9Db21wb25lbnRzXHJcbmltcG9ydCBQb2tlbW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUG9rZW1vbic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoeyBwb2tlbW9ucyB9KSB7XHJcblxyXG4gICAgLy9Vc2VTdGF0ZVxyXG4gICAgY29uc3QgW2ZpbHRlcmVkUG9rZW1vbnMsIHNldEZpbHRlclBva2Vtb25zXSA9IHVzZVN0YXRlKHBva2Vtb25zKTtcclxuXHJcbiAgICAvL1NlYXJjaFBva2Vtb24gZnVuY3Rpb25cclxuICAgIGNvbnN0IHNlYXJjaEZuID0gKGlucHV0KSA9PiB7XHJcbiAgICAgICAgbGV0IHNlYXJjaCA9IGlucHV0O1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUG9rZW1vbnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYoc2VhcmNoID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwb2tlbW9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IHBva2Vtb24gb2YgcG9rZW1vbnMpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChwb2tlbW9uLm5hbWUuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpLnRyaW0oXCJcIikpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcmVkUG9rZW1vbnMucHVzaChwb2tlbW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmlsdGVyZWRQb2tlbW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvL0hhbmRsZXJzXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuICAgICAgICBzZXRGaWx0ZXJQb2tlbW9ucyhzZWFyY2hGbihlLnRhcmdldC52YWx1ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lID0geyBzdHlsZXMudGl0bGUgfT5Qb2vDqWRleDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge3N0eWxlcy5zZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHsgaGFuZGxlQ2hhbmdlIH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT4gIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsgZmlsdGVyZWRQb2tlbW9ucy5sZW5ndGggPT09IDAgJiYgPGgzPk5vIHBva2Vtb25zIHdlcmUgZm91bmQgOig8L2gzPn1cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWUgPSB7c3R5bGVzLnBva2Vtb25MaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkUG9rZW1vbnMubWFwKCAocG9rZW1vbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb2tlbW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2tlbW9uID0ge3Bva2Vtb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2tlbW9uVXJsID0ge2AvcG9rZW1vbnMvJHtwb2tlbW9uLmluZGV4fWB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgKCkge1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9MzAwJm9mZnNldD0wXCIpO1xyXG4gICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmRhdGEucmVzdWx0cztcclxuICAgIFxyXG4gICAgY29uc3QgcG9rZW1vbnMgPSByZXN1bHRzLm1hcCggKHBva2Vtb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgbGV0IHBhZGRlZEluZGV4ID0gaW5kZXggPCA5ID8gXCIwMFwiOiBpbmRleCA+PSA5ICYmIGluZGV4IDwgOTkgPyBcIjBcIjogXCJcIjtcclxuICAgICAgICBwYWRkZWRJbmRleCArPSAoaW5kZXggKyAxKVxyXG5cclxuICAgICAgICBsZXQgaW1hZ2UgPSBgaHR0cHM6Ly9hc3NldHMucG9rZW1vbi5jb20vYXNzZXRzL2NtczIvaW1nL3Bva2VkZXgvZnVsbC8ke3BhZGRlZEluZGV4fS5wbmdgO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5wb2tlbW9uLFxyXG4gICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgaW5kZXg6IChpbmRleCArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgcG9rZW1vbnMgfSB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9