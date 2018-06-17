import curry from './curry'
/**
 * Récupère le dernier item d'une liste
 * @memberOf List
 * @function getLast
 * @param {array} array la liste des items a testé
 * @returns {array} le dernier item
 * @instance
 * @example {@lang javascript}const items = [
{ name: 'dragon', attack: 10 },
{ name: 'troll', attack: 5 },
{ name: 'gobelin', attack: 1 }
]
console.log(getLast(items))
// return { name: 'gobelin', attack: 1 }
 */
const getLast = curry(function (...arr) {
  if (arguments.length > 1) {
    return Array.from(arguments).map(a => a[ a.length - 1 ])
  }
  const a = arr[ 0 ]
  return a[ a.length - 1 ]
})
export default getLast
