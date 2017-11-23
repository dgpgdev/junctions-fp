import curry from './curry'
import arrayNotEmpty from './arrayNotEmpty'
/**
* function getItemsInTwoArray
* @func
* @memberOf Junction
*/
const getItemsInTwoArray = curry((a, b, compare) => a.filter(x => arrayNotEmpty(b.filter(y => compare(x)(y)))))
export default getItemsInTwoArray