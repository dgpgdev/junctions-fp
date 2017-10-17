'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.all = exports.flatFilter = exports.flatMap = exports.pluck = exports.filter = exports.map = exports.moveToEnd = exports.moveToBegin = exports.firstIndex = exports.lastIndex = exports.excludeItemsInTwoArray = exports.getItemsInTwoArray = exports.hasItemsInTwoArray = exports.arrayContain = exports.arrayIsEmpty = exports.arrayNotEmpty = exports.arraySize = undefined;

var _Function = require('./Function');

var _Relation = require('./Relation');

var _Object = require('./Object');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/** @module List  */

/**
 * @memberof List
 * get size of array
 * 
 */
var arraySize = (0, _Object.get)('length');

/**
 * @memberof List
 * Detect if array is not empty
 */
var arrayNotEmpty = (0, _Function.compose)((0, _Relation.gt)(0), arraySize);

/**
 * @memberof List
 * Detect if array is not empty
 */
var arrayIsEmpty = (0, _Function.compose)((0, _Relation.equal)(0), arraySize);

var map = function map(fn) {
  return function (array) {
    return array.map(fn);
  };
};

/**
 * @memberof List
 * delegate filter
 * @param {*} fn 
 */
var filter = function filter(fn) {
  return function (array) {
    return array.filter(fn);
  };
};

/**
 * @memberof List
 * search if a item valid compare function
 * @param {*} compare function to test
 */
var arrayContain = function arrayContain(compare) {
  return function (array) {
    return array.some(compare);
  };
};

/**
 * @memberof List
 * Compare two array with compare function
 * @param {*} a first array
 * @param {*} b second array
 * @param {*} compare function to test
 * @return {boolean} 
 */
var hasItemsInTwoArray = function hasItemsInTwoArray(a, b, compare) {
  return a.some(function (x) {
    return b.some(function (y) {
      return compare(x)(y);
    });
  });
};

/**
 * @memberof List
 * Compare two array with compare function 
 * and return an array with result
 * @param {*} a first array
 * @param {*} b second array
 * @param {*} compare function to test
 * @return {array} 
 */
var getItemsInTwoArray = function getItemsInTwoArray(a, b, compare) {
  return a.filter(function (x) {
    return arrayNotEmpty(b.filter(function (y) {
      return compare(x)(y);
    }));
  });
};

/**
 * @memberof List
 * Compare two array with compare function 
 * and return an array without Items entries
 * @param {*} a first array
 * @param {*} b second array
 * @param {*} compare function to test
 * @return {array} 
 */
var excludeItemsInTwoArray = function excludeItemsInTwoArray(a, b, compare) {
  return (0, _Object.merge)(a, b.filter(function (x) {
    return arrayIsEmpty(a.filter(function (y) {
      return compare(x)(y);
    }));
  }));
};

/**
 * @memberof List
 * swap two items in array
 * @param {*} arr 
 * @param {*} a 
 * @param {*} b 
 */
var swap = function swap(arr, a, b) {
  return arr.map(function (it, idx) {
    return idx === a ? arr[b] : idx === b ? arr[a] : it;
  });
};

/**
 * @memberof List
 * move last array item to first
 * @param {*} arr 
 */
var moveToBegin = function moveToBegin(arr) {
  return [arr[arr.length - 1]].concat(_toConsumableArray(arr.filter(function (item, index) {
    return index != arr.length - 1;
  })));
};

/**
 * @memberof List
 * move first array item to last
 * @param {*} arr 
 */
var moveToEnd = function moveToEnd(arr) {
  return [].concat(_toConsumableArray(arr.filter(function (item, index) {
    return index != 0;
  })), [arr[0]]);
};

/**
 * @memberof List
 * get last array value
 * @param {*} arr 
 */
var lastIndex = function lastIndex(arr) {
  return arr.slice(arr.length - 1);
};

/**
 * @memberof List
 * get last array value
 * @param {*} arr 
 */
var firstIndex = function firstIndex(arr) {
  return arr.slice(0, 1)[0];
};

/**
 * @memberof List
 * convert string to Array
 * @param {string} separator 
 */
var split = function split(separator) {
  return function (string) {
    return string.split(separator);
  };
};

/**
 * @memberof List
 * Return a list value from property
 * @param {*} property 
 */
var pluck = function pluck(property) {
  return function (array) {
    return map((0, _Object.get)(property))(array);
  };
};

/**
 * @memberof List
 * reverse list
 * @param {*} array 
 */
var reverse = function reverse(array) {
  return array.reverse();
};

/**
 * @memberof List
 * test all list value valid filter
 * @param {*} filter 
 */
var all = function all(filter) {
  return function (array) {
    return array.every(filter);
  };
};

/**
 * @memberof List
 * test if one or more value valid filter
 * @param {*} filter 
 */
var any = function any(filter) {
  return function (array) {
    return array.some(filter);
  };
};

/**
 * @memberof List
 * flat map
 * @param {*} value 
 * @param {*} mapper 
 */
var flatMap = function flatMap(array, mapper) {
  var _ref;

  return Array.isArray(array) ? (_ref = []).concat.apply(_ref, _toConsumableArray(array.map(function (x) {
    return flatMap(x, mapper);
  }))) : mapper(array);
};

/**
 * @memberof List
 * flat map
 * @param {*} value 
 * @param {*} mapper 
 */
var flatFilter = function flatFilter(array, filt) {
  return flatMap(array, function (x) {
    return x;
  }).filter(filt);
};

exports.arraySize = arraySize;
exports.arrayNotEmpty = arrayNotEmpty;
exports.arrayIsEmpty = arrayIsEmpty;
exports.arrayContain = arrayContain;
exports.hasItemsInTwoArray = hasItemsInTwoArray;
exports.getItemsInTwoArray = getItemsInTwoArray;
exports.excludeItemsInTwoArray = excludeItemsInTwoArray;
exports.lastIndex = lastIndex;
exports.firstIndex = firstIndex;
exports.moveToBegin = moveToBegin;
exports.moveToEnd = moveToEnd;
exports.map = map;
exports.filter = filter;
exports.pluck = pluck;
exports.flatMap = flatMap;
exports.flatFilter = flatFilter;
exports.all = all;