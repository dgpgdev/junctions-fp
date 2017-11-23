import curry from './curry'
/**
* function get
* @func
* @memberOf Junction
*/
const get = curry((key, item) => item[key] != undefined ? item[key] : false)
export default get