let array: number [] = [0, 1];
let sum: number = 0;
function fibonacci(number:number): number {
    if (number == 1 || number == 2){
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
for (let i = 1; i <= 20 ; i++) {
    array.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log(array.toString());
console.log("sum:" + sum);