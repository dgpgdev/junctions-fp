'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.curry = exports.negate = exports.pipe = exports.compose = undefined;

var _Relation = require('./Relation');

/**
 * compose multiple function
 * ex : 
 *  const calc = compose(mult2, add2)
 *  calc(2) // result 8
 * @param {*} fns 
 */
var compose = function compose() {
    for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
        fns[_key] = arguments[_key];
    }

    return fns.reduce(function (f, g) {
        return function () {
            return f(g.apply(undefined, arguments));
        };
    });
};

/**
 * pipe multiple function
 * ex : 
 *  const calc = compose(mult2, add2)
 *  calc(2) // result 6
 * @param {*} fns 
 */
var pipe = function pipe() {
    for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        fns[_key2] = arguments[_key2];
    }

    return fns.reduce(function (f, g) {
        return function () {
            return g(f.apply(undefined, arguments));
        };
    });
};

/**
 * negate result function
 * 
 * @param {*} fn 
 */
var negate = function negate(fn) {
    return function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
        }

        return !fn.apply(null, args);
    };
};

/**
 * curried function
 * @param {*} fn 
 */
var curry = function curry(fn) {
    var numargs = fn.length;
    return createRecurser([]);

    function createRecurser(acc) {
        return function () {
            var args = [].slice.call(arguments);
            return recurse(acc, args);
        };
    }

    function recurse(acc, args) {
        var newacc = acc.concat(args);
        if (newacc.length < numargs) {
            return createRecurser(newacc);
        } else {
            return fn.apply(this, newacc);
        }
    }
};

exports.compose = compose;
exports.pipe = pipe;
exports.negate = negate;
exports.curry = curry;