import curry from './curry'
import isString from './isString'
/**
* function lte
* @func
* @memberOf Junction
*/
const lte = curry((limit, value) => isString()(value) ? value.trim().length <= limit : value <= limit)
export default lte
