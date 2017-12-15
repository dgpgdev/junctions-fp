"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Récupère une liste sans item dupliqué dans depuis la liste originale
 * @memberOf List
 * @function excludeDuplicate
 * @param {array} array la liste des items a testé
 * @returns {array} la liste des items non dupliqué
 * @instance
 * @example {@lang javascript}const x = [1, 2, 3, 4, 5]
 */
var aperture = function aperture(size, array) {
  var a = [];
  array.reduce(function (acc, current, index, array) {
    if (index % size === 0) {
      a = [];
    }
  }, []);
};
exports.default = aperture;