/**
 * Created by MyVyrus on 9/15/14.
 */


var woodNeeded = prompt("How much wood do you need?");
//assigning var to woodNeeded
var space = prompt("how much space do you have to farm it?");
//assigning space var to a prompt
var time = prompt("how much time do you have?");
//assigning time var to a prompt
var total = (space*time);
//adding space and time in a var
(total>=woodNeeded)?console.log("you will have enough."):console.log("You will NOT have enough.");
//using a ternary statement for, if total is less than woodNeeded.
if (isNaN(woodNeeded)){
    console.log("Please enter a valid number");
}
if (isNaN(space||space==="")){
        console.log("please enter a valid number");
    }
if (isNaN(time)||time===""){
    console.log("please enter a valid number");
}
//validation section asking for check of the prompt answer to be a number