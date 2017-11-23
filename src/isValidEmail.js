const mail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

/**
* function isValidEmail
* @func
* @memberOf Junction
*/
const isValidEmail = value => mail.test(value)
export default isValidEmail