'use strict'

import test from 'ava'
import m from './'

test(t => {
  t.is(m('I have USD300'), 'USD')
  t.is(m('I have 300 EUR'), 'EUR')
  t.false(m('I have'))
})
