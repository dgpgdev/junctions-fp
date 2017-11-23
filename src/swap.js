import curry from './curry'
/**
* function swap
* @func
* @memberOf Junction
*/
const swap = curry((arr, a, b) => arr.map((it, idx) => (idx === a) ? arr[b] : (idx === b) ? arr[a] : it))
export default swap