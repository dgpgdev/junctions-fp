'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function any
* @func
* @memberOf Junction
*/
var any = (0, _curry2.default)(function (filter, array) {
  return array.some(filter);
});
exports.default = any;