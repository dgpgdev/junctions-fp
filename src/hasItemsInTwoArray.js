import curry from './curry'
/**
* function hasItemsInTwoArray
* @func
* @memberOf Junction
*/
const hasItemsInTwoArray = curry((a, b, compare) => a.some(x => b.some(y => compare(x)(y))))
export default hasItemsInTwoArray