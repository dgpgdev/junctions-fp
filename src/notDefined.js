import curry from './curry'
import not from './not'
import defined from './defined'
/**
 * test if value is not defined
 * @memberOf Relation
 * @func
 * @param {any} value value to test
 * @returns {boolean} true if test success
 * @example {@lang javascript}const result = noDefined(null) //return true
 */
const notDefined = curry(value => not(defined(value)))
export default notDefined