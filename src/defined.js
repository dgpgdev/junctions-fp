import curry from './curry'
/**
* function defined
* @func
* @memberOf Junction
*/
const defined = curry(value => value != undefined || value != null || value != '')
export default defined