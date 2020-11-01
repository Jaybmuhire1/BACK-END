"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _signup = require("../controllers/signup");

var _auth = require("../middlewares/auth");

var userRouter = _express["default"].Router();

userRouter.get('/:_id', _auth.userAuth, _signup.singleUser);
userRouter.get('/', _auth.userAuth, _auth.adminAuth, _signup.getAllusers);
userRouter.post('/signup', _signup.signup_user);
userRouter.post('/login', _signup.login_user);
userRouter.put('/:_id', _auth.userAuth, _signup.update_user);
userRouter["delete"]('/:_id', _auth.userAuth, _auth.adminAuth, _signup.delete_user);
var _default = userRouter;
exports["default"] = _default;