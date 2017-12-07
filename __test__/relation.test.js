import {
  defined,
  notDefined,
  equal,
  gt,
  gte,
  lt,
  lte,
  is,
  isInt,
  isNumber,
  isString,
  isValidEmail,
  isValidUrl
} from '../src/index'

describe('[ Relation ]', function () {
  it('should test if value is an array ', () => {
    const x = [42]
    expect(is('array', x)).toBe(true)
    expect(is('array', {
      name: 'Gandalf'
    })).toBe(false)
  })
  it('should test if value is a string ', () => {
    const x = 'Gandalf'
    expect(isString(x)).toBe(true)
    expect(isString({
      name: 'Gandalf'
    })).toBe(false)
  })
  it('should test if value is a number ', () => {
    const x = 42.3
    expect(isNumber(x)).toBe(true)
    expect(isNumber('Gandalf')).toBe(false)
  })
  it('should test if value is an integer ', () => {
    const x = 42
    expect(isInt(x)).toBe(true)
    expect(isInt({
      name: 'Gandalf'
    })).toBe(false)
  })
  it('should test if value is a valid email ', () => {
    const x = 'gandalf@mordor.com'
    expect(isValidEmail(x)).toBe(true)
    expect(isValidEmail('gandalf@.com')).toBe(false)
  })
  it('should test if value is a valid url ', () => {
    const x = 'http://www.gandalf.com'
    expect(isValidUrl(x)).toBe(true)
    expect(isValidUrl('gandalf.com')).toBe(false)
  })

  it('should test if value is defined', () => {
    const x = 42
    const y = 'Gandalf'
    const z = {
      name: 'dragon',
      attack: 10
    }
    expect(defined(x)).toBe(true)
    expect(defined(y)).toBe(true)
    expect(defined(z)).toBe(true)
    expect(defined(null)).toBe(false)
    expect(defined('')).toBe(false)
  })
  it('should test if value is not defined', () => {
    const x = 42
    const y = 'Gandalf'
    const z = {
      name: 'dragon',
      attack: 10
    }
    expect(notDefined(null)).toBe(true)
    expect(notDefined(undefined)).toBe(true)
    expect(notDefined('')).toBe(true)
    expect(notDefined(x)).toBe(false)
    expect(notDefined(y)).toBe(false)
    expect(notDefined(z)).toBe(false)
  })
  it('should test if values are equal', () => {
    const x = 42
    const y = 'Gandalf'
    const z = {
      name: 'dragon',
      attack: 10
    }
    expect(equal(x, 42)).toBe(true)
    expect(equal(y, 'Gandalf')).toBe(true)
    expect(equal(z, {
      name: 'dragon',
      attack: 10
    })).toBe(true)
    expect(equal(x, 43)).toBe(false)
    expect(equal(y, 'gandalf')).toBe(false)
    expect(equal(z, {
      name: 'dragon',
      attack: 5
    })).toBe(false)
  })
  it('should test if value is greater than 10', () => {
    const limit = gt(10)
    expect(limit(11)).toBe(true)
    expect(limit(10)).toBe(false)
    expect(limit(9)).toBe(false)
  })
  it('should test if value is greater or equal than 10', () => {
    const limit = gte(10)
    expect(limit(11)).toBe(true)
    expect(limit(10)).toBe(true)
    expect(limit(9)).toBe(false)
  })
  it('should test if value is lower than 10', () => {
    const limit = lt(10)
    expect(limit(11)).toBe(false)
    expect(limit(10)).toBe(false)
    expect(limit(9)).toBe(true)
  })
  it('should test if value is lower or equal than 10', () => {
    const limit = lte(10)
    expect(limit(11)).toBe(false)
    expect(limit(10)).toBe(true)
    expect(limit(9)).toBe(true)
  })
})
