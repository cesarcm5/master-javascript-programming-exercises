// Write your function here
function keep(array, keeper) {
    let newArr = array.filter((number) => number === keeper )
    return newArr
}
let output = keep([1, 2, 3, 2, 1], 2)
console.log(output);