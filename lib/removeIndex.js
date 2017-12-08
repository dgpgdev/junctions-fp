'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _equal = require('./equal');

var _equal2 = _interopRequireDefault(_equal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function removeItem
* @func
* @memberOf Junction
*/
var removeIndex = (0, _curry2.default)(function (index, array) {
  return array.filter(function (i, ind) {
    return !(0, _equal2.default)(ind)(index);
  });
});
exports.default = removeIndex;