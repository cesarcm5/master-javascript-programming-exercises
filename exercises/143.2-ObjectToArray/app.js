function listAllValues(obj) {
  // your code here
  let aux =[]
  for (let e in obj){
    aux.push(obj[e])
  }
  return aux
}
let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
