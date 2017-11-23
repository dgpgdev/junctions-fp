'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
* function moveToBegin
* @func
* @memberOf Junction
*/
var moveToBegin = (0, _curry2.default)(function (arr) {
  return [arr[arr.length - 1]].concat(_toConsumableArray(arr.filter(function (item, index) {
    return index != arr.length - 1;
  })));
});
exports.default = moveToBegin;