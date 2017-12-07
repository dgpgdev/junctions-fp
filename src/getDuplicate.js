import equal from './equal'
import mergeAll from './mergeAll'

const duplicate = array => array.filter((a, index, self) => self[index + 1] && self.slice(index + 1).some(b => equal(a, b)) ? a : false)
/**
* function hasDuplicate
* @func
* @memberOf Junction
*/
const getDuplicate = (...array) => {
  if (arguments.length > 1) {
    return duplicate(mergeAll(array))
  }
  return duplicate(arguments[0])
}
export default getDuplicate
