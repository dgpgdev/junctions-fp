import curry from './curry'
/**
* function filter
* @func
* @memberOf Junction
*/
const filter = curry((fn, array) => array.map(fn))
export default filter