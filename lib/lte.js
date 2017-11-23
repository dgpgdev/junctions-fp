'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _isString = require('./isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function lte
* @func
* @memberOf Junction
*/
var lte = (0, _curry2.default)(function (limit, value) {
  return (0, _isString2.default)()(value) ? value.trim().length <= limit : value <= limit;
});
exports.default = lte;