import curry from './curry'
/**
* function modify
* @func
* @memberOf Junction
*/
const modify = curry((property, value, item) => {
    item[property] = value
    return item})
export default modify