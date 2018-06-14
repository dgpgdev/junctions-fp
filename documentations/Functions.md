# Functions
## compose
function compose execute rigth to left function
#### parameters
| name | type | description |
|------|------|-------------|
|fns|Function|functions list to execute|
<span class='return'>Return ></span> void
```js
const creatures = [{name:'dragon', attack:10}, {name:'troll', attack:5}, {name:'gobelin', attack:1}]
const getAttackValues = get('attack') //get attack value
const isGreaterthan1 = gt(1) //valid condition n > 1
const myFilter = compose(isGreaterthan1, getAttackValues) //compose function
const result = creatures.filter(myFilter) // return  [{name:'dragon', attack:10}, {name:'troll', attack:5}]
```
## curry
curry function
#### parameters
| name | type | description |
|------|------|-------------|
|fn|Function|function to curry|

<span class='return'>Return ></span> function or void
```js
const add = (x,y) => x+y
const z = curry(add)
const result = z(2)(3) //return 5
```

## debounce
Debounce function
#### parameters
| name | type | description |
|------|------|-------------|
|fn|Function|function to execute|
|wait|Number|time to delay function|
|immediate|Boolean|execute immediatly function|

<span class='return'>Return ></span> void
```js
const count = (x) => x + 1
const d = debounce(count, 1000)
d(1) //call count
```
## not
test if value === false
#### parameters
| name | type | description |
|------|------|-------------|
|value|any|value to test|

<span class='return'>Return ></span> true if value is false

Code
```js
not(true) //return false
not(false) //return true
```
## pipe
execute left to rigth function
#### parameters
| name | type | description |
|------|------|-------------|
|fns|functions|functions list|

<span class='return'>Return ></span> function list result
```js
const creatures = [{name:'dragon', attack:10}, {name:'troll', attack:5}, {name:'gobelin', attack:1}]
const getAttackValues = get('attack') //get attack value
const isGreaterthan1 = gt(1) //valid condition n > 1
const myFilter = pipe(getAttackValues, isGreaterthan1) //pipe function
const result = creatures.filter(myFilter) //return  [{name:'dragon', attack:10}, {name:'troll', attack:5}]
```
