import curry from './curry'
import is from './is.js'
/**
* function deepEqual
* @func
* @memberOf Junction
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
