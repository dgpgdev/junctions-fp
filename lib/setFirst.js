'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _equal = require('./equal');

var _equal2 = _interopRequireDefault(_equal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * deplace l'item definit en premier dans la liste
 * @memberOf List
 * @function setFirst
 * @param {array} array la liste des items a testé
 * @returns {array} un nouveau tableau
 * @instance
 * @example {@lang javascript}const x = [1, 2, 3, 4, 5]
const y = [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}]
console.log(setFirst(4)(x)) // return [4, 1, 2, 3, 5])
console.log(setFirst(1, x)) // return [1, 2, 3, 4, 5])
console.log(setFirst(5, x)) // return [5, 1, 2, 3, 4])

console.log(setFirst({name: 'troll', attack: 5}, y)) // return [{name: 'troll', attack: 5}, {name: 'dragon', attack: 10}, {name: 'gobelin', attack: 1}])
console.log(setFirst({name: 'dragon', attack: 10}, y)) // return [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}])
console.log(setFirst({name: 'gobelin', attack: 1}, y)) // return [{name: 'gobelin', attack: 1}, {name: 'dragon', attack: 10}, {name: 'troll', attack: 5}])
 */
var setFirst = (0, _curry2.default)(function (value, arr) {
  var index = arr.findIndex((0, _equal2.default)(value));
  if (index === 0) {
    return arr.slice();
  }
  var a = arr.slice(0, index);
  var b = [];
  if (index + 1 < arr.length) {
    b = arr.slice(index + 1);
  }
  return [arr[index]].concat(_toConsumableArray(a), _toConsumableArray(b));
});
exports.default = setFirst;