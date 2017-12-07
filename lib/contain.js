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
* function contain
* @func
* @memberOf Junction
*/
var contain = (0, _curry2.default)(function (value, array) {
  return array.some((0, _equal2.default)(value));
});
exports.default = contain;