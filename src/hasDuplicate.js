import equal from './equal'
import mergeAll from './mergeAll'

const duplicate = array => array.some((a, index, self) => self[index + 1] ? self.slice(index + 1).some(b => equal(a, b)) : false)
/**
 * Test si un item ou plus est dupliqué dans la liste
 * @memberOf List
 * @function hasDuplicate
 * @param {array} array la liste des items a testé
 * @returns {boolean}
 * @instance
 * @example {@lang javascript}const x = [1, 2, 3, 4, 5]
const y = [4, 5, 6, 7, 8]
const z = [7, 8, 9, 10, 11]
console.log((hasDuplicate(x, z)) // return false
console.log(hasDuplicate(x, y, z)) // return true
 */
const hasDuplicate = (...array) => {
  if (arguments.length > 1) {
    return duplicate(mergeAll(array))
  }
  return duplicate(arguments[0])
}
export default hasDuplicate
