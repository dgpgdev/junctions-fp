import curry from './curry'
import map from './map'
import getProp from './getProp'
/**
* function pluck
* @func
* @memberOf Junction
*/
const pluck = curry((property, array) => map(getProp(property))(array))
export default pluck
