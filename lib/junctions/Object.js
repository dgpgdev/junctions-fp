'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeAll = exports.merge = exports.modify = exports.get = exports.has = undefined;

var _Relation = require('./Relation');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * get property on object
 * @param {*} key 
 * @return {*} value
 */
var get = function get(key) {
  return function (item) {
    return item[key] != undefined ? item[key] : false;
  };
};

/**
 * detect if item has property
 * @param {*} key string or int
 * @return {object} item
 */
var has = function has(key) {
  return function (item) {
    return item[key] != undefined ? item : false;
  };
};

/**
 * 
 * @param {*} item 
 */
var modify = function modify(property, value) {
  return function (item) {
    item[property] = value;
    return item;
  };
};

var merge = function merge(x, y) {
  return (0, _Relation.is)('array')(x) && (0, _Relation.is)('array')(y) ? [].concat(_toConsumableArray(x), _toConsumableArray(y)) : Object.assign(x, y);
};

var mergeAll = function mergeAll(array) {
  return array.reduce(function (a, b) {
    return merge(a, b);
  });
};

exports.has = has;
exports.get = get;
exports.modify = modify;
exports.merge = merge;
exports.mergeAll = mergeAll;