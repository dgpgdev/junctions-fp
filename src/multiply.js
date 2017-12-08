import curry from './curry'
/**
 * multiply first number by second
 * @memberOf Math
 * @func
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number} result
 * @instance
 * @example {@lang javascript}const result = multiply(4,2) //return 8
 * const result = multiply(4)(2) //return 8
 * const y = multiply(4)
 * const result = y(2)//return 8
 */
const multiply = curry((x, y) => x * y)

export default multiply
