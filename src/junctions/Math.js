/**
 * multiply values
 * @param {*} x 
 */
const multiply = x => y => x * y

/**
 * add Values, if values are a string, concat and return new String, 
 * if values are Numbers return result
 * @function
 * @param {number | string} x first value
 * @return {function}
 */
const add = x =>
    /**
     * second function called
     * @function
     * @param {number | string} y second value
     * @return {number | string} result
     */
    y => x + y


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