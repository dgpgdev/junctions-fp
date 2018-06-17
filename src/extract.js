import curry from './curry'
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
const extract = curry((property, object) => {
  const clone = {}
  if (Array.isArray(property)) {
    property.forEach(prop => (clone[ prop ] = object[ prop ]))
    return clone
  }
  clone[ property ] = object[ property ]
  return clone
})
export default extract
