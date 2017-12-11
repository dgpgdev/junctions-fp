"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * function pipe
 * execute left to rigth function
 * @memberOf Functions
 * @function pipe
 * @param {function} fns list of function to compose
 * @returns {any} return functions list result
 * @instance
 * @example {@lang javascript}const creatures = [{name:'dragon', attack:10}, {name:'troll', attack:5}, {name:'gobelin', attack:1}]
 *const getAttackValues = get('attack')// get attack value
 *const isGreaterthan1 = gt(1) //valid condition n > 1
 *const myFilter = pipe(getAttackValues, isGreaterthan1) // compose function
 *const result = creatures.filter(myFilter) // return  [{name:'dragon', attack:10}, {name:'troll', attack:5}]
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