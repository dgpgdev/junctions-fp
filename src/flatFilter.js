import curry from './curry'
import flatMap from './flatMap'
/**
 * fusionne tout les tableaux en un seul et applique la fonction de filtrage sur chaque element du tableau
 * @memberOf List
 * @function flatFilter
 * @param {function} fn la fonction de filtrage
 * @param {array} array la liste de tableau a convertir
 * @returns {array} un nouveau tableau a une dimension modifié
 * @instance
 * @example {@lang javascript}const x = item => item > 45
const y = [43, 45, 46]
const z = [48, 45, 47]
console.log((flatFilter(x, [y, z])) // return [46, 48, 47]
 */
const flatFilter = curry((f, array) => {
  return flatMap(x => x, array).filter(f)
})
export default flatFilter
