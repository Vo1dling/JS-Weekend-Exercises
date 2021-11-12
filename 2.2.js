function binaryConverter(array) {
    let binary = array.join("")
    return parseInt(binary, 2)
}
console.log(binaryConverter([0, 0, 0, 1]))