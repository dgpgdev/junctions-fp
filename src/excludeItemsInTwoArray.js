import curry from './curry'
import merge from './merge'
import arrayIsEmpty from './arrayIsEmpty'
/**
* function excludeItemsInTwoArray
* @func
* @memberOf Junction
*/
const excludeItemsInTwoArray = curry((a, b, compare) => merge(a, b.filter(x => arrayIsEmpty(a.filter(y => compare(x)(y))))))
export default excludeItemsInTwoArray