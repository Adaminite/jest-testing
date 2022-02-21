function reverse(str){
    let revStr = "";

    for(let i = 0; i < str.length; i++){
        revStr = str.charAt(i) + revStr;
    }

    return revStr;
}

module.exports = reverse;