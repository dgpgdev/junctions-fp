import curry from './curry'
/**
 * Récupère le premier item d'une liste
 * @memberOf List
 * @function getFirst
 * @param {array} array la liste des items a testé
 * @returns {array} le premier item
 * @instance
 * @example {@lang javascript}const items = [
{ name: 'dragon', attack: 10 },
{ name: 'troll', attack: 5 },
{ name: 'gobelin', attack: 1 }
]
console.log(getFirst(items))
// return { name: 'dragon', attack: 10 }
 */
const getFirst = curry((arr) => arr.slice(0, 1)[0])
export default getFirst
