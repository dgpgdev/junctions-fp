import curry from './curry'
import equal from './equal'
/**
* function setLast
* @func
* @memberOf Junction
*/
const setLast = curry((value, arr) => {
  const index = arr.findIndex(equal(value))
  if (index === arr.length - 1) {
    return arr.slice()
  }
  const a = arr.slice(0, index)
  let b = []
  if (index + 1 < arr.length) {
    b = arr.slice(index + 1)
  }
  return [...a, ...b, arr[index]]
})
export default setLast
