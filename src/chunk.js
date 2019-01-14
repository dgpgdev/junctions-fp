import curry from './curry'
/**
 * Test si une liste ou une chaine est vide
 * @memberOf List
 * @function contain
 * @param {array|string} value la valeur a tester
 * @returns {boolean}
 * @instance
 * @example {@lang javascript}const x = [1, 2, 3, 4, 5]
 *console.log(contain(4, x)) // return true
 *console.log(contain(8, x)) // return false
 */
const chunk = curry((array, chunkSize) => {
  return array.reduce((previous, current, index, src) => {
    if (!(index % chunkSize)) {
      return [...previous, src.slice(index, index + chunkSize)]
    }
    return previous
  }, [])
})

export default chunk
