import curry from './curry'
import equal from './equal'
/**
 * Récupère une liste sans l'item passé en paramètre
 * @memberOf List
 * @function removeItem
 * @param {array} array la liste des items a testé
 * @returns {array} la liste des items dupliqué
 * @example {@lang javascript}const items = [
{ name: 'dragon', attack: 10 },
{ name: 'troll', attack: 5 },
{ name: 'gobelin', attack: 1 }
]
console.log(removeItem({ name: 'troll', attack: 5 }, items))
// return [
// { name: 'dragon', attack: 10 },
// { name: 'gobelin', attack: 1 }
// ]
 */
const removeItem = curry((item, array) => array.filter(i => !equal(item)(i)))
export default removeItem
