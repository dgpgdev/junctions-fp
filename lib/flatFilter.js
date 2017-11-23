'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _flatMap = require('./flatMap');

var _flatMap2 = _interopRequireDefault(_flatMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function flatFilter
* @func
* @memberOf Junction
*/
var flatFilter = (0, _curry2.default)(function (array, filt) {
    return (0, _flatMap2.default)(array, function (x) {
        return x;
    }).filter(filt);
});
exports.default = flatFilter;