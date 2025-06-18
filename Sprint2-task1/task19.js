let size = 5;

//Right-Angled Triangle
console.log("Right-Angled Triangle:")
for (let i = 1; i <= size; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
        row += "*"
    }
    console.log(row)
}

// Square Pattern
console.log("Square Pattern:")
for (let i = 1; i <= size; i++) {
    let row = ""
    for (let j = 1; j <= size; j++) {
        row += "*"
    }
    console.log(row)
}

// Pyramid Pattern
console.log("Pyramid Pattern:")
for (let i = 1; i <= size; i++) {
    let row = ""
    for (let j = 1; j <= size - i; j++) {
        row += " "
    }
    for (let k = 1; k <= (2 * i - 1); k++) {
        row += "*"
    }
    console.log(row)
}
