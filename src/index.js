import {
    arraySize,
    arrayNotEmpty,
    arrayIsEmpty,
    arrayContain,
    hasItemsInTwoArray,
    getItemsInTwoArray,
    excludeItemsInTwoArray,
    excludeDuplicate,
    removeItem,
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
} from './junctions/List'

import {
    compose,
    pipe,
    negate,
    curry,
    debounce
} from './junctions/Function'

import {
    multiply,
    add,
    diff,
    divide
} from './junctions/Math'

import {
    has,
    get,
    modify,
    merge,
    mergeAll
} from './junctions/Object'

import {
    is,
    isString,
    notDefined,
    defined,
    isInt,
    isNumber,
    gt,
    gte,
    lt,
    lte,
    validConditions,
    equal
} from './junctions/Relation'

import {
    getStringExtension,
    isValidEmail,
    isValidUrl,
    containDigit,
    notContainDigit,
    trim,
    escapeRegExp
} from './junctions/StringUtils'

module.exports = {
    //List
    arraySize,
    arrayNotEmpty,
    arrayIsEmpty,
    arrayContain,
    hasItemsInTwoArray,
    getItemsInTwoArray,
    excludeItemsInTwoArray,
    excludeDuplicate,
    removeItem,
    lastIndex,
    firstIndex,
    moveToBegin,
    moveToEnd,
    map,
    filter,
    pluck,
    flatMap,
    flatFilter,
    all,
    ///Function
    compose,
    pipe,
    negate,
    curry,
    debounce,
    //Math
    multiply,
    add,
    diff,
    divide,
    //Object,
    has,
    get,
    modify,
    merge,
    mergeAll,
    //Relation,
    is,
    isString,
    notDefined,
    defined,
    isInt,
    isNumber,
    gt,
    gte,
    lt,
    lte,
    validConditions,
    equal,
    //StringUtils
    getStringExtension,
    isValidEmail,
    isValidUrl,
    containDigit,
    notContainDigit,
    trim,
    escapeRegExp
}