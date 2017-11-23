import curry from './curry'
/**
* function moveToEnd
* @func
* @memberOf Junction
*/
const moveToEnd = curry(arr => [...arr.filter((item, index) => index != 0), arr[0]])
export default moveToEnd