'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var stripSlashes = function stripSlashes(str) {
  str = str.replace(/\\'/g, "'");
  str = str.replace(/\\"/g, '"');
  str = str.replace(/\\0/g, '\0');
  str = str.replace(/\\\\/g, '\\');
  return str;
};

exports.default = stripSlashes;