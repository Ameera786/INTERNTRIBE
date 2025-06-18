//Task 1
let numbers1 = [1, 0, 2, 3, 0, 4, 5, 0]
let length1 = numbers1.length
let count = 0

for (let i = 0; i < length1 - count; i++) {
    if (numbers1[i] == 0) {
        if (i == length1 - count - 1) {
            numbers1[length1 - 1] = 0
            length1--
            break
        }
        count++
    }
}

let end = length1 - count - 1
for (let i = end; i >= 0; i--) {
    if (numbers1[i] === 0) {
        numbers1[i + count] = 0
        count--
        numbers1[i + count] = 0
    } else {
        numbers1[i + count] = numbers1[i]
    }
}

console.log("After duplication:" + numbers1);

//  Task 2:
let numbers2 = [5, 10, 20, 2, 0, 33, 100, 90]
let result = []

for (let i = 0; i < numbers2.length; i++) {
    let current = numbers2[i]
    result.push(current)

    if (current % 5 == 0) {
        result.push (parseInt(current / 2))
    }
}

console.log("After inserting:", result);
