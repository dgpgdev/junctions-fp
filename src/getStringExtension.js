import getLast from './getLast'
/**
* function getStringExtension
* @func
* @memberOf Junction
*/
const getStringExtension = string => '.' + getLast(string.split('.'))
export default getStringExtension
