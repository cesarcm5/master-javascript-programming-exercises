// Write your function here
function removeElement(array, discarder){
    let newArray = array.filter((element) => element != discarder)
    return newArray
}
let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output);