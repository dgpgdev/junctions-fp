import {
  getStringExtension,
  pipe,
  any,
  contain,
  map,
  lte,
  getProps,
  filter,
  gte,
  size,
  getFirst,
  equal
} from '../src/index'

describe('[ TURORIAL ]', function () {
  it('should test getStringExtension', () => {
    const authorizedExtension = ['.jpg', '.png']
    const files = ['hello.jpg', 'mypic.jpg', 'vector.svg', 'logo.png', 'video.mp4']
    const filesExtension = map(getStringExtension, files) // [ '.jpg', '.jpg', '.svg', '.png', '.mp4' ]
    const validFiles = contain(authorizedExtension, filesExtension) // true
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
  })
})
