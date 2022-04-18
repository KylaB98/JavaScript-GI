//VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers.
let x = 12
let y = 7

console.log('The difference between' + x + ' and' + y + " is 5")
//EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.
//let name1 = "Jonn";
//let name2 = "Amanda";

//if(name2.length > name1.length) {
//    console.log("The name Amanda is longer than John by " + (name2.length - name1.length) + " characters")
//} else {
//    console.log("No answer")
//}

//MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
//let userInput = prompt("Enter Text");

//if (userInput === userInput.toUpperCase()){
//    console.log("User is shouting")
//} else if (userInput === userInput.toLowerCase()){
//    console.log("User is whispering")
// }else {
//     console.log("User is speaking normally")
// }

 //HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.
 function addNumbers(num1, num2) {
     return num1 + num2; ;
 }
function subtractNumbers(num1, num2) {
    return num1 - num2; ;
}
function multiplyNumbers(num1, num2) {
    return num1 * num2; ;
}
function divideNumbers(num1, num2) {
    return num1 / num2; ;
}

//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form.
 const num1 = parseFloat(prompt("Please enter your first number"));
 const operator =prompt("Please choose operator (either +, -, *, or /)");
 const num2 = parseFloat(prompt("Please enter your second number"));

 let result;

 if(operator == '+') {
     result = addNumbers
 }
 else if (operator == '-') {
     result = subtractNumbers
 }
 else if (operator == '*') {
     result = multiplyNumbers
 }
 else if (operator == '/') { 
     result = divideNumbers
    };
   

alert(`${num1} ${operator} ${num2} = ${result}`);