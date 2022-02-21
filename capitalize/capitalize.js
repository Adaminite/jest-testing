
function capitalize(str){
    if(str === ""){
        return "";
    }

    let first = str.charAt(0);
    first = first.toUpperCase();

    let second = str.substring(1);

    return first + second;
}

module.exports = capitalize;