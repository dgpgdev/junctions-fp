import curry from './curry'
/**
* function flatMap
* @func
* @memberOf Junction
*/
const flatMap = curry((mapper, array) => {
  return Array.isArray(array) ? [].concat(...array.map(x => flatMap(mapper, x))) : mapper(array)
})
export default flatMap
