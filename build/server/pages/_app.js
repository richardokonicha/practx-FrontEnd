module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6w4r":
/***/ (function(module, exports) {



/***/ }),

/***/ "9s+x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ROOT_USER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ROOT_LOGIN_WATCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ROOT_USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOGOUT_WATCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ROOT_USER_PASSWORD_RESET_REQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return ROOT_USER_PASSWORD_RESET_REQ_WATCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ROOT_PASSWORD_RESET_WATCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return ROOT_USER_PASSWORD_RESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PRACTICE_USER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PRACTICE_LOGIN_WATCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return PRACTICE_USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return PRACTICE_LOGOUT_WATCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return PRACTICE_USER_PASSWORD_RESET_REQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return PRACTICE_USER_PASSWORD_RESET_REQ_WATCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PRACTICE_PASSWORD_RESET_WATCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PRACTICE_USER_PASSWORD_RESET; });
/* unused harmony export PRACTICE_ADD_STAFF */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return PRACTICE_ADD_STAFF_WATCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PRACTICE_ADD_STAFF_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PRACTICE_ADD_STAFF_EMPTY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return USER_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return USER_LOGIN_WATCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return USER_LOGOUT_WATCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return USER_PASSWORD_RESET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return USER_PASSWORD_RESET_REQUEST_WATCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return USER_PASSWORD_RESET_SUCCESSFUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return USER_PASSWORD_RESET_WATCHER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return API_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_ERROR_RESET; });
/* unused harmony export IS_LOADING */
/* unused harmony export LOADED */
/* unused harmony export LOAD_FAILED */
const ROOT_USER_LOGIN = "ROOT_USER_LOGIN";
const ROOT_LOGIN_WATCHER = "ROOT_LOGIN_WATCHER";
const ROOT_USER_LOGOUT = "ROOT_USER_LOGOUT";
const LOGOUT_WATCHER = "LOGOUT_WATCHER";
const ROOT_USER_PASSWORD_RESET_REQ = "ROOT_USER_PASSWORD_RESET_REQ";
const ROOT_USER_PASSWORD_RESET_REQ_WATCHER = "ROOT_USER_PASSWORD_RESET_REQ_WATCHER";
const ROOT_PASSWORD_RESET_WATCHER = "ROOT_PASSWORD_RESET_WATCHER";
const ROOT_USER_PASSWORD_RESET = "ROOT_USER_PASSWORD_RESET";
const PRACTICE_USER_LOGIN = "PRACTICE_USER_LOGIN";
const PRACTICE_LOGIN_WATCHER = "PRACTICE_LOGIN_WATCHER";
const PRACTICE_USER_LOGOUT = "PRACTICE_USER_LOGOUT";
const PRACTICE_LOGOUT_WATCHER = "PRACTICE_LOGOUT_WATCHER";
const PRACTICE_USER_PASSWORD_RESET_REQ = "PRACTICE_USER_PASSWORD_RESET_REQ";
const PRACTICE_USER_PASSWORD_RESET_REQ_WATCHER = "PRACTICE_USER_PASSWORD_RESET_REQ_WATCHER";
const PRACTICE_PASSWORD_RESET_WATCHER = "PRACTICE_PASSWORD_RESET_WATCHER";
const PRACTICE_USER_PASSWORD_RESET = "PRACTICE_USER_PASSWORD_RESET";
const PRACTICE_ADD_STAFF = "PRACTICE_ADD_STAFF";
const PRACTICE_ADD_STAFF_WATCHER = "PRACTICE_ADD_STAFF_WATCHER";
const PRACTICE_ADD_STAFF_SUCCESS = "PRACTICE_ADD_STAFF_SUCCESS";
const PRACTICE_ADD_STAFF_EMPTY = "PRACTICE_ADD_STAFF_EMPTY";
const USER_LOGIN = "USER_LOGIN";
const USER_LOGIN_WATCHER = "USER_LOGIN_WATCHER";
const USER_LOGOUT = "USER_LOGOUT";
const USER_LOGOUT_WATCHER = "USER_LOGOUT_WATCHER";
const USER_PASSWORD_RESET_REQUEST = "USER_PASSWORD_RESET_REQUEST";
const USER_PASSWORD_RESET_REQUEST_WATCHER = "USER_PASSWORD_RESET_REQUEST_WATCHER";
const USER_PASSWORD_RESET_SUCCESSFUL = "USER_PASSWORD_RESET_SUCCESSFUL";
const USER_PASSWORD_RESET_WATCHER = "USER_PASSWORD_RESET_WATCHER";
const API_FAILED = "API_FAILED";
const API_ERROR_RESET = "API_ERROR_RESET";
const IS_LOADING = "IS_LOADING";
const LOADED = "LOADED";
const LOAD_FAILED = "LOAD_FAILED";

/***/ }),

/***/ "Cwtw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return loginRootUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return loginRootUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return logoutUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return logoutSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return forgetPasswordRequestSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return forgetPasswordRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return passwordResetWithKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return passwordResetWithKeySaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return loginPractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return loginPracticeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return logoutPractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return logoutPracticeSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return practiceForgetPasswordRequestSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return practiceForgetPasswordRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return practicePasswordResetWithKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return practicePasswordResetWithKeySaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return practiceAddStaffSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return practiceAddStaffSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addStaffStatusToEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loginUserSaga; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return loginUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return logoutStaffUser; });
/* unused harmony export logoutStaffUserSaga */
/* unused harmony export userForgetPasswordRequestSaga */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return userForgetPasswordRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return userPasswordResetWithKey; });
/* unused harmony export userPasswordResetWithKeySaga */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return apiError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return apiErrorReset; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9s+x");

/*--------------------------LOG IN ROOT USER ------------------------*/

const loginRootUser = (email, password, router) => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* ROOT_LOGIN_WATCHER */ "o"],
    payload: {
      email,
      password,
      router
    }
  };
};
const loginRootUserSuccess = userData => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* ROOT_USER_LOGIN */ "q"],
    payload: userData
  };
};
/*-------------------------- LOG OUT ROOT USER-------------------------------*/

const logoutUser = () => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* ROOT_USER_LOGOUT */ "r"]
  };
};
const logoutSaga = router => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* LOGOUT_WATCHER */ "c"],
    payload: router
  };
};
/* --------------------------- ROOT PASSWORD RESET ---------------------------*/

const forgetPasswordRequestSaga = email => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* ROOT_USER_PASSWORD_RESET_REQ_WATCHER */ "u"],
    payload: {
      email
    }
  };
};
const forgetPasswordRequest = passwordResetStatus => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* ROOT_USER_PASSWORD_RESET_REQ */ "t"],
  payload: passwordResetStatus
});
/*------------- ROOT PASSWORD RESET WITH KEY ACTIONS -----------------*/

const passwordResetWithKey = passwordResetMessage => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* ROOT_USER_PASSWORD_RESET */ "s"],
  payload: passwordResetMessage
});
const passwordResetWithKeySaga = (passwordResetKey, newPassword) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* ROOT_PASSWORD_RESET_WATCHER */ "p"],
  payload: {
    password: newPassword,
    key: passwordResetKey
  }
});
/*--------------------------LOG IN PRACTICE ------------------------*/

const loginPractice = (email, password, router) => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* PRACTICE_LOGIN_WATCHER */ "g"],
    payload: {
      email,
      password,
      router
    }
  };
};
const loginPracticeSuccess = userData => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* PRACTICE_USER_LOGIN */ "j"],
    payload: userData
  };
};
const logoutPractice = () => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* PRACTICE_USER_LOGOUT */ "k"]
  };
};
const logoutPracticeSaga = router => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* PRACTICE_LOGOUT_WATCHER */ "h"],
    payload: router
  };
};
/* --------------------------- PRACTICE PASSWORD RESET ---------------------------*/

const practiceForgetPasswordRequestSaga = email => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* PRACTICE_USER_PASSWORD_RESET_REQ_WATCHER */ "n"],
    payload: {
      email
    }
  };
};
const practiceForgetPasswordRequest = passwordResetStatus => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* PRACTICE_USER_PASSWORD_RESET_REQ */ "m"],
  payload: passwordResetStatus
});
/*------------- PRACTICE PASSWORD RESET WITH KEY ACTIONS -----------------*/

const practicePasswordResetWithKey = passwordResetMessage => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* PRACTICE_USER_PASSWORD_RESET */ "l"],
  payload: passwordResetMessage
});
const practicePasswordResetWithKeySaga = (passwordResetKey, newPassword) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* PRACTICE_PASSWORD_RESET_WATCHER */ "i"],
  payload: {
    password: newPassword,
    key: passwordResetKey
  }
});
/* --------------------------- PRACTICE ADD STAFF ---------------------------*/

const practiceAddStaffSaga = newStaffData => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* PRACTICE_ADD_STAFF_WATCHER */ "f"],
  payload: newStaffData
});
const practiceAddStaffSuccess = () => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* PRACTICE_ADD_STAFF_SUCCESS */ "e"]
  };
};
const addStaffStatusToEmpty = () => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* PRACTICE_ADD_STAFF_EMPTY */ "d"]
  };
};
/*----------------------------- USER / STAFF OR ADMIN USER -----------------------------------------*/

/*--------------------------LOG IN USER ------------------------*/

const loginUserSaga = (email, password, router) => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* USER_LOGIN_WATCHER */ "w"],
    payload: {
      email,
      password,
      router
    }
  };
};
const loginUserSuccess = userData => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* USER_LOGIN */ "v"],
    payload: userData
  };
};
/*--------------------------LOGOUT USER ------------------------*/

const logoutStaffUser = () => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* USER_LOGOUT */ "x"]
  };
};
const logoutStaffUserSaga = router => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* USER_LOGOUT_WATCHER */ "y"],
    payload: router
  };
};
/* --------------------------- USER PASSWORD RESET ---------------------------*/

const userForgetPasswordRequestSaga = email => {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* USER_PASSWORD_RESET_REQUEST_WATCHER */ "A"],
    payload: {
      email
    }
  };
};
const userForgetPasswordRequest = passwordResetStatus => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* USER_PASSWORD_RESET_REQUEST */ "z"],
  payload: passwordResetStatus
});
/*------------- USET PASSWORD RESET WITH KEY ACTIONS -----------------*/

const userPasswordResetWithKey = passwordResetMessage => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* USER_PASSWORD_RESET_SUCCESSFUL */ "B"],
  payload: passwordResetMessage
});
const userPasswordResetWithKeySaga = (passwordResetKey, newPassword) => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* USER_PASSWORD_RESET_WATCHER */ "C"],
  payload: {
    password: newPassword,
    key: passwordResetKey
  }
});
const apiError = () => {
  console.log("Api Action called -----------");
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* API_FAILED */ "b"]
  };
};
const apiErrorReset = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__[/* API_ERROR_RESET */ "a"]
});

/***/ }),

/***/ "DS9K":
/***/ (function(module, exports) {



/***/ }),

/***/ "F/3x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return loginRootUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return passwordReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return passwordResetWithKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getPractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return approvePractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return rejectPractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginPractice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return practicePasswordReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return practicePasswordResetWithKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return practiceAddStaff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loginStaffUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return userPasswordReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return userPasswordResetWithKey; });
/* unused harmony export validateRootToken */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const loginRootUser = async payload => {
  //--------------------------- LOGIN ROOT USER -------------
  const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/auth/root/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password
    })
  });
  const user = await res.json();
  return user;
};
const passwordReset = async email => {
  // ----------------------- PASSWORD RESET REQUEST ----------------
  const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/root/requestpasswordreset", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email
    })
  });
  const passwordResetStatus = await res.json();
  return passwordResetStatus;
};
const passwordResetWithKey = async payload => {
  // ----------------------- PASSWORD RESET ----------------
  const res = await fetch(`http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/root/resetpasword/${payload.key}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: payload.password
    })
  });
  const passwordResetStatus = await res.json();
  return passwordResetStatus;
};
const getPractice = async (url, token) => {
  // ----------------------- PASSWORD RESET ----------------
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      "Authorization": token
    }
  });
  const data = await res.json();
  return data;
};
const approvePractice = async (url, token) => {
  // ----------------------- APPROVE PRACTICE PATCH ----------------
  const res = await fetch(url, {
    method: 'PATCH',
    headers: [['Authorization', token], ["Content-Type", "application/json"]],
    body: {
      approvalStatus: 'approved'
    }
  });
  const data = await res.json();
  return data;
};
const rejectPractice = async (url, token) => {
  // ----------------------- REJECT PRACTICE PATCH ----------------
  const res = await fetch(url, {
    method: 'PATCH',
    headers: [['Authorization', token], ["Content-Type", "application/json"]],
    body: {
      approvalStatus: "rejected"
    }
  });
  const data = await res.json();
  return data;
};
const loginPractice = async payload => {
  //--------------------------- LOGIN PRACTICE -------------
  const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/auth/practices/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password
    })
  });
  const user = await res.json();
  return user;
};
const practicePasswordReset = async email => {
  // ----------------------- PRACTICE PASSWORD RESET REQUEST ----------------
  const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/practices/requestpasswordreset", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email
    })
  });
  const passwordResetStatus = await res.json();
  return passwordResetStatus;
};
const practicePasswordResetWithKey = async payload => {
  // ----------------------- PRACTICE PASSWORD RESET ----------------
  const res = await fetch(`http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/practices/resetpassword/${payload.key}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: payload.password
    })
  });
  const passwordResetStatus = await res.json();
  return passwordResetStatus;
};
const practiceAddStaff = async ({
  email,
  designation,
  token
}) => {
  //----------------------- ADD STAFF ACCOUNT BY PRACTICE ------
  const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/practices/staffs", {
    method: 'POST',
    headers: [['Authorization', token], ["Content-Type", "application/json"]],
    body: JSON.stringify({
      email,
      designation
    })
  });
  const message = await res.json();
  return message;
};
/*------------------------------USER API CALLS --------------------------------------------*/

const loginStaffUser = async payload => {
  //--------------------------- LOGIN USER -------------
  const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/auth/practices/staffs/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: payload.email,
      password: payload.password
    })
  });
  const user = await res.json();
  return user;
};
const userPasswordReset = async email => {
  // ----------------------- USER PASSWORD RESET REQUEST ----------------
  const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/practices/staffs/requestpasswordreset", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email
    })
  });
  const passwordResetStatus = await res.json();
  return passwordResetStatus;
};
const userPasswordResetWithKey = async payload => {
  // ----------------------- USER PASSWORD RESET ----------------
  const res = await fetch(`http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/practices/staffs/resetpassword/${payload.key}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      password: payload.password
    })
  });
  const passwordResetStatus = await res.json();
  return passwordResetStatus;
};
const validateRootToken = async token => {
  //--------------------------VALIDATE TOKEN ---------------------
  const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/root/checktoken", {
    method: 'GET',
    headers: {
      'Authorization': token
    }
  });
  const user = await res.json();
  return user;
};

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./src/styles/scss/themes.scss
var themes = __webpack_require__("DS9K");

// EXTERNAL MODULE: ./src/styles/globals.scss
var globals = __webpack_require__("6w4r");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./src/redux/auth/constants.js
var constants = __webpack_require__("9s+x");

// CONCATENATED MODULE: ./src/redux/auth/authReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  user: {},
  passwordResetStatus: "",
  addStaff: "",
  error: false
};
function authReducer(state = initialState, action) {
  switch (action.type) {
    case constants["q" /* ROOT_USER_LOGIN */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });
      return state;

    case constants["r" /* ROOT_USER_LOGOUT */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        user: {}
      });
      return state;

    case constants["t" /* ROOT_USER_PASSWORD_RESET_REQ */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        passwordResetStatus: action.payload
      });
      return state;

    case constants["s" /* ROOT_USER_PASSWORD_RESET */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        passwordResetStatus: action.payload
      });
      return state;

    case constants["j" /* PRACTICE_USER_LOGIN */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        user: action.payload
      });
      return state;

    case constants["k" /* PRACTICE_USER_LOGOUT */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        user: {}
      });
      return state;

    case constants["m" /* PRACTICE_USER_PASSWORD_RESET_REQ */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        passwordResetStatus: action.payload
      });
      return state;

    case constants["l" /* PRACTICE_USER_PASSWORD_RESET */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        passwordResetStatus: action.payload
      });
      return state;

    case constants["e" /* PRACTICE_ADD_STAFF_SUCCESS */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        addStaff: true
      });
      return state;

    case constants["d" /* PRACTICE_ADD_STAFF_EMPTY */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        addStaff: false
      });
      return state;

    case constants["v" /* USER_LOGIN */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        user: {}
      });
      return state;

    case constants["x" /* USER_LOGOUT */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        user: {}
      });
      return state;

    case constants["z" /* USER_PASSWORD_RESET_REQUEST */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        passwordResetStatus: action.payload
      });
      return state;

    case constants["B" /* USER_PASSWORD_RESET_SUCCESSFUL */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        passwordResetStatus: action.payload
      });
      return state;

    case constants["b" /* API_FAILED */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        error: true
      });
      return state;

    case constants["a" /* API_ERROR_RESET */]:
      state = _objectSpread(_objectSpread({}, state), {}, {
        error: false
      });
      console.log("----------- Error -----------", state.error);
      return state;

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./src/redux/rootReducer.js


/* harmony default export */ var rootReducer = (Object(external_redux_["combineReducers"])({
  auth: authReducer
}));
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./src/redux/Api.js
var Api = __webpack_require__("F/3x");

// EXTERNAL MODULE: ./src/redux/auth/actions.js
var actions = __webpack_require__("Cwtw");

// CONCATENATED MODULE: ./src/redux/auth/sagas.js




/*------------------------LOGIN SAGA --------------------------------*/

function* loginRootUser(action) {
  try {
    const user = yield Object(effects_["call"])(Api["d" /* loginRootUser */], action.payload);

    if (user.message === "Login successful!") {
      yield Object(effects_["put"])(actions["i" /* loginRootUserSuccess */](user));
      yield Object(effects_["call"])(() => {
        action.payload.router.push({
          pathname: "/dashboard/dashboard"
        });
      });
    } else {
      yield Object(effects_["call"])(() => {
        action.payload.router.push({
          pathname: "/"
        });
      });
    }
  } catch (e) {
    console.log(e, "Can not login from saggaggaggag,");
  }
}

function* rootLoginWatcher() {
  /* --------------- LOGIN WATCHER ---------------------------*/
  yield Object(effects_["takeLatest"])(constants["o" /* ROOT_LOGIN_WATCHER */], loginRootUser);
}
/*------------------------LOGOUT SAGA --------------------------------*/


function* logoutUser(action) {
  try {
    yield Object(effects_["put"])(actions["p" /* logoutUser */]());
    yield Object(effects_["call"])(() => action.payload.push("/"));
  } catch (e) {
    console.log("Error Trying to LogOut");
  }
}

function* logoutWatcher() {
  /* --------------- LOGOUT WATCHER ---------------------------*/
  yield Object(effects_["takeLatest"])(constants["c" /* LOGOUT_WATCHER */], logoutUser);
}
/*-------------------------------------------- ROOT PASSWORD RESET ------------------------------------*/


function* passwordReset(action) {
  const {
    message
  } = yield Object(effects_["call"])(Api["f" /* passwordReset */], action.payload.email);

  try {
    yield Object(effects_["put"])(actions["d" /* forgetPasswordRequest */](message));
  } catch (e) {
    console.log("password reset request error", e);
  }
}

function* passwordResetWatcher() {
  /* --------------- PASSWORD RESET REQUEST WATCHER ---------------------------*/
  yield Object(effects_["takeLatest"])(constants["u" /* ROOT_USER_PASSWORD_RESET_REQ_WATCHER */], passwordReset);
}

function* passwordResetWithKey(action) {
  /*-------------------------- MAIN PASSWORD RESET WITH KEY FROM EMAIL -----------------*/
  try {
    const {
      message
    } = yield Object(effects_["call"])(Api["g" /* passwordResetWithKey */], action.payload);

    if (message === "Password changed successfully!") {
      yield Object(effects_["put"])(actions["q" /* passwordResetWithKey */](message));
    } else {
      console.log("message is:::", message);
    }
  } catch (e) {
    console.log("password reset error", e);
  }
}

function* passwordResetWithKeyWatcher() {
  /* --------------- PASSWORD RESET WITH KEY WATCHER ---------------------------*/
  yield Object(effects_["takeLatest"])(constants["p" /* ROOT_PASSWORD_RESET_WATCHER */], passwordResetWithKey);
}
/*------------------------PRACTICE LOGIN SAGA --------------------------------*/


function* loginPractice(action) {
  try {
    const user = yield Object(effects_["call"])(Api["c" /* loginPractice */], action.payload);

    if (user.message === "Login successful!") {
      yield Object(effects_["put"])(actions["g" /* loginPracticeSuccess */](user));
      yield Object(effects_["call"])(() => {
        action.payload.router.push({
          pathname: "/practice/dashboard/dashboard"
        });
      });
    } else {
      yield Object(effects_["call"])(() => {
        action.payload.router.push({
          pathname: "/practice/auth/login"
        });
      });
    }
  } catch (e) {
    console.log(e, "Can not login PRACTICE from saggaggaggag");
  }
}

function* practiceLoginWatcher() {
  /* --------------- PRACTIVE LOGIN WATCHER ---------------------------*/
  yield Object(effects_["takeLatest"])(constants["g" /* PRACTICE_LOGIN_WATCHER */], loginPractice);
}
/*------------------------LOGOUT PRACTICE --------------------------------*/


function* logoutPractice(action) {
  yield Object(effects_["put"])(actions["l" /* logoutPractice */]());
  yield Object(effects_["call"])(() => action.payload.push("/practice/auth/login"));
}

function* logoutPracticeSaga() {
  /* --------------- LOGOUT PRACTICE WATCHER ---------------------------*/
  yield Object(effects_["takeLatest"])(constants["h" /* PRACTICE_LOGOUT_WATCHER */], logoutPractice);
}
/*-------------------------------------------- PRACTICE PASSWORD RESET ------------------------------------*/


function* passwordResetPractice(action) {
  try {
    const {
      message
    } = yield Object(effects_["call"])(Api["i" /* practicePasswordReset */], action.payload.email);

    if (message === "A link to reset your password has been sent to your mail. Please note that the link is only valid for one hour.") {
      yield Object(effects_["put"])(actions["u" /* practiceForgetPasswordRequest */](message));
    }
  } catch (e) {
    console.log("password reset request error", e);
  }
}

function* passwordResetPracticeWatcher() {
  /* --------------- PRACTICE PASSWORD RESET REQUEST WATCHER ---------------------------*/
  yield Object(effects_["takeLatest"])(constants["n" /* PRACTICE_USER_PASSWORD_RESET_REQ_WATCHER */], passwordResetPractice);
}

function* passwordResetPracticeWithKey(action) {
  /*-------------------------- PRACTICE MAIN PASSWORD RESET WITH KEY FROM EMAIL -----------------*/
  try {
    const {
      message
    } = yield Object(effects_["call"])(Api["j" /* practicePasswordResetWithKey */], action.payload);

    if (message === "Password changed successfully!") {
      yield Object(effects_["put"])(actions["w" /* practicePasswordResetWithKey */](message));
    } else {
      console.log("message is:::", message);
    }
  } catch (e) {
    console.log("password reset error", e);
  }
}

function* passwordResetWithKeyPracticeWatcher() {
  /* --------------- PRACTICE PASSWORD RESET WITH KEY WATCHER ---------------------------*/
  yield Object(effects_["takeLatest"])(constants["i" /* PRACTICE_PASSWORD_RESET_WATCHER */], passwordResetPracticeWithKey);
}

function* practiceAddStaff(action) {
  // -------------- PRACTICE ASS STAFF -------
  try {
    const addStaff = yield Object(effects_["call"])(Api["h" /* practiceAddStaff */], action.payload);

    if (addStaff.message === "User has been added successfully, they will get a mail with a link to set up their account.") {
      yield Object(effects_["put"])(actions["t" /* practiceAddStaffSuccess */]());
    } else {
      console.log("Error in saga-----------");
      yield Object(effects_["put"])(actions["b" /* apiError */]());
    }
  } catch (e) {}

  yield Object(effects_["put"])(actions["a" /* addStaffStatusToEmpty */]());
}

function* practiceAddStaffWatcher() {
  yield Object(effects_["takeLatest"])(constants["f" /* PRACTICE_ADD_STAFF_WATCHER */], practiceAddStaff);
}
/*------------------------ USER LOGIN SAGA --------------------------------*/


function* loginStaffUser(action) {
  console.log(action.payload);

  try {
    const user = yield Object(effects_["call"])(Api["e" /* loginStaffUser */], action.payload);

    if (user.message === "Login successful!") {
      yield Object(effects_["put"])(actions["k" /* loginUserSuccess */](user));
      yield Object(effects_["call"])(() => {
        action.payload.router.push({
          pathname: "/user/dashboard/dashboard"
        });
      });
    } else {
      yield Object(effects_["call"])(() => {
        action.payload.router.push({
          pathname: "/user/auth/login"
        });
      });
    }
  } catch (e) {
    console.log(e, "Can not login user from saggaggaggag");
  }
}

function* userLoginWatcher() {
  /* --------------- USER LOGIN WATCHER ---------------------------*/
  yield Object(effects_["takeLatest"])(constants["w" /* USER_LOGIN_WATCHER */], loginStaffUser);
}
/*------------------------LOGOUT USER --------------------------------*/


function* logoutStaffUser(action) {
  yield Object(effects_["put"])(actions["o" /* logoutStaffUser */]());
  yield Object(effects_["call"])(() => action.payload.push("/user/auth/login"));
}

function* logoutUserSaga() {
  /* --------------- LOGOUT USER WATCHER ---------------------------*/
  yield Object(effects_["takeLatest"])(constants["y" /* USER_LOGOUT_WATCHER */], logoutStaffUser);
}
/*-------------------------------------------- USER PASSWORD RESET REQUEST ------------------------------------*/


function* passwordResetUser(action) {
  try {
    const {
      message
    } = yield Object(effects_["call"])(Api["l" /* userPasswordReset */], action.payload.email);

    if (message === "A link to reset your password has been sent to your mail. Please note that the link is only valid for one hour.") {
      yield Object(effects_["put"])(actions["y" /* userForgetPasswordRequest */](message));
    }
  } catch (e) {
    console.log("password reset request error", e);
  }
}

function* passwordResetUserWatcher() {
  yield Object(effects_["takeLatest"])(constants["A" /* USER_PASSWORD_RESET_REQUEST_WATCHER */], passwordResetUser);
}

function* passwordResetUserWithKey(action) {
  try {
    const {
      message
    } = yield Object(effects_["call"])(Api["m" /* userPasswordResetWithKey */], action.payload);

    if (message === "Password changed successfully!") {
      yield Object(effects_["put"])(actions["z" /* userPasswordResetWithKey */](message));
    } else {
      console.log("message is:::", message);
    }
  } catch (e) {
    console.log("password reset error", e);
  }
}

function* passwordResetWithKeyUserWatcher() {
  yield Object(effects_["takeLatest"])(constants["C" /* USER_PASSWORD_RESET_WATCHER */], passwordResetUserWithKey);
}

function* authSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(rootLoginWatcher), Object(effects_["fork"])(logoutWatcher), Object(effects_["fork"])(passwordResetWatcher), Object(effects_["fork"])(passwordResetWithKeyWatcher), Object(effects_["fork"])(practiceLoginWatcher), Object(effects_["fork"])(logoutPracticeSaga), Object(effects_["fork"])(passwordResetPracticeWatcher), Object(effects_["fork"])(passwordResetWithKeyPracticeWatcher), Object(effects_["fork"])(practiceAddStaffWatcher), Object(effects_["fork"])(userLoginWatcher), Object(effects_["fork"])(logoutUserSaga), Object(effects_["fork"])(passwordResetUserWatcher), Object(effects_["fork"])(passwordResetWithKeyUserWatcher)]);
}

/* harmony default export */ var sagas = (authSaga);
// CONCATENATED MODULE: ./src/redux/saga.js


function* rootSaga(getState) {
  yield Object(effects_["all"])([sagas()]);
}
// CONCATENATED MODULE: ./src/redux/store.js





const saga = external_redux_saga_default()();
const store_initialState = {};
const store = Object(external_redux_["createStore"])(rootReducer, store_initialState, Object(external_redux_["applyMiddleware"])(saga));
saga.run(rootSaga);
/* harmony default export */ var redux_store = (store);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: ./node_modules/nprogress/nprogress.css
var nprogress = __webpack_require__("pdi6");

// CONCATENATED MODULE: ./src/pages/_app.js

var __jsx = external_react_default.a.createElement;





 //nprogress module

 //styles of nprogress
//Binding events.

router_default.a.events.on('routeChangeStart', () => external_nprogress_default.a.start());
router_default.a.events.on('routeChangeComplete', () => external_nprogress_default.a.done());
router_default.a.events.on('routeChangeError', () => external_nprogress_default.a.done());

function MyApp({
  Component,
  pageProps
}) {
  return __jsx(external_react_redux_["Provider"], {
    store: redux_store
  }, __jsx(Component, pageProps));
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "pdi6":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });