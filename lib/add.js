'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * function add
 * @memberOf Math
 * @function add
 * @param {number} x le premier nombre
 * @param {number} y le second nombre
 * @returns {number} le résultat de l'addition
 * @instance
 * @example {@lang javascript}const result = add(10,2) //return 12
 * const result = add(10)(2) //return 12
 * const y = add(10)
 * const result = y(2)//return 12
 */
var add = (0, _curry2.default)(function (x, y) {
  return x + y;
});
exports.default = add;