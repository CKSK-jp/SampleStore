// Write a function called add7 that takes one number and returns that number + 7.

function addSeven() {
    let userInput = prompt("Enter a number")
    return console.log(`${userInput} plus 7 is:  + ${Number(userInput) + 7}!`);
}

// Write a function called multiply that takes 2 numbers and returns their product.

function multiply() {
    let x = prompt("Enter a number")
    let y = prompt("Enter another number")
    return console.log(`${x} times ${y} is: + ${(Number(x) * Number(y))}!`);
}

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize() {
    let word = prompt("Enter a word")
    let capitalized = word[0].toUpperCase() + word.substring(1);
    return console.log(capitalized);
}

// Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"

function lastLetter() {
    let word = prompt("Enter a word")
    return console.log(word.slice(-1));
}


// When a user inputs a number
// Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number

function fizzbuzz() {
    let userInput = parseInt(document.getElementById("inputNum").value);
    // Access the HTML element by its ID
    let displayResult = document.getElementById("result");

    for (let i=1; i <= userInput; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            // Set the innerHTML of the element to display the result
            displayResult.innerHTML += "fizzbuzz" + "<br>";
        } else if (i % 3 === 0) {
            displayResult.innerHTML += "fizz" + "<br>";
        } else if (i % 5 === 0) {
            displayResult.innerHTML += "buzz" + "<br>";    
        } else {
            displayResult.innerHTML += i + "<br>";
        }
    }
}
