'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function get
* @func
* @memberOf Junction
*/
var getProps = (0, _curry2.default)(function (props, item) {
  return Array.isArray(props) ? props.map(function (x) {
    return item[x];
  }) : item[props];
});
exports.default = getProps;