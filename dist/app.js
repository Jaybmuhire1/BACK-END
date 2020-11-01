"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _blogRoute = _interopRequireDefault(require("./routes/blogRoute"));

var _messageRoute = _interopRequireDefault(require("./routes/messageRoute"));

var _userRoute = _interopRequireDefault(require("./routes/userRoute"));

var _commentRoute = _interopRequireDefault(require("./routes/commentRoute"));

var app = (0, _express["default"])();

_dotenv["default"].config();

app.use(_express["default"].json());
app.use(_bodyParser["default"].json());
app.use('/blogs', _blogRoute["default"]);
app.use('/messages', _messageRoute["default"]);
app.use('/users', _userRoute["default"]);
app.use('/comments', _commentRoute["default"]);
app.use('/', function (req, res) {
  res.status(200).json({
    message: 'Welcome to your app'
  });
});

_mongoose["default"].connect('mongodb://localhost:127.0.0.1/Jay-brandDB', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}, function () {
  return console.log("mongoDB connected!");
});

var _default = app;
exports["default"] = _default;