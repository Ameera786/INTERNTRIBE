function negativeNumbers(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.push(arr[i])
        }
    }
    return result
}
function replace(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            result.push(0)
        } else {
            result.push(arr[i])
        }
    }
    return result
}

let input1 = [5, 2, -7, 3, -2, -1]
let negatives = negativeNumbers(input1)
console.log("Negative numbers:", negatives)

let input2 = [5, 10, 15, 20, 22, 23]
let replaced = replace(input2)
console.log("Replacing odd numbers with 0:", replaced)
