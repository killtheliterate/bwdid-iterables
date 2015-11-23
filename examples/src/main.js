
// vendor
import debug from 'debug'

// lib
import * as Iterable from './linked_list.iterable'
import * as Iterated from './linked_list.iterated'
import filter from './combo.filter'
import infinity from './infinity'
import map from './combo.map'
import reduce from './combo.reduce'

const log = debug('bwdid:main')


// Iterator
// ---------------------------------------------------------------------------
log('Iterator')
log('---------------------------------------------------------------------------')

const iteratedList = Iterated.List()

for(let x of [1, 2, 3]) {
    iteratedList.add(x)
}

const iteratedList_iterator = Iterated.makeLinkedListIterator(iteratedList)

log('iteratedList:next', iteratedList_iterator.next())
log('iteratedList:next', iteratedList_iterator.next())
log('iteratedList:next', iteratedList_iterator.next())
log('iteratedList:done', iteratedList_iterator.next())
log('\n')

// Iterable
// ---------------------------------------------------------------------------
log('An iterable list')
log('---------------------------------------------------------------------------')

const iterableList = Iterable.IterableList()

for(let x of [1, 2, 3]) {
    iterableList.add(x)
}

const iterableList_iterator = iterableList[Symbol.iterator]()

log('iterableList:next', iterableList_iterator.next())
log('iterableList:next', iterableList_iterator.next())
log('iterableList:next', iterableList_iterator.next())
log('iterableList:done', iterableList_iterator.next())
log('spread operator', [...iterableList])

for(let el of iterableList) {
    log('for-of', el)
}

log('\n')

// Combinators
// ---------------------------------------------------------------------------
log('map/filter/reduce')
log('---------------------------------------------------------------------------')

log('map------------------------------------------------------------------------')

const doubler = map(el => el * 2)
const toBeMapped = Iterated.List()

for(let x of [1, 2, 3]) {
    toBeMapped.add(x)
}

const mapSource = Iterated.makeLinkedListIterator(toBeMapped)

const doubled = doubler(mapSource)
const otherDoubled = doubler([100, 200, 300])

const toDoubleInfinity = infinity()
const infinityTwiceAsLarge = doubler(toDoubleInfinity)

log('iterator mapped', [...doubled])
log('iterable mapped', [...otherDoubled])
log('infinity mapped', infinityTwiceAsLarge.next())
log('\n')

log('filter---------------------------------------------------------------------')

const isEven = filter(el => el % 2 === 0)
const toBeFiltered = Iterated.List()

for(let x of [2, 3, 4, 5, 6, 7]) {
    toBeFiltered.add(x)
}

const filterSource = Iterated.makeLinkedListIterator(toBeFiltered)

const filtered = isEven(filterSource)
const otherFiltered = isEven([101, 202, 303, 404])

const toFilterInfinity = infinity()
const infiniteEvens = isEven(toFilterInfinity)

log('iterator filtered', [...filtered])
log('iterable filtered', [...otherFiltered])
log('infinity filtered', infiniteEvens.next())
log('infinity filtered', infiniteEvens.next())
log('infinity filtered', infiniteEvens.next())

log('reduce---------------------------------------------------------------------')
const add = (a, b) => a + b
const sum = reduce(add)(0)

const toBeSummed = Iterated.List()

for(let x of [1, 2, 3]) {
    toBeSummed.add(x)
}

const reduceSource = Iterated.makeLinkedListIterator(toBeSummed)
const summed = sum(reduceSource)

const intermediate = [...summed]

const toReduceInfinity = infinity()
const infiniteReduced = sum(toReduceInfinity)

log('iterator reduced', intermediate[intermediate.length - 1])

log('infinity reduced', infiniteReduced.next())
log('infinity reduced', infiniteReduced.next())
log('infinity reduced', infiniteReduced.next())
