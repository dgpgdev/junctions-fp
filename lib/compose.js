"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
* function compose
* @func
* @memberOf Junction
*/
var compose = function compose() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return f(g.apply(undefined, arguments));
    };
  });
};

exports.default = compose;