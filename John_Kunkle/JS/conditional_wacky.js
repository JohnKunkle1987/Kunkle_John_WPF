/**
 * Created by MyVyrus on 9/15/14.
 */

var heroes = prompt("how many Dota2 heroes are you able to play well?");
//added var for heroes as a prompt
var possibleHeroes = 112;
//setting possible heroes to 112
var minHeroes = 15;
//setting min heroes to 15
if (heroes<minHeroes) {
//if heroes is less then minHeroes
    alert("Go practice you're a NOOB!!");
}else if (heroes>minHeroes&&heroes<=50){
//if heroes is greater that minheroes and and heroes is less then 50
    console.log("Not bad but you could use a little work.")  ;
}else if(heroes>=51&&heroes<=90){
//if heroes is greater than 51 and less then 90
    console.log("So close you can taste it.");
}else if(heroes>=90&&heroes<=possibleHeroes){
// if heroes is greater than 90 and heroes is less than or equal too possible heroes
    console.log("The student has become the Master")
}

/////validation

else if(isNaN(heroes)||heroes==""){
    console.log("Enter a valid Number")
}else if(heroes>112){
    console.log("LIAR or noob")
}