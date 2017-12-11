'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _isNumber = require('./isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * test une une valeur est strictement inférieur a une autre
 * @memberOf Relation
 * @function lt
 * @param {any} limit la référence du test d'infériorité
 * @param {any} value la valeur a testé, si la valeur est un tableau ou une chaine, compare la longueur a la valeur de référence
 * @returns {boolean} renvoit true si la valeur est strictement inférieur
 * @instance
 * @example {@lang javascript}const limit = lt(10)
console.log((limit(11)) // return false
console.log((limit(10)) // return false
console.log((limit(9)) // return true
 */
var lt = (0, _curry2.default)(function (limit, value) {
  return (0, _isNumber2.default)(value) ? value < limit : value.length < limit;
});
exports.default = lt;