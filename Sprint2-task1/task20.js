//Positive and negative numbers
let x = [23, 4, -6, 23, -9, 21, 3, -45, -8]
let positive = []
let negative = []

for (let i = 0; i < x.length; i++) {
    if (x[i] >= 0) {
        positive.push(x[i])
    } else {
        negative.push(x[i])
    }
}

console.log("Original:" + x)
console.log("Positive num:" + positive)
console.log("Negative num:" + negative)

// To check if a character is a vowel or consonant
let char = 'e'
char = char.toLowerCase();

if ("aeiou".includes(char)) {
    console.log(char + " is a vowel")
} else if (char >= 'a' && char <= 'z') {
    console.log(char + " is a consonant")
} else {
    console.log(char + " invalid")
}

// To check if first and last elements are the same
let nums = [10, 20, 30, 40, 10]
let result = (nums[0] == nums[nums.length - 1])

console.log("List:" + nums)
console.log("Same:" + result)
