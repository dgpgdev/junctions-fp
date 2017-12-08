'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _defined = require('./defined');

var _defined2 = _interopRequireDefault(_defined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function has
* @func
* @memberOf Junction
*/
var has = (0, _curry2.default)(function (key, item) {
  return (0, _defined2.default)(item[key]);
});
exports.default = has;