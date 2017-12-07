import curry from './curry'
/**
* function split
* @func
* @memberOf Junction
*/
const split = curry((separator, string) => string.split(separator))
export default split
