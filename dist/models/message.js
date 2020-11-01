"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Message = _mongoose["default"].model('Contact', new _mongoose["default"].Schema({
  fullname: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 10000,
    required: true
  },
  content: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  createdAt: {
    type: Date,
    "default": new Date()
  }
}));

var _default = Message;
exports["default"] = _default;