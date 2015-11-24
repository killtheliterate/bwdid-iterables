
// vendor
import debug from 'debug'

// lib
import * as Iterated from './lib/linked_list.iterated'

const log = debug('bwdid:iterator')

// Iterator
// ---------------------------------------------------------------------------
export default function() {
    log('An interator for a list')
    log('---------------------------------------------------------------------')

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
}
