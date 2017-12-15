"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Transforme un tableau 1D en tableau 2D.
 * @memberOf List
 * @function transform2D
 * @param {integer} size la taille des sous tableau.
 * Si la taille des sous tableau choisi est plus grande que le tableau d'origine,
 *  alors renvoit un tableau vide. Si array.length % size n'est pas égale a zero,
 * la fonction ne retournera que les valeurs qui sont dans la fourchette de size
 * @param {array} array le tableau a transformer
 * @returns {array} un tableau 2D
 * @instance
 * @example {@lang javascript}const items = [1, 2, 3, 4, 5, 6]
console.log(transform2D(7, items)) // return []
console.log(transform2D(4, items)) // return [ [ 1, 2, 3, 4 ] ]
console.log(transform2D(3, items)) // return [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
 */
var transform2D = function transform2D(size, array) {
  return array.reduce(function (acc, current, index, a) {
    if ((index + 1) % size === 0) {
      var rest = a.slice(index - (size - 1), index + 1);
      return [].concat(_toConsumableArray(acc), [rest]);
    }
    return acc;
  }, []);
};
exports.default = transform2D;