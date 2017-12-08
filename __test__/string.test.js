import { getStringExtension,
  containDigit,
  escapeRegExp,
  trim
 } from '../src/index'

describe('[ Object ]', function () {
  it('should test getStringExtension', () => {
    const ext = 'picture.jpg'
    expect(getStringExtension(ext)).toBe('.jpg')
  })
  it('should test containDigit', () => {
    const ext = 'picture42.jpg'
    expect(containDigit(ext)).toBe(true)
  })
  it('should test escapRegExp', () => {
    const ext = 'http://test.com'
    // eslint-disable-next-line no-useless-escape
    expect(escapeRegExp(ext)).toBe('http:\\/\\/test\\.com')
  })
  it('should test trim', () => {
    const ext = ' lala lala '
    // eslint-disable-next-line no-useless-escape
    expect(trim(ext)).toBe('lala lala')
  })
})
