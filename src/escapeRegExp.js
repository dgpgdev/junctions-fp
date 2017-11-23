import curry from './curry'
/**
* function escapeRegExp
* @func
* @memberOf Junction
*/
const escapeRegExp = (string) => string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
export default escapeRegExp