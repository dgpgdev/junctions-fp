import curry from './curry'
/**
* function any
* @func
* @memberOf Junction
*/
const any = curry((filter, array) => array.some(filter))
export default any
