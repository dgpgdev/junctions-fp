import compose from './compose'
import equal from './equal'
import size from './size'
/**
 * Test si une liste ou une chaine est vide
 * @memberOf List
 * @function empty
 * @param {array|string} value la valeur a tester
 * @returns {boolean}
 * @example {@lang javascript}const x = []
 *const y = [1, 2, 3]
 *console.log(empty(x)) // return true
 *console.log(empty(y)) // return false
 */
const empty = compose(equal(0), size)
export default empty
