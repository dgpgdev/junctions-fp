import curry from './curry'
import equal from './equal'
/**
 * deplace l'item definit en dernier dans la liste
 * @memberOf List
 * @function swap
 * @param {array} array la liste des items a testé
 * @returns {array} un nouveau tableau
 * @instance
 * @example {@lang javascript}const items = [1, 2, 3, 4, 5, 6]
const creatures = [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}]
swap(3, 6, items)) // return [1, 2, 6, 4, 5, 3]
swap({name: 'troll', attack: 5}, {name: 'dragon', attack: 10}, y))
// return [
{name: 'troll', attack: 5},
{name: 'dragon', attack: 10},
{name: 'gobelin', attack: 1}
]
*/
const swap = curry((a, b, arr) => {
  const aIndex = arr.findIndex(equal(a))
  const bIndex = arr.findIndex(equal(b))
  const newArr = arr.splice(0)
  newArr[aIndex] = b
  newArr[bIndex] = a
  return newArr
})
export default swap
