
// vendor
import debug from 'debug'

// lib
import * as Iterable from './linked_list.iterable'
import * as Iterated from './linked_list.iterated'
import infinity from './infinity'
import map from './map'

const log = debug('bwdid:main')


// Working on something we intend to iterate
// ---------------------------------------------------------------------------
log('A list. We define consumer')
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

// Working with something that defined its own iteration protocol
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

for(let el of iterableList) {
    log('for-of', el)
}

log('spread operator', [...iterableList])

log('\n')

// Map/Filter/Reduce
// ---------------------------------------------------------------------------

log('map/filter/reduce')
log('---------------------------------------------------------------------------')
const doubler = map(el => el * 2)
const toBeMapped = Iterated.List()

for(let x of [1, 2, 3]) {
    toBeMapped.add(x)
}

const mapSource = Iterated.makeLinkedListIterator(toBeMapped)

const doubled = doubler(mapSource)
const otherDoubled = doubler([100, 200, 300])

log('iterator doubled', [...doubled])
log('iterable doubled', [...otherDoubled])

const toDoubleInfinity = infinity()
const infinityTwiceAsLarge = doubler(toDoubleInfinity)

log('\n')

log('Doubling infinity')
log('infinity doubled', infinityTwiceAsLarge.next())
log('infinity doubled', infinityTwiceAsLarge.next())
log('infinity doubled', infinityTwiceAsLarge.next())
