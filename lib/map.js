'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function map
* @func
* @memberOf Junction
*/
var map = (0, _curry2.default)(function (fn, array) {
  return array.map(fn);
});
exports.default = map;