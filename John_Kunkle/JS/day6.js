/**
 * Created by MyVyrus on 9/15/14.
 */

/*
//// Validating prompts
var min = prompt("Enter a Min number");
var max = prompt ("Enter Max number");

/// test to see that a number was entered

if (min===""){
    console.log("You did not enter a number");
    min = prompt("Please enter a Min number");
}

//inNAN
if (isNaN(min)||min===""){
    min = prompt("PLEASE enter a number min and do not leave blank");
}
if (isNaN(max)||max===""){
    max = prompt("You need to enter a Max number and not leave it blank");
}

var random = Math.random()*(max-min)+min;

console.log(Math.round(random));
*/

var num1 = 9.555;
console.log(num1);
console.log(Math.round(num1));
//round
console.log(Math.ceil(num1));
//round up
console.log(Math.floor(num1));
//Round down
var num2 = Math.random();
console.log(num2);
//Random number 0-1
var num3 = Math.random()*10;
console.log(num3);
//random number 1-10
