import curry from './curry'
import compose from './compose'
import gt from './gt'
import arraySize from './arraySize'
/**
* function arrayNotEmpty
* @func
* @memberOf Junction
*/
const arrayNotEmpty = compose(gt(0), arraySize)
export default arrayNotEmpty