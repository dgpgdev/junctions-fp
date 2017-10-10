'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Base type detection
 * @param {*} type 
 */
var is = function is(type) {
  return function (value) {
    return type === 'array' ? Array.isArray(value) : (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === type;
  };
};
///////////////////////////////////
// STRING
///////////////////////////////////
/**
 * check if value is a string
 * 
 * @param {any} value 
 * @returns 
 */
var isString = function isString() {
  return function (value) {
    return is('string')(value);
  };
};

/**
 * check if value is not defined or empty
 * 
 * @param {any} value 
 * @returns 
 */
var notDefined = function notDefined() {
  return function (value) {
    return value === undefined || value === null || value === '';
  };
};

/**
 * check if value is defined or not empty
 * 
 * @param {any} value 
 * @returns 
 */
var defined = function defined() {
  return function (value) {
    return !isEmpty(value);
  };
};

///////////////////////////////////
// Number
///////////////////////////////////
/**
 * check if value is a number
 * 
 * @param {any} value 
 * @returns 
 */
var isNumber = function isNumber() {
  return function (value) {
    return is('number')(value) && !Number.isNaN(value);
  };
};

/**
 * check if value is an Integer
 * 
 * @param {any} value 
 * @returns 
 */
var isInt = function isInt() {
  return function (value) {
    return Number.isInteger(value);
  };
};

/**
 * check if value is gt than number
 * 
 * @param {any} value 
 * @param {any} number 
 * @returns 
 */
var gt = function gt(limit) {
  return function (value) {
    return isString()(value) ? value.trim().length > limit : value > limit;
  };
};

var gte = function gte(limit) {
  return function (value) {
    return isString()(value) ? value.trim().length >= limit : value >= limit;
  };
};

/**
 * check if value is lower than
 * 
 * @param {any} value 
 * @param {any} number 
 * @returns 
 */
var lt = function lt(limit) {
  return function (value) {
    return isString()(value) ? value.trim().length < limit : value < limit;
  };
};

var lte = function lte(limit) {
  return function (value) {
    return isString()(value) ? value.trim().length <= limit : value <= limit;
  };
};

/**
 * compare equality between two data. If data is an Object, 
 * iterate property and value for each object and compare 
 * structure and data. If data is a primitive (number, boolean, string)
 * use strict equality
 * @param {*} x 
 */
var equal = function equal(a) {
  return function (b) {
    var isObject = is('object');
    var isValid = validConditions(isObject, defined);
    if (isValid(a) && isValid(b)) {
      var count = [0, 0];
      for (var key in a) {
        count[0]++;
      }for (var key in b) {
        count[1]++;
      }if (!equal(0)(count[0] - count[1])) {
        return false;
      }
      for (var key in a) {
        if (!(key in b) || !equal(a[key])(b[key])) {
          return false;
        }
      }
      for (var key in b) {
        if (!(key in a) || !equal(b[key])(a[key])) {
          return false;
        }
      }
      return true;
    } else {
      return a === b;
    }
  };
};

/**
 * test all conditions function and return true if all succeded
 * @param {*} fns function list conditions
 */
var validConditions = function validConditions() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (data) {
    return fns.every(function (fn) {
      return fn(data);
    });
  };
};

exports.is = is;
exports.isString = isString;
exports.notDefined = notDefined;
exports.defined = defined;
exports.isInt = isInt;
exports.isNumber = isNumber;
exports.gt = gt;
exports.gte = gte;
exports.lt = lt;
exports.lte = lte;
exports.validConditions = validConditions;
exports.equal = equal;