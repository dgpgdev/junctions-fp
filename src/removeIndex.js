import curry from './curry'
import equal from './equal'
/**
* function removeItem
* @func
* @memberOf Junction
*/
const removeIndex = curry((index, array) => array.filter((i, ind) => !equal(ind)(index)))
export default removeIndex
