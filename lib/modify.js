'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function modify
* @func
* @memberOf Junction
*/
var modify = (0, _curry2.default)(function (property, value, item) {
    item[property] = value;
    return item;
});
exports.default = modify;