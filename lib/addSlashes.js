'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var addSlashes = function addSlashes(str) {
  str = str.replace(/\\/g, '\\\\');
  str = str.replace(/\'/g, "\\'");
  str = str.replace(/\"/g, '\\"');
  str = str.replace(/\0/g, '\\0');
  return str;
};

exports.default = addSlashes;