import {
  has,
  getProp
} from '../src/index'

describe('[ Math ]', function () {
  it('should test get', () => {
    const item = { name: 'Gandalf', age: 'unknow' }
    expect(getProp('name', item)).toBe('Gandalf')
    expect(getProp('attack', item)).toBe(null)
  })
  it('should test has', () => {
    const item = { name: 'Gandalf', age: 'unknow' }
    expect(has('name', item)).toBe(true)
    expect(has('attack', item)).toBe(false)
  })
})
