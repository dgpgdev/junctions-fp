'use strict';

var _List = require('./junctions/List');

var _Function = require('./junctions/Function');

var _Math = require('./junctions/Math');

var _Object = require('./junctions/Object');

var _Relation = require('./junctions/Relation');

var _StringUtils = require('./junctions/StringUtils');

module.exports = {
    //List
    arraySize: _List.arraySize,
    arrayNotEmpty: _List.arrayNotEmpty,
    arrayIsEmpty: _List.arrayIsEmpty,
    arrayContain: _List.arrayContain,
    hasItemsInTwoArray: _List.hasItemsInTwoArray,
    getItemsInTwoArray: _List.getItemsInTwoArray,
    excludeItemsInTwoArray: _List.excludeItemsInTwoArray,
    lastIndex: _List.lastIndex,
    firstIndex: _List.firstIndex,
    moveToBegin: _List.moveToBegin,
    moveToEnd: _List.moveToEnd,
    map: _List.map,
    filter: _List.filter,
    pluck: _List.pluck,
    flatMap: _List.flatMap,
    flatFilter: _List.flatFilter,
    all: _List.all,
    ///Function
    compose: _Function.compose,
    pipe: _Function.pipe,
    negate: _Function.negate,
    curry: _Function.curry,
    //Math
    multiply: _Math.multiply,
    add: _Math.add,
    diff: _Math.diff,
    //Object,
    has: _Object.has,
    get: _Object.get,
    modify: _Object.modify,
    merge: _Object.merge,
    mergeAll: _Object.mergeAll,
    //Relation,
    is: _Relation.is,
    isString: _Relation.isString,
    notDefined: _Relation.notDefined,
    defined: _Relation.defined,
    isInt: _Relation.isInt,
    isNumber: _Relation.isNumber,
    gt: _Relation.gt,
    gte: _Relation.gte,
    lt: _Relation.lt,
    lte: _Relation.lte,
    validConditions: _Relation.validConditions,
    equal: _Relation.equal,
    //StringUtils
    getStringExtension: _StringUtils.getStringExtension,
    isValidEmail: _StringUtils.isValidEmail,
    isValidUrl: _StringUtils.isValidUrl,
    containDigit: _StringUtils.containDigit,
    notContainDigit: _StringUtils.notContainDigit,
    trim: _StringUtils.trim
};