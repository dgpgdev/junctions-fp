import curry from './curry'
import equal from './equal'
/**
* function excludeDuplicate
* @func
* @memberOf Junction
*/
const excludeDuplicate = curry(array => array.filter((a, index, self) => self.findIndex((b) => equal(a)(b)) === index))
export default excludeDuplicate