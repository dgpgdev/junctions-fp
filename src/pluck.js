import curry from './curry'
import map from './map'
import get from './get'
/**
* function pluck
* @func
* @memberOf Junction
*/
const pluck = curry((property, array) => map(get(property))(array))
export default pluck
