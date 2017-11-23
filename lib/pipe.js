"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* function pipe
* @func
* @memberOf Junction
*/
var pipe = function pipe() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return g(f.apply(undefined, arguments));
    };
  });
};
exports.default = pipe;