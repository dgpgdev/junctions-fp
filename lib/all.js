'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * function all
 * @memberOf List
 * @function all
 * @param {function} x la condition de test
 * @param {array} y le list des items a testé
 * @returns {boolean} si toute les conditions sont validé
 * @instance
 * @example {@lang javascript}const x = item => item > 42
 *const y = [43, 45, 46]
 *const z = [43, 45, 41]
 *console.log(all(x, y)) // return true
 *console.log(all(x, z)) // return false
 */
var all = (0, _curry2.default)(function (filter, array) {
  return array.every(filter);
});
exports.default = all;