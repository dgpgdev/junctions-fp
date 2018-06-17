'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Récupère le dernier item d'une liste
 * @memberOf List
 * @function getLast
 * @param {array} array la liste des items a testé
 * @returns {array} le dernier item
 * @instance
 * @example {@lang javascript}const items = [
{ name: 'dragon', attack: 10 },
{ name: 'troll', attack: 5 },
{ name: 'gobelin', attack: 1 }
]
console.log(getLast(items))
// return { name: 'gobelin', attack: 1 }
 */
var getLast = (0, _curry2.default)(function () {
  for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }

  if (arguments.length > 1) {
    return Array.from(arguments).map(function (a) {
      return a[a.length - 1];
    });
  }
  var a = arr[0];
  return a[a.length - 1];
});
exports.default = getLast;