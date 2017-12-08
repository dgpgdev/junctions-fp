'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function lastIndex
* @func
* @memberOf Junction
*/
var getLast = (0, _curry2.default)(function (arr) {
  return arr.slice(arr.length - 1)[0];
});
exports.default = getLast;