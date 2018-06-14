### Manipuler des String

##### Detecter si des fichiers on la bonne extension
```javascript
import { getStringExtension, map, contain } from 'junctions'

const authorizedExtension = ['.jpg', '.png']
const files = ['hello.jpg', 'mypic.jpg', 'vector.svg', 'logo.png', 'video.mp4']
const filesExtension = map(getStringExtension, files) // [ '.jpg', '.jpg', '.svg', '.png', '.mp4' ]
const validFiles = contain(authorizedExtension, filesExtension) // true

```
