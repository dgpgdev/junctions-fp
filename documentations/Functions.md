# Functions

## compose
<span class='return'>compose(...fns ) ></span> Function

execute right to left function list
```js
const creatures = [{name:'dragon', attack:10}, {name:'troll', attack:5}, {name:'gobelin', attack:1}]
const getAttackValues = get('attack') //get attack value
const isGreaterthan1 = gt(1) //valid condition n > 1
const myFilter = compose(isGreaterthan1, getAttackValues) //compose function
const result = creatures.filter(myFilter) // return  [{name:'dragon', attack:10}, {name:'troll', attack:5}]
```
## curry
<span class='return'>curry( fn ) ></span> Function

curry function
```js
const add = (x,y) => x+y
const z = curry(add)
const result = z(2)(3) //return 5
```
## debounce
<span class='return'>debounce( fn, wait, immediate) ></span> void

create a debounce function
```js
const count = (x) => x + 1
const d = debounce(count, 1000)
d(1) //call count
```
## not
<span class='return'>not( value ) ></span> Boolean

test if value !== false
```js
not(true) //return false
not(false) //return true
```
## pipe
<span class='return'>pipe( ...fns) ></span> Function

execute left to rigth function
```js
const creatures = [{name:'dragon', attack:10}, {name:'troll', attack:5}, {name:'gobelin', attack:1}]
const getAttackValues = get('attack') //get attack value
const isGreaterthan1 = gt(1) //valid condition n > 1
const myFilter = pipe(getAttackValues, isGreaterthan1) //pipe function
const result = creatures.filter(myFilter) //return  [{name:'dragon', attack:10}, {name:'troll', attack:5}]
```
