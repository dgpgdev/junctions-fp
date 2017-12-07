import curry from './curry'

/**
 * divide first number by second
 * @memberOf Math
 * @func
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number} result divide result
 * @example {@lang javascript} const result = divide(10,2) //return 5
 * const result = divide(10)(2) //return 5
 * const y = divide(10)
 * const result = y(2)//return 5
 */
const divide = curry((x, y) => x / y)
export default divide
