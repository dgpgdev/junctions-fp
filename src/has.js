import curry from './curry'
import defined from './defined'
/**
* function has
* @func
* @memberOf Junction
*/
const has = curry((key, item) => defined(item[key]))
export default has
