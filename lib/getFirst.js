'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Récupère le premier item d'une liste
 * @memberOf List
 * @function getFirst
 * @param {array} array la liste des items a testé
 * @returns {array} le premier item
 * @instance
 * @example {@lang javascript}const items = [
{ name: 'dragon', attack: 10 },
{ name: 'troll', attack: 5 },
{ name: 'gobelin', attack: 1 }
]
console.log(getFirst(items))
// return { name: 'dragon', attack: 10 }
 */
var getFirst = (0, _curry2.default)(function () {
  for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  if (arguments.length > 1) {
    return Array.from(arguments).map(function (a) {
      return a[0];
    });
  }
  return [].concat(arr)[0][0];
});
exports.default = getFirst;