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
const getLast = curry((arr) => arr.slice(arr.length - 1)[0])
export default getLast
