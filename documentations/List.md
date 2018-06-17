# List

## all
<span class='return'>all( fn, array ) ></span> Boolean

test all item in array with conditionnal function
```js
const x = item => item > 42
const y = [43, 45, 46]
const z = [43, 45, 41]
all(x, y) //return true
all(x, z) //return false
```
## any
<span class='return'>any( fn, array ) ></span> Boolean

test if one item valid conditionnal function
```js
const x = item => item > 42
const y = [43, 45, 46]
const z = [43, 45, 41]
any(x, y)) //return true
any(x, z)) //return true
```
## empty
<span class='return'>empty( array ) ></span> Boolean

test if array is empty
```js
const x = []
const y = [1, 2, 3]
empty(x) //return true
empty(y) //return false
```
## excludeDuplicate
<span class='return'>excludeDuplicate( array ) ></span> Array

return a new array without duplicate item
```js

const x = [ 1, 2, 3, 4, 5 ]
const y = [ 4, 5, 6, 7, 8 ]
const z = [ 7, 8, 9, 10, 11 ]
const a = [
  { name: 'dragon', attack: 10 },
  { name: 'troll', attack: 5 },
  { name: 'gobelin', attack: 1 }
]
const b = [
  { name: 'dragon', attack: 10 },
  { name: 'kevin', attack: 3 },
  { name: 'jedi', attack: 6 }
]

excludeDuplicate(x, y, z) //return [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
excludeDuplicate(a, b)
/* return [
  { name: 'dragon', attack: 10 },
  { name: 'troll', attack: 5 },
  { name: 'gobelin', attack: 1 },
  { name: 'kevin',  attack: 3 },
  { name: 'jedi',  attack: 6}
  ] */
```
## filter
<span class='return'>filter( fn, array) ></span> Array

Currying filter array alias
```js
const x = item => item > 42
const y = [ 43, 45, 46 ]
const z = [ 43, 45, 41 ]
const myfilter = filter(x)
filter(x, y) //return [ 43, 45, 46 ]
filter(x, z) //return [ 43, 45 ]
myfilter(z) //return [ 43, 45 ]
```
## flatFilter
<span class='return'>flatFilter( fn, array ) ></span> Array

merge array and filter
```js
const x = item => item > 45
const y = [ 43, 45, 46 ]
const z = [ 48, 45, 47 ]
flatFilter(x, [ y, z ]) //return [ 46, 48, 47 ]
```
## flatMap
<span class='return'>flatMap( fn, array ) ></span> Array

merge array and transform
```js
const x = item => item + 1
const y = [ 44, 45, 46 ]
const z = [ 47, 48, 49 ]
flatMap(x, [ y, z ]) //return [ 45, 46, 47, 48, 49, 50 ]
```
## getDuplicate
<span class='return'>getDuplicate( ...array ) ></span> Array

get all duplicate items in arrays
```js
const x = [ 1, 2, 3, 4, 5 ]
const y = [ 4, 5, 6, 7, 8 ]
const z = [ 7, 8, 9, 10, 11 ]
getDuplicate(x, y, z) //return [ 4, 5, 7, 8 ]
getDuplicate(x, z) //return []
```
## getFirst
<span class='return'>getFirst( ...array ) ></span> Any | Array

Get first item in array. If you pass an array list getFirst return an array with all first item
```js
const y = [ 44, 45, 46 ]
const z = [ 'Gandalf', 'Sauron', 'Bilbo' ]
getFirst(y) //return 44
getFirst(y, z) //return [ 44, 'Gandalf' ]
```
## getLast
<span class='return'>getLast( ...array ) ></span> Any | Array

Get first item in array. If you pass an array list getLast return an array with all last item
```js
const y = [ 44, 45, 46 ]
const z = [ 'Gandalf', 'Sauron', 'Bilbo' ]
getLast(y) //return 46
getLast(y, z) //return [ 46, 'Bilbo' ]
```
## hasDuplicate
<span class='return'>hasDuplicate(...array) ></span> Boolean

test if arrays contains duplicate item. Return true if duplicate found
```js
const x = [ 1, 2, 3, 4, 5 ]
const y = [ 4, 5, 6, 7, 8 ]
const z = [ 7, 8, 9, 10, 11 ]
hasDuplicate(x, z) //return false
hasDuplicate(x, y, z) //return true
```
## map
<span class='return'>map( fn, array) ></span> Array

Currying map array alias
```js
const x = item => item + 1
const y = [ 43, 45, 46 ]
map(x, y) //return [ 44, 46, 47 ]
```
## pluck
<span class='return'>pluck( property, array) ></span> Array

return a value's array
```js
const items = [
  { name: 'dragon', attack: 10 },
  { name: 'troll', attack: 5 },
  { name: 'gobelin', attack: 1 }
  ]
pluck('name', items) //return [ 'dragon', 'troll', 'gobelin' ]
```
## removeItem
<span class='return'>removeItem( item, array ) ></span> Array

remove an item from array
```js
const items = [
  { name: 'dragon', attack: 10 },
  { name: 'troll', attack: 5 },
  { name: 'gobelin', attack: 1 }
  ]
removeItem({ name: 'troll', attack: 5 }, items)
/* return
  [
  { name: 'dragon', attack: 10 },
  { name: 'gobelin', attack: 1 }
  ]*/
```
## removeIndex
<span class='return'>removeIndex( index, array) ></span> Array

remove item by index
```js
const items = [
  { name: 'dragon', attack: 10 },
  { name: 'troll', attack: 5 },
  { name: 'gobelin', attack: 1 }
  ]
removeIndex(1, items)
/* return
  [
  { name: 'dragon', attack: 10 },
  { name: 'gobelin', attack: 1 }
  ]*/
```
## setFirst
<span class='return'>setFirst( object, array ) ></span> Array

Set item in first index
```js
const x = [ 1, 2, 3, 4, 5 ]
const items = [
  { name: 'dragon', attack: 10 },
  { name: 'troll', attack: 5 },
  { name: 'gobelin', attack: 1 }
  ]
setFirst(4, x) //return [ 4, 1, 2, 3, 5 ]
setFirst({ name: 'troll', attack: 5 }, items)
/* return
  [
  { name: 'troll', attack: 5 },
  { name: 'dragon', attack: 10 },
  { name: 'gobelin', attack: 1 }
  ]*/
```
## setLast
<span class='return'>setLast( object, array ) ></span> Array

Set item in last index
```js
const x = [ 1, 2, 3, 4, 5 ]
const items = [
  { name: 'dragon', attack: 10 },
  { name: 'troll', attack: 5 },
  { name: 'gobelin', attack: 1 }
  ]
setLast(4, x) //return [ 1, 2, 3, 5 ,4]
setLast({ name: 'troll', attack: 5 }, items)
/* return
  [
  { name: 'troll', attack: 5 },
  { name: 'gobelin', attack: 1 },
  { name: 'troll', attack: 5 }
  ]*/
```
## size
<span class='return'>size(array) ></span> Number

return array size
```js
const x = []
const y = [ 1, 2, 3 ]
size(x) //return 0
size(y) //return 3
```
## swap
<span class='return'>swap( item1, item2, array ) ></span> Array

swap item in array
```js
const x = [ 1, 2, 3, 4, 5 ]
const items = [
  { name: 'dragon', attack: 10 },
  { name: 'troll', attack: 5 },
  { name: 'gobelin', attack: 1 }
  ]
swap(2, 4, x) //return [ 1, 4, 3, 2, 5 ]
swap({ name: 'troll', attack: 5 }, { name: 'gobelin', attack: 1 }, items)
/* return
  [
  { name: 'troll', attack: 5 },
  { name: 'gobelin', attack: 1 },
  { name: 'troll', attack: 5 }
  ]*/
```
## transform2D
<span class='return'>transform2D( size, array) ></span> Array

transform a one dimension array into 2D array
```js
const items = [ 1, 2, 3, 4, 5, 6 ]
transform2D(3, items)
/* return
  [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ]
  ]
```
