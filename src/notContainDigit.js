import curry from './curry'
import containDigit from './containDigit'
/**
* function notContainDigit
* @func
* @memberOf Junction
*/
const notContainDigit = curry(value => !containDigit(value))
export default notContainDigit
