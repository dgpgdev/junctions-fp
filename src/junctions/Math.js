/**
 * multiply values
 * @param {*} x 
 */
const multiply = x => y => x * y

/**
* add Value, if values are array, concat and return array, 
if values are object assign properties and return an Object
* @param {*} x 
*/
const add = x => y => x + y


//const apply = item => apply => 

/**
 * return difference between 2 values
 * @param {*} x 
 */
const diff = x => y => x - y

export {
    multiply,
    add,
    diff
}