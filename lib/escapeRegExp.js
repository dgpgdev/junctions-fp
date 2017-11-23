'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function escapeRegExp
* @func
* @memberOf Junction
*/
var escapeRegExp = function escapeRegExp(string) {
  return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};
exports.default = escapeRegExp;