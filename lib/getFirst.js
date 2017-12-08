'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function firstIndex
* @func
* @memberOf Junction
*/
var getFirst = (0, _curry2.default)(function (arr) {
  return arr.slice(0, 1)[0];
});
exports.default = getFirst;