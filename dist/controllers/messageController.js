"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteContact = exports.readOneContact = exports.readAllContacts = exports.createContact = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _message = _interopRequireDefault(require("../models/message"));

var createContact = function createContact(req, res, next) {
  _message["default"].create(req.body).then(function (contact) {
    console.log('Message sent ', contact);
    res.statusCode = 200;
    res.json(contact);
  }, function (err) {
    return next(err);
  })["catch"](function (err) {
    return next(err);
  });
}; //  SELECT ALL MESSAGES BY ID


exports.createContact = createContact;

var readAllContacts = function readAllContacts(req, res, next) {
  _message["default"].find({}).then(function (contact) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(contact);
  }, function (err) {
    return next(err);
  })["catch"](function (err) {
    return next(err);
  });
}; //  SELECT ONE CONTACT MESSAGE BY ID


exports.readAllContacts = readAllContacts;

var readOneContact = function readOneContact(req, res, next) {
  var id = req.params.id;

  _message["default"].findById(id).then(function (contact) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(contact);
  }, function (err) {
    return next(err);
  })["catch"](function (err) {
    return next(err);
  });
}; // DELETING A CONTACT


exports.readOneContact = readOneContact;

var deleteContact = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var id, existMessages, deletedContact;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = req.params.id;
            _context.next = 3;
            return _message["default"].find({
              _id: id
            });

          case 3:
            existMessages = _context.sent;

            if (!existMessages.length) {
              _context.next = 18;
              break;
            }

            _context.prev = 5;
            _context.next = 8;
            return _message["default"].deleteOne({
              _id: id
            });

          case 8:
            deletedContact = _context.sent;
            res.status(200).send("Meassage is deleted ".concat(existMessages));
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](5);
            res.status(500).json({
              error: "not deleted"
            });

          case 15:
            ;
            _context.next = 19;
            break;

          case 18:
            res.status(404).json({
              status: 403,
              error: 'Message Id does not exist'
            });

          case 19:
            ;

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[5, 12]]);
  }));

  return function deleteContact(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.deleteContact = deleteContact;