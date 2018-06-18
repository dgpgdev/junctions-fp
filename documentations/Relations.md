# Relations

## between
<span class='return'>between( min , max, value, strict ) ></span> Boolean

test if value is between min and max value. strict param test > and < . By dafault strict = false
```js
between(5, 10, 8) //return true
between(5, 10, 10) //return true
between(5, 10, 11) //return false
between(5, 10, 10, true) //return false
between(5, 10, 5, true) //return false
```
## defined
<span class='return'>defined( value ) ></span> Boolean

detect if a value is defined.
```js
const x = 42
const y = 'Gandalf'
const z = { name: 'dragon', attack: 10 }
const isNull = null
const isUndefined = undefined
const stringEmpty = ''
defined(x) //return true
defined(y) //return true
defined(z) //return true
defined(isNull) //return false
defined(stringEmpty) //return false
defined(isUndefined) //return false
```
## equal
<span class='return'>equal( value1, value2 ) ></span> Boolean

test deep equal between value1 and value2, return true if strict equality
```js
const x = 42
equal(x, 42) //return true
equal(x, 43) //return false

const y = 'Gandalf'
equal(y, 'Gandalf') //return true
equal(y, 'gandalf') //return false

const z = { name: 'dragon', attack: 10 }
equal(z, { name: 'dragon', attack: 10 }) //return true
equal(z, { name: 'dragon', attack: 5 }) //return false
```
## gt
<span class='return'>gt( limit, value ) ></span> Boolean

Test value greater strict than limit
```js
gt(10, 9) //return false
gt(10, 11) //return true
const limit = gt(5)
limit(10) //return true
limit(5) //return false
```
## gte
<span class='return'>gte( limit, value ) ></span> Boolean

Test value greater or equal than limit
```js
gte(10, 9) //return false
gte(10, 11) //return true
const limit = gte(5)
limit(10) //return true
limit(5) //return true
```
## is
<span class='return'>is( type, value ) ></span> Boolean

test if value is typeof type
```js
const x = [42]
is('array', x) //return true
is('array', { name: 'Gandalf' }) //return false
```

## isInt
<span class='return'>isInt( value ) ></span> Boolean

Is alias to test int value
```js
const x = 42
isInt(x) //return true
isInt(42.5) //return false
```
## isNumber
<span class='return'>isNumber( value ) ></span> Boolean

Is alias to test number value
```js
const x = 42
isNumber(x) //return true
isNumber(42.5) //return true
isNumber('42') //return false
```
## isString
<span class='return'>isString( value ) ></span> Boolean

Is alias to test string value
```js
const x = 42
isString(x) //return false
isString(42.5) //return false
isString('42') //return true
```
## lt
<span class='return'>lt( limit, value ) ></span> Boolean

Test value less strict than limit
```js
lt(10, 9) //return true
lt(10, 11) //return false
const limit = lt(5)
limit(4) //return true
limit(5) //return false
```
## lte
<span class='return'>lte( limit, value ) ></span> Boolean

Test value less or equal than limit
```js
lte(10, 9) //return true
lte(10, 11) //return false
const limit = lte(5)
limit(5) //return true
limit(4) //return true
```
