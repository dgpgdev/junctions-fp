import {
  pipe,
  compose,
  curry,
  debounce,
  not,
  getProps,
  gt
} from '../src/index'

describe('functions test', function () {
  it('currying', () => {
    const add = (x, y) => x + y
    const o = curry(add)
    expect(o(2)(3)).toBe(5)
  })
  it('debounce call', function (done) {
    const a = count => {
      expect(count).toBe(4)
      done()
    }
    const d = debounce(a, 1000)
    d(1)
    d(2)
    d(3)
    d(4)
  })

  it('not', () => {
    const isTrue = true
    expect(not(isTrue)).toBe(false)
  })

  it('compose', () => {
    const creatures = [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}]
    const getAttackValues = getProps('attack')// get attack value
    const isGreaterthan1 = gt(1) // valid condition n > 1
    const myFilter = compose(isGreaterthan1, getAttackValues) // compose function
    const result = creatures.filter(myFilter) // return  [{name:'dragon', attack:10}, {name:'troll', attack:5}]
    expect(result).toEqual([{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}])
  })

  it('pipe', () => {
    const creatures = [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}]
    const getAttackValues = getProps('attack')// get attack value
    const isGreaterthan1 = gt(1) // valid condition n > 1
    const myFilter = pipe(getAttackValues, isGreaterthan1)
    // compose function
    const result = creatures.filter(myFilter)
    expect(result).toEqual([{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}])
  })
})
