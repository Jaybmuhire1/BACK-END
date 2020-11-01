"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var generateToken = function generateToken(newUser) {
  var secreteKey = 'muhire';
  var fullName = newUser.fullName,
      email = newUser.email,
      _id = newUser._id,
      admin = newUser.admin;
  return _jsonwebtoken["default"].sign({
    fullName: fullName,
    email: email,
    _id: _id,
    admin: admin
  }, secreteKey, {
    expiresIn: '5d'
  });
};

exports.generateToken = generateToken;