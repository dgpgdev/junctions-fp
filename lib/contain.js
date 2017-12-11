'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _equal = require('./equal');

var _equal2 = _interopRequireDefault(_equal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test si une liste ou une chaine est vide
 * @memberOf List
 * @function contain
 * @param {array|string} value la valeur a tester
 * @returns {boolean}
 * @instance
 * @example {@lang javascript}const x = [1, 2, 3, 4, 5]
 *console.log(contain(4, x)) // return true
 *console.log(contain(8, x)) // return false
  */
var contain = (0, _curry2.default)(function (value, array) {
  return Array.isArray(value) ? array.some(function (u) {
    return value.some((0, _equal2.default)(u));
  }) : array.some((0, _equal2.default)(value));
});
exports.default = contain;