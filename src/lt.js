import curry from './curry'
import isString from './isString'

/**
* function lt
* @func
* @memberOf Junction
*/
const lt = curry((limit, value) => isString()(value) ? value.trim().length < limit : value < limit)
export default lt
