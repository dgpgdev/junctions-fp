import curry from './curry'
import isString from './isString'
/**
* function gt
* @func
* @memberOf Junction
*/
const gte = curry((limit, value) => isString(value) ? value.trim().length >= limit : value >= limit)
export default gte
