function findSmallestElement(arr) {
    // your code here
    if (arr.length == '') return 0;

    let aux = 999999;
    for (let e of arr){
        if (e < aux) aux = e
    }
    return aux
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1