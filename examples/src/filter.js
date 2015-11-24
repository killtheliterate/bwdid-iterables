
// vendor
import debug from 'debug'

// lib
import * as Infinity from './lib/infinity'
import * as Iterated from './lib/linked_list.iterated'
import filter from './lib/filter'

const log = debug('bwdid:filter')

// Filter
// ---------------------------------------------------------------------------
export default function() {
    log('Filtering iterators/iterables')
    log('---------------------------------------------------------------------')

    const isEven = filter(el => el % 2 === 0)
    const toBeFiltered = Iterated.List()

    for(let x of [2, 3, 4, 5, 6, 7]) {
        toBeFiltered.add(x)
    }

    const filterSource = Iterated.makeLinkedListIterator(toBeFiltered)

    const filtered = isEven(filterSource)
    const otherFiltered = isEven([101, 202, 303, 404])

    const toFilterInfinity = Infinity.allsGen()
    const infiniteEvens = isEven(toFilterInfinity)

    log('iterator filtered', [...filtered])
    log('iterable filtered', [...otherFiltered])
    log('infinity filtered', infiniteEvens.next())
    log('infinity filtered', infiniteEvens.next())
    log('infinity filtered', infiniteEvens.next())
    log('\n')
}
