import curry from './curry'
import isNumber from './isNumber'
/**
 * test une une valeur est strictement supérieur a une autre
 * @memberOf Relation
 * @function gt
 * @param {any} limit la référence du test de supériorité
 * @param {any} value la valeur a testé, si la valeur est un tableau ou une chaine, compare la longueur a la valeur de référence
 * @returns {boolean} renvoit true si la valeur est strictement supérieur
 * @instance
 * @example {@lang javascript}const limit = gt(10)
console.log((limit(11)) // return true
console.log((limit(10)) // return false
console.log((limit(9)) // return false
 */
const gt = curry((limit, value) => isNumber(value) ? value > limit : value.length > limit)
export default gt
