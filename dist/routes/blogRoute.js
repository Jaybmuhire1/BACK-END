"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _blogController = require("../controllers/blogController");

var _auth = require("../middlewares/auth");

var blogRouter = _express["default"].Router();

blogRouter.get('/getblog/:id', _blogController.readblog);
blogRouter.get('/getblogs', _blogController.readblogs);
blogRouter.post('/createblog', _auth.userAuth, _blogController.createblog);
blogRouter.put('/updateblog/:id', _blogController.updateblog);
blogRouter["delete"]('/deleteblog/:id', [_auth.userAuth, _auth.adminAuth], _blogController.deleteblog);
var _default = blogRouter;
exports["default"] = _default;