/**
 * function debounce
 * debounce function
 * @memberOf Functions
 * @function debounce
 * @param {function} fn function to call after delay
 * @param {number} wait time to delay function execution
 * @param {boolean} immediate execute imediatly function
 * @example {@lang javascript}const count = (x)=> x+1
 *const d = debounce(count, 1000)
 *d(1) //call count
 */
const debounce = function (fn, wait, immediate) {
  var timeout
  return function () {
    var context = this
    var args = arguments
    var later = function () {
      timeout = null
      if (!immediate) fn.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) fn.apply(context, args)
  }
}
export default debounce
