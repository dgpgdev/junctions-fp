import curry from './curry'
import is from './is'
/**
 * test if value is a Number
 * @memberOf Relation
 * @func
 * @param {any} value value to test
 * @returns {boolean} true if test success
 * @example {@lang javascript}const result = isNumber(4.2) //return true
 */
const isNumber = curry(value => is('number')(value) && !Number.isNaN(value))
export default isNumber
