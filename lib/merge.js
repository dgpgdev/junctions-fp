'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _is = require('./is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
* function merge
* @func
* @memberOf Junction
*/
var merge = (0, _curry2.default)(function (x, y) {
  return (0, _is2.default)('array')(x) && (0, _is2.default)('array')(y) ? [].concat(_toConsumableArray(x), _toConsumableArray(y)) : Object.assign(x, y);
});
exports.default = merge;