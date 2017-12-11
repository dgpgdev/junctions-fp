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
 * Récupère une liste sans l'item passé en paramètre
 * @memberOf List
 * @function removeItem
 * @param {array} array la liste des items a testé
 * @returns {array} la liste des items sans l'item selectionné
 * @instance
 * @example {@lang javascript}const items = [
{ name: 'dragon', attack: 10 },
{ name: 'troll', attack: 5 },
{ name: 'gobelin', attack: 1 }
]
console.log(removeItem({ name: 'troll', attack: 5 }, items))
// return [
// { name: 'dragon', attack: 10 },
// { name: 'gobelin', attack: 1 }
// ]
 */
var removeItem = (0, _curry2.default)(function (item, array) {
  return array.filter(function (i) {
    return !(0, _equal2.default)(item)(i);
  });
});
exports.default = removeItem;