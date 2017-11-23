import curry from './curry'
import compose from './compose'
import equal from './equal'
import arraySize from './arraySize'
/**
* function arrayIsEmpty
* @func
* @memberOf Junction
*/
const arrayIsEmpty = compose(equal(0), arraySize)
export default arrayIsEmpty