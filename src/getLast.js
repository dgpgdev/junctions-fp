import curry from './curry'
/**
* function lastIndex
* @func
* @memberOf Junction
*/
const getLast = curry((arr) => arr.slice(arr.length - 1)[0])
export default getLast
