'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function defined
* @func
* @memberOf Junction
*/
var defined = (0, _curry2.default)(function (value) {
  return value != undefined || value != null || value != '';
});
exports.default = defined;