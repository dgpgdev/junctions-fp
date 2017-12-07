'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var _gt = require('./gt');

var _gt2 = _interopRequireDefault(_gt);

var _size = require('./size');

var _size2 = _interopRequireDefault(_size);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* function notEmpty
* @func
* @memberOf Junction
*/
var notEmpty = (0, _compose2.default)((0, _gt2.default)(0), _size2.default);
exports.default = notEmpty;