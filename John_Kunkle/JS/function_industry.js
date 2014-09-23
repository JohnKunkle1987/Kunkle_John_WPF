/**
 * Created by MyVyrus on 9/22/14.
 */

//area of the computer screen
var length = 15;
var height = 12;
var compScreen = screenArea(length,height);
//setting fun name as screen area
function screenArea(l,h){

   var sArea = l*h;
   return sArea;
//setting return for sArea
}
//console logging the function as the var I set.
console.log("The screen is "+ compScreen + " square inches.");

(compScreen > 300)?console.log("The screen is to big"):console.log("Looks of but are you sure?");
//ternary statement asking questions of the screen size.