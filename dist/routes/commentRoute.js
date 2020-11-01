"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _comentController = _interopRequireDefault(require("../controllers/comentController"));

var _auth = require("../middlewares/auth");

var commentRouter = _express["default"].Router();

commentRouter.post('/:_id', _auth.userAuth, _comentController["default"].addComment);
commentRouter.get('/:_id', _comentController["default"].readComment);
var _default = commentRouter;
exports["default"] = _default;