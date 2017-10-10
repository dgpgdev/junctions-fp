import {
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
} from './junctions/List'

import {
    compose,
    pipe,
    negate,
    curry
} from './junctions/Function'

import {
    multiply,
    add,
    diff
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
    trim
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
    //Math
    multiply,
    add,
    diff,
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
    trim
}