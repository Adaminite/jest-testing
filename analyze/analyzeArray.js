function analyze(arr){

    if(arr.length === 0){
        return "ERROR";
    }

    let length = arr.length;
    let min = arr[0];
    let max = arr[0];
    let sum = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }

        if(arr[i] > max){
            max = arr[i];
        }

        sum += arr[i];
    }

    let average = sum / length;

    return {
        average, min, max, length
    };
}


module.exports = analyze;