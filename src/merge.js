import curry from './curry'
import is from './is'
/**
* function merge
* @func
* @memberOf Junction
*/
const merge = curry((x, y) => (is('array')(x) && is('array')(y)) ? [...x, ...y] : Object.assign(x, y))
export default merge