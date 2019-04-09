import curry from './curry'
import equal from './equal'
/**
 * Interverti les items de la liste
 * @memberOf List
 * @function swapIndex
 * @param {any} a le premier item a intervertir
 * @param {any} b le deuxième item a intervertir
 * @param {array} array la liste des items a testé
 * @returns {array} un nouveau tableau
 * @instance
 * @example {@lang javascript}const items = [1, 2, 3, 4, 5, 6]
swap(3, 5, items)) // return [1, 2, 3, 6, 5, 4]
*/
const swapIndex = curry((aIndex, bIndex, arr) => {
  const newArr = arr.splice(0)
  newArr[aIndex] = arr[bIndex]
  newArr[bIndex] = arr[aIndex]
  return newArr
})
export default swapIndex
