'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * fusionne tout les tableaux en un seul et applique la fonction de modification sur chaque element du tableau
 * @memberOf List
 * @function flatMap
 * @param {function} fn la fonction de modification
 * @param {array} array la liste de tableau a convertir
 * @returns {array} un nouveau tableau a une dimension modifié
 * @instance
 * @example {@lang javascript}const x = item => item + 1
const y = [44, 45, 46]
const z = [47, 48, 49]
console.log((flatMap(x, [y, z])) // return [45, 46, 47, 48, 49, 50]
 */
var flatMap = (0, _curry2.default)(function (fn, array) {
  var _ref;

  return Array.isArray(array) ? (_ref = []).concat.apply(_ref, _toConsumableArray(array.map(function (x) {
    return flatMap(fn, x);
  }))) : fn(array);
});
exports.default = flatMap;