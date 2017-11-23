'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
* function moveToEnd
* @func
* @memberOf Junction
*/
var moveToEnd = (0, _curry2.default)(function (arr) {
  return [].concat(_toConsumableArray(arr.filter(function (item, index) {
    return index != 0;
  })), [arr[0]]);
});
exports.default = moveToEnd;