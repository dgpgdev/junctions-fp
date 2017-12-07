'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * modulo first number by second
 * @memberOf Math
 * @func
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number} return modulo result
 * @example {@lang javascript} const result = modulo(7,2) //return 1
 */
var modulo = (0, _curry2.default)(function (x, y) {
  return x % y;
});
exports.default = modulo;