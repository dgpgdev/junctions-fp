'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
* function flatMap
* @func
* @memberOf Junction
*/
var flatMap = (0, _curry2.default)(function (array, mapper) {
    var _ref;

    return Array.isArray(array) ? (_ref = []).concat.apply(_ref, _toConsumableArray(array.map(function (x) {
        return flatMap(x, mapper);
    }))) : mapper(array);
});
exports.default = flatMap;