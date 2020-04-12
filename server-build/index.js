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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

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

/***/ "./src/assets/images/newsLogo.gif":
/*!****************************************!*\
  !*** ./src/assets/images/newsLogo.gif ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"345832632e11938a05257da524e0c5d3.gif\");\n\n//# sourceURL=webpack:///./src/assets/images/newsLogo.gif?");

/***/ }),

/***/ "./src/components/newsItem.component.js":
/*!**********************************************!*\
  !*** ./src/components/newsItem.component.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/bhumitta/Desktop/React/react-ssr-app/src/components/newsItem.component.js\";\n\n\nclass NewsItem extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    const parseURL = url => {\n      return new URL(url);\n    };\n\n    const getTimeDifference = createdDate => {\n      const diffInTime = new Date().getTime() - createdDate * 1000;\n      const diffInYears = Math.floor(diffInTime / (1000 * 3600 * 24 * 30 * 12));\n      const diffInMonths = Math.floor(diffInTime / (1000 * 3600 * 24 * 30));\n      const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));\n      const diffInHours = Math.floor(diffInTime / (1000 * 3600));\n\n      if (diffInYears >= 1) {\n        return diffInYears + ' years ago';\n      } else if (diffInMonths >= 1) {\n        return diffInMonths + ' months ago';\n      } else if (diffInDays >= 1) {\n        return diffInDays + ' days ago';\n      } else {\n        return diffInHours + ' hours ago';\n      }\n    };\n\n    const {\n      item\n    } = this.props;\n    return item && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"news-item__container\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 5\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"news-item__counts\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"news-item__comment\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }\n    }, item.num_comments), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"news-item__points\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }\n    }, item.points)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"news-item__details\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"news-item__title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }\n    }, \" \", item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"news-item__url small\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: item.url,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }\n    }, \"(\", parseURL(item.url).origin, \")\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"news-item__author small\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }\n    }, \" by \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"strong\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 55\n      }\n    }, item.author)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"news-item__time small\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }\n    }, \" \", getTimeDifference(item.created_at_i), \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"news-item__hide-link small\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }\n    }, \"[\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      onClick: alert,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }\n    }, \"hide\"), \"]\")));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsItem);\n\n//# sourceURL=webpack:///./src/components/newsItem.component.js?");

/***/ }),

/***/ "./src/components/newsList.component.js":
/*!**********************************************!*\
  !*** ./src/components/newsList.component.js ***!
  \**********************************************/
/*! exports provided: NewsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NewsList\", function() { return NewsList; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _newsItem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsItem.component */ \"./src/components/newsItem.component.js\");\n/* harmony import */ var _newsListHeader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsListHeader.component */ \"./src/components/newsListHeader.component.js\");\nvar _jsxFileName = \"/Users/bhumitta/Desktop/React/react-ssr-app/src/components/newsList.component.js\";\n\n\n\n\nclass NewsList extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    const {\n      newsItems\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n      className: \"news-list__wrapper\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 5\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_newsListHeader_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 7\n      }\n    }), newsItems.map((news, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_newsItem_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: index,\n      item: news,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }\n    })));\n  }\n\n}\n\n//# sourceURL=webpack:///./src/components/newsList.component.js?");

/***/ }),

/***/ "./src/components/newsListHeader.component.js":
/*!****************************************************!*\
  !*** ./src/components/newsListHeader.component.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_newsLogo_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/newsLogo.gif */ \"./src/assets/images/newsLogo.gif\");\nvar _jsxFileName = \"/Users/bhumitta/Desktop/React/react-ssr-app/src/components/newsListHeader.component.js\";\n\n\n\nclass NewsListHeader extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      className: \"news-list__header\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 5\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: _assets_images_newsLogo_gif__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      className: \"news-list__logo\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"news-list__top-link\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }\n    }, \"top\"), \" | \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"news-list__new-link\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 60\n      }\n    }, \"new\"));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsListHeader);\n\n//# sourceURL=webpack:///./src/components/newsListHeader.component.js?");

/***/ }),

/***/ "./src/components/newsListLanding.component.js":
/*!*****************************************************!*\
  !*** ./src/components/newsListLanding.component.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _newsList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newsList.component */ \"./src/components/newsList.component.js\");\n/* harmony import */ var _styles_newsList_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/newsList.scss */ \"./src/styles/newsList.scss\");\n/* harmony import */ var _styles_newsList_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_newsList_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_fetchNewsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/fetchNewsList */ \"./src/services/fetchNewsList.js\");\nvar _jsxFileName = \"/Users/bhumitta/Desktop/React/react-ssr-app/src/components/newsListLanding.component.js\";\n\n\n\n\n\n\n // import LoadingSpinner from './SomeLoadingSpinner';\n// import ProductList from './ProductList';\n\nclass NewsListView extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n  }\n\n  componentWillMount() {\n    const {\n      fetchNewsList\n    } = this.props;\n    fetchNewsList();\n  }\n\n  render() {\n    const {\n      newsListData,\n      error,\n      pending\n    } = this.props;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"news-list__main\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }\n    }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"news-list__error\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 27\n      }\n    }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_newsList_component__WEBPACK_IMPORTED_MODULE_4__[\"NewsList\"], {\n      newsItems: newsListData,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }\n    }));\n  }\n\n}\n\nconst mapStateToProps = state => {\n  const {\n    newsListReducer\n  } = state;\n  const newsListData = newsListReducer.newsList;\n  const {\n    pending,\n    error\n  } = newsListReducer;\n  return {\n    newsListData,\n    pending,\n    error\n  };\n};\n\nconst mapDispatchToProps = dispatch => Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"bindActionCreators\"])({\n  fetchNewsList: _services_fetchNewsList__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n}, dispatch);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapDispatchToProps)(NewsListView));\n\n//# sourceURL=webpack:///./src/components/newsListLanding.component.js?");

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

/***/ "./src/styles/newsList.scss":
/*!**********************************!*\
  !*** ./src/styles/newsList.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".news-list__main {\\n  margin: 30px 15%; }\\n\\n.news-list__header {\\n  background-color: #ff6602;\\n  padding: 10px 10px; }\\n\\n.news-list__logo {\\n  border: 1px solid #fff;\\n  vertical-align: middle;\\n  width: 15px; }\\n\\n.news-list__top-link {\\n  color: #fff;\\n  margin-left: 15px;\\n  cursor: pointer;\\n  font-size: 14px; }\\n\\n.news-list__new-link {\\n  color: #000;\\n  cursor: pointer;\\n  font-size: 14px; }\\n\\n.news-list__wrapper {\\n  padding: 10px 20px; }\\n  .news-list__wrapper li {\\n    list-style: none; }\\n  .news-list__wrapper .small {\\n    font-size: 12px;\\n    display: inline-block;\\n    color: #888785;\\n    margin-left: 5px; }\\n  .news-list__wrapper .news-item__container {\\n    display: block;\\n    padding: 5px 0;\\n    font-size: 14px; }\\n  .news-list__wrapper .news-item__container:nth-child(odd) {\\n    background-color: #f6f6ef; }\\n  .news-list__wrapper .news-item__container:nth-child(even) {\\n    background-color: #e6e6df; }\\n  .news-list__wrapper .news-item__counts {\\n    float: left; }\\n  .news-list__wrapper .news-item__details {\\n    display: inline-block; }\\n  .news-list__wrapper .news-item__comment {\\n    margin: 0 30px;\\n    width: 30px;\\n    text-align: right;\\n    display: inline-block; }\\n  .news-list__wrapper .news-item__points {\\n    margin: 0 10px;\\n    width: 30px;\\n    text-align: right;\\n    display: inline-block; }\\n  .news-list__wrapper .news-item__title {\\n    font-weight: 500;\\n    display: inline-block; }\\n  .news-list__wrapper .news-item__url a {\\n    text-decoration: none;\\n    color: inherit; }\\n  .news-list__wrapper .news-item__hide-link {\\n    cursor: pointer; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/newsList.scss?");

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