(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* ---- reset ---- */\n\nhtml {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  margin-bottom: 20%;\n}\n\ndiv.navbar{\n  bottom:0;\n  left: 0;\n  right: 0;\n  position: fixed;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  background-color: #FAFAFA\n}\n\n.trainercard{\n  display: grid;\n  grid-template-columns: 20% auto 20%;\n  grid-template-areas: \n    \"img name price\"\n  \n  \n}\n\n.img-train-list{\n  grid-area: img\n}\n\n.name-trainer{\n  grid-area: name;\n  margin-left: 7%;\n  align-self: center;\n  margin-bottom: 0\n}\n\n.price-trainer{\n  grid-area: price;\n  align-self: center;\n  margin-bottom: 0\n}\n\n.trainercard-link{\n  display: flex;\n  justify-content: space-around\n}\n\n.train{\n  width: 30%\n}\n\n.user-trainer-list{\n  list-style: none;\n  display: flex;\n}\n\nh3, h1{\n  text-align: center\n}\n\n.formrow {\n\toverflow:hidden;\n\tposition:relative;\n\tmax-width:300px;\n\tmargin:auto;\n\tpadding:10px;\n}\n.checklabel {\n\tdisplay:block;\n\twidth:100%;\n\tbackground-color: #fff;\n\tborder: none;\n  border-radius: 45px;\n\ttext-align:center;\n\tpadding:10px 3em;\n  font-size: 11px;\n  font-family: 'Roboto', sans-serif;\n\tbox-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n}\n.checklabel:hover {\n  background-color: #2EE59D;\n  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);\n  color: #fff;\n  -webkit-transform: translateY(-2px);\n          transform: translateY(-2px);\n}\n\n.checkbox {\n\tposition:absolute;\n\tright:10px;\n\ttop:15px;\n\twidth: 2.2em;\n\theight: 2.2em;\n\t-webkit-appearance: none;\n\t-moz-appearance: none;\n\t-ms-appearance: none;\n\tappearance: none;\n\tborder:none;\n\tpadding:0;\n\tborder-radius:0;\n\tvertical-align: middle;\n\t\n\tbackground-repeat:no-repeat;\n\tbackground-size:cover;\n\tbackground-color:transparent;\n\tbackground-position:-10em -10em;\n\ttransition:.3s ease;\n\toutline:0;\n}\n\n.checkbox:active + label {\n\tbackground-color: #ddd;\n}\n.checkbox:checked {\n  background-position: 0 0;\n}\n\niframe{\n  width: 100%\n}", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _pages_Signup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/Signup */ "./src/pages/Signup.js");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/Login */ "./src/pages/Login.js");
/* harmony import */ var _components_PrivateRoute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/PrivateRoute */ "./src/components/PrivateRoute.js");
/* harmony import */ var _components_AnonRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/AnonRoute */ "./src/components/AnonRoute.js");
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./providers/AuthProvider */ "./src/providers/AuthProvider.js");
/* harmony import */ var _pages_Trainers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/Trainers */ "./src/pages/Trainers.js");
/* harmony import */ var _pages_TrainerProfile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/TrainerProfile */ "./src/pages/TrainerProfile.js");
/* harmony import */ var _pages_UserProfilePage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/UserProfilePage */ "./src/pages/UserProfilePage.js");
/* harmony import */ var _pages_PreferencesPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/PreferencesPage */ "./src/pages/PreferencesPage.js");





var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/App.js";














var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_11__["default"], {
        exact: true,
        path: "/",
        component: _pages_Home__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AnonRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
        path: "/signup",
        component: _pages_Signup__WEBPACK_IMPORTED_MODULE_9__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_AnonRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
        path: "/login",
        component: _pages_Login__WEBPACK_IMPORTED_MODULE_10__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_11__["default"], {
        path: "/trainers/:id",
        component: _pages_TrainerProfile__WEBPACK_IMPORTED_MODULE_15__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_11__["default"], {
        path: "/trainers",
        component: _pages_Trainers__WEBPACK_IMPORTED_MODULE_14__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_11__["default"], {
        path: "/auth/myProfile",
        component: _pages_UserProfilePage__WEBPACK_IMPORTED_MODULE_16__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_PrivateRoute__WEBPACK_IMPORTED_MODULE_11__["default"], {
        path: "/preferences",
        component: _pages_PreferencesPage__WEBPACK_IMPORTED_MODULE_17__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/AnonRoute.js":
/*!*************************************!*\
  !*** ./src/components/AnonRoute.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/AuthProvider */ "./src/providers/AuthProvider.js");

var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/components/AnonRoute.js";




var AnonRoute = function AnonRoute(_ref) {
  var Component = _ref.component,
      isLogged = _ref.isLogged,
      setUser = _ref.setUser,
      rest = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component", "isLogged", "setUser"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: function render(props) {
      if (!isLogged) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
          setUser: setUser,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          },
          __self: this
        }));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
          to: {
            pathname: '/',
            state: {
              from: props.location
            }
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        });
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_3__["withAuth"])(AnonRoute));

/***/ }),

/***/ "./src/components/Email.js":
/*!*********************************!*\
  !*** ./src/components/Email.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api-service */ "./src/lib/api-service.js");







var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/components/Email.js";



var Email =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Email, _Component);

  function Email() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Email);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Email)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      email: {
        reciver: '',
        sender: '',
        topic: '',
        text: ''
      }
    };

    _this.handleOnChange = function (e) {
      _this.setState(Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.email, Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));

      console.log(_this.state.email);
    };

    _this.handleOnSubmit = function (e) {
      e.preventDefault();
      var id = _this.props.match.params.id;
      var _this$state$email = _this.state.email,
          reciver = _this$state$email.reciver,
          sender = _this$state$email.sender,
          topic = _this$state$email.topic,
          text = _this$state$email.text;
      _lib_api_service__WEBPACK_IMPORTED_MODULE_8__["default"].sendEmail({
        reciver: reciver,
        sender: sender,
        topic: topic,
        text: text
      }, id).catch(function (err) {
        return console.error(err);
      });
    };

    return _this;
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Email, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Receiver", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        name: "reciver",
        value: this.state.email.reciver,
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Sender", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        name: "sender",
        value: this.state.email.sender,
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Topic", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        name: "topic",
        value: this.state.email.topic,
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Text", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        name: "text",
        value: this.state.email.text,
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.handleOnSubmit,
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Send")));
    }
  }]);

  return Email;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Email);

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/AuthProvider */ "./src/providers/AuthProvider.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/components/Navbar.js";





var Navbar =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderIsLoggedIn = function () {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/auth/myProfile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "username: ", _this.props.user.username)), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        onClick: _this.props.logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Logout"));
    };

    _this.renderIsNotLoggedIn = function () {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, "Login"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        to: "/signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Signup"));
    };

    return _this;
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.props.isLogged ? this.renderIsLoggedIn() : this.renderIsNotLoggedIn());
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_7__["withAuth"])(Navbar));

/***/ }),

/***/ "./src/components/PrivateRoute.js":
/*!****************************************!*\
  !*** ./src/components/PrivateRoute.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/AuthProvider */ "./src/providers/AuthProvider.js");

var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/components/PrivateRoute.js";




var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      isLogged = _ref.isLogged,
      rest = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component", "isLogged"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, isLogged ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: {
          pathname: "/login",
          state: {
            from: props.location
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_3__["withAuth"])(PrivateRoute));

/***/ }),

/***/ "./src/components/TrainerCard.js":
/*!***************************************!*\
  !*** ./src/components/TrainerCard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/components/TrainerCard.js";




var TrainerCard =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TrainerCard, _Component);

  function TrainerCard() {
    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TrainerCard);

    return Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TrainerCard).apply(this, arguments));
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TrainerCard, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "trainercard",
        to: "/trainers/".concat(this.props.trainer._id),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "img-train-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.props.trainer.photoUrl,
        alt: "d",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "name-trainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.props.trainer.username), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        className: "price-trainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, this.props.trainer.preferences.price))));
    }
  }]);

  return TrainerCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TrainerCard);

/***/ }),

/***/ "./src/components/TrainersList.js":
/*!****************************************!*\
  !*** ./src/components/TrainersList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/api-service */ "./src/lib/api-service.js");
/* harmony import */ var _components_TrainerCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TrainerCard */ "./src/components/TrainerCard.js");





var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/components/TrainersList.js";




var TrainersList =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TrainersList, _Component);

  function TrainersList() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TrainersList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TrainersList)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      trainers: [],
      error: false,
      isLoading: true
    };
    return _this;
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TrainersList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      console.log('loll');
      _lib_api_service__WEBPACK_IMPORTED_MODULE_6__["default"].getMatchTrainers().then(function (trainers) {
        console.log('trainers', trainers);

        _this2.setState({
          trainers: trainers,
          isLoading: false
        });
      }).catch(function (error) {
        _this2.setState({
          error: error
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("errrror");
    }
  }, {
    key: "render",
    value: function render() {
      var trainers = this.state.trainers;

      if (this.state.isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "Loading...");
      }

      if (trainers.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, "there is no trainers");
      }

      if (this.state.error) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "error on the connection");
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, trainers.map(function (trainer) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TrainerCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: trainer._id,
          trainer: trainer,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        });
      }));
    }
  }]);

  return TrainersList;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TrainersList);

/***/ }),

/***/ "./src/components/UserProfile.js":
/*!***************************************!*\
  !*** ./src/components/UserProfile.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/AuthProvider */ "./src/providers/AuthProvider.js");
/* harmony import */ var _lib_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/auth-service */ "./src/lib/auth-service.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/components/UserProfile.js";





var UserProfile =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UserProfile, _Component);

  function UserProfile() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserProfile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UserProfile)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      user: {},
      isLoading: true
    };

    _this.componentDidMount = function () {
      _lib_auth_service__WEBPACK_IMPORTED_MODULE_7__["default"].myProfile().then(function (user) {
        _this.setState({
          user: user,
          isLoading: false
        });
      });
    };

    return _this;
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserProfile, [{
    key: "render",
    value: function render() {
      if (this.state.isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, "loading...");
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, "My preferences"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, "My goal: ", this.props.user.preferences.goals), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, "Prefered gender: ", this.props.user.preferences.gender), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, "My age: ", this.props.user.preferences.age), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "My city: ", this.props.user.preferences.city), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, "How active I am: ", this.props.user.preferences.active), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, this.state.user.savedtrainers.map(function (trainer) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
            to: "/trainers/".concat(trainer._id),
            key: "id=".concat(trainer._id),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            className: "user-trainer-list",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "train",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            src: trainer.photoUrl,
            alt: "d",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
            className: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, trainer.username)));
        })));
      }
    }
  }]);

  return UserProfile;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_6__["withAuth"])(UserProfile));

/***/ }),

/***/ "./src/components/Video.js":
/*!*********************************!*\
  !*** ./src/components/Video.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/components/Video.js";


var Video =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Video, _Component);

  function Video() {
    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Video);

    return Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Video).apply(this, arguments));
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Video, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, this.props.trainer.videoUrl.map(function (video) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: "id=".concat(video),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("iframe", {
          width: "560",
          title: "video",
          height: "315",
          src: video,
          frameBorder: "0",
          allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        }, " "));
      }));
    }
  }]);

  return Video;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var milligram_dist_milligram_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! milligram/dist/milligram.css */ "./node_modules/milligram/dist/milligram.css");
/* harmony import */ var milligram_dist_milligram_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(milligram_dist_milligram_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), document.getElementById('root'));

/***/ }),

/***/ "./src/lib/api-service.js":
/*!********************************!*\
  !*** ./src/lib/api-service.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




var Trainers =
/*#__PURE__*/
function () {
  function Trainers() {
    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Trainers);

    this.apiInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
      baseURL: "".concat("http://localhost:5000", "/api"),
      withCredentials: true
    });
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Trainers, [{
    key: "getMatchTrainers",
    value: function getMatchTrainers() {
      return this.apiInstance.get('/trainers').then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "getDetailTrainer",
    value: function getDetailTrainer(id) {
      return this.apiInstance.get("/trainers/".concat(id)).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "setPreferences",
    value: function setPreferences(data) {
      return this.apiInstance.put('/preferences', data).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "followTrainer",
    value: function followTrainer(id) {
      return this.apiInstance.post("/trainers/".concat(id, "/follow")).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "sendEmail",
    value: function sendEmail(email, id) {
      var reciver = email.reciver,
          sender = email.sender,
          topic = email.topic,
          text = email.text;
      return this.apiInstance.post("/trainers/".concat(id, "/email"), {
        reciver: reciver,
        sender: sender,
        topic: topic,
        text: text
      }).then(function (response) {
        return response.data;
      });
    }
  }]);

  return Trainers;
}();

var trainersService = new Trainers();
/* harmony default export */ __webpack_exports__["default"] = (trainersService);

/***/ }),

/***/ "./src/lib/auth-service.js":
/*!*********************************!*\
  !*** ./src/lib/auth-service.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Auth);

    this.auth = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
      baseURL: "".concat("http://localhost:5000"),
      withCredentials: true
    });
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Auth, [{
    key: "signup",
    value: function signup(user) {
      var username = user.username,
          password = user.password;
      return this.auth.post('/auth/signup', {
        username: username,
        password: password
      }).then(function (_ref) {
        var data = _ref.data;
        return data;
      });
    }
  }, {
    key: "login",
    value: function login(user) {
      var username = user.username,
          password = user.password;
      return this.auth.post('/auth/login', {
        username: username,
        password: password
      }).then(function (_ref2) {
        var data = _ref2.data;
        return data;
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      return this.auth.post('/auth/logout', {}).then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "me",
    value: function me() {
      return this.auth.get('/auth/me').then(function (response) {
        return response.data;
      });
    }
  }, {
    key: "myProfile",
    value: function myProfile() {
      return this.auth.get('/auth/myProfile').then(function (response) {
        return response.data;
      });
    }
  }]);

  return Auth;
}();

var auth = new Auth();
/* harmony default export */ __webpack_exports__["default"] = (auth);

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/AuthProvider */ "./src/providers/AuthProvider.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");





var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/pages/Home.js";




var Home =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  function Home() {
    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    return Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home).apply(this, arguments));
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "Welcome ", this.props.user.username), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/trainers/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "trainers")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/preferences/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "preferences")));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_6__["withAuth"])(Home));

/***/ }),

/***/ "./src/pages/Login.js":
/*!****************************!*\
  !*** ./src/pages/Login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/auth-service */ "./src/lib/auth-service.js");
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/AuthProvider */ "./src/providers/AuthProvider.js");






var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/pages/Login.js";




var Login =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      username: "",
      password: ""
    };

    _this.handleFormSubmit = function (event) {
      event.preventDefault();
      var _this$state = _this.state,
          username = _this$state.username,
          password = _this$state.password;
      _lib_auth_service__WEBPACK_IMPORTED_MODULE_7__["default"].login({
        username: username,
        password: password
      }).then(function (user) {
        _this.props.setUser(user);
      }).catch(function (error) {
        return console.log(error);
      });
    };

    _this.handleChange = function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      _this.setState(Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
    };

    return _this;
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          username = _this$state2.username,
          password = _this$state2.password;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.handleFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Username:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "username",
        value: username,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Password:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "password",
        name: "password",
        value: password,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "submit",
        value: "Login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_8__["withAuth"])(Login));

/***/ }),

/***/ "./src/pages/PreferencesPage.js":
/*!**************************************!*\
  !*** ./src/pages/PreferencesPage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/api-service */ "./src/lib/api-service.js");
/* harmony import */ var _lib_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/auth-service */ "./src/lib/auth-service.js");
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/AuthProvider */ "./src/providers/AuthProvider.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/pages/PreferencesPage.js";






var PreferencesPage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PreferencesPage, _Component);

  function PreferencesPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PreferencesPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(PreferencesPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      user: {
        goals: '',
        gender: '',
        styles: '',
        active: '',
        city: '',
        age: ''
      },
      isLoading: true,
      firstPage: true,
      secondPage: false,
      thirdPage: false
    };

    _this.handleOnChange = function (e) {
      _this.setState({
        user: Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this.state.user, Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value))
      });

      console.log(_this.state.user);
    };

    _this.handleOnClick = function () {
      _this.setState({
        secondPage: true,
        firstPage: false
      });
    };

    _this.handleOnClick2 = function () {
      if (_this.state.firstPage === false && _this.state.secondPage === true) {
        _this.setState({
          thirdPage: true,
          secondPage: false
        });
      }
    };

    _this.handleOnSubmit = function (e) {
      e.preventDefault();
      var user = _this.state.user;
      _lib_api_service__WEBPACK_IMPORTED_MODULE_8__["default"].setPreferences(user).then(function (user) {
        _this.props.setUser(user);

        _this.props.history.push("/trainers");
      });
    };

    return _this;
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PreferencesPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _lib_auth_service__WEBPACK_IMPORTED_MODULE_9__["default"].me().then(function (user) {
        var _user$preferences = user.preferences,
            goals = _user$preferences.goals,
            gender = _user$preferences.gender,
            styles = _user$preferences.styles,
            active = _user$preferences.active,
            city = _user$preferences.city,
            age = _user$preferences.age;

        _this2.setState({
          user: {
            goals: goals,
            gender: gender,
            styles: styles,
            active: active,
            city: city,
            age: age
          },
          isLoading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.user.goals);
      var city = this.state.user.city;

      if (this.state.isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, "Loading ...");
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.handleOnSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Let's find yout trainer!"), this.state.firstPage ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, "What Are Your Fitness Goals?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Lose weight", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "",
        type: "radio",
        id: "check",
        name: "goals",
        value: "Lose weight",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "Get stronger", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "",
        type: "radio",
        id: "check",
        name: "goals",
        value: "Get stronger",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "Be healthier and feel better", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "",
        type: "radio",
        id: "check",
        name: "goals",
        value: "Be healthier and feel better",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, "Recover and Rehab", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "",
        type: "radio",
        id: "check",
        name: "goals",
        value: "Recover and Rehab",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "How Active Are You Now?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "I Never Work Out", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "check",
        name: "active",
        value: "I Never Work Out",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "It's Been a While", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "check",
        name: "active",
        value: "It's Been a While",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, "A Few Times a Week", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "check",
        name: "active",
        value: "A Few Times a Week",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Fitness is Part of My Daily Life", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "check",
        name: "active",
        value: "Fitness is Part of My Daily Life",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "next")) : null, this.state.secondPage ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Your city"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        value: city,
        name: "city",
        onChange: this.handleOnChange,
        placeholder: "city",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, "Your age?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "19 or younger", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "check",
        name: "age",
        value: "19 or younger",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "20-29", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "check",
        name: "age",
        value: "20-29",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "30-39", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "check",
        name: "age",
        value: "30-39",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, "40-49", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "check",
        name: "age",
        value: "40-49",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "50-59", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "check",
        name: "age",
        value: "50-59",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "60+", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "check",
        name: "age",
        value: "60+",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.handleOnClick2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "next")) : null, this.state.thirdPage ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "What Are Your Trainer Preferences?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Trainer Style"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "check1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "A Drill Sergeant", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "check1",
        value: "A Drill Sergeant",
        name: "styles",
        onChange: this.handleOnChange,
        placeholder: "styles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "check2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, "A Supportive, Nurturing Coach", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "check2",
        value: "A Supportive, Nurturing Coach",
        name: "styles",
        onChange: this.handleOnChange,
        placeholder: "styles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        for: "check2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "An Educator or Teacher", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "checkbox",
        id: "check2",
        value: "An Educator or Teacher",
        name: "styles",
        onChange: this.handleOnChange,
        placeholder: "styles",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, "Trainer Gender"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "Female", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "check",
        name: "gender",
        value: "Female",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Male", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "check",
        name: "gender",
        value: "Male",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, "Doesnt matter", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "radio",
        id: "check",
        name: "gender",
        value: "Doesnt matter",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }))) : null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "Submit")));
    }
  }]);

  return PreferencesPage;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_10__["withAuth"])(PreferencesPage));

/***/ }),

/***/ "./src/pages/Signup.js":
/*!*****************************!*\
  !*** ./src/pages/Signup.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _lib_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/auth-service */ "./src/lib/auth-service.js");
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/AuthProvider */ "./src/providers/AuthProvider.js");






var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/pages/Signup.js";





var Signup =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Signup, _Component);

  function Signup() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Signup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Signup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      username: "",
      password: ""
    };

    _this.handleFormSubmit = function (event) {
      event.preventDefault();
      var username = _this.state.username;
      var password = _this.state.password;
      _lib_auth_service__WEBPACK_IMPORTED_MODULE_8__["default"].signup({
        username: username,
        password: password
      }).then(function (user) {
        _this.setState({
          username: "",
          password: ""
        });

        _this.props.setUser(user);
      }).catch(function (error) {
        return console.log(error);
      });
    };

    _this.handleChange = function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      _this.setState(Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value));
    };

    return _this;
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Signup, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          username = _this$state.username,
          password = _this$state.password;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.handleFormSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Username:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        name: "username",
        value: username,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Password:"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "password",
        name: "password",
        value: password,
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "submit",
        value: "Signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Already have account?", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
        to: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, " Login")));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_9__["withAuth"])(Signup));

/***/ }),

/***/ "./src/pages/TrainerProfile.js":
/*!*************************************!*\
  !*** ./src/pages/TrainerProfile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/api-service */ "./src/lib/api-service.js");
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/AuthProvider */ "./src/providers/AuthProvider.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Video */ "./src/components/Video.js");
/* harmony import */ var _components_Email__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Email */ "./src/components/Email.js");





var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/pages/TrainerProfile.js";







var TrainerProfile =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TrainerProfile, _Component);

  function TrainerProfile() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TrainerProfile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TrainerProfile)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      trainer: {},
      isLoading: true,
      message: '',
      firstPage: true,
      secondPage: false
    };

    _this.handleOnSubmit = function (e) {
      e.preventDefault();
      var id = _this.props.match.params.id;
      _lib_api_service__WEBPACK_IMPORTED_MODULE_6__["default"].followTrainer(id).then(function (result) {
        _this.setState({
          title: result.message
        });

        _this.props.history.push("/trainers/".concat(id));
      });
    };

    _this.handleOnClick = function () {
      _this.setState({
        secondPage: true,
        firstPage: false
      });
    };

    _this.handleOnClick2 = function () {
      _this.setState({
        secondPage: false,
        firstPage: true
      });
    };

    return _this;
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TrainerProfile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var id = this.props.match.params.id;
      _lib_api_service__WEBPACK_IMPORTED_MODULE_6__["default"].getDetailTrainer(id).then(function (result) {
        _this2.setState({
          trainer: result.trainer,
          isLoading: false,
          title: result.message
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, "Loading.....");
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, this.state.firstPage ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: this.state.trainer.photoUrl,
        alt: "d",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, this.state.trainer.username), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Ask me: ", this.state.trainer.email), this.state.trainer.videoUrl.length === 0 ? null : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: this.handleOnClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Videos"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, this.state.trainer.desciption), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Email__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Specialities"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, this.state.trainer.preferences.goals.map(function (goal) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          key: "id=".concat(goal),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, goal);
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        to: "/trainers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, "back")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        onSubmit: this.handleOnSubmit,
        method: "POST",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, " ", this.state.title, " "))) : null, this.state.secondPage ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, this.state.trainer.videoUrl.length === 0 ? null : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Video__WEBPACK_IMPORTED_MODULE_9__["default"], {
        trainer: this.state.trainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        onClick: this.handleOnClick2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Back")) : null);
    }
  }]);

  return TrainerProfile;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_7__["withAuth"])(TrainerProfile));

/***/ }),

/***/ "./src/pages/Trainers.js":
/*!*******************************!*\
  !*** ./src/pages/Trainers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/AuthProvider */ "./src/providers/AuthProvider.js");
/* harmony import */ var _components_TrainersList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TrainersList */ "./src/components/TrainersList.js");





var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/pages/Trainers.js";




var Trainers =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Trainers, _Component);

  function Trainers() {
    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Trainers);

    return Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Trainers).apply(this, arguments));
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Trainers, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Your trainers"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TrainersList__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }));
    }
  }]);

  return Trainers;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_6__["withAuth"])(Trainers));

/***/ }),

/***/ "./src/pages/UserProfilePage.js":
/*!**************************************!*\
  !*** ./src/pages/UserProfilePage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_AuthProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/AuthProvider */ "./src/providers/AuthProvider.js");
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserProfile */ "./src/components/UserProfile.js");





var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/pages/UserProfilePage.js";




var UserProfilePage =
/*#__PURE__*/
function (_Component) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(UserProfilePage, _Component);

  function UserProfilePage() {
    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, UserProfilePage);

    return Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(UserProfilePage).apply(this, arguments));
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(UserProfilePage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "My name: ", this.props.user.username), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_UserProfile__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }));
    }
  }]);

  return UserProfilePage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_AuthProvider__WEBPACK_IMPORTED_MODULE_6__["withAuth"])(UserProfilePage));

/***/ }),

/***/ "./src/providers/AuthProvider.js":
/*!***************************************!*\
  !*** ./src/providers/AuthProvider.js ***!
  \***************************************/
/*! exports provided: Provider, Consumer, withAuth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuth", function() { return withAuth; });
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/auth-service */ "./src/lib/auth-service.js");





var _jsxFileName = "/Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/providers/AuthProvider.js";


var AuthContext = react__WEBPACK_IMPORTED_MODULE_5___default.a.createContext();
var Provider = AuthContext.Provider,
    Consumer = AuthContext.Consumer;

var withAuth = function withAuth(Comp) {
  return (
    /*#__PURE__*/
    function (_Component) {
      Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WithAuth, _Component);

      function WithAuth() {
        Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WithAuth);

        return Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WithAuth).apply(this, arguments));
      }

      Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WithAuth, [{
        key: "render",
        value: function render() {
          var _this = this;

          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Consumer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          }, function (authStore) {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Comp, Object.assign({
              isLogged: authStore.isLogged,
              user: authStore.user,
              logout: authStore.logout,
              setUser: authStore.setUser
            }, _this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            }));
          });
        }
      }]);

      return WithAuth;
    }(react__WEBPACK_IMPORTED_MODULE_5__["Component"])
  );
};

var AuthProvider =
/*#__PURE__*/
function (_Component2) {
  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AuthProvider, _Component2);

  function AuthProvider() {
    var _getPrototypeOf2;

    var _this2;

    Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AuthProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AuthProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this2.state = {
      user: null,
      isLogged: false,
      isLoading: true
    };

    _this2.handleSetUser = function (user) {
      _this2.setState({
        user: user,
        isLogged: true
      });
    };

    _this2.logoutUser = function () {
      _lib_auth_service__WEBPACK_IMPORTED_MODULE_6__["default"].logout().then(function () {
        _this2.setState({
          isLogged: false,
          user: null
        });
      }).catch(function (error) {
        return console.log(error);
      });
    };

    return _this2;
  }

  Object(_Users_kamilapurymska_ironhack_module_3_MFit_frontend_api_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AuthProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      _lib_auth_service__WEBPACK_IMPORTED_MODULE_6__["default"].me().then(function (user) {
        console.log(user);

        _this3.setState({
          user: user,
          isLogged: true,
          isLoading: false
        });
      }).catch(function (error) {
        _this3.setState({
          user: null,
          isLogged: false,
          isLoading: false
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "Loading....");
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Provider, {
        value: {
          user: this.state.user,
          isLogged: this.state.isLogged,
          setUser: this.handleSetUser,
          logout: this.logoutUser
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return AuthProvider;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AuthProvider);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/kamilapurymska/ironhack/module-3/MFit/frontend-api/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map