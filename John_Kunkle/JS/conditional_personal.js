/**
 * Created by MyVyrus on 9/15/14.
 */


var woodNeeded = prompt("How much wood do you need?");

var space = prompt("how much space do you have to farm it?");

var time = prompt("how much time do you have?");

var total = (space*time);

(total<=woodNeeded)?console.log("Go farm some more."):console.log("You will have enough.");