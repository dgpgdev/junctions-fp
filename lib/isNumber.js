'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _is = require('./is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function isNumber
* @func
* @memberOf Junction
*/
var isNumber = (0, _curry2.default)(function (value) {
  return (0, _is2.default)('number')(value) && !Number.isNaN(value);
});
exports.default = isNumber;