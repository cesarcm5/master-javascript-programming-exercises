function removeOddValues(obj) {
    // your code here
    for (let number in obj) {
      if (obj[number] % 2 != 0){
        delete obj[number];
      }
    }
    return obj
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
