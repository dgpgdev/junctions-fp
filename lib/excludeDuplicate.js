'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _equal = require('./equal');

var _equal2 = _interopRequireDefault(_equal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function excludeDuplicate
* @func
* @memberOf Junction
*/
var excludeDuplicate = (0, _curry2.default)(function (array) {
  return array.filter(function (a, index, self) {
    return self.findIndex(function (b) {
      return (0, _equal2.default)(a)(b);
    }) === index;
  });
});
exports.default = excludeDuplicate;