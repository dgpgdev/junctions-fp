import curry from './curry'
/**
* function get
* @func
* @memberOf Junction
*/
const getProp = curry((key, item) => item[key] !== undefined ? item[key] : null)
export default getProp
