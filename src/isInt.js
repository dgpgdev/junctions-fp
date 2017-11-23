import curry from './curry'
/**
* function isInt
* @func
* @memberOf Junction
*/
const isInt = curry(value => Number.isInteger(value))
export default isInt