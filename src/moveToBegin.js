import curry from './curry'
/**
* function moveToBegin
* @func
* @memberOf Junction
*/
const moveToBegin = curry(arr => [arr[arr.length - 1], ...arr.filter((item, index) => index != arr.length - 1)])
export default moveToBegin