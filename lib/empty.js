'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var _equal = require('./equal');

var _equal2 = _interopRequireDefault(_equal);

var _size = require('./size');

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function empty
* @func
* @memberOf Junction
*/
var empty = (0, _compose2.default)((0, _equal2.default)(0), _size2.default);
exports.default = empty;