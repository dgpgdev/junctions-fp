'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _is = require('./is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test si la valeur est bien une chaine
 * @memberOf Relation
 * @function isString
 * @param {any} value la valeur a testé
 * @returns {boolean} true si la valeur est une chaine
 * @instance
 * @example {@lang javascript}const result = isString('gandalf') // return true
 */
var isString = (0, _curry2.default)(function (value) {
  return (0, _is2.default)('string')(value);
});
exports.default = isString;