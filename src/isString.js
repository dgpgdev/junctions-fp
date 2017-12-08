import curry from './curry'
import is from './is'
/**
 * Test si la valeur est bien une chaine
 * @memberOf Relation
 * @function isString
 * @param {any} value la valeur a testé
 * @returns {boolean} true si la valeur est une chaine
 * @instance
 * @example {@lang javascript}const result = isString('gandalf') // return true
 */
const isString = curry(value => is('string')(value))
export default isString
