import curry from './curry'
import equal from './equal'
/**
* function contain
* @func
* @memberOf Junction
*/
const contain = curry((value, array) => array.some(equal(value)))
export default contain