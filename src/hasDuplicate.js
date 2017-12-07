import curry from './curry'
import equal from './equal'
import mergeAll from './mergeAll'

const duplicate = array => array.some((a, index, self) => self[index+1] ? self.slice(index+1).some(b => equal(a,b)) : false )
/**
* function hasDuplicate
* @func
* @memberOf Junction
*/
const hasDuplicate = (...array) =>{
    if(arguments.length > 1){
        return duplicate(mergeAll(array))
    }
    return duplicate(arguments[0])
} 
export default hasDuplicate