import curry from './curry'
import map from './map'
import getProps from './getProps'
/**
* function pluck
* @func
* @memberOf Junction
*/
const pluck = curry((property, array) => map(getProps(property))(array))
export default pluck
