import curry from './curry'

/**
 * modulo first number by second
 * @memberOf Math
 * @func
 * @param {number} x first number
 * @param {number} y second number
 * @returns {number} return modulo result
 * @example {@lang javascript} const result = modulo(7,2) //return 1
 */
const modulo = curry((x, y) => x % y)
export default modulo