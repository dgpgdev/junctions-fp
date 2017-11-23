import curry from './curry'
/**
* function has
* @func
* @memberOf Junction
*/
const has = curry((key , item) => item[key] != undefined ? item : false)
export default has