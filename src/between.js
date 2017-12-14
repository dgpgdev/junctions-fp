import curry from './curry'

/**
 * Test si une valeur est comprise entre deux valeurs. Elle peut etre egale a une des deux valeur si le parametre strict est a false.
 * @memberOf Relation
 * @function between
 * @param {number} min la valeur minimal
 * @param {number} max la valeur maximal
 * @param {number} value la valeur à tester
 * @param {boolean} strict definit si la valeur peut etre égale ou non a une des deux valeurs.
 * @returns {boolean} le résultat de l'addition
 * @instance
 * @example {@lang javascript}const result = between(5, 10, 8) //return true
 * const result = between(5, 10, 10) //return true
 * const result = between(5, 10, 11) //return false
 * const result = between(5, 10, 10, true) //return false
 * const result = between(5, 10, 9, true) //return true
 */
const between = curry((min, max, value, strict = false) => strict ? (min < value && max > value) : (min <= value && max >= value))
export default between
