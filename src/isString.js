import curry from './curry'
import is from './is'
/**
* function isString
* @func
* @memberOf Junction
*/
const isString = curry(value =>  is('string')(value))
export default isString