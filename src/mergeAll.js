import curry from './curry'
import merge from './merge'
/**
* function mergeAll
* @func
* @memberOf Junction
*/
const mergeAll = curry(array => array.reduce((a, b) => merge(a, b)))
export default mergeAll