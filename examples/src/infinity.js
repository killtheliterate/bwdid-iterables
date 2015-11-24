export function* allsGen() {
    let num = 1
    let infinity = true

    while(infinity) {
        yield num++
    }
}

export function* evensGen() {
    let num = 0
    let infinity = true

    while(infinity) {
        yield num = num + 2
    }
}

export function* zipGen(first, second) {
    let infinity = true

    while(infinity) {
        const firstYield = first.next()
        const secondYield = second.next()

        if (firstYield.done === true && secondYield.done === true) {
            infinity = false
        } else {
            yield {first: firstYield.value, second: secondYield.value}
        }
    }
}
