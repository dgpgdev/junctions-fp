import curry from './curry'

/**
 * test if value is defined
 * @memberOf Relation
 * @func
 * @param {any} value value to test
 * @returns {boolean} true if test success
 * @example {@lang javascript}const result = noDefined(null) //return true
 */
const defined = curry(value => value !== undefined && value != null && value !== '')
export default defined
