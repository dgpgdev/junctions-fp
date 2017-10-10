import {
    is
} from './Relation'


/**
 * get property on object
 * @param {*} key 
 * @return {*} value
 */
const get = key => item => item[key] != undefined ? item[key] : false

/**
 * detect if item has property
 * @param {*} key string or int
 * @return {object} item
 */
const has = key => item => item[key] != undefined ? item : false

/**
 * 
 * @param {*} item 
 */
const modify = (property, value) => item => {
    item[property] = value
    return item
}

const merge = (x, y) => (is('array')(x) && is('array')(y)) ? [...x, ...y] : Object.assign(x, y);

const mergeAll = array => array.reduce((a, b) => merge(a, b))

export {
    has,
    get,
    modify,
    merge,
    mergeAll
}