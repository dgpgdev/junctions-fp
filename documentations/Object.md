# Object

## delProps
Clone an object and delete one or more properties.
#### parameters
| name | type | description |
|------|------|-------------|
|props|string or [String]|one or more value to delete|
|item|object| object to delete props|

<span class='return'>Return ></span> a New Object without deleted properties
```js
const item = { name: 'Gandalf', age: 'unknow', type: 'magical', weapon: undefined }
const item1 = delProps('type', item) //return { name: 'Gandalf', age: 'unknow', weapon: undefined }
const item2 = delProps(['type', 'age', 'weapon'], item) //return { name: 'Gandalf'}
const deletedProps = delProps(['type', 'weapon'])
deletedProps(item) //return  {name: 'Gandalf', age: 'unknow'}
```
## has
test if objact has a defined property
#### parameters
| name | type | description |
|------|------|-------------|
|key|||

<span class='return'>Return ></span>
```js

```

export { default as has } from './has'
export { default as getProps } from './getProps'
export { default as delProps } from './delProps'
export { default as modify } from './modify'
export { default as merge } from './merge'
export { default as mergeAll } from './mergeAll'
