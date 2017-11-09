import chai from 'chai'
import {
    defined,
    notDefined
} from '../src/junctions/Relation'




const assert = chai.assert

describe('relation test', function () {

    it('should test if value is defined', () => {
        let a = 'true'
        assert.isTrue(defined()(a))
    })
    

})