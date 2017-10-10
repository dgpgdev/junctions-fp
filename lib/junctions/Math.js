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
* add Value, if values are array, concat and return array, 
if values are object assign properties and return an Object
* @param {*} x 
*/
var add = function add(x) {
  return function (y) {
    return x + y;
  };
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