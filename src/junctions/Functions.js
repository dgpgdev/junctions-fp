import {
    is
} from './Relation'
/**
 * delegate map array method
 * @param {*} fn 
 */
const map = fn => array => array.map(fn)

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
 * @param {*} fns 
 */
const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))



/**
 * get property on object
 * @param {*} key 
 * @return {*} value
 */
const get = key => item => item[key] != undefined ? item[key] : false

/**
 * detect if item has property
 * @param {*} key string or int
 * @return {object} item
 */
const has = key => item => item[key] != undefined ? item : false

/**
 * 
 * @param {*} item 
 */
const modify = (property, value) => item => {
    item[property] = value
    return item
}

/**
 * delegate filter
 * @param {*} fn 
 */
const filter = fn => array => array.filter(fn)

/**
 * delegate every
 * @param {*} fn 
 */
const every = fn => array => array.every(fn)
/**
 * delegate some
 * @param {*} fn 
 */
const some = fn => array => array.some(fn)

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


export {
    compose,
    pipe,
    has,
    get,
    modify,
    filter,
    some,
    every,
    map,
    negate,
    curry
}