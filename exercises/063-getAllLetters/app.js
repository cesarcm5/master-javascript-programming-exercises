function getAllLetters(str) {
    // your code here
    let character = [];
    for (let i = 0; i < str.length; i++){
        character.push(str[i])
    }
    return character
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
