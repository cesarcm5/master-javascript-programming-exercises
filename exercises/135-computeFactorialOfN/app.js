function computeFactorialOfN(n) {
    // your code here
    let aux = 1
    for (let i = 1; i <= n; i++) aux *= i
    return aux
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
