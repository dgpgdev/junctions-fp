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
const z = [48, 45, 47]
console.log((flatFilter(x, [y, z])) // return [46, 48, 47]
 */
const filter = curry((fn, array) => array.filter(fn))
export default filter
