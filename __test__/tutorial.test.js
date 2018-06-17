import {
  getStringExtension,
  add,
  any,
  all,
  pipe,
  contain,
  map,
  lte,
  getProps,
  filter,
  gte,
  extract,
  size,
  getFirst,
  equal
} from '../src/index'
import { REGEXP_RESOURCE_PATH } from 'webpack/lib/ModuleFilenameHelpers'

describe('[ TURORIAL ]', function () {
  it('should test getStringExtension', () => {
    const authorizedExtension = [ '.jpg', '.png' ]
    const files = [ 'hello.jpg', 'mypic.jpg', 'vector.svg', 'logo.png', 'video.mp4' ]
    const validateFiles = array => item => any(pipe(getStringExtension, equal)(item), array)
    expect(filter(validateFiles(authorizedExtension), files)).toEqual([ 'hello.jpg', 'mypic.jpg', 'logo.png' ])
    // const filesExtension = map(getStringExtension, files) // [ '.jpg', '.jpg', '.svg', '.png', '.mp4' ]
    // const validFiles = all(authorizedExtension, filesExtension) // true
    // console.log('validate files', validFiles)
  })

  it('should test image size', () => {
    const images = [
      { width: 500, height: 200 },
      { width: 220, height: 800 },
      { width: 1200, height: 400 },
      { width: 70, height: 800 }
    ]
    const isPortrait = item => item.width >= item.height
    const imagesNumber = size(images)
    const firstImageProtrait = isPortrait(getFirst(images))
    if (firstImageProtrait && equal(imagesNumber, 4)) {
      console.log('array size 4 and first image is a portait')
    }
    expect(any(isPortrait, images)).toBe(true)
  })

  // console.log(result)
})
