import curry from './curry'
/**
 * Filtre les donné d'une liste via une condition
 * @memberOf List
 * @function filter
 * @param {function} fn la fonction de filtrage
 * @param {array} array la liste des items a testé
 * @returns {array} un nouveau tableau
 * @instance
 * @example {@lang javascript}const x = item => item > 45
const y = [43, 45, 46]
console.log((filter(x, y)) // return [43]
 */
const filter = curry((fn, array) => array.filter(fn))
export default filter
