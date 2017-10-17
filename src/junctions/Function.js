import {
    is
} from './Relation'

/**
 * compose multiple function
 * ex : 
 *  const calc = compose(mult2, add2)
 *  calc(2) // result 8
 * @param {*} fns 
 */
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

/**
 * pipe multiple function
 * ex : 
 *  const calc = compose(mult2, add2)
 *  calc(2) // result 6
 * @param {function} fns 
 */
const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

/**
 * negate result function
 * 
 * @param {*} fn 
 */
const negate = fn => (...args) => !fn.apply(null, args)

/**
 * curried function
 * @param {*} fn 
 */
const curry = function (fn) {
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
}

const debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};


export {
    compose,
    pipe,
    negate,
    curry,
    debounce
}