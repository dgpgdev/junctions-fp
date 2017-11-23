import curry from './curry'
/**
* function is
* @func
* @memberOf Junction
*/
const is = curry((type, value )=> (type === 'array') ? Array.isArray(value) : typeof value === type)
export default is