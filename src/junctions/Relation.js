/**
 * Base type detection
 * @param {*} type 
 */
const is = type => value => (type === 'array') ? Array.isArray(value) : typeof value === type
///////////////////////////////////
// STRING
///////////////////////////////////
/**
 * check if value is a string
 * 
 * @param {any} value 
 * @returns 
 */
const isString = () => value => is('string')(value)

/**
 * check if value is not defined or empty
 * 
 * @param {any} value 
 * @returns 
 */
const notDefined = () => value => value === undefined || value === null || value === ''

/**
 * check if value is defined or not empty
 * 
 * @param {any} value 
 * @returns 
 */
const defined = () => value => !isEmpty(value)


///////////////////////////////////
// Number
///////////////////////////////////
/**
 * check if value is a number
 * 
 * @param {any} value 
 * @returns 
 */
const isNumber = () => value => is('number')(value) && !Number.isNaN(value)


/**
 * check if value is an Integer
 * 
 * @param {any} value 
 * @returns 
 */
const isInt = () => value => Number.isInteger(value)

/**
 * check if value is gt than number
 * 
 * @param {any} value 
 * @param {any} number 
 * @returns 
 */
let gt = limit => value => isString()(value) ? value.trim().length > limit : value > limit

let gte = limit => value => isString()(value) ? value.trim().length >= limit : value >= limit

/**
 * check if value is lower than
 * 
 * @param {any} value 
 * @param {any} number 
 * @returns 
 */
let lt = limit => value => isString()(value) ? value.trim().length < limit : value < limit

let lte = limit => value => isString()(value) ? value.trim().length <= limit : value <= limit

/**
 * compare equality between two data. If data is an Object, 
 * iterate property and value for each object and compare 
 * structure and data. If data is a primitive (number, boolean, string)
 * use strict equality
 * @param {*} x 
 */
const equal = (a) => (b) => {
    const isObject = is('object')
    const isValid = validConditions(isObject, defined)
    if (isValid(a) && isValid(b)) {
        let count = [0, 0];
        for (var key in a) count[0]++;
        for (var key in b) count[1]++;
        if (!equal(0)(count[0] - count[1])) {
            return false
        }
        for (var key in a) {
            if (!(key in b) || !equal(a[key])(b[key])) {
                return false;
            }
        }
        for (var key in b) {
            if (!(key in a) || !equal(b[key])(a[key])) {
                return false;
            }
        }
        return true;
    } else {
        return a === b
    }
}

/**
 * test all conditions function and return true if all succeded
 * @param {*} fns function list conditions
 */
const validConditions = (...fns) => data => fns.every(fn => fn(data))





export {
    is,
    isString,
    notDefined,
    defined,
    isInt,
    isNumber,
    gt,
    gte,
    lt,
    lte,
    validConditions,
    equal
}