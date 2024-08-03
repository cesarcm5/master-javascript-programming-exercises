function getLongestWordOfMixedElements(arr) {
    // your code here
    let LongestWord = ''
    for (let element of arr){
        if (typeof element === 'string' && element > LongestWord ){
            LongestWord = element;
        }
    }
    return LongestWord
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
