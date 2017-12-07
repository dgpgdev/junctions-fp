import compose from './compose'
import equal from './equal'
import size from './size'
/**
* function empty
* @func
* @memberOf Junction
*/
const empty = compose(equal(0), size)
export default empty
