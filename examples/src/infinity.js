
const infinity = function* () {
    let i = 1
    let infinity = true

    while(infinity) {
        yield i++
    }
}

export default infinity
