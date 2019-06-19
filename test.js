// Packages
import test from 'ava'
import currenci from 'currenci'

// Root
import m from '.'

const fn = code => m(`I have ${code}300`)

test('find currency code', t => currenci.list.map(({ code }) => t.is(fn(code), code)))
test('fail to find currency code', t => t.falsy(m('I have')))
