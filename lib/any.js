'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test si un item ou plus remplit les condition passé
 * @memberOf List
 * @function any
 * @param {function} x la condition du test
 * @param {array} y la liste des items a testé
 * @returns {boolean}
 * @instance
 * @example {@lang javascript}const x = item => item > 42
 *const y = [43, 45, 46]
 *const z = [43, 45, 41]
 *console.log(any(x, y)) // return true
 *console.log(any(x, z)) // return true
 */
var any = (0, _curry2.default)(function (filter, array) {
  return array.some(filter);
});
exports.default = any;