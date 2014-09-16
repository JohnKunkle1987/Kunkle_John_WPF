/**
 * Created by MyVyrus on 9/15/14.
 */


var totalEarned = prompt("How much was your total sales?");
//set totalEarned to prompt
var tipEstimated = (totalEarned*.16);
//set tipEstimated to 16% of total
var gas = 20;
//assigned gas to set amount
var food = 15;
//assigned food to set amount
var beer = 30;
//assigned beer to set amount
if(totalEarned>2000||tipEstimated<=food){
//asking if total is over 2000 or tips estimated is under the cost of food.
    console.log("You have earned many drinks, forget this night.")
}
else if (tipEstimated<=gas+food+beer){
//asking if 16% of the total is less than gas food and beer
    console.log("You have NOT earned a drink.");
}else if(tipEstimated<=gas+food){
//asking if 16% is less then gas and food
    console.log("Get your ass home.");

}else if(tipEstimated>=gas+food+beer){
//asking if 16% is more than gass food and beer
    console.log("Grats on a good night go have a beer");
}
else if(totalEarned>2000||tipEstimated<=food){
//asking if total is over 2000 or tips estimated is under the cost of food.
    console.log("You have earned many drinks, forget this night.")
}
if ((isNaN(totalEarned)||totalEarned==="")){

    alert("You must enter a valid Number");
}
//validate on total earned as real number.