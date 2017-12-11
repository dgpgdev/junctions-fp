'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * function substract
 * @memberOf Math
 * @function add
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number} substract result
 * @instance
 * @example {@lang javascript}const result = substract(10,2) //return 8
 * const result = substract(10)(2) //return 8
 * const y = substract(10)
 * const result = y(2)//return 8
 */
var substract = (0, _curry2.default)(function (x, y) {
  return x - y;
});
exports.default = substract;