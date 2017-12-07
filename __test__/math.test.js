import {
    increment,
    decrement,
    add,
    multiply,
    modulo,
    divide,
    substract,
    negate
} from '../src/index'





describe('[ Math ]', function () {

    it('should test increment  ', () => {
        const x = increment(41)
        expect(x).toBe(42)
    })
    it('should test decrement  ', () => {
        const x = decrement(43)
        expect(x).toBe(42)
    })
    it('should test add  ', () => {
        const x = add(5,2)
        expect(x).toBe(7)
    })
    it('should test substract  ', () => {
        const x = substract(5,2)
        expect(x).toBe(3)
    })
    it('should test divide  ', () => {
        const x = divide(5,2)
        expect(x).toBe(2.5)
    })
    it('should test multiply  ', () => {
        const x = multiply(5,2)
        expect(x).toBe(10)
    })
    it('should test modulo  ', () => {
        const x = modulo(5,2)
        expect(x).toBe(1)
    })
    it('should test negate  ', () => {
        const x = negate(5)
        const y = negate(-5)
        expect(x).toBe(-5)
        expect(y).toBe(5)
    })
})