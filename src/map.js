import curry from './curry'
/**
 * transforme les donnée d'une liste via une condition
 * @memberOf List
 * @function map
 * @param {function} fn la fonction de filtrage
 * @param {array} array la liste des items a testé
 * @instance
 * @returns {array} un nouveau tableau de données transformés
 * @instance
 * @example {@lang javascript}  const x = item => item + 1
const y = [43, 45, 46]
console.log((map(x, y)) // return [44, 46, 47]
 */
const map = curry((fn, array) => array.map(fn))
export default map
