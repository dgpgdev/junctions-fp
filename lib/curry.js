"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * function curry
 * @memberOf Functions
 * @function curry
 * @param {function} fn function to curry
 * @returns {function | void} return function or void
 * @example {@lang javascript}const add = (x,y) => x+y
 *const z = curry(add)
 *const result = z(2)(3) //return 5
 */
var curry = function curry(fn) {
  var numargs = fn.length;
  return createRecurser([]);

  function createRecurser(acc) {
    return function () {
      var args = [].slice.call(arguments);
      return recurse(acc, args);
    };
  }

  function recurse(acc, args) {
    var newacc = acc.concat(args);
    if (newacc.length < numargs) {
      return createRecurser(newacc);
    } else {
      return fn.apply(this, newacc);
    }
  }
};
exports.default = curry;