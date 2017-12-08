'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var _getProp = require('./getProp');

var _getProp2 = _interopRequireDefault(_getProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function pluck
* @func
* @memberOf Junction
*/
var pluck = (0, _curry2.default)(function (property, array) {
  return (0, _map2.default)((0, _getProp2.default)(property))(array);
});
exports.default = pluck;