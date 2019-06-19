// Packages
const currenci = require('currenci')

const findCurrencyCode = text => {
  const curr = currenci.list.filter(currency => {
    const hasCode = text.toUpperCase().includes(currency.code)

    return hasCode
  })[0]

  return curr && curr.code
}

module.exports = findCurrencyCode
