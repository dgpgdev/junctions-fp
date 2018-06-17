import curry from './curry'
/**
* function modify
* @func
* @memberOf Junction
*/
const modify = curry((property, value, item) => {
  const clone = { ...item }
  clone[ property ] = value
  return clone
})
export default modify
