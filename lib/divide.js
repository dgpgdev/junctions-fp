'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * divide first number by second
 * @memberOf Math
 * @func
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number} result divide result
 * @instance
 * @example {@lang javascript} const result = divide(10,2) //return 5
 * const result = divide(10)(2) //return 5
 * const y = divide(10)
 * const result = y(2)//return 5
 */
var divide = (0, _curry2.default)(function (x, y) {
  return x / y;
});
exports.default = divide;