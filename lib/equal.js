'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _is = require('./is.js');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function deepEqual
* @func
* @memberOf Junction
*/
var equal = (0, _curry2.default)(function (a, b) {
    var isObject = (0, _is2.default)('object');
    if (isObject(a) && isObject(b)) {
        var count = [0, 0];
        for (var key in a) {
            count[0]++;
        }for (var key in b) {
            count[1]++;
        }if (!equal(0)(count[0] - count[1])) {
            return false;
        }
        for (var key in a) {
            if (!(key in b) || !equal(a[key])(b[key])) {
                return false;
            }
        }
        for (var key in b) {
            if (!(key in a) || !equal(b[key])(a[key])) {
                return false;
            }
        }
        return true;
    } else {
        return a === b;
    }
});
exports.default = equal;