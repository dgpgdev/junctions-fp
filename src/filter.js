import curry from './curry'
/**
* function filter
* @func
* @memberOf Junction
*/
const filter = curry((fn, array) => array.filter(fn))
export default filter
