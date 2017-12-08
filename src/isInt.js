import curry from './curry'
/**
 * test la valeur est un Integer
 * @memberOf Relation
 * @function isInt
 * @param {any} value la valeur a testé
 * @returns {boolean} true si la valeur est un entier
 * @instance
 * @example {@lang javascript}const result = isInt(42) //return true
 */
const isInt = curry(value => Number.isInteger(value))
export default isInt
