import chai from 'chai'
import {
    pipe,
    curry
} from '../src/junctions/Function'

import {
    merge,
    mergeAll
} from '../src/junctions/Object'
import {
    add

} from '../src/junctions/Math'


const assert = chai.assert

describe('functions test', function () {
    it('currying', () => {
        let add = (x, y) => x + y
        let o = curry(add);
        assert.equal(o(2)(3), 5, 'result curry')
    })

    it('merge', () => {
        let o = merge({
            a: 1
        }, {
            b: 2
        })
        assert.deepEqual(o, {
            a: 1,
            b: 2
        }, 'simple merge')

    })
    it('merge curry', () => {
        let myMerge = curry(merge)
        let o = myMerge({
            a: 1
        })({
            b: 2
        })
        assert.deepEqual(o, {
            a: 1,
            b: 2
        }, 'simple curry merge')

    })
    it('merge all', () => {
        let o = mergeAll([{
                a: 1
            }, {
                b: 2
            },
            {
                c: 2
            }
        ])
        assert.deepEqual(o, {
            a: 1,
            b: 2,
            c: 2
        }, 'merge all')

    })



})