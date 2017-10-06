import {
    is
} from './Relation'

const merge = (x, y) => (is('array')(x) && is('array')(y)) ? [...x, ...y] : Object.assign(x, y);

const mergeAll = array => array.reduce((a, b) => merge(a, b))

export {
    merge,
    mergeAll
}