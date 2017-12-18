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
 * deplace l'item definit en dernier dans la liste
 * @memberOf List
 * @function swap
 * @param {array} array la liste des items a testé
 * @returns {array} un nouveau tableau
 * @instance
 * @example {@lang javascript}const items = [1, 2, 3, 4, 5, 6]
const creatures = [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}]
swap(3, 6, items)) // return [1, 2, 6, 4, 5, 3]
swap({name: 'troll', attack: 5}, {name: 'dragon', attack: 10}, y))
// return [
{name: 'troll', attack: 5},
{name: 'dragon', attack: 10},
{name: 'gobelin', attack: 1}
]
*/
var swap = (0, _curry2.default)(function (a, b, arr) {
  var aIndex = arr.findIndex((0, _equal2.default)(a));
  var bIndex = arr.findIndex((0, _equal2.default)(b));
  var newArr = arr.splice(0);
  newArr[aIndex] = b;
  newArr[bIndex] = a;
  return newArr;
});
exports.default = swap;