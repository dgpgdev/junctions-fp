'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function swap
* @func
* @memberOf Junction
*/
var swap = (0, _curry2.default)(function (arr, a, b) {
  return arr.map(function (it, idx) {
    return idx === a ? arr[b] : idx === b ? arr[a] : it;
  });
});
exports.default = swap;