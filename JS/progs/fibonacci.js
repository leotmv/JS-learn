function fibonacciGenerator(n){
    var output = [];
    if (n === 1){
        output.push(0);
    }
    else if (n === 2){
        output.push(0);
        output.push(1);
    }
    else{
        output.push(0);
        output.push(1);
        i = output.length;
        while (i < n){
            output.push(output[i-2] + output[i-1]);
            i++;
        }
    }
    return output;
}
console.log(fibonacciGenerator(20));