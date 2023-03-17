// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
    // given a number 
    // if number is between 0 and 211 return "is below boiling point"
    // if number is between 212 and 349 return "is at boiling point"
    // if number is 350 or higher return "above boiling point"
    // output will be "is below"

const temperature1 = (number) => {
    if (number <= 211) {
        return `${number} is below boiling point` 
    } else if (number === 212) {
        return `${number} is at boiling point`
    } else {
        return `${number} is above boiling point`
    }
}
console.log(temperature1(42)) // -- output: 42 is below boiling point
console.log(temperature1(350)) // -- output: 350 is above boiling point
console.log(temperature1(212)) // -- output: 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
    // declare 2 separate arrays (array1, array2)
    // combine arrays into one array using concat
    // figure out which array is longest

    const padres1984WorldSeriesRuns1 = [2, 5, 2, 2, 4];
    const padres1984WorldSeriesRuns2 = [6, 3, 5, 3];
    const combinedArray = padres1984WorldSeriesRuns1.concat(padres1984WorldSeriesRuns2);
        console.log(combinedArray.length);


// Expected output: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
    // define the string "Bravo 2023" within (str)
    // use split to convert string to array
    // use reverse to change the order of the array
    // use join to turn it back into a string and store it in reversedStr

const str = "Bravo 2023"; {
const reversedStr = str.split("").reverse().join("");
    console.log(reversedStr)
}
// Expected output: "3202 ovarB"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
