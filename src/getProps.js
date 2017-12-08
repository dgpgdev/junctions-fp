import curry from './curry'
/**
* function get
* @func
* @memberOf Junction
*/
const getProps = curry((props, item) => Array.isArray(props) ? props.map(x => item[x]) : item[props])
export default getProps
