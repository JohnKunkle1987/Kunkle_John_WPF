/**
 * Created by MyVyrus on 9/15/14.
 */

var heroes = prompt("how many Dota2 heroes are you able to play well?");

var possibleHeroes = 112;

var minHeroes = 15;

if (heroes<minHeroes) {

    alert("Go practice you're a NOOB!!");
}else if (heroes>minHeroes&&heroes<=50){

    console.log("Not bad but you could use a little work.")  ;
}else if(heroes>=51&&heroes<=90){

    console.log("So close you can taste it.");
}else if(heroes>=90&&heroes<=possibleHeroes){

    console.log("The student has become the Master")
}

/////validation

else if(isNaN(heroes)||heroes==""){
    console.log("Enter a valid Number")
}else if(heroes>112){
    console.log("LIAR or noob")
}