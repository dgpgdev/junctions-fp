import curry from './curry'
/**
* function all
* @func
* @memberOf Junction
*/
const all = curry((filter, array) => array.every(filter))
export default all
