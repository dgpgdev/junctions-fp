'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var _equal = require('./equal');

var _equal2 = _interopRequireDefault(_equal);

var _size = require('./size');

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Test si une liste ou une chaine est vide
 * @memberOf List
 * @function empty
 * @param {array|string} value la valeur a tester
 * @returns {boolean}
 * @instance
 * @example {@lang javascript}const x = []
 *const y = [1, 2, 3]
 *console.log(empty(x)) // return true
 *console.log(empty(y)) // return false
 */
var empty = (0, _compose2.default)((0, _equal2.default)(0), _size2.default);
exports.default = empty;