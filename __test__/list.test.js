import {
  hasDuplicate,
  excludeDuplicate,
  getDuplicate,
  size,
  empty,
  contain,
  getFirst,
  getLast,
  setFirst,
  setLast,
  not,
  all,
  any,
  filter,
  map,
  flatMap,
  flatFilter,
  pluck,
  removeItem,
  removeIndex,
  transform2D,
  swap
} from '../src/index'
import chunk from '../src/chunk'

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
      const a = [{ name: 'dragon', attack: 10 }, { name: 'troll', attack: 5 }, { name: 'gobelin', attack: 1 }]
      const b = [{ name: 'dragon', attack: 10 }, { name: 'kevin', attack: 3 }, { name: 'jedi', attack: 6 }]

      expect(excludeDuplicate(x, y, z)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
      expect(excludeDuplicate(a, b)).toEqual([
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'troll',
          attack: 5
        },
        {
          name: 'gobelin',
          attack: 1
        },
        {
          name: 'kevin',
          attack: 3
        },
        {
          name: 'jedi',
          attack: 6
        }
      ])
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
      const y = [
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'troll',
          attack: 5
        },
        {
          name: 'gobelin',
          attack: 1
        }
      ]
      expect(setFirst(4)(x)).toEqual([4, 1, 2, 3, 5])
      expect(setFirst(1, x)).toEqual([1, 2, 3, 4, 5])
      expect(setFirst(5, x)).toEqual([5, 1, 2, 3, 4])

      expect(
        setFirst(
          {
            name: 'troll',
            attack: 5
          },
          y
        )
      ).toEqual([
        {
          name: 'troll',
          attack: 5
        },
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'gobelin',
          attack: 1
        }
      ])
      expect(
        setFirst(
          {
            name: 'dragon',
            attack: 10
          },
          y
        )
      ).toEqual([
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'troll',
          attack: 5
        },
        {
          name: 'gobelin',
          attack: 1
        }
      ])
      expect(
        setFirst(
          {
            name: 'gobelin',
            attack: 1
          },
          y
        )
      ).toEqual([
        {
          name: 'gobelin',
          attack: 1
        },
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'troll',
          attack: 5
        }
      ])
    })
    it('should test set item to last index', () => {
      const x = [1, 2, 3, 4, 5]
      const y = [
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'troll',
          attack: 5
        },
        {
          name: 'gobelin',
          attack: 1
        }
      ]
      expect(setLast(4, x)).toEqual([1, 2, 3, 5, 4])
      expect(setLast(5, x)).toEqual([1, 2, 3, 4, 5])
      expect(setLast(1, x)).toEqual([2, 3, 4, 5, 1])

      expect(
        setLast(
          {
            name: 'troll',
            attack: 5
          },
          y
        )
      ).toEqual([
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'gobelin',
          attack: 1
        },
        {
          name: 'troll',
          attack: 5
        }
      ])
      expect(
        setLast(
          {
            name: 'gobelin',
            attack: 1
          },
          y
        )
      ).toEqual([
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'troll',
          attack: 5
        },
        {
          name: 'gobelin',
          attack: 1
        }
      ])
      expect(
        setLast(
          {
            name: 'dragon',
            attack: 10
          },
          y
        )
      ).toEqual([
        {
          name: 'troll',
          attack: 5
        },
        {
          name: 'gobelin',
          attack: 1
        },
        {
          name: 'dragon',
          attack: 10
        }
      ])
    })
    it('should test get first element function', () => {
      const y = [44, 45, 46]
      const z = ['Gandalf', 'Sauron', 'Bilbo']
      expect(getFirst(y)).toBe(44)
      expect(getFirst(y, z)).toEqual([44, 'Gandalf'])
    })
    it('should test get last element function', () => {
      const y = [44, 45, 46]
      const z = ['Gandalf', 'Sauron', 'Bilbo']
      expect(getLast(y)).toBe(46)
      expect(getLast(y, z)).toEqual([46, 'Bilbo'])
    })
    it('should test all function to valid condition', () => {
      const x = item => item > 42
      const y = [43, 45, 46]
      const z = [43, 45, 41]
      expect(all(x, y)).toBe(true)
      expect(all(x, z)).toBe(false)
    })
    it('should test any function to valid condition', () => {
      const x = item => item > 42
      const y = [43, 45, 46]
      const z = [43, 45, 41]
      expect(any(x, y)).toBe(true)
      expect(any(x, z)).toBe(true)
    })
    it('should test filter function', () => {
      const x = item => item > 42
      const y = [43, 45, 46]
      const z = [43, 45, 41]
      const a = filter(x)
      expect(filter(x, y)).toEqual([43, 45, 46])
      expect(filter(x, z)).toEqual([43, 45])
      expect(a(z)).toEqual([43, 45])
    })
    it('should test flat filter function', () => {
      const x = item => item > 45
      const y = [43, 45, 46]
      const z = [48, 45, 47]
      expect(flatFilter(x, [y, z])).toEqual([46, 48, 47])
    })
    it('should test map function', () => {
      const x = item => item + 1
      const y = [43, 45, 46]
      expect(map(x, y)).toEqual([44, 46, 47])
    })
    it('should test flat map function', () => {
      const x = item => item + 1
      const y = [44, 45, 46]
      const z = [47, 48, 49]
      expect(flatMap(x, [y, z])).toEqual([45, 46, 47, 48, 49, 50])
    })
    it('should test pluck function', () => {
      const items = [
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'troll',
          attack: 5
        },
        {
          name: 'gobelin',
          attack: 1
        }
      ]
      expect(pluck('name', items)).toEqual(['dragon', 'troll', 'gobelin'])
    })
    it('should test removeItem function', () => {
      const items = [
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'troll',
          attack: 5
        },
        {
          name: 'gobelin',
          attack: 1
        }
      ]
      expect(
        removeItem(
          {
            name: 'troll',
            attack: 5
          },
          items
        )
      ).toEqual([
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'gobelin',
          attack: 1
        }
      ])
    })
    it('should test removeIndex function', () => {
      const items = [
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'troll',
          attack: 5
        },
        {
          name: 'gobelin',
          attack: 1
        }
      ]
      expect(removeIndex(1, items)).toEqual([
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'gobelin',
          attack: 1
        }
      ])
    })
    it('should test transform2D function', () => {
      const items = [1, 2, 3, 4, 5, 6]
      expect(transform2D(3, items)).toEqual([[1, 2, 3], [4, 5, 6]])
    })
    it('should test chunk function', () => {
      const items = [1, 2, 3, 4, 5, 6]
      expect(chunk(items, 3)).toEqual([[1, 2, 3], [4, 5, 6]])
      const c = chunk(items)
      expect(c(3)).toEqual([[1, 2, 3], [4, 5, 6]])
    })
    it('should test swap function', () => {
      const items = [1, 2, 3, 4, 5, 6]
      const y = [
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'troll',
          attack: 5
        },
        {
          name: 'gobelin',
          attack: 1
        }
      ]
      expect(swap(3, 6, items)).toEqual([1, 2, 6, 4, 5, 3])
      expect(
        swap(
          {
            name: 'troll',
            attack: 5
          },
          {
            name: 'dragon',
            attack: 10
          },
          y
        )
      ).toEqual([
        {
          name: 'troll',
          attack: 5
        },
        {
          name: 'dragon',
          attack: 10
        },
        {
          name: 'gobelin',
          attack: 1
        }
      ])
    })
  })
})
