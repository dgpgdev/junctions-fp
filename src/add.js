import curry from './curry'

/**
 * function add
 * @memberOf Math
 * @function add
 * @param {number} x le premier nombre
 * @param {number} y le second nombre
 * @returns {number} le résultat de l'addition
 * @instance
 * @example {@lang javascript}const result = add(10,2) //return 12
 * const result = add(10)(2) //return 12
 * const y = add(10)
 * const result = y(2)//return 12
 */
const add = curry((x, y) => x + y)
export default add
