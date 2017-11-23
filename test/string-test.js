import chai from 'chai'
import * as J from '../src/index'

const assert = chai.assert

describe("String test", function () {
    it('test extensions', () => {
        let a = ['sapin.jpg', 'toto.doc', 'lapin.svg']
        const b = ['.jpg', '.mp4', '.jpeg', '.doc']
        
        let extension = J.getStringExtension('sapin.txt')


        console.log(a.map(J.getStringExtension))
        //a.map()
        return b.some(i => i === extension)
    })
})