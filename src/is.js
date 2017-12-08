import curry from './curry'
/**
 * test value with type
 * @memberOf Relation
 * @function is
 * @param {string} type le type a testé
 * @param {any} value la valeur a testé
 * @returns {boolean} true si la valeur est bien du type précisé
 * @instance
 * @example {@lang javascript}const result = is('string', 'gandalf') // return true
 */
const is = curry((type, value) => (type === 'array') ? Array.isArray(value) : typeof value === type)
export default is
