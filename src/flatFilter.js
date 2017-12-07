import curry from './curry'
import flatMap from './flatMap'
/**
* function flatFilter
* @func
* @memberOf Junction
*/
const flatFilter = curry((f, array) => {
  return flatMap(x => x, array).filter(f)
})
export default flatFilter
