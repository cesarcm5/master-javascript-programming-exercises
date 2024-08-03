// Write your function here
function areValidCredentials(name, passwords) {
    if (name.length > 3 && passwords.length >= 8){
        return true 
    }
    else {
        return false
    }
}
let output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output);