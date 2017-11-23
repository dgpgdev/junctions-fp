'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _arrayNotEmpty = require('./arrayNotEmpty');

var _arrayNotEmpty2 = _interopRequireDefault(_arrayNotEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function getItemsInTwoArray
* @func
* @memberOf Junction
*/
var getItemsInTwoArray = (0, _curry2.default)(function (a, b, compare) {
  return a.filter(function (x) {
    return (0, _arrayNotEmpty2.default)(b.filter(function (y) {
      return compare(x)(y);
    }));
  });
});
exports.default = getItemsInTwoArray;