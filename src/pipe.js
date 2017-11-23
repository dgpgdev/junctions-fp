/**
* function pipe
* @func
* @memberOf Junction
*/
const pipe = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))
export default pipe