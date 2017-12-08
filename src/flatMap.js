import curry from './curry'
/**
 * fusionne tout les tableaux en un seul et applique la fonction de modification sur chaque element du tableau
 * @memberOf List
 * @function flatMap
 * @param {function} fn la fonction de modification
 * @param {array} array la liste de tableau a convertir
 * @returns {array} un nouveau tableau a une dimension modifié
 * @instance
 * @example {@lang javascript}const x = item => item + 1
const y = [44, 45, 46]
const z = [47, 48, 49]
console.log((flatMap(x, [y, z])) // return [45, 46, 47, 48, 49, 50]
 */
const flatMap = curry((fn, array) => {
  return Array.isArray(array) ? [].concat(...array.map(x => flatMap(fn, x))) : fn(array)
})
export default flatMap
