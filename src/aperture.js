
/**
 * Récupère une liste sans item dupliqué dans depuis la liste originale
 * @memberOf List
 * @function excludeDuplicate
 * @param {array} array la liste des items a testé
 * @returns {array} la liste des items non dupliqué
 * @instance
 * @example {@lang javascript}const x = [1, 2, 3, 4, 5]
 */
const aperture = (size, array) => {
  let a = []
  array.reduce((acc, current, index, array) => {
    if (index % size === 0) {
      a = []
    }
  }, [])
}
export default aperture
