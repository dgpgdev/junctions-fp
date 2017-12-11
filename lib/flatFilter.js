'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _flatMap = require('./flatMap');

var _flatMap2 = _interopRequireDefault(_flatMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * fusionne tout les tableaux en un seul et applique la fonction de filtrage sur chaque element du tableau
 * @memberOf List
 * @function flatFilter
 * @param {function} fn la fonction de filtrage
 * @param {array} array la liste de tableau a convertir
 * @returns {array} un nouveau tableau a une dimension modifié
 * @instance
 * @example {@lang javascript}const x = item => item > 45
const y = [43, 45, 46]
const z = [48, 45, 47]
console.log((flatFilter(x, [y, z])) // return [46, 48, 47]
 */
var flatFilter = (0, _curry2.default)(function (f, array) {
  return (0, _flatMap2.default)(function (x) {
    return x;
  }, array).filter(f);
});
exports.default = flatFilter;