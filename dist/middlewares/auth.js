"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adminAuth = exports.userAuth = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var userAuth = function userAuth(req, res, next) {
  var token = req.header('auth-token');
  if (!token) return res.status(401).json({
    msg: 'please, sign in first'
  });

  try {
    // const secreteKey = config.SECRETE_KEY;
    var secreteKey = 'muhire';

    var verified = _jsonwebtoken["default"].verify(token, secreteKey);

    req.user = verified;
    return next();
  } catch (err) {
    return res.status(403).json({
      message: 'Invalid token'
    });
  }
};

exports.userAuth = userAuth;

var adminAuth = function adminAuth(req, res, next) {
  var admin = req.user.admin;
  if (!admin) return res.status(401).json({
    msg: 'Access denied, for admins only!'
  });
  return next();
};

exports.adminAuth = adminAuth;