import curry from './curry'
import map from './map'
import getProps from './getProps'
/**
 * Récupère toute les valeur definit par property dans les objets d'une liste
 * @memberOf List
 * @function pluck
 * @param {string} property le nom de pa propriété
 * @param {array} array la liste des items a testé
 * @returns {array} un nouveau tableau contenant toute les valeurs des propriétés
 * @instance
 * @example {@lang javascript}const items = [{ name: 'dragon', attack: 10 }, { name: 'troll', attack: 5 }, { name: 'gobelin', attack: 1 }]
console.log((pluck('name', items)) // return ['dragon', 'troll', 'gobelin']
 */
const pluck = curry((property, array) => map(getProps(property))(array))
export default pluck
