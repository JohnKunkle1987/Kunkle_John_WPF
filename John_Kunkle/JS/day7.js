/**
 * Created by MyVyrus on 9/17/14.
 */

//////////LOOPS
// while loops though a block of code until the condition is true.
/*
var countIs = 0;
//Starting counter at 0
//While condition is true, loop will run
//When condition is false, loop will stop
while(countIs<200){

    console.log("counter is counting")
    countIs++ // counts until condition is false
}


//Do while loops
//The do/while loops is a variant of the while loop.
//This loops will exicute the code block once, before checking if the condition is true.
//then is will repeat


var i = 0;
//set var to hold our value

do{

    console.log("The number is " + i);
    i++
}
while(i<10);


//Basic for loop
//for (intialization, condition, increment of change)
//we use i frequently because it stands for iteration

for(var i =0;i<20;i+=4){
//for loop intializes the variable i, sets the condition, i is less then 20 and adds increment of change + 4
    console.log("i = " + i);
//show value of i
//run as long as i is less than 20
}

//break

for(var j = 0; j<5; j++){
    if(j==2){

        break;//stops the loop form cycling
    }

    console.log("j is = "+ j);
}

*/
// cycle through array using for loop
var names = ["scooby", "shaggy", "velma", "fred", "daphne"]

for(var i=0; i<names.length; i++){

    console.log("You solved the case "+ names[i]+"!")
}
