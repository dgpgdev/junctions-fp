'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _containDigit = require('./containDigit');

var _containDigit2 = _interopRequireDefault(_containDigit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function notContainDigit
* @func
* @memberOf Junction
*/
var notContainDigit = (0, _curry2.default)(function (value) {
  return !(0, _containDigit2.default)(value);
});
exports.default = notContainDigit;