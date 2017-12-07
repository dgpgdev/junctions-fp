import curry from './curry'
/**
 * test if value is an Integer
 * @memberOf Relation
 * @func
 * @param {any} value value to test
 * @returns {boolean} true if test success
 * @example {@lang javascript}const result = isInt(42) //return true
 */
const isInt = curry(value => Number.isInteger(value))
export default isInt
