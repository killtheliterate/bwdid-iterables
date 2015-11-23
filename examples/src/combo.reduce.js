
export default function map(cb) {

    return function(acc) {

        return function* (source) {
            let bail = false
            let iter
            let loc = acc

            if(source[Symbol.iterator]) {
                iter = source[Symbol.iterator]()
            } else {
                iter = source
            }

            while (!bail) {
                let index = iter.next()

                if (index.done) {
                    bail = true
                } else {
                    yield loc = cb(loc, index.value)
                }
            }
        }
    }
}
