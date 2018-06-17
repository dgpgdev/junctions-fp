# String
## containDigit
<span class='return'>containDigit( string ) ></span> Boolean

test if string contain digit
```js
const str = 'picture42'
containDigit(str) //return true
```
## escapeRegExp
<span class='return'>escapeRegExp() ></span> String

escape special char from string to use in regexp
```js
const ext = 'http://test.com'
escapeRegExp(ext) //return 'http:\\/\\/test\\.com'
```
## getStringExtension
<span class='return'>getStringExtension( string ) ></span> String

get an extension from string.
```js
const ext = 'picture.jpg'
getStringExtension(ext) //return '.jpg'
```
## isValidEmail
<span class='return'>isValidEmail( string ) ></span> Boolean

test if string is a valid email
```js
const mail = 'gg@tt.com'
const mail2 = 'gg@ttcom'
isValidEmail(mail) //return true
isValidEmail(mail2) //return false
```
## isValidUrl
<span class='return'>isValidUrl( email ) ></span> Boolean

test if string is a valid url
```js
const url = 'http://test.com'
const url2 = 'http:test.com'
isValidUrl(url)) //return true
isValidUrl(url2) //return false
```
## trim
<span class='return'>trim( string ) ></span>

Trim a string
```js
const ext = ' lala lala '
trim(ext) //return 'lala lala'
```
