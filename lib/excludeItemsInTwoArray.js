'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _merge = require('./merge');

var _merge2 = _interopRequireDefault(_merge);

var _arrayIsEmpty = require('./arrayIsEmpty');

var _arrayIsEmpty2 = _interopRequireDefault(_arrayIsEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function excludeItemsInTwoArray
* @func
* @memberOf Junction
*/
var excludeItemsInTwoArray = (0, _curry2.default)(function (a, b, compare) {
  return (0, _merge2.default)(a, b.filter(function (x) {
    return (0, _arrayIsEmpty2.default)(a.filter(function (y) {
      return compare(x)(y);
    }));
  }));
});
exports.default = excludeItemsInTwoArray;