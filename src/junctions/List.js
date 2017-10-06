import {
    get,
    compose
} from './Functions'
import {
    gt,
    equal
} from './Relation'
/**
 * get size of array
 * @param {*} a first array
 * @param {*} b second array
 * 
 */
const arraySize = get('length')

/**
 * Detect if array is not empty
 */
const arrayNotEmpty = compose(gt(0), arraySize)

/**
 * Detect if array is not empty
 */
const arrayIsEmpty = compose(equal(0), arraySize)

/**
 * delegate map array method
 * @param {*} fn 
 */
const map = fn => array => array.map(fn)

/**
 * delegate filter
 * @param {*} fn 
 */
const filter = fn => array => array.filter(fn)

/**
 * search if a item valid compare function
 * @param {*} compare function to test
 */
const arrayContain = compare => array => array.some(compare)

/**
 * Compare two array with compare function
 * @param {*} a first array
 * @param {*} b second array
 * @param {*} compare function to test
 * @return {boolean} 
 */
const hasItemsInTwoArray = (a, b, compare) => a.some(x => b.some(y => compare(x)(y)))

/**
 * Compare two array with compare function 
 * and return an array with result
 * @param {*} a first array
 * @param {*} b second array
 * @param {*} compare function to test
 * @return {array} 
 */
const getItemsInTwoArray = (a, b, compare) => a.filter(x => arrayNotEmpty(b.filter(y => compare(x)(y))))

/**
 * Compare two array with compare function 
 * and return an array without Items entries
 * @param {*} a first array
 * @param {*} b second array
 * @param {*} compare function to test
 * @return {array} 
 */
const excludeItemsInTwoArray = (a, b, compare) => add(a)(b.filter(x => arrayIsEmpty(a.filter(y => compare(x)(y)))))

/**
 * swap two items in array
 * @param {*} arr 
 * @param {*} a 
 * @param {*} b 
 */
const swap = (arr, a, b) => arr.map((it, idx) => (idx === a) ? arr[b] : (idx === b) ? arr[a] : it);

/**
 * move last array item to first
 * @param {*} arr 
 */
const moveToBegin = (arr) => {
    return [arr[arr.length - 1], ...arr.filter((item, index) => index != arr.length - 1)]
}

/**
 * move first array item to last
 * @param {*} arr 
 */
const moveToEnd = (arr) => {
    return [...arr.filter((item, index) => index != 0), arr[0]]
}

/**
 * get last array value
 * @param {*} arr 
 */
const lastIndex = (arr) => arr.slice(arr.length - 1)

/**
 * get last array value
 * @param {*} arr 
 */
const firstIndex = (arr) => arr.slice(0, 1)[0]

/**
 * convert string to Array
 * @param {string} separator 
 */
const split = separator => string => string.split(separator)

/**
 * Return a list value from property
 * @param {*} property 
 */
const pluck = property => array => map(get(property))(array)

/**
 * reverse list
 * @param {*} array 
 */
const reverse = array => array.reverse();

/**
 * test all list value valid filter
 * @param {*} filter 
 */
const all = filter => array => array.every(filter)

/**
 * test if one or more value valid filter
 * @param {*} filter 
 */
const any = filter => array => array.some(filter)


//const flat = (array) => Array.isArray(array) ? [].concat(...array)


/**
 * flat map
 * @param {*} value 
 * @param {*} mapper 
 */
const flatMap = (array, mapper) => {
    return Array.isArray(array) ? [].concat(...array.map(x => flatMap(x, mapper))) : mapper(array);
}

/**
 * flat map
 * @param {*} value 
 * @param {*} mapper 
 */
const flatFilter = (array, filt) => {
    return flatMap(array, x => x).filter(filt)
}


export {
    arraySize,
    arrayNotEmpty,
    arrayIsEmpty,
    arrayContain,
    hasItemsInTwoArray,
    getItemsInTwoArray,
    excludeItemsInTwoArray,
    lastIndex,
    firstIndex,
    moveToBegin,
    moveToEnd,
    map,
    filter,
    pluck,
    flatMap,
    flatFilter,
    all

}