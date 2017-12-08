import curry from './curry'
import is from './is.js'
/**
 * test une egalité qu'elle soit simple ou complexe entre deux éléments
 * @memberOf Relation
 * @function equal
 * @param {any} a le premier élément
 * @param {any} b le deuxième élement
 * @returns {boolean} renvoit true si l'egalité est vérifié
 * @instance
 * @example {@lang javascript}const x = 42
const y = 'Gandalf'
const z = { name: 'dragon', attack: 10 }
console.log(equal(x, 42)) // return true
console.log(equal(y, 'Gandalf')) // return true
console.log(equal(z, { name: 'dragon', attack: 10 })) // return true
 */
const equal = curry((a, b) => {
  const isObject = is('object')
  if (isObject(a) && isObject(b)) {
    let count = [0, 0]
    let key
    for (key in a) count[0]++
    for (key in b) count[1]++
    if (!equal(0)(count[0] - count[1])) {
      return false
    }
    for (key in a) {
      if (!(key in b) || !equal(a[key])(b[key])) {
        return false
      }
    }
    for (key in b) {
      if (!(key in a) || !equal(b[key])(a[key])) {
        return false
      }
    }
    return true
  } else {
    return a === b
  }
})
export default equal
