import {
    lastIndex
} from './List'

///////////////////////////////////
// REGEX
///////////////////////////////////
const mail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
const cdigit = /\d/
const url = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i


/**
 * 
 * @param {*} string 
 */
const escapeRegExp = (string) => string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

/**
 * check if value is a valid email
 * 
 * @param {any} value 
 * @returns 
 */
const isValidEmail = () => value => mail.test(value)

/**
 * check if value is a valid URL 
 * URL must start with http(s)
 * 
 * @param {any} value 
 * @returns 
 */
const isValidUrl = () => value => url.test(value)

/**
 * check if value contain a digit
 * 
 * @param {any} value 
 * @returns 
 */
const containDigit = () => value => cdigit.test(value)


/**
 * reverse containDigit 
 * 
 * @param {any} value 
 * @returns 
 */
const notContainDigit = () => value => !containDigit()(value)

/**
 * get extension from string (.gif, .mp4 ect...)
 * @param {*} string 
 */
const getStringExtension = () => string => '.' + lastIndex(string.split('.'))

const trim = () => string => string.trim()

export {
    getStringExtension,
    isValidEmail,
    isValidUrl,
    containDigit,
    notContainDigit,
    trim,
    escapeRegExp
}