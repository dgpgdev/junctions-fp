'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _lastIndex = require('./lastIndex');

var _lastIndex2 = _interopRequireDefault(_lastIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function getStringExtension
* @func
* @memberOf Junction
*/
var getStringExtension = function getStringExtension(string) {
  return '.' + (0, _lastIndex2.default)(string.split('.'));
};
exports.default = getStringExtension;