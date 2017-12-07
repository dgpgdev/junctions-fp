import curry from './curry'
/**
* function map
* @func
* @memberOf Junction
*/
const map = curry((fn, array) => array.map(fn))
export default map
