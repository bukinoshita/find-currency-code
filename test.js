'use strict'

import test from 'ava'
import currenci from 'currenci'
import m from './'

test(t => {
  currenci.list.map(currency =>
    t.is(m(`I have ${currency.code}300`), currency.code)
  )
  t.false(m('I have'))
})
