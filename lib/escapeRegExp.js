'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* function escapeRegExp
* @func
* @memberOf Junction
*/
var escapeRegExp = function escapeRegExp(string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
};
exports.default = escapeRegExp;