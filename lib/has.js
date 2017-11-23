'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function has
* @func
* @memberOf Junction
*/
var has = (0, _curry2.default)(function (key, item) {
  return item[key] != undefined ? item : false;
});
exports.default = has;