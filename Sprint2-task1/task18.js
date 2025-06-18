let number = 5
let factorial = 1

for (let i = 1; i <= number; i++) {
    factorial *= i
}

console.log("Factorial of " + number + " is:" + factorial)

let numbers = [10, 20, 30, 40, 50]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

let average = sum / numbers.length
console.log("Average is:" + average)
