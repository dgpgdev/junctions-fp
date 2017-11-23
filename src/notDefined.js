import curry from './curry'
/**
* function notDefined
* @func
* @memberOf Junction
*/
const notDefined = curry(value => value === undefined || value === null || value === '')
export default notDefined