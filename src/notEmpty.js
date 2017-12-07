import compose from './compose'
import gt from './gt'
import size from './size'
/**
* function notEmpty
* @func
* @memberOf Junction
*/
const notEmpty = compose(gt(0), size)
export default notEmpty
