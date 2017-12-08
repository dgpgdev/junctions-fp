import equal from './equal'
import mergeAll from './mergeAll'

const duplicate = array => array.filter((a, index, self) => self[index + 1] && self.slice(index + 1).some(b => equal(a, b)) ? a : false)
/**
 * Récupère une liste d'item dupliqué dans depuis la liste originale
 * @memberOf List
 * @function getDuplicate
 * @param {array} array la liste des items a testé
 * @returns {array} la liste des items dupliqué
 * @example {@lang javascript}const x = [1, 2, 3, 4, 5]
const y = [4, 5, 6, 7, 8]
const z = [7, 8, 9, 10, 11]
console.log(getDuplicate(x, y, z)) // return [4, 5, 7, 8]
console.log(getDuplicate(x, z)) // return[]
 */
const getDuplicate = (...array) => {
  if (arguments.length > 1) {
    return duplicate(mergeAll(array))
  }
  return duplicate(arguments[0])
}
export default getDuplicate
