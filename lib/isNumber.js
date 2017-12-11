'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _is = require('./is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * test la valeur est un nombre
 * @memberOf Relation
 * @function isNumber
 * @param {any} value value a tester
 * @returns {boolean} true si la valeur est un nombre
 * @instance
 * @example {@lang javascript}const result = isNumber(4.2) //return true
 */
var isNumber = (0, _curry2.default)(function (value) {
  return (0, _is2.default)('number')(value) && !Number.isNaN(value);
});
exports.default = isNumber;