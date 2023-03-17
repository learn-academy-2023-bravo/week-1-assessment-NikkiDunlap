// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: It will log all of the colors plus indigo
// b) Verify and explain: The output was 5 because .push returns the length of the new array. 

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: It will tell us the length of the string
// b) Verify and explain: The output uses .length to determine that 10 is the number of characters in the string.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: It will give us the output of the character at index 4
// b) Verify and explain: The index at 4 is the letter "o"

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: It will give "Ruby"
// b) Verify and explain: When we call the `languages[index],` we are pulling the string from the element at index 1. 

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: We will receive an error
// b) Verify and explain: .toUpperCase can only be called on strings; however, `weekendDays` is an array.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: We will receive "number"
// b) Verify and explain: the `.length` will return a number, which is 4. However, dataTypes is an array of strings. 
