'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
* function setLast
* @func
* @memberOf Junction
*/
var setLast = (0, _curry2.default)(function (value, arr) {
    var index = arr.findIndex(equal(value));
    if (index === 0) {
        return arr.slice();
    }
    var a = arr.slice(0, index);
    var b = [];
    if (index + 1 < arr.length) {
        b = arr.slice(index + 1);
    }
    return [].concat(_toConsumableArray(a), _toConsumableArray(b), [arr[index]]);
});
exports.default = setLast;