import curry from './curry'
import is from './is'
/**
 * test la valeur est un nombre
 * @memberOf Relation
 * @function isNumber
 * @param {any} value value a tester
 * @returns {boolean} true si la valeur est un nombre
 * @instance
 * @example {@lang javascript}const result = isNumber(4.2) //return true
 */
const isNumber = curry(value => is('number')(value) && !Number.isNaN(value))
export default isNumber
