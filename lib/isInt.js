'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * test la valeur est un Integer
 * @memberOf Relation
 * @function isInt
 * @param {any} value la valeur a testé
 * @returns {boolean} true si la valeur est un entier
 * @instance
 * @example {@lang javascript}const result = isInt(42) //return true
 */
var isInt = (0, _curry2.default)(function (value) {
  return Number.isInteger(value);
});
exports.default = isInt;