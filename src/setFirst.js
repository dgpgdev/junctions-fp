import curry from './curry'
import equal from './equal'
/**
* function moveToBegin
* @func
* @memberOf Junction
*/
const setFirst = curry((value, arr) => {
    const index = arr.findIndex(equal(value)) 
    if(index === 0){
        return arr.slice()
    }
    const a = arr.slice(0, index)
    let b = []
    if(index+1 < arr.length){
        b = arr.slice(index+1)
    }
    return [arr[index], ...a, ...b]
})
export default setFirst