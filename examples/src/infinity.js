
const infinity = function* () {
    let i = 0
    let infinity = true

    while(infinity) {
        yield i++
    }
}

export default infinity
