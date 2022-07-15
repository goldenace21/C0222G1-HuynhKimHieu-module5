var array = [0, 1];
var sum = 0;
function fibonacci(number) {
    if (number == 1 || number == 2) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}
for (var i = 1; i <= 20; i++) {
    array.push(fibonacci(i));
    sum += fibonacci(i);
}
console.log(array.toString());
console.log("sum:" + sum);
