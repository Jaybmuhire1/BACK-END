"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var User = _mongoose["default"].model('User', new _mongoose["default"].Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    "default": false
  },
  role: {
    type: String,
    "default": "standard user"
  },
  password: {
    type: String,
    minlength: 6,
    maxlength: 150,
    required: true
  }
}));

var _default = User;
exports["default"] = _default;