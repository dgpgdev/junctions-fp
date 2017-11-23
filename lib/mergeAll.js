'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _merge = require('./merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function mergeAll
* @func
* @memberOf Junction
*/
var mergeAll = (0, _curry2.default)(function (array) {
  return array.reduce(function (a, b) {
    return (0, _merge2.default)(a, b);
  });
});
exports.default = mergeAll;