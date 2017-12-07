import {
  hasDuplicate,
  excludeDuplicate,
  getDuplicate,
  size,
  empty,
  notEmpty,
  contain,
  setFirst,
  setLast,
  not
} from '../src/index'

describe('[ List ]', function () {
  describe('[ Size ]', () => {
    it('should test if array is empty ', () => {
      const x = []
      const y = [1, 2, 3]
      expect(empty(x)).toBe(true)
      expect(empty(y)).toBe(false)
    })
    it('should test if array is not empty ', () => {
      const x = []
      const y = [1, 2, 3]
      expect(notEmpty(x)).toBe(false)
      expect(notEmpty(y)).toBe(true)
      expect(not(empty(x))).toBe(false)
      expect(not(empty(y))).toBe(true)
    })
    it('should test get array size ', () => {
      const x = []
      const y = [1, 2, 3]
      expect(size(x)).toBe(0)
      expect(size(y)).toBe(3)
    })
  })
  describe('[ DUPLICATE ]', () => {
    it('should test if duplicate found ', () => {
      const x = [1, 2, 3, 4, 5]
      const y = [4, 5, 6, 7, 8]
      const z = [7, 8, 9, 10, 11]
      expect(hasDuplicate(x, z)).toBe(false)
      expect(hasDuplicate(x, y, z)).toBe(true)
    })
    it('should test get duplicate ', () => {
      const x = [1, 2, 3, 4, 5]
      const y = [4, 5, 6, 7, 8]
      const z = [7, 8, 9, 10, 11]
      expect(getDuplicate(x, y, z)).toEqual([4, 5, 7, 8])
      expect(getDuplicate(x, z)).toEqual([])
    })
    it('should test exclude duplicate array  ', () => {
      const x = [1, 2, 3, 4, 5]
      const y = [4, 5, 6, 7, 8]
      const z = [7, 8, 9, 10, 11]

      const a = [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}]
      const b = [{name: 'dragon', attack: 10}, {name: 'kevin', attack: 3}, {name: 'jedi', attack: 6}]

      expect(excludeDuplicate(x, y, z)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
      expect(excludeDuplicate(a, b)).toEqual([{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}, {name: 'kevin', attack: 3}, {name: 'jedi', attack: 6}])
    })
  })
  describe('[ MANIPULATE ]', () => {
    it('should test detect if array contain value', () => {
      const x = [1, 2, 3, 4, 5]
      expect(contain(4, x)).toBe(true)
      expect(contain(8, x)).toBe(false)
    })
    it('should test set item to first index', () => {
      const x = [1, 2, 3, 4, 5]
      const y = [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}]
      expect(setFirst(4)(x)).toEqual([4, 1, 2, 3, 5])
      expect(setFirst(1, x)).toEqual([1, 2, 3, 4, 5])
      expect(setFirst(5, x)).toEqual([5, 1, 2, 3, 4])

      expect(setFirst({name: 'troll', attack: 5}, y)).toEqual([{name: 'troll', attack: 5}, {name: 'dragon', attack: 10}, {name: 'gobelin', attack: 1}])
      expect(setFirst({name: 'dragon', attack: 10}, y)).toEqual([{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}])
      expect(setFirst({name: 'gobelin', attack: 1}, y)).toEqual([{name: 'gobelin', attack: 1}, {name: 'dragon', attack: 10}, {name: 'troll', attack: 5}])
    })
    it('should test set item to last index', () => {
      const x = [1, 2, 3, 4, 5]
      const y = [{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}]
      expect(setLast(4, x)).toEqual([1, 2, 3, 5, 4])
      expect(setLast(5, x)).toEqual([1, 2, 3, 4, 5])
      expect(setLast(1, x)).toEqual([2, 3, 4, 5, 1])

      expect(setLast({name: 'troll', attack: 5}, y)).toEqual([{name: 'dragon', attack: 10}, {name: 'gobelin', attack: 1}, {name: 'troll', attack: 5}])
      expect(setLast({name: 'gobelin', attack: 1}, y)).toEqual([{name: 'dragon', attack: 10}, {name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}])
      expect(setLast({name: 'dragon', attack: 10}, y)).toEqual([{name: 'troll', attack: 5}, {name: 'gobelin', attack: 1}, {name: 'dragon', attack: 10}])
    })
  })
})
