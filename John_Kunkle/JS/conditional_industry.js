/**
 * Created by MyVyrus on 9/15/14.
 */


var totalEarned = prompt("How much was your total sales?");

var tipEstimated = (totalEarned/.20);

var gas = 20;

var food = 15;

var beer = 30;

if (tipEstimated<=gas+food+beer){

    console.log("You have NOT earned a drink.");
}else if(tipEstimated<=gas+food){
    console.log("Get your ass home.");

}else if(tipEstimated>=gas+food+beer){
    console.log("GO HAVE A DRINK!!");
}
else if(totalEarned>2000||tipEstimated<=food){
    console.log("You have earned many drinks forget this night.")
}