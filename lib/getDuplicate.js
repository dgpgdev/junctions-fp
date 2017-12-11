'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _arguments = arguments;

var _equal = require('./equal');

var _equal2 = _interopRequireDefault(_equal);

var _mergeAll = require('./mergeAll');

var _mergeAll2 = _interopRequireDefault(_mergeAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var duplicate = function duplicate(array) {
  return array.filter(function (a, index, self) {
    return self[index + 1] && self.slice(index + 1).some(function (b) {
      return (0, _equal2.default)(a, b);
    }) ? a : false;
  });
};
/**
 * Récupère une liste d'item dupliqué dans depuis la liste originale
 * @memberOf List
 * @function getDuplicate
 * @param {array} array la liste des items a testé
 * @returns {array} la liste des items dupliqué
 * @instance
 * @example {@lang javascript}const x = [1, 2, 3, 4, 5]
const y = [4, 5, 6, 7, 8]
const z = [7, 8, 9, 10, 11]
console.log(getDuplicate(x, y, z)) // return [4, 5, 7, 8]
console.log(getDuplicate(x, z)) // return[]
 */
var getDuplicate = function getDuplicate() {
  for (var _len = arguments.length, array = Array(_len), _key = 0; _key < _len; _key++) {
    array[_key] = arguments[_key];
  }

  if (_arguments.length > 1) {
    return duplicate((0, _mergeAll2.default)(array));
  }
  return duplicate(_arguments[0]);
};
exports.default = getDuplicate;