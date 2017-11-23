import chai from 'chai'
import * as J from '../src/index'

import {
    add, is
} from '../src/index'

const assert = chai.assert

describe("New CURRY test", function () {
   it('add normal', ()=> {
        const a = add(2,3)
        assert.equal(a, 5)
   })
   it('add currying', ()=> {
    const b = add(2)
    assert.equal(b(3), 5)
})
it('is', ()=> {
    const z = is('string', 'test')
    const ze = is('string')
    assert.isTrue(z)
    assert.isTrue(ze('lalala'))
})


})