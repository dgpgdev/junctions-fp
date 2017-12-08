'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getLast = require('./getLast');

var _getLast2 = _interopRequireDefault(_getLast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function getStringExtension
* @func
* @memberOf Junction
*/
var getStringExtension = function getStringExtension(string) {
  return '.' + (0, _getLast2.default)(string.split('.'));
};
exports.default = getStringExtension;