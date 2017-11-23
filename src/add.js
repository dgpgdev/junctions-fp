import curry from './curry'
/**
 * function add
 * @func
 * @param {number} x le premier nombre
 * @param {number} y le second nombre
 * @returns {number} le résultat de l'addition
 */
const add = curry((x, y) => x + y)
export default add