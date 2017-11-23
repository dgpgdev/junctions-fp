'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function isInt
* @func
* @memberOf Junction
*/
var isInt = (0, _curry2.default)(function (value) {
  return Number.isInteger(value);
});
exports.default = isInt;