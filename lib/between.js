'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test si une valeur est comprise entre deux valeurs. Elle peut etre egale a une des deux valeur si le parametre strict est a false.
 * @memberOf Relation
 * @function between
 * @param {number} min la valeur minimal
 * @param {number} max la valeur maximal
 * @param {number} value la valeur à tester
 * @default
 * @param {boolean} strict definit si la valeur peut etre égale ou non a une des deux valeurs.
 * @returns {boolean} le résultat de l'addition
 * @instance
 * @example {@lang javascript}const result = between(5, 10, 8) //return true
 * const result = between(5, 10, 10) //return true
 * const result = between(5, 10, 11) //return false
 * const result = between(5, 10, 10, true) //return false
 * const result = between(5, 10, 9, true) //return true
 */
var between = (0, _curry2.default)(function (min, max, value) {
  var strict = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return strict ? min < value && max > value : min <= value && max >= value;
});
exports.default = between;