'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * transforme les donnée d'une liste via une condition
 * @memberOf List
 * @function map
 * @param {function} fn la fonction de filtrage
 * @param {array} array la liste des items a testé
 * @instance
 * @returns {array} un nouveau tableau de données transformés
 * @instance
 * @example {@lang javascript}  const x = item => item + 1
const y = [43, 45, 46]
console.log((map(x, y)) // return [44, 46, 47]
 */
var map = (0, _curry2.default)(function (fn, array) {
  return array.map(fn);
});
exports.default = map;