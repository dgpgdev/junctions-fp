import curry from './curry'
/**
 * function substract
 * @memberOf Math
 * @function add
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number} substract result
 * @example {@lang javascript}const result = substract(10,2) //return 8
 * const result = substract(10)(2) //return 8
 * const y = substract(10)
 * const result = y(2)//return 8
 */
const substract = curry((x, y) => x - y)
export default substract
