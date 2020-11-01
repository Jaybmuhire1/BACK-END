"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var Blog = _mongoose["default"].model('Blog', new _mongoose["default"].Schema({
  title: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true
  },
  content: {
    type: String,
    minlength: 5,
    maxlength: 10000,
    required: true
  },
  publisher: {
    fullName: String
  },
  editedOn: {
    type: Date,
    "default": new Date()
  },
  photo: {
    type: String,
    required: false
  }
}));

var _default = Blog;
exports["default"] = _default;