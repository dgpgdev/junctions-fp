'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * function debounce
 * debounce function
 * @memberOf Functions
 * @function debounce
 * @param {function} fn function to call after delay
 * @param {number} wait time to delay function execution
 * @param {boolean} immediate execute imediatly function
 * @example {@lang javascript}const count = (x)=> x+1
 *const d = debounce(count, 1000)
 *d(1) //call count
 */
var debounce = function debounce(fn, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function later() {
            timeout = null;
            if (!immediate) fn.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) fn.apply(context, args);
    };
};
exports.default = debounce;