'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Test si une liste ou une chaine est vide
 * @memberOf List
 * @function contain
 * @param {array|string} value la valeur a tester
 * @returns {boolean}
 * @instance
 * @example {@lang javascript}const x = [1, 2, 3, 4, 5]
 *console.log(contain(4, x)) // return true
 *console.log(contain(8, x)) // return false
 */
var chunk = (0, _curry2.default)(function (array, chunkSize) {
  return array.reduce(function (previous, current, index, src) {
    if (!(index % chunkSize)) {
      return [].concat(_toConsumableArray(previous), [src.slice(index, index + chunkSize)]);
    }
    return previous;
  }, []);
});

exports.default = chunk;