import curry from './curry'
/**
 * Test si un item ou plus remplit les condition passé
 * @memberOf List
 * @function any
 * @param {function} x la condition du test
 * @param {array} y la liste des items a testé
 * @returns {boolean}
 * @example {@lang javascript}const x = item => item > 42
 *const y = [43, 45, 46]
 *const z = [43, 45, 41]
 *console.log(any(x, y)) // return true
 *console.log(any(x, z)) // return true
 */
const any = curry((filter, array) => array.some(filter))
export default any
