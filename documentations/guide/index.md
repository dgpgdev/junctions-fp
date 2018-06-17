# Guide

## Images traitement
imaginons que nous devions tester un ensemble d'image. Nous devons vérifier si la première image est de type portrait et si l'ensemble d'image contient 4 images

```js
import {size, getFirst, equal, all} from 'junctions-fp
// liste des images
const images = [
  { width: 500, height: 200 },
  { width: 220, height: 800 },
  { width: 1200, height: 400 },
  { width: 70, height: 800 }
]
//fonction pour définir si une image est de type portrait
const isPortrait = item => item.width >= item.height
//fonction qui recupère la taille du tableau image
const imagesNumber = size(images)
// function qui récupère la première image du tableau et test si elle est de type portrait
const firstImageProtrait = isPortrait(getFirst(images))
// verifie les conditions
if (firstImageProtrait && equal(imagesNumber, 4)) {
  console.log('array size 4 and first image is a portait')
}
```
Nous pouvons aussi tester facilement si au moins une image est de type portrait
```js
any(isPortrait, images) //return true
```

Nous pouvons aussi tester les extensions de fichiers d'images ne récupérer que ceux autorisé.

```js
// tableau d'extension autorisé
const authorizedExtension = [ '.jpg', '.png' ]
// liste de fichier a tester
const files = [ 'hello.jpg', 'mypic.jpg', 'vector.svg', 'logo.png',
// nous assignons une fonction composé
const validateFiles = array => item => any(pipe(getStringExtension, equal)(item), array)
filter(validateFiles(authorizedExtension), files) //return [ 'hello.jpg', 'mypic.jpg', 'logo.png' ]
```
