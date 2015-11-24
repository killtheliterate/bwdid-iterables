
// vendor
import debug from 'debug'

// lib
import * as Infinity from './lib/infinity'

const log = debug('bwdid:infinity')

// Infinity
// ---------------------------------------------------------------------------
export default function() {
    log('Infinity')
    log('---------------------------------------------------------------------')

    const alls = Infinity.allsGen()
    const evens = Infinity.evensGen()

    const allsAndEvens = Infinity.zipGen(alls, evens)

    log('infinity', allsAndEvens.next())
    log('infinity', allsAndEvens.next())
    log('infinity', allsAndEvens.next())
    log('\n')
}
