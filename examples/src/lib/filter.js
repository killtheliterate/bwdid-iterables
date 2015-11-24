export default function filter(cb) {
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
                if (cb(index.value)) {
                    yield index.value
                }
            }
        }
    }
}
