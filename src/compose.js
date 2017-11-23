/**
* function compose
* @func
* @memberOf Junction
*/
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))

export default compose