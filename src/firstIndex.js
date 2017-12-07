import curry from './curry'
/**
* function firstIndex
* @func
* @memberOf Junction
*/
const firstIndex = curry((arr) => arr.slice(0, 1)[0])
export default firstIndex
