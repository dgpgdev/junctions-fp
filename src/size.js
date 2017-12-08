/**
 * Récupère la taille du tabbleau
 * @memberOf List
 * @function size
 * @param {array|string} value la chaine ou le tableau
 * @returns {integer} la taille du tableau
 * @example {@lang javascript}console.log(size([1, 2, 3])) //return 3
 *console.log(size('123')) //return 3
 */
const size = value => value.length
export default size
