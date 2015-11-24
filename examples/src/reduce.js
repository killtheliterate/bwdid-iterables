
// vendor
import debug from 'debug'

// lib
import * as Infinity from './lib/infinity'
import * as Iterated from './lib/linked_list.iterated'
import reduce from './lib/reduce'

const log = debug('bwdid:main')

// Map
// ---------------------------------------------------------------------------
export default function() {
    log('Reducing iterables/iterators')
    log('---------------------------------------------------------------------')

    const add = (a, b) => a + b
    const sum = reduce(add)(0)

    const toBeSummed = Iterated.List()

    for(let x of [1, 2, 3]) {
        toBeSummed.add(x)
    }

    const reduceSource = Iterated.makeLinkedListIterator(toBeSummed)
    const summed = sum(reduceSource)

    const intermediate = [...summed]

    const toReduceInfinity = Infinity.allsGen()
    const infiniteReduced = sum(toReduceInfinity)

    log('iterator reduced', intermediate[intermediate.length - 1])

    log('infinity reduced', infiniteReduced.next())
    log('infinity reduced', infiniteReduced.next())
    log('infinity reduced', infiniteReduced.next())
    log('\n')
}
