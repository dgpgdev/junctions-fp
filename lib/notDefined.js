'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _not = require('./not');

var _not2 = _interopRequireDefault(_not);

var _defined = require('./defined');

var _defined2 = _interopRequireDefault(_defined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * test if value is not defined
 * @memberOf Relation
 * @func
 * @param {any} value value to test
 * @returns {boolean} true if test success
 * @example {@lang javascript}const result = noDefined(null) //return true
 */
var notDefined = (0, _curry2.default)(function (value) {
  return (0, _not2.default)((0, _defined2.default)(value));
});
exports.default = notDefined;