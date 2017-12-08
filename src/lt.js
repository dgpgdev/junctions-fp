import curry from './curry'
import isNumber from './isNumber'

/**
 * test une une valeur est strictement inférieur a une autre
 * @memberOf Relation
 * @function lt
 * @param {any} limit la référence du test d'infériorité
 * @param {any} value la valeur a testé, si la valeur est un tableau ou une chaine, compare la longueur a la valeur de référence
 * @returns {boolean} renvoit true si la valeur est strictement inférieur
 * @instance
 * @example {@lang javascript}const limit = lt(10)
console.log((limit(11)) // return false
console.log((limit(10)) // return false
console.log((limit(9)) // return true
 */
const lt = curry((limit, value) => isNumber(value) ? value < limit : value.length < limit)
export default lt
