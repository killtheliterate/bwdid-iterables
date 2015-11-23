
export default function map(cb) {
    return function* (iter) {
        let bail = false

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
