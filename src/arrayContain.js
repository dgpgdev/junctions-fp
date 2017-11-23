import curry from './curry'
/**
* function arrayContain
* @func
* @memberOf Junction
*/
const arrayContain = curry((compare, array) => array.some(compare))
export default arrayContain