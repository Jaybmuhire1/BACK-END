"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _messageController = require("../controllers/messageController");

var contactRouter = _express["default"].Router();

contactRouter.post('/', _messageController.createContact);
contactRouter.get('/:_id', _messageController.readOneContact);
contactRouter.get('/getmessages', _messageController.readAllContacts);
contactRouter["delete"](':_id', _messageController.deleteContact);
var _default = contactRouter;
exports["default"] = _default;