'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * function add
 * @memberOf Math
 * @function add
 * @param {number} x le premier nombre
 * @param {number} y le second nombre
 * @returns {number} le résultat de l'addition
 * @instance
 * @example {@lang javascript}const result = add(10,2) //return 12
 * const result = add(10)(2) //return 12
 * const y = add(10)
 * const result = y(2)//return 12
 */
var delProps = (0, _curry2.default)(function (props, item) {
  var clone = _extends({}, item);
  if (Array.isArray(props)) {
    props.forEach(function (p) {
      delete clone[p];
    });
    return clone;
  }
  delete clone[props];
  return clone;
});
exports.default = delProps;