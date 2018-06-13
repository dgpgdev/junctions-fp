import {
  has,
  getProps,
  delProps,
  merge,
  mergeAll,
  modify
} from '../src/index'

describe('[ Object ]', function () {
  it('should test getProps', () => {
    const item = { name: 'Gandalf', age: 'unknow', type: 'magical', weapon: undefined }
    expect(getProps('name', item)).toBe('Gandalf')
    expect(getProps(['name', 'age', 'weapon'], item)).toEqual(['Gandalf', 'unknow', undefined])
  })
  it('should test delProps', () => {
    const item = { name: 'Gandalf', age: 'unknow', type: 'magical', weapon: undefined }
    expect(delProps('type', item)).toEqual({ name: 'Gandalf', age: 'unknow', weapon: undefined })
    expect(delProps(['type', 'age', 'weapon'], item)).toEqual({ name: 'Gandalf'})
    //expect(delProps(['name', 'age', 'weapon'], item)).toEqual(['Gandalf', 'unknow', undefined])
  })
  it('should test has', () => {
    const item = { name: 'Gandalf', age: 'unknow' }
    expect(has('name', item)).toBe(true)
    expect(has('attack', item)).toBe(false)
  })
  it('should test modify', () => {
    const item = { name: 'Gandalf', age: 'unknow' }
    expect(modify('name', 'Sauron', item)).toEqual({ name: 'Sauron', age: 'unknow' })
  })
  it('should test merge', () => {
    const item = { name: 'Gandalf', age: 'unknow' }
    const weapon = {type: 'magic'}
    expect(merge(item, weapon)).toEqual({ name: 'Gandalf', age: 'unknow', type: 'magic' })
  })
  it('should test merge all', () => {
    const items = [{ name: 'Gandalf', age: 'unknow' }, { type: 'magic' }]
    expect(mergeAll(items)).toEqual({ name: 'Gandalf', age: 'unknow', type: 'magic' })
  })
})
