'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _arguments = arguments;

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _equal = require('./equal');

var _equal2 = _interopRequireDefault(_equal);

var _mergeAll = require('./mergeAll');

var _mergeAll2 = _interopRequireDefault(_mergeAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var duplicate = function duplicate(array) {
    return array.filter(function (a, index, self) {
        return self[index + 1] && self.slice(index + 1).some(function (b) {
            return (0, _equal2.default)(a, b);
        }) ? a : false;
    });
};
/**
* function hasDuplicate
* @func
* @memberOf Junction
*/
var getDuplicate = function getDuplicate() {
    for (var _len = arguments.length, array = Array(_len), _key = 0; _key < _len; _key++) {
        array[_key] = arguments[_key];
    }

    if (_arguments.length > 1) {
        return duplicate((0, _mergeAll2.default)(array));
    }
    return duplicate(_arguments[0]);
};
exports.default = getDuplicate;