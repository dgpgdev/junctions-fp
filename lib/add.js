'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * function add
 * @func
 * @memberOf Junction
 */
var add = (0, _curry2.default)(function (x, y) {
  return x + y;
});
exports.default = add;