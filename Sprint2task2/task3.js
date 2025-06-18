// Iteration
console.log("Sum of Current and Previous Numbers 1 to 10")
let previous = 0

for (let current = 1; current <= 10; current++) {
    let sum = current + previous
    console.log("Current: " + current + ", Previous: " + previous + ", Sum: " + sum);
    previous = current;
}

// Counting odd and even nos. from 10 to 55
let evenCount = 0;
let oddCount = 0;

for (let i = 10; i <= 55; i++) {
    if (i % 2 == 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Even nos count: " + evenCount);
console.log("Odd nos count: " + oddCount);
