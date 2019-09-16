module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./globals.ts":
/*!********************!*\
  !*** ./globals.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//\"C:\\\\Users\\\\renan\\\\OneDrive\\\\Documentos\\\\React\\\\VidataUniversal\"\nglobal.__workspaceFolder = __webpack_require__(/*! path */ \"path\").resolve();\n\n//# sourceURL=webpack:///./globals.ts?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/root */ \"./src/pages/root.tsx\");\n/* harmony import */ var _pages_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/profile */ \"./src/pages/profile.tsx\");\n/* harmony import */ var _pages_signin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/signin */ \"./src/pages/signin.tsx\");\n/* harmony import */ var _pages_signup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/signup */ \"./src/pages/signup.tsx\");\n/* harmony import */ var _components_routes_RestrictRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/routes/RestrictRoute */ \"./src/components/routes/RestrictRoute.tsx\");\n/* harmony import */ var _pages_test__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/test */ \"./src/pages/test.tsx\");\n/* harmony import */ var _components_static_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/static/Header */ \"./src/components/static/Header.tsx\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n/** \r\n * Configures route logic and has access to all state\r\n */\nvar App = function App(props) {\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    id: \"App\"\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _pages_root__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    exact: true,\n    path: \"/test\",\n    component: _pages_test__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_routes_RestrictRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    exact: true,\n    allow: props.session.logged,\n    path: \"/profile\",\n    component: _pages_profile__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    fallbackComponent: _pages_root__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_routes_RestrictRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    exact: true,\n    allow: !props.session.logged,\n    path: \"/signin\",\n    component: _pages_signin__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    fallbackRender: function fallbackRender() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__[\"Redirect\"], {\n        to: \"/profile\"\n      });\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_routes_RestrictRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    exact: true,\n    allow: !props.session.logged,\n    path: \"/signup\",\n    component: _pages_signup__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    fallbackComponent: _pages_root__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n    render: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_static_Header__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", null, \"Not Found\"));\n    }\n  })));\n};\n\nvar mapState = function mapState(state) {\n  return _objectSpread({}, state);\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    dispatch: dispatch\n  };\n};\n/** \r\n * Configures route logic and has access to all state (must be used with a Router and the Provider)\r\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapState, mapDispatch)(App));\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/components/Alert.tsx":
/*!**********************************!*\
  !*** ./src/components/Alert.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Alert; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styled_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled/buttons */ \"./src/components/styled/buttons.ts\");\n\n\n\n\n\nfunction Alert(props) {\n  var TYPE = props.type || \"info\"; // default type === \"info\"\n\n  /**\r\n   * Colors grouped by type\r\n   */\n\n  var COLORS = {\n    warn: {\n      color: \"#F95D09\",\n      backgroundColor: \"#FCC4A4\",\n      hoverColor: \"#996909\"\n    },\n    error: {\n      color: \"#EF362F\",\n      backgroundColor: \"#FF8E82\",\n      hoverColor: \"#682F2F\"\n    },\n    info: {\n      color: \"#248FAD\",\n      backgroundColor: \"#B2D4FF\",\n      hoverColor: \"#4C6C75\"\n    }\n    /** Local/inline styles */\n\n  };\n  var STYLES = {\n    alertContainer: {\n      color: COLORS[TYPE].color,\n      backgroundColor: COLORS[TYPE].backgroundColor,\n      display: \"inline-flex\",\n      flexDirection: \"row\",\n      alignItems: \"center\",\n      width: props.width,\n      height: props.height,\n      zIndex: 100000\n    },\n    alertText: {\n      display: \"inline\",\n      marginLeft: \"1rem\"\n    },\n    closeButton: {\n      padding: \"0 0.8rem\"\n    }\n    /**\r\n     * Local state is responsible by the hovering style\r\n     */\n\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(COLORS[TYPE].color),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      buttonColor = _useState2[0],\n      setButtonColor = _useState2[1];\n\n  var enableHoverColor = function enableHoverColor() {\n    setButtonColor(COLORS[TYPE].hoverColor);\n  };\n\n  var disableHoverColor = function disableHoverColor() {\n    setButtonColor(COLORS[TYPE].color);\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    style: STYLES.alertContainer\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"p\", {\n    style: STYLES.alertText,\n    \"data-testid\": \"Alert-text\"\n  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_buttons__WEBPACK_IMPORTED_MODULE_4__[\"BtnTransparent\"], {\n    style: STYLES.closeButton,\n    \"data-testid\": \"close-button\",\n    onClick: props.onClick,\n    onMouseEnter: enableHoverColor,\n    onMouseLeave: disableHoverColor\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__[\"FontAwesomeIcon\"], {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faTimes\"],\n    style: {\n      color: buttonColor,\n      fontSize: \"1.5rem\"\n    }\n  })));\n}\n\n//# sourceURL=webpack:///./src/components/Alert.tsx?");

/***/ }),

/***/ "./src/components/Avatar.tsx":
/*!***********************************!*\
  !*** ./src/components/Avatar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Alert */ \"./src/components/Alert.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styled_positionals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled/positionals */ \"./src/components/styled/positionals.ts\");\n\n\n\n\n\n\nvar Avatar = function Avatar(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(!!props.errorMsg),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      showAlert = _useState2[0],\n      setShowAlert = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setShowAlert(!!props.errorMsg);\n  }, [props.errorMsg]);\n  console.log(\"Avatar rendered\");\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled_positionals__WEBPACK_IMPORTED_MODULE_4__[\"Center\"], {\n    style: {\n      width: props.length,\n      height: props.length,\n      backgroundColor: \"black\"\n    }\n  }, props.lastModified && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n    src: \"/images/avatar/\".concat(props.username, \".v.\").concat(props.lastModified.toString(20), \".jpeg\"),\n    style: {\n      width: props.length,\n      height: props.length,\n      position: \"absolute\"\n    },\n    alt: \"User avatar\"\n  }), showAlert && props.errorMsg && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Alert__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onClick: function onClick() {\n      return setShowAlert(false);\n    },\n    type: \"error\"\n  }, props.errorMsg));\n};\n\nvar mapState = function mapState(state) {\n  return {\n    lastModified: state.profile.lastModified.avatar\n  };\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    dispatch: dispatch\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapState, mapDispatch)(Avatar));\n\n//# sourceURL=webpack:///./src/components/Avatar.tsx?");

/***/ }),

/***/ "./src/components/AvatarEdit.tsx":
/*!***************************************!*\
  !*** ./src/components/AvatarEdit.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Avatar */ \"./src/components/Avatar.tsx\");\n/* harmony import */ var _hooks_useToggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useToggle */ \"./src/hooks/useToggle.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _server_routes_api_db_avatar_requests__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../server/routes/api/db/avatar/requests */ \"./src/server/routes/api/db/avatar/requests.ts\");\n/* harmony import */ var _server_utils_hasDispatchOrder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../server/utils/hasDispatchOrder */ \"./src/server/utils/hasDispatchOrder.ts\");\n/* harmony import */ var _styled_positionals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styled/positionals */ \"./src/components/styled/positionals.ts\");\n\n\n\n\n\n\n\n\n\n\n\nvar AvatarEdit = function AvatarEdit(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),\n      errorMsg = _useState2[0],\n      setErrorMsg = _useState2[1];\n\n  var _useToggle = Object(_hooks_useToggle__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(0),\n      _useToggle2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useToggle, 2),\n      forceUpdateKey = _useToggle2[0],\n      forceUpdate = _useToggle2[1]; // When closing the alert in Avatar, errorMsg remains the same, so setErrorMsg might be ignored by the Alert\n  // Use forceUpdate to make the error alert always appear when needed, even if the error message didn't change\n\n\n  var selectorStyle = {\n    color: \"#909090\",\n    padding: \"0.8rem\",\n    fontSize: \"1.2rem\",\n    cursor: \"pointer\"\n  };\n\n  var sendAvatar =\n  /*#__PURE__*/\n  function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var files, file, res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              files = e.currentTarget.files;\n\n              if (!files) {\n                _context.next = 15;\n                break;\n              }\n\n              file = files.item(0);\n\n              if (!file) {\n                _context.next = 15;\n                break;\n              }\n\n              if (!(file.size > 100000)) {\n                _context.next = 8;\n                break;\n              }\n\n              setErrorMsg(\"Your file exceeds 100kb\");\n              forceUpdate(); // change Avatar key (to always display error alert)\n\n              return _context.abrupt(\"return\");\n\n            case 8:\n              setErrorMsg(\"\");\n              console.log(\"sending file in client\");\n              _context.next = 12;\n              return Object(_server_routes_api_db_avatar_requests__WEBPACK_IMPORTED_MODULE_7__[\"askSaveAvatar\"])(file);\n\n            case 12:\n              res = _context.sent;\n              console.log(\"received dispatch order\");\n\n              if (Object(_server_utils_hasDispatchOrder__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(res)) {\n                console.log(\"sending dispatch order\");\n                props.dispatch(res.data.action);\n              }\n\n            case 15:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function sendAvatar(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n  /**\r\n   * The file input resets its value when clicked\r\n   * That way, the alert error can be shown even if the file chosen is the same\r\n   */\n\n\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styled_positionals__WEBPACK_IMPORTED_MODULE_9__[\"FlexVertical\"], {\n    style: props.style\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    length: \"12rem\",\n    username: props.profile.username,\n    errorMsg: errorMsg,\n    key: forceUpdateKey\n  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"label\", {\n    htmlFor: \"profile-file-chooser\",\n    style: selectorStyle\n  }, \"Change Avatar\"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"input\", {\n    type: \"file\",\n    style: {\n      display: \"none\"\n    },\n    id: \"profile-file-chooser\",\n    onClick: function onClick(e) {\n      return e.currentTarget.value = \"\";\n    },\n    onChange: sendAvatar\n  }));\n};\n\nvar mapState = function mapState(state) {\n  return {\n    logged: state.session.logged,\n    profile: {\n      username: state.profile.username || \"\"\n    }\n  };\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    dispatch: dispatch\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(mapState)(AvatarEdit));\n\n//# sourceURL=webpack:///./src/components/AvatarEdit.tsx?");

/***/ }),

/***/ "./src/components/FixableTextArea.tsx":
/*!********************************************!*\
  !*** ./src/components/FixableTextArea.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_COLOR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/COLOR */ \"./src/constants/COLOR.ts\");\n\n\n\n\nvar FixableTextArea = function FixableTextArea(props) {\n  if (props.text !== undefined && props.defaultText !== undefined) throw new Error(\"Can't pass 'text' and 'defaultText' as props at the same time. Choose one for the entire lifecycle\");\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(props.defaultText || props.text || \"\"),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      localText = _useState2[0],\n      setLocalText = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      isWritable = _useState4[0],\n      setIsWritable = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      isFixedBeingHovered = _useState6[0],\n      setIsFixedBeingHovered = _useState6[1];\n\n  var textAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (isWritable && textAreaRef.current) {\n      textAreaRef.current.focus();\n      textAreaRef.current.setSelectionRange(0, textAreaRef.current.value.length);\n    }\n  }, [isWritable]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (props.text === undefined) return;\n    setLocalText(props.text || \"\");\n  }, [props.text]);\n\n  var onBlur = function onBlur() {\n    setIsWritable(false);\n    props.onBlur && props.onBlur(localText);\n  };\n\n  var defaultSpanStyle = {\n    cursor: \"pointer\",\n    borderColor: isFixedBeingHovered ? props.hoverColor || \"#D8D8D8\" : \"transparent\",\n    borderStyle: \"solid\",\n    borderWidth: \"2px\",\n    padding: \"0.3rem\",\n    color: \"#282828\",\n    boxSizing: \"border-box\",\n    whiteSpace: \"pre-wrap\",\n    fontSize: \"1.1rem\"\n  };\n  var defaultTextAreaStyle = {\n    resize: \"none\",\n    padding: \"0.3rem\",\n    fontSize: \"1.1rem\",\n    boxSizing: \"border-box\"\n  };\n  var spanStyle = Object.assign({}, defaultSpanStyle, props.style, props.fixedStyle);\n  if (localText === \"\") spanStyle.color = _constants_COLOR__WEBPACK_IMPORTED_MODULE_2__[\"default\"].placeholder;\n  var textAreaStyle = Object.assign({}, defaultTextAreaStyle, props.style, props.editableStyle);\n  return isWritable ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"textarea\", {\n    \"data-testid\": \"editable\",\n    ref: textAreaRef,\n    style: textAreaStyle,\n    value: localText,\n    onBlur: onBlur,\n    onChange: function onChange(e) {\n      return setLocalText(e.currentTarget.value);\n    }\n  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    \"data-testid\": \"fixed\",\n    style: spanStyle,\n    onMouseEnter: function onMouseEnter() {\n      return setIsFixedBeingHovered(true);\n    },\n    onMouseLeave: function onMouseLeave() {\n      return setIsFixedBeingHovered(false);\n    },\n    onClick: function onClick() {\n      setIsWritable(true);\n    }\n  }, localText ? localText : props.placeholder);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FixableTextArea);\n\n//# sourceURL=webpack:///./src/components/FixableTextArea.tsx?");

/***/ }),

/***/ "./src/components/Input.tsx":
/*!**********************************!*\
  !*** ./src/components/Input.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Input; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_COLOR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/COLOR */ \"./src/constants/COLOR.ts\");\n\n\n\nfunction Input(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(props.defaultValue || \"\"),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  var onBlur = function onBlur(e) {\n    var currentValue = e.currentTarget.value;\n    props.onBlur && props.onBlur(currentValue);\n  };\n\n  var onChange = function onChange(e) {\n    var currentValue = e.currentTarget.value;\n    setValue(currentValue);\n    props.onChange && props.onChange(currentValue);\n  };\n\n  var commonStyle = {\n    width: props.width\n  };\n  var invalidStyle = {\n    border: \"2px solid \".concat(_constants_COLOR__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error.invalidField)\n  };\n  var finalStyle = props.invalid ? Object.assign({}, invalidStyle, commonStyle) : commonStyle;\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"input\", {\n    style: finalStyle,\n    className: props.className,\n    value: value,\n    onChange: onChange,\n    onBlur: onBlur,\n    placeholder: props.placeholder,\n    \"data-testid\": \"Input\"\n  });\n}\n\n//# sourceURL=webpack:///./src/components/Input.tsx?");

/***/ }),

/***/ "./src/components/LabeledInput.tsx":
/*!*****************************************!*\
  !*** ./src/components/LabeledInput.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LabeledInput; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input */ \"./src/components/Input.tsx\");\n\n\nfunction LabeledInput(props) {\n  /* Label text + input container */\n  var labelStyle = {\n    margin: \"\".concat(props.marginVertical === undefined ? \"0.4rem\" : props.marginVertical, \" 0.2rem\")\n    /* Label text */\n\n  };\n  var spanStyle = {\n    paddingRight: props.spaceBetween === undefined ? \"0.6rem\" : props.spaceBetween,\n    display: props.labelBySide ? \"inline-block\" : \"block\"\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    style: labelStyle\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    style: spanStyle\n  }, props.label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    className: props.className,\n    onChange: props.onChange,\n    onBlur: props.onBlur,\n    defaultValue: props.defaultValue,\n    placeholder: props.placeholder,\n    invalid: props.invalid,\n    width: props.inputWidth\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/LabeledInput.tsx?");

/***/ }),

/***/ "./src/components/Login.tsx":
/*!**********************************!*\
  !*** ./src/components/Login.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _LabeledInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LabeledInput */ \"./src/components/LabeledInput.tsx\");\n/* harmony import */ var _constants_RequestErr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/RequestErr */ \"./src/constants/RequestErr.ts\");\n/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Alert */ \"./src/components/Alert.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _constants_MESSAGE__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/MESSAGE */ \"./src/constants/MESSAGE.ts\");\n/* harmony import */ var _server_routes_api_db_session_request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../server/routes/api/db/session/request */ \"./src/server/routes/api/db/session/request.ts\");\n/* harmony import */ var _styled_buttons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styled/buttons */ \"./src/components/styled/buttons.ts\");\n/* harmony import */ var _styled_containers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styled/containers */ \"./src/components/styled/containers.ts\");\n/* harmony import */ var _styled_positionals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styled/positionals */ \"./src/components/styled/positionals.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Login = function Login(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),\n      username = _useState2[0],\n      setUsername = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState3, 2),\n      password = _useState4[0],\n      setPassword = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState5, 2),\n      alertText = _useState6[0],\n      setAlertText = _useState6[1];\n\n  var onFail = function onFail(status, reason) {\n    if (status >= 500 && status <= 599) {\n      return setAlertText(_constants_MESSAGE__WEBPACK_IMPORTED_MODULE_8__[\"default\"].auth.error.serverError);\n    }\n    /** RequestErr constants are stringified by JSON (convenience for server side)\r\n     *  We could either parse them or stringify `reason`, the latter is simpler */\n\n\n    switch (JSON.stringify(reason)) {\n      case _constants_RequestErr__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ALREADY_USED_USERNAME:\n      case _constants_RequestErr__WEBPACK_IMPORTED_MODULE_5__[\"default\"].AUTHENTICATION_FAILED:\n        setAlertText(_constants_MESSAGE__WEBPACK_IMPORTED_MODULE_8__[\"default\"].auth.error.invalidCredentials);\n        break;\n\n      case _constants_RequestErr__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ALREADY_USED_EMAIL:\n        setAlertText(_constants_MESSAGE__WEBPACK_IMPORTED_MODULE_8__[\"default\"].auth.error.emailAlreadyTaken);\n        break;\n\n      default:\n        setAlertText(_constants_MESSAGE__WEBPACK_IMPORTED_MODULE_8__[\"default\"].auth.error.general);\n    }\n\n    props.onFail && props.onFail();\n  };\n\n  var onSuccess = function onSuccess(res) {\n    setAlertText(\"\");\n    props.onSuccess && props.onSuccess();\n    props.dispatch(res.data.action);\n  };\n\n  var onSubmit =\n  /*#__PURE__*/\n  function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              _context.next = 3;\n              return Object(_server_routes_api_db_session_request__WEBPACK_IMPORTED_MODULE_9__[\"askSignin\"])(username, password)[\"catch\"](function (err) {\n                var res = err.response;\n                onFail(res.status, res.data);\n              });\n\n            case 3:\n              res = _context.sent;\n              if (res) onSuccess(res);\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styled_positionals__WEBPACK_IMPORTED_MODULE_12__[\"Blank\"], {\n    vertical: \"5rem\"\n  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styled_positionals__WEBPACK_IMPORTED_MODULE_12__[\"FlexVertical\"], {\n    style: {\n      position: \"relative\"\n    }\n  }, alertText && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"div\", {\n    style: {\n      position: \"absolute\",\n      top: \"-4rem\"\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Alert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onClick: function onClick() {\n      return setAlertText(\"\");\n    }\n  }, alertText)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styled_positionals__WEBPACK_IMPORTED_MODULE_12__[\"FormAligned\"], {\n    style: _styled_containers__WEBPACK_IMPORTED_MODULE_11__[\"CtnGray_style\"],\n    \"data-testid\": \"Form\",\n    onSubmit: onSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LabeledInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    label: \"Username\",\n    onChange: setUsername\n  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_LabeledInput__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    label: \"Password\",\n    onChange: setPassword\n  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_styled_buttons__WEBPACK_IMPORTED_MODULE_10__[\"BtnGray\"], {\n    type: \"submit\",\n    \"data-testid\": \"submit\"\n  }, \"Login\"))));\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    dispatch: dispatch\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"connect\"])(null, mapDispatch)(Login));\n\n//# sourceURL=webpack:///./src/components/Login.tsx?");

/***/ }),

/***/ "./src/components/Logout.tsx":
/*!***********************************!*\
  !*** ./src/components/Logout.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _server_routes_api_db_session_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../server/routes/api/db/session/request */ \"./src/server/routes/api/db/session/request.ts\");\n/* harmony import */ var _server_utils_hasDispatchOrder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../server/utils/hasDispatchOrder */ \"./src/server/utils/hasDispatchOrder.ts\");\n/* harmony import */ var _styled_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled/buttons */ \"./src/components/styled/buttons.ts\");\n\n\n\n\n\n\n\n\nvar Logout = function Logout(props) {\n  var onClick =\n  /*#__PURE__*/\n  function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_server_routes_api_db_session_request__WEBPACK_IMPORTED_MODULE_4__[\"askLogout\"])()[\"catch\"](function (err) {\n                return null;\n              });\n\n            case 2:\n              res = _context.sent;\n              if (Object(_server_utils_hasDispatchOrder__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(res)) props.dispatch(res.data.action);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function onClick() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styled_buttons__WEBPACK_IMPORTED_MODULE_6__[\"BtnGray\"], {\n    onClick: onClick\n  }, props.children);\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    dispatch: dispatch\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(null, mapDispatch)(Logout));\n\n//# sourceURL=webpack:///./src/components/Logout.tsx?");

/***/ }),

/***/ "./src/components/Nav.tsx":
/*!********************************!*\
  !*** ./src/components/Nav.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Nav(props) {\n  var DEFAULTS = {\n    root: {\n      padding_h: \"0.2rem\",\n      padding_v: \"0.6rem\"\n    },\n    link: {\n      padding_h: \"0.6rem\",\n      padding_v: \"0.6rem\"\n    }\n  };\n  var rootStyle = {\n    padding: \"\".concat(props.paddingVertical || DEFAULTS.root.padding_v, \" \").concat(props.paddingHorizontal || DEFAULTS.root.padding_h),\n    backgroundColor: props.backgroundColor\n  };\n  var linkStyle = {\n    padding: \"\".concat(DEFAULTS.link.padding_v, \" \").concat(DEFAULTS.link.padding_h)\n  };\n  var textStyle = {\n    color: props.color\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    style: rootStyle\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: props.to,\n    style: linkStyle\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    style: textStyle\n  }, props.name)));\n}\n\n//# sourceURL=webpack:///./src/components/Nav.tsx?");

/***/ }),

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ \"./src/components/Nav.tsx\");\n/* harmony import */ var _styled_positionals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled/positionals */ \"./src/components/styled/positionals.ts\");\n\n\n\nfunction NavBar(props) {\n  var DEFAULTS = {\n    color: \"#C8BFC7\",\n    backgroundColor: \"#090302\"\n  };\n  var navsJSX = [];\n\n  for (var i = 0; i < props.names.length; i++) {\n    var navProps = {\n      key: props.paths[i],\n      to: props.paths[i],\n      name: props.names[i],\n      paddingHorizontal: props.spaceBetween,\n      color: props.color || DEFAULTS.color,\n      backgroundColor: props.backgroundColor || DEFAULTS.backgroundColor\n    };\n    navsJSX.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], navProps));\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_positionals__WEBPACK_IMPORTED_MODULE_2__[\"FlexHorizontal\"], null, navsJSX);\n}\n\n//# sourceURL=webpack:///./src/components/NavBar.tsx?");

/***/ }),

/***/ "./src/components/Register.tsx":
/*!*************************************!*\
  !*** ./src/components/Register.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _LabeledInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LabeledInput */ \"./src/components/LabeledInput.tsx\");\n/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Alert */ \"./src/components/Alert.tsx\");\n/* harmony import */ var _constants_RequestErr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/RequestErr */ \"./src/constants/RequestErr.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _server_routes_api_db_requests__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../server/routes/api/db/requests */ \"./src/server/routes/api/db/requests.ts\");\n/* harmony import */ var _constants_MESSAGE__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../constants/MESSAGE */ \"./src/constants/MESSAGE.ts\");\n/* harmony import */ var _server_routes_api_db_session_request__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../server/routes/api/db/session/request */ \"./src/server/routes/api/db/session/request.ts\");\n/* harmony import */ var _styled_buttons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styled/buttons */ \"./src/components/styled/buttons.ts\");\n/* harmony import */ var _styled_containers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styled/containers */ \"./src/components/styled/containers.ts\");\n/* harmony import */ var _styled_positionals__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styled/positionals */ \"./src/components/styled/positionals.ts\");\n\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar SPACE_FOR_ALERT = \"5rem\";\n\nvar Register = function Register(props) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),\n      username = _useState2[0],\n      setUsername = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),\n      password = _useState4[0],\n      setPassword = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),\n      email = _useState6[0],\n      setEmail = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),\n      alertText = _useState8[0],\n      setAlertText = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState9, 2),\n      usernameWarningActive = _useState10[0],\n      setUsernameWarning = _useState10[1];\n\n  var invalidateTimeoutId = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])(undefined);\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    setUsernameWarning(false);\n    window.clearTimeout(invalidateTimeoutId.current);\n\n    if (username !== \"\") {\n      invalidateTimeoutId.current = window.setTimeout(\n      /*#__PURE__*/\n      _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return Object(_server_routes_api_db_requests__WEBPACK_IMPORTED_MODULE_9__[\"askUserAlreadyExists\"])(username);\n\n              case 2:\n                if (!_context.sent) {\n                  _context.next = 4;\n                  break;\n                }\n\n                setUsernameWarning(true);\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      })), 800);\n    }\n\n    return function () {\n      window.clearTimeout(invalidateTimeoutId.current);\n    };\n  }, [username]);\n\n  var onFail = function onFail(status, reason) {\n    if (status >= 500 && status <= 599) return setAlertText(_constants_MESSAGE__WEBPACK_IMPORTED_MODULE_10__[\"default\"].auth.error.serverError);\n    /** RequestErr constants are stringified by JSON (convenience for server side)\r\n     *  We could either parse them or stringify `reason`, the latter is simpler */\n\n    switch (JSON.stringify(reason)) {\n      case _constants_RequestErr__WEBPACK_IMPORTED_MODULE_7__[\"default\"].ALREADY_USED_USERNAME:\n        return setAlertText(_constants_MESSAGE__WEBPACK_IMPORTED_MODULE_10__[\"default\"].auth.error.usernameAlreadyTaken);\n\n      case _constants_RequestErr__WEBPACK_IMPORTED_MODULE_7__[\"default\"].ALREADY_USED_EMAIL:\n        return setAlertText(_constants_MESSAGE__WEBPACK_IMPORTED_MODULE_10__[\"default\"].auth.error.emailAlreadyTaken);\n\n      default:\n        setAlertText(_constants_MESSAGE__WEBPACK_IMPORTED_MODULE_10__[\"default\"].auth.error.general);\n    }\n  };\n\n  var onSubmit =\n  /*#__PURE__*/\n  function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(e) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              e.preventDefault();\n              _context2.next = 3;\n              return Object(_server_routes_api_db_session_request__WEBPACK_IMPORTED_MODULE_11__[\"askSignup\"])(username, password, email)[\"catch\"](function (err) {\n                var res = err.response;\n                onFail(res.status, res.data);\n              });\n\n            case 3:\n              res = _context2.sent;\n              if (res && props.onSuccess) props.onSuccess();\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_positionals__WEBPACK_IMPORTED_MODULE_14__[\"Blank\"], {\n    vertical: SPACE_FOR_ALERT\n  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_positionals__WEBPACK_IMPORTED_MODULE_14__[\"FlexVertical\"], {\n    style: {\n      position: \"relative\"\n    }\n  }, alertText && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n    style: {\n      position: \"absolute\",\n      top: \"-\".concat(SPACE_FOR_ALERT)\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Alert__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    height: \"4rem\",\n    onClick: function onClick() {\n      return setAlertText(\"\");\n    }\n  }, alertText)), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_positionals__WEBPACK_IMPORTED_MODULE_14__[\"FormAligned\"], {\n    onSubmit: onSubmit,\n    style: _objectSpread({\n      position: \"relative\"\n    }, _styled_containers__WEBPACK_IMPORTED_MODULE_13__[\"CtnGray_style\"])\n  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_LabeledInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    inputWidth: \"20rem\",\n    marginVertical: \"0.8rem\",\n    invalid: usernameWarningActive,\n    label: \"Username\",\n    onChange: setUsername\n  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_LabeledInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    inputWidth: \"20rem\",\n    marginVertical: \"0.8rem\",\n    label: \"Password\",\n    onChange: setPassword\n  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_LabeledInput__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    inputWidth: \"20rem\",\n    marginVertical: \"0.8rem\",\n    label: \"Email\",\n    onChange: setEmail\n  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styled_buttons__WEBPACK_IMPORTED_MODULE_12__[\"BtnGray\"], {\n    type: \"submit\"\n  }, \"Sign up\"))));\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    dispatch: dispatch\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__[\"connect\"])(null, mapDispatch)(Register));\n\n//# sourceURL=webpack:///./src/components/Register.tsx?");

/***/ }),

/***/ "./src/components/routes/RestrictRoute.tsx":
/*!*************************************************!*\
  !*** ./src/components/routes/RestrictRoute.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RestrictRoute; });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"@babel/runtime/helpers/extends\");\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"@babel/runtime/helpers/objectWithoutProperties\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction RestrictRoute(props) {\n  var allow = props.allow,\n      fallbackComponent = props.fallbackComponent,\n      fallbackRender = props.fallbackRender,\n      fallbackChildren = props.fallbackChildren,\n      propsForAllowed = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props, [\"allow\", \"fallbackComponent\", \"fallbackRender\", \"fallbackChildren\"]);\n\n  var component = propsForAllowed.component,\n      render = propsForAllowed.render,\n      children = propsForAllowed.children,\n      propsForRestricted = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(propsForAllowed, [\"component\", \"render\", \"children\"]);\n\n  return allow ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], propsForAllowed) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, propsForRestricted, {\n    component: fallbackComponent,\n    render: fallbackRender,\n    children: fallbackChildren\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/routes/RestrictRoute.tsx?");

/***/ }),

/***/ "./src/components/static/Header.tsx":
/*!******************************************!*\
  !*** ./src/components/static/Header.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_COLOR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/COLOR */ \"./src/constants/COLOR.ts\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Nav */ \"./src/components/Nav.tsx\");\n/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NavBar */ \"./src/components/NavBar.tsx\");\n/* harmony import */ var _routes_RestrictRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routes/RestrictRoute */ \"./src/components/routes/RestrictRoute.tsx\");\n/* harmony import */ var _styled_positionals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styled/positionals */ \"./src/components/styled/positionals.ts\");\n\n\n\n\n\n\n\n\nvar NavBarWhenLoggedIn = function NavBarWhenLoggedIn() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    names: [\"Profile\", \"Test\"],\n    paths: [\"/profile\", \"/test\"],\n    spaceBetween: \"1.5rem\"\n  });\n};\n\nvar NavBarWhenNotLoggedIn = function NavBarWhenNotLoggedIn() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    names: [\"Sign in\", \"Sign up\", \"Test\"],\n    paths: [\"/signin\", \"/signup\", \"/test\"],\n    spaceBetween: \"1.5rem\"\n  });\n};\n\nvar Header = function Header(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled_positionals__WEBPACK_IMPORTED_MODULE_6__[\"FlexHorizontalBetween\"], {\n    style: {\n      width: \"100%\",\n      backgroundColor: _constants_COLOR__WEBPACK_IMPORTED_MODULE_2__[\"default\"].night.background\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    name: \"vidata\",\n    to: \"/\",\n    color: _constants_COLOR__WEBPACK_IMPORTED_MODULE_2__[\"default\"].night.color\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_RestrictRoute__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    allow: props.session.logged,\n    component: NavBarWhenLoggedIn,\n    fallbackComponent: NavBarWhenNotLoggedIn\n  }));\n};\n\nvar mapState = function mapState(state) {\n  return {\n    session: state.session\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapState)(Header));\n\n//# sourceURL=webpack:///./src/components/static/Header.tsx?");

/***/ }),

/***/ "./src/components/styled/buttons.ts":
/*!******************************************!*\
  !*** ./src/components/styled/buttons.ts ***!
  \******************************************/
/*! exports provided: Button, BtnGray, BtnTransparent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnGray\", function() { return BtnGray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnTransparent\", function() { return BtnTransparent; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({\n  displayName: \"buttons__Button\",\n  componentId: \"sc-16qwyoq-0\"\n})([\"cursor:pointer;border:none;padding:0.5rem;font-size:1.3rem;\"]);\nvar BtnGray = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Button).withConfig({\n  displayName: \"buttons__BtnGray\",\n  componentId: \"sc-16qwyoq-1\"\n})([\"margin:0.5rem;background-color:#707070;color:#F0F0F0;box-shadow:1px 1px 4px 2px #C0C0C0;\"]);\nvar BtnTransparent = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Button).withConfig({\n  displayName: \"buttons__BtnTransparent\",\n  componentId: \"sc-16qwyoq-2\"\n})([\"background-color:transparent;\"]);\n\n//# sourceURL=webpack:///./src/components/styled/buttons.ts?");

/***/ }),

/***/ "./src/components/styled/containers.ts":
/*!*********************************************!*\
  !*** ./src/components/styled/containers.ts ***!
  \*********************************************/
/*! exports provided: CtnGray, CtnGray_style */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CtnGray\", function() { return CtnGray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CtnGray_style\", function() { return CtnGray_style; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar CtnGray = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"containers__CtnGray\",\n  componentId: \"sc-1d0drtx-0\"\n})([\"border:1px solid #C0C0C0;borderRadius:1%;margin:1rem;box-shadow:2px 2px 5px 1px #D0D0D0;box-sizing:border-box;\"]);\nvar CtnGray_style = {\n  border: \"1px solid #C0C0C0\",\n  borderRadius: \"1%\",\n  padding: \"1rem\",\n  boxShadow: \"2px 2px 5px 1px #D0D0D0\",\n  boxSizing: \"border-box\"\n};\n\n//# sourceURL=webpack:///./src/components/styled/containers.ts?");

/***/ }),

/***/ "./src/components/styled/positionals.ts":
/*!**********************************************!*\
  !*** ./src/components/styled/positionals.ts ***!
  \**********************************************/
/*! exports provided: Blank, FlexHorizontal, FlexHorizontalBetween, FlexVertical, Center, FormAligned */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Blank\", function() { return Blank; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlexHorizontal\", function() { return FlexHorizontal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlexHorizontalBetween\", function() { return FlexHorizontalBetween; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FlexVertical\", function() { return FlexVertical; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Center\", function() { return Center; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormAligned\", function() { return FormAligned; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Blank = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"positionals__Blank\",\n  componentId: \"nteswj-0\"\n})([\"margin:\", \" \", \";display:inline-block;\"], function (props) {\n  return props.vertical || 0;\n}, function (props) {\n  return props.horizontal || 0;\n});\nvar FlexHorizontal = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"positionals__FlexHorizontal\",\n  componentId: \"nteswj-1\"\n})([\"display:flex;flex-direction:row;align-items:center;\"]);\nvar FlexHorizontalBetween = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"positionals__FlexHorizontalBetween\",\n  componentId: \"nteswj-2\"\n})([\"display:flex;flex-direction:row;justify-content:space-between;\"]);\nvar FlexVertical = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"positionals__FlexVertical\",\n  componentId: \"nteswj-3\"\n})([\"display:flex;flex-direction:column;align-items:center;\"]);\nvar Center = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({\n  displayName: \"positionals__Center\",\n  componentId: \"nteswj-4\"\n})([\"display:flex;flex-direction:row;justify-content:center;align-items:center;\"]);\nvar FormAligned = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({\n  displayName: \"positionals__FormAligned\",\n  componentId: \"nteswj-5\"\n})([\"display:inline-flex;flex-direction:column;align-items:flex-end;button{align-self:center;}\"]);\n\n//# sourceURL=webpack:///./src/components/styled/positionals.ts?");

/***/ }),

/***/ "./src/constants/COLOR.ts":
/*!********************************!*\
  !*** ./src/constants/COLOR.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  night: {\n    background: \"#090302\",\n    color: \"#C8BFC7\"\n  },\n  gray: \"#C0C0C0\",\n  button: {\n    darkBlue: {\n      backgroundColor: \"#4A4A48\",\n      color: \"#C8BFC7\"\n    }\n  },\n  placeholder: \"#A0A0A0\",\n  error: {\n    invalidField: \"#BA281D\"\n  }\n});\n\n//# sourceURL=webpack:///./src/constants/COLOR.ts?");

/***/ }),

/***/ "./src/constants/MESSAGE.ts":
/*!**********************************!*\
  !*** ./src/constants/MESSAGE.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  auth: {\n    error: {\n      general: \"Authentication failed\",\n      usernameAlreadyTaken: \"This username is already taken\",\n      emailAlreadyTaken: \"This email is already being used, try to reset your password if that's your email account\",\n      invalidCredentials: \"Invalid credentials. Try again\",\n      serverError: \"We are having problems trying to connect to the server. Try again later\"\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/constants/MESSAGE.ts?");

/***/ }),

/***/ "./src/constants/RequestErr.ts":
/*!*************************************!*\
  !*** ./src/constants/RequestErr.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** \r\n * @module RequestErr\r\n * \r\n * Errors that happened while the server was trying to handle the request\r\n * \r\n * The server always responds with one of these as the response body if an error occurs\r\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  SYNTAX_ERROR: JSON.stringify('SYNTAX_ERROR'),\n  ALREADY_USED_USERNAME: JSON.stringify('ALREADY_USED_USERNAME'),\n  USERNAME_NOT_FOUND: JSON.stringify('USERNAME_NOT_FOUND'),\n  EMAIL_NOT_FOUND: JSON.stringify('EMAIL_NOT_FOUND'),\n  ALREADY_USED_EMAIL: JSON.stringify('ALREADY_USED_EMAIL'),\n  UNKNOWN_ERROR: JSON.stringify('UNKNOWN_ERROR'),\n  MONGODB_ERROR: JSON.stringify('MONGODB_ERROR'),\n  MONGOSTORE_DISCONNECTED: JSON.stringify('MONGOSTORE_DISCONNECTED'),\n  INVALID_MONGOSTORE_URI: JSON.stringify('INVALID_MONGOSTORE_URI'),\n  AUTHENTICATION_FAILED: JSON.stringify('AUTHENTICATION_FAILED'),\n  USER_LOGGED_IN: JSON.stringify('USER_LOGGED_IN'),\n  USER_NOT_LOGGED_IN: JSON.stringify('USER_NOT_LOGGED_IN'),\n  CLIENT_SIDE_LOGIC_ERROR: JSON.stringify('CLIENT_SIDE_LOGIC_ERROR'),\n  SERVER_SIDE_LOGIC_ERROR: JSON.stringify('SERVER_SIDE_LOGIC_ERROR')\n});\n\n//# sourceURL=webpack:///./src/constants/RequestErr.ts?");

/***/ }),

/***/ "./src/globalStyle.ts":
/*!****************************!*\
  !*** ./src/globalStyle.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * Use global style as the default styling\r\n * \r\n * Don't use this file to declare class names or change styling of elements queried by id or class name\r\n */\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');\\n    body { \\n        font-family: 'Roboto', Helvetica, Arial, Verdana, sans-serif;\\n        margin: 0;\\n    }\\n    input, textarea {\\n        font-family: 'Roboto', Helvetica, Arial, Verdana, sans-serif;\\n    }\\n    a {\\n        text-decoration: none;\\n        color: blue;\\n    }\");\n\n//# sourceURL=webpack:///./src/globalStyle.ts?");

/***/ }),

/***/ "./src/hooks/useToggle.ts":
/*!********************************!*\
  !*** ./src/hooks/useToggle.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/** This hook is a special use of `useState` with the restriction that there are only two possible states\r\n * (1 or 0, true or false)\r\n * \r\n * It returns `[value, toggle]`, where `value` is either 1 or 0 (if you use the number implementation)\r\n * or either true or false (using boolean implementation) and `toggle` is a function that\r\n * changes `value` to the only other possibility\r\n * \r\n * Number or boolean implementation are chosen according to `initialState` type\r\n */\nvar useToggle = function useToggle(initialState) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(initialState),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      value = _useState2[0],\n      setValue = _useState2[1];\n\n  if (typeof value === \"boolean\") {\n    var toggle = function toggle() {\n      setValue(!value);\n    };\n\n    return [value, toggle];\n  } else if (typeof value === \"number\") {\n    if (value !== 1 && value !== 0) throw new Error(\"useToggle initial value must be either 1, 0, true or false\");\n\n    var _toggle = function _toggle() {\n      setValue(value === 1 ? 0 : 1);\n    };\n\n    return [value, _toggle];\n  }\n\n  throw new Error(\"useToggle only supports number or boolean values\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useToggle);\n\n//# sourceURL=webpack:///./src/hooks/useToggle.ts?");

/***/ }),

/***/ "./src/pages/profile.tsx":
/*!*******************************!*\
  !*** ./src/pages/profile.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_static_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/static/Header */ \"./src/components/static/Header.tsx\");\n/* harmony import */ var _components_AvatarEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AvatarEdit */ \"./src/components/AvatarEdit.tsx\");\n/* harmony import */ var _components_Logout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Logout */ \"./src/components/Logout.tsx\");\n/* harmony import */ var _components_FixableTextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FixableTextArea */ \"./src/components/FixableTextArea.tsx\");\n/* harmony import */ var _server_routes_api_db_profile_requests__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../server/routes/api/db/profile/requests */ \"./src/server/routes/api/db/profile/requests.ts\");\n/* harmony import */ var _components_styled_positionals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/styled/positionals */ \"./src/components/styled/positionals.ts\");\n/* harmony import */ var _components_styled_containers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/styled/containers */ \"./src/components/styled/containers.ts\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\nvar Profile = function Profile(props) {\n  var headerStyle = {\n    fontSize: \"1.8rem\",\n    marginTop: \"2rem\",\n    marginBottom: \"0.5rem\",\n    alignSelf: \"flex-start\"\n  };\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_static_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled_positionals__WEBPACK_IMPORTED_MODULE_8__[\"Center\"], {\n    style: {\n      marginTop: \"1rem\"\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled_positionals__WEBPACK_IMPORTED_MODULE_8__[\"FlexVertical\"], {\n    style: {\n      position: \"relative\",\n      marginTop: \"1rem\",\n      width: \"75vw\"\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    style: {\n      fontSize: \"1.9rem\",\n      marginLeft: \"1rem\",\n      marginBottom: \"2rem\"\n    }\n  }, props.profile.username), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled_positionals__WEBPACK_IMPORTED_MODULE_8__[\"FlexHorizontal\"], {\n    style: {\n      width: \"100%\"\n    }\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AvatarEdit__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_FixableTextArea__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    onBlur: function onBlur(bioText) {\n      return Object(_server_routes_api_db_profile_requests__WEBPACK_IMPORTED_MODULE_7__[\"askSaveProfile\"])(props.dispatch, {\n        bioText: bioText\n      });\n    },\n    defaultText: props.profile.bioText,\n    style: {\n      width: \"100%\",\n      height: \"7rem\",\n      margin: \"0 2rem\"\n    },\n    placeholder: \"Tell us about you!\"\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"header\", {\n    style: headerStyle\n  }, \"Collection\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled_positionals__WEBPACK_IMPORTED_MODULE_8__[\"FlexVertical\"], {\n    style: _objectSpread({\n      width: \"100%\"\n    }, _components_styled_containers__WEBPACK_IMPORTED_MODULE_9__[\"CtnGray_style\"])\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled_positionals__WEBPACK_IMPORTED_MODULE_8__[\"Blank\"], {\n    vertical: \"5rem\"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    style: {\n      color: \"#A0B0A0\",\n      fontSize: \"1.5rem\"\n    }\n  }, \"Nothing so far\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled_positionals__WEBPACK_IMPORTED_MODULE_8__[\"Blank\"], {\n    vertical: \"5rem\"\n  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"header\", {\n    style: headerStyle\n  }, \"Awards\"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled_positionals__WEBPACK_IMPORTED_MODULE_8__[\"FlexVertical\"], {\n    style: _objectSpread({\n      width: \"100%\"\n    }, _components_styled_containers__WEBPACK_IMPORTED_MODULE_9__[\"CtnGray_style\"])\n  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled_positionals__WEBPACK_IMPORTED_MODULE_8__[\"Blank\"], {\n    vertical: \"5rem\"\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"span\", {\n    style: {\n      color: \"#A0B0A0\",\n      fontSize: \"1.5rem\"\n    }\n  }, \"Nothing so far\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_styled_positionals__WEBPACK_IMPORTED_MODULE_8__[\"Blank\"], {\n    vertical: \"5rem\"\n  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Logout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, \"Logout\"));\n};\n\nvar mapState = function mapState(state) {\n  return {\n    profile: state.profile\n  };\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    dispatch: dispatch\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapState, mapDispatch)(Profile));\n\n//# sourceURL=webpack:///./src/pages/profile.tsx?");

/***/ }),

/***/ "./src/pages/root.tsx":
/*!****************************!*\
  !*** ./src/pages/root.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_static_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/static/Header */ \"./src/components/static/Header.tsx\");\n\n\n\n\nvar Root = function Root(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_static_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n};\n\nvar mapState = function mapState(state) {\n  return {\n    profile: state.profile\n  };\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    dispatch: dispatch\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapState, mapDispatch)(Root));\n\n//# sourceURL=webpack:///./src/pages/root.tsx?");

/***/ }),

/***/ "./src/pages/signin.tsx":
/*!******************************!*\
  !*** ./src/pages/signin.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_static_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/static/Header */ \"./src/components/static/Header.tsx\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Login */ \"./src/components/Login.tsx\");\n\n\n\n\n\nvar $Signin = function $Signin(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_static_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n};\n\nvar mapState = function mapState(state) {\n  return {\n    profile: state.profile\n  };\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    dispatch: dispatch\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapState, mapDispatch)($Signin));\n\n//# sourceURL=webpack:///./src/pages/signin.tsx?");

/***/ }),

/***/ "./src/pages/signup.tsx":
/*!******************************!*\
  !*** ./src/pages/signup.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_static_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/static/Header */ \"./src/components/static/Header.tsx\");\n/* harmony import */ var _components_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Register */ \"./src/components/Register.tsx\");\n/* harmony import */ var _components_styled_positionals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styled/positionals */ \"./src/components/styled/positionals.ts\");\n\n\n\n\n\n\nvar $Signup = function $Signup(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_static_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_styled_positionals__WEBPACK_IMPORTED_MODULE_4__[\"Center\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Register__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onSuccess: function onSuccess() {\n      return window.location.href = \"/signin\";\n    }\n  })));\n};\n\nvar mapState = function mapState(state) {\n  return {\n    profile: state.profile\n  };\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    dispatch: dispatch\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapState, mapDispatch)($Signup));\n\n//# sourceURL=webpack:///./src/pages/signup.tsx?");

/***/ }),

/***/ "./src/pages/test.tsx":
/*!****************************!*\
  !*** ./src/pages/test.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_static_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/static/Header */ \"./src/components/static/Header.tsx\");\n\n\n\n;\n\nvar test = function test(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_static_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, JSON.stringify(props.state)));\n};\n\nvar mapState = function mapState(state) {\n  return {\n    state: state\n  };\n};\n\nvar mapDispatch = function mapDispatch(dispatch) {\n  return {\n    dispatch: dispatch\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapState, mapDispatch)(test));\n\n//# sourceURL=webpack:///./src/pages/test.tsx?");

/***/ }),

/***/ "./src/server/global-middlewares/initSession.ts":
/*!******************************************************!*\
  !*** ./src/server/global-middlewares/initSession.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_RequestErr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/RequestErr */ \"./src/constants/RequestErr.ts\");\n/* harmony import */ var _utils_resetSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/resetSession */ \"./src/server/utils/resetSession.ts\");\n\n\n/** Guarantees that `req.session` is properly initialized and that `app` (express instance) is of type `App` */\n\nvar initSession = function initSession(req, res, next) {\n  if (!req.session) {\n    res.status(500).send(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MONGOSTORE_DISCONNECTED);\n    return;\n  }\n\n  if (!req.session._initialized) {\n    Object(_utils_resetSession__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(req);\n  }\n\n  next();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initSession);\n\n//# sourceURL=webpack:///./src/server/global-middlewares/initSession.ts?");

/***/ }),

/***/ "./src/server/global-middlewares/logger.tsx":
/*!**************************************************!*\
  !*** ./src/server/global-middlewares/logger.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar loggerMiddleware = function loggerMiddleware(req, res, next) {\n  //console.log(req.headers.referer + \" \" + req.method + \" \" + req.originalUrl);\n  //console.log(req.session!.username);\n  next();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loggerMiddleware);\n\n//# sourceURL=webpack:///./src/server/global-middlewares/logger.tsx?");

/***/ }),

/***/ "./src/server/global-middlewares/serverRenderer.tsx":
/*!**********************************************************!*\
  !*** ./src/server/global-middlewares/serverRenderer.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../App */ \"./src/App.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_generateHTML__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/generateHTML */ \"./src/server/utils/generateHTML.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store_configStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/configStore */ \"./src/store/configStore.tsx\");\n/* harmony import */ var _utils_translateStateToClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/translateStateToClient */ \"./src/server/utils/translateStateToClient.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n/** Main response from the server\r\n * \r\n * This handler sends HTML to the client\r\n * \r\n * Responses (status : body):\r\n * - 200 : *HTML*\r\n */\nvar serverRenderer =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var context, sheet, store, AppWrapper, preloadedState, preloadedStateString, preloadScript, markup;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            context = {};\n            sheet = new styled_components__WEBPACK_IMPORTED_MODULE_8__[\"ServerStyleSheet\"]();\n            _context.t0 = _store_configStore__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\n            _context.next = 5;\n            return Object(_utils_translateStateToClient__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(req);\n\n          case 5:\n            _context.t1 = _context.sent;\n            store = (0, _context.t0)(_context.t1);\n            AppWrapper = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n              store: store\n            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], {\n              location: req.url,\n              context: context\n            }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)));\n            preloadedState = store.getState();\n            preloadedStateString = JSON.stringify(preloadedState).replace(/</g, \"\\\\\\\\u003c\");\n            preloadScript = \"window.__PRELOADED_STATE__ = \".concat(preloadedStateString);\n\n            try {\n              markup = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString(sheet.collectStyles(AppWrapper));\n            } catch (e) {\n              console.error(e);\n            } finally {\n              sheet.seal();\n            }\n\n            res.status(200).send(Object(_utils_generateHTML__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(markup || \"\", sheet.getStyleTags(), preloadScript));\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function serverRenderer(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (serverRenderer);\n\n//# sourceURL=webpack:///./src/server/global-middlewares/serverRenderer.tsx?");

/***/ }),

/***/ "./src/server/global-middlewares/setStaticRoutes.ts":
/*!**********************************************************!*\
  !*** ./src/server/global-middlewares/setStaticRoutes.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar setStaticRoutes = function setStaticRoutes(app) {\n  app.use('/images/avatar', function (req, res, next) {\n    res.header(\"Cache-Control\", \"max-age=8640000\");\n    var filename = req.url.replace(/\\.v\\.\\w+(?=\\.(?:jpe?g|png))/, \"\");\n    var avatarPath = path__WEBPACK_IMPORTED_MODULE_0___default.a.join(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '../../files/images/avatar'), filename);\n    res.sendFile(avatarPath, function (err) {\n      if (err) next();\n    });\n  }, function (req, res) {\n    res.sendFile(path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(__dirname, '../../files/images/avatar/__DEFAULT__.jpeg'));\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setStaticRoutes);\n\n//# sourceURL=webpack:///./src/server/global-middlewares/setStaticRoutes.ts?");

/***/ }),

/***/ "./src/server/middlewares/stopUnauthenticated.ts":
/*!*******************************************************!*\
  !*** ./src/server/middlewares/stopUnauthenticated.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_RequestErr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/RequestErr */ \"./src/constants/RequestErr.ts\");\n\n\nvar stopUnauthenticated = function stopUnauthenticated(req, res, next) {\n  if (!req.session.logged) {\n    res.status(401).send(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_0__[\"default\"].USER_NOT_LOGGED_IN);\n    return;\n  }\n\n  next();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stopUnauthenticated);\n\n//# sourceURL=webpack:///./src/server/middlewares/stopUnauthenticated.ts?");

/***/ }),

/***/ "./src/server/mongodb/Connection.ts":
/*!******************************************!*\
  !*** ./src/server/mongodb/Connection.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _DbWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DbWrapper */ \"./src/server/mongodb/DbWrapper.ts\");\n\n\n\n\n\n\n\nvar connect =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(dbName) {\n    var client, db;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(\"Trying to connect to MongoDB...\");\n            _context.next = 3;\n            return mongodb__WEBPACK_IMPORTED_MODULE_4__[\"MongoClient\"].connect(process.env.MONGO_URI, {\n              useNewUrlParser: true,\n              useUnifiedTopology: true\n            });\n\n          case 3:\n            client = _context.sent;\n            console.log(\"Successfully connected to MongoDB\");\n            db = client.db(dbName);\n            return _context.abrupt(\"return\", db);\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function connect(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n/** The application connection to the MongoDB */\n\n\nvar Connection = function Connection() {\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Connection);\n};\n\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Connection, \"_dbWrapper\", null);\n\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Connection, \"_BREAK_ENCAPSULATION__IF_YOU_USE_UPDATE_DESCRIPTION__privateDatabase\", null);\n\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Connection, \"initialize\", function () {\n  if (Connection._dbWrapper !== null) return console.warn(\"Tried to initialize an already established connection to the database\");\n  var db = connect('Vidata');\n  Connection._dbWrapper = db.then(function (db) {\n    return new _DbWrapper__WEBPACK_IMPORTED_MODULE_5__[\"default\"](db);\n  });\n  Connection._BREAK_ENCAPSULATION__IF_YOU_USE_UPDATE_DESCRIPTION__privateDatabase = db;\n});\n\n_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Connection, \"get\", function () {\n  if (Connection._dbWrapper === null) throw new Error(\"You must initialize before calling get\");\n  return Connection._dbWrapper;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Connection);\n\n//# sourceURL=webpack:///./src/server/mongodb/Connection.ts?");

/***/ }),

/***/ "./src/server/mongodb/DbWrapper.ts":
/*!*****************************************!*\
  !*** ./src/server/mongodb/DbWrapper.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DbWrapper; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants_RequestErr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/RequestErr */ \"./src/constants/RequestErr.ts\");\n\n\n\n\n\n\n\n/** A wrapper with applied business logic and extra safety around the Db instance */\nvar DbWrapper = function DbWrapper(db) {\n  var _this = this;\n\n  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, DbWrapper);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"_db\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"_users\", void 0);\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"userExists\",\n  /*#__PURE__*/\n  function () {\n    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(username) {\n      var result;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (username) {\n                _context.next = 2;\n                break;\n              }\n\n              throw new Error(\"Argument is undefined/null or it's an empty string\");\n\n            case 2:\n              _context.next = 4;\n              return _this._users.countDocuments({\n                username: username\n              });\n\n            case 4:\n              _context.t0 = _context.sent;\n              result = _context.t0 > 0;\n              return _context.abrupt(\"return\", result);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"emailExists\",\n  /*#__PURE__*/\n  function () {\n    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(email) {\n      var result;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return _this._users.countDocuments({\n                email: email\n              });\n\n            case 2:\n              _context2.t0 = _context2.sent;\n              result = _context2.t0 > 0;\n              return _context2.abrupt(\"return\", result);\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"createUser\",\n  /*#__PURE__*/\n  function () {\n    var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(username, password, email) {\n      var userExistsInDB, emailExistsInDB, hashedPassword;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              console.log(\"creating user... \" + username);\n              _context3.next = 3;\n              return _this.userExists(username);\n\n            case 3:\n              userExistsInDB = _context3.sent;\n\n              if (!userExistsInDB) {\n                _context3.next = 6;\n                break;\n              }\n\n              throw new Error(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ALREADY_USED_USERNAME);\n\n            case 6:\n              _context3.next = 8;\n              return _this.emailExists(email);\n\n            case 8:\n              emailExistsInDB = _context3.sent;\n\n              if (!emailExistsInDB) {\n                _context3.next = 11;\n                break;\n              }\n\n              throw new Error(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ALREADY_USED_EMAIL);\n\n            case 11:\n              console.log(\"hashing password...\");\n              _context3.next = 14;\n              return Object(bcrypt__WEBPACK_IMPORTED_MODULE_4__[\"hash\"])(password, 10);\n\n            case 14:\n              hashedPassword = _context3.sent;\n\n              _this._users.insertOne({\n                username: username,\n                password: hashedPassword,\n                email: email,\n                bioText: \"\"\n              });\n\n              console.log(\"created!\");\n              return _context3.abrupt(\"return\", true);\n\n            case 18:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x3, _x4, _x5) {\n      return _ref3.apply(this, arguments);\n    };\n  }());\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"authenticateUserByUsername\",\n  /*#__PURE__*/\n  function () {\n    var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(username, password) {\n      var userInDB;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              if (!(!username || !password)) {\n                _context4.next = 2;\n                break;\n              }\n\n              return _context4.abrupt(\"return\", false);\n\n            case 2:\n              console.log(\"authenticating \" + username);\n              _context4.next = 5;\n              return _this._users.findOne({\n                username: username\n              }, {\n                projection: {\n                  password: 1\n                }\n              });\n\n            case 5:\n              userInDB = _context4.sent;\n\n              if (!(userInDB === null)) {\n                _context4.next = 8;\n                break;\n              }\n\n              return _context4.abrupt(\"return\", false);\n\n            case 8:\n              _context4.next = 10;\n              return Object(bcrypt__WEBPACK_IMPORTED_MODULE_4__[\"compare\"])(password, userInDB.password);\n\n            case 10:\n              return _context4.abrupt(\"return\", _context4.sent);\n\n            case 11:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function (_x6, _x7) {\n      return _ref4.apply(this, arguments);\n    };\n  }());\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"authenticateUserByEmail\",\n  /*#__PURE__*/\n  function () {\n    var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(email, password) {\n      var userInDB;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n        while (1) {\n          switch (_context5.prev = _context5.next) {\n            case 0:\n              if (email || password) {\n                _context5.next = 2;\n                break;\n              }\n\n              return _context5.abrupt(\"return\", false);\n\n            case 2:\n              console.log(\"authenticating \" + email);\n              _context5.next = 5;\n              return _this._users.findOne({\n                email: email\n              }, {\n                projection: {\n                  password: 1\n                }\n              });\n\n            case 5:\n              userInDB = _context5.sent;\n\n              if (!(userInDB === null)) {\n                _context5.next = 8;\n                break;\n              }\n\n              return _context5.abrupt(\"return\", false);\n\n            case 8:\n              _context5.next = 10;\n              return Object(bcrypt__WEBPACK_IMPORTED_MODULE_4__[\"compare\"])(password, userInDB.password);\n\n            case 10:\n              return _context5.abrupt(\"return\", _context5.sent);\n\n            case 11:\n            case \"end\":\n              return _context5.stop();\n          }\n        }\n      }, _callee5);\n    }));\n\n    return function (_x8, _x9) {\n      return _ref5.apply(this, arguments);\n    };\n  }());\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"saveProfile\",\n  /*#__PURE__*/\n  function () {\n    var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(username, data) {\n      var result;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              if (username) {\n                _context6.next = 2;\n                break;\n              }\n\n              return _context6.abrupt(\"return\");\n\n            case 2:\n              _context6.next = 4;\n              return _this._users.updateOne({\n                username: username\n              }, {\n                $set: data\n              });\n\n            case 4:\n              result = _context6.sent;\n\n              if (!(result.matchedCount === 0)) {\n                _context6.next = 7;\n                break;\n              }\n\n              throw new Error(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_5__[\"default\"].USERNAME_NOT_FOUND);\n\n            case 7:\n              console.log(result);\n\n            case 8:\n            case \"end\":\n              return _context6.stop();\n          }\n        }\n      }, _callee6);\n    }));\n\n    return function (_x10, _x11) {\n      return _ref6.apply(this, arguments);\n    };\n  }());\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"getProfile\",\n  /*#__PURE__*/\n  function () {\n    var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(username, filter) {\n      var user, info;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {\n        while (1) {\n          switch (_context7.prev = _context7.next) {\n            case 0:\n              _context7.next = 2;\n              return _this._users.findOne({\n                username: username\n              }, {\n                projection: filter\n              });\n\n            case 2:\n              user = _context7.sent;\n\n              if (user) {\n                _context7.next = 5;\n                break;\n              }\n\n              return _context7.abrupt(\"return\", null);\n\n            case 5:\n              info = Object.assign({}, user);\n              delete info.password;\n              delete info._id;\n              return _context7.abrupt(\"return\", info);\n\n            case 9:\n            case \"end\":\n              return _context7.stop();\n          }\n        }\n      }, _callee7);\n    }));\n\n    return function (_x12, _x13) {\n      return _ref7.apply(this, arguments);\n    };\n  }());\n\n  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3___default()(this, \"removeInfoFromProfile\",\n  /*#__PURE__*/\n  function () {\n    var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n    /*#__PURE__*/\n    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(username, toRemove) {\n      var unsetObject, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _key;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {\n        while (1) {\n          switch (_context8.prev = _context8.next) {\n            case 0:\n              unsetObject = {};\n              _iteratorNormalCompletion = true;\n              _didIteratorError = false;\n              _iteratorError = undefined;\n              _context8.prev = 4;\n\n              for (_iterator = toRemove[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                _key = _step.value;\n                unsetObject[_key] = \"\";\n              }\n\n              _context8.next = 12;\n              break;\n\n            case 8:\n              _context8.prev = 8;\n              _context8.t0 = _context8[\"catch\"](4);\n              _didIteratorError = true;\n              _iteratorError = _context8.t0;\n\n            case 12:\n              _context8.prev = 12;\n              _context8.prev = 13;\n\n              if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n                _iterator[\"return\"]();\n              }\n\n            case 15:\n              _context8.prev = 15;\n\n              if (!_didIteratorError) {\n                _context8.next = 18;\n                break;\n              }\n\n              throw _iteratorError;\n\n            case 18:\n              return _context8.finish(15);\n\n            case 19:\n              return _context8.finish(12);\n\n            case 20:\n              if (!username) {\n                _context8.next = 25;\n                break;\n              }\n\n              _context8.next = 23;\n              return _this._users.updateOne({\n                username: username\n              }, {\n                $unset: unsetObject\n              });\n\n            case 23:\n              _context8.next = 27;\n              break;\n\n            case 25:\n              _context8.next = 27;\n              return _this._users.updateMany({}, {\n                $unset: unsetObject\n              });\n\n            case 27:\n            case \"end\":\n              return _context8.stop();\n          }\n        }\n      }, _callee8, null, [[4, 8, 12, 20], [13,, 15, 19]]);\n    }));\n\n    return function (_x14, _x15) {\n      return _ref8.apply(this, arguments);\n    };\n  }());\n\n  this._db = db;\n  this._users = db.collection('Users');\n};\n\n\n\n//# sourceURL=webpack:///./src/server/mongodb/DbWrapper.ts?");

/***/ }),

/***/ "./src/server/routes/api/db/avatar/handlers.ts":
/*!*****************************************************!*\
  !*** ./src/server/routes/api/db/avatar/handlers.ts ***!
  \*****************************************************/
/*! exports provided: handleSaveAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleSaveAvatar\", function() { return handleSaveAvatar; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actions_profile_actionUpdateProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../store/actions/profile/actionUpdateProfile */ \"./src/store/actions/profile/actionUpdateProfile.ts\");\n\n\n\n\n\n/** Saves avatar image in the file system (files/images/avatar)\r\n * \r\n * Actual save logic is done by `multer`\r\n * \r\n * Responses (status : body : explanation):\r\n * - 200 : **Dispatch Order**\r\n */\n\nvar handleSaveAvatar =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var avatarPath, stats, lastModifiedTime;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            avatarPath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(path__WEBPACK_IMPORTED_MODULE_3___default.a.resolve(global.__workspaceFolder, 'files/images/avatar'), \"\".concat(req.session.profile.username, \".jpeg\"));\n            stats = Object(fs__WEBPACK_IMPORTED_MODULE_2__[\"statSync\"])(avatarPath);\n            lastModifiedTime = stats.mtime.getTime();\n            req.session.profile.lastModified.avatar = lastModifiedTime;\n            res.status(200).send({\n              action: Object(_store_actions_profile_actionUpdateProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n                lastModified: {\n                  avatar: lastModifiedTime\n                }\n              })\n            });\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function handleSaveAvatar(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server/routes/api/db/avatar/handlers.ts?");

/***/ }),

/***/ "./src/server/routes/api/db/avatar/requests.ts":
/*!*****************************************************!*\
  !*** ./src/server/routes/api/db/avatar/requests.ts ***!
  \*****************************************************/
/*! exports provided: askSaveAvatar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"askSaveAvatar\", function() { return askSaveAvatar; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar askSaveAvatar =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(file) {\n    var formData;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            formData = new FormData();\n            formData.append('file', file);\n            _context.next = 4;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"http://localhost:9228/api/db/avatar/save\", formData, {\n              headers: {\n                'Content-Type': 'multipart/form-data'\n              }\n            });\n\n          case 4:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function askSaveAvatar(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server/routes/api/db/avatar/requests.ts?");

/***/ }),

/***/ "./src/server/routes/api/db/avatar/routing.ts":
/*!****************************************************!*\
  !*** ./src/server/routes/api/db/avatar/routing.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers */ \"./src/server/routes/api/db/avatar/handlers.ts\");\n/* harmony import */ var _middlewares_stopUnauthenticated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../middlewares/stopUnauthenticated */ \"./src/server/middlewares/stopUnauthenticated.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app, upload) {\n  app.post('/api/db/avatar/save', _middlewares_stopUnauthenticated__WEBPACK_IMPORTED_MODULE_1__[\"default\"], upload.single('file'), _handlers__WEBPACK_IMPORTED_MODULE_0__[\"handleSaveAvatar\"]);\n});\n\n//# sourceURL=webpack:///./src/server/routes/api/db/avatar/routing.ts?");

/***/ }),

/***/ "./src/server/routes/api/db/handlers.ts":
/*!**********************************************!*\
  !*** ./src/server/routes/api/db/handlers.ts ***!
  \**********************************************/
/*! exports provided: handleExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleExists\", function() { return handleExists; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mongodb_Connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mongodb/Connection */ \"./src/server/mongodb/Connection.ts\");\n/* harmony import */ var _constants_RequestErr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants/RequestErr */ \"./src/constants/RequestErr.ts\");\n\n\n\n\n/**\r\n * Check the existence of something in the database\r\n * \r\n * Current available check types:\r\n * - username\r\n * \r\n * Send a body in the following format:\r\n * \r\n * {type: *one of check types above*, name: *query*}\r\n * \r\n * Responses (status : body):\r\n * - 200 : *boolean*\r\n * - 400 : SYNTAX_ERROR\r\n * \r\n * @example\r\n * // does username \"abcde\" exists?\r\n * // BODY\r\n * {type: \"username\", name: \"abcde\"}\r\n */\n\nvar handleExists =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var db;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(req.body.type === \"username\" && req.body.name)) {\n              _context.next = 11;\n              break;\n            }\n\n            _context.next = 3;\n            return _mongodb_Connection__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get();\n\n          case 3:\n            db = _context.sent;\n            _context.t0 = res.status(200);\n            _context.next = 7;\n            return db.userExists(req.body.name);\n\n          case 7:\n            _context.t1 = _context.sent;\n\n            _context.t0.send.call(_context.t0, _context.t1);\n\n            _context.next = 12;\n            break;\n\n          case 11:\n            res.status(400).send(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SYNTAX_ERROR);\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function handleExists(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server/routes/api/db/handlers.ts?");

/***/ }),

/***/ "./src/server/routes/api/db/profile/handlers.ts":
/*!******************************************************!*\
  !*** ./src/server/routes/api/db/profile/handlers.ts ***!
  \******************************************************/
/*! exports provided: handleSaveProfile, handleGetProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleSaveProfile\", function() { return handleSaveProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleGetProfile\", function() { return handleGetProfile; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mongodb_Connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../mongodb/Connection */ \"./src/server/mongodb/Connection.ts\");\n/* harmony import */ var _constants_RequestErr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../constants/RequestErr */ \"./src/constants/RequestErr.ts\");\n/* harmony import */ var _store_actions_profile_actionUpdateProfileByReq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../store/actions/profile/actionUpdateProfileByReq */ \"./src/store/actions/profile/actionUpdateProfileByReq.ts\");\n\n\n\n\n\n\n/**\r\n * Saves profile info (account persistent data)\r\n * \r\n * Send a body in the {[key]: value} format for each `key` you want to update\r\n * \r\n * \r\n * Responses (status : body : explanation):\r\n * - 200 : ***Dispatch Order***\r\n * - 400 : CLIENT_SIDE_LOGIC_ERROR : User wasn't logged in\r\n * - 400 : SYNTAX_ERROR : Invalid keys\r\n * - 500 : MONGODB_ERROR\r\n */\n\nvar handleSaveProfile =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var db, validFields, failed, attr;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _mongodb_Connection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get();\n\n          case 2:\n            db = _context.sent;\n            validFields = [\"bioText\", \"awards\", \"collections\"];\n            failed = false;\n            _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(req.body);\n\n          case 6:\n            if ((_context.t1 = _context.t0()).done) {\n              _context.next = 19;\n              break;\n            }\n\n            attr = _context.t1.value;\n\n            if (!(attr === \"username\")) {\n              _context.next = 10;\n              break;\n            }\n\n            return _context.abrupt(\"continue\", 6);\n\n          case 10:\n            if (!validFields.includes(attr)) {\n              _context.next = 15;\n              break;\n            }\n\n            _context.next = 13;\n            return db.saveProfile(req.session.profile.username, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, attr, req.body[attr]))[\"catch\"](function () {\n              failed = true;\n            });\n\n          case 13:\n            // @ts-ignore\n            req.session.profile[attr] = req.body[attr];\n            return _context.abrupt(\"continue\", 6);\n\n          case 15:\n            res.status(400).send(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_4__[\"default\"].SYNTAX_ERROR);\n            return _context.abrupt(\"return\");\n\n          case 19:\n            if (!failed) {\n              _context.next = 22;\n              break;\n            }\n\n            res.status(500).send(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_4__[\"default\"].MONGODB_ERROR);\n            return _context.abrupt(\"return\");\n\n          case 22:\n            _context.t2 = res.status(200);\n            _context.next = 25;\n            return Object(_store_actions_profile_actionUpdateProfileByReq__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(req);\n\n          case 25:\n            _context.t3 = _context.sent;\n            _context.t4 = {\n              action: _context.t3\n            };\n\n            _context.t2.send.call(_context.t2, _context.t4);\n\n          case 28:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function handleSaveProfile(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n/**\r\n * Gets profile info (account persistent data)\r\n * \r\n * Send a filter object to configure which fields to include or exclude (but not both),\r\n * in {[key]: 0 | 1 | boolean} format\r\n * \r\n * * {key1: 0 | false, key2: 0 | false, ...} means you want all values but those of the specified keys\r\n * * {key1: 1 | true, key2: 1 | true, ...} means you want only the values of the specified keys\r\n * \r\n * Keys must be those specified by the `UserInfo` type\r\n * \r\n * Responses {status : body : explanation}:\r\n * - 200 : {...object with user info...}\r\n * - 400 : CLIENT_SIDE_LOGIC_ERROR\r\n * - 500 : USERNAME_NOT_FOUND : Unexpected, server's fault\r\n * \r\n * \r\n * @example\r\n * // HTTP BODY\r\n * {a: 1, c: 1} // works\r\n * // for profile {a: \"a\", b: \"b\", c: \"c\"} gets {a: \"a\", c: \"c\"}\r\n * // for profile {u: \"u\"} gets {}\r\n *\r\n * @example\r\n * // HTTP BODY\r\n * {a: 0, b: 0} // works\r\n * // for profile {a: \"a\", b: \"b\", c: \"c\"} gets {c: \"c\"}\r\n * // for profile {u: \"u\"} gets {u: \"u\"}\r\n * \r\n * @example\r\n * // HTTP BODY\r\n * {a: 0, b: 1} // ERROR (no matter what the profile is)\r\n * \r\n */\n\nvar handleGetProfile =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {\n    var db, user;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _mongodb_Connection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get();\n\n          case 2:\n            db = _context2.sent;\n            _context2.next = 5;\n            return db.getProfile(req.session.profile.username, req.body.filter);\n\n          case 5:\n            user = _context2.sent;\n\n            if (user) {\n              _context2.next = 9;\n              break;\n            }\n\n            res.status(500).send(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_4__[\"default\"].USERNAME_NOT_FOUND);\n            return _context2.abrupt(\"return\");\n\n          case 9:\n            res.status(200).send(user);\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function handleGetProfile(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server/routes/api/db/profile/handlers.ts?");

/***/ }),

/***/ "./src/server/routes/api/db/profile/requests.ts":
/*!******************************************************!*\
  !*** ./src/server/routes/api/db/profile/requests.ts ***!
  \******************************************************/
/*! exports provided: askSaveProfile, askGetProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"askSaveProfile\", function() { return askSaveProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"askGetProfile\", function() { return askGetProfile; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_hasDispatchOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/hasDispatchOrder */ \"./src/server/utils/hasDispatchOrder.ts\");\n\n\n\n\nvar askSaveProfile =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, data) {\n    var res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"http://localhost:9228/api/db/profile/save\", data);\n\n          case 2:\n            res = _context.sent;\n            if (Object(_utils_hasDispatchOrder__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(res)) dispatch(res.data.action);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function askSaveProfile(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar askGetProfile =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(filter) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"http://localhost:9228/api/db/profile/get\", {\n              filter: filter\n            });\n\n          case 2:\n            return _context2.abrupt(\"return\", _context2.sent.data);\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function askGetProfile(_x3) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server/routes/api/db/profile/requests.ts?");

/***/ }),

/***/ "./src/server/routes/api/db/profile/routing.ts":
/*!*****************************************************!*\
  !*** ./src/server/routes/api/db/profile/routing.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/server/routes/api/db/profile/handlers.ts\");\n/* harmony import */ var _middlewares_stopUnauthenticated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../middlewares/stopUnauthenticated */ \"./src/server/middlewares/stopUnauthenticated.ts\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.post('/api/db/profile/save', _middlewares_stopUnauthenticated__WEBPACK_IMPORTED_MODULE_2__[\"default\"], express__WEBPACK_IMPORTED_MODULE_0___default.a.json(), _handlers__WEBPACK_IMPORTED_MODULE_1__[\"handleSaveProfile\"]);\n  app.post('/api/db/profile/get', _middlewares_stopUnauthenticated__WEBPACK_IMPORTED_MODULE_2__[\"default\"], express__WEBPACK_IMPORTED_MODULE_0___default.a.json(), _handlers__WEBPACK_IMPORTED_MODULE_1__[\"handleGetProfile\"]);\n});\n\n//# sourceURL=webpack:///./src/server/routes/api/db/profile/routing.ts?");

/***/ }),

/***/ "./src/server/routes/api/db/requests.ts":
/*!**********************************************!*\
  !*** ./src/server/routes/api/db/requests.ts ***!
  \**********************************************/
/*! exports provided: askUserAlreadyExists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"askUserAlreadyExists\", function() { return askUserAlreadyExists; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar askUserAlreadyExists =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(username) {\n    var res;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"http://localhost:9228/api/db/exists\", {\n              type: \"username\",\n              name: username\n            });\n\n          case 2:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res.data);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function askUserAlreadyExists(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server/routes/api/db/requests.ts?");

/***/ }),

/***/ "./src/server/routes/api/db/routing.ts":
/*!*********************************************!*\
  !*** ./src/server/routes/api/db/routing.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/server/routes/api/db/handlers.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.post('/api/db/exists', express__WEBPACK_IMPORTED_MODULE_0___default.a.json(), _handlers__WEBPACK_IMPORTED_MODULE_1__[\"handleExists\"]);\n});\n\n//# sourceURL=webpack:///./src/server/routes/api/db/routing.ts?");

/***/ }),

/***/ "./src/server/routes/api/db/session/handlers.ts":
/*!******************************************************!*\
  !*** ./src/server/routes/api/db/session/handlers.ts ***!
  \******************************************************/
/*! exports provided: handleSignUp, handleSignIn, handleLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleSignUp\", function() { return handleSignUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleSignIn\", function() { return handleSignIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleLogout\", function() { return handleLogout; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mongodb_Connection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../mongodb/Connection */ \"./src/server/mongodb/Connection.ts\");\n/* harmony import */ var _constants_RequestErr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../constants/RequestErr */ \"./src/constants/RequestErr.ts\");\n/* harmony import */ var _utils_resetSession__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/resetSession */ \"./src/server/utils/resetSession.ts\");\n/* harmony import */ var _utils_fetchSession__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../utils/fetchSession */ \"./src/server/utils/fetchSession.ts\");\n/* harmony import */ var _store_actions_session_actionLogout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../store/actions/session/actionLogout */ \"./src/store/actions/session/actionLogout.ts\");\n/* harmony import */ var _store_actions_session_actionLoginByReq__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../store/actions/session/actionLoginByReq */ \"./src/store/actions/session/actionLoginByReq.ts\");\n\n\n\n\n\n\n\n\n/**\r\n * Adds a user account to the database, if requirements are met\r\n * \r\n * Requirements:\r\n * - `req.body` must have the fields `username`, `password` and `email`\r\n * - `username` doesn't belong to an existing account\r\n * - `email` doesn't belong to an existing account\r\n * \r\n * Responses (status : body):\r\n * - 200 : OK\r\n * - 422 : ALREADY_USED_USERNAME\r\n * - 422 : ALREADY_USED_EMAIL\r\n *   \r\n */\n\nvar handleSignUp =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    var db, username, password;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return _mongodb_Connection__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get();\n\n          case 2:\n            db = _context.sent;\n            username = req.body.username;\n            password = req.body.password;\n            console.log(\"handleSignUp: \" + username);\n            console.log(\"handleSignUp: \" + password);\n            _context.prev = 7;\n            _context.next = 10;\n            return db.createUser(username, password, req.body.email);\n\n          case 10:\n            _context.next = 16;\n            break;\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](7);\n            res.status(422).send(_context.t0.message);\n            return _context.abrupt(\"return\");\n\n          case 16:\n            res.sendStatus(200);\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[7, 12]]);\n  }));\n\n  return function handleSignUp(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n/**\r\n * Sets a user as logged in (enabling the retrieval of information by other handlers0)\r\n * \r\n * \r\n * Responses (status : body : explanation):\r\n * - 200 : ***Dispatch Order***\r\n * - 400 : SYNTAX_ERROR\r\n * - 422 : AUTHENTICATION_FAILED\r\n * - 422 : CLIENT_SIDE_LOGIC_ERROR : User already logged in\r\n * - 500 : MONGOSTORE_DISCONNECTED\r\n * \r\n *  */\n\nvar handleSignIn =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {\n    var db, _req$body, username, password, isAuthenticated;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return _mongodb_Connection__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get();\n\n          case 2:\n            db = _context2.sent;\n            console.log(\"body\");\n            console.log(req.body);\n            _req$body = req.body, username = _req$body.username, password = _req$body.password;\n\n            if (!(!username || !password)) {\n              _context2.next = 9;\n              break;\n            }\n\n            res.status(400).send(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SYNTAX_ERROR);\n            return _context2.abrupt(\"return\");\n\n          case 9:\n            if (!req.session.logged) {\n              _context2.next = 12;\n              break;\n            }\n\n            // this should never execute, because the client shouldn't POST to login if\n            // user is already logged in\n            // route logic might be failing if that happens\n            res.status(422).send(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_3__[\"default\"].CLIENT_SIDE_LOGIC_ERROR);\n            return _context2.abrupt(\"return\");\n\n          case 12:\n            _context2.next = 14;\n            return db.authenticateUserByUsername(username, password);\n\n          case 14:\n            isAuthenticated = _context2.sent;\n\n            if (!isAuthenticated) {\n              _context2.next = 27;\n              break;\n            }\n\n            console.log(\"OK, authenticated\");\n            req.session.logged = true; // user is marked as authenticated\n\n            _context2.next = 20;\n            return Object(_utils_fetchSession__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(req, username);\n\n          case 20:\n            _context2.t0 = res.status(200);\n            _context2.next = 23;\n            return Object(_store_actions_session_actionLoginByReq__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(req);\n\n          case 23:\n            _context2.t1 = _context2.sent;\n            _context2.t2 = {\n              action: _context2.t1\n            };\n\n            _context2.t0.send.call(_context2.t0, _context2.t2);\n\n            return _context2.abrupt(\"return\");\n\n          case 27:\n            res.status(422).send(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_3__[\"default\"].AUTHENTICATION_FAILED);\n\n          case 28:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function handleSignIn(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n/**\r\n * Resets `req.session` if logged in\r\n * \r\n * Responses (status : body):\r\n * - 200 : ***Dispatch Order***\r\n * - 422 : USER_NOT_LOGGED_IN : Can't destroy public session\r\n */\n\nvar handleLogout =\n/*#__PURE__*/\nfunction () {\n  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(req, res) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            if (!req.session.logged) {\n              _context3.next = 5;\n              break;\n            }\n\n            Object(_utils_resetSession__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(req);\n            console.log(\"session destroyed\");\n            res.status(200).send({\n              action: Object(_store_actions_session_actionLogout__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n            });\n            return _context3.abrupt(\"return\");\n\n          case 5:\n            ;\n            res.status(422).send(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_3__[\"default\"].USER_NOT_LOGGED_IN);\n\n          case 7:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function handleLogout(_x5, _x6) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server/routes/api/db/session/handlers.ts?");

/***/ }),

/***/ "./src/server/routes/api/db/session/request.ts":
/*!*****************************************************!*\
  !*** ./src/server/routes/api/db/session/request.ts ***!
  \*****************************************************/
/*! exports provided: askSignin, askSignup, askLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"askSignin\", function() { return askSignin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"askSignup\", function() { return askSignup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"askLogout\", function() { return askLogout; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar askSignin =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(username, password) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"http://localhost:9228/api/db/session/signin\", {\n              username: username,\n              password: password\n            });\n\n          case 2:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function askSignin(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar askSignup =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(username, password, email) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"http://localhost:9228/api/db/session/signup\", {\n              username: username,\n              password: password,\n              email: email\n            });\n\n          case 2:\n            return _context2.abrupt(\"return\", _context2.sent);\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function askSignup(_x3, _x4, _x5) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar askLogout =\n/*#__PURE__*/\nfunction () {\n  var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(\"http://localhost:9228/api/db/session/logout\");\n\n          case 2:\n            return _context3.abrupt(\"return\", _context3.sent);\n\n          case 3:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function askLogout() {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n//# sourceURL=webpack:///./src/server/routes/api/db/session/request.ts?");

/***/ }),

/***/ "./src/server/routes/api/db/session/routing.ts":
/*!*****************************************************!*\
  !*** ./src/server/routes/api/db/session/routing.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ \"./src/server/routes/api/db/session/handlers.ts\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.post('/api/db/session/signup', express__WEBPACK_IMPORTED_MODULE_0___default.a.json(), _handlers__WEBPACK_IMPORTED_MODULE_1__[\"handleSignUp\"]);\n  app.post('/api/db/session/signin', express__WEBPACK_IMPORTED_MODULE_0___default.a.json(), _handlers__WEBPACK_IMPORTED_MODULE_1__[\"handleSignIn\"]);\n  app.post('/api/db/session/logout', _handlers__WEBPACK_IMPORTED_MODULE_1__[\"handleLogout\"]);\n});\n\n//# sourceURL=webpack:///./src/server/routes/api/db/session/routing.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_db_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/db/routing */ \"./src/server/routes/api/db/routing.ts\");\n/* harmony import */ var _api_db_session_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/db/session/routing */ \"./src/server/routes/api/db/session/routing.ts\");\n/* harmony import */ var _api_db_profile_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/db/profile/routing */ \"./src/server/routes/api/db/profile/routing.ts\");\n/* harmony import */ var _api_db_avatar_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api/db/avatar/routing */ \"./src/server/routes/api/db/avatar/routing.ts\");\n/* harmony import */ var _global_middlewares_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global-middlewares/logger */ \"./src/server/global-middlewares/logger.tsx\");\n/* harmony import */ var _global_middlewares_initSession__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global-middlewares/initSession */ \"./src/server/global-middlewares/initSession.ts\");\n/* harmony import */ var _global_middlewares_serverRenderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global-middlewares/serverRenderer */ \"./src/server/global-middlewares/serverRenderer.tsx\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _webpack_config_babel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../webpack.config.babel */ \"./webpack.config.babel.ts\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var webpack_hot_server_middleware__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! webpack-hot-server-middleware */ \"webpack-hot-server-middleware\");\n/* harmony import */ var webpack_hot_server_middleware__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_server_middleware__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _global_middlewares_setStaticRoutes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../global-middlewares/setStaticRoutes */ \"./src/server/global-middlewares/setStaticRoutes.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar setRoutes = function setRoutes(app, extra) {\n  /**  Global middlewares */\n  app.use(_global_middlewares_logger__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  app.use(_global_middlewares_initSession__WEBPACK_IMPORTED_MODULE_7__[\"default\"]); // after initSession the `req.session` is guaranteed to be initialized\n\n  /** Static middlewares */\n\n  Object(_global_middlewares_setStaticRoutes__WEBPACK_IMPORTED_MODULE_14__[\"default\"])(app);\n  /** Global get responses */\n\n  app.get('/favicon.ico', function (req, res) {\n    res.sendStatus(200);\n  });\n  /** Each function below sets its own middlewares/handlers as needed\r\n   * \r\n   * x$y$z means that the middlewares/handlers are mounted at '/x/y/z'\r\n   *\r\n   * Because of initSession, every request is guaranteed to have `req.session` initialized and, thus,\r\n   * the express intance `app` can be assumed to be of type `App` (which considers session initialized\r\n   * in the methods `get`, `put` and `use`)\r\n   * \r\n   * If you know how to avoid this assertion and improve type safety, please do\r\n   */\n\n  Object(_api_db_routing__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(app);\n  Object(_api_db_session_routing__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(app);\n  Object(_api_db_profile_routing__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(app);\n  Object(_api_db_avatar_routing__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(app, extra.upload);\n\n  if (true) {\n    console.log(\"running in development\"); // webpack-dev-middleware connects this express server with the webpack bundle system,\n    // enabling Hot Module Replacement\n\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_9___default()(_webpack_config_babel__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\n    var webpackDevMiddlewareInstance = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_11___default()(compiler, {\n      publicPath: _webpack_config_babel__WEBPACK_IMPORTED_MODULE_10__[\"default\"][0].output.publicPath,\n      // from client webpack config\n      serverSideRender: true\n    });\n    var clientCompiler = compiler.compilers.find(function (compiler) {\n      return compiler.name === 'client';\n    });\n    if (!clientCompiler) throw new Error(\"Couldn't find webpack compiler with name \\\"client\\\"\");\n    var weppackHotMiddlewareInstance = webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_12___default()(clientCompiler);\n    /** Serves client.js in memory, enables HMR */\n\n    app.use(webpackDevMiddlewareInstance);\n    /** Listens to changes in client.js bundle */\n\n    app.use(weppackHotMiddlewareInstance);\n    /** Updates serverRenderer to match the most recent client.js\r\n     *  But does not listen to changes to server files, just the server side renderer */\n\n    app.use(webpack_hot_server_middleware__WEBPACK_IMPORTED_MODULE_13___default()(compiler));\n  } else {}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setRoutes);\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.tsx":
/*!*******************************!*\
  !*** ./src/server/server.tsx ***!
  \*******************************/
/*! exports provided: runServer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"runServer\", function() { return runServer; });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _global_middlewares_serverRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-middlewares/serverRenderer */ \"./src/server/global-middlewares/serverRenderer.tsx\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express-session */ \"express-session\");\n/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connect-mongo */ \"connect-mongo\");\n/* harmony import */ var connect_mongo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(connect_mongo__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mongodb_Connection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mongodb/Connection */ \"./src/server/mongodb/Connection.ts\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _constants_RequestErr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/RequestErr */ \"./src/constants/RequestErr.ts\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../globals */ \"./globals.ts\");\n/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_globals__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\nvar MongoStore = connect_mongo__WEBPACK_IMPORTED_MODULE_4___default()(express_session__WEBPACK_IMPORTED_MODULE_3___default.a);\nvar diskStorage = multer__WEBPACK_IMPORTED_MODULE_6___default.a.diskStorage({\n  destination: 'files/images/avatar',\n  filename: function filename(req, file, cb) {\n    if (!req.session) {\n      cb(new Error(_constants_RequestErr__WEBPACK_IMPORTED_MODULE_7__[\"default\"].MONGOSTORE_DISCONNECTED), \"\");\n      return;\n    }\n\n    if (!req.session.profile.username) return;\n    cb(null, \"\".concat(req.session.profile.username, \".jpeg\"));\n  }\n});\nvar upload = multer__WEBPACK_IMPORTED_MODULE_6___default()({\n  storage: diskStorage\n});\n\nvar anyPreRequesiteIsMissing = function anyPreRequesiteIsMissing() {\n  return !process.env.SESSION_SECRET || !process.env.MONGO_URI || !_mongodb_Connection__WEBPACK_IMPORTED_MODULE_5__[\"default\"]._BREAK_ENCAPSULATION__IF_YOU_USE_UPDATE_DESCRIPTION__privateDatabase ||  false && false;\n};\n\nvar runServer = function runServer() {\n  _mongodb_Connection__WEBPACK_IMPORTED_MODULE_5__[\"default\"].initialize();\n  var PORT = process.env.PORT || 6060;\n  var app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n  if (anyPreRequesiteIsMissing()) throw new Error(\"A prerequesite is missing. Check function anyPreRequesiteIsMissing in server.tsx\");\n  app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()({\n    origin: \"http://localhost\"\n  }));\n  app.use(express_session__WEBPACK_IMPORTED_MODULE_3___default()({\n    resave: false,\n    saveUninitialized: false,\n    secret: process.env.SESSION_SECRET,\n    store: new MongoStore({\n      url: process.env.MONGO_URI,\n      dbPromise: _mongodb_Connection__WEBPACK_IMPORTED_MODULE_5__[\"default\"]._BREAK_ENCAPSULATION__IF_YOU_USE_UPDATE_DESCRIPTION__privateDatabase,\n      autoRemove: 'interval',\n      autoRemoveInterval: 0.1,\n      mongoOptions: {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n      }\n    })\n  }));\n  Object(_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(app, {\n    upload: upload\n  });\n  app.post(/\\/.*/, function (req, res) {\n    return res.status(404).send(\"Nope\");\n  });\n  app.listen(PORT, function () {\n    console.log(\"Listening on \" + PORT + \"...\");\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return _global_middlewares_serverRenderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n}); // used by webpack-hot-server-middleware\n\n//# sourceURL=webpack:///./src/server/server.tsx?");

/***/ }),

/***/ "./src/server/utils/fetchSession.ts":
/*!******************************************!*\
  !*** ./src/server/utils/fetchSession.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mongodb_Connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mongodb/Connection */ \"./src/server/mongodb/Connection.ts\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n/** \r\n * Fetchs info from the database and the file system, mutating `req.session`\r\n */\n\nvar fetchSession =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, username) {\n    var db, profile, outOfDBInfo;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (req.session.logged) {\n              _context.next = 2;\n              break;\n            }\n\n            throw new Error(\"Asked to fetch user info, but user is not logged in\");\n\n          case 2:\n            _context.next = 4;\n            return _mongodb_Connection__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get();\n\n          case 4:\n            db = _context.sent;\n            _context.next = 7;\n            return db.getProfile(username);\n\n          case 7:\n            profile = _context.sent;\n\n            if (profile) {\n              console.log(\"fetchSession workspaceFolder:\");\n              console.log(global.__workspaceFolder);\n              outOfDBInfo = {\n                lastModified: {\n                  avatar: fs__WEBPACK_IMPORTED_MODULE_4___default.a.statSync(path__WEBPACK_IMPORTED_MODULE_5___default.a.join(path__WEBPACK_IMPORTED_MODULE_5___default.a.resolve(global.__workspaceFolder, \"files/images/avatar\"), \"\".concat(profile.username, \".jpeg\"))).mtime.getTime()\n                }\n              };\n              req.session.profile = _objectSpread({}, profile, {}, outOfDBInfo);\n            }\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function fetchSession(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchSession);\n\n//# sourceURL=webpack:///./src/server/utils/fetchSession.ts?");

/***/ }),

/***/ "./src/server/utils/generateHTML.tsx":
/*!*******************************************!*\
  !*** ./src/server/utils/generateHTML.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _globalStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globalStyle */ \"./src/globalStyle.ts\");\n\n/** \r\n * Generates markup to be sent to the client with preloaded HTML, CSS and state\r\n */\n\nvar generateHTML = function generateHTML(reactString, styles, preloadState) {\n  return \"\\n        <!DOCTYPE html>\\n        <html>\\n            <head>\\n                <style>\".concat(_globalStyle__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \"</style>\\n                \").concat(styles, \"\\n                <script>\").concat(preloadState, \"</script>\\n                <script src=\\\"/client.js\\\"></script>\\n            </head>\\n            <body>\\n                <div id=\\\"root\\\">\").concat(reactString, \"</div>\\n            <body>\\n        </html>\\n    \");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (generateHTML);\n\n//# sourceURL=webpack:///./src/server/utils/generateHTML.tsx?");

/***/ }),

/***/ "./src/server/utils/hasDispatchOrder.ts":
/*!**********************************************!*\
  !*** ./src/server/utils/hasDispatchOrder.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar hasDispatchOrder = function hasDispatchOrder(res) {\n  return res && res.status === 200 && res.data.action;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hasDispatchOrder);\n\n//# sourceURL=webpack:///./src/server/utils/hasDispatchOrder.ts?");

/***/ }),

/***/ "./src/server/utils/resetSession.ts":
/*!******************************************!*\
  !*** ./src/server/utils/resetSession.ts ***!
  \******************************************/
/*! exports provided: initialSession, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialSession\", function() { return initialSession; });\nvar initialSession = {\n  logged: false,\n  profile: null,\n  _initialized: true\n};\n/** Mutates `req.session`, setting it to the initial session (not logged in) */\n\nvar resetSession = function resetSession(req) {\n  Object.assign(req.session, initialSession);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resetSession);\n\n//# sourceURL=webpack:///./src/server/utils/resetSession.ts?");

/***/ }),

/***/ "./src/server/utils/translateStateToClient.ts":
/*!****************************************************!*\
  !*** ./src/server/utils/translateStateToClient.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"@babel/runtime/helpers/objectWithoutProperties\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/reducers/rootReducer */ \"./src/store/reducers/rootReducer.ts\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/**\r\n * Translates the server side state (accessed via `req.session`) to the client side state (accessed via `props`)\r\n */\n\nvar translateStateToClient =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {\n    var url, _req$session, profile, cookie, id, regenerate, destroy, save, touch, reload, _initialized, SESSION, defaultClientState, clientState;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = req.originalUrl;\n            _req$session = req.session, profile = _req$session.profile, cookie = _req$session.cookie, id = _req$session.id, regenerate = _req$session.regenerate, destroy = _req$session.destroy, save = _req$session.save, touch = _req$session.touch, reload = _req$session.reload, _initialized = _req$session._initialized, SESSION = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_req$session, [\"profile\", \"cookie\", \"id\", \"regenerate\", \"destroy\", \"save\", \"touch\", \"reload\", \"_initialized\"]);\n            /* In the client, the store is ALWAYS created with an initialState provided by the server\r\n             * which is exactly the state returned by this function. Therefore, the initial state provided by\r\n             * the reducers 'session' and 'profile' are ALWAYS ignored in the client\r\n             * and the SERVER is the one which MUST use it. Although not strictly needed, \r\n             * we are preloading the initial state of all other reducers too, for consistency */\n\n            defaultClientState = Object(_store_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(undefined, {\n              type: '_dummy_'\n            });\n            clientState = lodash__WEBPACK_IMPORTED_MODULE_4___default.a.merge({}, defaultClientState, {\n              session: SESSION,\n              profile: profile\n            });\n            return _context.abrupt(\"return\", clientState);\n\n          case 5:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function translateStateToClient(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (translateStateToClient);\n\n//# sourceURL=webpack:///./src/server/utils/translateStateToClient.ts?");

/***/ }),

/***/ "./src/store/actions/profile/actionUpdateProfile.ts":
/*!**********************************************************!*\
  !*** ./src/store/actions/profile/actionUpdateProfile.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar actionUpdateProfile = function actionUpdateProfile(merge) {\n  return {\n    type: 'UPDATE',\n    merge: merge\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (actionUpdateProfile);\n\n//# sourceURL=webpack:///./src/store/actions/profile/actionUpdateProfile.ts?");

/***/ }),

/***/ "./src/store/actions/profile/actionUpdateProfileByReq.ts":
/*!***************************************************************!*\
  !*** ./src/store/actions/profile/actionUpdateProfileByReq.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _server_utils_translateStateToClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../server/utils/translateStateToClient */ \"./src/server/utils/translateStateToClient.ts\");\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar actionUpdateProfileByReq =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.t0 = _objectSpread;\n            _context.t1 = {};\n            _context.next = 4;\n            return Object(_server_utils_translateStateToClient__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req);\n\n          case 4:\n            _context.t2 = _context.sent.profile;\n            _context.t3 = (0, _context.t0)(_context.t1, _context.t2);\n            return _context.abrupt(\"return\", {\n              type: 'UPDATE',\n              merge: _context.t3\n            });\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function actionUpdateProfileByReq(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (actionUpdateProfileByReq);\n\n//# sourceURL=webpack:///./src/store/actions/profile/actionUpdateProfileByReq.ts?");

/***/ }),

/***/ "./src/store/actions/session/actionLoginByReq.ts":
/*!*******************************************************!*\
  !*** ./src/store/actions/session/actionLoginByReq.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server_utils_translateStateToClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../server/utils/translateStateToClient */ \"./src/server/utils/translateStateToClient.ts\");\n\n\n\n\nvar actionLoginByReq =\n/*#__PURE__*/\nfunction () {\n  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Object(_server_utils_translateStateToClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(req);\n\n          case 2:\n            _context.t0 = _context.sent.profile;\n            return _context.abrupt(\"return\", {\n              type: 'LOGIN',\n              profile: _context.t0\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function actionLoginByReq(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (actionLoginByReq);\n\n//# sourceURL=webpack:///./src/store/actions/session/actionLoginByReq.ts?");

/***/ }),

/***/ "./src/store/actions/session/actionLogout.ts":
/*!***************************************************!*\
  !*** ./src/store/actions/session/actionLogout.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar actionLogout = function actionLogout() {\n  return {\n    type: 'LOGOUT'\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (actionLogout);\n\n//# sourceURL=webpack:///./src/store/actions/session/actionLogout.ts?");

/***/ }),

/***/ "./src/store/configStore.tsx":
/*!***********************************!*\
  !*** ./src/store/configStore.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/rootReducer */ \"./src/store/reducers/rootReducer.ts\");\n\n\n\nvar configStore = function configStore(initialState) {\n  var isInClient = true;\n\n  try {\n    window;\n    document;\n  } catch (err) {\n    isInClient = false;\n  }\n\n  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], initialState, // @ts-ignore : Enables redux devtools extension\n  isInClient ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined);\n  return store;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (configStore);\n\n//# sourceURL=webpack:///./src/store/configStore.tsx?");

/***/ }),

/***/ "./src/store/reducers/profileReducer.ts":
/*!**********************************************!*\
  !*** ./src/store/reducers/profileReducer.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n\n/** initial state is given by the server, this is here just in case something really bad happens */\n\nvar INITIAL_STATE = {\n  username: \"\",\n  email: \"\",\n  bioText: \"\",\n  lastModified: {\n    avatar: 0\n  }\n  /**\r\n   * Reducer for account persistent data\r\n   */\n\n};\n\nvar profileReducer = function profileReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'UPDATE':\n      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.mergeWith({}, state, action.merge, function (value, srcValue, key, obj, source) {\n        /** For future customization */\n        return;\n      });\n\n    case 'LOGIN':\n      return action.profile;\n\n    case 'LOGOUT':\n      return Object.assign({}, INITIAL_STATE);\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (profileReducer);\n\n//# sourceURL=webpack:///./src/store/reducers/profileReducer.ts?");

/***/ }),

/***/ "./src/store/reducers/rootReducer.ts":
/*!*******************************************!*\
  !*** ./src/store/reducers/rootReducer.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sessionReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sessionReducer */ \"./src/store/reducers/sessionReducer.ts\");\n/* harmony import */ var _profileReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profileReducer */ \"./src/store/reducers/profileReducer.ts\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  session: _sessionReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  profile: _profileReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/store/reducers/rootReducer.ts?");

/***/ }),

/***/ "./src/store/reducers/sessionReducer.ts":
/*!**********************************************!*\
  !*** ./src/store/reducers/sessionReducer.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/** initial state is given by the server, this is here just in case something really bad happens */\nvar INITIAL_STATE = {\n  logged: false\n  /**\r\n   * Manages the state of session data (non account persistent data)\r\n   */\n\n};\n\nvar sessionReducer = function sessionReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'LOGIN':\n      return _objectSpread({}, state, {\n        logged: true\n      });\n\n    case 'LOGOUT':\n      return _objectSpread({}, state, {\n        logged: false\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sessionReducer);\n\n//# sourceURL=webpack:///./src/store/reducers/sessionReducer.ts?");

/***/ }),

/***/ "./webpack.config.babel.ts":
/*!*********************************!*\
  !*** ./webpack.config.babel.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_node_externals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\n/* harmony import */ var webpack_node_externals__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_node_externals__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mini-css-extract-plugin */ \"mini-css-extract-plugin\");\n/* harmony import */ var mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar clientConfig = {\n  name: 'client',\n  entry: [\"webpack-hot-middleware/client\", \"./src/index.tsx\"],\n  output: {\n    filename: \"client.js\",\n    path: \"C:\\\\Users\\\\renan\\\\OneDrive\\\\Documentos\\\\React\\\\VidataUniversal\\\\build\",\n    publicPath: \"/\"\n  },\n  devtool: \"eval-source-map\",\n  // @ts-ignore\n  mode: \"development\",\n  target: \"web\",\n  module: {\n    rules: [{\n      test: /\\.(?:jsx?|tsx?)$/,\n      exclude: /node_modules/,\n      use: {\n        loader: 'babel-loader',\n        options: {\n          presets: [\"@babel/preset-env\", \"@babel/preset-react\", \"@babel/preset-typescript\"],\n          plugins: [\"@babel/plugin-proposal-class-properties\"]\n        }\n      }\n    }, {\n      test: /\\.css$/,\n      exclude: /node_modules/,\n      use: [{\n        loader: mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_2___default.a.loader,\n        options: {\n          hmr: true\n        }\n      }, {\n        loader: 'css-loader'\n      }]\n    }]\n  },\n  resolve: {\n    extensions: ['.tsx', '.ts', '.jsx', '.js']\n  },\n  plugins: [new mini_css_extract_plugin__WEBPACK_IMPORTED_MODULE_2___default.a({\n    filename: 'styles.css'\n  }), new webpack__WEBPACK_IMPORTED_MODULE_0___default.a.HotModuleReplacementPlugin()]\n};\nvar serverConfig = {\n  name: 'server',\n  entry: \"./src/server/server.tsx\",\n  output: {\n    filename: \"server-bundle.js\",\n    path: \"C:\\\\Users\\\\renan\\\\OneDrive\\\\Documentos\\\\React\\\\VidataUniversal\\\\src\\\\server\",\n    libraryTarget: \"commonjs2\"\n  },\n  // @ts-ignore\n  mode: \"development\",\n  target: 'node',\n  node: {\n    __dirname: false\n  },\n  module: {\n    rules: [{\n      test: /\\.(?:jsx?|tsx?)$/,\n      exclude: /node_modules/,\n      use: {\n        loader: 'babel-loader',\n        options: {\n          presets: [\"@babel/preset-env\", \"@babel/preset-react\", \"@babel/preset-typescript\"],\n          plugins: [\"@babel/plugin-proposal-class-properties\"]\n        }\n      }\n    }, {\n      test: /\\.css$/,\n      exclude: /node_modules/,\n      use: [{\n        loader: 'ignore-loader'\n      }]\n    }]\n  },\n  externals: [webpack_node_externals__WEBPACK_IMPORTED_MODULE_1___default()()],\n  resolve: {\n    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css']\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ([clientConfig, serverConfig]);\n\n//# sourceURL=webpack:///./webpack.config.babel.ts?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/defineProperty\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/defineProperty%22?");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/extends\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/extends%22?");

/***/ }),

/***/ "@babel/runtime/helpers/objectWithoutProperties":
/*!*****************************************************************!*\
  !*** external "@babel/runtime/helpers/objectWithoutProperties" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectWithoutProperties\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/objectWithoutProperties%22?");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/free-solid-svg-icons\");\n\n//# sourceURL=webpack:///external_%22@fortawesome/free-solid-svg-icons%22?");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@fortawesome/react-fontawesome\");\n\n//# sourceURL=webpack:///external_%22@fortawesome/react-fontawesome%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-mongo\");\n\n//# sourceURL=webpack:///external_%22connect-mongo%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mini-css-extract-plugin":
/*!******************************************!*\
  !*** external "mini-css-extract-plugin" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mini-css-extract-plugin\");\n\n//# sourceURL=webpack:///external_%22mini-css-extract-plugin%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"multer\");\n\n//# sourceURL=webpack:///external_%22multer%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

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

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "webpack-hot-server-middleware":
/*!************************************************!*\
  !*** external "webpack-hot-server-middleware" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-server-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-server-middleware%22?");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");\n\n//# sourceURL=webpack:///external_%22webpack-node-externals%22?");

/***/ })

/******/ });