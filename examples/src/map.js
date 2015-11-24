
// vendor
import debug from 'debug'

// lib
import * as Infinity from './lib/infinity'
import * as Iterated from './lib/linked_list.iterated'
import map from './lib/map'

const log = debug('bwdid:main')

// Map
// ---------------------------------------------------------------------------
export default function() {
    log('Mapping over iterables/iterators')
    log('---------------------------------------------------------------------')

    const doubler = map(el => el * 2)
    const toBeMapped = Iterated.List()

    for(let x of [1, 2, 3]) {
        toBeMapped.add(x)
    }

    const mapSource = Iterated.makeLinkedListIterator(toBeMapped)

    const doubled = doubler(mapSource)
    const otherDoubled = doubler([100, 200, 300])

    const toDoubleInfinity = Infinity.allsGen()
    const infinityTwiceAsLarge = doubler(toDoubleInfinity)

    log('iterator mapped', [...doubled])
    log('iterable mapped', [...otherDoubled])
    log('infinity mapped', infinityTwiceAsLarge.next())
    log('\n')
}
