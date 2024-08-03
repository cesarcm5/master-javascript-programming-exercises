function findPairForSum(array, number) {
  // your code here
  for (let a = 0; a < array.length ; a++){
    for (let b = 0 ; b < array.length ; b++){
      if (array[a] + array[b] == number){
        return [array[a], array[b]];
      }
    }
  }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]
