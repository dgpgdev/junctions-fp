'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function hasItemsInTwoArray
* @func
* @memberOf Junction
*/
var hasItemsInTwoArray = (0, _curry2.default)(function (a, b, compare) {
  return a.some(function (x) {
    return b.some(function (y) {
      return compare(x)(y);
    });
  });
});
exports.default = hasItemsInTwoArray;