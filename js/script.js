//Вам нужно написать функцию, которая принимает один параметр.При первом вызове она его запоминает, при втором — суммирует переданный параметр с тем, что передали первый раз и тд.Например: sum(3) = 3; sum(5) = 8; sum(20) = 28
function adder() {
    let sum = 0
    return function (x) {
        sum += x;
        return sum;
    }
}
let result = adder();

console.log(result(3));
console.log(result(5));
console.log(result(20));
console.log(result(10));