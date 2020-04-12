/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\nvar _jsxFileName = \"/Users/bhumitta/Desktop/React/react-ssr-app/server/index.js\";\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.get('/*', (req, res) => {\n  const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 45\n    }\n  }));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`));\n  });\n});\napp.listen(PORT, () => {\n  console.log(`😎 Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_newsListLanding_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/newsListLanding.component */ \"./src/components/newsListLanding.component.js\");\nvar _jsxFileName = \"/Users/bhumitta/Desktop/React/react-ssr-app/src/App.js\";\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_newsListLanding_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 10\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/actions/news.action.js":
/*!************************************!*\
  !*** ./src/actions/news.action.js ***!
  \************************************/
/*! exports provided: FETCH_NEWSLIST_PENDING, FETCH_NEWSLIST_SUCCESS, FETCH_NEWSLIST_ERROR, newsListActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_NEWSLIST_PENDING\", function() { return FETCH_NEWSLIST_PENDING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_NEWSLIST_SUCCESS\", function() { return FETCH_NEWSLIST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FETCH_NEWSLIST_ERROR\", function() { return FETCH_NEWSLIST_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsListActions\", function() { return newsListActions; });\nconst FETCH_NEWSLIST_PENDING = 'FETCH_NEWSLIST_PENDING';\nconst FETCH_NEWSLIST_SUCCESS = 'FETCH_NEWSLIST_SUCCESS';\nconst FETCH_NEWSLIST_ERROR = 'FETCH_NEWSLIST_ERROR';\nconst newsListActions = {\n  fetchNewsListPending,\n  fetchNewsListSuccess,\n  fetchNewsListError\n};\n\nfunction fetchNewsListPending() {\n  return {\n    type: FETCH_NEWSLIST_PENDING\n  };\n}\n\nfunction fetchNewsListSuccess(newsList) {\n  return {\n    type: FETCH_NEWSLIST_SUCCESS,\n    newsList: newsList\n  };\n}\n\nfunction fetchNewsListError(error) {\n  return {\n    type: FETCH_NEWSLIST_ERROR,\n    error: error\n  };\n}\n\n//# sourceURL=webpack:///./src/actions/news.action.js?");

/***/ }),

/***/ "./src/components/newsListLanding.component.js":
/*!*****************************************************!*\
  !*** ./src/components/newsListLanding.component.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_fetchNewsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/fetchNewsList */ \"./src/services/fetchNewsList.js\");\n/* harmony import */ var _reducers_newsList_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/newsList.reducer */ \"./src/reducers/newsList.reducer.js\");\nvar _jsxFileName = \"/Users/bhumitta/Desktop/React/react-ssr-app/src/components/newsListLanding.component.js\";\n\n\n\n\n\n // import LoadingSpinner from './SomeLoadingSpinner';\n// import ProductList from './ProductList';\n\nclass NewsListView extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n  }\n\n  componentWillMount() {\n    const {\n      fetchNewsList\n    } = this.props;\n    fetchNewsList();\n  }\n\n  render() {\n    const {\n      newsList,\n      error,\n      pending\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"news-list-wrapper\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 13\n      }\n    }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"news-list-error\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 27\n      }\n    }, error));\n  }\n\n}\n\nconst mapStateToProps = state => {\n  const {\n    newsListReducer\n  } = state;\n  const {\n    newsList,\n    pending,\n    error\n  } = newsListReducer;\n  return {\n    newsList,\n    pending,\n    error\n  };\n};\n\nconst mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"bindActionCreators\"])({\n  fetchNewsList: _services_fetchNewsList__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n}, dispatch);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(NewsListView));\n\n//# sourceURL=webpack:///./src/components/newsListLanding.component.js?");

/***/ }),

/***/ "./src/reducers/newsList.reducer.js":
/*!******************************************!*\
  !*** ./src/reducers/newsList.reducer.js ***!
  \******************************************/
/*! exports provided: newsListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newsListReducer\", function() { return newsListReducer; });\n/* harmony import */ var _actions_news_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/news.action */ \"./src/actions/news.action.js\");\n\nconst initialState = {\n  pending: false,\n  newsList: [],\n  error: null\n};\nfunction newsListReducer(state = initialState, action) {\n  switch (action.type) {\n    case _actions_news_action__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_NEWSLIST_PENDING\"]:\n      return { ...state,\n        pending: true\n      };\n\n    case _actions_news_action__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_NEWSLIST_SUCCESS\"]:\n      return { ...state,\n        pending: false,\n        newsList: action.newsList\n      };\n\n    case _actions_news_action__WEBPACK_IMPORTED_MODULE_0__[\"FETCH_NEWSLIST_ERROR\"]:\n      return { ...state,\n        pending: false,\n        error: action.error\n      };\n\n    default:\n      return state;\n  }\n}\n\n//# sourceURL=webpack:///./src/reducers/newsList.reducer.js?");

/***/ }),

/***/ "./src/services/fetchNewsList.js":
/*!***************************************!*\
  !*** ./src/services/fetchNewsList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_news_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/news.action */ \"./src/actions/news.action.js\");\n\n\nfunction fetchNewsList() {\n  return dispatch => {\n    dispatch(_actions_news_action__WEBPACK_IMPORTED_MODULE_0__[\"newsListActions\"].fetchNewsListPending());\n    fetch('https://hn.algolia.com/api/v1/search?tags=front_page').then(res => res.json()).then(res => {\n      if (!res) {\n        throw res.error;\n      }\n\n      dispatch(_actions_news_action__WEBPACK_IMPORTED_MODULE_0__[\"newsListActions\"].fetchNewsListSuccess(res.hits));\n      return res.hits;\n    }).catch(error => {\n      dispatch(_actions_news_action__WEBPACK_IMPORTED_MODULE_0__[\"newsListActions\"].fetchNewsListError(error));\n    });\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchNewsList);\n\n//# sourceURL=webpack:///./src/services/fetchNewsList.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ })

/******/ });