import lastIndex from './lastIndex'
/**
* function getStringExtension
* @func
* @memberOf Junction
*/
const getStringExtension = string => '.' + lastIndex(string.split('.'))
export default getStringExtension
