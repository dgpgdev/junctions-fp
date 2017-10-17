"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * multiply values
 * @param {*} x 
 */
var multiply = function multiply(x) {
  return function (y) {
    return x * y;
  };
};

/**
 * add Values, if values are a string, concat and return new String, 
 * if values are Numbers return result
 * @function
 * @param {number | string} x first value
 * @return {function}
 */
var add = function add(x) {
  return (
    /**
     * second function called
     * @function
     * @param {number | string} y second value
     * @return {number | string} result
     */
    function (y) {
      return x + y;
    }
  );
};

//const apply = item => apply => 

/**
 * return difference between 2 values
 * @param {*} x 
 */
var diff = function diff(x) {
  return function (y) {
    return x - y;
  };
};

exports.multiply = multiply;
exports.add = add;
exports.diff = diff;