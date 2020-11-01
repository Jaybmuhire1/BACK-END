"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app.js"));

var PORT = process.env.PORT || 7000;

_app["default"].listen(PORT, function () {
  return console.log("App running on port ".concat(PORT));
});