function findShortestElement(arr) {
    // your code here
    if (arr.length == 0) return '';
    let aux = 'eeeee';
    for (let e of arr){
        if (e.length < aux.length) aux = e
    }
    return aux
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'