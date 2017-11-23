"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

/**
* function isValidEmail
* @func
* @memberOf Junction
*/
var isValidEmail = function isValidEmail(value) {
  return mail.test(value);
};
exports.default = isValidEmail;