'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Filtre les donné d'une liste via une condition
 * @memberOf List
 * @function filter
 * @param {function} fn la fonction de filtrage
 * @param {array} array la liste des items a testé
 * @returns {array} un nouveau tableau
 * @instance
 * @example {@lang javascript}const x = item => item > 45
const y = [43, 45, 46]
console.log((filter(x, y)) // return [43]
 */
var filter = (0, _curry2.default)(function (fn, array) {
  return array.filter(fn);
});
exports.default = filter;