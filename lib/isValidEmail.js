"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

/**
 * test if value is a valid email
 * @memberOf Relation
 * @func
 * @param {any} value value to test
 * @returns {boolean} true if test success
 * @instance
 * @example {@lang javascript}const result = isValidEmail('gandalf@mordor.com') //return true
 */
var isValidEmail = function isValidEmail(value) {
  return mail.test(value);
};
exports.default = isValidEmail;