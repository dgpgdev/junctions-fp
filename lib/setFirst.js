'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _equal = require('./equal');

var _equal2 = _interopRequireDefault(_equal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
* function moveToBegin
* @func
* @memberOf Junction
*/

var setFirst = (0, _curry2.default)(function (value, arr) {
  var index = arr.findIndex((0, _equal2.default)(value));
  if (index === 0) {
    return arr.slice();
  }
  var a = arr.slice(0, index);
  var b = [];
  if (index + 1 < arr.length) {
    b = arr.slice(index + 1);
  }
  return [arr[index]].concat(_toConsumableArray(a), _toConsumableArray(b));
});
exports.default = setFirst;