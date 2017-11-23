import curry from './curry'
/**
* function negate
* @func
* @memberOf Junction
*/
const negate = curry((fn , ...args) => !fn.apply(null, args))
export default negate