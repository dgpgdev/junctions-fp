'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * test value with type
 * @memberOf Relation
 * @func
 * @param {string} type type to test
 * @param {any} value value to test
 * @returns {boolean} true if test success
 * @example {@lang javascript}const result = is('string', 'gandalf') //return true
 */
var is = (0, _curry2.default)(function (type, value) {
  return type === 'array' ? Array.isArray(value) : (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === type;
});
exports.default = is;