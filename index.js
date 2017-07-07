'use strict'

const currenci = require('currenci')

module.exports = str => {
  let index
  currenci.list.filter(currency => {
    if (str.toUpperCase().indexOf(currency.code) >= 0) {
      index = str.toUpperCase().indexOf(currency.code)
      return index
    }

    return false
  })

  const currency = str.substring(index, index + 3).toUpperCase()

  return currency ? currency : false
}
