function encode(string){

    let cipheredStr = "";

    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z', ' '];
    
    let caesar = [ 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y','Z', 'A', 'B', 'C', ' '];

    for(let i = 0; i < string.length; i++){
        let char = string.charAt(i);
      
        let idx = alphabet.indexOf(char);
        cipheredStr += caesar[idx];
    }

    return cipheredStr;
}
module.exports = encode;