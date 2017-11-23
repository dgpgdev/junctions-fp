import curry from './curry'
import is from './is'
/**
* function isNumber
* @func
* @memberOf Junction
*/
const isNumber = curry(value => is('number')(value) && !Number.isNaN(value))
export default isNumber