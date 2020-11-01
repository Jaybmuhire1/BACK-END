"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update_user = exports.delete_user = exports.login_user = exports.singleUser = exports.getAllusers = exports.signup_user = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.js"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _express = require("express");

var _token = require("../helpers/token.js");

var _hashpassword = _interopRequireDefault(require("../config/helper/hashpassword"));

//Register a user
var signup_user = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, fullName, email, password, checkUser, hashpass, newUser, token, savedUser;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, fullName = _req$body.fullName, email = _req$body.email, password = _req$body.password;
            _context.next = 4;
            return _user["default"].findOne({
              email: email
            });

          case 4:
            checkUser = _context.sent;

            if (!checkUser) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              error: 'Email already exist!'
            }));

          case 7:
            _context.next = 9;
            return (0, _hashpassword["default"])(password);

          case 9:
            hashpass = _context.sent;
            newUser = new _user["default"]({
              fullName: fullName,
              email: email,
              password: hashpass
            });
            token = (0, _token.generateToken)(newUser);
            _context.next = 14;
            return newUser.save();

          case 14:
            savedUser = _context.sent;
            return _context.abrupt("return", res.status(201).json({
              msg: 'Account created successfully',
              savedUser: savedUser,
              token: token
            }));

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              error: _context.t0.message
            }));

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 18]]);
  }));

  return function signup_user(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //Get all users


exports.signup_user = signup_user;

var getAllusers = function getAllusers(req, res, next) {
  _user["default"].find({}).then(function (users) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  }, function (err) {
    return next(err);
  })["catch"](function (err) {
    return next(err);
  });
}; // Get a single user by ID


exports.getAllusers = getAllusers;

var singleUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _user["default"].findById(id).then(function (users) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(users);
            });

          case 4:
            _context2.next = 9;
            break;

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(500).json({
              error: _context2.t0.message
            }));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function singleUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // Login


exports.singleUser = singleUser;

var login_user = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, email, password, checkAccount, isValidPass, token;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context3.next = 4;
            return _user["default"].findOne({
              email: email
            });

          case 4:
            checkAccount = _context3.sent;

            if (checkAccount) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              error: 'Invalid email'
            }));

          case 7:
            _context3.next = 9;
            return _bcryptjs["default"].compare(password, checkAccount.password);

          case 9:
            isValidPass = _context3.sent;

            if (isValidPass) {
              _context3.next = 12;
              break;
            }

            return _context3.abrupt("return", res.status(400).json({
              error: 'Invalid password!'
            }));

          case 12:
            _context3.next = 14;
            return (0, _token.generateToken)(checkAccount);

          case 14:
            token = _context3.sent;
            return _context3.abrupt("return", res.status(200).json({
              msg: 'logged in successfully!',
              token: token
            }));

          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", res.status(500).json({
              error: _context3.t0.message
            }));

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 18]]);
  }));

  return function login_user(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //delete a user 


exports.login_user = login_user;

var delete_user = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var id, existUser, deletedUser;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _user["default"].find({
              _id: id
            });

          case 3:
            existUser = _context4.sent;

            if (!existUser.length) {
              _context4.next = 18;
              break;
            }

            _context4.prev = 5;
            _context4.next = 8;
            return _user["default"].deleteOne({
              _id: id
            });

          case 8:
            deletedUser = _context4.sent;
            res.status(200).send("User  deleted ".concat(existUser));
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](5);
            res.status(500).json({
              error: _context4.t0
            });

          case 15:
            ;
            _context4.next = 19;
            break;

          case 18:
            res.status(404).json({
              status: 403,
              error: 'User does not exist'
            });

          case 19:
            ;

          case 20:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[5, 12]]);
  }));

  return function delete_user(_x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}(); //Update user


exports.delete_user = delete_user;

var update_user = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var user, updatedUser;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _user["default"].findByIdAndUpdate({
              _id: req.params.id
            }, req.body);

          case 3:
            user = _context5.sent;
            _context5.next = 6;
            return _user["default"].findOne({
              _id: req.params.id
            });

          case 6:
            updatedUser = _context5.sent;
            res.status(200).send(updatedUser);
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            res.status(400).json("Error: ".concat(error));

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));

  return function update_user(_x10, _x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}();

exports.update_user = update_user;