
// vendor
import debug from 'debug'

// lib
import * as Iterable from './lib/linked_list.iterable'

const log = debug('bwdid:iterable')

// Iterable
// ---------------------------------------------------------------------------
export default function() {
    log('An iterable list')
    log('---------------------------------------------------------------------')

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
}
