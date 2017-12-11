'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * multiply first number by second
 * @memberOf Math
 * @func
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number} result
 * @instance
 * @example {@lang javascript}const result = multiply(4,2) //return 8
 * const result = multiply(4)(2) //return 8
 * const y = multiply(4)
 * const result = y(2)//return 8
 */
var multiply = (0, _curry2.default)(function (x, y) {
  return x * y;
});

exports.default = multiply;