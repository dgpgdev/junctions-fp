import chai from 'chai'
import {
    pluck,
    map,
    filter,
    flatMap,
    flatFilter,
    all
} from '../src/junctions/List'

import {
    equal,
    gt
} from '../src/junctions/Relation'

import {
    pipe,
    get,
    modify
} from '../src/junctions/Functions'


const assert = chai.assert

describe("List test", function () {
    const ta = [{
        score: 1,
        name: 'alpha'
    }, {
        score: 2,
        name: 'beta'
    }, {
        score: 3,
        name: 'epsilon'
    }]

    it('Pluck score of array', () => {
        let pa = pluck('score')
        assert.isArray(pa(ta), 'pluck return an array')
        assert.deepEqual(pa(ta), [1, 2, 3], 'pluck return an array')
    })
    it('pipe gt score of 1', () => {
        let pa = pipe(pluck('score'), filter(gt(1)))
        assert.isArray(pa(ta), 'pluck return an array')
        assert.deepEqual(pa(ta), [2, 3], 'pluck return an array')
    })
    it('flat map ', () => {
        let a = [
            [1, 2],
            [3, 4],
            [5, [6, 7]]
        ]
        let mapper = x => x + 1
        assert.deepEqual(flatMap(a, mapper), [2, 3, 4, 5, 6, 7, 8])
    })

    it('advance flat map ', () => {
        let a = [{
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "http://placehold.it/600/92c952",
                "thumbnailUrl": "http://placehold.it/150/92c952"
            },
            {
                "albumId": 1,
                "id": 2,
                "title": "reprehenderit est deserunt velit ipsam",
                "url": "http://placehold.it/600/771796",
                "thumbnailUrl": "http://placehold.it/150/771796"
            }
        ]
        let mapper = pipe(modify('title', 'youpi'), modify('url', 'myurl'))
        assert.deepEqual(flatMap(a, mapper), [{
                "albumId": 1,
                "id": 1,
                "title": "youpi",
                "url": "myurl",
                "thumbnailUrl": "http://placehold.it/150/92c952"
            },
            {
                "albumId": 1,
                "id": 2,
                "title": "youpi",
                "url": "myurl",
                "thumbnailUrl": "http://placehold.it/150/771796"
            }
        ])
    })


    it('flat filter ', () => {
        let a = [
            [1, 2],
            [3, 4],
            [5, [6, 7]]
        ]
        let filt = x => x > 3
        assert.deepEqual(flatFilter(a, filt), [4, 5, 6, 7])
    })
    it('advanced flat filter ', () => {
        let a = [{
                "albumId": 1,
                "id": 1,
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "http://placehold.it/600/92c952",
                "thumbnailUrl": "http://placehold.it/150/92c952"
            },
            {
                "albumId": 1,
                "id": 2,
                "title": "reprehenderit est deserunt velit ipsam",
                "url": "http://placehold.it/600/771796",
                "thumbnailUrl": "http://placehold.it/150/771796"
            },
            {
                "albumId": 1,
                "id": 3,
                "title": "officia porro iure quia iusto qui ipsa ut modi",
                "url": "http://placehold.it/600/24f355",
                "thumbnailUrl": "http://placehold.it/150/24f355"
            },
            {
                "albumId": 1,
                "id": 4,
                "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
                "url": "http://placehold.it/600/d32776",
                "thumbnailUrl": "http://placehold.it/150/d32776"
            },
            {
                "albumId": 1,
                "id": 5,
                "title": "natus nisi omnis corporis facere molestiae rerum in",
                "url": "http://placehold.it/600/f66b97",
                "thumbnailUrl": "http://placehold.it/150/f66b97"
            },
            {
                "albumId": 1,
                "id": 6,
                "title": "accusamus ea aliquid et amet sequi nemo",
                "url": "http://placehold.it/600/56a8c2",
                "thumbnailUrl": "http://placehold.it/150/56a8c2"
            },
            {
                "albumId": 1,
                "id": 7,
                "title": "officia delectus consequatur vero aut veniam explicabo molestias",
                "url": "http://placehold.it/600/b0f7cc",
                "thumbnailUrl": "http://placehold.it/150/b0f7cc"
            },
            {
                "albumId": 1,
                "id": 8,
                "title": "aut porro officiis laborum odit ea laudantium corporis",
                "url": "http://placehold.it/600/54176f",
                "thumbnailUrl": "http://placehold.it/150/54176f"
            },
            {
                "albumId": 1,
                "id": 9,
                "title": "qui eius qui autem sed",
                "url": "http://placehold.it/600/51aa97",
                "thumbnailUrl": "http://placehold.it/150/51aa97"
            }
        ]
        let filt = pipe(get('id'), equal(8))
        assert.deepEqual(flatFilter(a, filt), [{
            albumId: 1,
            id: 8,
            title: 'aut porro officiis laborum odit ea laudantium corporis',
            url: 'http://placehold.it/600/54176f',
            thumbnailUrl: 'http://placehold.it/150/54176f'
        }])
    })


    it('test valid all values ', () => {
        let equals3 = equal(3)
        assert.isTrue(all(equals3)([3, 3, 3, 3]))
        assert.isFalse(all(equals3)([3, 3, 1, 3]))
    })


})