const mail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

/**
 * test if value is a valid email
 * @memberOf Relation
 * @func
 * @param {any} value value to test
 * @returns {boolean} true if test success
 * @example {@lang javascript}const result = isValidEmail('gandalf@mordor.com') //return true
 */
const isValidEmail = value => mail.test(value)
export default isValidEmail