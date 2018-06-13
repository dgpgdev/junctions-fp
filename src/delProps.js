import curry from './curry'

/**
 * function add
 * @memberOf Math
 * @function add
 * @param {number} x le premier nombre
 * @param {number} y le second nombre
 * @returns {number} le résultat de l'addition
 * @instance
 * @example {@lang javascript}const result = add(10,2) //return 12
 * const result = add(10)(2) //return 12
 * const y = add(10)
 * const result = y(2)//return 12
 */
const delProps = curry((props, item) => {
  const clone = Object.assign(item, {})
  if (Array.isArray(props)) {
    props.forEach(p => {
      delete clone[p]
    })
    return clone
  }
  delete clone[props]
  return clone
})
export default delProps
