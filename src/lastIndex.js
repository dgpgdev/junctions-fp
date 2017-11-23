import curry from './curry'
/**
* function lastIndex
* @func
* @memberOf Junction
*/
const lastIndex = curry((arr) => arr.slice(arr.length - 1)[0])
export default lastIndex