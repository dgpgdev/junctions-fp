'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = exports.notContainDigit = exports.containDigit = exports.isValidUrl = exports.isValidEmail = exports.getStringExtension = undefined;

var _List = require('./List');

///////////////////////////////////
// REGEX
///////////////////////////////////
var mail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
var cdigit = /\d/;
var url = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;

/**
 * check if value is a valid email
 * 
 * @param {any} value 
 * @returns 
 */
var isValidEmail = function isValidEmail() {
  return function (value) {
    return mail.test(value);
  };
};

/**
 * check if value is a valid URL 
 * URL must start with http(s)
 * 
 * @param {any} value 
 * @returns 
 */
var isValidUrl = function isValidUrl() {
  return function (value) {
    return url.test(value);
  };
};

/**
 * check if value contain a digit
 * 
 * @param {any} value 
 * @returns 
 */
var containDigit = function containDigit() {
  return function (value) {
    return cdigit.test(value);
  };
};

/**
 * reverse containDigit 
 * 
 * @param {any} value 
 * @returns 
 */
var notContainDigit = function notContainDigit() {
  return function (value) {
    return !containDigit()(value);
  };
};

/**
 * get extension from string (.gif, .mp4 ect...)
 * @param {*} string 
 */
var getStringExtension = function getStringExtension() {
  return function (string) {
    return '.' + (0, _List.lastIndex)(string.split('.'));
  };
};

var trim = function trim() {
  return function (string) {
    return string.trim();
  };
};

exports.getStringExtension = getStringExtension;
exports.isValidEmail = isValidEmail;
exports.isValidUrl = isValidUrl;
exports.containDigit = containDigit;
exports.notContainDigit = notContainDigit;
exports.trim = trim;