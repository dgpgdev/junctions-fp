import curry from './curry'
import flatMap from './flatMap'
/**
* function flatFilter
* @func
* @memberOf Junction
*/
const flatFilter = curry((array, filt) => {
  return flatMap(array, x => x).filter(filt)
})
export default flatFilter
