// function findMinimum(a, b) {
//     return Math.min(a, b);
// }
//
// let num1 = 10;
// let num2 = 5;
// console.log("Минимальное число:", findMinimum(num1, num2));


// function getStringLength() {
//     let input = prompt("Введите строку:");
//     console.log("Длина строки:", input.length);
// }
//
// getStringLength();

function  calculator (a, b, operator){
    switch (operator) {
        case"+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b;
            if (b === 0) {
                return "Error!";
            } else {
                return a/b;
            }
        default:
            return "Error!"
    }
}


let num1 = 10;
let num2 = 5;
let op = "+"; // Можно использовать "+", "-", "*", "/"
console.log("Результат:", calculator(num1, num2, op));