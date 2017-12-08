import curry from './curry'
/**
 * function all
 * @memberOf List
 * @function all
 * @param {function} x la condition de test
 * @param {array} y le list des items a testé
 * @returns {boolean} si toute les conditions sont validé
 * @instance
 * @example {@lang javascript}const x = item => item > 42
 *const y = [43, 45, 46]
 *const z = [43, 45, 41]
 *console.log(all(x, y)) // return true
 *console.log(all(x, z)) // return false
 */
const all = curry((filter, array) => array.every(filter))
export default all
