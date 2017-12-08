import curry from './curry'
import equal from './equal'
/**
 * deplace l'item definit en premier dans la liste
 * @memberOf List
 * @function setFirst
 * @param {array} array la liste des items a testé
 * @returns {array} un nouveau tableau
 * @instance
 * @example {@lang javascript}const x = [1, 2, 3, 4, 5]
const y = [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}]
console.log(setFirst(4)(x)) // return [4, 1, 2, 3, 5])
console.log(setFirst(1, x)) // return [1, 2, 3, 4, 5])
console.log(setFirst(5, x)) // return [5, 1, 2, 3, 4])

console.log(setFirst({name: 'troll', attack: 5}, y)) // return [{name: 'troll', attack: 5}, {name: 'dragon', attack: 10}, {name: 'gobelin', attack: 1}])
console.log(setFirst({name: 'dragon', attack: 10}, y)) // return [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}])
console.log(setFirst({name: 'gobelin', attack: 1}, y)) // return [{name: 'gobelin', attack: 1}, {name: 'dragon', attack: 10}, {name: 'troll', attack: 5}])
 */
const setFirst = curry((value, arr) => {
  const index = arr.findIndex(equal(value))
  if (index === 0) {
    return arr.slice()
  }
  const a = arr.slice(0, index)
  let b = []
  if (index + 1 < arr.length) {
    b = arr.slice(index + 1)
  }
  return [arr[index], ...a, ...b]
})
export default setFirst
