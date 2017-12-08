import curry from './curry'
import equal from './equal'
/**
 * deplace l'item definit en dernier dans la liste
 * @memberOf List
 * @function setLast
 * @param {array} array la liste des items a testé
 * @returns {array} un nouveau tableau
 * @instance
 * @example {@lang javascript}const x = [1, 2, 3, 4, 5]
const y = [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}]
console.log((setLast(4, x)) // return [1, 2, 3, 5, 4]
console.log((setLast(5, x)) // return [1, 2, 3, 4, 5]
console.log((setLast(1, x)) // return [2, 3, 4, 5, 1]

console.log((setLast({name: 'troll', attack: 5}, y)) // return [{name: 'dragon', attack: 10}, {name: 'gobelin', attack: 1}, {name: 'troll', attack: 5}]
console.log((setLast({name: 'gobelin', attack: 1}, y)) // return [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}]
console.log((setLast({name: 'dragon', attack: 10}, y)) // return [{name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}, {name: 'dragon', attack: 10}]
 */
const setLast = curry((value, arr) => {
  const index = arr.findIndex(equal(value))
  if (index === arr.length - 1) {
    return arr.slice()
  }
  const a = arr.slice(0, index)
  let b = []
  if (index + 1 < arr.length) {
    b = arr.slice(index + 1)
  }
  return [...a, ...b, arr[index]]
})
export default setLast
