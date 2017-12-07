import equal from './equal'
import mergeAll from './mergeAll'

const duplicate = array => array.filter((a, index, self) => self.findIndex((b) => equal(a)(b)) === index)
/**
* function excludeDuplicate
* @func
* @memberOf Junction
*/
const excludeDuplicate = (...array) => {
  if (arguments.length > 1) {
    return duplicate(mergeAll(array))
  }
  return duplicate(arguments[0])
}
export default excludeDuplicate
