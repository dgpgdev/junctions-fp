'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _equal = require('./equal');

var _equal2 = _interopRequireDefault(_equal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Interverti les items de la liste
 * @memberOf List
 * @function swapIndex
 * @param {any} a le premier item a intervertir
 * @param {any} b le deuxième item a intervertir
 * @param {array} array la liste des items a testé
 * @returns {array} un nouveau tableau
 * @instance
 * @example {@lang javascript}const items = [1, 2, 3, 4, 5, 6]
swap(3, 5, items)) // return [1, 2, 3, 6, 5, 4]
*/
var swapIndex = (0, _curry2.default)(function (aIndex, bIndex, arr) {
  var newArr = arr.splice(0);
  newArr[aIndex] = arr[bIndex];
  newArr[bIndex] = arr[aIndex];
  return newArr;
});
exports.default = swapIndex;