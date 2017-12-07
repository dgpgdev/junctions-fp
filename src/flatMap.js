import curry from './curry'
/**
* function flatMap
* @func
* @memberOf Junction
*/
const flatMap = curry((array, mapper) => {
  return Array.isArray(array) ? [].concat(...array.map(x => flatMap(x, mapper))) : mapper(array)
})
export default flatMap
