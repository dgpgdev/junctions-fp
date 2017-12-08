import equal from './equal'
import mergeAll from './mergeAll'

const duplicate = array => array.filter((a, index, self) => self.findIndex((b) => equal(a)(b)) === index)
/**
 * Récupère une liste sans item dupliqué dans depuis la liste originale
 * @memberOf List
 * @function excludeDuplicate
 * @param {array} array la liste des items a testé
 * @returns {array} la liste des items non dupliqué
 * @instance
 * @example {@lang javascript}const x = [1, 2, 3, 4, 5]
const y = [4, 5, 6, 7, 8]
const z = [7, 8, 9, 10, 11]

const a = [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}]
const b = [{name: 'dragon', attack: 10}, {name: 'kevin', attack: 3}, {name: 'jedi', attack: 6}]

console.log(excludeDuplicate(x, y, z)) // return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
console.log(excludeDuplicate(a, b))
// return
// [{ name: 'dragon', attack: 10 },
// { name: 'troll', attack: 5 },
// { name: 'gobelin', attack: 1 },
// { name: 'kevin', attack: 3 },
// { name: 'jedi', attack: 6 }]
 */
const excludeDuplicate = (...array) => {
  if (arguments.length > 1) {
    return duplicate(mergeAll(array))
  }
  return duplicate(arguments[0])
}
export default excludeDuplicate

