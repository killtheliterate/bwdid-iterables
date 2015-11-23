
export default function map(cb) {
    return function* (source) {
        let bail = false
        let iter

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
                yield cb(index.value)
            }
        }
    }
}
