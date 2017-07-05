# find-currency-code [![Build Status](https://travis-ci.org/bukinoshita/find-currency-code.svg?branch=master)](https://travis-ci.org/bukinoshita/find-currency-code)

> Find currency code from given string


## Install

```
$ npm install --save find-currency-code
```


## Usage

```js
const findCurrencyCode = require('find-currency-code')

findCurrencyCode('I have USD300')
// => USD

findCurrencyCode('I do not have money')
// => false
```


## API

### findCurrencyCode(input)

Returns a `string`

#### input

Type: `string`<br/>
Required


## Related

- [transform-currency](https://github.com/bukinoshita/transform-currency) — Transform currency code to symbol
- [has-currency-code](https://github.com/bukinoshita/has-currency-code) — Check if given string has currency code
- [currenci](https://github.com/bukinoshita/currenci) — List of currencies and get random currency


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
