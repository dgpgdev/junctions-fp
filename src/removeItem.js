import curry from './curry'
import equal from './equal'
/**
* function removeItem
* @func
* @memberOf Junction
*/
const removeItem = curry((item , array) => array.filter(i => !equal(item)(i)))
export default removeItem