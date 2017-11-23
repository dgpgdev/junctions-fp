'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function pluck
* @func
* @memberOf Junction
*/
var pluck = (0, _curry2.default)(function (property, array) {
  return (0, _map2.default)((0, _get2.default)(property))(array);
});
exports.default = pluck;