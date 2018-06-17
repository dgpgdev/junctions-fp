# Object

## delProps
<span class='return'>delProps ( value, item ) ></span> Object

value maybe a string or an array string. Return a new instance of item without declared values
```js
const item = { name: 'Gandalf', age: 'unknow', type: 'magical', weapon: undefined }
const item1 = delProps('type', item) //return { name: 'Gandalf', age: 'unknow', weapon: undefined }
const item2 = delProps(['type', 'age', 'weapon'], item) //return { name: 'Gandalf'}
const deletedProps = delProps(['type', 'weapon'])
deletedProps(item) //return  {name: 'Gandalf', age: 'unknow'}
```

## extract
<span class='return'>extract( props, item ) ></span> Object
value maybe a string or an array string. Return a new instance of item with declared values

```js
const item = { name: 'Gandalf', age: 'unknow', type: 'magical', weapon: undefined }
const item1 = extract('type', item) //return { type: 'magical' }
const item2 = extract(['type', 'age', 'weapon'], item) //return{ age: 'unknow', type: 'magical', weapon: undefined }
const extractProps = extract(['type', 'weapon'])
extractProps(item) //return  {type: 'magical', weapon: undefined }
```
## getProps
<span class='return'>getProps( values, item ) ></span> Any | Array

get values of object. Values can be a string or a String Array.
```js
const item = { name: 'Gandalf', age: 'unknow', type: 'magical', weapon: undefined }
getProps('name', item)).toBe('Gandalf') //return 'Gandalf'
getProps([ 'name', 'age', 'weapon' ], item) //return [ 'Gandalf', 'unknow', undefined ])
```
## has
<span class='return'>has( value ) ></span> Boolean

return true if object has value
```js
const item = { name: 'Gandalf', age: 'unknow' }
has('name', item) //return true
has('attack', item) //return false
```
## merge
<span class='return'>merge(item1, item2) ></span> Object | Array

merge two object or array
```js
const item = { name: 'Gandalf', age: 'unknow' }
const weapon = { type: 'magic' }
merge(item, weapon) //return { name: 'Gandalf', age: 'unknow', type: 'magic' }
```
## mergeAll
<span class='return'>mergeAll( array) ></span> Object

merge all object in array
```js
const items = [ { name: 'Gandalf', age: 'unknow' }, { type: 'magic' } ]
mergeAll(items) //return { name: 'Gandalf', age: 'unknow', type: 'magic' }
```

## modify
<span class='return'>modify(property, value, item) ></span> Object

change object property
```js
const item = { name: 'Gandalf', age: 'unknow' }
modify('name', 'Sauron', item) //return { name: 'Sauron', age: 'unknow' }
```
export { default as has } from './has'
export { default as getProps } from './getProps'
export { default as delProps } from './delProps'
export { default as modify } from './modify'
export { default as merge } from './merge'
export { default as mergeAll } from './mergeAll'
