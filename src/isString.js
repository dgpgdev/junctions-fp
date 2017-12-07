import curry from './curry'
import is from './is'
/**
 * test if value is a String
 * @memberOf Relation
 * @func
 * @param {any} value value to test
 * @returns {boolean} true if test success
 * @example {@lang javascript}const result = isString('gandalf') //return true
 */
const isString = curry(value =>  is('string')(value))
export default isString