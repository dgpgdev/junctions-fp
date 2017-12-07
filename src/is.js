import curry from './curry'
/**
 * test value with type
 * @memberOf Relation
 * @func
 * @param {string} type type to test
 * @param {any} value value to test
 * @returns {boolean} true if test success
 * @example {@lang javascript}const result = is('string', 'gandalf') //return true
 */
const is = curry((type, value) => (type === 'array') ? Array.isArray(value) : typeof value === type)
export default is
